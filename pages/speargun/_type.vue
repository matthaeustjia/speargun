<template>
  <div class="flex flex-col items-center justify-center content-center">
    <nav class="container bg-grey-light p-3 rounded font-sans w-full m-4">
      <ol class="list-reset flex text-grey-dark">
        <li>
          <nuxt-link to="/" class="text-blue font-bold">Home</nuxt-link>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <nuxt-link to="/speargun" class="text-blue font-bold">Speargun</nuxt-link>
        </li>
        <li v-if="type">
          <span class="mx-2">/</span>
        </li>
        <li v-if="type">{{spearGuns[0].type}}</li>
      </ol>
    </nav>
    <h1
      v-if="type"
      class="uppercase text-5xl tracking-tighter text-black"
    >Our {{spearGuns[0].type}} Range</h1>
    <h1 v-else class="uppercase text-5xl tracking-tighter text-black">All speargun range</h1>
    <div class="container flex flex-row flex-wrap justify-center">
      <SpeargunList :speargun="speargun" :key="speargun.id" v-for="speargun in spearGuns" />
    </div>
  </div>
</template>

<script>
import SpeargunList from "~/components/SpeargunList.vue";

export default {
  data() {
    return {
      type: this.$route.params.type
    };
  },
  head() {
    return {
      title: "Bajoo Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "High quality euro wooden speargun. teak wooden speargun"
        }
      ]
    };
  },
  computed: {
    spearGuns() {
      if (this.type) {
        return this.$store.state.spearguns.all.filter(
          speargun => speargun.type.toUpperCase() === this.type.toUpperCase()
        );
      } else {
        return this.$store.state.spearguns.all;
      }
    }
  },
  components: {
    SpeargunList
  }
};
</script>

<style>
</style>

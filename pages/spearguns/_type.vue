<template>
  <div class="flex flex-col items-center justify-center content-center">
    <nav class="container bg-grey-light p-3 rounded font-sans w-full m-4">
      <ol class="list-reset flex text-grey-dark text-sm md:text-md">
        <li>
          <nuxt-link to="/" class="font-bold">Home</nuxt-link>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <nuxt-link to="/spearguns" class="font-bold">Spearguns</nuxt-link>
        </li>
        <li v-if="type">
          <span class="mx-2">/</span>
        </li>
        <li v-if="type">{{spearGuns[0].type}}</li>
      </ol>
    </nav>
    <div>
      <h1 class="font-semibold tracking-wide text-3xl">Speargun List</h1>
    </div>
    <div class="container flex flex-row flex-wrap">
      <SpeargunType
        :speargunType="speargunType"
        :key="speargunType.name"
        v-for="speargunType in spearGuns"
      />
    </div>
  </div>
</template>

<script>
import SpeargunType from "~/components/SpeargunType.vue";

export default {
  data() {
    return {
      type: this.$route.params.type
    };
  },
  head() {
    return {
      title: "Spearguns List",
      titleTemplate: "%s - Bajoo Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Manufacturer of handmade high quality wooden spearguns.Heavy duty, powerful and built to last speargun."
        }
      ]
    };
  },
  computed: {
    spearGuns() {
      return this.$store.state.spearguns.type;
    }
  },
  components: {
    SpeargunType
  }
};
</script>

<style>
</style>

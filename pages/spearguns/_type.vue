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
    <div class="flex flex-wrap container">
      <div class="w-full lg:w-1/2 p-5 text-sm">
        <p>Your speargun is the most important tool in your spearfishing kit and as such it is important that you put aside at least half of your spearfishing budget to purchase a high quality speargun that will last. You can compromise on certain items of equipment, but not when it comes to a speargun. You get what you pay for, so given your budget at the time buy the best gun you can because the poor man pays twice.</p>
        <p
          class="mt-5"
        >There are two main styles of speargun that are popular amongst today's spearos: the railgun and roller gun. A rail gun is the best place to start as they are accurate and easier to load than a roller gun but a roller gives you more power out of a shorter barrel. For a full run-down hit the 'watch video' button.</p>
      </div>
      <div class="hidden md:block w-full lg:w-1/2 p-5">
        <img src="/img/speargun/euro/3.jpg" alt />
      </div>
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
          content: "List of our high quality wooden spearguns."
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

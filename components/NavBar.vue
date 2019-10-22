<template>
  <div class="uppercase font-sans antialiased" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <nuxt-link to="/">
          <span class="font-semibold text-white text-xl text-bold tracking-widest">Bajoo Speargun</span>
        </nuxt-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block': 'hidden'"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto tracking-widest font-bold"
      >
        <div class="lg:flex-grow"></div>
        <div>
          <nuxt-link
            v-on:click.native="toggle"
            to="/speargun"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >Spearguns</nuxt-link>
          <nuxt-link
            v-on:click.native="toggle"
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >Contact US</nuxt-link>
          <nuxt-link
            v-on:click.native="toggle"
            to="/gallery"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >Gallery</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
nav {
  background: rgba(45, 45, 45, 9);
}
.nuxt-link-active {
  color: rgba(255, 165, 0, 1);
}
</style>

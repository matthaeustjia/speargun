<template>
  <div class="uppercase font-sans antialiased" id="app">
    <nav
      class="text-coffee flex-wrap flex lg:flex-col items-center justify-between px-6 py-2 lg:pt-10 lg:pb-5"
    >
      <div class="flex items-center flex-shrink-0 mr-6 lg:pb-10">
        <nuxt-link to="/">
          <span class="font-semibold text-xl text-bold tracking-widest">Bajoo Speargun</span>
        </nuxt-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded border-teal-400 hover:border-white"
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
            to="/spearguns"
            class="block mt-4 lg:inline-block lg:mt-0 mr-8"
          >Spearguns</nuxt-link>
          <nuxt-link
            v-on:click.native="toggle"
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 mr-8"
          >Contact US</nuxt-link>
          <nuxt-link
            v-on:click.native="toggle"
            to="/gallery"
            class="block mt-4 lg:inline-block lg:mt-0 mr-8"
          >Gallery</nuxt-link>
          <nuxt-link
            v-on:click.native="toggle"
            to="/cart"
            class="block mt-4 lg:inline-block lg:mt-0 mr-8"
          >
            Cart
            <sup v-if="totalItems > 0">({{totalItems}})</sup>
          </nuxt-link>
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
  computed: {
    totalItems() {
      return this.$store.getters["cart/totalItemsInCart"];
    }
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
  background: rgba(64, 53, 55, 1);
}
.nuxt-link-active {
  color: #de6b35;
}
.text-coffee {
  color: #d9cec1;
}
</style>

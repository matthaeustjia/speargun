<template>
  <div class="flex flex-col items-center justify-center content-center">
    <div class="cover-img w-full">
      <img class="cover" src="~/assets/img/cover.jpg" alt="cover" />
      <div class="cover-text flex w-full justify-center text-center items-center tracking-widest">
        <h1 class="w-full text-xl md:text-3xl text-white uppercase">Bajoo Wooden Speargun</h1>
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
  computed: {
    spearGuns() {
      return this.$store.state.spearguns.type;
    }
  },
  head() {
    return {
      title: "Bajoo Wooden Speargun",
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
  components: {
    SpeargunType
  }
};
</script>

<style scoped>
.cover-img {
  position: relative;
  opacity: 1;
}

.cover-text {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cover {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
  object-position: center;
}
</style>

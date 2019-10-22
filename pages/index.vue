<template>
  <div class="flex flex-col items-center justify-center content-center">
    <img class="cover" src="~/assets/img/cover.jpg" alt="cover" />
    <div class="container flex flex-row flex-wrap justify-center">
      <SpeargunType :speargunType="speargunType" v-for="speargunType in spearGuns" />
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
            "Bajoo High quality teak, and ironwood spearguns. Best wooden speargun australia"
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
.cover {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
  object-position: center;
}
</style>

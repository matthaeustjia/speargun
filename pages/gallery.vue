<template>
  <div class="flex flex-col items-center">
    <div class="uppercase text-2xl md:text-4xl tracking-tighter text-black mb-5">
      <h1>GALLERY</h1>
    </div>
    <div class="flex flex-col items-center">
      <client-only>
        <LightGallery :images="images" :index="index" :disable-scroll="true" @close="index = null" />
      </client-only>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Gallery",
      titleTemplate: "%s - Bajoo Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Gallery of bajoo wooden speargun"
        }
      ]
    };
  },
  data: function() {
    return {
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff"
      ],
      index: null
    };
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>

<template>
  <div class="flex flex-col items-center">
    <div>
      <h1 class="tracking-wide text-5xl">GALLERY</h1>
    </div>
    <div>
      <div
        class="image w-full"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + currentImage + ')', width: '800px', height: '400px' }"
      ></div>
    </div>
    <div>
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="currentImage = image"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      currentImage: "https://dummyimage.com/800/ffffff/000000",
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
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

<template>
  <div class="flex flex-col items-center justify-center content-center">
    <nav class="container bg-grey-light p-3 rounded font-sans w-full m-4">
      <ol class="list-reset flex text-grey-dark text-sm md:text-md">
        <li>
          <nuxt-link to="/" class="text-blue font-bold">Home</nuxt-link>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <nuxt-link to="/speargun" class="text-blue font-bold">Speargun</nuxt-link>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <nuxt-link :to="/speargun/+ spearGun.type" class="text-blue font-bold">{{spearGun.type}}</nuxt-link>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <span>{{spearGun.name}}</span>
        </li>
      </ol>
    </nav>
    <div class="container flex flex-col md:flex-row justify-around flex-wrap w-full">
      <div class="w-full md:w-1/2 px-5 mb-5 flex flex-col">
        <div class="text-2xl text-center flex flex-col font-semibold">
          <h3 class="text-lg tracking-tight font-semibold">Bajoo</h3>
          <h1 class="font-bold">{{spearGun.name}}</h1>
        </div>
        <div class="flex text-center items-center justify-center mb-5">
          <s class="text-red-600 mr-5">
            RRP
            <h2>${{spearGun.retailPrice}}</h2>
          </s>
          <span class="text-blue-800">
            Our Price
            <h2>${{spearGun.price}}</h2>
          </span>
        </div>
        <div class="flex flex-col justify-between">
          <div class="w-full flex justify-around text-lg">
            <h1
              :class="{active: currentOption == 'desc'}"
              class="options font-medium"
              @click="currentOption = 'desc'"
            >Description</h1>
            <h1
              :class="{active: currentOption == 'features'}"
              class="options font-medium"
              @click="currentOption = 'features'"
            >Features</h1>
          </div>
          <div v-if="currentOption == 'desc'">
            <p v-for="desc in spearGun.desc" class="text-xs lg:text-sm mb-5">{{desc}}</p>
          </div>
          <div v-else>
            <ul class="text-xs lg:text-sm list-disc">
              <li v-for="features in spearGun.features">{{features}}</li>
            </ul>
          </div>
          <div class="container flex justify-center">
            <button
              @click="addToCart(spearGun)"
              class="w-full bg-orange-600 hover:bg-orange-800 uppercase text-xl tracking-tightest text-white font-bold py-2 px-2 rounded-sm"
            >Add to cart</button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-5">
        <div class="w-full">
          <img
            @click="imageIndex = currentIndex"
            class="main-image h-180 border"
            :src="currentImage"
          />
        </div>
        <VueGallery :images=" images" :index="imageIndex" @close="imageIndex = null"></VueGallery>
        <div class="w-full flex flex-row flex-wrap">
          <img
            @click="currentIndex = index"
            v-for="image,index in images"
            :key="image.src"
            class="thumbnail"
            :src="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paypal from "~/components/Paypal.vue";
export default {
  data() {
    return {
      imageIndex: null,
      currentOption: "desc",
      currentIndex: 0,
      id: this.$route.params.id
    };
  },
  head() {
    return {
      title: this.spearGun.name + " Wooden Speargun",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "High quality euro wooden speargun. teak wooden speargun" +
            this.spearGun.name
        }
      ]
    };
  },
  computed: {
    spearGun() {
      return this.$store.state.spearguns.all.find(
        speargun => speargun.id === this.id
      );
    },
    images() {
      return this.spearGun.images;
    },
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("cart/pushProductToCart", product);
      this.$notify({
        group: "foo",
        type: "success",
        title: "Added to cart.",
        text: product.name + " has been added to cart"
      });
    }
  },
  components: { Paypal }
};
</script>

<style scoped>
.active {
  border-bottom: 2px solid;
}
.options {
  cursor: pointer;
}
.main-image {
  cursor: zoom-in;
}

img {
  object-fit: cover;
  width: 100%;
  cursor: pointer;
}
.thumbnail {
  max-height: 150px;
  object-fit: contain;
  width: 33%;
  padding: 0.25em;
  margin-left: 0.33%;
  border-width: 1px;
}
</style>

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
      <div class="w-full text-center">
        <h3 class="text-md tracking-tight font-semibold">Bajoo</h3>
        <h1 class="text-2xl font-bold">{{spearGun.name}}</h1>
        <div class="my-5 text-sm flex font-semibold justify-center">
          <div class="mr-5">
            <s class="text-red-600">
              RRP
              <h2>${{spearGun.retailPrice}}</h2>
            </s>
          </div>
          <div>
            Our Price
            <h2>${{spearGun.price}}</h2>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-5">
        <div class="w-full">
          <img class="main-image h-180 border" :src="currentImage" />
        </div>
        <div class="w-full flex flex-row flex-wrap">
          <img
            @click="currentIndex = index"
            v-for="image,index in images"
            :key="image.src"
            class="thumbnail"
            :src="getPic(index)"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
          >Add to cart</button>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-5">
        <div class="flex justify-around m-5 text-lg">
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
      </div>
    </div>
  </div>
</template>

<script>
import Paypal from "~/components/Paypal.vue";
export default {
  data() {
    return {
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
      return require("~/assets/img/" + this.images[this.currentIndex]);
    }
  },
  methods: {
    getPic(index) {
      return require("~/assets/img/" + this.images[index]);
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

@media only screen and (min-width: 768px) {
  .main-image {
    transform-origin: 65% 75%;
    transition: transform 1s, filter 0.5s ease-out;
  }

  /* The Transformation */
  .main-image:hover {
    transform: scale(1.75);
  }
}
img {
  object-fit: cover;
  width: 100%;
  cursor: pointer;
}
.thumbnail {
  width: 33%;
  padding: 0.25em;
  margin-left: 0.33%;
  border-width: 1px;
}
</style>

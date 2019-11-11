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
          <nuxt-link to="/spearguns" class="text-blue font-bold">Spearguns</nuxt-link>
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
      <div class="w-full md:w-1/2 px-5 mb-5 flex flex-col">
        <div class="text-2xl text-center flex flex-col font-semibold">
          <h3 class="text-lg tracking-tight font-semibold">Bajoo</h3>
          <h1 class="font-bold">{{currentSpeargun.name}}</h1>
        </div>
        <div class="w-full flex text-center items-center justify-center mb-5">
          <s class="text-red-600 mr-5">
            RRP
            <h2>${{currentSpeargun.retailPrice}}</h2>
          </s>
          <span class="text-blue-800">
            Our Price
            <h2>${{currentSpeargun.price}}</h2>
          </span>
        </div>
        <div class="flex flex-col justify-between">
          <div class="w-full mb-2 flex justify-around text-lg">
            <div class="radio-toolbar text-xs md:text-sm">
              <span v-for="speargunLength in spearGun.length">
                <input
                  v-model="currentLength"
                  :id="speargunLength.barrelLength"
                  type="radio"
                  :value="speargunLength.id"
                />
                <label :for="speargunLength.barrelLength">{{speargunLength.barrelLength}}</label>
              </span>
            </div>
          </div>
          <div class="w-full mb-2 flex justify-around text-lg">
            <h1 class="font-semibold options">Description</h1>
          </div>
          <div>
            <p v-for="desc in spearGun.desc" class="text-xs lg:text-sm mb-2">{{desc}}</p>
          </div>
          <div>
            <div class="w-full mb-2 flex justify-around text-lg">
              <h1 class="font-semibold options">{{currentSpeargun.name}} Features</h1>
            </div>
            <ul class="text-xs lg:text-sm list-disc mb-5">
              <li v-for="features in spearGun.features">{{features}}</li>
            </ul>
          </div>
          <div v-if="currentLength == null" class="w-full flex justify-center">
            <button
              disabled
              class="rounded-lg w-full bg-gray-600 hover:bg-gray-800 uppercase text-xl tracking-tightest text-white font-bold py-2 px-2 rounded-sm"
            >Select an option</button>
          </div>
          <div v-else class="stickToBottom w-full flex justify-center">
            <button
              @click="addToCart(currentSpeargun, spearGun.images)"
              class="md:rounded-lg w-full bg-orange-600 hover:bg-orange-800 uppercase text-xl tracking-tightest text-white font-bold py-2 px-2 rounded-sm"
            >Add to cart</button>
          </div>
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
      currentLength: null,
      imageIndex: null,
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
          content: this.spearGun.desc
        }
      ]
    };
  },
  computed: {
    currentSpeargun() {
      if (this.currentLength == null) {
        return this.spearGun.length[0];
      }
      return this.spearGun.length.find(
        speargun => speargun.id === this.currentLength
      );
    },
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
    addToCart(product, images) {
      console.log(images);
      this.$store.commit(
        "cart/pushProductToCart",
        Object.assign(product, { images })
      );
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
.options {
  margin: 0.75rem;
  border-bottom: 2px solid;
}
.main-image {
  cursor: zoom-in;
}
.disabled {
  border: 1px solid #999999;
  background-color: grey;
  color: #666666;
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

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  display: inline-block;
  background-color: #ddd;
  padding: 10px 15px;
  border: 1.5px solid #444;
  border-radius: 0.5rem;
}

.radio-toolbar label:hover {
  cursor: pointer;
  background-color: #dfd;
}

.radio-toolbar input[type="radio"]:checked + label {
  background-color: #bfb;
  border-color: #4c4;
}
@media only screen and (max-width: 600px) {
  .stickToBottom {
    position: fixed;
    margin-left: -1.25em;
    bottom: 0px;
  }
}
</style>

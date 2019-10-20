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
        <h3 class="text-md tracking-tight font-semibold">Ghost</h3>
        <h1 class="text-3xl font-bold">{{spearGun.name}}</h1>
        <div class="flex font-semibold justify-center">
          <div class="mr-5">
            <s class="text-red-600">
              RRP
              <h1>${{spearGun.retailPrice}}</h1>
            </s>
          </div>
          <div>
            Our Price
            <h1>${{spearGun.price}}</h1>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-5">
        <div class="w-full">
          <img class="main-image h-180 border" :src="currentImage" />
        </div>
        <div class="w-full flex flex-row flex-wrap">
          <img
            @click="currentImage = image.src"
            v-for="image in images"
            :key="image.src"
            class="thumbnail"
            :src="image.src"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 pl-10">
        <div class="flex justify-around m-5 text-lg">
          <h1
            :class="{active: currentOption == 'desc'}"
            class="options"
            @click="currentOption = 'desc'"
          >Description</h1>
          <h1
            :class="{active: currentOption == 'features'}"
            class="options"
            @click="currentOption = 'features'"
          >Features</h1>
        </div>
        <div v-if="currentOption == 'desc'">
          <p
            class="text-xs lg:text-sm"
          >Adreno Dakota Speargun is an open-muzzle railgun with dual-rubber capabilities and reverse mechanism designed for Australian spearos and diving conditions. CRESSI is the world leader in speargun design and manufacturing techniques. This combined with ADRENO’s Australia custom specification for the Australian market, the result is a game changer.</p>
          <p
            class="text-xs lg:text-sm mt-5"
          >Starting with the new CRESSI designed full stainless-steel Cherokee “reverse trigger mechanism” which increases band stretch and power by 15% over conventional trigger mechanisms. The Mechanism also incorporates Cressi’s lateral guide line release with automatic return, stainless-steel trigger and a Low Profile loading butt. The Cherokee handle is also designed to be extremely supportive at full reach locking your wrist in the correct position when aiming, improving accuracy and controlling recoil.</p>
          <p
            class="text-xs lg:text-sm mt-5"
          >Not all gun muzzles are created equal, there is a lot of debate as to whether the open or closed muzzles are better. CRESSI has silenced the arguments with their new Magnetic double rubber open muzzle which combines the security of a closed muzzle while offering the speed loading, and clear line of site of an open muzzle. The muzzle is also designed to be very low profile when the rubbers are loaded to minimise drag when swinging the gun through the water after that prize fish.</p>
        </div>
        <div v-else>
          <ul class="text-xs lg:text-sm list-disc">
            <li>panjang 80cm</li>
            <li>3 Laminasi kayu, Jati Tua mix dengan kayu ulin dalamnya</li>
            <li>Shaft 6.3mm stainless s304 / besi baja bintik</li>
            <li>2 rubber / karet 14mm</li>
            <li>Mekanis Full Stainless steel</li>
            <li>Handle di desain sangat nyaman</li>
            <li>Reverse Mechanism</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpeargunList from "~/components/SpeargunList.vue";

export default {
  data() {
    return {
      currentOption: "desc",
      currentImage: require("~/assets/img/speargun/1.gif"),
      images: [
        { src: require("~/assets/img/speargun/1.gif"), alt: "image1" },
        { src: require("~/assets/img/speargun/2.gif"), alt: "image1" },
        { src: require("~/assets/img/speargun/1.gif"), alt: "image1" }
      ],
      id: this.$route.params.id
    };
  },
  head() {
    return {
      title: this.spearGun.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "High quality teak, bajau and ironwood spearguns and spearfishing accessories"
        }
      ]
    };
  },
  computed: {
    spearGun() {
      return this.$store.state.spearguns.all.find(
        speargun => speargun.id === this.id
      );
    }
  },
  components: {
    SpeargunList
  }
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

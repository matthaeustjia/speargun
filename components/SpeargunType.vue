<template>
  <div class="h-320 p-5 w-full sm:w-1/2 lg:w-1/3">
    <nuxt-link :to="'/spearguns/product/' + speargunType.type">
      <div class="flex flex-col items-center justify-around h-full">
        <img class="h-180" :alt="speargunType.name" :src="speargunType.img" />
        <h2 class="text-xl">{{ speargunType.name }}</h2>
        <h3 class="text-sm text-gray-700">{{ speargunType.unit_amount }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["speargunType"]
};
</script>

<style scoped>
.h-180 {
  height: 180px;
}
.h-320 {
  height: 260px;
}
</style>

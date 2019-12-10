<template>
  <div class="h-320 p-5 w-full sm:w-1/2 lg:w-1/3">
    <nuxt-link :to="'/spearguns/product/' + speargunType.type">
      <div class="flex flex-col items-center justify-around h-full">
        <img class="h-180" :alt="speargun.name" :src="speargunType.img" />
        <div class="flex flex-col items-center text-lg">{{speargunType.name}}</div>
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

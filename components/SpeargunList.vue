<template>
  <div class="h-320 p-5 w-full sm:w-1/2 lg:w-1/3">
    <nuxt-link :to="'/speargun/product/' + speargun.id">
      <div class="flex flex-col items-center justify-around h-full">
        <img class="h-180" :src="speargun.images[0]" />
        <div class="w-full flex flex-col items-center">
          <span class="uppercase tracking-tight font-medium">{{speargun.name}}</span>
          <div>
            <s class="text-red-600">
              <span>${{speargun.retailPrice}}</span>
            </s>
            <span class="text-gray-700">${{speargun.price}}</span>
          </div>
          <div class="flex flex-col items-center" v-if="speargun.stock == 0">
            <span class="text-red-600">Out of stock.</span>
            <span class="text-red-600">Please pre-order</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["speargun"]
};
</script>

<style scoped>
.h-180 {
  height: 180px;
}
.h-320 {
  height: 320px;
}
</style>

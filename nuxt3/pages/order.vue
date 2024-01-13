<script setup lang="ts">

const { query } = useRoute()
const { orderData, pending } = storeToRefs(useOrderStore())

const productsData = computed(() => {
  if (Array.isArray(orderData.value?.shipping)) {
    return orderData.value?.shipping.filter((shipping: Shipping) => shipping.id === Number(query.shippingId))[0].products
  }
})

</script>

<template>
  <div class="w-auto flex flex-col gap-4 m-8">
    <LazyALabel
      v-show="!pending"
      label-class="text-2xl font-bold mx-2"
      :text="$t('order.title')"
    />
    <LazyOrderCard
      v-for="product in productsData"
      v-show="!pending"
      :key="product.id"
      :products-data="product"
    />
  </div>
</template>

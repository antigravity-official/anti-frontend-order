<script setup lang="ts">

const { t } = useI18n()
const { comma, productInfoText } = useUtil()

defineProps<{
  productsData: Product
}>()

</script>

<template>
  <div class="flex flex-col gap-2 w-auto border border-yellow-500 rounded-xl p-8 mx-2 mb-4 bg-yellow-500 shadow-xl flicker">
    <ALabel
      label-class="text-2xl font-bold mb-3"
      :text="$t('order.title')"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('order.productName')"
      :text="productsData?.name"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('order.price')"
      :text="$t('text.krw', { amount: comma(productsData?.price) })"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('order.orderInfo')"
      :text="productInfoText(productsData?.stock.color, productsData?.stock.band, productsData?.stock.cup, t('text.quantity', { quantity: productsData?.stock.quantity }))"
    />
  </div>
</template>

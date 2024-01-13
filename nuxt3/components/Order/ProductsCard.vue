<script setup lang="ts">

const { t } = useI18n()
const { comma } = useUtil()

const productInfoText = (color: string, band: string, cup: string, quantity: number) => {
  return color.concat('/', band, '/', cup, ' ', t('text.quantity', { quantity }))
}

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
    >
      <template #content>
        <span>
          {{ productsData?.name }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('order.price')"
    >
      <template #content>
        <span>
          {{ $t('text.krw', { amount: comma(productsData?.price) }) }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('order.orderInfo')"
    >
      <template #content>
        <span>
          {{ productInfoText(productsData?.stock.color, productsData?.stock.band, productsData?.stock.cup, productsData?.stock.quantity) }}
        </span>
      </template>
    </ALabelText>
  </div>
</template>

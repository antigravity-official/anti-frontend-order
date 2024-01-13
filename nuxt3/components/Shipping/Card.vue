<script setup lang="ts">

const { comma } = useUtil()

defineProps<{
  orderDetailData: Shipping
}>()

defineEmits([
  'click:check-details'
])

</script>

<template>
  <div class="flex flex-col gap-2 w-auto border border-emerald-700 rounded-xl p-8 mx-2 mb-4 bg-emerald-700 shadow-xl flicker">
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.orderUserName')"
      :text="orderDetailData?.orderUserName"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.orderUserMobile')"
      :text="orderDetailData?.orderUserMobile"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.trackingNumber')"
      :text="orderDetailData?.trackingNumber"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.shippingFee')"
      :text="$t('text.krw', { amount: comma(orderDetailData?.shippingFee) })"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.address')"
      :text="$t('text.address', { postNumber: orderDetailData?.post, address: orderDetailData?.address })"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.message')"
      :text="orderDetailData?.message"
    />
    <AButton
      v-if="orderDetailData.products"
      custom-class="flex justify-center mt-4 text-2xl pointer border rounded-xl border-cool-800 p-2 hover:bg-cool-800 hover: opacity-80 transition ease-in-out delay-50"
      :btn-name="$t('button.check')"
      @click:button="$emit('click:check-details', orderDetailData?.id)"
    />
  </div>
</template>

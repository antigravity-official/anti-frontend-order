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
    <ALabel
      label-class="text-2xl font-bold mb-3"
      :text="$t('shipping.title')"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.orderUserName')"
    >
      <template #content>
        <span>
          {{ orderDetailData?.orderUserName }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.orderUserMobile')"
    >
      <template #content>
        <span>
          {{ orderDetailData?.orderUserMobile }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.trackingNumber')"
    >
      <template #content>
        <span>
          {{ orderDetailData?.trackingNumber }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.shippingFee')"
    >
      <template #content>
        <span>
          {{ $t('text.krw', { amount: comma(orderDetailData?.shippingFee) }) }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.address')"
    >
      <template #content>
        <span>
          {{ $t('text.address', { postNumber: orderDetailData?.post, address: orderDetailData?.address }) }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('shipping.message')"
    >
      <template #content>
        <span>
          {{ orderDetailData?.message }}
        </span>
      </template>
    </ALabelText>
    <div
      v-if="orderDetailData.products"
      class="flex justify-center w-full mt-4 text-2xl font-bold pointer"
      @click="$emit('click:check-details', orderDetailData?.id)"
    >
      {{ $t('button.check') }}
    </div>
  </div>
</template>

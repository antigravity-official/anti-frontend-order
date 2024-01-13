<script setup lang="ts">

const { locale } = useI18n()
const { comma } = useUtil()

const { orderData } = storeToRefs(useOrderStore())

defineEmits([
  'click:order-list'
])

</script>

<template>
  <div class="flex flex-col gap-2 w-auto border border-fuchsia-800 rounded-xl p-8 m-8 bg-fuchsia-800 shadow-xl flicker">
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('text.userId')"
      :text="orderData?.userId"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('text.orderNumber')"
      :text="orderData?.id"
    />
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :disable-slot="false"
      :label="$t('text.orderDate')"
    >
      <template #content>
        <NuxtTime
          :datetime="orderData?.orderAt ?? new Date()"
          :locale="locale"
          year="numeric"
          month="long"
          day="numeric"
          hour="numeric"
          minute="numeric"
          second="numeric"
        />
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('text.orderAmount')"
      :text="$t('text.krw', { amount: comma(orderData?.amount) })"
    />
    <AButton
      custom-class="flex justify-center mt-4 text-2xl pointer border rounded-xl border-cool-800 p-2 hover:bg-cool-800 hover: opacity-80 transition ease-in-out delay-50"
      :btn-name="$t('button.shipping')"
      @click:button="$emit('click:order-list')"
    />
  </div>
</template>

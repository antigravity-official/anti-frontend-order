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
    >
      <template #content>
        <span>
          {{ orderData?.userId }}
        </span>
      </template>
    </ALabelText>
    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
      :label="$t('text.orderNumber')"
    >
      <template #content>
        <span>
          {{ orderData?.id }}
        </span>
      </template>
    </ALabelText>

    <ALabelText
      custom-class="flex flex-wrap justify-between w-full gap-2 text-lg"
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
    >
      <template #content>
        <span>
          {{ $t('text.krw', { amount: comma(orderData?.amount) }) }}
        </span>
      </template>
    </ALabelText>
    <div
      class="flex justify-center w-full mt-4 text-2xl font-bold pointer"
      @click="$emit('click:order-list')"
    >
      {{ $t('button.shipping') }}
    </div>
  </div>
</template>

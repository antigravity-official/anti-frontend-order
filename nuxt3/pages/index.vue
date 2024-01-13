<script setup lang="ts">

const { orderData, pending } = storeToRefs(useOrderStore())

const { pending: pendingOrder, refresh: refreshOrderData } = await useAsyncData('order', async () => {
  const { data } = await useFetch('/api/order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    immediate: true
  })

  if (!data.value) { return }
  if (!data.value.success && !data.value.res) {
    console.warn('Warning: Data fetch failed')
    return
  }

  orderData.value = data.value.res ?? undefined
  pending.value = false
})

refreshOrderData()
pending.value = pendingOrder.value

</script>

<template>
  <div>
    <ALabel
      v-if="pendingOrder"
      label-class="flex justify-center items-center w-auto m-20 text-2xl"
      :text="$t('text.loading')"
    />
    <div v-else>
      <LazyALabel
        label-class="text-2xl font-bold m-8"
        :text="$t('text.order')"
      />
      <IndexOrderList @click:order-list="navigateTo('/shipping')" />
    </div>
  </div>
</template>

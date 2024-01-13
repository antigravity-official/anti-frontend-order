<template>
  <div>
    <div v-if="pending">
      로딩중!
    </div>
    <div v-else>
      <AButton @click:button="navigateTo('/order')" />
      {{ fetchData }}
    </div>
  </div>
</template>

<script setup lang="ts">

// const { orderData } = storeToRefs(useOrderStore())

const { data: fetchData, pending } = await useAsyncData('order', async () => {
  const { data } = await useFetch('/api/order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    immediate: true
  })

  console.log(data.value?.success)

  return data
})

console.log(fetchData.value)

</script>

<style scoped lang="scss">

</style>

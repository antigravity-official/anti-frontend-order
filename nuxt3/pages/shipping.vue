<script setup lang="ts">

const { orderData, pending } = storeToRefs(useOrderStore())

</script>

<template>
  <div class="w-auto flex flex-col gap-4 m-8">
    <LazyALabel
      v-show="!pending"
      label-class="text-2xl font-bold mx-2"
      :text="Array.isArray(orderData?.shipping) ? $t('shipping.title') : `${$t('shipping.title')} & ${$t('order.title')}`"
    />
    <template v-if="Array.isArray(orderData?.shipping)">
      <LazyShippingCard
        v-for="shippingData in orderData.shipping"
        v-show="!pending"
        :key="shippingData.id"
        :order-detail-data="shippingData"
        @click:check-details="(shippingId: number) => navigateTo(`/order?shippingId=${shippingId}`)"
      />
    </template>
    <!-- 새로운 데이터로 변경될 경우 아래의 템플릿 삭제 -->
    <template v-else>
      <LazyShippingCard
        v-show="!pending"
        v-if="orderData?.shipping"
        :order-detail-data="orderData?.shipping"
      />
      <LazyOrderCard
        v-for="product in orderData?.products"
        v-show="!pending"
        :key="product.id"
        :products-data="product"
      />
    </template>
  </div>
</template>

import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  /**
   * ! Pinia State !
   * @param orderData 주문 데이터
  */

  // 새로운 주문 타입이 들어올 경우, 기존 타입은 제거 처리
  const orderData = ref<NewOrder | OldOrder>()

  return {
    orderData
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})

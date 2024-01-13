import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  /**
   * ! Pinia State !
   * @param orderData 주문 데이터
   * @param pending 주문 데이터 조회 중 여부
  */

  const orderData = ref<Order>()
  const pending = ref(false)

  return {
    orderData,
    pending
  }
}, {
  persist: {
    // 주문내역 조회는 새션스토리지에 저장하여, 새션이 만료되면 휘발될 수 있도록 처리
    storage: persistedState.sessionStorage
  }
})

import oldData from '~/data/old_order.json'
import newData from '~/data/new_order.json'

export default defineEventHandler((_event) => {
  const randomData = Math.random() < 0.5 ? oldData : newData

  try {
    // api 응답요청 작성 (응답요청 주소가 있을경우, $fetch() 함수로 비동기 호출처리)
    // responseData의 형식은 DefaultResponse로 임의 정의하였음.
    // 아래의 예외처리 포함된 $fetch()호출은 위에서 정의한 DefaultResponse의 형식을 따르지 않을경우의 예외처리 임.

    // const responseData: DefaultResponse = $fetch('https://api.example.com/orders', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // if (!responseData) {
    //   throw new Error('No Data')
    // }
    // if (responseData.responseCode !== 200) {
    //   throw new Error('Api Error')
    // }
    // if (!responseData.res?.id) {
    //   throw new Error('No Id')
    // }
    // if (!responseData.res?.userId) {
    //   throw new Error('No UserId')
    // }
    // if (!responseData.res?.orderAt) {
    //   throw new Error('No OrderAt')
    // }
    // if (!responseData.res?.shipping || !Array.isArray(responseData.res?.shipping)) {
    //   throw new Error('Not Shipping')
    //   if (!responseData.res?.shipping.id) {
    //     throw new Error('No Shipping Id')
    //   }
    //   // ...
    // }
    // return responseData

    // 랜덤으로 보유한 데이터 선택
    const responseData: DefaultResponse = {
      success: true,
      responseCode: 200,
      message: 'Success',
      formatType: typeof randomData.shipping === 'object' ? 'old' : 'new',
      res: randomData
    }
    return responseData
  } catch (error) {
    // api 응답 실패 또는 예외처리
    console.warn('Error Occur:', error)
  }
})

import oldData from '~/data/old_order.json'
import newData from '~/data/new_order.json'

export default defineEventHandler((_event) => {
  try {
    // api 응답요청 작성 (응답요청 주소가 있을경우, $fetch() 함수로 비동기 호출처리)

    // const data = $fetch('https://api.example.com/orders', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   ...
    // })

    // 랜덤으로 보유한 데이터 선택
    const randomData = Math.random() < 0.5 ? oldData : newData

    const responseData: DefaultResponse = {
      success: true,
      responseCode: 200,
      message: 'Success',
      formatType: 'shippings' in randomData ? 'new' : 'old',
      data: randomData
    }
    return responseData
  } catch (error) {
    // api 응답 실패 시
    console.warn('Error Occur:', error)
  }
})

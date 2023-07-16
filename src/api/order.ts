import assetOrder from "../assets/order.json";

export function getOrderInfo(orderNo: number) {
  if (assetOrder.id === orderNo) return assetOrder;
}

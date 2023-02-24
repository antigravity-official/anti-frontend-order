interface IShippingDto {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  post: string;
  orderProductList: Array<OrderProductListDto>;
}



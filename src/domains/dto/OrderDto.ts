interface IOrderDto {
  id: number;
  orderAt: Date;
  amount: number;
  shippingList: Array<ShippingDto>;
}

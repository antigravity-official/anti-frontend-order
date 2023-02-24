export interface IOrderListPresenter {
  getOrderList(): Promise<Array<OrderDto>>;
}

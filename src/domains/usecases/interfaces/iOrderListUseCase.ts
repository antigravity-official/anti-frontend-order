export interface IOrderListUseCase {
  getOrderList(): Promise<Array<OrderDto>>;
}

import { OrderDto } from "@domains/dto/OrderDto";
import { IOrderListUseCase } from "./interfaces/iOrderListUseCase";
import { IOrderListRepository } from "./repositories/iOrderListRepository";

class OrderListUseCase implements IOrderListUseCase {
  private static instance: OrderListUseCase;

  private constructor(
    private readonly repository: IOrderListRepository
  ) {}

  static getInstance(repository: IOrderListRepository) {
    if(!OrderListUseCase.instance) {
      OrderListUseCase.instance = new OrderListUseCase(repository);
    }
    return OrderListUseCase.instance;
  }

  async getOrderList(): Promise<OrderDto[]> {
    return this.repository.getOrderList();
  }
}

export default OrderListUseCase;
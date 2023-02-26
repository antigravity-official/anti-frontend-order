import { IAssetImporter } from "@adapters/infrastructures/interfaces/iAssetImporter";
import { OrderDto } from "@domains/dto/OrderDto";
import { IOrderListRepository } from "@domains/usecases/repositories/iOrderListRepository";

class OrderListRepository implements IOrderListRepository {
  private static instance: OrderListRepository;

  private constructor(
    private readonly assetImporter: IAssetImporter
  ) {}

  static getInstance(assetImporter: IAssetImporter) {
    if(!OrderListRepository.instance) {
      OrderListRepository.instance = new OrderListRepository(assetImporter);
    }
    return OrderListRepository.instance;
  }

  async getOrderList(): Promise<OrderDto[]> {
    const orderList = Array<OrderDto>();

    const orderItem = await this.assetImporter.get();

    orderList.push(orderItem);

    return orderList;
  }
}

export default OrderListRepository;
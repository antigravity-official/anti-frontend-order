import { IAssetImporter } from "@adapters/infrastructures/interfaces/iAssetImporter";
import { OrderDto } from "@domains/dto/OrderDto";
import { IOrderListRepository } from "@domains/usecases/repositories/iOrderListRepository";
import {ShippingDto} from "@domains/dto/ShippingDto";
import {OrderProductDto} from "@domains/dto/OrderProductDto";

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
    const json = await this.assetImporter.get();

    const orderProductList = Array<OrderProductDto>();
    for(let i=0; i<json.products.length; i++) {
      orderProductList.push(new OrderProductDto({
        id: json.products[i].id,
        name: json.products[i].name,
        price: json.products[i].price,
        imageUrls: json.products[i].imageUrls,
        color: json.products[i].stock.color,
        band: json.products[i].stock.band,
        cup: json.products[i].stock.cup,
        quantity: json.products[i].stock.quantity,
      }));
    }

    const shippingList = Array<ShippingDto>();
    shippingList.push(new ShippingDto({
      id: json.shipping.id,
      trackingNumber: json.shipping.trackingNumber,
      shippingFee: json.shipping.shippingFee,
      address: json.shipping.address,
      post: json.shipping.post,
      message: json.shipping.message,
      orderProductList: orderProductList,
    }));

    const orderList = Array<OrderDto>();
    const orderItem = new OrderDto({
      id: json.id,
      amount: json.amount,
      orderAt: json.orderAt,
      shippingList: shippingList,
    });

    orderList.push(orderItem);

    return orderList;
  }
}

export default OrderListRepository;

import { Order, OrderResponseData } from "../../Models";
import assetOrder from "../../assets/order.json";
import { delay } from "../../utils";

export const fetchMyOrder = async (): Promise<Order> => {
  // fetch method
  try {
    await delay(1000);

    /**
     *
     * @param { OrderResponseData } json - order api json format
     * @returns {Promise<Order>}
     */
    const parse = async (json: OrderResponseData): Promise<Order> => {
      // parse order
      // response data 를 parse 합니다
      // 향후 json 변경시, 이 부분에서 변경한다.
      await delay(500);
      const shippings = [json.shipping].map((ship) => {
        return { ...ship, products: json.products };
      });
      const order: Order = {
        id: json.id,
        orderAt: new Date(json.orderAt),
        amount: json.amount,
        shippings,
      };
      return order;
    };
    const order = await parse(assetOrder);
    return order;
  } catch (error) {
    throw error;
  }
};

import assetOrder from "../../assets/order.json";
import { delay } from "../../utils";

export const fetchMyOrder = async () => {
  // fetch method
  await delay(1000);
  return assetOrder;
};

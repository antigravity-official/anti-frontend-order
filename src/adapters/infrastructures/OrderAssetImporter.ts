import { IAssetImporter } from "@adapters/infrastructures/interfaces/iAssetStorage";
import assetOrder from '@adapters/infrastructures/assets/order.json';

class OrderAssetImporter implements IAssetImporter {
  private static instance: OrderAssetImporter;

  private order: any;

  constructor() {
    this.order = assetOrder;
  }

  public static getInstance() {
    if (!OrderAssetImporter.instance) {
      OrderAssetImporter.instance = new OrderAssetImporter();
    }
    return OrderAssetImporter.instance;
  }


  get(): Promise<any> {
    return new Promise(resolve => {
      return resolve(this.order);
    });
  }
}

export default OrderAssetImporter;
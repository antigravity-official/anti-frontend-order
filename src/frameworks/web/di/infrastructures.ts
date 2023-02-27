import IInfrastructures from "@frameworks/web/di/interfaces/iInfrastructures";
import OrderAssetImporter from "@adapters/infrastructures/OrderAssetImporter";

export default (): IInfrastructures => {
  return {
    importer: OrderAssetImporter.getInstance(),
  };
};

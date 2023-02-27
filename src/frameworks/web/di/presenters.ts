import IPresenters from "@frameworks/web/di/interfaces/iPresenters";
import IUseCases from "@frameworks/web/di/interfaces/iUseCases";

export default (useCases: IUseCases): IPresenters => {
  return {
    orderList: useCases.orderList,
  };
};

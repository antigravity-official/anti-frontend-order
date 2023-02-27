import IRepositories from "@frameworks/web/di/interfaces/iRepositories";
import IUseCases from "@frameworks/web/di/interfaces/iUseCases";
import OrderListUseCase from "@domains/usecases/OrderListUseCase";

export default (repositories: IRepositories): IUseCases => {
  return {
    orderList: OrderListUseCase.getInstance(repositories.orderList),
  };
};

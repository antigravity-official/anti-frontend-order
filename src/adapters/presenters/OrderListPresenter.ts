import { OrderDto } from "@domains/dto/OrderDto";
import { IOrderListUseCase } from "@domains/usecases/interfaces/iOrderListUseCase";
import { IOrderListPresenter } from "./interfaces/iOrderListPresenter";

class iOrderListPresenter implements IOrderListPresenter {
  private static instance: iOrderListPresenter;

  private constructor(
    private readonly useCase: IOrderListUseCase
  ) {}

  static getInstance(useCase: IOrderListUseCase) {
    if(!iOrderListPresenter.instance) {
      iOrderListPresenter.instance = new iOrderListPresenter(useCase);
    }
    return iOrderListPresenter.instance;
  }

  async getOrderList(): Promise<OrderDto[]> {
    return this.useCase.getOrderList();
  }
}

export default iOrderListPresenter;
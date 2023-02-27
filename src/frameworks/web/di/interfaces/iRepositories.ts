import {IOrderListRepository} from "@domains/usecases/repositories/iOrderListRepository";

export default interface IRepositories {
  orderList: IOrderListRepository;
}

import {ShippingDto} from "@domains/dto/ShippingDto";
import FitAiAssert from "@domains/utils/FitAiAssert";

interface IOrderDto {
  id: number;
  orderAt: Date;
  amount: number;
  shippingList: Array<ShippingDto>;
}


export class OrderDto implements IOrderDto {
  readonly amount: number;
  readonly id: number;
  readonly orderAt: Date;
  readonly shippingList: Array<ShippingDto>;


  constructor(param: IOrderDto) {
    this.validateData(param);
    this.amount = param.amount;
    this.id = param.id;
    this.orderAt = param.orderAt;
    this.shippingList = param.shippingList;
  }

  private validateData(param: IOrderDto) {
    FitAiAssert.isTruthy(param, 'OrderDto parameter를 확인하세요.');
    FitAiAssert.isTruthy(param.id, '주문 id가 없습니다.');
    FitAiAssert.isTruthy(param.orderAt, '주문일이 없습니다.');
    FitAiAssert.isTruthy(param.amount, '총 주문결제금액이 없습니다.');
    FitAiAssert.isTruthy(param.shippingList, '배송정보 리스트가 없습니다.');

  }
}

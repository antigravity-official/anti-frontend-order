import FitAiAssert from "@domains/utils/FitAiAssert";
import {OrderProductDto} from "@domains/dto/OrderProductDto";

interface IShippingDto {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  post: string;
  address: string;
  message: string;
  orderProductList: Array<OrderProductDto>;
}


export class ShippingDto implements IShippingDto {
  readonly id: number;
  readonly orderProductList: Array<OrderProductDto>;
  readonly post: string;
  readonly shippingFee: number;
  readonly trackingNumber: string;
  readonly address: string;
  readonly message: string;

  constructor(param: IShippingDto) {
    this.validateData(param);
    this.id = param.id;
    this.orderProductList = param.orderProductList;
    this.post = param.post;
    this.address = param.address;
    this.message = param.message;
    this.shippingFee = param.shippingFee;
    this.trackingNumber = param.trackingNumber;
  }

  private validateData(param: IShippingDto) {
    FitAiAssert.isTruthy(param, 'ShippingDto parameter를 확인하세요.');
    FitAiAssert.isTruthy(param.id, '배송 id가 없습니다.');
    FitAiAssert.isTruthy(param.trackingNumber, '배송 총장번호가 없습니다.');
    FitAiAssert.isTruthy(param.shippingFee, '배송료가 없습니다.');
    FitAiAssert.isTruthy(param.address, '도착 주소가 없습니다.');
    FitAiAssert.isTruthy(param.post, '출발 주소가 없습니다.');
    FitAiAssert.isTruthy(param.message, '메시지가 없습니다.');
    FitAiAssert.isTruthy(param.orderProductList, '상품 목록이 없습니다.');
  }
}

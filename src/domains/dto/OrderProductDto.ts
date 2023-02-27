import FitAiAssert from "@domains/utils/FitAiAssert";

interface IOrderProductDto {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export class OrderProductDto implements IOrderProductDto {
  readonly band: string;
  readonly color: string;
  readonly cup: string;
  readonly id: number;
  readonly imageUrls: string[];
  readonly name: string;
  readonly price: number;
  readonly quantity: number;


  constructor(param: IOrderProductDto) {
    this.validateData(param);
    this.band = param.band;
    this.color = param.color;
    this.cup = param.cup;
    this.id = param.id;
    this.imageUrls = param.imageUrls;
    this.name = param.name;
    this.price = param.price;
    this.quantity = param.quantity;
  }

  private validateData(param: IOrderProductDto) {
    FitAiAssert.isTruthy(param, 'OrderProductDto parameter를 확인하세요');
    FitAiAssert.isTruthy(param.id, '상품 id가 없습니다.');
    FitAiAssert.isTruthy(param.name, '상품명이 없습니다.');
    FitAiAssert.isTruthy(param.price, '상품 가격이 없습니다.');
    FitAiAssert.isTruthy(param.imageUrls, '상품 이미지가 없습니다.');
    for(let i=0; i<param.imageUrls.length; i++) {
      FitAiAssert.isTrue(param.imageUrls[i].startsWith('http://')
        || param.imageUrls[i].startsWith('https://'), '상품 이미지 url을 확인하세요.');
    }
    FitAiAssert.isTruthy(param.color, '상품 색상이 없습니다.');
    FitAiAssert.isTruthy(param.band, '상품 밴드가 없습니다.');
    FitAiAssert.isTruthy(param.cup, '상품 컵이 없습니다.');
    FitAiAssert.isTruthy(param.quantity, '상품 수량이 없습니다.');
  }
}

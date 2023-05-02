import styled from "@emotion/styled";
import { IOrderProduct } from "../../Models";
import Wrapper from "../Common/Wrapper";

interface IORDER_PRODUCT {
  [key: string]: string;
}

const ORDER_PRODUCT: IORDER_PRODUCT = {
  name: "상품명",
  price: "가격",
};

export default function OrderProduct(prop: IOrderProduct) {
  const stock = prop.stock;
  return (
    <Wrapper>
      {Object.keys(prop).map((k) => {
        return (
          ORDER_PRODUCT[k] && (
            <ProductInfo key={prop[k]}>
              {`${ORDER_PRODUCT[k]}: ${prop[k]}`}
            </ProductInfo>
          )
        );
      })}
      <ProductInfo>
        {`주문정보: ${stock.color}/${stock.band}/${stock.cup} ${stock.quantity}개`}
      </ProductInfo>
    </Wrapper>
  );
}

const ProductInfo = styled.div`
  padding: 4px;
  margin-left: 12px;
`;

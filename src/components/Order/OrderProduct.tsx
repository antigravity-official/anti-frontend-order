import styled from "@emotion/styled";
import { IOrderProduct } from "../../types/Models";
import Wrapper from "../Common/Wrapper";
import { ORDER_PRODUCT } from "../../constants/constants";

interface IOrderProductProps {
  product: IOrderProduct;
}

export default function OrderProduct({ product }: IOrderProductProps) {
  const stock = product.stock;
  return (
    <Wrapper>
      {Object.keys(product).map((k) => {
        return (
          ORDER_PRODUCT[k] && (
            <ProductInfo key={product[k]}>
              {`${ORDER_PRODUCT[k]}: ${product[k]}`}
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

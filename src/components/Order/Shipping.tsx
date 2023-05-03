import styled from "@emotion/styled";
import { IShipping } from "../../types/Models";
import Wrapper from "../Common/Wrapper";
import { ReactNode } from "react";
import { SHIPPING } from "../../constants/constants";

interface IShippingProps {
  children?: ReactNode;
  shipping: IShipping;
}

export default function Shipping({ shipping, children }: IShippingProps) {
  console.log(shipping.products);
  return (
    <Wrapper>
      {Object.keys(shipping).map((k) => {
        return (
          SHIPPING[k] && (
            <ShippingInfo key={shipping[k]}>
              {`${SHIPPING[k]}: ${shipping[k]}`}
            </ShippingInfo>
          )
        );
      })}
      <ShippingInfo>상품목록 :{children}</ShippingInfo>
    </Wrapper>
  );
}

const ShippingInfo = styled.div`
  padding: 4px;
  margin: 4px;
`;

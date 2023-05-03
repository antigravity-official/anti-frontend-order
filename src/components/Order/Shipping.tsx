import styled from "@emotion/styled";
import { IShipping } from "../../Models";
import Wrapper from "../Common/Wrapper";
import { ReactNode } from "react";

interface ISHIPPING {
  [key: string]: string;
}

const SHIPPING: ISHIPPING = {
  trackingNumber: "송장번호",
  shippingFee: "배송료",
  post: "우편번호",
  address: "주소",
  message: "메시지",
};

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

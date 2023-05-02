import styled from "@emotion/styled";
import { IShipping } from "../../Models";
import OrderProduct from "./OrderProduct";

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

export default function Shipping(prop: IShipping) {
  console.log(prop.products);
  return (
    <Wrapper>
      {Object.keys(prop).map((k) => {
        return (
          SHIPPING[k] && (
            <ShippingInfo key={prop[k]}>
              {`${SHIPPING[k]}: ${prop[k]}`}
            </ShippingInfo>
          )
        );
      })}
      <ShippingInfo>
        상품목록 :{" "}
        {prop.products &&
          prop.products.map((v) => (
            <OrderProduct key={prop.id + v.id + v.name} {...v} />
          ))}
      </ShippingInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px;
  margin: 12px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ShippingInfo = styled.div`
  padding: 4px;
  margin: 4px;
`;

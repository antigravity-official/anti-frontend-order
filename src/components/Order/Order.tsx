import styled from "@emotion/styled";
import { IOrder } from "../../Models";
import Shipping from "./Shipping";

interface IORDER {
  [key: string]: string;
}

const ORDER: IORDER = {
  orderAt: "주문일자",
  amount: "총 결제금액",
};

const Order = (prop: IOrder) => {
  return (
    <Wrapper>
      {Object.keys(prop).map((k) => {
        return (
          ORDER[k] &&
          prop[k] && (
            <OrderInfo key={prop[k]}>{`${ORDER[k]}: ${prop[k]}`}</OrderInfo>
          )
        );
      })}
      <OrderInfo>
        {prop.shipping.map((v) => (
          <Shipping key={v.id} {...v} />
        ))}
      </OrderInfo>
    </Wrapper>
  );
};

export default Order;

const Wrapper = styled.div`
  margin: 12px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const OrderInfo = styled.div`
  padding: 4px;
  margin-left: 12px;
`;

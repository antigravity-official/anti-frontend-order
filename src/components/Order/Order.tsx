import styled from "@emotion/styled";
import { IOrder } from "../../Models";
import Wrapper from "../Common/Wrapper";

interface IORDER {
  [key: string]: string;
}

const ORDER: IORDER = {
  orderAt: "주문일자",
  amount: "총 결제금액",
};

interface IOrderProps {
  order: IOrder;
}

const Order = ({ order }: IOrderProps) => {
  return (
    <Wrapper>
      {Object.keys(order).map((k) => {
        return (
          ORDER[k] && (
            <OrderInfo key={order[k]}>{`${ORDER[k]}: ${order[k]}`}</OrderInfo>
          )
        );
      })}
    </Wrapper>
  );
};

export default Order;

const OrderInfo = styled.div`
  padding: 4px;
  margin-left: 12px;
`;

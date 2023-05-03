import styled from "@emotion/styled";
import { IOrder } from "../../types/Models";
import Wrapper from "../Common/Wrapper";
import { ORDER } from "../../constants/constants";

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

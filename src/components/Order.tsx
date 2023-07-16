import * as T from "../type/Models";
import { useQuery } from "@tanstack/react-query";
import { getOrderInfo } from "../api/order";
import Loading from "./Loading";
import OrderInfo from "./orderInfo/OrderInfo";
import { useState } from "react";

interface OrderInfoProps {
  orderNo?: number;
}

export default function Order({ orderNo = 100 }: OrderInfoProps) {
  const [order, setOrder] = useState<T.Order | null>(null);
  const orderQuery = useQuery({
    queryKey: ["orderInfo", orderNo],
    queryFn: () => {
      return getOrderInfo(orderNo);
    },
    onSuccess: (json) => {
      setOrder(parseOrder(json));
    },
  });

  function parseOrder(json: any) {
    return {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      products: json.products,
      shipping: json.shipping,
    };
  }

  switch (orderQuery.status) {
    case "loading":
      return <Loading />;
    case "success":
      return <OrderInfo data={order && order} />;
    case "error":
      console.log(orderQuery.error);
      return <Loading />;
  }
}

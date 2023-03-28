import { useQueries, useQuery } from "@tanstack/react-query";
import { shipApi } from "../../api";
import type { SuccessResponse } from "../../api/CallApi";
import { Product } from "./Product";

interface ShipProps {
  ship: SuccessResponse<"/order/{orderId}", "get">["ships"][number];
}
export const Ship = (props: ShipProps) => {
  const { ship } = props;
  const shipQuery = useQuery({
    queryKey: ["/ship/{shipId}", ship.id],
    queryFn: () => shipApi.fetchShip({ shipId: Number(ship.id) }),
    suspense: true,
  });

  return (
    <div style={{ border: "1px solid blue" }}>
      <div>[배송정보]</div>
      <div>송장번호: {ship.trackingNumber}</div>
      <div>배송료: {ship.shippingFee}원</div>
      <div>
        주소: [{ship.post}] {ship.address}
      </div>
      <div>메시지: {ship.message}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {shipQuery.data?.products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

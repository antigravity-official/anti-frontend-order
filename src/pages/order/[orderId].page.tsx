import { useRouter } from "../../hooks/useRouter";
import { orderApi, shipApi } from "../../api";
import { useQueries, useQuery } from "@tanstack/react-query";
import { Order } from "./Order";
import { Ship } from "./Ship";
import { Suspense } from "react";
const Home = () => {
  const { params, navigate } = useRouter("/order/:orderId");

  const orderQuery = useQuery({
    queryKey: ["/order/{orderId}", params],
    queryFn: () => orderApi.fetchOrder(params),
    suspense: true,
  });

  return (
    <div>
      <Order order={orderQuery.data} />
      <div>----------------------------</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {orderQuery.data?.ships.map((ship) => {
          return (
            <Suspense fallback={"shipping..."}>
              <Ship ship={ship} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotfoundPage } from "../pages/notfound/index.page";
import { routePaths } from "./_generated";
export function withSuspense(LazyElement: any) {
  return (
    <Suspense fallback={"loading..."}>
      <LazyElement />
    </Suspense>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      ...routePaths.map((item) => ({
        path: item.path,
        element: withSuspense(lazy(() => import("../pages/" + item.srcPath))),
      })),
      {
        path: "*",
        element: <NotfoundPage />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}

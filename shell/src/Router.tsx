import React from "react";
import { Layout } from "./Layout";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { lazy } from "react";

export type RouteConfig = RouteObject & { name: string } & {
  children?: RouteConfig[];
};

const MFE = lazy(() =>
  import("mfe/MFE" as any).then(({ MFE }) => ({ default: MFE }))
);

export function Router(): JSX.Element | null {
  const routes: RouteConfig[] = [
    {
      name: "Home",
      path: "/",
      element: <Layout />,
      children: [
        {
          name: "MFE",
          path: "/mfe",
          element: <MFE />,
        },
      ] as RouteConfig[],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

import React from "react";
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { MFE } from "./MFE";

export type RouteConfig = RouteObject & { name: string } & {
  children?: RouteConfig[];
};

export function Router(): JSX.Element | null {
  const routes: RouteConfig[] = [
    {
      name: "Home",
      path: "/",
      element: <Outlet />,
      children: [{ name: "MFE", path: "/", element: <MFE /> }] as RouteConfig[],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

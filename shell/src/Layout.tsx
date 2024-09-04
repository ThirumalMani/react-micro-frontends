import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Link to="/mfe">Load MFE</Link>
      <Outlet />
    </>
  );
}

import React, { Suspense } from "react";
import { Router } from "./Router";

export function App(): JSX.Element | null {
  return (
    <Suspense>
      <Router />
    </Suspense>
  );
}

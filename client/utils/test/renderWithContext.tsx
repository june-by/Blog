import { render } from "@testing-library/react";
import { NextRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterContext } from "next/dist/shared/lib/router-context";

export function renderWithContext(router: NextRouter, queryClient: QueryClient, component: JSX.Element) {
  render(
    <RouterContext.Provider value={router}>
      <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
    </RouterContext.Provider>
  );
}

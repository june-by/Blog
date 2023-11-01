import { render } from "@testing-library/react";
import { NextRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "./createMockRouter";

export function renderWithContext(
  component: JSX.Element,
  router: NextRouter = createMockRouter(),
  queryClient: QueryClient = new QueryClient()
) {
  render(
    <RouterContext.Provider value={router}>
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    </RouterContext.Provider>
  );
}

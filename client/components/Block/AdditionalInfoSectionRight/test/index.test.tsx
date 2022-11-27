import { render, screen } from "@testing-library/react";
import React from "react";
import AdditionalInfoSectionRight from "..";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMockRouter } from "utils/test/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<AdditionalInfoSectionRight/>", () => {
  const queryClient = new QueryClient();
  const router = createMockRouter();

  it("rendering test", () => {
    renderWithContext(router, queryClient, <AdditionalInfoSectionRight />);
    // render(
    //   <RouterContext.Provider value={router}>
    //     <QueryClientProvider client={queryClient}>
    //       <AdditionalInfoSectionRight />
    //     </QueryClientProvider>
    //   </RouterContext.Provider>
    // );
    expect(
      screen.getByTestId("additionalInfoSectionRight")
    ).toBeInTheDocument();
  });
});

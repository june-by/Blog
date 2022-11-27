import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AdditionalInfoSectionLeft from "..";
import { createMockRouter } from "utils/test/createMockRouter";
import { renderWithContext } from "utils/test/renderWithContext";

describe("<AdditionalInfoSectionLeft/>", () => {
  const queryClient = new QueryClient();
  const router = createMockRouter();
  it("rendering test", () => {
    renderWithContext(router, queryClient, <AdditionalInfoSectionLeft />);
    expect(screen.getByTestId("additionalInfoSectionLeft")).toBeInTheDocument();
  });
});

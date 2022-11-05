import { waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient } from "react-query";
import Write from "..";
import { createMockRouter } from "../../../utils/test/createMockRouter";
import { renderWithContext } from "../../../utils/test/renderWithContext";

describe("<Write />", () => {
  const router = createMockRouter();
  const queryClient = new QueryClient();
  it("goBack if not admin", async () => {
    renderWithContext(router, queryClient, <Write />);
    await waitFor(() => {
      expect(router.push).toBeCalledWith("/");
    });
  });
});

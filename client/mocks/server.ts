import { setupServer } from "msw/node";
import { handlers } from "./handlers/_index";

export const server = setupServer(...handlers);

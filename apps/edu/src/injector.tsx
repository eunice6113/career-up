// career-up/apps/edu/src/injector.tsx

import { injectFactory } from "@career-up/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
  routes,
});

export default inject;
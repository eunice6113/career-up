// career-up/apps/network/src/injector.tsx

import { injectFactory } from "@career-up/shell-router";
import { routes } from "./routes";

import "./index.scss";

const inject = injectFactory({
  routes,
});

export default inject;
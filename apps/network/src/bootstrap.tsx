// career-up/apps/network/src/bootstrap.tsx

import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById("app-edu")!,
});
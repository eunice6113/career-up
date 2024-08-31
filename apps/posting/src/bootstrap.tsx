// career-up/apps/posting/src/bootstrap.tsx

import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById("app-posting")!,
});
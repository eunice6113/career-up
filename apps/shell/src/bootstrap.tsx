// career-up/apps/shell/src/bootstrap.tsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import "@career-up/ui-kit/index.css";

createRoot(document.getElementById("app")!).render(<App />);
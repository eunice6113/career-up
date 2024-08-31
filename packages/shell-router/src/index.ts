export function test() {
    alert('test');
}// career-up/packages/shell-router/src/index.ts

import useShellEvent from "./hooks/use-shell-event";
import { injectFactory } from "./injector";
import AppRoutingManager from "./components/app-routing-manager";

export { useShellEvent, injectFactory, AppRoutingManager };

export type * from "./types";
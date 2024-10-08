// career-up/apps/posting/src/routes.tsx

import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import PageHome from "./pages/PageHome";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
    <Auth0ClientProvider>
      <AppRoutingManager type="app-posting" />
    </Auth0ClientProvider>),
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
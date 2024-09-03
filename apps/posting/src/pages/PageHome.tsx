// career-up/apps/posting/src/pages/page-home.tsx

import React, { useEffect } from "react";
import useAuth0Client from "../hooks/use-auth0-client";

const PageHome: React.FC = () => {
  const auth0Client = useAuth0Client();

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();

        console.log(token);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  return <div>page-home</div>;
};

export default PageHome;
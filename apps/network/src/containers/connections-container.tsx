// career-up/apps/network/src/containers/connections-container.tsx

import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { connectionsAtom } from "../atoms";
import Connections from "../components/connections";
import useAuth0Client from "../hooks/use-auth0-client";
import { getConnections } from "../apis";

const ConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useRecoilState(connectionsAtom);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (error) {
      alert(error);
    }
  }, [auth0Client, setConnections]);

  return (
    <Connections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default ConnectionsContainer;
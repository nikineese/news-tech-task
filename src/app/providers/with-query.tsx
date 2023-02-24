import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const withQuery = (Component: React.ComponentType) => () =>
  (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );

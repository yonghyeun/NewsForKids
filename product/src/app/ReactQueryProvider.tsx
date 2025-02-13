"use client";

import { PropsWithChildren, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const client = useRef(new QueryClient());

  return (
    <QueryClientProvider client={client.current}>
      {children}
    </QueryClientProvider>
  );
};

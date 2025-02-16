"use client";

import { PropsWithChildren, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const client = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          // 서버단에서 프리페치 한 쿼리가 캐시되도록 최소 staleTime 생성
          staleTime: 1000 * 30,
          experimental_prefetchInRender: true,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client.current}>
      {children}
    </QueryClientProvider>
  );
};

"use server";

import { type FetchQueryOptions, QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";

export const prefetchQueryInServer = async (options: FetchQueryOptions) => {
  const serverQueryClient = new QueryClient({});
  await serverQueryClient.prefetchQuery(options);

  return dehydrate(serverQueryClient);
};

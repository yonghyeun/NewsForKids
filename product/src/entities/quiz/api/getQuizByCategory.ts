import { useQuery } from "@tanstack/react-query";
import { apiClient, prefetchQueryInServer } from "@/shared/api/lib";
import type {
  GetQuizByCategoryParams,
  GetQuizByCategoryResponse,
} from "../types";
import { QUIZ_QUERY_KEYS } from "./queryKeys";

export const getQuizByCategory = ({
  category,
  date,
  page,
}: GetQuizByCategoryParams) => {
  return apiClient.GET<GetQuizByCategoryResponse>({
    pathname: `/quiz/${category}`,
    searchParams: {
      date,
      page,
    },
  });
};

export const serverPrefetchGetQuizByCategory = (
  params: GetQuizByCategoryParams,
) => {
  return prefetchQueryInServer({
    queryKey: QUIZ_QUERY_KEYS.getByCategory(params),
    queryFn: () => getQuizByCategory(params),
  });
};

export const useGetQuizByCategory = (params: GetQuizByCategoryParams) => {
  return useQuery({
    queryKey: QUIZ_QUERY_KEYS.getByCategory(params),
    queryFn: () => getQuizByCategory(params),
  });
};

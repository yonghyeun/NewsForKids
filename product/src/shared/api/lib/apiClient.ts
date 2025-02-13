import { API_BASE_URL } from "../config";

interface GetParameters {
  pathname: string;
  searchParams?: Record<string, string | number>;
  init?: RequestInit;
}

export const apiClient = {
  GET: async <T>({
    pathname,
    searchParams,
    init,
  }: GetParameters): Promise<T> => {
    const url = `${API_BASE_URL}${pathname}`;

    const searchParamsString = Object.entries(searchParams || {}).reduce(
      (string, [key, value]) => {
        return `${string}${key}=${value}&`;
      },
      "?",
    );

    const response = await fetch(url + searchParamsString.slice(0, -1), init);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  },
};

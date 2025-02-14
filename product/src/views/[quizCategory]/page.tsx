import type { SearchParams } from "next/dist/server/request/search-params";
import React from "react";
import { HydrationBoundary } from "@tanstack/react-query";
import * as Quiz from "@/widgets/quiz/ui";
import { getValidDateExpression } from "@/entities/date/lib";
import {
  isValidCategory,
  serverPrefetchGetQuizByCategory,
} from "@/entities/quiz/api";
import { Flex } from "@/shared/ui";

interface QuizCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<SearchParams>;
}

export const QuizCategoryPage: React.FC<QuizCategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const category = await params.then((params) => params.category);
  const date = await searchParams.then((params) =>
    getValidDateExpression(params.date),
  );

  // TODO : 404 페이지 만들기
  if (!isValidCategory(category)) {
    return <div>404</div>;
  }

  const prefetchedQueryClient = await serverPrefetchGetQuizByCategory({
    category,
    date,
    page: 1,
  });

  return (
    <Flex
      as="main"
      direction="column"
      gap="lg"
      className="p-4 border max-w-5xl mx-auto"
    >
      <HydrationBoundary state={prefetchedQueryClient}>
        <Quiz.Provider category={category} date={date}>
          <Quiz.ProgressNavigationBar />
          <div className="w-full max-w-96 aspect-square bg-gray-100">
            비디오 대따큰 비디오
          </div>
          <Quiz.Content />
          <footer>CopyRight 2025. All rights reserved.</footer>
        </Quiz.Provider>
      </HydrationBoundary>
    </Flex>
  );
};

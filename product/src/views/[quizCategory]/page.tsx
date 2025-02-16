import type { SearchParams } from "next/dist/server/request/search-params";
import React from "react";
import { HydrationBoundary } from "@tanstack/react-query";
import { QuizWidget } from "@/widgets/quiz/ui";
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
    <Flex as="main" direction="column" gap="lg">
      <HydrationBoundary state={prefetchedQueryClient}>
        <QuizWidget category={category} date={date} />
      </HydrationBoundary>
    </Flex>
  );
};

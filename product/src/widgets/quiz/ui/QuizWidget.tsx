"use client";

import React, {
  SetStateAction,
  Suspense,
  use,
  useState,
  type PropsWithChildren,
} from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { BlankQuiz } from "@/features/quiz/ui";
import type { ValidDateExpression } from "@/entities/date/types";
import { ProgressBar, ProgressCounter } from "@/entities/progress/ui";
import { useGetQuizByCategory } from "@/entities/quiz/api";
import type {
  Category,
  GetQuizByCategoryResponse,
} from "@/entities/quiz/types";
import { YoutubeVideo } from "@/entities/video/ui";
import { either } from "@/shared/lib/function";
import { BackwardButton, Flex, Heading } from "@/shared/ui";

interface QuizWidgetProps {
  category: Category;
  date: ValidDateExpression;
}

export const QuizWidget: React.FC<QuizWidgetProps> = ({ category, date }) => {
  const [page, setPage] = useState<number>(1);
  const query = useGetQuizByCategory({ category, date, page });
  const handlePage = (callback: SetStateAction<number>) => setPage(callback);

  return (
    <QuizWidgetContainer>
      <Suspense fallback={<div>...loading</div>}>
        <QuizProgressNavigationBar query={query} />
        <QuizVideo query={query} />
        <ConditionalQuizFool query={query} handlePage={handlePage} />
      </Suspense>
    </QuizWidgetContainer>
  );
};

const QuizWidgetContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex as="main" direction="column" gap="lg" align="center">
      {children}
    </Flex>
  );
};

interface QuizItemProps {
  query: UseQueryResult<GetQuizByCategoryResponse>;
}

const QuizProgressNavigationBar: React.FC<QuizItemProps> = ({ query }) => {
  const { totalPage, currentPage } = use(query.promise);

  return (
    <Flex gap="sm" align="center" as="nav" className="w-full">
      <BackwardButton />
      <ProgressBar
        current={currentPage}
        total={totalPage}
        classNames={{
          total: "h-4",
        }}
      />
      <ProgressCounter current={currentPage} total={totalPage} />
    </Flex>
  );
};

interface ConditionalQuizFoolProps extends QuizItemProps {
  handlePage: (callback: SetStateAction<number>) => void;
}

const ConditionalQuizFool: React.FC<ConditionalQuizFoolProps> = ({
  query,
  handlePage,
}) => {
  const { quiz } = use(query.promise);

  switch (quiz.type) {
    case "blank":
      return (
        <BlankQuiz {...quiz}>
          <BlankQuiz.Question />
          <BlankQuiz.Options />
          <div className="w-full flex justify-end">
            <BlankQuiz.SubmitButton
              onCorrect={() => handlePage((prev) => prev + 1)}
              onIncorrect={() => alert("틀렸습니다.")}
            >
              {either(query.isFetching, "제출", "loading")}
            </BlankQuiz.SubmitButton>
          </div>
        </BlankQuiz>
      );
    default:
      return null as never;
  }
};

const QuizVideo: React.FC<QuizItemProps> = ({ query }) => {
  const { video } = use(query.promise);

  return (
    <Flex direction="column" gap="sm" align="center">
      <Heading color="black">{video.title}</Heading>
      <YoutubeVideo videoId={video.videoId} />
    </Flex>
  );
};

"use client";

import { type PropsWithChildren, createContext, use, useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { FillInBlankQuiz } from "@/features/quiz/ui";
import type { ValidDateExpression } from "@/entities/date/types";
import { ProgressBar, ProgressCounter } from "@/entities/progress/ui";
import { useGetQuizByCategory } from "@/entities/quiz/api";
import type {
  Category,
  GetQuizByCategoryResponse,
} from "@/entities/quiz/types";
import { BackwardButton, Flex } from "@/shared/ui";

interface QuizWidgetProps {
  category: Category;
  date: ValidDateExpression;
}

interface QuizContextProps {
  page: number;
  setPage: (page: number) => void;
}

type ResolvedQueryResult<T> = UseQueryResult<T, Error> & {
  data: T;
  isLoading: false;
};

const QuizContext = createContext<QuizContextProps | null>(null);

const QuizQueryContext =
  createContext<ResolvedQueryResult<GetQuizByCategoryResponse> | null>(null);

export const Provider: React.FC<PropsWithChildren<QuizWidgetProps>> = ({
  children,
  ...props
}) => {
  const [page, setPage] = useState<number>(1);
  const query = useGetQuizByCategory({ ...props, page });

  // TODO: 현재 data는 KeepPreviousData로 인해 이전 데이터를 유지하고 있다.
  // isPlaceHolderData 일때의 로직을 생각해 봐야 한다.
  if (!query.data || query.isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <QuizContext value={{ page, setPage }}>
      <QuizQueryContext value={query}>
        <Flex as="main" direction="column" gap="lg" align="center">
          {children}
        </Flex>
      </QuizQueryContext>
    </QuizContext>
  );
};

export const ProgressNavigationBar: React.FC = () => {
  const { data } = use(QuizQueryContext)!;

  return (
    <Flex gap="sm" align="center" as="nav" className="w-full">
      <BackwardButton />
      <ProgressBar
        total={data.totalPage}
        current={data.currentPage}
        classNames={{
          total: "h-4",
        }}
      />
      <ProgressCounter total={data.totalPage} current={data.currentPage} />
    </Flex>
  );
};

export const Content: React.FC = () => {
  const { quiz } = use(QuizQueryContext)!.data;
  const { page, setPage } = use(QuizContext)!;

  switch (quiz.type) {
    case "blank":
      return (
        <FillInBlankQuiz {...quiz}>
          <FillInBlankQuiz.Questions />
          <FillInBlankQuiz.Options />
          <FillInBlankQuiz.NextButton
            onCorrect={() => setPage(page + 1)}
            onIncorrect={() => alert("inCorrect!")}
          />
        </FillInBlankQuiz>
      );
    default:
      return null as never;
  }
};

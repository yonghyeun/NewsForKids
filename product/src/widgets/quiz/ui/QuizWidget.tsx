"use client";

import React, { SetStateAction, Suspense, use, useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { BlankQuiz } from "@/features/quiz/ui";
import type { ValidDateExpression } from "@/entities/date/types";
import {
  ProgressBar,
  ProgressCounter,
  ProgressProps,
} from "@/entities/progress/ui";
import { useGetQuizByCategory } from "@/entities/quiz/api";
import type {
  Category,
  GetQuizByCategoryResponse,
  QuizFool,
} from "@/entities/quiz/types";
import { YoutubeVideo } from "@/entities/video/ui";
import { either } from "@/shared/lib/function";
import { BackwardButton, Button, Flex, Heading } from "@/shared/ui";

interface QuizWidgetProps {
  category: Category;
  date: ValidDateExpression;
}

export const QuizWidget: React.FC<QuizWidgetProps> = ({ category, date }) => {
  const [page, setPage] = useState<number>(1);
  const query = useGetQuizByCategory({ category, date, page });
  const handlePage = (callback: SetStateAction<number>) => setPage(callback);

  return (
    <Suspense fallback={<div>...loading</div>}>
      <QuizItem query={query} handlePage={handlePage} />
    </Suspense>
  );
};

interface QuizItemProps {
  query: UseQueryResult<GetQuizByCategoryResponse>;
  handlePage: (callback: SetStateAction<number>) => void;
}

const QuizItem: React.FC<QuizItemProps> = ({ query, handlePage }) => {
  const [pointer, setPointer] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { totalPage, currentPage, video, quiz } = use(query.promise);

  const handleMovePointer = () => setPointer((pointer) => pointer + 1);
  const handleMoveNext = () => {
    either(
      pointer === quiz.length,
      () => setPointer((pointer) => pointer + 1),
      () =>
        either(
          currentPage === totalPage,
          () => {
            handlePage((page) => page + 1);
            setPointer(0);
          },
          () => setIsSuccess(true),
        ),
    );
  };

  if (isSuccess) {
    return <div>success!!</div>;
  }

  return (
    <Flex as="main" direction="column" gap="lg" align="center">
      <QuizProgressNavigationBar current={currentPage} total={totalPage} />
      {either(
        pointer === 0,
        <QuizFool onCorrect={handleMoveNext} quiz={quiz[pointer - 1]} />,
        <QuizVideo
          videoId={video.videoId}
          title={video.title}
          onClick={handleMovePointer}
        />,
      )}
    </Flex>
  );
};

const QuizProgressNavigationBar: React.FC<ProgressProps> = ({
  total,
  current,
}) => {
  return (
    <Flex gap="sm" align="center" as="nav" className="w-full">
      <BackwardButton />
      <ProgressBar
        current={current}
        total={total}
        classNames={{
          total: "h-4",
        }}
      />
      <ProgressCounter current={current} total={total} />
    </Flex>
  );
};

interface QuizFoolProps {
  quiz: {
    type: QuizFool["type"];
    question: string[];
    answer: string[];
    options: string[];
  };
  onCorrect: () => void;
}

const QuizFool: React.FC<QuizFoolProps> = ({ onCorrect, quiz }) => {
  switch (quiz.type) {
    case "blank":
      return (
        <BlankQuiz {...quiz}>
          <BlankQuiz.Question />
          <BlankQuiz.Options />
          <div className="w-full flex justify-end">
            <BlankQuiz.SubmitButton
              onCorrect={onCorrect}
              onIncorrect={() => alert("틀렸습니다.")}
            >
              제출
            </BlankQuiz.SubmitButton>
          </div>
        </BlankQuiz>
      );
    default:
      return null as never;
  }
};

interface QuizVideoProps {
  videoId: string;
  title: string;
  onClick: () => void;
}

const QuizVideo: React.FC<QuizVideoProps> = ({ videoId, title, onClick }) => {
  return (
    <Flex direction="column" gap="sm" align="center">
      <Heading color="black">{title}</Heading>
      <YoutubeVideo videoId={videoId} />
      <Button variant="primary" onClick={onClick}>
        문제 풀기
      </Button>
    </Flex>
  );
};

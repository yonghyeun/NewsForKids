import React from "react";
import { QuizProgressNavigationBar } from "@/widgets/quiz/ui";
import { Flex } from "@/shared/ui";

export const NewsPage: React.FC = () => {
  return (
    <Flex
      as="section"
      direction="column"
      gap="lg"
      className="p-4 border max-w-5xl mx-auto"
    >
      {/* header */}
      <QuizProgressNavigationBar current={1} total={10} />
      {/* main section */}
      <Flex
        as="main"
        direction="column"
        justify="around"
        gap="md"
        className="flex-1 py-8
        "
      >
        <div className="w-full max-w-96 aspect-square bg-gray-100">
          비디오 대따큰 비디오
        </div>

        <div>
          <div>문제 맞추는 섹션</div>
          <div>문제 보기가 나오는 섹션</div>
          <div>다음 버튼</div>
        </div>
      </Flex>
      <footer>CopyRight 2021. All rights reserved.</footer>
    </Flex>
  );
};

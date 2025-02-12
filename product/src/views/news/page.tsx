import React from "react";
import { Flex, Text } from "@/shared/ui";

export const NewsPage: React.FC = () => {
  return (
    <Flex
      as="section"
      direction="column"
      gap="lg"
      className="p-4 border max-w-5xl mx-auto"
    >
      {/* header */}
      <Flex as="header" justify="between" align="stretch" gap="md">
        <button>닫기</button>
        <div className="flex-1 bg-gray-50">프로그레스바</div>
        <Text as="p">
          <Text as="span">1</Text>
          <Text as="span">/</Text>
          <Text as="span">10</Text>
        </Text>
      </Flex>
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

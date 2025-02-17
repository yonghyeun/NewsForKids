import { NextRequest, NextResponse } from "next/server";

const getExampleData = (currentPage: number, date: string) => ({
  category: "news",
  date,
  totalPage: 3,
  currentPage,
  video: {
    title:
      "20250214.미국, 저소득층 및 장애인 지원 확대 위한 지역 사회 복지 프로그램 발표 #어린이뉴스",
    videoId: "CE10X1KWqFw",
    url: "https://youtube.com/shorts/CE10X1KWqFw",
  },
  quiz: [
    {
      type: "blank",
      question: ["미국이", "*", "*", "*", "*", "층을", "돕기로", "했어요"],
      answer: ["저", "소", "득", "층"],
      options: ["저", "소", "득", "층", "가", "정"],
    },
    {
      type: "blank",
      question: ["미국의", "모든", "*", "에서", "도움을", "줘요"],
      answer: ["주"],
      options: ["주", "시", "군", "구", "동", "읍"],
    },
  ],
});

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date")!;
  const page = searchParams.get("page")!;

  try {
    return NextResponse.json(getExampleData(Number(page), date));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "뉴스 데이터를 가져오는데 실패했습니다." },
      {
        status: 500,
      },
    );
  }
};

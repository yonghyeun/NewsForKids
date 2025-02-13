import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  const page = searchParams.get("page");

  return NextResponse.json({
    category: "news",
    date,
    totalPage: 5,
    currentPage: Number(page),
    quiz: {
      type: "blank",
      question: "가나다라 *** 아자차 카타파하",
      answer: "마바사".split(""),
      options: "아마자차바카타사파하".split(""),
    },
  });
};

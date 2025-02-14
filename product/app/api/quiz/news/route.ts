import { NextRequest, NextResponse } from "next/server";
import { createRandomBlankQuiz } from "./quiz";
import { getYoutubePlaylist } from "./video";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  const page = searchParams.get("page");

  try {
    const PLAY_LIST_ID = "PL2nBWWs4L0mi6am0NAUiVN1zAhwIyaSCv";
    const video = await getYoutubePlaylist(PLAY_LIST_ID, Number(page));

    // 뭐가 됐건 프론트엔드 입장에서는 video id,title,thumbnail만 존재하면 된다.

    return NextResponse.json({
      category: "news",
      date,
      totalPage: 5,
      currentPage: Number(page),
      video,
      quiz: {
        type: "blank",
        ...createRandomBlankQuiz(),
      },
    });
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

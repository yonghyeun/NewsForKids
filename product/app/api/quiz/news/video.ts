import { YOUTUBE_API_KEY } from "@/shared/api/config";

interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [key in string]: {
      url: string;
      width: number;
      height: number;
    };
  };
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  resourceId: {
    kind: string;
    videoId: string;
  };
  channelTitle: string;
  playlistId: string;
  position: number;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

interface VideoItem {
  kind: "youtube#playlist";
  etag: string;
  id: string;
  snippet: VideoSnippet;
}

interface YoutubePlayListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: VideoItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export const pickYoutubeInfoByPage = (
  videoItems: VideoItem[],
  page: number,
) => {
  const videoItem = videoItems[page];
  const { title, thumbnails, resourceId } = videoItem.snippet;

  return {
    title,
    thumbnails,
    videoId: resourceId.videoId,
  };
};

const YOUTUBE_PLAYLIST_BASE_URL =
  "https://www.googleapis.com/youtube/v3/playlistItems";

/**
 * 해당 api 요청은 재생목록 id 를 이용해 해당 재생 목록에 존재하는
 * 비디오들의 정보를 가져온다.
 */
export const getYoutubePlaylist = async (
  PLAY_LIST_ID: string,
  page: number = 0,
) => {
  const url = new URL(YOUTUBE_PLAYLIST_BASE_URL);
  url.search = new URLSearchParams({
    key: YOUTUBE_API_KEY,
    part: "snippet",
    playlistId: PLAY_LIST_ID,
    maxResults: "10",
  }).toString();

  const response = await fetch(url);
  const youtubeData: YoutubePlayListResponse = await response.json();

  return pickYoutubeInfoByPage(youtubeData.items, page);
};

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { either } from "@/shared/lib/function";

interface YoutubeVideoProps extends YouTubeProps {
  videoId: string;
  ratio: "video" | "shorts";
}

export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({
  ratio,
  ...props
}) => {
  return (
    <YouTube
      className={either(
        ratio === "video",
        "h-full aspect-shorts",
        "w-full aspect-video",
      )}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
          rel: 0,
        },
      }}
      {...props}
    />
  );
};

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeVideoProps extends YouTubeProps {
  videoId: string;
}

export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ ...props }) => {
  return (
    <YouTube
      className="h-full aspect-shorts"
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

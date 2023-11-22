"use client";
import React, { useState } from "react";

export default function TwitchClips({ twitchClips, subdomain }) {
  const [twitchClipPlayerOpen, setTwitchClipPlayerOpen] = useState(false);
  const [currentTwitchClip, setCurrentTwitchClip] = useState(null);

  const handlePlayTwitchClip = (clip) => {
    setTwitchClipPlayerOpen(true);
    setCurrentTwitchClip(clip);
    console.log(clip.embed_url);
  };

  const handleCloseTwitchClip = () => {
    setTwitchClipPlayerOpen(false);
    setCurrentTwitchClip(null);
  };

  return (
    <>
      {twitchClipPlayerOpen && (
        <div
          onClick={handleCloseTwitchClip}
          className="flex items-center justify-center fixed top-0 inset-0 w-screen h-screen bg-black z-[105] bg-opacity-75"
        >
          <iframe
            src={`${currentTwitchClip.embed_url}&parent=${subdomain}.streamy.pro`}
            height="720"
            width="1280"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-2">
        {twitchClips?.map((clip) => {
          return (
            <div
              onClick={() => {
                handlePlayTwitchClip(clip);
              }}
              key={clip.id}
              className="flex flex-col overflow-hidden w-[375px] cursor-pointer py-4 hover:p-4 hover:scale-125 transition duration-500 hover:border-2 hover:border-white hover:text-white hover:bg-black rounded-2xl"
            >
              <p className="hover:animate-marquee whitespace-nowrap text-2xl overflow-hidden hover:overflow-visible font-quattrocento font-bold text-center">
                {clip.title}
              </p>
              <img src={clip.thumbnail_url} className="rounded-2xl" />
            </div>
          );
        })}
      </div>
    </>
  );
}

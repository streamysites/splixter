"use client"
import React, { useEffect } from 'react';
import { useYoutube } from '../useYoutube';
import { on } from 'events';

export default function YoutubeVideos() {


  function loadVideo() {
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          'playsinline': 1
        }
      });
    }
    onYouTubeIframeAPIReady();
  }

  useYoutube(loadVideo);

  return (
    <div>
    </div>
  )
}
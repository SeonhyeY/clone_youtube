import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function SameChannelVideos({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['sameChannel', channelId],
    queryFn: () => youtube.searchByChannelId(channelId),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

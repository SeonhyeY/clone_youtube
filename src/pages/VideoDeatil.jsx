import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import SameChannelVideos from '../components/SameChannelVideos';

export default function VideoDeatil() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className='flex flex-col md:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        ></iframe>
        <div className='p-6'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <SameChannelVideos channelId={channelId} />
      </section>
    </section>
  );
}

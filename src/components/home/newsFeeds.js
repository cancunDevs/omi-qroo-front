import React from 'react';

import Feed from './feedItem';
import news from '../../api/newsFeedsMock';

const NewsFeeds = () => {
  return (
    <div className='container'>
      <h1>Noticias recientes: </h1>
      <div className='list-group'>
        {news.map((item) => {
          return (
            <Feed
              title={item.title}
              image={item.src}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsFeeds;

import React, { useState } from 'react';
import useSWR from 'swr';
import Error from '../../components/error/error';

const fetcher = (url) => async () =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const Comments = () => {
  //const { data, error } = useSWR('/api/comments', fetcher('/api/comments'));
  const [data, setData] = useState({ comments: [] });

  //   if (error) {
  //     return <Error error={error} />;
  //   }

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  const handleFetch = () => {
    fetch('/api/comments')
      .then((res) => res.json())
      .then(setData);
  };

  const handleClear = () => {
    setData({ comments: [] });
  };

  return (
    <div>
      <button onClick={handleFetch}>Load Comments</button>
      <button onClick={handleClear}>Clear Comments</button>
      {data.comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};

export default Comments;

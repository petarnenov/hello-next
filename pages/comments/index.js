import React, { useState } from 'react';
import useSWR from 'swr';
import Error from 'components/error/error';
import comments from '../../data/comments';

const fetcher = (url) => async () =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const Comments = () => {
  //const { data, error } = useSWR('/api/comments', fetcher('/api/comments'));
  const [data, setData] = useState({ comments: [] });
  const [error, setError] = useState(null);

  console.error('error-client: ', error);

  //   if (error) {
  //     return <Error error={error} />;
  //   }

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  const handleFetch = () => {
    setError(null);
    fetch('/api/comments')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => {
        console.error('error-client-catch: ', error);
        setError(err);
      });
  };

  const handleClear = () => {
    setData({ comments: [] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      text: e.target.comment.value,
    };
    setError(null);
    fetch('/api/comments', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.comment);
        setData({ comments: data.comments });
      })
      .catch((err) => setError(err));
  };

  const handleDelete = (id) => (e) => {
    fetch(`/api/comments/${id}`, {
      method: 'Delete',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.comment);
        setData({ comments: data.comments });
      });
  };

  return (
    <div>
      {error && <Error error={error} />}
      <button onClick={handleFetch}>Load Comments</button>
      <button onClick={handleClear}>Clear Comments</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add comment" name="comment" />
        <button type="submit">Submit Comment</button>
      </form>
      {!error &&
        data.comments?.map((comment) => (
          <div key={comment.id}>
            {comment.text}{' '}
            <span>
              <button onClick={handleDelete(comment.id)}>X</button>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Comments;

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setIsLoading(true);
    fetch('http://localhost:4000/dashboard', { signal })
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then(setData)
      .catch(console.error);

    return () => controller.abort();
  }, []);

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          <div>Posts: {data.posts}</div>
          <div>Likes: {data.likes}</div>
          <div>Followers: {data.followers}</div>
          <div>Following: {data.following}</div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
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

  if (status === 'loading') {
    return <div>Loading ...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/api/auth/signin');
    return null;
  }

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          <h3>Welcome, {session.user.name}</h3>
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

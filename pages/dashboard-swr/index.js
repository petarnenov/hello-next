import React from 'react';
import useSWR from 'swr';
import Error from '../../components/error/error';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard');
  const data = await res.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR('/dashboard-swr', fetcher);

  if (error) {
    return <Error error={error} />;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Posts: {data.posts}</div>
      <div>Likes: {data.likes}</div>
      <div>Followers: {data.followers}</div>
      <div>Following: {data.following}</div>
    </div>
  );
};

export default DashboardSWR;

import Link from 'next/link';
import React from 'react';
import TheNews from 'components/news/theNews';

const NewsList = ({ news = [] }) => {
  return (
    <div>
      <h1>NewsList</h1>
      {news.map((theNews) => (
        <TheNews
          key={theNews.id}
          title={theNews.title}
          category={theNews.category}
        />
      ))}
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const data = await fetch('http://localhost:4000/news').then((res) =>
    res.json()
  );

  return {
    props: {
      news: data,
    },
  };
}

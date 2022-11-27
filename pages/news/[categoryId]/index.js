import React from 'react';
import TheNews from 'components/news/theNews';
import { getSession } from 'next-auth/react';

const NewsListByCategory = ({ news = [] }) => {
  console.log('seen:', '👀', String.fromCodePoint(128512));
  return (
    <div>
      <h3>News List by Category</h3>
      {news.map((theNews) => (
        <TheNews
          key={theNews.id}
          title={theNews.title}
          category={theNews.category}
        />
      ))}
    </div>
  );
};

export default NewsListByCategory;

export async function getServerSideProps(context) {
  // server-side authentication
  const session = await getSession(context);
  const { params, req, res, query } = context;
  const { categoryId } = params;

  console.log('session: ', session);
  console.log('cookie: ', req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Petar']);

  console.log('query: ', query);

  if (!session) {
    return {
      redirect: {
        // get redirect url as environment variable
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/news',
        permanent: false,
      },
    };
  }

  const data = await fetch(
    `http://localhost:4000/news?category=${categoryId}`
  ).then((res) => res.json());

  return {
    props: {
      news: data,
    },
  };
}

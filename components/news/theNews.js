import Link from 'next/link';
import React from 'react';

const TheNews = ({ title, category }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Link href={`/news/${category}`}>{category}</Link>
    </div>
  );
};

export default TheNews;

import Link from 'next/link';
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const data = await fetch('http://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return {
    props: { posts: data },
  };
}

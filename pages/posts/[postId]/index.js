import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Post = ({ post }) => {
  const router = useRouter();
  const { isFallback } = router;
  if (isFallback) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
      <Link href="/posts">Back</Link>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const data = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());

  // if (data.id === undefined) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const data = await fetch('http://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return {
    paths: data.map((post) => ({ params: { postId: post.id.toString() } })),
    fallback: 'blocking', // [false], [true] and [blocking]
  };
}

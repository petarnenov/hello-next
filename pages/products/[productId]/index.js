import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Product = ({ product }) => {
  const router = useRouter();
  const { isFallback } = router;
  if (isFallback) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>
        {product.id} {product.title}
      </h2>
      <p>Description: {product.description}</p>
      <p>
        Price: <span>${product.price}</span>
      </p>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const { productId: productId } = params;
  const data = await fetch(`http://localhost:4000/products/${productId}`).then(
    (res) => res.json()
  );

  if (data.id === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
    revalidate: 10, // revalidate every 30 seconds
  };
}

export async function getStaticPaths() {
  const data = await fetch('http://localhost:4000/products').then((res) =>
    res.json()
  );

  return {
    paths: [{ params: { productId: '1' } }], // data.map((product) => ({ params: { productId: product.id.toString() } })),
    fallback: true, // [false], [true] and [blocking]
  };
}

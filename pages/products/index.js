import Link from 'next/link';
import React from 'react';

const ProdictList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProdictList;

export async function getStaticProps() {
  const data = await fetch('http://localhost:4000/products').then(
    (res) => res.json()
  );

  return {
    props: { products: data },
    revalidate: 10
  };
}

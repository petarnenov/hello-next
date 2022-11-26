import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductList = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <Link href={'/product/1'}>Product 1</Link>
      </div>
      <div>
        P<Link href="/product/2">Product 2</Link>
      </div>
      <div>
        <Link href="/product/3" replace>Product 3</Link>
      </div>
      <div>
        <Link href="/product/100">Product 100</Link>
      </div>
      <Link href="/">Goto Home</Link>
    </>
  );
};

export default ProductList;

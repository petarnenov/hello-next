import { useRouter } from 'next/router';
import React from 'react';

const Produst = () => {
  const router = useRouter();
  console.log(router);
  const {
    query: { productId },
  } = router;
  return <div>{`Product page - [${productId}]`}</div>;
};

export default Produst;

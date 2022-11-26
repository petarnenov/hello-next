import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
  const router = useRouter();
  const {
    query: { productId, reviewId },
  } = router;
  return <div>{`Review page = [${reviewId}] for Product [${productId}]`}</div>;
};

export default Review;

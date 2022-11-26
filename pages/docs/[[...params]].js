import { useRouter } from 'next/router';
import React from 'react';

const Doc = () => {
  const router = useRouter();
  const {
    query: { params = [] },
  } = router;

  const DocPage = () =>
    ({
      0: <div>Zero</div>,
      1: <div>One</div>,
      2: <div>Three</div>,
    }[params.length] || <div>Default</div>);

  return (
    <div>
      <h1>Doc Page</h1>
      <DocPage />
    </div>
  );
};

export default Doc;

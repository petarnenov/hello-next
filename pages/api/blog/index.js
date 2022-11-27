import { getSession } from 'next-auth/react';

export default function handler(req, res) {
  const session = getSession(req);

  console.log('session-blog: ', session);

  return res.status(200).json({ data: 'Blogs' });
}

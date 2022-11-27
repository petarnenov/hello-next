import comments from '../../../data/comments';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  console.log('session-comments: ', session);

  if (!session) {
    return res.status(401).json({error:"Unauthenticated user"})
  }

  if (req.method === 'GET') {
    return res.status(200).json({ comments });
  }
  if (req.method === 'POST') {
    const comment = req.body;
    comment['id'] = comments.length + 1;
    comments.push(comment);
    return res.status(200).json({ comments, comment });
  }
  return res.status(500).json({ error: 'unhandled method' });
}

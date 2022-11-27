import comments from '../../../data/comments';

export default function handler(req, res) {
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

import comments from '../../../data/comments';

export default function handler(req, res) {
  return res.status(200).json({ comments });
}

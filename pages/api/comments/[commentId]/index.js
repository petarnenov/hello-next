import comments from '../../../../data/comments';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { commentId } = req.query;
    const comment = comments.find((comment) => comment.id === commentId);
    res.status(200).json({ comments: updatedComments, comment });
  }
  if (req.method === 'DELETE') {
    const { commentId } = req.query;
    const comment = comments.find((comment) => comment.id === commentId);
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.status(200).json({ comments, comment });
  }
}

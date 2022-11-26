export default function handler(req, res) {
  return res
    .status(200)
    .json({ likes: 200, followers: 24, followings: 34, posts: 50 });
}

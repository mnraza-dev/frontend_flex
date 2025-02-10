// pages/api/blog/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: string;
  content: string;
}

const posts: Post[] = [
  { id: '1', content: '<p>This is a blog post with <b>bold</b> text and a <i>cool</i> heading.</p>' },
  { id: '2', content: '<h1>Another blog post</h1><p>More content here...</p>' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const post = posts.find((post) => post.id === id);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
}

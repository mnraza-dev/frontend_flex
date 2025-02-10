import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

interface BlogPostProps {
  postId: string;
}

const BlogPost = ({ postId }: BlogPostProps) => {
  const [postContent, setPostContent] = useState<string>('');

  useEffect(() => {
    // Simulating fetching the content (you can replace this with your API call)
    fetch(`/api/blog/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPostContent(data.content);
      });
  }, [postId]);

  return (
    <div className="blog-post">
      <h1>Blog Post</h1>
      <div
        className="quill-editor"
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  );
};

// Fetch dynamic blog post by ID using `getServerSideProps`
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  // Fetching the post (this would be from your database in a real app)
  return { props: { postId: id } };
};

export default BlogPost;

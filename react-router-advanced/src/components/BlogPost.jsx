import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams(); // ✅ Get the slug from the URL

  return (
    <div>
      <h2>Blog Post: {slug}</h2>
      <p>This is the content for the blog post with the slug: "{slug}".</p>
    </div>
  );
};

export default BlogPost;

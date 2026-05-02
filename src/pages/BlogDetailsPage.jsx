import { Navigate, useParams } from 'react-router-dom';
import BlogDetailsContent from '../components/blog-details/BlogDetailsContent';
import { findBlogBySlug } from '../data/blogDetails';

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const blog = findBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogDetailsContent blog={blog} />;
}

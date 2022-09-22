import { usePosts } from '../../hooks/usePosts';
import BlogCard from '../BlogCard/BlogCard';

export default function Main() {
  const posts = usePosts();
  return (
    <>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </>
  );
}

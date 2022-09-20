import { usePosts } from '../../hooks/usePosts';
import BlogCard from '../BlogCard/BlogCard';

export default function Main() {
  const posts = usePosts();
  return (
    <>
      {posts.map(({ id, title, subtitle, text, image }) => (
        <BlogCard key={id} {...{ title, subtitle, text, image }} />
      ))}
    </>
  );
}

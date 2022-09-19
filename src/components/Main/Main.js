import { usePosts } from '../../hooks/usePosts';

export default function Main() {
  const posts = usePosts();
  return (
    <div>
      {posts.map(({ id, title, subtitle, text, image }) => (
        <div key={id}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <img src={`${image}`} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

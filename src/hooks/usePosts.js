import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/posts';

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  return posts;
}

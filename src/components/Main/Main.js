import React, { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { client, checkError, getPosts } from '../../services/client';

export default function Main() {
  const posts = usePosts();
  console.log(posts);
  return (
    <div>
      {posts.map(({ id, title, subtitle, text }) => (
        <div key={id}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

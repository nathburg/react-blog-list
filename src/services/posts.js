import { checkError, client } from './client';

export async function fetchPosts() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}
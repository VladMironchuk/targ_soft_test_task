import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (e) {
    return [];
  }
};

import mockAxios from 'jest-mock-axios';
import { BASE_URL, fetchPosts } from './utils/getPosts';

describe('fetchPosts', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('when API call is successful', () => {
    it('should return posts list', async () => {
      const posts = [
        {
          id: 1,
          post: 'title 1',
        },
        {
          id: 2,
          post: 'title 2',
        },
      ];
      mockAxios.get.mockResolvedValueOnce(posts);

      const result = await fetchPosts();

      expect(mockAxios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual(result);
    });
  });

  describe('when API call fails', () => {
    it('should return empty users list', async () => {
      const message = 'Network Error';
      mockAxios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchPosts();

      expect(mockAxios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual([]);
    });
  });
});

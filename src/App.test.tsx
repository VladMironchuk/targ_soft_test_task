import mockAxios from 'jest-mock-axios';
import { BASE_URL, fetchPosts } from './utils/getPosts';
import { render, screen } from '@testing-library/react';
import TableGrid from './components/Grid';
import { Post } from './redux/slices/posts';
import { Provider } from 'react-redux';
import store from './redux/store';

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
      expect(posts).toEqual(result);
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

describe('render', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('correct render', () => {
    it('should render table', async () => {
      const posts = [
        {
          id: 1,
          userId: 1,
          title: 'title 1',
          body: 'a',
        },
        {
          id: 2,
          userId: 1,
          title: 'title 2',
          body: 'b',
        },
      ];
      mockAxios.get.mockResolvedValueOnce(posts);

      const result = (await fetchPosts()) as Post[];

      const { container } = render(
        <Provider store={store}>
          <TableGrid posts={result} />
        </Provider>
      );

      const rowsNumber = container.querySelectorAll('tr').length;

      expect(rowsNumber).toBe(posts.length + 1);
    });
  });

  it('should render specific message', async () => {
    const message = 'Network Error';
    mockAxios.get.mockRejectedValueOnce(new Error(message));

    const result = (await fetchPosts()) as Post[];

    render(
      <Provider store={store}>
        <TableGrid posts={result} />
      </Provider>
    );
    expect(screen.getByText('No data')).toBeTruthy();
  });
});

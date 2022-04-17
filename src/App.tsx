import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import './styles/main.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableGrid from './components/Grid';
import Background from './components/Background';
import AddingTitleModal from './components/AddingTitleModal';
import { RootState } from './redux/store';
import { Post, postsAction } from './redux/slices/posts';
import SubmitEditingModal from './components/SubmitDeletingModal';
import { fetchPosts } from './utils/getPosts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const isBackgroundVisible = useSelector(
    (state: RootState) => state.modal.isBackgroundVisible
  );
  const isAddingTitleModalVisible = useSelector(
    (state: RootState) => state.modal.isAddingTitleModalIsVisible
  );
  const isSubmitDeletingModalVisible = useSelector(
    (state: RootState) => state.modal.isSubmitDeletingModalIsVisible
  );
  const posts = useSelector((state: RootState) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data: posts } = (await fetchPosts()) as { data: Post[] };
      dispatch(postsAction.initPost({ posts }));
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {isSubmitDeletingModalVisible && <SubmitEditingModal />}
      {isBackgroundVisible && <Background />}
      {isAddingTitleModalVisible && <AddingTitleModal />}
      <Header />
      <TableGrid posts={posts} />
      <Footer />
    </>
  );
}

export default App;

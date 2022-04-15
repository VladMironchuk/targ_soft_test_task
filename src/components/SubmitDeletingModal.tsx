import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from '../elements/modal/Modal';
import { modalActions } from '../redux/slices/modal';
import { postsAction } from '../redux/slices/posts';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & {
    .btn {
      width: 150px;
    }
  }
`;

const SubmitEditingModal: React.FC = () => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(modalActions.toggleSubmitDeletingModal());
    dispatch(modalActions.toggleBackground());
  };

  const onSubmitDeleting = () => {
    dispatch(postsAction.deletePost());
    dispatch(postsAction.resetIdToDelete());
    dispatch(modalActions.toggleSubmitDeletingModal());
    dispatch(modalActions.toggleBackground());
  };

  const onCancelDeleting = () => {
    dispatch(postsAction.resetIdToDelete());
    dispatch(modalActions.toggleSubmitDeletingModal());
    dispatch(modalActions.toggleBackground());
  };

  return (
    <Modal style={{ width: '30%' }} onClick={onCloseModal}>
      <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
        Are you sure?
      </h1>
      <ButtonsWrapper>
        <button onClick={onSubmitDeleting} className="btn btn-success">
          Yes
        </button>
        <button onClick={onCancelDeleting} className="btn btn-danger">
          No
        </button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default SubmitEditingModal;

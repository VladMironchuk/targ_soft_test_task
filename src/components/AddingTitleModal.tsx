import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../elements/modal/Modal';
import TextInput from '../elements/TextInput';
import { modalActions } from '../redux/slices/modal';
import { postsAction } from '../redux/slices/posts';

const AddingTitleForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(modalActions.toggleBackground());
    dispatch(modalActions.toggleAddingTitleModal());
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(
      postsAction.addPost({
        post: {
          title,
          body,
        },
      })
    );
    onCloseModal();
  };

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const onChangeBody: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBody(event.target.value);
  };

  return (
    <Modal onClick={onCloseModal}>
      <form onSubmit={onSubmit}>
        <TextInput
          id="inputTitle"
          placeholdrer="Enter title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextInput
          id="body"
          placeholdrer="Enter body"
          value={body}
          onChange={onChangeBody}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddingTitleForm;

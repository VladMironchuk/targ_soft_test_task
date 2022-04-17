import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../elements/modal/Modal';
import TextInput from '../elements/TextInput';
import { modalActions } from '../redux/slices/modal';
import { postsAction } from '../redux/slices/posts';

const AddingTitleForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [bodyErrorMessage, setBodyErrorMessage] = useState('');

  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(modalActions.toggleBackground());
    dispatch(modalActions.toggleAddingTitleModal());
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    setTitleErrorMessage('');
    setBodyErrorMessage('');

    if (!title.trim()) {
      setTitleErrorMessage('Enter valid title');
      return;
    }

    if (!body.trim()) {
      setBodyErrorMessage('Enter valid body');
      return;
    }

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
          errorMesage={titleErrorMessage}
        />
        <TextInput
          id="body"
          placeholdrer="Enter body"
          value={body}
          onChange={onChangeBody}
          errorMesage={bodyErrorMessage}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddingTitleForm;

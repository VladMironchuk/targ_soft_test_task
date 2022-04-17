import ResetWidthButton, { ResetWidthButtonProps } from './ResetWidthButton';
import {
  Plugin,
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { modalActions } from '../redux/slices/modal';
import { useDispatch } from 'react-redux';

const ResizingPanel: React.FC<ResetWidthButtonProps> = (props) => {
  const dispatch = useDispatch();

  const onToggleAddingTitleModal = () => {
    dispatch(modalActions.toggleAddingTitleModal());
    dispatch(modalActions.toggleBackground());
  };

  return (
    <Plugin name="ResizingPanel">
      <Template name="toolbarContent">
        <ResetWidthButton {...props} />
        <TemplatePlaceholder />
        <button onClick={onToggleAddingTitleModal} className="btn btn-primary">
          Add Post
        </button>
      </Template>
    </Plugin>
  );
};

export default ResizingPanel;

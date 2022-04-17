import styled from 'styled-components';
import ReactDOM from 'react-dom';

const BackgroundView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;
export default function Background() {
  return ReactDOM.createPortal(
    <BackgroundView />,
    document.getElementById('background') as HTMLElement
  );
}

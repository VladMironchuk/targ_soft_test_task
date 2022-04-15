import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;
export default function BackgroundElem() {
  return ReactDOM.createPortal(
    <Background />,
    document.getElementById('background') as HTMLElement
  );
}

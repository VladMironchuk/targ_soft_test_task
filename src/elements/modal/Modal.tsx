import { ReactNode } from 'react';
import styled from 'styled-components';
import logo from '../../assets/close.png';

const Layout = styled.div`
  position: absolute;
  width: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 40%;
  z-index: 5;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
`;

const Cross = styled.img`
  width: 20px;
  margin: 0.5rem 0;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  children: ReactNode | ReactNode[];
  onClick: () => void;
  style?: React.CSSProperties;
}

const Modal: React.FC<Props> = ({ children, onClick, style }) => (
  <Layout style={style}>
    <Cross src={logo} onClick={onClick} />
    {children}
  </Layout>
);

export default Modal;

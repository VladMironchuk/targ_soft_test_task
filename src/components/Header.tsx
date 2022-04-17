import styled from 'styled-components';

const HeaderView = styled.header`
  width: 100%;
  background-color: #212529;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 3%;
`;

const Title = styled.h1`
  color: #dee2e6;
  font-size: 20px;
`;

const Header: React.FC = () => (
  <HeaderView>
    <Title>TargSoft TEST TASK</Title>
  </HeaderView>
);

export default Header;

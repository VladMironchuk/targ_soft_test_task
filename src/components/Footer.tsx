import styled from 'styled-components';

import LinkedinLogo from '../assets/Linkedin-Logo-White-Circle-1024x1024.png';
import GithubLogo from '../assets/github-icon.svg';

const FooterView = styled.footer`
  width: 100%;
  background-color: #212529;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 3%;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #dee2e6;
  font-size: 20px;
  margin: 0;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  gap: 1rem;
`;

const Footer: React.FC = () => (
  <FooterView>
    <Title>Made by Vladislav Mironchuk</Title>
    <nav>
      <List>
        <li>
          <a href="https://www.linkedin.com/in/vladislav-mironchuk-816053216/">
            <img style={{ width: 24 }} src={LinkedinLogo} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/VladMironchuk">
            <img style={{ width: 24 }} src={GithubLogo} alt="github" />
          </a>
        </li>
      </List>
    </nav>
  </FooterView>
);

export default Footer;

import React from 'react';
import {
  Menu,
  Container,
  Image,
} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Header = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Link to='/'>
          <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
        </Link>
        <Link to='/'>
          Jace Gold
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/gallery'>
          Gallery
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/portfolio'>
          Portfolio
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/contact'>
          Contact
        </Link>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
import React from 'react';
import HeaderText from './HeaderText';
import {
  Container,
  Image,
} from 'semantic-ui-react';

const HomePage = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <HeaderText fSize='large'>Jace Gold</HeaderText>
      <p>
        This is a website. I don't know what else to say yet
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
      </p>

      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <br />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
    </Container>   
  </div>
);

export default HomePage;
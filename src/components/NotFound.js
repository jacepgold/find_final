import React from 'react';
import HeaderText from './HeaderText';
import { Container, } from 'semantic-ui-react';

const NotFound = () => (
  <Container>
    <br /><br /><br />
    <HeaderText fSize='large'>
      404 Page Not Found
    </HeaderText>
  </Container>
);

export default NotFound;
import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Divider,
  Image,
} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Footer = () => (
  <Segment inverted vertical style={{ marginTop: '7em' }}>
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 1' />
          <List link inverted>
            <List.Item as='a'>
              <Link to='/'>
                Home
              </Link>
            </List.Item>
            <List.Item as='a'>
              <Link to='/about'>
                About
              </Link>
            </List.Item>
            <List.Item as='a'>
              <Link to='/gallery'>
                Gallery
              </Link>
            </List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 2' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 3' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as='h4' content='Footer Header' />
          <p>
            Extra space for a call to action inside the Footer
            that can help to re-engage the user.
            </p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />

      <Image centered size='mini' src='https://react.semantic-ui.com/logo.png' />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='#'>
          Site Map
          </List.Item>
        <List.Item as='a' href='#'>
          Contact Us
          </List.Item>
        <List.Item as='a' href='#'>
          Terms and Conditions
          </List.Item>
        <List.Item as='a' href='#'>
          Privacy Policy
          </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
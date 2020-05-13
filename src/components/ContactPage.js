import React from 'react';
import HeaderText from './HeaderText';
import { 
  Container,
  Form, 
  Segment, 
  Checkbox, 
  Button, 
  Divider,
} from 'semantic-ui-react';

const ContactPage = () => (
  <Container style={{ marginTop: '7em' }}>
    <Segment>
      <HeaderText fsize='large'>Contact Me</HeaderText>
      <Divider />
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='adam@sandler.com' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
  </Container>
);

export default ContactPage;
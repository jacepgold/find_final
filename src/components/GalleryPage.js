import React from 'react';
import { Container, 
  Grid, 
  Image, 
  Segment, 
  Header, 
} from 'semantic-ui-react';

const GalleryPage = () => (
  <Container style={{ marginTop: '7em' }}>
    <Segment>
      <Header as='h2' textAlign='center'>Gallery</Header>
    </Segment>
    <Grid stackable>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://bit.ly/2KLToTW' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KLToTW' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KLToTW' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={4}>
        <Grid.Column>
          <Image src='https://bit.ly/2yRcBAT' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2yRcBAT' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2yRcBAT' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2yRcBAT' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={5}>
        <Grid.Column>
          <Image src='https://bit.ly/2KOuSBe' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KOuSBe' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KOuSBe' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KOuSBe' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://bit.ly/2KOuSBe' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default GalleryPage;
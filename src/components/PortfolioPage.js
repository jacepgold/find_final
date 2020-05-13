import React from 'react';
import axios from 'axios';
import styled, { keyframes, } from 'styled-components';
import HeaderText from './HeaderText';
import {
  Container,
  Grid,
  Segment,
  Icon,
  Card,
} from 'semantic-ui-react';

class PortfolioPage extends React.Component {

  state = { repos: [] }

  componentDidMount() {
    // Get all Github repositories
    this.getRepos();
  }

  getRepos = () => {
    axios.get(`https://api.github.com/users/jacepgold/repos?sort=created`)
      .then(res => this.setState({ repos: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <Container style={{ marginTop: '7em' }}>
        <Segment basic>
          <HeaderText fSize='large'>GitHub Portfolio</HeaderText>
        </Segment>
        <Grid>
          { this.state.repos.map ( repo => 
            <Grid.Column key={repo.id} width={4}>
              <StyledCard>
                <Card.Content>
                  <Card.Header>
                    <Truncated>
                      { repo.full_name }
                    </Truncated>
                  </Card.Header>
                <Card.Meta>Created on { repo.created_at }</Card.Meta>
                  <Card.Description>
                    { repo.description }
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Star>
                    <Icon name='star' />
                  </Star>
                  <ButtonLink href={ repo.html_url } target="_blank">
                    View
                  </ButtonLink>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          )}
        </Grid>
      </Container>
    );
  }
};

const StyledCard = styled(Card)`
  height: 200px;
`;

const Truncated = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  color: ${ props => props.theme.fg} !important;
  background-color: ${ props => props.theme.bg} !important;
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const Star = styled.div`
  display: inline-block;
  color: green;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s linear infinite;
`;

export default PortfolioPage;
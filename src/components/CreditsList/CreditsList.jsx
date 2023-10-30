import CreditItem from 'components/CreditItem/CreditItem';
import React from 'react'
import { Container, Item, List } from './CreditsList.styled';

const CreditsList = ({credits}) => {
  return (
    <Container>
      <List>
        {credits.map(credit => (
          <Item key={credit.id}>
            <CreditItem credit={credit} />
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default CreditsList
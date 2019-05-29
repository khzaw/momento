import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

const Wrapper = styled.div`
`;

const H1 = styled.h1`
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
`;

const Todo = () => {
  return (
    <Wrapper>
      <H1>{format(new Date(), 'MMM D')}</H1>
      <List>
        <Item>Lorem ipsum foobar</Item>
        <Item>Lorem ipsum foobar</Item>
        <Item>Lorem ipsum foobar</Item>
        <Item>Lorem ipsum foobar</Item>
        <Item>Lorem ipsum foobar</Item>
        <Item>Lorem ipsum foobar</Item>
      </List>
    </Wrapper>
  );
};

export default Todo;

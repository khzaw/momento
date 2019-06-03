import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { tsNamespaceExportDeclaration } from '@babel/types';

const Wrapper = styled.div``;

const H1 = styled.h1``;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li``;

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [{ text: '' }]
          }
        ]
      }
    ]
  }
});

const Todo = () => {
  const [value, setValue] = useState(initialValue);
  return (
    <Wrapper>
      <H1>{format(new Date(), 'MMM D')}</H1>
      <Editor
        value={value}
        onChange={({ value }) => setValue(value)}
        onKeyDown={(event, editor, next) => {
          if (event.key !== 'Enter') return next();

          event.preventDefault();
        }}
      />
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

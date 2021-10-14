import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';

const StyledUl = styled.ul`
  list-style: none;
`;

const TodoList = ({ todos, onComplete }) => (
  <StyledUl>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
    ))}
  </StyledUl>
);
export default TodoList;

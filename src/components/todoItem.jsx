import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const StyledList = styled.li`
  display: flex;
`;

const H3 = styled.h3``;

const TodoItem = ({ todo, onComplete }) => {
  const handleChange = () => {
    onComplete(todo);
  };
  return (
    <StyledList>
      <H3>{todo.text}</H3>
      <Checkbox type="checkbox" checked={todo.completed} onChange={handleChange} />
    </StyledList>
  );
};
export default TodoItem;

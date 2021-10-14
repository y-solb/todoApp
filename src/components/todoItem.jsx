import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const StyledList = styled.li`
  display: flex;
`;

const H3 = styled.h3`
  color: ${(props) => props.textType};
`;

const TodoItem = ({ todo, onComplete }) => {
  const handleChange = () => {
    onComplete(todo);
  };
  return (
    <StyledList>
      <Checkbox type="checkbox" checked={todo.isCompleted} onChange={handleChange} />
      <H3 textType={todo.isCompleted ? 'grey' : 'black'}>{todo.text}</H3>
    </StyledList>
  );
};
export default TodoItem;

import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  list-style: none;
`;
const StyledInput = styled.input`
  width: 230px;
  height: 24px;
  border: 2px solid #757072;
  border-radius: 3px;
  outline: none;
`;
const StyledButton = styled.button`
  height: 24px;
  color: white;
  background-color: #757072;
  border-radius: 3px;
  border: none;
  margin: 0 4px;
  padding: 0 8px;
`;

const AddForm = ({ onAdd }) => {
  const inputRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <StyledForm onSubmit={handleAdd}>
      <StyledInput ref={inputRef} />
      <StyledButton onClick={handleAdd}>+</StyledButton>
    </StyledForm>
  );
};

export default AddForm;

import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const StyledForm = styled.form`
  list-style: none;
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
      <Input inputRef={inputRef} />
      <Button onClick={handleAdd}>+</Button>
    </StyledForm>
  );
};

export default AddForm;

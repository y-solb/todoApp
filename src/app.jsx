import React, { useState } from 'react';
import styled from 'styled-components';
import AddForm from './components/addForm';
import Header from './components/header';
import TodoList from './components/todoList';

const Container = styled.div``;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  const onComplete = (item) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const onAdd = (item) => {
    setTodos([...todos, { id: Date.now(), text: item, isCompleted: false }]);
  };

  return (
    <Container>
      <AddForm onAdd={onAdd} />
      <TodoList todos={todos} onComplete={onComplete} />
    </Container>
  );
}

export default App;

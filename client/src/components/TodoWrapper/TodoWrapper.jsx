import React, { useState, useEffect, useMemo } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoList from '../TodoList/TodoList';
import { Box } from '@mui/system';

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(null);

  const addTodo = (todo) => {
    setTodos(todos => [...todos, {
      id: new Date().getTime(),
      text: todo,
      isCompleted: false
    }]);
  };

  const editTask = (id) => {
    setIsEditing(true);
    setActiveTaskId(id);
  };

  const deleteTask = (id) => {
    setIsEditing(false);
    setActiveTaskId(null);

    setTodos(todos =>
      todos.filter(todo => todo.id !== id));
  };

  const onCheckedTask = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const onEditTask = (text, id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo));

    setIsEditing(false);
    setActiveTaskId(null);
  };

  const activeTask = useMemo(() => {
    return todos.find((task) => task.id === activeTaskId);
  }, [todos, activeTaskId]);

  useEffect(() => {}, [todos]);

  return (
    <Box
      className="todo-wrapper"
      sx={{
        minHeight: '800px',
        width: '600px',
        border: '2px solid black',
        borderRadius: '10px',
        m: '25px auto',
        p: '25px',
      }}
    >

      { isEditing ? (
        <TodoEditForm
          activeTask={activeTask}
          onEditTask={onEditTask}
        />
      ) : (
        <TodoForm addTodo={ addTodo }/>
      )}

      <TodoList
        onCheckedTask={onCheckedTask}
        todos={todos}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Box>
  );
};

export default TodoWrapper;
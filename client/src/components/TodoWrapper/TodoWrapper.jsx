import React, { useState, useEffect, useMemo } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoList from '../TodoList/TodoList';
import { Box } from '@mui/system';
import request from '../../helpers/api';

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(null);

  const fetchAllTodos = () => {
    request('/tasks')
      .then(({ tasks }) => setTodos(tasks));
  };
  useEffect(() => fetchAllTodos(), []);

  const addTodo = (todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const editTask = (id) => {
    setIsEditing(true);
    setActiveTaskId(id);
  };

  const deleteTask = (id) => {
    setIsEditing(false);
    setActiveTaskId(null);

    request('/task', 'DELETE', { id })
      .then(() => fetchAllTodos());
  };

  const onEditTask = (id, data) => {
    request('/task', 'PUT', { id, ...data })
      .then(() => fetchAllTodos());

    setIsEditing(false);
    setActiveTaskId(null);
  };

  const activeTask = useMemo(() => {
    return todos.find((task) => task._id === activeTaskId);
  }, [todos, activeTaskId]);

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
        <TodoForm addTodo={ addTodo } fetchAllTodos={fetchAllTodos} />
      )}

      <TodoList
        onEditTask={onEditTask}
        todos={todos}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Box>
  );
};

export default TodoWrapper;
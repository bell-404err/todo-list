import React from 'react';
import { List } from '@mui/material';
import TodoListItem from './TodoListItem/TodoListItem';


const TodoList = ({ todos, editTask, deleteTask, onEditTask }) => {
  return (
    <List>
      {todos.map(item => {
        return <TodoListItem
          todo={item}
          key={item._id}
          editTask={editTask}
          deleteTask={deleteTask}
          onEditTask={onEditTask}
        />;
      })}
    </List>
  );
};

export default TodoList;
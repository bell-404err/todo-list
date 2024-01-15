import React from 'react';
import { List } from '@mui/material';
import TodoListItem from './TodoListItem/TodoListItem';


const TodoList = ({ todos, editTask, deleteTask, onCheckedTask }) => {
  return (
    <List>
      {todos.map(item => {
        return <TodoListItem
          todo={item}
          key={item.id}
          editTask={editTask}
          deleteTask={deleteTask}
          onCheckedTask={onCheckedTask}
        />;
      })}
    </List>
  );
};

export default TodoList;
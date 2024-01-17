import React, { useMemo } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem, IconButton, Stack, ListItemText, Checkbox, ListItemButton } from '@mui/material';


const TodoListItem = ({ todo, editTask, deleteTask, onEditTask }) => {

  const buttons = useMemo(() => {
    return (
      <Stack
        direction='row'
      >
        <IconButton
          onClick={() => editTask(todo._id)}
        >
          <EditIcon/>
        </IconButton>

        <IconButton
          onClick={() => deleteTask(todo._id)}
        >
          <DeleteIcon
            color='error'
          />
        </IconButton>
      </Stack>
    );
  }, []);

  return (
    <ListItem
      disablePadding
      secondaryAction={buttons}
    >
      <ListItemButton
        onClick={() => onEditTask(todo._id, { name: todo.name, checked: !todo.checked })}
      >
        <Checkbox checked={todo.checked}/>

        <ListItemText>
          {todo.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
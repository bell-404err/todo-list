import React, { useMemo } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem, IconButton, Stack, ListItemText, Checkbox, ListItemButton } from '@mui/material';


const TodoListItem = ({ todo, editTask, deleteTask, onCheckedTask }) => {

  const buttons = useMemo(() => {
    return (
      <Stack
        direction='row'
      >
        <IconButton
          onClick={() => editTask(todo.id)}
        >
          <EditIcon/>
        </IconButton>

        <IconButton
          onClick={() => deleteTask(todo.id)}
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
        onClick={() => onCheckedTask(todo.id)}
      >
        <Checkbox checked={todo.isCompleted}/>

        <ListItemText>
          {todo.text}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
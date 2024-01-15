import React, { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';


const TodoForm = ({ addTodo }) => {

  const [task, setTask] = useState('');

  const submitForm = e => {
    e.preventDefault();

    if (task.length !== 0) {
      addTodo(task);
      setTask('');
    }
  };

  const onChangeTaskValue = (e) => {
    setTask(e.target.value);
  };

  return (
    <Stack
      spacing={1}
      direction='row'
    >
      <TextField
        type="text"
        label="What is the task :)"
        variant="outlined"
        onChange={onChangeTaskValue}
        value={task}
        fullWidth
      />

      <Button
        onClick={submitForm}
        variant='outlined'
        disabled={task.length === 0}
        size='large'
        type="submit"
      >
          Create
      </Button>
    </Stack>
  );
};

export default TodoForm;
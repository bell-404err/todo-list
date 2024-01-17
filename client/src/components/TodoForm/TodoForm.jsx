import React, { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import request from '../../helpers/api';


const TodoForm = ({ addTodo, fetchAllTodos }) => {

  const [task, setTask] = useState('');

  const createTask = () => {
    request('/task', 'POST', { name: task, checked: false })
      .then(() => fetchAllTodos());
  };

  const submitForm = e => {
    e.preventDefault();

    if (task.length !== 0) {
      createTask();
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
import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

const TodoEditForm = ({ onEditTask, activeTask }) => {

  const [taskName, setTaskName] = useState(activeTask.name);

  const submitForm = e => {
    e.preventDefault();
    onEditTask(activeTask._id, { name: taskName, checked: activeTask.checked });
    setTaskName('');
  };

  const onChangeTaskValue = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <Stack
      spacing={1}
      direction='row'
      border={activeTask.isCompleted ? '1px solid blue' : 'none'}
    >
      <TextField
        type="text"
        label="What is the task :)"
        variant="outlined"
        onChange={onChangeTaskValue}
        value={taskName}
        fullWidth
      />

      <Button
        onClick={submitForm}
        variant='outlined'
        disabled={taskName.length === 0}
        size='large'
        type="submit"
      >
        Update
      </Button>
    </Stack>
  );
};

export default TodoEditForm;
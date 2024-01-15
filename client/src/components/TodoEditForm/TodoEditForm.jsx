import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

const TodoEditForm = ({ onEditTask, activeTask }) => {

  const [value, setValue] = useState(activeTask.text);

  const submitForm = e => {
    e.preventDefault();
    onEditTask(value, activeTask.id);
    setValue('');
  };

  const onChangeTaskValue = (e) => {
    setValue(e.target.value);
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
        value={value}
        fullWidth
      />

      <Button
        onClick={submitForm}
        variant='outlined'
        disabled={value.length === 0}
        size='large'
        type="submit"
      >
        Update
      </Button>
    </Stack>
  );
};

export default TodoEditForm;
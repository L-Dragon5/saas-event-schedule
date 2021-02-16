import React from 'react';
import { Inertia } from '@inertiajs/inertia';

import { ButtonGroup, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(1),
  },
  formField: {
    marginBottom: theme.spacing(1),
  },
}));

const FormLocationAdd = ({ closeDrawer, reloadPage, scheduleId }) => {
  const classes = useStyles();

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.set('scheduleId', scheduleId);

    Inertia.post(`/admin/schedule/${scheduleId}/locations/store`, formData, {
      onSuccess: (page) => {
        reloadPage();
        closeDrawer();
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={handleAddSubmit}>
      <TextField
        required
        fullWidth
        name="name"
        variant="outlined"
        label="Location Name"
        className={classes.formField}
      />

      <TextField
        fullWidth
        type="url"
        name="url"
        variant="outlined"
        label="Location URL"
        className={classes.formField}
      />

      <ButtonGroup aria-label="add form buttons">
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          type="reset"
          variant="contained"
          color="secondary"
          onClick={closeDrawer}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default FormLocationAdd;

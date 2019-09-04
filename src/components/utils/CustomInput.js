import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function CustomInput(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({value: ''});

  const handleChange = name => event => {
    props.inputChange([name],event.target.value)
    setValues({
      [name]: event.target.value,
      value: event.target.value
    });
  };

  return (
    <div className={classes.container}>
      <TextField
        className={classes.formControl}
        label={props.placeholder}
        value={values.value}
        onChange={handleChange(props.fieldName)}
      />
    </div>
  );
}
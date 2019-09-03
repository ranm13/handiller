import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));


export default function IntegrationReactSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  function handleChangeSingle(value) {
    props.onItemSelect(props.name,value.value)
    setSingle(value); 
  }

  useEffect(() => {
    setSuggestions(props.suggestions.map(s => ({ value: s.value, label: s.label})))
  },[props.suggestions])

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId={props.inputId}
          TextFieldProps={{
            label: props.label,
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true,
            },
          }}
          placeholder={props.placeholder}
          options={suggestions}
          value={single}
          onChange={handleChangeSingle}/>
        <div className={classes.divider} />
      </NoSsr>
    </div>
  );
}

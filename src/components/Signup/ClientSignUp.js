import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Radio from '@material-ui/core/Radio';
// import MenuItem from '@material-ui/core/MenuItem';
import { FormLabel , Grid, Button, Typography, TextField, withStyles, makeStyles,FormControlLabel, RadioGroup} from '@material-ui/core'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

function CustomizedInputs2(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Customer');
    function handleChange(e) {
        setValue(e.target.value);
        props.store.radioHandler(e.target.value)
        
    }
    const inputHandler = function (e) {
        props.store.inputHandler(e.target.name, e.target.value)
    }
    const inputHandler2 = function () {
        props.store.inputHandler2()
    }
    
    
    return (
        <form className={classes.root} noValidate>
            
            <Grid container spacing={2} container direction="column" justify="center" alignItems="center">
            <Typography variant="h6"><p></p> </Typography> 
            <Typography variant="h4"> Welcome to Handiler </Typography> 
            <Typography variant="h6">The best place to find a Technician/Handyman near you! </Typography> 
                <p>To signup, please provide the following:</p>
                <FormLabel component="legend">Im signing up to Handiler as a:</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" className={classes.group} value={value} onChange={handleChange}>
                    <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
                    <FormControlLabel value="Technician" control={<Radio />} label="Technician" />
                </RadioGroup>
                <CssTextField className={classes.margin} id="FirstName" name="firstName" value={props.store.firstName} onChange={inputHandler} label="First Name" />
                <CssTextField className={classes.margin} id="LastName" name="lastName" value={props.store.lastName} onChange={inputHandler} label="Last Name" />
                <CssTextField className={classes.margin} id="Password" type="password" name="password" value={props.store.password} onChange={inputHandler} label="Password" />
                <CssTextField className={classes.margin} id="Email" name="email" value={props.store.email} onChange={inputHandler} label="Email" />
                <CssTextField className={classes.margin} type="number" id="Phone Number" name="phoneNumber" value={props.store.phoneNumber} onChange={inputHandler} label="Phone Number" />
                <CssTextField className={classes.margin} id="City" name="city" value={props.store.city} onChange={inputHandler} label="City" />
                {value === "Customer" ? <CssTextField className={classes.margin} id="Address" name="address" value={props.store.address} onChange={inputHandler} label="Address" />
                    : <CssTextField className={classes.margin} id="Proffession" name="proffession" value={props.store.proffession} onChange={inputHandler} label="Proffession" />
                }
                    
                <Button variant="contained" color="secondary" onClick={inputHandler2}>SignUp</Button>
            </Grid>
        </form>
    );
}

@inject('signUpStore')
@observer
class CustomizedInputs extends Component {
    render() {
        return (<CustomizedInputs2 store={this.props.signUpStore} />)
    }
    
}
export default CustomizedInputs

{/* <TextField
    id="outlined-select-currency"
    select
    label="Select"
    className={classes.textField}
    value={values.currency}
    onChange={handleChange('currency')}
    SelectProps={{
        MenuProps: {
            className: classes.menu,
        },
    }}
    helperText="Please select your currency"
    margin="normal"
    variant="outlined"
    >
    {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
        {option.label}
        </MenuItem>
        ))}
    </TextField> */}
    
    // const currencies = [
    //     {
    //       value: 'USD',
    //       label: '$',
    //     },
    //     {
    //       value: 'EUR',
    //       label: '€',
    //     },
    //     {
    //       value: 'BTC',
    //       label: '฿',
    //     },
    //     {
    //       value: 'JPY',
    //       label: '¥',
    //     },
    //   ];
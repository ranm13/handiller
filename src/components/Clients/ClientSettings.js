import React, {Component} from 'react'
import { observer } from 'mobx-react'
import { Paper, Grid, Button, Typography } from '@material-ui/core'

@observer
class Settings extends Component {
    render() {
        return (
            <div className="settings">
            <Grid container spacing={1} container direction="column" justify="center" alignItems="center"> <p>Update Sattings:</p></Grid>
             <Paper><Grid container spacing={1} container direction="column" justify="center" alignItems="center">
                <Grid> <Typography variant="h5">FirstName: this.props.FirstName</Typography> </Grid>
                <Grid>  <Typography variant="h5">LastName: this.props.LastName</Typography></Grid>
                <Grid><Typography variant="h5">Email: this.props.Email</Typography></Grid>
                <Grid><Typography variant="h5">Phone: this.props.Phone</Typography></Grid>
                <Grid><Typography variant="h5">Password: this.props.Password</Typography></Grid>
                <Grid> <Typography variant="h5">City: this.props.City</Typography></Grid>
                 <Button variant="contained" color="primary" onClick={this.handleOpen}>APPROVE Changes</Button>
                 </Grid> </Paper>
         </div>
        )

    }
}
export default Settings
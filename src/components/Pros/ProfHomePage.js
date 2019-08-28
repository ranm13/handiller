import React, { Component } from 'react'
import Requests from './Requests'
import { observer } from 'mobx-react'
import CalendarComp from '../General/CalendarComp';
import NavBar from './ProfNavBar';
import {Grid} from '@material-ui/core'
import ProfSettings from './ProfSettings';


@observer
class ProfHomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />

                {/* <ProfSettings /> */}
                <Grid container spacing={1} >
                    <Grid item xs={9}  >  <CalendarComp /> </Grid>
                    <Grid item xs={3}> <Requests /> </Grid> </Grid>
            </div>)
    }
}
export default ProfHomePage

{/* <div id="main-links">
          <Link to="/">Home</Link> <a></a>
          <Link to="/catalog"> Catalog</Link>
        </div>
        <Route path="/" exact component={Landing} />
        <Route path="/catalog" exact render={() => <Catalog budget={this.state.budget} updateIsRented={this.updateIsRented} movies={this.state.movies} />}/>
        <Route path="/movie/:id" exact render={({ match }) => <MovieDetail movies={this.state.movies} match={match} />}/>
      </div> */}
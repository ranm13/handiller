import React, {Component} from 'react'
import  Iframe  from 'react-iframe';

class GoogleMapFrame extends Component {
    render() {
        const APIKEY = "AIzaSyDqdsntoF7hsuKcC24uY7RsDGSeALpQnHM"
        return (
            <Iframe url={`https://www.google.com/maps/embed/v1/place?q=${this.props.adress}&key=${APIKEY}`}
            width="390px"
            height="350px"
            display="initial"
            position="relative"/>)
    }
}
export default GoogleMapFrame

// https://www.google.com/maps/embed/v1/place?q=ramat%20gan%20shapira%2019&key=AIzaSyDqdsntoF7hsuKcC24uY7RsDGSeALpQnHM
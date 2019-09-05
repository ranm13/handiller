import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Button, Typography, Grid } from '@material-ui/core'
import moment from "moment"

@inject('professionalStore')

@observer
class RowRequests extends Component {
    handleOpen = (e) => {
        let appointmentData = this.props.appointmentData
        let status = (e.currentTarget.outerText === "DECLINE" ? "declined"
            : e.currentTarget.outerText === "APPROVE" ? "approved" : null)
        let data = {
            status: status,
            startDate: appointmentData.startDate,
            endDate: appointmentData.endDate,
            title: appointmentData.title
        }
        this.props.professionalStore.changeStatusRequest(this.props.appointmentData.appointmentId, data)
        setTimeout(() => {
              const todayButton = document.querySelector('.rbc-btn-group').firstChild;
              todayButton.click()
          }, 100) 
    }

    render() {
        let appointmentData = this.props.appointmentData
        let rowRequestStyle = {
            padding: "8vh 1vw 1vh 1vw",
            width: "15vw",
            minHeight: "15vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            backgroundImage: `url('https://www.trzcacak.rs/myfile/full/31-311869_post-it-note-with-push-pin-ivory.png')`
        }

        let typographyStyle = {
            fontFamily: `'Chilanka', cursive`,
        }

        let buttonStyle = {
            fontSize: "0.5em"
        }

        console.log(appointmentData)
        return (
            <div>
                <Grid key={this.props.key} style={rowRequestStyle}>
                    <Typography style={typographyStyle} variant="h5">{appointmentData.clientName}</Typography>
                    <Typography style={typographyStyle} >{appointmentData.title}</Typography>
                    <Typography style={typographyStyle} >{appointmentData.clientAddress}, {appointmentData.clientCity}</Typography>
                    <Typography style={typographyStyle}>{moment(appointmentData.startDate).format('L')}</Typography>
                    <Typography style={typographyStyle}>{moment(appointmentData.startDate).format('LT')}-{moment(appointmentData.endDate).format('LT')}</Typography>
                    <Grid container justify="center" alignItems="center">
                        <Grid item >
                            <Button style={buttonStyle} variant="contained" color="primary" onClick={this.handleOpen}>APPROVE</Button>
                            <Button style={{ ...buttonStyle, margin: "0.5vw" }} variant="contained" color="secondary" onClick={this.handleOpen} >DECLINE</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>)
    }
}
export default RowRequests
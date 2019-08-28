import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={logInStore.enterToClient}>
                    Client
            </Button>
                <Button variant="contained" color="secondary" onClick={logInStore.enterToProf}>
                    Professional
            </Button>
            </div>
        );
    }
}

export default Login;
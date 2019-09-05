import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'

@inject("clientStore")

@observer
class Requests extends Component {
    render() {
        return (
                <div className="requests">
                   
                </div>
        )

    }
}
export default Requests
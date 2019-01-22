import {InfoWindow, Marker} from "react-google-maps"
import React from 'react'

class PointMarker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this)
    }

    onToggleOpen() {
        this.setState({isOpen: !this.state.isOpen})

    }

    render() {
        const {point} = this.props
        const {isOpen} = this.state
        // if (typeof point.lat === 'number' && typeof point.lng === 'number') {

            return <Marker position={{lat: parseInt(point.lat,10),lng: parseInt(point.lng,10)}} onClick={this.onToggleOpen}
                           icon={{url: point.icon}}>
                {isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
                    <div>
                        {point.name}
                    </div>
                </InfoWindow>}
            </Marker>
        // }
        // return <div/>
    }


}

export default PointMarker
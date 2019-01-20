import React from "react"
import Mapper from './Mapper'


class App extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
        this.delayedShowMarker()
    }

    render() {
        const coordinates=[{
            lat:-34.397,
            lng:150.644,
            name:'Man U',
            icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        },{
            lat:-20.397,
            lng:130.644,
            name:'Man C',
            icon:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        },{
            lat:-30.397,
            lng:110.644,
            name:'Liverpool',
            icon:"http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
        },{
            lat:-20.397,
            lng:156.644,
            name:'Arsenal',
            icon:"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
        },]
        return (
            <div>
            <Mapper
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
               coordinates={coordinates}
            />
            </div>
        )
    }
}

export default App
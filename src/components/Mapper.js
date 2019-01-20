import {compose, withProps, withStateHandlers} from 'recompose'
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps"
import React from 'react'
import PointMarker from './PointMarker'

const Mapper = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1KXXOs001jl1rkuiNQsVN6V0dW7nTfnY&v=3&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `800px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat:0, lng:36.824462}}
    >

        {
            props.coordinates.length>0?
                props.coordinates.map(coord=>{

                    return  coord && <PointMarker point={coord} isMarkerShown={true}/>
                }):''

        }



    </GoogleMap>
)
export default Mapper
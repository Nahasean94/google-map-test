import {compose, withProps, withStateHandlers} from 'recompose'
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import React from 'react'
import PointMarker from './PointMarker'

const Mapper = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
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
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {
            props.coordinates.length>0?
                props.coordinates.map(coord=>{
                    return <PointMarker point={coord} isMarkerShown={true}/>
                }):''

        }



    </GoogleMap>
)
export default Mapper
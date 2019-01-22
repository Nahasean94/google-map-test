import React from "react"
import Mapper from './Mapper'
import UploadCSV from '../modals/UploadCSV'
import {connect} from 'react-redux'
import {addMarker, deleteMarker} from "../actions/markerActions";
import PropTypes from 'prop-types'
import {addData} from "../actions/dataActions";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            showUploadModal: false,

        }
        this.showUploadModal = this.showUploadModal.bind(this)
        this.closeUploadModal = this.closeUploadModal.bind(this)
        this.handleLoadedCsvData = this.handleLoadedCsvData.bind(this)
    }


    componentDidMount() {
        ["http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
            "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"]
            .map(marker => {
                this.props.addMarker(marker)

            })
    }

    handleLoadedCsvData(data) {
        this.setState({showUploadModal: false})
        const markers = this.props.markers

        const randomIndex = Math.floor(Math.random() * markers.length - 1)
        this.props.addData( this.processCSVData(data))
        this.props.deleteMarker(randomIndex)


    }

    processCSVData(data) {
        const {markers} = this.props
        const randomIndex = Math.floor(Math.random() * markers.length)
        return data.map(coord => {
            if (coord[0] !== "coordinates" && coord[0] !== "") {
                const points = coord[0].split(" ")
                if (points[0] !== "\\N" && points[1] !== "\\N") {
                    const lng = points[0].split("(")[1]
                    const lat = points[1].split(")")[0]
                    const name = coord[1]
                    return{lat, lng, name, icon: markers[randomIndex]}
                }
            }
        })
    }

    showUploadModal() {
        this.setState({showUploadModal: true})
    }

    closeUploadModal() {
        this.setState({showUploadModal: false})
    }


    render() {
        const {showUploadModal} = this.state
        const {data} = this.props
        console.log(data)
        return (
            <div>
                <button className="btn btn-sm btn-primary" onClick={this.showUploadModal}>Add CSV Data</button>
                <Mapper
                    coordinates={data}
                />
                <UploadCSV show={showUploadModal} onClose={this.closeUploadModal}
                           handleLoadedCsvData={this.handleLoadedCsvData}/>
            </div>
        )
    }
}


App.propTypes = {
    deleteMarker: PropTypes.func.isRequired,
    addMarker: PropTypes.func.isRequired,
    addData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    markers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
        markers: state.markerReducers,
        data: state.dataReducers
    }
}

export default connect(mapStateToProps, {deleteMarker, addMarker, addData})(App)
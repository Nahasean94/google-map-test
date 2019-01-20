import React from "react"
import Mapper from './Mapper'
import UploadCSV from '../modals/UploadCSV'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            showUploadModal: false,
            markers: ["http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
                "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            ],
        }
        this.showUploadModal = this.showUploadModal.bind(this)
        this.closeUploadModal = this.closeUploadModal.bind(this)
        this.handleLoadedCsvData = this.handleLoadedCsvData.bind(this)
    }


    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker() {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    }

    handleLoadedCsvData(data) {
        this.setState({showUploadModal: false})
        const {markers} = this.state
        const randomIndex = Math.floor(Math.random() * markers.length)
        const processedPoints = this.processCSVData(data)

        const finalPoints = [...processedPoints, ]

        const availableMarkers = [...markers.slice(0, randomIndex), ...markers.slice(randomIndex + 1, markers.length - 1)]
        this.setState({markers: [...availableMarkers], csvData: finalPoints})

    }

    processCSVData(data) {
        const {markers} = this.state
        const randomIndex = Math.floor(Math.random() * markers.length)
        return data.map(coord => {
            if (coord[0] !== "coordinates" && coord[0]!=="") {
                const points = coord[0].split(" ")
                if(points[0]!=="\\N" && points[1]!=="\\N"){
                const lng = points[0].split("(")[1]
                const lat = points[1].split(")")[0]
                const name = coord[1]
                return {lat, lng, name,icon: markers[randomIndex]}
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

        const {csvData, showUploadModal} = this.state

        return (
            <div>
                <button className="btn btn-sm btn-primary" onClick={this.showUploadModal}>Add CSV Data</button>
                <Mapper
                    coordinates={csvData}
                />
                <UploadCSV show={showUploadModal} onClose={this.closeUploadModal}
                           handleLoadedCsvData={this.handleLoadedCsvData}/>
            </div>
        )
    }
}

export default App
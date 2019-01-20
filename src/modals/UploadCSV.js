import React from 'react'
import PropTypes from 'prop-types'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import CSVReader from 'react-csv-reader'

class UploadCSV extends React.Component {
    render() {
        const {show, onClose, handleLoadedCsvData} = this.props
        if (show) {
            return (
                <Modal isOpen={show} toggle={onClose} size="sm">
                    <ModalHeader toggle={onClose}>Add CSV Data</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <CSVReader
                                label="Select CSV"
                                onFileLoaded={handleLoadedCsvData}
                            />

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            )
        }
        else return null

    }
}

UploadCSV.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleLoadedCsvData: PropTypes.func.isRequired,
}
export default UploadCSV
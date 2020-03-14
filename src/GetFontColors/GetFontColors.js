import React from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,MDBBtn } from 'mdbreact'
// import { ChromePicker } from 'react-color'

const fontColors = (props) => {
    return (
        <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
            <MDBModalHeader toggle={props.toggle}>Select Font Colors</MDBModalHeader>
            <MDBModalBody>
                <div className="form-group">
                    <label htmlFor="color1">Color 1</label>
                    <input type="color" className="form-control font-color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="color2">Color 2</label>
                    <input type="color" className="form-control font-color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="color3">Color 3</label>
                    <input type="color" className="form-control font-color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="color4">Color 4</label>
                    <input type="color" className="form-control font-color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="color5">Color 5</label>
                    <input type="color" className="form-control font-color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="color6">Color 6</label>
                    <input type="color" className="form-control font-color"/>
                </div>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="dark" onClick={props.setFontColor} outline>Select Color</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}

export default fontColors
import React from 'react'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact'

let background = (props) => {
    let disabled = true
    return(
        <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
            <MDBModalHeader toggle={props.toggle}>Select Font Colors</MDBModalHeader>
            <MDBModalBody>
                <div className="form-group">
                    <label htmlFor="background">Background Color</label>
                    <input type="color" className="form-control font-color background"/>
                </div>
                <div className="form-group">
                    <label htmlFor="checkbox">Use gradient</label>
                    <input type="checkbox" className="ml-2" onChange = {() => {
                        disabled = !disabled
                        document.querySelector('.gradient').disabled = disabled
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="background">Choose Second Color</label>
                    <input type="color" className="form-control font-color gradient" disabled={disabled}/>
                </div>
                </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="dark" onClick={props.setBackgroundColor} outline>Select Color</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}

export default background
import React from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBRow, MDBCol } from 'mdbreact'
import { download } from './downloadfunction'

const downloader = (props) =>{
    return(
        <React.Fragment>
            <MDBBtn className="text-align-center mb-4" outline color="dark" onClick={props.download}>download</MDBBtn>
            <MDBModal isOpen={props.open} toggle={props.toggle} className="text-align-center">
                <MDBModalHeader toggle={props.toggle}>Select Download Format</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow middle>
                        <MDBCol md="4">
                            <MDBBtn size="sm" className="text-align-center" outline onClick={()=>{
                              download("png")  
                            }} color="dark">PNG</MDBBtn>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn size="sm" className="text-align-center" outline onClick={()=>{
                                download("jpeg")
                            }} color="dark">JPEG</MDBBtn>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn size="sm" className="text-align-center" outline onClick={()=>{
                                download("pdf")
                            }} color="dark">pdf</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBModalBody>
            </MDBModal>
        </React.Fragment>
    )
}

export default downloader
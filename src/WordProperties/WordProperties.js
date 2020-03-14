import React from 'react'
import {MDBBtnGroup, MDBBtn, MDBRow, MDBCol, MDBIcon} from 'mdbreact'

const WordProperties = (props)=>{
    return(
        <div className = "wordProps" style={{
            position: "relative",
            top: "340px",
        }}>
            <MDBRow>
                <MDBCol md='12' className="mb-4">
            <MDBBtnGroup size="sm">
                <MDBBtn color="dark" onClick={()=>{
                    document.querySelector("textarea").value = ""
                }}><MDBIcon icon="trash" /></MDBBtn>
                <MDBBtn color="dark" onClick={props.selectFont}>Font</MDBBtn>
                <MDBBtn color="dark" onClick={props.selectFontColors}>font colors</MDBBtn>
                <MDBBtn color="dark" onClick={props.selectBackgroundColor}>background color</MDBBtn>
            </MDBBtnGroup>
            </MDBCol>
            </MDBRow>
        </div>
    )
}

export default WordProperties
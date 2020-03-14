import React from 'react'
import Wordcloud from 'react-wordcloud'
import { MDBBtn} from 'mdbreact'
import HTMLToCanvas from 'html2canvas'

const canvas = (props) => {
    return(
        <div className="mb-2" >
            <div className="wordcloud_image" style={{background: `${props.background}`}}>
            <Wordcloud words={props.words} id="capture" options={props.options} />
            </div>
            <MDBBtn className="text-align-center" outline onClick={()=>{
                const node = document.querySelector('.wordcloud_image')
                 HTMLToCanvas(node)
                .then(async e=>{
                    const url = e.toDataURL("image/png")
                    // const image = new Image()
                    // image.src = url
                    const download = document.createElement('a')
                    download.href = url
                    download.download = "image.png"
                    await document.body.appendChild(download)
                    download.click()
                    document.body.removeChild(download)
                })
            }} color="dark">Download as PNG</MDBBtn>
            <MDBBtn className="text-align-center" outline onClick={()=>{
                const node = document.querySelector('.wordcloud_image')
                 HTMLToCanvas(node)
                .then(async e=>{
                    const url = e.toDataURL("image/jpeg")
                    // const image = new Image()
                    // image.src = url
                    const download = document.createElement('a')
                    download.href = url
                    download.download = "image.jpeg"
                    await document.body.appendChild(download)
                    download.click()
                    document.body.removeChild(download)
                })
            }} color="dark">Download as JPEG</MDBBtn>
            <MDBBtn className="text-align-center" outline onClick={()=>{
                const node = document.querySelector('.wordcloud_image')
                 HTMLToCanvas(node)
                .then(async e=>{
                    const url = e.toDataURL("image/pdf")
                    // const image = new Image()
                    // image.src = url
                    const download = document.createElement('a')
                    download.href = url
                    download.download = "image.pdf"
                    await document.body.appendChild(download)
                    download.click()
                    document.body.removeChild(download)
                })
            }} color="dark">download as pdf</MDBBtn>
        </div>
    )
}   

export default canvas
import React from 'react'
import Wordcloud from 'react-wordcloud'

const canvas = (props) => {
    let display = "none"
    if (props.words.length === 0){
        display = "none"
    }else {
        display = "block"
    }
    return(
            <div className="wordcloud_image" style={{background: `${props.background}`, display: `${display}`}}>
            <Wordcloud words={props.words} id="capture" options={props.options} />
            </div>
    )
}   

export default canvas
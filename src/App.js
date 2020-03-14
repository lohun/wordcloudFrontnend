import React,{Component} from 'react'
import Canvas from './Canvas/Canvas'
import axios from 'axios'
import WordProperties from './WordProperties/WordProperties'
import GetFontColors from './GetFontColors/GetFontColors'
import GetBackgroundColors from './GetBackgroundColors/GetBackgroundColors'
import { MDBContainer, MDBBtn } from 'mdbreact';

class App extends Component{
    constructor(){
        super()
    }
    state = {
        list: [],
        options: {
            colors: ["#000"],
            enableTooltip: true,
            deterministic: false,
            fontFamily: 'impact',
            fontSizes: [5, 60],
            fontStyle: 'normal',
            fontWeight: 'normal',
            padding: 1,
            rotations: 3,
            rotationAngles: [0, 90],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 1000,
        },
        background: '#fff',
        fontModal: false,
        backgroundModal: false
    }

    toggleFontModal = () => {
        this.setState({
          fontModal: !this.state.fontModal
        });
    }

    toggleBackgroundModal = () => {
        this.setState({
            backgroundModal: !this.state.backgroundModal
        })
    }

    getCloudHandler = (e) => {
        e.preventDefault()
        const target = document.querySelector('textarea')
        const {value} = target
        const url = "http://127.0.0.1:8000/api/generate"
        const data = {
            value: value
        }
        axios.post(url, data)
        .then(e=>{
            this.setState({
                list: e.data.data
            })
        })
    }

    handleBackgroundChangeComplete = (color) => {
        this.setState({ color1: color });
    }

    handleFontChangeComplete = (color) => {
        this.setState({ color2: color });
    }

    setFontColor = ()=>{
        const colors = document.querySelectorAll(".font-color")
        const [first, second, third, fourth , fifth, sixth] = colors
        const color1 = first.value
        const color2 = second.value
        const color3 = third.value
        const color4 = fourth.value
        const color5 = fifth.value
        const color6 = sixth.value
        
        
        this.setState({ options: {
            colors: [color1, color2, color3, color4 , color5, color6],
            enableTooltip: true,
            deterministic: false,
            fontFamily: this.state.fontFamily,
            fontSizes: [5, 60],
            fontStyle: this.state.fontStyle,
            fontWeight: this.state.fontWeight,
            padding: 1,
            rotations: 3,
            rotationAngles: [0, 90],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 1000,
        },
        fontModal: !this.state.fontModal
     })
    }

    setBackgroundColor = () => {
        let color = document.querySelector('.background').value
        const gradient = document.querySelector('.gradient')
        if(gradient.disabled === false){
            color = `linear-gradient(180deg, ${color}, ${gradient.value})`
        }
        this.setState({
            background: color,
            backgroundModal: !this.state.backgroundModal
        })
    }

    downloadHanler = () => {
        // const url = "http://127.0.0.1:8000/api/generate"
        // use post request
    }
    componentDidMount(){
        // 
    }

    render(){
        return (
            <MDBContainer>
                <Canvas words={this.state.list} options={this.state.options} background={this.state.background} />
                    <WordProperties 
                    selectFontColors={this.toggleFontModal}
                    selectBackgroundColor={this.toggleBackgroundModal}
                    />
                <form onSubmit={this.getCloudHandler}>
                    <div className="form-group">
                        <textarea className="form-control" cols="8" rows="12" onInput={e=>{}} placeholder="Input a url in the format http://www.example.com or input a list of words"></textarea>
                    </div>
                    <GetFontColors isOpen={this.state.fontModal} setFontColor={this.setFontColor} toggle={this.toggleFontModal} />
                    <GetBackgroundColors toggle={this.toggleBackgroundModal} isOpen={this.state.backgroundModal} setBackgroundColor={this.setBackgroundColor} />
                    <MDBBtn type="submit" color="dark" outline size ="lg">Generate Word Cloud</MDBBtn>
                </form>
                
            </MDBContainer>
        )
    }
}

export default App
import React from "react";
import axios from "axios";
import "./App.css";
import image1 from "./images/new-york-busy-street.jpg"
import image2 from "./images/nature.jpg"
import image3 from "./images/night-sky.jpg"
import image4 from "./images/honeycomb.png"
import image5 from './images/avengers.jpg'
import image6 from './images/picasso.jpg'

class App extends React.Component{

    
    state = { advice: '',
        bgImage: image1,
    };

    componentDidMount(){
        console.log(this.fetchAdvice());  
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>{
            const {advice} = response.data.slip;
            console.log(advice);
            this.setState({advice : advice})
        })
        .catch((error) =>{
            console.log(error);
        });

    }

    changeImage = () =>{
        const images = [image1, image2, image3, image4, image5, image6];

        const randomImage = images[Math.floor(Math.random() * images.length)];

        this.setState({bgImage: randomImage});
    }
    render(){
        const {advice, bgImage} = this.state;
        return(
            <div className="app"
            style={{backgroundImage: `url(${bgImage})`}}>
                <div className="card">
                    <div className="heading">{ advice }</div>
                    <button className="button" onClick={ () =>{this.fetchAdvice(); this.changeImage();}}>
                        <span>GIVE ME ADVICE !</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component{
    state = { advice: ''};

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
    render(){
        const {advice} = this.state;
        return(
            <h1> {advice} </h1>
        )
    }
}

export default App;
import React, { Component } from 'react';
import callApi from '../services/ServiceComponent';
class Hello extends Component{  
    state = {
        response: ''
    };

    render(){
        return (
            <h1>Hello Component - {this.state.response}</h1>
        );        
    }

    // componentDidMount() {   
    //     callApi('hello')
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   } 
      
}


export default Hello;
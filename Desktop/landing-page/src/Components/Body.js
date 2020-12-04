
import Header from './Components/Header';
import React, { Component } from 'react'
import Card from './Components/Card';

class Body extends Component {
    render() {
        return (
            <div id='Body'>
                <Header />
                <Card className ='Section' 
                img =""
                description ="Hello"
                
                />
                
                
            </div>
        )
    }
}

export default Body;
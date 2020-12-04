import React, { Component } from 'react'



export default class Card extends Component {
    constructor(props){
        super(props);
    
        render() {
        return (
            <div className = {props.className}>
                <div className="Small-Div">
                    <i className={props.className}></i>
                    <img src= {props.img} alt ="" />
                    </div>
            <div className="Big-Div">
                <span className="=Div-title">
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>


            </div>
                
            </div>
        );
    }
}
}

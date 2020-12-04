import React from "react";
import './styles.css';


function renderAge (age){
 if (age < 21 ){
   return `I am ${age} and I am not old enough to drink `
 }

   return `I am ${age} and I can party!`
 
 
}

function License(props) {
  return (
    <div className="license">
      <image src={props.image} />
      <div className="license-info">
        <h2>{props.name}</h2>
        <div>
          <p>
            <b>Street Address:</b>
            {props.streetAddress}
          </p>
          <p>
            <b>State:</b>
            {props.state}
          </p>
        </div>
        <p className="license-age">{renderAge(props.age)}</p>
      </div>
    </div>
  );
}

export default License; 
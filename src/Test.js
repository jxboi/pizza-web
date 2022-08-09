import React from "react";

const Test = () => {
    console.log("load test");
    fetchPizza();

    return (

            <h2>Test</h2>
  
    )
}

function fetchPizza() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => console.log(data))
}

export default Test;
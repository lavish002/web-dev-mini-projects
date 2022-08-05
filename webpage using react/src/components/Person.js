import React from "react";

const Person = () => {
    console.log(props)
    return(
        <h1>hi my name is {props.name} and I live in {props.country} </h1>
    )
}
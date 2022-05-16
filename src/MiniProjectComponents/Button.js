import React from "react"
import './Button.css'

const Button = (props) => {
    return (<button className="button" type="button" onClick={props.buttonOnclick}>{props.children}</button>)
}

export default Button;
import React from "react"
import './button.css';
type props = {
    text:string;
}

export const Button:React.FC<props> = ({text}:props) => {
    return(
        <button className="button">{text}</button>
    )
}
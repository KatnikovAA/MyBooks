import React from "react"
import './button.css';

type props = {
    text:string;
    handlerButtonClick:any;
}


export const Button:React.FC<props> = ({text,handlerButtonClick}:props) => {

    const handlerOnClick = () =>{
        handlerButtonClick();
    }

    return(
        <button onClick={handlerOnClick}className="button">{text}</button>
    )
}
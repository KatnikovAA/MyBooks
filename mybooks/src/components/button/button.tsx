import React from "react"
import './button.css';
import { useEffect } from "react";

type props = {
    text:string;
    handlerButtonClick?:any;
    handlerButtonClose?:any;
}


export const Button:React.FC<props> = ({text,handlerButtonClick,handlerButtonClose}:props) => {

    const handlerOnClick = () =>{
        handlerButtonClose ? 
        handlerButtonClose() :
        handlerButtonClick();
    }

    return(
        <button  onClick={handlerOnClick} className="button">{text}</button>
    )
}
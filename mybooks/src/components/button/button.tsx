import React from "react"
import './button.css';

type props = {
    text:string;
    handlerButtonClick?:() => void | undefined;
    handlerButtonClose?:() => void;
}

export const Button:React.FC<props> = ({text,handlerButtonClick,handlerButtonClose}:props) => {

    const handlerOnClick = ():void =>{
       /* handlerButtonClose ? 
        handlerButtonClose() :
        handlerButtonClick();
        */
        if(typeof( handlerButtonClose) == "function"){
            handlerButtonClose()
        } else {
            if(typeof( handlerButtonClick) == "function"){
                handlerButtonClick()
            }
        }
        
    }

    return(
        <button  onClick={handlerOnClick} className="button">{text}</button>
    )
}
import React from "react"
import './header.css';
// @ts-ignore
import { Button } from "../button/button.tsx";
// @ts-ignore
import { SearchText } from "../searchText/searchText.tsx";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { inboundApiBookReducers1 } from "../../redux/AllReducers/inboundApiBookReducers1.ts";
type Props = {
    handlerButtonClick:() => void | undefined
}
export const Header:React.FC<Props> = ({handlerButtonClick}:Props) =>{
    const valueApi = useSelector((state:any) => state.inboundApiBookReducers1.valueApiBooks)
    return(
        <div className="headerMain">
            <div className="headerText">
                Поиск книг:
            </div>
        <div>
            {
                valueApi
                &&
                <div className="headerSearch">
                    <SearchText handlerButtonClick={handlerButtonClick} ></SearchText>
                    <Button text="Find" handlerButtonClick={handlerButtonClick}></Button>
                </div>
            }

        </div>
        </div>
    )
}
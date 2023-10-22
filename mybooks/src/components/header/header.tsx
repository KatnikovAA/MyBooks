import React from "react"
import './header.css';
// @ts-ignore
import { Button } from "../button/button.tsx";
// @ts-ignore
import { SearchText } from "../searchText/searchText.tsx";
type Props = {
    handlerSearchTextOnChange: any
    handlerButtonClick:any
    apiBookSearch:any
}
export const Header:React.FC<Props> = ({handlerSearchTextOnChange,handlerButtonClick,apiBookSearch}:Props) =>{
    return(
        <div className="headerMain">
            <div className="headerText">
                Поиск книг:
            </div>
        <div>
            {
                apiBookSearch
                &&
                <div className="headerSearch">
                    <SearchText handlerSearchTextOnChange={handlerSearchTextOnChange}></SearchText>
                    <Button text="Find" handlerButtonClick={handlerButtonClick}></Button>
                </div>
            }

        </div>
        </div>
    )
}
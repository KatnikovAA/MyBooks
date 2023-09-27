import React from "react";
// @ts-ignore
import { SearchText } from "../searchText/searchText.tsx";
// @ts-ignore
import { Bookinfo } from "../bookinfo/bookinfo.tsx";
// @ts-ignore
import { Button } from "../button/button.tsx";
// @ts-ignore
import { BooksList } from "../booksList/booksList.tsx";
import { useState,useEffect } from "react";
import { callApi } from "../api.js";
import './main.css';
type obj  = []
interface apiBook extends obj {
    id:string; 
    searchInfo:{
        textSnippet:string;
    }
    items:Number;
    volumeInfo: {
        previewLink:string;
        authors:string[];
        categories:string[];
        description:string;
        language:string;
        imageLinks:{
            smallThumbnail:string;
            thumbnail:string;
        };
        publishedDate:string;
        title:string;
    };
}

export const Main:React.FC  = () =>{

const[valueSearchText,setValueSearchText] = useState<any>();
const[clickButtonFind,setClickButtonFind] = useState<any>(false);
const[apiBookSearch,setApiBookSearch] = useState<apiBook>()

useEffect(()=>{
    if(clickButtonFind){
        callApi(valueSearchText)
        .then(promise => setApiBookSearch(promise));
        console.log(apiBookSearch)
    }

},[clickButtonFind])

const handlerSearchTextOnChange = (value:number | String | undefined):void =>{
  setValueSearchText(value)
}

const handlerButtonClick = ():void => {
    setClickButtonFind(valueSearchText)
}

    return(
        <div>
            {
                apiBookSearch ?
                <div className="BooksListArr">{
                    apiBookSearch.map((book:apiBook) => {
                       return <BooksList apiBookSearch={book} key={book.id}></BooksList>
                    })
                }
                    
                    
                </div>
                :
                <div className="mainBlock">
                    <div className="searchBlock">
                        <SearchText handlerSearchTextOnChange={handlerSearchTextOnChange}></SearchText>
                        <Button text="Find" handlerButtonClick={handlerButtonClick}></Button>
                    </div>
                </div>
            }           
        </div>
    )
}
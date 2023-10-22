import React from "react";
import { useDebounce } from "@uidotdev/usehooks"
// @ts-ignore
import { SearchText } from "../searchText/searchText.tsx";
// @ts-ignore
import { Bookinfo } from "../bookinfo/bookinfo.tsx";
// @ts-ignore
import { Button } from "../button/button.tsx";
// @ts-ignore
import { BooksList } from "../booksList/booksList.tsx";
// @ts-ignore
import { Header } from "../header/header.tsx";
import { useState,useEffect } from "react";
import { callApi } from "../api.js";
import './main.css';
type obj  = []

interface apiBook extends obj {
    
    items:Number;
    id:string; 
    searchInfo:{
        textSnippet:string;     //Мелкое описание
    }
    volumeInfo: {
        previewLink:string;     //большая привью 
        authors:string[];       //авторы массив
        categories:string[];    //категирии массив
        description:string;     //большое описание
        language:string;        //язык
        imageLinks:{
            smallThumbnail:string;  //маленькая картиника
            thumbnail:string;       //большая картиника
        };
        publishedDate:string;       //Дата публикации
        title:string;               //Название книги
    };
}

export const Main:React.FC  = () =>{

const[valueSearchText,setValueSearchText] = useState<any>();
const[clickButtonFind,setClickButtonFind] = useState<any>(false);
const[apiBookSearch,setApiBookSearch] = useState<apiBook>()
const[flgDetailsInfoBook,setFlgDetailsInfoBook] = useState<boolean>(false)
const[detailsInfoBook,setDetailsInfoBook] = useState<apiBook | null>()

useEffect(()=>{
    if(clickButtonFind){
        callApi(valueSearchText)
            .then(promise => setApiBookSearch(promise));
            console.log(apiBookSearch)
    }

},[clickButtonFind])

useEffect(() =>{
    document.addEventListener("keydown", handlerEnterPress)
},[valueSearchText])

const handlerEnterPress = (e) =>{
    if(e.key === 'Enter'){
        handlerButtonClick();
    }
    
}

const handlerSearchTextOnChange = (value:number | String | undefined):void =>{
  setValueSearchText(value)
}

const handlerButtonClick = ():void => {
    setClickButtonFind(valueSearchText)
    console.log("првиет")
}

const handlerButtonClose = ():void => {
    setFlgDetailsInfoBook(false)
    setDetailsInfoBook(null)
    console.log("handlerButtonClose")
}


const heandelClickCloseModal = () =>{
    {
        flgDetailsInfoBook &&
            setFlgDetailsInfoBook(false)
            setDetailsInfoBook(null)
    }
}

const detailViewBook = (book:apiBook):any =>{
    setFlgDetailsInfoBook(true)
    setDetailsInfoBook(book)
    console.log(book)
}
    return(
        <div className="main" >
            <div className="header" >
                <Header apiBookSearch={apiBookSearch} handlerSearchTextOnChange={handlerSearchTextOnChange} handlerButtonClick={handlerButtonClick}/>
            </div >
            <div className="mainContent">
                {
                    apiBookSearch ?
                    <div className="BooksListArr">{
                        apiBookSearch.map((book:apiBook) => {
                            return <BooksList detailViewBook={detailViewBook} apiBookSearch={book} key={book.id}></BooksList>
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

            {
                detailsInfoBook 
                &&    
                <div>
                    <div className="closeModal" onClick={heandelClickCloseModal}></div>
                    <div className="viewDetailInfoBook">                       
                        <Bookinfo apiBookSearchProps = {detailsInfoBook} handlerButtonClose={handlerButtonClose}></Bookinfo>
                    </div> 
                </div> 
            }       
        </div>
    )
}
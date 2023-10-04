import React from "react";
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
const[detailsInfoBook,setDetailsInfoBook] = useState<object|null>()

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

const heandelClickMain = () =>{
    if(flgDetailsInfoBook == null)
    {
    
        setFlgDetailsInfoBook(false)
        setDetailsInfoBook(null)
        console.log("приватевфыв")
    }
}

const detailViewBook = (book:apiBook):any =>{
    setFlgDetailsInfoBook(true)
    setDetailsInfoBook(book)
    console.log(book)
}
    return(
        <div className="main" onClick={heandelClickMain}>
            <div className="header">
                <Header/>
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
                <div className="viewDetailInfoBook">
                    
                    <Bookinfo apiBookSearchProps = {detailsInfoBook}></Bookinfo>
                </div> 
            }       
        </div>
    )
}
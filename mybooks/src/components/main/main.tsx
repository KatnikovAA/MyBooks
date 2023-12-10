import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { inboundApiBook,openModal,ditalBookApi } from "../../redux/action.ts";
import { SearchText } from "../searchText/searchText.tsx";
import { Bookinfo } from "../bookinfo/bookinfo.tsx";
import { Button } from "../button/button.tsx";
import { BooksList } from "../booksList/booksList.tsx";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
// ошибка tsx 
// @ts-ignore
import { Header } from "../header/header.tsx";
import { useState } from "react";
import { callApi } from "../api.ts";
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

export const Main:React.FC  = () => {

    const dispatch = useAppDispatch();
    const boolClickBook = useAppSelector((state)=>state.clickOnBookReducers.boolean)
    const searchText = useAppSelector((state)=> state.valueTextForSearch.valueText)
    const valueApi = useAppSelector((state)=> state.inboundApiBookReducers1.valueApiBooks)
    const ditalBook = useAppSelector((state)=> state.ditalBookReducers.ditalBook)




    const handlerSearchTextOnChange = (value:number | String | undefined):void =>{
        //setValueSearchText(value)
        //dispatch(changeValueText(value))
    }

    const handlerButtonClick = ():void => {
        callApi(searchText)
        .then(promise => dispatch(inboundApiBook(promise)));
        //.then(promise => setApiBookSearch(promise));
    }       

    const closeModalBook = ():void =>{
        dispatch(openModal())           //закрыть модалку проставив в булиан false
        dispatch(ditalBookApi(null))
    }
    const handlerButtonClose = ():void => {
        closeModalBook()
    }


    const heandelClickCloseModal = ():void =>{
        {
            boolClickBook &&
                closeModalBook()
        }
    }

    const detailViewBook = (book:apiBook):void =>{
        dispatch(openModal())
        dispatch(ditalBookApi(book))

    }

        return(
            <div className="main" >
                <div className="header" >
                    <Header handlerButtonClick={handlerButtonClick}/>
                </div >
                <div className="mainContent">

                    {
                        valueApi ?
                        <div className="BooksListArr">{
                            valueApi.map((book:apiBook) => {
                                return <BooksList detailViewBook={detailViewBook} apiBookSearch={book} key={book.id}></BooksList>
                            })
                        }                     
                        </div>
                        :
                        <div className="mainBlock">                       
                            <div className="searchBlock">
                                <SearchText handlerButtonClick={handlerButtonClick}></SearchText>
                                <Button text="Find" handlerButtonClick={handlerButtonClick}></Button>
                            </div>
                        </div>
                    }
                </div> 

                {
                    ditalBook 
                    &&    
                    <div>
                        <div className="closeModal" onClick={heandelClickCloseModal}></div>
                        <div className="viewDetailInfoBook">                       
                            <Bookinfo handlerButtonClose={handlerButtonClose}></Bookinfo>
                        </div> 
                    </div> 
                }       
            </div>
    )
}
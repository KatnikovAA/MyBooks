import { DITAL_BOOK_API } from "../action.ts";
import { PayloadAction } from "@reduxjs/toolkit";

interface apiBook  {
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

type ditalBookState = {
    ditalBook:apiBook | null;
}

let initialState:ditalBookState = {
    ditalBook:null
}

export const ditalBookReducers = (state = initialState,action:PayloadAction<apiBook>) => {
    switch (action.type){
        case DITAL_BOOK_API:
            return{
                ...state,
                ditalBook:action.payload
            }
        default:
            return state
    }       
}

import { ANSWER_BOOK_API } from "../action.ts";
import { PayloadAction } from "@reduxjs/toolkit";

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

type apiState  ={
    valueApiBooks:apiBook | null;
}
const initialState:apiState  = {
    valueApiBooks:null
}

export const inboundApiBookReducers1  = (state = initialState,action:PayloadAction<apiBook>) => {
    switch (action.type){
        case ANSWER_BOOK_API:
            console.log(action.payload)
            return{
                ...state,
                valueApiBooks:action.payload
            }
        default:
            return state
    }       
}
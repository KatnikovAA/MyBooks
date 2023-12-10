import { PayloadAction } from "@reduxjs/toolkit"

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const VALUE_TEXT = 'VALUE_TEXT'
export const ANSWER_BOOK_API = 'ANSWER_BOOK_API'
export const CLICK_FIND = 'CLICK_FIND'
export const DITAL_BOOK_API = 'DITAL_BOOK_API'

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

export function changeValueText(value:string | number | null){
    return{
        type:VALUE_TEXT,
        payload:value
    }
}

export function openModal(){
    return{
        type:OPEN_MODAL,
    }
}
export function inboundApiBook(value:apiBook){
    return{
        type:ANSWER_BOOK_API,
        payload:value
    }
}

export function ditalBookApi(value:apiBook| null ){
    return{
        type:DITAL_BOOK_API,
        payload:value
    }
}

export function handlerButtonClickFind(){
    return{
        type:CLICK_FIND
    }
}

// export function closeModal(){
//     return{
//         type:CLOSE_MODAL
//     }
// }

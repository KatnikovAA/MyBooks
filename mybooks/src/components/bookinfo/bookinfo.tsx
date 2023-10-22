import React from "react"
import './bookinfo.css';
// @ts-ignore
import { Button } from "../button/button.tsx";

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

type Props= {
    apiBookSearchProps:apiBook,
    handlerButtonClose?:any
}

export const Bookinfo:React.FC<Props> = ({apiBookSearchProps,handlerButtonClose}:Props) =>{
    return(
        <div className="detailsBookValue">
            <div className="detailsImgBook">
                <img className="imageLinks" src={apiBookSearchProps.volumeInfo.imageLinks.thumbnail}></img>
            </div>
            <div className="detailsInfoBookValue">
                <div className="detailsBookTitle">
                    {
                        apiBookSearchProps.volumeInfo.title
                    }
                </div>
                <div className="detailsBookTextSnippet">
                    <div className="detailsText">Описание: </div>
                    <textarea className="detailsInfo">{apiBookSearchProps.volumeInfo.description}</textarea>
                </div>
                <div className="detailsBookLanguage"> 
                    <div className="detailsText"> Язык: </div>
                    <div className="detailsInfo">{apiBookSearchProps.volumeInfo.language.toUpperCase()}</div>
                </div>
                <div className="detailsBookPublishedDate">
                    <div className="detailsText">Дата публикации: </div>
                    <div className="detailsInfo">{apiBookSearchProps.volumeInfo.publishedDate}</div>
                </div>
                {
                    apiBookSearchProps.volumeInfo.authors &&
                    <div className="detailsBookAuthors"> 
                    <div className="detailsText">Авторы: </div>
                    <div className="detailsInfo">{apiBookSearchProps.volumeInfo.authors.map((autors,index)=>{
                            return <div key={index}>
                                {autors}
                            </div>
                        })}
                        </div>
                </div>
                }
                {
                    apiBookSearchProps.volumeInfo.categories &&
                    <div className="detailsBookCategories"> 
                        <div className="detailsText">Категория: </div>
                        <div className="detailsInfo">{
                            apiBookSearchProps.volumeInfo.categories.map((cat,index)=>{
                                return <div key={index}>
                                    {cat}
                                </div>
                            })}
                        </div>
                </div>
                }
                <div className="closeButton">
                    <Button text="Close" handlerButtonClose={handlerButtonClose}></Button>
                </div>
            </div>
        </div>
        
    )
}
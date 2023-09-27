import React from "react"
import './booksList.css';

interface apiBook {
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
    apiBookSearch:apiBook
}
export const BooksList = ({apiBookSearch}:Props) => {
    return(
        <div className="BooksList">
            <img className="imgBook" src={apiBookSearch.volumeInfo.imageLinks.thumbnail}></img>
            <div className="bookTitle">
                {
                    apiBookSearch.volumeInfo.title
                }
            </div>

            <div className="BookPublishedDate">
                <div className="info">{apiBookSearch.volumeInfo.publishedDate}</div>
            </div>
            <div className="bookAuthors"> 
                <div className="info">
                    {
                        apiBookSearch.volumeInfo.authors[0]
                    }
                    </div>
            </div>
            <div className="bookCategories"> 
                <div className="info">
                    {
                        apiBookSearch.volumeInfo.categories[0]
                    }
                </div>
            <div className="bookLanguage"> 
                <div className="info">{apiBookSearch.volumeInfo.language.toUpperCase()}</div>
            </div>
            </div>
        </div>
    )
}
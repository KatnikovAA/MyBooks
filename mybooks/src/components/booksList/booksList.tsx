import React from "react"
import './booksList.css';
import { useAppDispatch } from "../../hook";
import { ditalBookApi } from "../../redux/action";

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
            smallThumbnail:string ;  //маленькая картиника
            thumbnail?:string;       //большая картиника
        } ;
        publishedDate:string;       //Дата публикации
        title:string;               //Название книги
    };
}

type Props= {
    apiBookSearch:apiBook,
    detailViewBook:Function,
}
export const BooksList = ({apiBookSearch,detailViewBook}:Props) => {

    const heandelClicklBooksList = ():void => {
        detailViewBook(apiBookSearch);
    }
    
    if(!apiBookSearch) {
        return (
        <> </>
        )
    }
    if(apiBookSearch.volumeInfo.title.length > 16){
        apiBookSearch.volumeInfo.title.split("").slice(0,16).join("")
    }
    return(
        
        <div className="BooksList" onClick={((heandelClicklBooksList))}>
            {
                apiBookSearch.volumeInfo.imageLinks
                ? 
                <img className="imgBook" 
                    src={apiBookSearch.volumeInfo.imageLinks.thumbnail}>
                </img>
                :
                <img className="imgBook">
                    
                </img>
            }
            <div className="bookTitle">
                {   
                    apiBookSearch.volumeInfo.title.length > 16 
                    ?
                    apiBookSearch.volumeInfo.title.split("").slice(0,13).join("") + "..."
                    :
                    apiBookSearch.volumeInfo.title
                }
            </div>

            <div className="BookPublishedDate">
                <div className="info">{apiBookSearch.volumeInfo.publishedDate}</div>
            </div>
            
            {  
            apiBookSearch.volumeInfo.authors
            &&  
           <div className="bookAuthors"> 
                    <div className="info">
                        {
                            apiBookSearch.volumeInfo.authors[0]
                        }
                    </div>
            </div>
            }

            {
            apiBookSearch.volumeInfo.categories
            &&    
            <div className="bookCategories"> 
                <div className="info">
                    {
                        apiBookSearch.volumeInfo.categories[0]
                    }
                </div>
            </div>
            }  
            <div className="bookLanguage"> 
                <div className="info">{apiBookSearch.volumeInfo.language.toUpperCase()}</div>
            </div>
        </div>
        
    )
}
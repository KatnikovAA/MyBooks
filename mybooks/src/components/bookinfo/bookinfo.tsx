import React from "react"
import './bookinfo.css';

interface apiBook {
    items:Number;
    searchInfo:{
        textSnippet:string;     //Мелкое описание
    }
    id:string; 
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

export const Bookinfo:React.FC<Props> = ({apiBookSearch}:Props) =>{
    return(
        <div className="bookValue">
            <img className="imgBook" src={apiBookSearch.volumeInfo.imageLinks.thumbnail}></img>
            <div className="bookTitle">
                {
                    apiBookSearch.volumeInfo.title
                }
            </div>
            <div className="bookTextSnippet">
                <div className="text">Описание: </div>
                <div className="info">{apiBookSearch.searchInfo.textSnippet}</div>
            </div>
            <div className="bookTextSnippet">
                <div className="text">Описание: </div>
                <div className="info">{apiBookSearch.volumeInfo.description}</div>
            </div>
            <div className="bookLanguage"> 
                <div className="text"> Язык: </div>
                <div className="info">{apiBookSearch.volumeInfo.language.toUpperCase()}</div>
            </div>
            <div className="BookPublishedDate">
                <div className="text">Дата публикации: </div>
                <div className="info">{apiBookSearch.volumeInfo.publishedDate}</div>
            </div>
            <div className="bookAuthors"> 
                <div className="text">Авторы: </div>
                <div className="info">{apiBookSearch.volumeInfo.authors.map((autors,index)=>{
                        return <div key={index}>
                            {autors}
                        </div>
                    })}
                    </div>
            </div>
            <div className="bookCategories"> 
                <div className="text">Категория: </div>
                <div className="info">{
                    apiBookSearch.volumeInfo.categories.map((cat,index)=>{
                        return <div key={index}>
                            {cat}
                        </div>
                    })}
                    </div>
            </div>
        </div>
        
    )
}
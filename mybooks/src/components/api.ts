import { createAsyncThunk } from "@reduxjs/toolkit"

export const callApi = (value:string | number | null) => {
    let key = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCinJp4ATHTCkbR2BFAIUd6dU9B0lgmzHY`

    return fetch(key).then(response => {
              if(response.ok)
              {   
                  return  response.json()
                    .then(response => response.items)  
              } else{
                    console.log(Response.error())
              }})
        }
    
    
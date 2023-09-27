import React from 'react';
import { ChangeEvent } from 'react';
import './searchText.css';

type Props = {
    handlerSearchTextOnChange:(value:number | String | undefined)=>void;
}

export const SearchText:React.FC<Props>  = ({handlerSearchTextOnChange}:Props) =>{

    const heandelOnChange = (e:ChangeEvent<HTMLInputElement>):any =>{
        let value = e.target.value
        handlerSearchTextOnChange(value)
    }

    return(
        <input onChange={heandelOnChange} placeholder='JavaScript на примерах' className='searchText' type='text'></input>
    )
}
import React from 'react';
import { ChangeEvent } from 'react';
import './searchText.css';
import { changeValueText } from '../../redux/action.ts';
import { KeyboardEvent } from 'react';
import { useAppDispatch,useAppSelector } from '../../hook.ts';
import { useState } from 'react';
type Props = {
    handlerButtonClick:()=>void;

}


export const SearchText:React.FC<Props>  = ({handlerButtonClick}:Props) =>{
    const dispatch = useAppDispatch();
    const valueText = useAppSelector((state)=>state.valueTextForSearch.valueText)
    const handlerEnterPress = (e: KeyboardEvent):void =>{
        if(e.key === 'Enter'){
            handlerButtonClick();
        }  
    }

    const heandelOnChange = (e:ChangeEvent<HTMLInputElement>):void =>
        {
            dispatch(changeValueText(e.target.value))
        }
        return(
            <input 
            
            value={valueText} onKeyDown={handlerEnterPress} onChange={heandelOnChange} placeholder='JavaScript на примерах' className='searchText' type='text'></input>
        )
}
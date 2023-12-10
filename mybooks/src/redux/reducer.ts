import { valueTextForSearch } from "./AllReducers/valueTextForSearch.ts";
import { combineReducers } from "redux";
import { clickOnBookReducers } from "./AllReducers/clickOnBookReducers.ts";
import { ditalBookReducers } from "./AllReducers/ditalBookReducers.ts";
import { inboundApiBookReducers1 } from "./AllReducers/inboundApiBookReducers1.ts";

export const reducer = combineReducers(
    {
        valueTextForSearch,
        clickOnBookReducers,
        inboundApiBookReducers1,
        ditalBookReducers,
    }
)
    


/*
let initialState = {
    count: 1,
  };
export const reducer = (state = initialState, {type}) => {
    console.log(state.count);
    switch (type) {
        case CLICK_DIV:
        return {
            ...state,
            count: state.count + 1,
        };
        default:
        return state;
        }
    }; 

    export const reducer = (state = initialState, {type,value}) => {
console.log(state.valueText);
switch (type) {
    case VALUE_TEXT:
    return {
        ...state,
        valueText: value,
    };
    default:
    return state;
    }
}; 
    
    
    */
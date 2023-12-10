import { VALUE_TEXT } from "../action.ts";
import { PayloadAction } from "@reduxjs/toolkit";

type valueTextState = {
    valueText:string | number | null
}

let initialState:valueTextState = {
    valueText: null,
  };

export const valueTextForSearch = (state = initialState, action:PayloadAction<string>) => {
    console.log(state.valueText)
    switch (action.type) {
        case VALUE_TEXT:
            return {
                ...state,
                valueText: action.payload,
            };
        default:
            return state;
        }
    };  
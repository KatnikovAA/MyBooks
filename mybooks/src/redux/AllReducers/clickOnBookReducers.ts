import { OPEN_MODAL } from "../action.ts"
import { PayloadAction } from "@reduxjs/toolkit";
//import { CLOSE_MODAL } from "../action.ts";

type flgStatusModal ={
    boolean:boolean
}
const initialState:flgStatusModal = {
    boolean:false
}

export function clickOnBookReducers(state = initialState, action:PayloadAction<string>){
    switch (action.type){
        case OPEN_MODAL:
            return {
                ...state,
                boolean:!state.boolean
        }
        /*case CLOSE_MODAL:
            return {
                ...state,
                boolean: false,
            };
        */
        default:
            return state
            
    }

}
import { ActionTypes } from "../constants/action_types"

const initialState = {
    countries: []
}

export const countryReducer = (state = initialState, action) =>{
       switch (action.type){
           case ActionTypes.GET_COUNTRIES:
           return {
               ...state,
               countries: action.payload
            };
       }
       switch (action.type){
        case ActionTypes.SELECTED_REGION:
        return {
            ...state,
            countries: action.payload
         };
        default:
        return state;
    }
}

export const selectedCountryReducer = (state = {}, action) =>{
    switch (action.type){
        case ActionTypes.SELECTED_COUNTRY:
        return {
            ...state,
            country: action.payload
         };
        default:
        return state;
    }
}






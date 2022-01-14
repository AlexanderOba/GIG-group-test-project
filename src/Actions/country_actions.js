import { ActionTypes } from "../constants/action_types"



export const setCountries = (countries) =>{
  return {
     type: ActionTypes.GET_COUNTRIES,
     payload: countries
  }
}


export const setCountryDetails = (country) =>{
  return {
     type: ActionTypes.SELECTED_COUNTRY,
     payload: country
  }
}

import { combineReducers } from "redux";
import { countryReducer, selectedCountryReducer } from "./country_reducer";

const rootReducer = combineReducers({
     countryReducer,
     country:selectedCountryReducer,
});

export default rootReducer;

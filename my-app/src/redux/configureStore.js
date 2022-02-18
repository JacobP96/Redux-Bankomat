import { combineReducers, createStore } from "redux";
import AtmReducer from "./ducks/atm";
const reducer = combineReducers({
  Atm: AtmReducer
});

const store = createStore(reducer);

export default store;
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMidleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import addPathReducer from './addPath-reducer';
import ContentReducer from "./content-reducer";

let reducers = combineReducers({
    addPath: addPathReducer,
    contentPart : ContentReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));
window.store = store;
export default store;
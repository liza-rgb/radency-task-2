import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { popupReducer } from "./popupReducer";


const reducers = combineReducers({
    notes: notesReducer,
    popup: popupReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
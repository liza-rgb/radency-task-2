import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { popupActionCreators } from "../state";

export default function AddNoteButton() {
    const dispatch = useDispatch();
    const { enableAddPopup } = bindActionCreators(popupActionCreators, dispatch);
    return (
        <div className="AddNoteButton text-center">
            <button className="bg-secondary px-7 py-1 my-5 border-2 border-black
                text-black rounded hover:bg-white hover:-translate-y-1 transition" 
                onClick={() => enableAddPopup()}>
                Add Note
            </button>
        </div>
    )
}
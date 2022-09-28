import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { notesActionCreators } from "../state";
import { popupActionCreators } from "../state";

type ControlProps = {
    note_id: string,
    isArchiveMode: boolean
}

export default function NoteControlPanel({ note_id, isArchiveMode }: ControlProps) {
    const dispatch = useDispatch();
    const { deleteNote, archiveNote, unarchiveNote } = bindActionCreators(notesActionCreators, dispatch);
    const { enableEditPopup } = bindActionCreators(popupActionCreators, dispatch);

    function activePanel() {
        return (
            <div className="text-xl flex justify-center">
                <button className="hover:text-black p-1 transition"
                    onClick={()=> enableEditPopup(note_id)}>
                    <i className="fa-solid fa-pencil"></i>
                </button>
                <button className="hover:text-black p-1 transition"
                    onClick={() => archiveNote(note_id)}>
                    <i className="fa-solid fa-box-archive"></i> 
                </button>
                <button className="hover:text-black p-1 transition"
                    onClick={() => deleteNote(note_id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>);
    }

    function archivePanel() {
        return (
            <div className="text-xl flex justify-center">
                <button className="hover:text-black p-1"
                    onClick={() => unarchiveNote(note_id)}>
                    <i className="fa-solid fa-box-open"></i> 
                </button>
                <button className="hover:text-black p-1"
                    onClick={() => deleteNote(note_id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>);
    }

    return (
        <td className="NoteControlPanel">
            {isArchiveMode  ? archivePanel() : activePanel()}
        </td>)
}
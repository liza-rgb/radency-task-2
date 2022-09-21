import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

type ControlProps = {
    note_id: string,
    isArchiveMode: boolean
}

export default function NoteControlPanel({ note_id, isArchiveMode }: ControlProps) {
    const dispatch = useDispatch();
    const { addNote, editNote, deleteNote, archiveNote, unarchiveNote } = bindActionCreators(actionCreators, dispatch);

    function activePanel() {
        return (
        <td className="control-panel">
            <button>
                <i className="fa-solid fa-pencil"></i>
            </button>
            <button onClick={() => archiveNote(note_id)}>
                <i className="fa-solid fa-box-archive"></i> 
            </button>
            <button onClick={() => deleteNote(note_id)}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </td>);
    }

    function archivePanel() {
        return (
        <td className="control-panel">
            <button onClick={() => unarchiveNote(note_id)}>
                <i className="fa-solid fa-box-open"></i> 
            </button>
            <button onClick={() => deleteNote(note_id)}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </td>);
    }

    if (isArchiveMode) {
        return archivePanel();
    } 
    return activePanel();
}
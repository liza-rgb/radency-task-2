import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getDatesList } from "../lib/dates";
import { getCategoryIconClass } from "../lib/categories";
import { NotesState } from "../state/reducers/notesReducer";
import { formatText } from "../lib/text-overflow";
import NoteControlPanel from "./NoteControlPanel";
import "../styles/NoteTable.css";

export default function NoteTable() {
    const storedNotes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
    const [isArchiveMode, setIsArchiveMode] = useState<boolean>(false);

    function changeMode() {
        setIsArchiveMode(!isArchiveMode);
    }

    function showModeButton() {
        if (isArchiveMode) {
            return ( 
                <button onClick={changeMode}>
                    <i className="fa-regular fa-note-sticky"></i> Active
                </button>
            )
        }
        return (
            <button onClick={changeMode}>
                <i className="fa-solid fa-box-archive"></i> Archive
            </button>
        )
    }

    function showNotesTable() {
        return (
            <tbody>
                {storedNotes.map((note) => {
                    if (note.isArchived === isArchiveMode) {
                        return (
                            <tr>
                                <td>
                                    <i className={getCategoryIconClass(note.category)}></i>
                                </td>
                                <td>{formatText(note.name, 20)}</td>
                                <td>{formatDate(note.created)}</td>
                                <td>{note.category}</td>
                                <td>{formatText(note.content, 20)}</td>
                                <td>{getDatesList(note.content)}</td>
                                <NoteControlPanel isArchiveMode={isArchiveMode} note_id={note.id} />
                            </tr>
                        )
                    }
                })}
            </tbody>
        )
    }

    return (
        <table id="notes-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th>{showModeButton()}</th>
                </tr>
            </thead>
            {showNotesTable()}
        </table>
    )
}
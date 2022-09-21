import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getDatesList } from "../lib/dates";
import { NotesState } from "../state/reducers/notesReducer";
import NoteControlPanel from "./NoteControlPanel";

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
                    <i className="fa-regular fa-note-sticky"></i> View Active
                </button>
            )
        }
        return (
            <button onClick={changeMode}>
                <i className="fa-solid fa-box-archive"></i> View Archive
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
                                <td>???</td>
                                <td>{note.name}</td>
                                <td>{formatDate(note.created)}</td>
                                <td>{note.category}</td>
                                <td>{note.content}</td>
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
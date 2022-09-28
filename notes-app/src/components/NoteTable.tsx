import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getDatesList } from "../lib/dates";
import { getCategoryIconClass } from "../lib/categories";
import { RootState } from "../state/reducers";
import { formatText } from "../lib/text-overflow";
import NoteControlPanel from "./NoteControlPanel";
import { Note } from "../state/interfaces/notes";
import AddNoteButton from "./AddNoteButton";


export default function NoteTable() {
    const storedNotes = useSelector<RootState, Note[]>((state) => state.notes);
    const [isArchiveMode, setIsArchiveMode] = useState<boolean>(false);

    function changeMode() {
        setIsArchiveMode(!isArchiveMode);
    }

    function showModeButton() {
        if (isArchiveMode) {
            return ( 
                <button onClick={changeMode}
                    className="hover:text-black transition">
                    <i className="fa-regular fa-note-sticky"></i> Active
                </button>
            )
        }
        return (
            <button onClick={changeMode}
                className="hover:text-black transition">
                <i className="fa-solid fa-box-archive"></i> Archive
            </button>
        )
    }

    function showNotesTable() {
        return (
            <tbody className="text-secondary">
                {storedNotes.map((note) => {
                    if (note.isArchived === isArchiveMode) {
                        return (
                            <tr key={"note-table-row-" + note.id}
                                className="bg-primary">
                                <td className="p-2 text-black text-xl">
                                    <i className={getCategoryIconClass(note.category)}></i>
                                </td>
                                <td className="p-2 text-black">{formatText(note.name, 20)}</td>
                                <td className="p-2">{formatDate(note.created)}</td>
                                <td className="p-2">{note.category}</td>
                                <td className="p-2">{formatText(note.content, 20)}</td>
                                <td className="p-2">{getDatesList(note.content)}</td>
                                <NoteControlPanel isArchiveMode={isArchiveMode} note_id={note.id} />
                            </tr>
                        )
                    }
                })}
            </tbody>
        )
    }

    return (
        <div className="NoteTable">
            <table className="mx-auto table-fixed border-separate border-spacing-y-2">
                <thead className="text-white bg-secondary">
                    <tr key="note-table-row-header" className="bg-secondary">
                        <th className="w-10"></th>
                        <th className="w-40 p-2 text-black">Name</th>
                        <th className="w-40">Created</th>
                        <th className="w-40">Category</th>
                        <th className="w-48">Content</th>
                        <th className="w-40">Dates</th>
                        <th className="w-32 p-3">{showModeButton()}</th>
                    </tr>
                </thead>
                {showNotesTable()}
            </table>
            {!isArchiveMode ? <AddNoteButton /> : ""}
        </div>
    )
}
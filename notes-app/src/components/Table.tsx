import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";
import { Note } from "../state/interfaces/notes";
import { categories, countNotesByCategory } from "../lib/categories";
import NoteRow from "./NoteRow";
import CategoryRow from "./CategoryRow";

type TableProps = {
    mode: "notes" | "summary"
}

export default function Table({ mode }: TableProps) {
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

    function showNotesTableHeader() {
        return (
            <tr key="note-table-row-header" className="bg-secondary">
                <th className="w-10"></th>
                <th className="w-40 p-2 text-black">Name</th>
                <th className="w-40">Created</th>
                <th className="w-40">Category</th>
                <th className="w-48">Content</th>
                <th className="w-40">Dates</th>
                <th className="w-32 p-3">{showModeButton()}</th>
            </tr>);
    }

    function showNotesTable() {
        return (
            <tbody className="text-secondary">
                {storedNotes.map((note) => {
                    if (note.isArchived === isArchiveMode) {
                        return (<NoteRow note={note} isArchiveMode={isArchiveMode} />)
                    }
                })}
            </tbody>
        )
    }

    function showSummaryTableHeader() {
        return (
            <tr key="summary-table-header">
                <th className="w-10"></th>
                <th className="w-33 p-2 text-black">Note Category</th>
                <th className="w-28">Active</th>
                <th className="w-28">Archive</th>
            </tr>);
    }

    function showSummaryTable() {
        let keyCounter = 0;
        return (
            <tbody className="text-secondary">
                {categories.map((category) => {
                    return <CategoryRow category={category} key={keyCounter} />;
                    keyCounter++;
                })}
            </tbody>
        )
    }


    return (
        <div className="Table">
            <table className="mx-auto table-fixed border-separate border-spacing-y-2">
                <thead className="text-white bg-secondary">
                    {mode === "notes" ? showNotesTableHeader() : ""}
                    {mode === "summary" ? showSummaryTableHeader() : ""}
                </thead>
                {mode === "notes" ? showNotesTable() : ""}
                {mode === "summary" ? showSummaryTable() : ""}
            </table>
        </div>
    )
}
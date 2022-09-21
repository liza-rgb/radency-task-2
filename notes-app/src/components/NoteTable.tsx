import React, { useState } from "react";
import { formatDate, getDatesList } from "../lib/dates";

export default function NoteTable() {
    const [isArchiveMode, setIsArchiveMode] = useState<Boolean>(false);

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

    function showControlPanel(note) {
        if (!isArchiveMode) {
            return `
            <td class="control-panel">
                <button onclick=showEditForm(${note.id})>
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button onclick=archiveNote(${note.id})>
                    <i class="fa-solid fa-box-archive"></i>                    </button>
                 <button onclick=deleteNote(${note.id})>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td> `;
        }
        if (isArchiveMode) {
            return `
            <td class="control-panel">
                <button onclick=unarchiveNote(${note.id})>
                    <i class="fa-solid fa-box-open"></i>
                </button>
                <button onclick=deleteNote(${note.id})>
                    <i class="fa-solid fa-trash"></i>                    
                </button>
            </td>`;
        }
    }

    function showNotesTable() {
        let notesTableHTML = "";
        storedNotes.map((note) => {
            if (note.isArchived === isArchiveMode) {
                notesTableHTML += `
                <tr>
                    <td>
                        ${getCategoryIcon(note.category)}
                    </td>
                    <td>${note.name}</td>
                    <td>${formatDate(note.created)}</td>
                    <td>${note.category}</td>
                    <td>${note.content}</td>
                    <td>${getDatesList(note.content)}</td>
                    ${showControlPanel(note)}
                </tr> `;
            }
        });
        return notesTableHTML;
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
            <tbody>
                {showNotesTable()}
            </tbody>
        </table>
    )
}
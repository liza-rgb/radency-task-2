import React from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../state/reducers/notesReducer";
import { categories } from "../lib/categories";

export default function SummaryTable() {
    const storedNotes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);

    function countNotesByCategory(category_name: string, storedNotes: NotesState["notes"]) {
        let activeNotes = 0;
        let archivedNotes = 0;
        storedNotes.map((note) => {
            if (note.category === category_name) {
                if (note.isArchived) {
                    archivedNotes++;
                } else {
                    activeNotes++;
                }
            }
        })
        return { activeNotes, archivedNotes }
    }
    
    return (
        <table id="summary-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Note Category</th>
                    <th>Active</th>
                    <th>Archive</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category) => {
                    const notesCount = countNotesByCategory(category.name, storedNotes);
                    return (
                        <tr>
                            <td>
                                <i className={category.iconClass}></i>
                            </td>
                            <td>{category.name}</td>
                            <td>{notesCount.activeNotes}</td>
                            <td>{notesCount.archivedNotes}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
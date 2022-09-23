import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";
import { categories, countNotesByCategory } from "../lib/categories";
import { Note } from "../state/interfaces/notes";

export default function SummaryTable() {
    const storedNotes = useSelector<RootState, Note[]>((state) => state.notes);

    function showSummaryTable() {
        let keyCounter = 0;
        return (
            <tbody>
                {categories.map((category) => {
                    const notesCount = countNotesByCategory(category.name, storedNotes);
                    return (
                        <tr key={"summary-table" + keyCounter++}>
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
        )
    }

    return (
        <div className="SummaryTable">
            <table>
                <thead>
                    <tr key="summary-table-header">
                        <th></th>
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archive</th>
                    </tr>
                </thead>
                {showSummaryTable()}
            </table>
        </div>
    );
}
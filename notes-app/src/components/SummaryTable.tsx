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
            <tbody className="text-secondary">
                {categories.map((category) => {
                    const notesCount = countNotesByCategory(category.name, storedNotes);
                    return (
                        <tr key={"summary-table-" + keyCounter++}
                            className="bg-primary">
                            <td className="text-black p-2 text-lg">
                                <i className={category.iconClass}></i>
                            </td>
                            <td className="text-black p-2">{category.name}</td>
                            <td className="text-center p-2">{notesCount.activeNotes}</td>
                            <td className="text-center p-2">{notesCount.archivedNotes}</td>
                        </tr>
                    );
                })}
            </tbody>
        )
    }

    return (
        <div className="SummaryTable">
            <table className="mx-auto table-fixed border-separate border-spacing-y-2">
                <thead className="text-white bg-secondary">
                    <tr key="summary-table-header">
                        <th className="w-10"></th>
                        <th className="w-33 p-2 text-black">Note Category</th>
                        <th className="w-28">Active</th>
                        <th className="w-28">Archive</th>
                    </tr>
                </thead>
                {showSummaryTable()}
            </table>
        </div>
    );
}
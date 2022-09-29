import React from "react";
import { useSelector } from "react-redux";
import { Category } from "../lib/categories";
import { countNotesByCategory } from "../lib/categories";
import { RootState } from "../state/reducers";
import { Note } from "../state/interfaces/notes";

type CategoryRowProps = {
    category: Category,
    key: number
}

export default function CategoryRow({category, key}: CategoryRowProps) {
    const storedNotes = useSelector<RootState, Note[]>((state) => state.notes);
    const notesCount = countNotesByCategory(category.name, storedNotes);
    
    return (
        <tr key={"summary-table-" + key}
            className="bg-primary">
            <td className="text-black p-2 text-lg">
                <i className={category.iconClass}></i>
            </td>
            <td className="text-black p-2">{category.name}</td>
            <td className="text-center p-2">{notesCount.activeNotes}</td>
            <td className="text-center p-2">{notesCount.archivedNotes}</td>
        </tr>);
}
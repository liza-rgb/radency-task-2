import React from "react";
import { Note } from "../state/interfaces/notes";
import NoteControlPanel from "./NoteControlPanel";
import { getCategoryIconClass } from "../lib/categories";
import { formatText } from "../lib/text-overflow";
import { formatDate, getDatesList } from "../lib/dates";

type NoteRowProps = {
    note: Note,
    isArchiveMode: boolean
}

export default function NoteRow({note, isArchiveMode}: NoteRowProps) {
    return (
        <tr key={"note-table-row-" + note.id} className="bg-primary">
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
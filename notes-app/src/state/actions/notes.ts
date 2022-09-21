import { NoteActionType } from "../action-types/notes"

interface AddNoteAction {
    type: NoteActionType.ADD;
    name: string;
    category: string;
    content: string;
}

interface EditNoteAction {
    type: NoteActionType.EDIT;
    id: string;
    name: string;
    category: string;
    content: string;
}

interface DeleteNote {
    type: NoteActionType.DELETE;
    id: string;
}

interface ArchiveNoteAction {
    type: NoteActionType.ARCHIVE;
    id: string;
}

interface UnarchiveNoteAction {
    type: NoteActionType.UNARCHIVE;
    id: string;
}

export type NoteAction = AddNoteAction | EditNoteAction | DeleteNote | ArchiveNoteAction | UnarchiveNoteAction;
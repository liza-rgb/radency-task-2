import { Note } from "../interfaces/notes";
import { NotesData } from "../../data/notes";
import { NoteAction } from "../actions/notes";
import { NoteActionType } from "../action-types/notes";

interface NotesState {
    notes: Note[];
}
  
const initialState: NotesState = {
    notes: NotesData
};

const notesReducer = (state: NotesState = initialState, action: NoteAction) => {
    switch (action.type) {
        case NoteActionType.ADD: {
            const newNote = {
                id: "blablabla",
                created: new Date(),
                name: action.name,
                category: action.category,
                content: action.content,
                isArchived: false
            }
            return state.notes.push(newNote);
        }
        case NoteActionType.EDIT: {
            const editNoteIndex = state.notes.findIndex(note => note.id === action.id);
            if (editNoteIndex !== 1) {
                return state.notes[editNoteIndex] = {
                    ...state.notes[editNoteIndex],
                    name: action.name,
                    category: action.category,
                    content: action.content
                }
            }
            return state;
        }
        case NoteActionType.DELETE: {
            return state.notes.filter(note => note.id !== action.id);
        }
        case NoteActionType.ARCHIVE: {
            const archiveNoteIndex = state.notes.findIndex(note => note.id === action.id);
            if (archiveNoteIndex !== -1) {
                return state.notes[archiveNoteIndex].isArchived = true;
            }
            return state;
        }
        case NoteActionType.UNARCHIVE: {
            const unarchiveNoteIndex = state.notes.findIndex(note => note.id === action.id);
            if (unarchiveNoteIndex !== -1) {
                return state.notes[unarchiveNoteIndex].isArchived = false;
            }
            return state;
        }
        default:
            return state;
    }
}

export default notesReducer;
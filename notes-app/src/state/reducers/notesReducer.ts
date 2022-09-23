import { Note } from "../interfaces/notes";
import { NotesData } from "../../data/notes";
import { NoteAction } from "../actions/notes";
import { NoteActionType } from "../action-types/notes";
import { v4 as uuidv4 } from "uuid";

const initialState: Note[] = NotesData;

export const notesReducer = (state: Note[] = initialState, action: NoteAction) => {
    switch (action.type) {
        case NoteActionType.ADD: {
            const newNote = {
                id: uuidv4(),
                created: new Date(),
                name: action.name,
                category: action.category,
                content: action.content,
                isArchived: false
            }
            return [ ...state, newNote ];
        }
        case NoteActionType.EDIT: {
            const editNoteIndex = state.findIndex(note => note.id === action.id);
            if (editNoteIndex > -1) {
                const storedNotes = state;
                storedNotes[editNoteIndex] = {
                    ...state[editNoteIndex],
                    name: action.name,
                    category: action.category,
                    content: action.content
                }
                return storedNotes;
            }
            return state;
        }
        case NoteActionType.DELETE: {
            return state.filter(note => note.id !== action.id);
        }
        case NoteActionType.ARCHIVE: {
            const noteIndex = state.findIndex(note => note.id === action.id);
            if (noteIndex > -1) {
                const archiveNote = {
                    ...state[noteIndex],
                    isArchived: true
                }
                return [
                    ...state.slice(0, noteIndex),
                    archiveNote,
                    ...state.slice(noteIndex + 1)
                ]
            }
            return state;
        }
        case NoteActionType.UNARCHIVE: {
            const noteIndex = state.findIndex(note => note.id === action.id);
            if (noteIndex > -1) {
                const unarchiveNote = {
                    ...state[noteIndex],
                    isArchived: false
                }
                return [ 
                    ...state.slice(0, noteIndex),
                    unarchiveNote,
                    ...state.slice(noteIndex + 1)
                ]
            }
            return state;
        }
        default:
            return state;
    }
}
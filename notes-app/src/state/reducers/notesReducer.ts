import { Note } from "../interfaces/notes";
import { NotesData } from "../../data/notes";
import { NoteAction } from "../actions/notes";
import { NoteActionType } from "../action-types/notes";
import { v4 as uuidv4 } from "uuid";

export interface NotesState {
    notes: Note[];
}
  
const initialState: NotesState = {
    notes: NotesData
};

const notesReducer = (state: NotesState = initialState, action: NoteAction) => {
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
            return { ...state, notes: [...state.notes, newNote] };
        }
        case NoteActionType.EDIT: {
            const editNoteIndex = state.notes.findIndex(note => note.id === action.id);
            if (editNoteIndex !== 1) {
                const storedNotes = state.notes;
                storedNotes[editNoteIndex] = {
                    ...state.notes[editNoteIndex],
                    name: action.name,
                    category: action.category,
                    content: action.content
                }
                return { ...state, notes: storedNotes }
            }
            return state;
        }
        case NoteActionType.DELETE: {
            return { ...state, notes: state.notes.filter(note => note.id !== action.id) }
        }
        case NoteActionType.ARCHIVE: {
            const noteIndex = state.notes.findIndex(note => note.id === action.id);
            if (noteIndex !== -1) {
                const archiveNote = {
                    ...state.notes[noteIndex],
                    isArchived: true
                }
                return {
                    ...state,
                    notes: [ 
                        ...state.notes.slice(0, noteIndex),
                        archiveNote,
                        ...state.notes.slice(noteIndex + 1)
                    ]
                }
            }
            return state;
        }
        case NoteActionType.UNARCHIVE: {
            const noteIndex = state.notes.findIndex(note => note.id === action.id);
            if (noteIndex !== -1) {
                const unarchiveNote = {
                    ...state.notes[noteIndex],
                    isArchived: false
                }
                return {
                    ...state,
                    notes: [ 
                        ...state.notes.slice(0, noteIndex),
                        unarchiveNote,
                        ...state.notes.slice(noteIndex + 1)
                    ]
                }
            }
            return state;
        }
        default:
            return state;
    }
}

export default notesReducer;
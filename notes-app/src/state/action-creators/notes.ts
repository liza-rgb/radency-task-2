import { Dispatch } from "redux";
import { NoteActionType } from "../action-types/notes";
import { NoteAction } from "../actions/notes";

export const addNote = (name: string, category: string, content: string) => {
    return (dispatch: Dispatch<NoteAction>) => {
        dispatch({
            type: NoteActionType.ADD,
            name, 
            category, 
            content
        })
    }
}

export const editNote = (id: string, name: string, category: string, content: string) => {
    return (dispatch: Dispatch<NoteAction>) => {
        dispatch({
            type: NoteActionType.EDIT,
            id,
            name, 
            category, 
            content
        })
    }
}

export const deleteNote = (id: string) => {
    return (dispatch: Dispatch<NoteAction>) => {
        dispatch({
            type: NoteActionType.DELETE,
            id
        })
    }
}

export const archiveNote = (id: string) => {
    return (dispatch: Dispatch<NoteAction>) => {
        dispatch({
            type: NoteActionType.ARCHIVE,
            id
        })
    }
}

export const unarchiveNote = (id: string) => {
    return (dispatch: Dispatch<NoteAction>) => {
        dispatch({
            type: NoteActionType.UNARCHIVE,
            id
        })
    }
}




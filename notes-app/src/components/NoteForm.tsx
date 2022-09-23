import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../state/reducers";
import { categories, formatCategory } from "../lib/categories";
import { Note } from "../state/interfaces/notes";
import { notesActionCreators } from "../state";
import { popupActionCreators } from "../state";
import { PopupState } from "../state/reducers/popupReducer";
import { PopupType } from "../state/reducers/popupReducer";
import { validateForm } from "../lib/validateForm";
import "../styles/NoteForm.css";

export default function NoteForm() {
    const dispatch = useDispatch();

    const storedNotes = useSelector<RootState, Note[]>((state) => state.notes);
    const { addNote, editNote } = bindActionCreators(notesActionCreators, dispatch);

    const popupInfo = useSelector<RootState, PopupState>((state) => state.popup);
    const { disablePopup } = bindActionCreators(popupActionCreators, dispatch);

    const editNoteIndex = storedNotes.findIndex(note => note.id === popupInfo.note_id);
    const [ name, setName ] = useState(editNoteIndex > -1 ? storedNotes[editNoteIndex].name : "");
    const [ content, setContent ] = useState(editNoteIndex > -1 ? storedNotes[editNoteIndex].content : "");
    const [ category, setCategory ] = useState(editNoteIndex > -1 ? storedNotes[editNoteIndex].category : "");

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const isValidForm = validateForm(name, category, content);
        if (isValidForm) {
            if (popupInfo.type === PopupType.ADD) {
                addNote(name, category, content);
            }
            if (popupInfo.type === PopupType.EDIT) {
                editNote(popupInfo.note_id, name, category, content);
            }
            disablePopup();
        } else {
            alert("Please, provide information for all fields!");
        }
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
    }

    function showRadioButtonsCategory() {
        return (
            <div>
                {categories.map((cat) => {
                    return (
                        <span key={"category-" + cat.name} >
                            <input type="radio" 
                                id={"edit-note-category-" + formatCategory(cat.name)}
                                name="category" 
                                value={cat.name} 
                                checked={cat.name === category} 
                                onChange={() => setCategory(cat.name)}/>            
                            <label htmlFor={"edit-note-category-" + formatCategory(cat.name)}>{cat.name}</label>
                        </span>
                    );
                })}
            </div>
        )
    }
    
    return (
        <div className="NoteForm">
            <div className="popup">
                <div className="card">
                    <div className="card-header">{popupInfo.type === PopupType.ADD ? "Add New Note" : "Edit Note"} 
                        <button id="close-add-note-form" onClick={disablePopup}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="add-note-name-input">Name:</label>
                                <input type="text" 
                                    name="name" 
                                    id="add-note-name-input" 
                                    onChange={updateName} 
                                    value={name}/>
                            </div>
                            <div>
                                <label htmlFor="add-note-content-input">Content:</label>
                                <textarea 
                                    name="content" 
                                    id="add-note-content-input" 
                                    onChange={updateContent} 
                                    value={content}>
                                </textarea>
                            </div>
                            <p>Please select a note category:</p>
                            {showRadioButtonsCategory()}
                            <button type="submit">
                                {popupInfo.type === PopupType.ADD ? "Create" : "Update"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
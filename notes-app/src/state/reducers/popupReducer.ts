import { PopupAction } from "../actions/popup";
import { PopupActionType } from "../action-types/popup";

export enum PopupType {
    ADD = "add_popup",
    EDIT = "edit_popup",
    NONE = "no_popup"
}

export interface PopupState {
    type: PopupType,
    note_id: string 
}

const initialState: PopupState = {
    type: PopupType.NONE,
    note_id: ""
};

export const popupReducer = (state: PopupState = initialState, action: PopupAction) => {
    switch (action.type) {
        case PopupActionType.ENABLE_ADD: {
            return {
                type: PopupType.ADD,
                note_id: ""
            };
        }
        case PopupActionType.ENABLE_EDIT: {
            return {
                type: PopupType.EDIT,
                note_id: action.note_id
            };
        }
        case PopupActionType.DISABLE: {
            return {
                type: PopupType.NONE,
                note_id: ""
            };
        }
        default:
            return state;
    }
}
import { Dispatch } from "redux";
import { PopupActionType } from "../action-types/popup";
import { PopupAction } from "../actions/popup";


export const enableAddPopup = () => {
    return (dispatch: Dispatch<PopupAction>) => {
        dispatch({
            type: PopupActionType.ENABLE_ADD,
        })
    }
}

export const enableEditPopup = (note_id: string) => {
    return (dispatch: Dispatch<PopupAction>) => {
        dispatch({
            type: PopupActionType.ENABLE_EDIT,
            note_id
        })
    }
}

export const disablePopup = () => {
    return (dispatch: Dispatch<PopupAction>) => {
        dispatch({
            type: PopupActionType.DISABLE
        })
    }
}
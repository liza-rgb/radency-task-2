import { PopupActionType } from "../action-types/popup";

interface EnableAddPopupAction {
    type: PopupActionType.ENABLE_ADD
}

interface EnableEditPopupAction {
    type: PopupActionType.ENABLE_EDIT,
    note_id: string
}

interface DisablePopupAction {
    type: PopupActionType.DISABLE;
}

export type PopupAction = EnableAddPopupAction | EnableEditPopupAction | DisablePopupAction;
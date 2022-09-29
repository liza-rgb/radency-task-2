import AddNoteButton from "../components/AddNoteButton";
import { Provider } from "react-redux";
import { store } from "../state";

export default {
    title: "AddNoteButton",
    component: AddNoteButton
}

export const Default = () => (
    <Provider store={store}>
        <AddNoteButton />
    </Provider>
);
import NoteForm from "../components/NoteForm";
import { within, userEvent} from "@storybook/testing-library";
import { Provider } from "react-redux";
import { store } from "../state";
import App from "../App";

export default {
    title: "NoteForm",
    component: NoteForm
}

const Template = (args) => (
    <Provider store={store}>
        <App />
    </Provider>
)

export const EditNote = Template.bind({});
EditNote.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const editFirstNote = await canvas.getAllByText('Edit')[0];
    await userEvent.click(editFirstNote);
}

export const AddNewNote = Template.bind({});
AddNewNote.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const addNewNoteButton = await canvas.getByText('Add Note');
    await userEvent.click(addNewNoteButton);
}
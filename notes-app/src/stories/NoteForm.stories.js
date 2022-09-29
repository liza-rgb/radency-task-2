import NoteForm from "../components/NoteForm";
import { Provider } from "react-redux";
import { store } from "../state";

export default {
    title: "NoteForm",
    component: NoteForm
}

const Template = (args) => (
    <Provider store={store}>
        <NoteForm {...args} />
    </Provider>
)

export const AddNewNote = Template.bind({});
export const EditNote = Template.bind({});
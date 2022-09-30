import NoteRow from "../components/NoteRow";
import { Provider } from "react-redux";
import { store } from "../state";
import { NotesData } from "../data/notes";

export default {
    title: "NoteRow",
    component: NoteRow
}

const Template = (args) => (
    <Provider store={store}>
        <NoteRow {...args} />
    </Provider>
)

export const ActiveNote = Template.bind({});
ActiveNote.args = {
    note: NotesData[2],
    isArchiveMode: false
}

export const ArchiveNote = Template.bind({});
ArchiveNote.args = {
    note: NotesData[6],
    isArchiveMode: true
}
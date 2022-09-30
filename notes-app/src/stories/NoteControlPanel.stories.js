import NoteControlPanel from "../components/NoteControlPanel";
import { Provider } from "react-redux";
import { store } from "../state";

export default {
    title: "NoteControlPanel",
    component: NoteControlPanel
}

const Template = (args) => (
    <Provider store={store}>
        <NoteControlPanel {...args} />
    </Provider>
)

export const ActiveNote = Template.bind({});
ActiveNote.args = {
    note_id: "1",
    isArchiveMode: false
}

export const ArchiveNote = Template.bind({});
ArchiveNote.args = {
    note_id: "1",
    isArchiveMode: true
}
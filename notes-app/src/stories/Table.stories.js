import Table from "../components/Table";
import { Provider } from "react-redux";
import { store } from "../state";
import { within, userEvent } from "@storybook/testing-library";

export default {
    title: "Table",
    component: Table
}

const Template = (args) => (
    <Provider store={store}>
        <Table {...args} />
    </Provider>
)

export const ActiveNotes = Template.bind({});
ActiveNotes.args = {
    mode: "notes"
}

export const ArchiveNotes = Template.bind({});
ArchiveNotes.args = {
    mode: "notes"
}

ArchiveNotes.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const viewArchivedNotesButton = await canvas.getByText('View Archive');
    await userEvent.click(viewArchivedNotesButton);
}

export const Summary = Template.bind({});
Summary.args = {
    mode: "summary"
}
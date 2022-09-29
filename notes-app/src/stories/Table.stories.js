import Table from "../components/Table";
import { Provider } from "react-redux";
import { store } from "../state";

export default {
    title: "Table",
    component: Table
}

const Template = (args) => (
    <Provider store={store}>
        <Table {...args} />
    </Provider>
)

export const Notes = Template.bind({});
Notes.args = {
    mode: "notes"
}

export const Summary = Template.bind({});
Summary.args = {
    mode: "summary"
}
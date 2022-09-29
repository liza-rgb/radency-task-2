import CategoryRow from "../components/CategoryRow";
import { Provider } from "react-redux";
import { store } from "../state";
import { categories } from "../lib/categories";

export default {
    title: "CategoryRow",
    component: CategoryRow
}

const Template = (args) => (
    <Provider store={store}>
        <CategoryRow {...args} />
    </Provider>
)

export const Default = Template.bind({});
Default.args = {
    category: categories[0],
    key: 1
}
import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import SearchInput, {SearchInputType} from "../components/SearchInput";

export default {
    component: SearchInput,
    title: "SearchInput",
    argTypes: {}
} as Meta;

const Template: Story<SearchInputType> = () => {
    const [value, setValue] = useState("search input");
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <SearchInput value={value} onChange={changeHandler} />
    );
};

export const Normal = Template.bind({});
Normal.args = {};

import React from "react";
import {Meta, Story} from "@storybook/react";
import {CardProps} from "../components/Card";
import Loading from "../components/Loading";

export default {
    component: Loading,
    title: "Loading",
    argTypes: {}
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => {
    return (
        <Loading {...args} />
    );
};

export const Normal = Template.bind({});
Normal.args = {};

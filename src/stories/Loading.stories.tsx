import React from "react";
import { Meta, Story } from "@storybook/react";
import Loading from "../components/Loading";

export default {
  component: Loading,
  title: "Loading",
  argTypes: {},
} as Meta;

const Template: Story<any> = (args: any) => {
  return <Loading {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {};

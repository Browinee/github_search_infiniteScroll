import React from "react";
import { Story, Meta } from "@storybook/react";
import Card, { CardProps } from "../components/Card";

export default {
  component: Card,
  title: "Card",
  argTypes: {
    width: {
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    eventKey: {
      control: {
        type: "number",
      },
    },
    selectedKey: {
      control: {
        type: "number",
      },
    },
    onTabSelectionChanged: { action: "onTabSelectionChanged" },
  },
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => {
  return <Card {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  full_name: "Card",
  description: "This is Card component",
  stargazers_count: 10,
  license: "MIT",
  updated_at: "Updated at 8 Oct",
  language: "Typescript",
};

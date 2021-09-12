import React from "react";
import { Meta, Story } from "@storybook/react";
import { CardProps } from "../components/Card";
import Loading from "../components/Loading";
import Modal, { ModalProps } from "../components/Modal";

export default {
  component: Modal,
  title: "Modal",
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  isShow: true,
  toggleModal: () => {},
};

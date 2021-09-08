import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { Meta, Story } from "@storybook/react";
import ScrollTop, { ScrollTopProps } from "../components/ScrollTop";

export default {
  component: ScrollTop,
  title: "ScrollTop",
  argTypes: {},
} as Meta;

const Container = styled.div`
  border: 1px solid lightskyblue;
  width: 100%;
  height: 1000px;
  overflow: auto;
  position: relative;
`;

const Template: Story<ScrollTopProps> = (args: ScrollTopProps) => {
  const domRef = useRef();
  useEffect(() => {
    if (domRef) {
      domRef.current.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <Container ref={domRef}>
      <ScrollTop {...args} />
    </Container>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  isShow: true,
  scrollTo: () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};

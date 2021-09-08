import styled from "styled-components";

const Button = styled.button<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? "block" : "none")};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: lightgray;
  cursor: pointer;
`;

export type ScrollTopProps = {
  scrollTo: Function;
  isShow?: boolean;
};
const ScrollTop = (props: ScrollTopProps) => {
  const { scrollTo, isShow } = props;
  const topHandler = () => {
    scrollTo();
  };
  return (
    <Button onClick={topHandler} isShow={isShow === undefined ? true : isShow}>
      Top
    </Button>
  );
};

export default ScrollTop;

import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: lightgray;
  cursor: pointer;
`;

type ScrollTopProps = {
    scrollTo: Function;
}
const ScrollTop = (props: ScrollTopProps) => {
    const topHandler = () => {
        props.scrollTo();
    };
    return <Button onClick={topHandler}>
        Top
    </Button>

};


export default ScrollTop;
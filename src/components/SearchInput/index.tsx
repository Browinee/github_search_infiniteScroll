import styled from "styled-components";
import {noop} from "../../utils";


type SearchInputType = {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input = styled.input`
  padding: 10px 20px;
  border: solid 2px #686868;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
  width: 70%;
  &:focus {
    border-color: #005ad8;
    transition: 0.5s;
  }
`
const SearchInput = (props: SearchInputType) => {
    const {type = "text", placeholder = "Please enter the repository", value = "", onChange = noop} = props;

    return <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}


export default SearchInput;
import styled from "styled-components";
import {noop} from "../../utils";


export type SearchInputType = {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  width: 70%;
  height: 3.5rem;
  padding: 0 8px;
  background: rgb(0, 88, 138);
  color: white;
  &:focus {
    outline: none;
  }
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

`
const SearchInput = (props: SearchInputType) => {
    const {type = "search", placeholder = "Please enter the repository", value = "", onChange = noop} = props;

    return <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}


export default SearchInput;
import styled from 'styled-components';

export const SearchInputText = styled.input`
  padding: 5px 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: white;
  border: 1px solid rgba(31, 64, 111, 0.2);
  border-radius: 4px;

  &:focus {
    border-color: #004db9;
  }
`;

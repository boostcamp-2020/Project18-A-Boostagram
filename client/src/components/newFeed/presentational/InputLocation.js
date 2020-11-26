import React from 'react';
import styled from 'styled-components';

const style = {};
style.InputLocationContainer = styled.div`
  background-color: pink;
`;
style.InputLocationComponent = styled.input`
  font-size: 10px;
  outline: none;
`;

const InputLocation = () => (
  <style.InputLocationContainer>
    <style.InputLocationComponent value="장소 입력창 - 구현예정" />
  </style.InputLocationContainer>
);

export default InputLocation;

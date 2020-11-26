import React from 'react';
import styled from 'styled-components';

const style = {};

style.Header = styled.div`
  display: inline-flex;
  justify-content: space-between;
  height: 54px;
  border: 1px solid ${(props) => props.theme.color.border};
  position: absolute;
  top: 0;
  width: 100%;
`;

const Header = () => (
  <style.Header>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </style.Header>
);

export default Header;

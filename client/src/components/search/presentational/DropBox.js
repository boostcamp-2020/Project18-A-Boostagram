import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.DropBox = styled.div`
  position: absolute;
  width: 241px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3px;
  top: 30px;
  left: -36px;
`;
style.UserList = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
`;
style.UserItem = styled.li`
  display: block;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  &:last-child {
    border-bottom: none;
  }
`;
const DropBox = ({ suggestUsers }) => {
  return (
    <style.DropBox>
      <style.UserList>
        {suggestUsers.map((user) => {
          const { userName } = user;
          const key = userName;
          return <style.UserItem key={key}>{userName}</style.UserItem>;
        })}
      </style.UserList>
    </style.DropBox>
  );
};

DropBox.propTypes = {
  suggestUsers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default DropBox;

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
  position: relative;
`;
style.UserItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
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

import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const style = {};
style.DropBox = styled.div`
  display: ${({ active }) => (active !== 0 ? 'block' : 'none')};
  position: absolute;
  width: 241px;
  max-height: 225px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3px;
  top: 30px;
  left: -36px;
  overflow: auto;
`;
style.UserList = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
`;
style.UserItem = styled.li`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
style.ProfileImg = styled.img`
  position: relative;
  top: 1px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
`;
style.Texts = styled.span`
  position: relative;
  top: 0;
  margin-left: 14px;
`;
style.UserName = styled.section`
  font-weight: 650;
`;
style.Name = styled.section`
  font-weight: 450;
  opacity: 50%;
`;
const DropBox = ({ suggestUsers }) => {
  const history = useHistory();

  return (
    <style.DropBox active={suggestUsers.length}>
      <style.UserList>
        {suggestUsers.map((user) => {
          const { profileImg, userName, name } = user;
          const redirectPath = `/profile?username=${userName}`;
          return (
            <style.UserItem
              key={user._id}
              onMouseDown={() => history.replace(redirectPath)}
            >
              <style.ProfileImg src={profileImg} />
              <style.Texts>
                <style.UserName>{userName}</style.UserName>
                <style.Name>{name}</style.Name>
              </style.Texts>
            </style.UserItem>
          );
        })}
      </style.UserList>
    </style.DropBox>
  );
};

export default DropBox;

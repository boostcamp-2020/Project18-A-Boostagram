import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import { useHistory } from 'react-router-dom';

const style = {};
style.Backgrond = styled.div`
  display: ${(props) => (!props.isClicked ? 'none' : 'block')};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

style.DropBox = styled.div`
  position: absolute;
  opacity: 1 !important;
  z-index: 1;
  display: ${(props) => (!props.isClicked ? 'none' : 'block')};
  width: 400px;
  max-height: 300px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3px;
  left: -330px;
  top: 30px;
  overflow-y: auto;
`;

style.content = styled.div`
  font-weight: 400;
  font-size: 14px;
  opacity: 80%;
  margin: 0;
`;

style.UserItem = styled.li`
  display: flex;
  padding: 15px;
  margin: 0;
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
  margin-right: 22px !important;
`;

style.Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

style.UserName = styled.section`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  overflow: hidden;
`;

const getMessage = (type) => {
  return type === 'like'
    ? `님이 회원님의 게시물을 좋아합니다.`
    : `님이 회원님의 게시물에 댓글을 작성했습니다.`;
};

const getHistory = () => {
  return [
    {
      userName: 'rlaqudrnr810',
      profileImg: 'https://avatars2.githubusercontent.com/u/39620410?v',
      type: 'like',
      from: 'cha',
      feedId: '5fd5b4e7e445726398f8782e',
    },
  ];
};

const DropBox = (input) => {
  const { isClicked, setIsClicked } = input;
  const { login } = useContext(UserContext);
  const items = getHistory(login.userName);
  const history = useHistory();

  return (
    <>
      <style.Backgrond
        onMouseDown={() => setIsClicked(!isClicked)}
        isClicked={isClicked}
      />
      <style.DropBox isClicked={isClicked}>
        {items.map((item, index) => {
          const { userName, profileImg, type, from, feedId } = item;
          const key = type + feedId + index;
          const redirectPath = `/profile?username=${userName}`;
          return (
            <style.UserItem
              key={key}
              onMouseDown={() => {
                history.replace(redirectPath);
                setIsClicked(!isClicked);
              }}
            >
              <style.ProfileImg src={profileImg} />
              <style.Texts>
                <style.UserName>{from}</style.UserName>
                <style.content>{getMessage(type)}</style.content>
              </style.Texts>
            </style.UserItem>
          );
        })}
      </style.DropBox>
    </>
  );
};

export default DropBox;

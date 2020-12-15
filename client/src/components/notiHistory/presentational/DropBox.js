import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import { useHistory } from 'react-router-dom';
import pathURI from '@constants/path';

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

const DropBox = (input) => {
  const { isClicked, setIsClicked } = input;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [notiContent, setNotiContent] = useState(0);
  const { login } = useContext(UserContext);
  const history = useHistory();
  const getHistory = async () => {
    const json = await fetch(pathURI.IP + pathURI.API_NOTI_HISTORY, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.jwt}`,
      },
    }).then((res) => res.json());
    json.notiContents.reverse();
    setData(json);
    setNotiContent(json.notiContents.length);
  };
  useEffect(() => {
    if (notiContent) setLoading(true);
  }, [notiContent]);
  useEffect(() => {
    if (!isClicked) {
      getHistory();
    } else {
      setLoading(true);
    }
  }, [isClicked]);
  console.log(data, isClicked);
  if (loading) {
    return (
      <>
        <style.Backgrond
          onMouseDown={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        />
        <style.DropBox isClicked={isClicked}>
          {data.notiContents.map((item, index) => {
            const {
              userName,
              profileImg,
              notiType,
              content,
              isChecked,
              createdAt,
            } = item;
            console.log(item);
            const key = notiType + content + index;
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
                  <style.UserName>{userName}</style.UserName>
                  <style.content>{getMessage(notiType)}</style.content>
                </style.Texts>
              </style.UserItem>
            );
          })}
        </style.DropBox>
      </>
    );
  }
  return <>loading...</>;
};

export default DropBox;

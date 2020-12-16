import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import pathURI from '@constants/path';
import ModalContext from '@context/modal';
import GetOneFeedAPI from '@api/GetOneFeedAPI';
import icon from '@constants/icon';
import excuteTime from '@utils/excuteTime';

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
  width: 410px;
  max-height: 300px;
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
  background: ${({ isChecked }) => (isChecked ? '#fff' : 'black')};
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

style.GuideMessage = styled.div`
  display: flex;
  border-radius: 3px;
  background: #ffffff;
  padding: 10px;
  align-content: center;
  justify-content: center;
`;

const getMessage = (type, createdAt) => {
  const time = excuteTime(createdAt);

  return type === 'like'
    ? `님이 회원님의 게시물을 좋아합니다. ${time}`
    : `님이 회원님의 게시물에 댓글을 작성했습니다. ${time}`;
};

const emptyNoti = () => {
  return (
    <style.GuideMessage>
      <icon.Noti />
      &nbsp; 아직 알림이 없어요! 먼저 좋아요를 눌러보세요!
    </style.GuideMessage>
  );
};

const DropBox = (input) => {
  const { isClicked, setIsClicked } = input;

  const { login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [notiContents, setNotiContents] = useState();

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
    setNotiContents(json.notiContents);
  };

  const returnList = () => {
    const { handleDetailModal, selectFeed } = useContext(ModalContext);

    const clickHandler = async (feedId) => {
      const feedData = await GetOneFeedAPI(feedId);
      selectFeed(feedData);
      handleDetailModal();
    };

    return notiContents.map((item, index) => {
      const {
        userName,
        profileImg,
        notiType,
        content,
        created,
        isChecked,
      } = item;
      const key = notiType + content + index;
      return (
        <style.UserItem
          key={key}
          isChecked={isChecked}
          onMouseDown={() => {
            setIsClicked(!isClicked);
            clickHandler(content);
          }}
        >
          <style.ProfileImg src={profileImg} />
          <style.Texts>
            <style.UserName>{userName}</style.UserName>
            <style.content>{getMessage(notiType, created)}</style.content>
          </style.Texts>
        </style.UserItem>
      );
    });
  };

  useEffect(() => {
    if (notiContents) setLoading(true);
  }, [notiContents]);

  useEffect(() => {
    if (isClicked) {
      getHistory();
    }
  }, [isClicked]);

  if (loading) {
    return (
      <>
        <style.Backgrond
          onMouseDown={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        />
        <style.DropBox isClicked={isClicked}>
          {notiContents.length > 0 ? returnList() : emptyNoti()}
        </style.DropBox>
      </>
    );
  }
  return <></>;
};

export default DropBox;

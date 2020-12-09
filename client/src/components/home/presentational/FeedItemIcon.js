import React, { useState } from 'react';
import styled from 'styled-components';
import pathURI from '@constants/path';
import icon from '@constants/icon';
import UserName from '@home/presentational/UserName';

const style = {};
style.Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 16px;
`;
style.Like = styled.div`
  position: absolute;
  visibility: ${(props) => (props.like ? 'visible' : 'hidden')};
  cursor: pointer;
  margin-right: 16px;
  margin-top: 5px;
`;

style.UnLike = styled.div`
  visibility: ${(props) => (props.like ? 'hidden' : 'visible')};
  cursor: pointer;
  margin-right: 16px;
  margin-top: 5px;
`;
const getLikeStatus = (like, userName) => {
  const result = like.find((element) => element.userName === userName);
  return result !== undefined;
};
const FeedItemIcon = (input) => {
  const { data, login } = input;
  const [likeNum, setLikeNum] = useState(data.like.length);
  const [like, setLike] = useState(getLikeStatus(data.like, login.userName));
  const likeMessage = `좋아요 ${likeNum}개`;

  const LikeClickHandler = () => {
    const likeInfo = {
      author: {
        name: login.name,
        userName: login.userName,
        profileImg: login.profileImg,
      },
      feedId: data._id,
      status: like ? 0 : 1,
    };
    fetch(pathURI.IP + pathURI.API_LIKE, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.jwt}`,
      },
      body: JSON.stringify(likeInfo),
    }).then(() => {
      setLikeNum(like ? likeNum - 1 : likeNum + 1);
      setLike(!like);
    });
  };
  return (
    <>
      <style.Icons>
        <style.Like onClick={LikeClickHandler} like={like}>
          <icon.Like />
        </style.Like>
        <style.UnLike onClick={LikeClickHandler} like={like}>
          <icon.Noti />
        </style.UnLike>
        <icon.Comment />
      </style.Icons>
      <UserName>{likeMessage}</UserName>
    </>
  );
};

export default FeedItemIcon;
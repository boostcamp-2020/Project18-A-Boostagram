import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import UserName from '@home/presentational/UserName';
import Comment from '@home/presentational/Comment';

const style = {};

style.FeedItem = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #ffffff;
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

style.UserInfo = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;

style.UserProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin: auto 0;
  margin-left: 16px;
  border-radius: 70%;
  cursor: pointer;
`;

style.feedImg = styled.img`
  width: 100%;
  position: relative;
`;

style.feedImgContainer = styled.div`
  width: 100%;
`;

style.Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 16px;
`;

style.LikeNumber = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 400;
  margin-left: 16px;
`;

style.Contents = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-top: 5px;
`;

style.Comments = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

style.Time = styled.div`
  margin-left: 16px;
  margin-bottom: 5px;
  font-size: 10px;
  color: #8e8e8e;
`;

style.InputComment = styled.div`
  display: flex;
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
style.Content = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: #262626;
  text-overflow: ellipsis;
`;

style.MoreComent = styled.div`
  display: ${(props) => (props.commentLength > 2 ? 'block' : 'none')};
  cursor: pointer;
  color: #8e8e8e;
  font-size: 14px;
  margin-left: 16px;
  margin-top: 5px;
`;

style.TextArea = styled.textarea`
  flex: 1;
  margin: auto 0;
  margin-left: 16px;
  margin-right: 10px;
  border: 0;
  outline: none;
  resize: none;
`;

style.CommentSubmit = styled.div`
  cursor: pointer;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  margin: auto 0;
  margin-left: auto;
  margin-right: 15px;
`;

const getCommentLength = (comments) => {
  return comments.length;
};

const excuteTime = (now) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;

  const time = new Date() - new Date(now);

  if (time < min) {
    return `${Math.round(time / sec)}초 전`;
  }

  if (time < hour) {
    return `${Math.round(time / min)}분 전`;
  }

  if (time < day) {
    return `${Math.round(time / hour)}시간 전`;
  }

  if (time < week) {
    return `${Math.round(time / day)}일 전`;
  }
  return `${Math.round(time / week)}주 전`;
};

const FeedItem = (input) => {
  const { data } = input;
  const [imgIndex, setImgIndex] = useState(0);
  const [likeNum, setLikeNum] = useState(data.like.length);
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState(data.comments);
  const moreCommentMessage = `댓글 ${getCommentLength(comments)}개 모두 보기`;
  const likeMessage = `좋아요 ${likeNum}개`;
  const textMessage = '댓글 달기...';
  const LikeClickHandler = () => {
    if (like) {
      setLikeNum(likeNum - 1);
    } else {
      setLikeNum(likeNum + 1);
    }
    setLike(!like);
    // todo: 좋아요 update 현황 fetch
  };

  return (
    <style.FeedItem>
      <style.UserInfo>
        <style.UserProfileImg src={data.author.profileImg} />
        <UserName>{data.author.userName}</UserName>
      </style.UserInfo>
      <style.feedImgContainer>
        <style.feedImg src={data.feedImg[imgIndex]} />
      </style.feedImgContainer>
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
      <Comment author={data.author} content={data.content} />
      <style.MoreComent commentLength={getCommentLength(comments)}>
        {moreCommentMessage}
      </style.MoreComent>
      <style.Comments>
        {comments.map((comment, index) => {
          if (index >= 2) {
            return <></>;
          }
          return (
            <Comment
              author={comment.author}
              content={comment.content}
              key={comment.commentId}
            />
          );
        })}
      </style.Comments>
      <style.Time>{excuteTime(data.createdAt)}</style.Time>
      <style.InputComment>
        <style.TextArea placeholder={textMessage} />
        <style.CommentSubmit>게시</style.CommentSubmit>
      </style.InputComment>
    </style.FeedItem>
  );
};

export default FeedItem;

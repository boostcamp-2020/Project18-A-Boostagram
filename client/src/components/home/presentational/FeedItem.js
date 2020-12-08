import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import UserName from '@home/presentational/UserName';
import Comment from '@home/presentational/Comment';
import UserContext from '@context/user';
import pathURI from '@constants/path';
import IntersectionHook from '@hooks/Intersection';
import excuteTime from '@utils/excuteTIme';

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
  position: relative;
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

style.CommentSubmit = styled.button`
  opacity: 1;
  background: none;
  border: none;
  cursor: pointer;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  margin: auto 0;
  margin-left: auto;
  margin-right: 15px;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

style.Buttons = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
`;
style.PreButton = styled.button`
  z-index: 1;
  display: ${(props) => (props.index === 0 ? 'none' : 'block')};
  opacity: 0.7;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 70%;
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  outline: none;
`;
style.NextButton = styled.button`
  display: ${(props) => (props.length - 1 === props.index ? 'none' : 'block')};
  opacity: 0.7;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 70%;
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: auto;
  z-index: 1;
  outline: none;
`;

const getCommentLength = (comments) => {
  return comments.length;
};

const getLikeStatus = (like, userName) => {
  const result = like.find((element) => element.userName === userName);
  return result !== undefined;
};
const FeedItem = (input) => {
  const { data, isLastItem, setGetMore } = input;
  const [target, setTarget] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [likeNum, setLikeNum] = useState(data.like.length);
  const [comments, setComments] = useState(data.comments);
  const [feedComment, setComment] = useState('');
  const moreCommentMessage = `댓글 ${getCommentLength(comments)}개 모두 보기`;
  const likeMessage = `좋아요 ${likeNum}개`;
  const textMessage = '댓글 달기...';
  const { login } = useContext(UserContext);
  const [like, setLike] = useState(getLikeStatus(data.like, login.userName));
  const PreClickHandler = () => setImgIndex(imgIndex - 1);
  const NextClickHandler = () => setImgIndex(imgIndex + 1);
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
  const setFeedComment = (e) => {
    setComment(e.target.value);
  };
  const CommentSubmitHandler = (e) => {
    e.preventDefault();
    const newComment = {
      author: {
        name: login.name,
        userName: login.userName,
        profileImg: login.profileImg,
      },
      content: feedComment,
      feedId: data._id,
    };
    fetch(pathURI.IP + pathURI.API_COMMENT, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.jwt}`,
      },
      body: JSON.stringify(newComment),
    }).then(() => {
      comments.push(newComment);
      setComments(comments);
      setComment('');
    });
  };

  IntersectionHook(isLastItem, target, data._id, setGetMore);

  const jsx = (
    <>
      {' '}
      <style.UserInfo>
        <style.UserProfileImg src={data.author.profileImg} />
        <UserName>{data.author.userName}</UserName>
      </style.UserInfo>
      <style.feedImgContainer>
        <style.Buttons>
          <style.PreButton
            length={data.feedImg.length}
            index={imgIndex}
            onClick={PreClickHandler}
          >
            {'<'}
          </style.PreButton>
          <style.NextButton
            length={data.feedImg.length}
            index={imgIndex}
            onClick={NextClickHandler}
          >
            {'>'}
          </style.NextButton>
        </style.Buttons>
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
          const key = comment._id + Math.random().toString(36);
          if (index < comments.length - 2) {
            return <div key={key} />;
          }
          return (
            <Comment
              author={comment.author}
              content={comment.content}
              key={key}
            />
          );
        })}
      </style.Comments>
      <style.Time>{excuteTime(data.createdAt)}</style.Time>
      <style.InputComment>
        <style.TextArea
          placeholder={textMessage}
          onChange={setFeedComment}
          value={feedComment}
        />
        <style.CommentSubmit
          type="submit"
          onClick={CommentSubmitHandler}
          disabled={feedComment === ''}
        >
          게시
        </style.CommentSubmit>
      </style.InputComment>
    </>
  );

  return (
    <>
      {isLastItem ? (
        <style.FeedItem ref={setTarget}>{jsx}</style.FeedItem>
      ) : (
        <style.FeedItem>{jsx}</style.FeedItem>
      )}
    </>
  );
};

export default FeedItem;

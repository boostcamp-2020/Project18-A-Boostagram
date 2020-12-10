import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '@context/user';
import ModalContext from '@context/modal';
import ImgNav from '@newFeed/presentational/ImgNav';
import AuthorProfile from '@feedDetail/presentational/AuthorProfile';
import LikeMenu from '@feedDetail/presentational/LikeMenu';
import CommentInput from '@feedDetail/presentational/CommentInput';
import CommentItem from '@feedDetail/presentational/CommentItem';
import pathURI from '@constants/path';

const style = {};

style.FeedDetailContainer = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  background-color: ${(props) => props.theme.color.background};
  width: 900px;
  height: 600px;
  z-index: 3;
  background-color: white;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 35px;
`;

style.FeedImageContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: black;
`;

style.FeedImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
`;

style.ArrowContainer = styled.div`
  width: 600px;
  position: absolute;
  top: 42%;
  & > button {
    outline: none;
    border: none;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color.background};
    margin: 20px;
    border-radius: 20px;
    opacity: 70%;
  }
`;

style.RightArrow = styled.button`
  position: absolute;
  right: 0;
`;

style.FeedInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

style.Content = styled.div`
  flex: 1;
  overflow: auto;
`;

style.FeedContentContainer = styled.div`
  display: flex;
  font-size: 14px;
  padding: 20px;
`;

style.ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  margin-right: 14px;
`;

style.FeedContent = styled.div`
  flex: 1;
`;

style.LikeCount = styled.div`
  padding: 0 16px 10px 16px;
  font-size: 14px;
  font-weight: bold;
`;

style.CreatedAt = styled.div`
  padding: 0 16px 10px 16px;
  font-size: 10px;
  opacity: 0.5;
`;

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

const FeedDetailContainer = () => {
  const { login } = useContext(UserContext);
  const { selectedFeed, detailActive } = useContext(ModalContext);
  const {
    _id,
    author,
    feedImg,
    content,
    like,
    comments,
    createdAt,
  } = selectedFeed;

  const [loading, setLoading] = useState(false);
  const [selectedIndex, setImageIndex] = useState(0);

  const nextImage = () => setImageIndex(selectedIndex + 1);
  const beforeImage = () => setImageIndex(selectedIndex - 1);

  const [commentInput, setCommentInput] = useState('');

  const CommentSubmitHandler = (e) => {
    e.preventDefault();
    const newComment = {
      author: {
        name: login.name,
        userName: login.userName,
        profileImg: login.profileImg,
      },
      content: commentInput,
      feedId: _id,
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
      // setComments(comments);
      setCommentInput('');
    });
  };

  useEffect(() => {
    setImageIndex(0);
    if (Object.keys(selectedFeed).length > 0) setLoading(true);
  }, [selectedFeed]);

  if (loading) {
    return (
      <style.FeedDetailContainer active={detailActive}>
        <style.FeedImageContainer>
          <style.FeedImage src={feedImg[selectedIndex]} />
          <ImgNav imgIndex={selectedIndex} imgs={feedImg} />
          <style.ArrowContainer>
            {selectedIndex !== 0 && (
              <button onClick={beforeImage} type="button">
                &lt;
              </button>
            )}
            {selectedIndex < feedImg.length - 1 && (
              <style.RightArrow onClick={nextImage} type="button">
                &gt;
              </style.RightArrow>
            )}
          </style.ArrowContainer>
        </style.FeedImageContainer>
        <style.FeedInfoContainer>
          <AuthorProfile author={author} />
          <style.Content>
            <style.FeedContentContainer>
              <style.ProfileImg src={author.profileImg} />
              <style.FeedContent>
                <b>{author.userName}</b>
                &nbsp;
                {content}
              </style.FeedContent>
            </style.FeedContentContainer>
            {comments.map((comment) => {
              return <CommentItem key={comment._id} comment={comment} />;
            })}
          </style.Content>
          <LikeMenu />
          <style.LikeCount>{`좋아요 ${like.length}개`}</style.LikeCount>
          <style.CreatedAt>{excuteTime(createdAt)}</style.CreatedAt>
          <CommentInput
            comment={commentInput}
            setNewComment={setCommentInput}
            submitHandler={CommentSubmitHandler}
          />
        </style.FeedInfoContainer>
      </style.FeedDetailContainer>
    );
  }
  return (
    <style.FeedDetailContainer active={detailActive}>
      loading...
    </style.FeedDetailContainer>
  );
};

export default FeedDetailContainer;

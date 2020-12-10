import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FeedItemContent from '@home/presentational/FeedItemContent';
import FeedItemAuthor from '@home/presentational/FeedItemAuthor';
import FeedItemIcon from '@common/FeedItemIcon';
import FeedItemImg from '@home/presentational/FeedItemImg';
import FeedItemInput from '@home/presentational/FeedItemInput';
import UserContext from '@context/user';
import pathURI from '@constants/path';
import IntersectionHook from '@hooks/Intersection';

const style = {};

style.FeedItem = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #ffffff;
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
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

style.Content = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: #262626;
  text-overflow: ellipsis;
`;

const FeedItem = (input) => {
  const { data, isLastItem, setGetMore } = input;
  const [target, setTarget] = useState(null);
  const [feedComment, setComment] = useState('');
  const [comments, setComments] = useState(data.comments);
  const { login } = useContext(UserContext);
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
      <FeedItemAuthor author={data.author} />
      <FeedItemImg feedImg={data.feedImg} />
      <FeedItemIcon data={data} login={login} />
      <FeedItemContent data={data} />
      <FeedItemInput
        feedComment={feedComment}
        setFeedComment={setFeedComment}
        CommentSubmitHandler={CommentSubmitHandler}
      />
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

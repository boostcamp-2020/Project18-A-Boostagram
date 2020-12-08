import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ModalContext from '@context/modal';

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

style.FeedImage = styled.img`
  width: 600px;
  height: 600px;
`;

const FeedDetailContainer = ({ modalActive }) => {
  const { selectedFeed } = useContext(ModalContext);
  const { _id, author, feedImg, content, like, comments } = selectedFeed;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(selectedFeed).length > 0) setLoading(true);
  }, [selectedFeed]);

  return (
    <style.FeedDetailContainer active={modalActive}>
      {loading ? <style.FeedImage src={feedImg[0]} /> : <>loading...</>}
    </style.FeedDetailContainer>
  );
};

export default FeedDetailContainer;

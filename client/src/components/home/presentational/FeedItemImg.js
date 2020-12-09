import React, { useState } from 'react';
import styled from 'styled-components';

const style = {};
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

style.feedImg = styled.img`
  width: 100%;
  position: relative;
`;

style.feedImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const FeedItemImg = (input) => {
  const { feedImg } = input;
  const [imgIndex, setImgIndex] = useState(0);
  const PreClickHandler = () => setImgIndex(imgIndex - 1);
  const NextClickHandler = () => setImgIndex(imgIndex + 1);

  return (
    <style.feedImgContainer>
      <style.Buttons>
        <style.PreButton
          length={feedImg.length}
          index={imgIndex}
          onClick={PreClickHandler}
        >
          {'<'}
        </style.PreButton>
        <style.NextButton
          length={feedImg.length}
          index={imgIndex}
          onClick={NextClickHandler}
        >
          {'>'}
        </style.NextButton>
      </style.Buttons>
      <style.feedImg src={feedImg[imgIndex]} />
    </style.feedImgContainer>
  );
};

export default FeedItemImg;

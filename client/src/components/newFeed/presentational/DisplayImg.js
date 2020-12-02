import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const imgMoveAnimation = keyframes`
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
`;

const style = {};
style.DisplayImgContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.hover
      ? `
          opacity: 30%;
          background-color: gray;
        `
      : null}
`;
style.DisplayImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  margin-left: ${({ margin }) => margin};
`;
style.ArrowContainer = styled.div`
  width: 100%;
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
style.imgContainer = styled.div`
  // todo: animation
  /* animation: ${imgMoveAnimation} 0.5s; */
`;
const DisplayImg = (props) => {
  const { feedImgs, hover, handleImg, imgIndex = 0 } = props;
  return (
    <style.DisplayImgContainer hover={hover}>
      {feedImgs.length !== 0 && (
        <style.imgContainer>
          {imgIndex - 1 >= 0 && (
            <style.DisplayImg src={feedImgs[imgIndex - 1]} margin="-100%" />
          )}
          <style.DisplayImg src={feedImgs[imgIndex]} />
          {imgIndex + 1 < feedImgs.length && (
            <style.DisplayImg src={feedImgs[imgIndex + 1]} margin="100%" />
          )}
        </style.imgContainer>
      )}
      <style.ArrowContainer>
        {imgIndex !== 0 && (
          <button onClick={handleImg} type="button">
            &lt;
          </button>
        )}
        {imgIndex < feedImgs.length - 1 && (
          <style.RightArrow onClick={handleImg} type="button">
            &gt;
          </style.RightArrow>
        )}
      </style.ArrowContainer>
    </style.DisplayImgContainer>
  );
};

DisplayImg.defaultProps = {
  feedImgs: [],
};

DisplayImg.propTypes = {
  feedImgs: PropTypes.arrayOf(PropTypes.string),
  hover: PropTypes.bool.isRequired,
  imgIndex: PropTypes.number.isRequired,
  handleImg: PropTypes.func.isRequired,
};

export default DisplayImg;

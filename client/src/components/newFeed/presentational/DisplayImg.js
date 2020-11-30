import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.DisplayImgContainer = styled.div`
  position: absolute;
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
`;
style.ArrowContainer = styled.div`
  width: 100%;
  position: relative;
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
const DisplayImg = (props) => {
  const { feedImgs, hover, handleImg, imgIndex = 0 } = props;
  return (
    <style.DisplayImgContainer hover={hover}>
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
      {feedImgs.length !== 0 && <style.DisplayImg src={feedImgs[imgIndex]} />}
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

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

const DisplayImg = (props) => {
  const { feedImgs, hover, imgIndex = 0 } = props;
  return (
    <style.DisplayImgContainer hover={hover}>
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
};

export default DisplayImg;

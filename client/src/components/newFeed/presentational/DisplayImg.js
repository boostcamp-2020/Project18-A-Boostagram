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
  const { feedImgs, hover } = props;
  return (
    <style.DisplayImgContainer hover={hover}>
      {feedImgs.map((feedImg, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <style.DisplayImg key={index} src={feedImg} />
      ))}
    </style.DisplayImgContainer>
  );
};

DisplayImg.defaultProps = {
  feedImgs: [],
};

DisplayImg.propTypes = {
  feedImgs: PropTypes.arrayOf(PropTypes.string),
  hover: PropTypes.bool.isRequired,
};

export default DisplayImg;

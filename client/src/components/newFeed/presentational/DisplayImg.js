import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const style = {};
style.DisplayImgContainer = styled.div`
  border: none !important;
  text-align: center;
`;
style.DisplayImg = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const DisplayImg = (props) => {
  const { feedImgs } = props;
  return (
    <style.DisplayImgContainer>
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
};

export default DisplayImg;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${(props) => (props.hover ? 0.3 : 1)};
  object-fit: cover;
`;

const LazyImage = ({ src, hover }) => <ImgBox src={src} hover={hover} />;

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
};

export default LazyImage;

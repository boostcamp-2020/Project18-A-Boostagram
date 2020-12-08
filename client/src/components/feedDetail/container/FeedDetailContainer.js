import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ModalContext from '@context/modal';
import ImgNav from '@newFeed/presentational/ImgNav';

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
`;

style.FeedImage = styled.img`
  width: 600px;
  height: 600px;
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

const FeedDetailContainer = ({ modalActive }) => {
  const { selectedFeed } = useContext(ModalContext);
  const { _id, author, feedImg, content, like, comments } = selectedFeed;

  const [loading, setLoading] = useState(false);
  const [selectedIndex, setImageIndex] = useState(0);

  const nextImage = () => setImageIndex(selectedIndex + 1);
  const beforeImage = () => setImageIndex(selectedIndex - 1);

  // if (loading) console.log(selectedIndex, feedImg[selectedIndex]);

  useEffect(() => {
    setImageIndex(0);
    if (Object.keys(selectedFeed).length > 0) setLoading(true);
  }, [selectedFeed]);

  if (loading) {
    return (
      <style.FeedDetailContainer active={modalActive}>
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
      </style.FeedDetailContainer>
    );
  }
  return (
    <style.FeedDetailContainer active={modalActive}>
      loading...
    </style.FeedDetailContainer>
  );
};

export default FeedDetailContainer;

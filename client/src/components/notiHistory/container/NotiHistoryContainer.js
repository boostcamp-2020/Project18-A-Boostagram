import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import icon from '@constants/icon';
import SocketContext from '@context/socket';
import DropBox from '../presentational/DropBox';

const style = {};

style.NotiHistoryContainer = styled.div`
  position: relative;
  *:not(:first-child) {
    margin-left: 0px !important;
  }
`;

style.NotiIcon = styled.div`
  cursor: pointer;
`;

const NotiHistoryContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { setNewNoti, setActiveNewNotiNumber } = useContext(SocketContext);
  const onClickHandler = () => {
    setIsClicked(!isClicked);
    setNewNoti(false);
    setActiveNewNotiNumber(0);
  };

  return (
    <style.NotiHistoryContainer>
      <style.NotiIcon onClick={onClickHandler}>
        <icon.Noti />
      </style.NotiIcon>
      <DropBox isClicked={isClicked} setIsClicked={setIsClicked} />
    </style.NotiHistoryContainer>
  );
};

export default NotiHistoryContainer;

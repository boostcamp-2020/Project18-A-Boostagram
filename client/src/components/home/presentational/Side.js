import React from 'react';
import styled from 'styled-components';

const style = {};

style.Side = styled.div`
  display: flex;
  width: 293px;
  margin-left: auto;
  margin-top: 30px;
`;

style.ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  cursor: pointer;
`;
style.User = styled.div`
  padding-top: 5px;
  margin-left: 10px;
`;
style.UserName = styled.div`
  font-weight: 600;
  color: #262626;
  margin-left: 12px;
  text-decoration: none;
  font: 14px;
  cursor: pointer;
`;
style.Name = styled.div`
  font: 14px;
  color: #8e8e8e;
  font-weight: 400;
  margin-left: 12px;
`;

const Side = () => {
  return (
    <style.Side>
      <style.ProfileImg
        draggable="false"
        src="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=WOYVybNPKzgAX8Ikq-N&oh=a768a8967429e6e82f1bb870567b1088&oe=5FED340F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
      />
      <style.User>
        <style.UserName>k_bk94</style.UserName>
        <style.Name>김병국</style.Name>
      </style.User>
    </style.Side>
  );
};

export default Side;

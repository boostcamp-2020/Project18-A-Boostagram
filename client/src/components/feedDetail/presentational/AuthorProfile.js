import React from 'react';
import styled from 'styled-components';

const style = {};

style.AuthorProfile = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  align-items: center;
`;

style.ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 14px 20px 20px;
  border-radius: 15px;
  overflow: hidden;
`;

style.AuthorName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

style.Divider = styled.div`
  margin: 0 6px;
`;

const AuthorProfile = ({ author }) => {
  const { userName, profileImg } = author;

  return (
    <style.AuthorProfile>
      <style.ProfileImg src={profileImg} />
      <style.AuthorName>{userName}</style.AuthorName>
      <style.Divider>•</style.Divider>
    </style.AuthorProfile>
  );
};

export default AuthorProfile;

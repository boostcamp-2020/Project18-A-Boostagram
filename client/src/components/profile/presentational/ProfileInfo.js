import React from 'react';
import styled from 'styled-components';
import theme from '@style/Theme';
import icon from '@constants/icon';

const style = {};

style.ProfileInfo = styled.div`
  display: flex;
  margin-top: 32px;
`;

style.ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  overflow: hidden;
  margin: 0 80px;
`;

style.ProfileDetail = styled.div``;

style.NameAndSettings = styled.div`
  display: flex;
  align-items: center;
`;

style.Name = styled.div`
  font-size: 30px;
  margin-right: 20px;
`;

style.ChangeProfile = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${theme.color.border};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 4px 8px;
  margin-right: 12px;
  :focus {
    outline: none;
  }
`;

style.FeedAndFollow = styled.div`
  display: flex;
  margin-top: 20px;
`;

style.FeedCountTitle = styled.div`
  margin-right: 5px;
`;

style.FeedCountDetail = styled.div`
  font-weight: bold;
  margin-right: 30px;
`;

style.FollowerTitle = styled.div`
  margin-right: 5px;
`;

style.FollowerDetail = styled.div`
  font-weight: bold;
  margin-right: 30px;
`;

style.FollowingTitle = styled.div`
  margin-right: 5px;
`;

style.FollowingDetail = styled.div`
  font-weight: bold;
  margin-right: 30px;
`;

style.UserName = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const ProfileInfo = () => {
  return (
    <style.ProfileInfo>
      <style.ProfileImg src="https://ca.slack-edge.com/T019JFET9H7-U019PN65926-7d7d0974a7f9-512" />
      <style.ProfileDetail>
        <style.NameAndSettings>
          <style.Name>ju_hy__</style.Name>
          <style.ChangeProfile>프로필 편집</style.ChangeProfile>
          <icon.Setting />
        </style.NameAndSettings>
        <style.FeedAndFollow>
          <style.FeedCountTitle>게시물</style.FeedCountTitle>
          <style.FeedCountDetail>51</style.FeedCountDetail>
          <style.FollowerTitle>팔로워</style.FollowerTitle>
          <style.FollowerDetail>34</style.FollowerDetail>
          <style.FollowingTitle>팔로우</style.FollowingTitle>
          <style.FollowingDetail>28</style.FollowingDetail>
        </style.FeedAndFollow>
        <style.UserName>JuHyeon-Lee</style.UserName>
      </style.ProfileDetail>
    </style.ProfileInfo>
  );
};

export default ProfileInfo;

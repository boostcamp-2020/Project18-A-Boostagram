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

const ProfileInfo = (props) => {
  const { userInfo, feeds } = props.data;
  return (
    <style.ProfileInfo>
      <style.ProfileImg src={userInfo.profileImg} />
      <style.ProfileDetail>
        <style.NameAndSettings>
          <style.Name>{userInfo.userName}</style.Name>
          <style.ChangeProfile>프로필 편집</style.ChangeProfile>
          <icon.Setting />
        </style.NameAndSettings>
        <style.FeedAndFollow>
          <style.FeedCountTitle>게시물</style.FeedCountTitle>
          <style.FeedCountDetail>{feeds.length}</style.FeedCountDetail>
          <style.FollowerTitle>팔로워</style.FollowerTitle>
          <style.FollowerDetail>
            {userInfo.follower.length}
          </style.FollowerDetail>
          <style.FollowingTitle>팔로우</style.FollowingTitle>
          <style.FollowingDetail>
            {userInfo.follow.length}
          </style.FollowingDetail>
        </style.FeedAndFollow>
        <style.UserName>{userInfo.name}</style.UserName>
      </style.ProfileDetail>
    </style.ProfileInfo>
  );
};

export default ProfileInfo;
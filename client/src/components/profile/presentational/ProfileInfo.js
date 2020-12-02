import React from 'react';
import styled from 'styled-components';

const style = {};

style.ProfileInfo = styled.div`
  margin-top: 32px;
`;

style.ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  overflow: hidden;
  margin: 0 80px;
`;

const ProfileInfo = () => {
  return (
    <style.ProfileInfo>
      <style.ProfileImg src="https://ca.slack-edge.com/T019JFET9H7-U019PN65926-7d7d0974a7f9-512" />
    </style.ProfileInfo>
  );
};

export default ProfileInfo;

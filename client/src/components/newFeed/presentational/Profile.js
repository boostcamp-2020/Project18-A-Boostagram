import React from 'react';
import styled from 'styled-components';

const style = {};
style.Profile = styled.div`
  height: 72px;
  background-color: pink;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 1000px; // todo: edit
`;
const Profile = () => {
  return <style.Profile>Profile</style.Profile>;
};

export default Profile;

/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';
import StoryItems from '@home/presentational/StoryItems';

const style = {};

style.Story = styled.div`
  display: ${(props) => (props.datas.length > 0 ? 'flex' : 'none')};
  margin-bottom: 24px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 16px 0;
  background: #ffffff;
  height: 84px;
  overflow: auto;
`;

style.Items = styled.div`
  margin: auto 0;
  margin-left: 10px;
  width: 66px;
  height: 66px;
`;

const Story = (input) => {
  const { datas } = input;
  const user = [];
  return (
    <style.Story datas={datas}>
      {datas.length > 0 ? (
        datas.map((data) => {
          if (!user.includes(data.userId)) {
            user.push(data.userId);
            return <StoryItems key={data.userId} data={data} />;
          }
        })
      ) : (
        <></>
      )}
    </style.Story>
  );
};

export default Story;

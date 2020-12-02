import React from 'react';
import styled from 'styled-components';
import StoryItems from '@home/presentational/StoryItems';
import dummy from '@feedExplore/dummy';

const style = {};

style.Story = styled.div`
  display: flex;
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

const Story = () => {
  return (
    <style.Story>
      {dummy.map((data) => {
        return <StoryItems key={data._ID} data={data} />;
      })}
    </style.Story>
  );
};

export default Story;

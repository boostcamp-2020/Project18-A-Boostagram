import React from 'react';
import styled from 'styled-components';
import Story from '@home/presentational/Story';
import Feed from '@home/presentational/Feed';

const style = {};

style.Contents = styled.div`
  flex: 2;
  min-width: 614px;
  max-width: 614px;
`;

const Contents = (input) => {
  const { data } = input;
  return (
    <style.Contents>
      <Story datas={data} />
      <Feed data={data} />
    </style.Contents>
  );
};

export default Contents;

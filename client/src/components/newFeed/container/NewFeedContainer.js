import React, { useReducer } from 'react';
import styled from 'styled-components';
import InputText from '@newFeed/presentational/InputText';
import InputFile from '@newFeed/presentational/InputFile';
import InputTag from '@newFeed/presentational/InputTag';
import DisplayImg from '@newFeed/presentational/DisplayImg';
import SubmitButton from '@newFeed/presentational/SubmitButton';
import pathURL from '@constants/path';

const style = {};
const actionType = {};

actionType.WRITE = 'write';
actionType.UPLOAD = 'upload';

style.NewFeedContainer = styled.div`
  background-color: ${(props) => props.theme.color.background};
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;

  & > * {
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
  }
`;

const initialState = {
  textValue: '',
  files: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.WRITE:
      return {
        ...state,
        textValue: action.value,
      };
    case actionType.UPLOAD:
      return {
        ...state,
        files: [
          ...state.files,
          // todo: replace action.value
          ...action.filesArr,
        ],
      };
    default:
      return state;
  }
};

const NewFeedContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const filesArr = [];
    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        // todo: real img url
        // filesArr.push(files[i].name);
        filesArr.push(
          'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
        );
      }
    }
    dispatch({
      type: name,
      value,
      filesArr,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(pathURL.IP + pathURL.API_NEWFEED, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedImg: state.files,
        author: {
          userId: '5fbbc6c9923dff1727202680',
          name: 'testName',
          userName: 'cha',
          profileImg: 'sample image',
        },
        content: state.textValue,
      }),
    }).then((res) => {
      if (res.status === 201) {
        return window.alert('success');
      }
      return window.alert('이미지를 첨부해주세요.');
    });
  };

  return (
    <style.NewFeedContainer>
      <DisplayImg feedImgs={state.files} />
      <InputFile handleChange={handleChange} />
      <InputText state={state} handleChange={handleChange} />
      <InputTag />
      <SubmitButton handleSubmit={handleSubmit} />
    </style.NewFeedContainer>
  );
};

export default NewFeedContainer;

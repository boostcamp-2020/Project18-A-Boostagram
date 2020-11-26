import React, { useReducer } from 'react';
import styled from 'styled-components';
import InputText from '@newFeed/presentational/InputText';
import InputFile from '@newFeed/presentational/InputFile';
import InputLocation from '@newFeed/presentational/InputLocation';
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
  textOrigin: '',
  textResult: '',
  files: [],
};

const converter = (text) => {
  const lines = JSON.stringify(text).slice(1, -1).split('\\n');
  console.log(lines);
  const markDown = lines.map((line) => {
    if (line.substring(0, 2) === '# ') {
      return `<h1>${line.substring(2)}<h1>`;
    }
    return line;
  });
  console.log(markDown);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.WRITE:
      return {
        ...state,
        textOrigin: action.value,
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
    switch (name) {
      case 'text':
        dispatch({
          type: actionType.WRITE,
          value,
        });
        break;
      case 'file':
        for (let i = 0; i < files.length; i += 1) {
          // todo: real img url
          // filesArr.push(files[i].name);
          filesArr.push(
            'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
          );
        }
        dispatch({
          type: actionType.UPLOAD,
          filesArr,
        });
        break;
      default:
    }
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
        content: state.textOrigin,
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
      <InputLocation />
      <InputTag />
      <SubmitButton handleSubmit={handleSubmit} />
    </style.NewFeedContainer>
  );
};

export default NewFeedContainer;

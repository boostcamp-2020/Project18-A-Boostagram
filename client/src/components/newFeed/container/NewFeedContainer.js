import React, { useReducer } from 'react';
import styled from 'styled-components';
import InputText from '@newFeed/presentational/InputText';
import InputFile from '@newFeed/presentational/InputFile';
import InputTag from '@newFeed/presentational/InputTag';
import DisplayImg from '@newFeed/presentational/DisplayImg';
import SubmitButton from '@newFeed/presentational/SubmitButton';
import pathURL from '@constants/path';
import PropTypes from 'prop-types';

const style = {};
const actionType = {};

actionType.WRITE = 'write';
actionType.UPLOAD = 'upload';

style.NewFeedContainer = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  background-color: ${(props) => props.theme.color.background};
  width: 80%;
  z-index: 2;
  background-color: white;
  position: absolute;
  left: 90px;

  & > * {
    border: 1px solid ${(props) => props.theme.color.border};
    overflow: hidden;
  }
`;
style.LeftBox = styled.div`
  flex: 2;
`;
style.RightBox = styled.div`
  flex: 1;
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

const NewFeedContainer = ({ modalActive, handleModal }) => {
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
    })
      .then((res) => {
        if (res.status === 201) {
          window.alert('success');
          return 'SUCCESS';
        }
        return window.alert('이미지를 첨부해주세요.');
      })
      .then((result) => {
        if (result === 'SUCCESS') handleModal();
      });
  };

  return (
    <style.NewFeedContainer active={modalActive}>
      <style.LeftBox>
        <DisplayImg feedImgs={state.files} />
        <InputFile handleChange={handleChange} />
      </style.LeftBox>
      <style.RightBox>
        <InputText state={state} handleChange={handleChange} />
        <InputTag />
        <SubmitButton handleSubmit={handleSubmit} />
      </style.RightBox>
    </style.NewFeedContainer>
  );
};

NewFeedContainer.propTypes = {
  modalActive: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default NewFeedContainer;

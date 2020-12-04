import React, { useState, useReducer, useContext } from 'react';
import styled from 'styled-components';
import InputText from '@newFeed/presentational/InputText';
import InputFile from '@newFeed/presentational/InputFile';
import DisplayImg from '@newFeed/presentational/DisplayImg';
import ImgNav from '@newFeed/presentational/ImgNav';
import SubmitButton from '@newFeed/presentational/SubmitButton';
import Profile from '@newFeed/presentational/Profile';
import pathURL from '@constants/path';
import PropTypes from 'prop-types';
import UserContext from '@context/user';

const style = {};
const actionType = {};

actionType.RESET = 'reset';
actionType.WRITE = 'write';
actionType.UPLOAD = 'upload';
actionType.SELECT_NEXT = 'selectNext';
actionType.SELECT_BEFORE = 'selectBefore';

style.NewFeedContainer = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  background-color: ${(props) => props.theme.color.background};
  width: 900px;
  height: 600px;
  z-index: 3;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 35px;

  & > * {
    overflow: hidden;
  }
`;
style.LeftBox = styled.div`
  position: relative;
  flex: 2;
`;
style.RightBox = styled.div`
  flex: 1;
`;

const initialState = {
  textValue: '',
  files: [],
  selectedIndex: 0,
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
        files: [...state.files, ...action.filesArr],
      };
    case actionType.SELECT_NEXT:
      return {
        ...state,
        selectedIndex: state.selectedIndex + 1,
      };
    case actionType.SELECT_BEFORE:
      return {
        ...state,
        selectedIndex: state.selectedIndex - 1,
      };
    case actionType.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const NewFeedContainer = ({ modalActive, handleModal }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hover, setHover] = useState(false);
  const { login } = useContext(UserContext);

  const handleHover = () => setHover(!hover);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === actionType.UPLOAD) {
      const data = new FormData();
      for (let i = 0; i < files.length; i += 1) {
        data.append('file[]', files[i]);
      }
      fetch(`${pathURL.IP}${pathURL.IMG_UPLOAD}`, {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          return [...res];
        })
        .then((filesArr) => dispatch({ type: name, filesArr }));
    } else {
      dispatch({ type: name, value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(pathURL.IP + pathURL.API_NEWFEED, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.jwt}`,
      },
      body: JSON.stringify({
        feedImg: state.files,
        author: {
          name: login.name,
          userName: login.userName,
          profileImg: login.profileImg,
        },
        content: state.textValue,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          return 'SUCCESS';
        }
        return alert('이미지를 첨부해주세요.');
      })
      .then((result) => {
        if (result === 'SUCCESS') handleModal();
      });
  };

  const handleImg = ({ target }) => {
    const arrow = target.innerHTML;
    if (arrow === '&gt;') {
      dispatch({ type: actionType.SELECT_NEXT });
    }
    if (arrow === '&lt;') {
      dispatch({ type: actionType.SELECT_BEFORE });
    }
  };

  if (!modalActive && JSON.stringify(state) !== JSON.stringify(initialState)) {
    dispatch({ type: actionType.RESET });
  }

  return (
    <style.NewFeedContainer active={modalActive}>
      <style.LeftBox>
        <DisplayImg
          imgIndex={state.selectedIndex}
          feedImgs={state.files}
          hover={hover}
          handleImg={handleImg}
        />
        <InputFile handleChange={handleChange} handleHover={handleHover} />
        <ImgNav imgIndex={state.selectedIndex} imgs={state.files} />
      </style.LeftBox>
      <style.RightBox>
        <Profile />
        <InputText state={state} handleChange={handleChange} />
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

import React, { useContext } from 'react';
import UserContext from '../context/user';

const handleButton = () => {
  fetch('http://localhost:3000/login/github')
    .then((res) => res.json())
    .then((url) => {
      document.location.href = url;
    });
};

const AouthTest = () => {
  const { login, setLogin } = useContext(UserContext);
  console.log(login); // todo: history
  return (
    <div>
      <button type="button" onClick={handleButton}>
        GitHub
      </button>
    </div>
  );
};

export default AouthTest;

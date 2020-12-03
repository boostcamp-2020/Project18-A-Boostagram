import React from 'react';

const handleButton = () => {
  fetch('http://localhost:3000/login/github')
    .then((res) => res.json())
    .then((url) => {
      document.location.href = url;
    });
};

const LoginContainer = () => {
  return (
    <div>
      <button type="button" onClick={handleButton}>
        GitHub
      </button>
    </div>
  );
};

export default LoginContainer;

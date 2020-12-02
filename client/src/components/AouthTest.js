import React from 'react';

const AouthTest = () => {
  const handleButton = () => {
    fetch('http://localhost:3000/login/github')
      .then((res) => res.json())
      .then((url) => {
        document.location.href = url;
      });
  };
  return (
    <div>
      <button type="button" onClick={handleButton}>
        GitHub
      </button>
    </div>
  );
};

export default AouthTest;

import React from 'react';

const RedirectButton = ({ url, text }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default RedirectButton;

import React from 'react';

const RedirectButton = ({ url, text }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div class="redirect">
        <button class="button"onClick={handleClick}>
            {text}
        </button>
    </div>
    
  );
};

export default RedirectButton;

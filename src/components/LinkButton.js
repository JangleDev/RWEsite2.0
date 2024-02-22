import React from 'react';

const RedirectButton = ({ url, text }) => {
  const handleClick = () => {
    window.open = (url,"_blank");
  };

  return (
    <div class="redirect">
        <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          <button className="button" onClick={handleClick}>
            {text}
          </button>
            
        </a>
    </div>
    
  );
};

export default RedirectButton;

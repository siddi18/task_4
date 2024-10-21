import React from 'react';

const Button = ({ onClick, value }) => {
  return (
    <button onClick={() => onClick(value)} className="button">
      {value}
    </button>
  );
};

export default Button;

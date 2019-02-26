import React from 'react';
import { css } from 'emotion';

const button = css({
  height: 42,
  backgroundColor: '#60a7f0',
  color: '#fff',
  border: 'none',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 14,
  '&:hover': {
    backgroundColor: '#7858f6',
    cursor: 'pointer',
  },
});

const Button = ({ label, onClick }) => {
    return (
      <button className={button} onClick={onClick}>
        {label}
      </button>
    );
  }

export default Button;

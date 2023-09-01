import React from 'react';

const ActionButton = ({
  className,
  onClick,
  disabled,
  btnName,
  spanContent,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {btnName}
      {spanContent && <span>{spanContent}</span>}
    </button>
  );
};

export default ActionButton;

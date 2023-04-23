import React from 'react';

const Error = () => {
  const errorStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8%',
    alignItems: 'center',
    fontSize: '45px',
  };

  return (
    <div style={errorStyles}>
      <h4>Error : 404 Not Found</h4>
    </div>
  );
};

export default Error;

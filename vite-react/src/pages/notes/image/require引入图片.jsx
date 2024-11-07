import React from 'react';

function requireImage() {
  const myImage = require('./1.png');
  return <img src={myImage} alt="description" />;
}

export default requireImage;
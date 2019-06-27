import React from 'react';
import Image from '../images/17746-682.png';
import './PhotoViewer.css';

const PhotoViewer = () => {
  return (
    <div className="photo-viewer">
      <img src={Image} alt="basket success" />
    </div>
  );
};

export default PhotoViewer;

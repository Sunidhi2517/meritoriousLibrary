import React, { useState } from 'react';
import './gallery.css';
import cabin1 from './assets/cabin1.jpeg';
import cabin2 from './assets/cabin2.jpeg';
import cabin3 from './assets/cabin3.jpeg';
import lacker1 from './assets/lacker1.jpeg';
import water from './assets/water.JPG';
import dining from './assets/dining.jpeg';
import one from './assets/one.jpeg';
import two from './assets/two.jpeg';
import three from './assets/three.jpeg';
import four from './assets/four.jpeg';
import five from './assets/five.jpeg';
import six from './assets/six.jpeg';
import seven from './assets/seven.jpeg';
import eight from './assets/eight.jpeg';








const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
     cabin1, cabin2, cabin3,lacker1,water,dining,one,two,three,four,five,six,seven,eight

    
   
   
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery-container features">

        <h3>Picture Gallery</h3>
        <span>Have a look</span>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Selected" className="modal-image" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

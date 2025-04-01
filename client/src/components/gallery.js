import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525784/cabin1_zqvkmt.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525784/cabin2_xwlxyl.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525784/cabin3_itij3p.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525784/lacker1_blsf9z.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525788/water_ko4syb.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525785/dining_drumrm.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525785/one_itgleq.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525786/two_sq71qu.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525786/three_gdzljp.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525783/four_iqhmkn.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525785/five_nmqep9.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525786/six_x9hml3.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525785/seven_eogg0z.jpg",
    "https://res.cloudinary.com/dt3rlyga5/image/upload/v1743525785/eight_jreopq.jpg"
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

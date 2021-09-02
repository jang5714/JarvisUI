import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [show, setShow] = useState(false);
   
  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
  };
  
  return (
    <div className="Modal">
      <div
        hidden={!show}  
      >
        <div
          className="modal-background"
          onClick={handleModalClose}
        >
          <div className="modal-card"> 
            <h3>추천 내용</h3>   
          </div>
        </div>
      </div>
      <button
        className="button"
        onClick={handleModalOpen}  
      >
        추천 받기
      </button>
    </div>
  );
};

export default Modal;


import React from 'react';
import './ModalContent.css'

const  ModalSubContent = ({content, modalRef, buttonRef, closeModal}) => {
    return(
          <div className="modal-area" ref={modalRef}>
            <div className="modal-body">
              <div className="details">
                <div>
                  <p className="title">Id</p>
                  <div className="divider" ></div>
                </div>
                <div>
                  <p className="detail">{content.id}</p>
                  <div className="divider" ></div>
                </div>
                <div>
                  <p className="title">Name</p>
                  <div className="divider" ></div>
                </div>
                <div>
                  <p className="detail">{`${content.first_name} ${content.last_name}`}</p>
                  <div className="divider" ></div>
                </div>
                <div>
                  <p className="title">Email</p>
                  <div className="divider" ></div>
                </div>
                <div>
                  <p className="detail">{content.email}</p> 
                  <div className="divider" ></div>
                </div>            
              </div>
              <div className="photo-btn">
                <img src={content.avatar} className="modal-img"/>
                <button
                  ref={buttonRef}
                  aria-label="Close Modal"
                  aria-labelledby="close-modal"
                  className="close"
                  onClick={closeModal}
                  >
                  Close
                </button>
              </div> 
            </div>
          </div>
    );
}

export default ModalSubContent;

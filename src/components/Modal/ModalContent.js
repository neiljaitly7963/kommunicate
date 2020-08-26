import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import ModalSubContent from './ModalSubContent'
import './ModalContent.css'

export class ModalContent extends Component {
  render() {
    return ReactDOM.createPortal(
      <FocusTrap>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <ModalSubContent content={this.props.content} modalRef={this.props.modalRef} buttonRef={this.props.buttonRef} closeModal={this.props.closeModal} />
        </aside>
      </FocusTrap>,
      document.body
    );
  }
}

export default ModalContent;

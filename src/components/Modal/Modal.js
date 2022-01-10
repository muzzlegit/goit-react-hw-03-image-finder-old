import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component { 

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = event => {
            if(event.code === 'Escape'){
                this.props.onClose();
            }
    }

    handleBackdropClick = event => {
        if(event.target === event.currentTarget){
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <Overlay onClick = { this.handleBackdropClick }>
                <ModalBox >
                    {this.props.children}
                </ModalBox>
            </Overlay>,
            modalRoot
            )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
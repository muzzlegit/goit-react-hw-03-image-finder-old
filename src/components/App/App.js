import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";

import { Container } from './App.styled';

class App extends Component {
  state = {
    query: '',
    showModal: false,
    modalImage: {},
  }

  handleFormSubmit = (query) => {
    this.setState({query: query});
  }
  toggleModal = ( )=> {
    this.setState({ showModal: !this.state.showModal })
  }
  onImageClick = (event) => {
    this.setState({modalImage:  {url: event.currentTarget.dataset.source, alt: event.currentTarget.alt}});
    this.toggleModal();
  }


  render() {
    const { showModal, modalImage } = this.state;
    
    return (
      <Container>
        {showModal && <Modal onClose = {this.toggleModal}> <Image modalImageData = { modalImage }/></Modal>}
        <Searchbar onSubmit = {this.handleFormSubmit}/>
        <ImageGallery searchQuery = {this.state.query} onImageClick = { this.onImageClick } />
        <ToastContainer />
      </Container>

    );
  }

}

export default App;

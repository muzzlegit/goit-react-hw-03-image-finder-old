import React, { Component } from "react";
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import imagesAPI from '../../services/images-api';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

import { errorToast } from "../../services/notify";

import { Gallery } from './ImageGallery.styled';



class ImageGallery extends Component {
    state = {
        images: [],
        status: 'idle',
        page: 1,
        firstRecivedImage: null
      }
    

    componentDidUpdate(prevProps, prevState){
        const prevImages = prevProps.searchQuery;
        const nextImages = this.props.searchQuery ;
        const { page, firstRecivedImage } = this.state;
 
        if(prevImages !== nextImages) {
            this.setState({images: [], page: 1});
            if(this.state.page !== 1){
                return;
            }
        } 
        if (prevState.firstRecivedImage !== firstRecivedImage && page > 1) {
            document.getElementById(firstRecivedImage)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        }
        if(prevImages !== nextImages || prevState.page !== this.state.page) {
            this.setState({ status: 'pending' });
            imagesAPI(nextImages, page)
            .then(res => {
                if(res.total !== 0) {
                    if(!res.hits.length){
                        this.setState( { images: [...prevState.images], status:'resolved'});
                        errorToast('Images on your query over');
                        return;
                    }
                    this.setState(prevState =>  {
                        if(prevImages !== nextImages) {
                            return { images: res.hits, status:'resolved', page: 1, firstRecivedImage: res.hits[0].id}
                        } else {
                            return { images: [...prevState.images,...res.hits], status:'resolved', firstRecivedImage: res.hits[0].id};
                        }
                    });
                } else {
                    this.setState({ status:'idle' });
                    errorToast('Nothing found. Try enother query');
                }
            })
            .catch((error) => {
                this.setState({ status:'idle' })
                errorToast(error);
            });
        }


    }

    handleLoadMoreClick = () => {
        this.setState({page: this.state.page +1})
    }


    render () {
        const { images, status } = this.state;
        if(status === 'idle') {
            return <></> ;
        }
        if(status === 'pending') {
            return (
                <Loader
                    type="Watch"
                    color="#00BFFF"
                    height={ 50 }
                    width={ 50 }
                />
            )
        }
        if(status === 'resolved') {
            return (    
                <>
                    <Gallery>
                        <ImageGalleryItem images = { images } onImageClick = {this.props.onImageClick}/>
                    </Gallery>
                    <Button onClick = {this.handleLoadMoreClick}/>
                </>  
            )            
        }
    }
}

ImageGallery.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;


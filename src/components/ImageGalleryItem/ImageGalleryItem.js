import React from "react";
import PropTypes from 'prop-types';

import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images , onImageClick } ) => {
    return (
        images.map(({id, webformatURL, largeImageURL, tags }) => {
            return (
                <GalleryItem key = { id } id = { id }>
                    <GalleryItemImage src = { webformatURL } alt = { tags } onClick = { () => onImageClick(largeImageURL, tags) } />
                </GalleryItem>
            )
        })
    )
}

ImageGalleryItem.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
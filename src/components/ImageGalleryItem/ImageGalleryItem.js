import React from "react";
import PropTypes from 'prop-types';

import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images , onImageClick } ) => {
    return (
        images.map(({id, webformatURL, largeImageURL, tags }) => {
            return (
                <GalleryItem key = { id } id = { id } name = { largeImageURL }>
                    <GalleryItemImage src = { webformatURL } alt = { tags } data-source = { largeImageURL } onClick = { onImageClick } />
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
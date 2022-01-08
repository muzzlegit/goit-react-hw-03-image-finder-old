import React from 'react';
import PropTypes from 'prop-types';

const Image = ({modalImageData}) => {

    return <img src={ modalImageData.url } alt={ modalImageData.alt } />
}

Image.propTypes = {
    modalImageData: PropTypes.object.isRequired,
};

export default Image;
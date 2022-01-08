import React from "react";
import PropTypes from 'prop-types';

import { LoadMoreButton } from './Button.styled';

const Button = ({onClick}) => {
    return (
        <LoadMoreButton type="button" onClick={onClick} >
            <span>Load more</span>
        </LoadMoreButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// import { LabelWrap,FormWrap, ButtonWrap } from './ContactForm.styled';


class Searchbar extends Component {
    state = {
        query: '',
      }

    handleQuery = (event) => {
        this.setState({query: event.currentTarget.value.toLowerCase() });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.query.trim() === ''){
            toast.warn('enter normal', {
                theme: "dark",
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        this.props.onSubmit(this.state.query);
        this.setState({query:''});
    }
    render () {
        return (      
            <header class="searchbar">
                <form  onSubmit={this.handleSubmit}>
                    <button  type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>
                    <input
                        class="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleQuery}
                    />
                </form>
            </header>
        )
    }

}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;


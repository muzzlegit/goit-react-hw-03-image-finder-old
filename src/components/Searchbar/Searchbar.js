import React, { Component } from "react";
import PropTypes from 'prop-types';
import { warnToast } from '../../services/notify';

import { 
    Header,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput
 } from './Searchbar.styled';



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
            warnToast("Go there, I don\’t know where, bring that, I don\’t know what. Be polite, type something!");     
            return;
        }
        this.props.onSubmit(this.state.query);
        this.setState({query:''});
    }

    render () {
        return (      
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton  type="submit">
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleQuery}
                    />
                </SearchForm>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;


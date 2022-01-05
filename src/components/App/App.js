import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    query: '',
  }

  handleFormSubmit = (query) => {
    this.setState({query: query});
  }
  render() {
    return (
      <>
        <Searchbar onSubmit = {this.handleFormSubmit}/>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      </>

    );
  }

}

export default App;

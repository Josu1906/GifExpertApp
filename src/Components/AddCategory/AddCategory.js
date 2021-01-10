import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const setCategories = null;


const AddCategory = ({setCategories}) => {
    const [inputValue, setstate] = useState('');

    const handleInputChange = ( e ) => setstate(e.target.value); //Asi cambiamos el estado 

    const handleSubmit = (e) => {
      e.preventDefault()

      if(inputValue == ''){
        setCategories(cast => [...cast]);
      }else{
        setCategories(cast => [inputValue, ...cast]);
        setstate('');
      }
    }

    return (
      <>
      <form onSubmit={handleSubmit}>
      <input
      type='text'
       value={inputValue}
        onChange={handleInputChange}
        />
      </form>
      </>
    )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;

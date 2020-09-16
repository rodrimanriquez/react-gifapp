import React from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue,...cats,]);
      setInputValue("");
    }
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm font-bold mb-4">Escriba una categoria</label>  
      <input
        type="text"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setInputValue("")}
      />

      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-lg py-2 px-4 ml-4"
        type="submit"
      >
        Agregar
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

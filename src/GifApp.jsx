import React from "react";
import AddCategory from "./components/AddCategory";
import Title from "./components/customText/Title";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = React.useState(["One punch"]);

  return (
    <>
      <div className="container mx-auto p-5 text-center">
        <Title textTitle="Gif App" />

        <AddCategory setCategories={setCategories} />

        <ul className="list-decimal mt-5">
          {categories.map((item, idx) => (
            <GifGrid key={idx} category={item}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GifApp;

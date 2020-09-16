import React from "react";
import Title from "./customText/Title";
import GifItemCard from "./GifItemCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import LoadingItem from "./LoadingItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((item) => (
            <LoadingItem key={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className="block col-span-1 md:col-span-2 lg:col-span-3 mt-4">
            <Title textTitle={category} />
          </div>
          {images.map((item) => (
            <GifItemCard key={item.id} image={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;

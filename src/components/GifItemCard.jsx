import React from 'react'

const GifItemCard = ({image}) => {
    return (
        <div
          key={image.id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg col-span-1"
        >
          <img
            className="h-64 w-screen"
            src={image.url.url}
            alt="Sunset in the mountains"
          />
          <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2">{image.title}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {image.tags.lenght >= 1 &&
              image.tags.map((tag) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              ))}
          </div>
        </div>
    )
}

export default GifItemCard

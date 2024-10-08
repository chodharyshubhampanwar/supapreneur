import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProductImageGridProps {
  images: string[]; // Accept string array
}

const ProductImageGrid: React.FC<ProductImageGridProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const navigateCarousel = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImageIndex - 1 + images.length) % images.length
        : (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="container mx-auto mt-4 mb-10">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full h-32 md:h-48 object-cover cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openCarousel(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-[1069px] max-h-[640px]">
            <img
              src={images[selectedImageIndex]} // Show the selected image in the carousel
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <button
              onClick={() => navigateCarousel("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={() => navigateCarousel("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGrid;

/*
Build a highly scalable Carousel Component in React JS

Requirements:
1 - Create a carousel component that takes an array of image as input.
2 - The component should efficiently handle large number of images while maintaining scalability, performance optimizations, and extinsibility.
3 - Provide callback functions for events like image click, enabling users to define the custom behaviour.
4 - Focus on Accessibility
5 - Api for images - https://jsonplaceholder.typicode.com/photos?_limit=20

Layout:
1 - One parent container that will wrap all the images
2 - Left and right navigation buttons
3 - Optional dots or indicator to show the currently active image

Bonus: Performance Optimization
1 - Implement lazy loading to render only visible images.
2 - Implement debouncing for navigation button clicks.

Accessibility: 
1 - Provide arrow keys support for image navigation
2 - Update the focus while updating the active image
*/

/*
Build a highly scalable Carousel Component in React JS

Requirements:
1 - Create a carousel component that takes an array of image as input.
2 - The component should efficiently handle large number of images while maintaining scalability, performance optimizations, and extinsibility.
3 - Provide callback functions for events like image click, enabling users to define the custom behaviour.
4 - Focus on Accessibility
5 - Api for images - https://jsonplaceholder.typicode.com/photos?_limit=20

Layout:
1 - One parent container that will wrap all the images
2 - Left and right navigation buttons
3 - Optional dots or indicator to show the currently active image

Bonus: Performance Optimization
1 - Implement lazy loading to render only visible images.
2 - Implement debouncing for navigation button clicks.

Accessibility: 
1 - Provide arrow keys support for image navigation
2 - Update the focus while updating the active image
*/

import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "../css/Carousel.css";

const CarouselContainer = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  console.log(images);
  const fetchImages = async (imgLimit) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <Carousel
      className="carousel-container"
      images={images}
      isLoading={loading}
      imagePerSlide={2}
      imageLimit={8}
      onImgClick={(image, index) =>
        console.log("Active image is:", image, index)
      }
    />
  );
};

export default CarouselContainer;

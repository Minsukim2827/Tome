import React, { useState, useEffect } from 'react';
import './../../css/carouselstyle.css';

// Importing images
import image1 from './../../images/img1.jpg';
import image2 from './../../images/img2.jpg';
import image3 from './../../images/img3.jpg';
import image4 from './../../images/img4.jpg';


const Carousel = () => {
    const images = [image1, image2, image3, image4];
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        // Duplicate the images array for seamless looping
        setCarouselImages([...images, ...images]);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-images">
                <div className="carousel-images-slide">
                    {carouselImages.map((src, index) => (
                        <img key={index} className="carousel-img" src={src} alt={`Carousel image ${index % images.length}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;

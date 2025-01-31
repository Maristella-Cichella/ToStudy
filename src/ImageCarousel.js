import React, { useState, useEffect } from "react";
import "./Style.css";
import './Function.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://th.bing.com/th/id/R.0924e1274aa95775cab14443d22299d0?rik=296flajosZl%2buw&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.475e5fe114f84e39c2df2d2b771a3f35?rik=aWi9UEqPWXALBA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fWater-Clouds-Nature-Rivers-HD-Wallpaper-1920x1080.jpg&ehk=S2QOEKpU%2fGEJFvLS9HHHwibPhsOGHzlyGHgfrP%2brqo4%3d&risl=&pid=ImgRaw&r=0",
        "https://images2.alphacoders.com/168/thumb-1920-168102.jpg"
    ];

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Cambia immagine ogni 5 secondi

        return () => clearInterval(autoSlide); // Pulizia dell'intervallo quando il componente viene smontato
    }, [images.length]);

    // Funzione per cambiare immagine quando si clicca sui punti
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <div className="carousel-slides">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Immagine ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)} // Aggiungi il clic sui punti
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;




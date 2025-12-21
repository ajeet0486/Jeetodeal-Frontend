import React from 'react'
import { useState, useRef, useEffect } from "react"
import img1 from "../Images/1.jpeg";
import img2 from "../Images/2.jpeg";
import img3 from "../Images/3.jpeg";
import img4 from "../Images/4.jpeg";

export default function ImgSlider() {
    const images = [img1,img2,img3,img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const slidewidth = 365;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalRef.current)
    }, []);
    return (
        <div style={{ width: "365px", height: "100%", overflow: "hidden",borderRadius:'10px' }}>
            <div className="slidepic" style={{ ...styles.slidepic, transform: `translateX(-${currentIndex * slidewidth}px)`,transition: "0.5s" }}>
                {images.map((src, i) => (<img src={src} key={i} style={{height:"190px",width:"365px"}}/>))}
            </div>
        </div>
    );
}
const styles = {
    box1: {
        width: "100vw",
    },
    slidepic: {
        display: "flex"
    }
};
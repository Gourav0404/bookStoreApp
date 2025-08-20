import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';

const Freebook = () => {
  const location = useLocation();

  // Detect initial slidesToShow based on window width
  const getSlidesToShow = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 600) return 2;
    return 3;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());


  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // use dynamic value
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-app-wine-six.vercel.app/book");
        setBook(res.data.filter((book) => book.category === "free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])

  return (
    <div className="max-w-screen-2xl mx-auto container px-4 md:px-20">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="slider-container">
        {/* Route change ke saath remount karne ke liye */}
        <Slider {...settings} key={location.key}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;

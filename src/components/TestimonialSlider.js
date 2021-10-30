import React from "react";
import Slider from "react-slick";
import TestiSliderItem from "./TestiSliderItem.js";
export default function TestimonialSlider() {
  const testiSliderData = [
    {
      clientName: "Winson henry",
      location: "America",
      clientPhoto: "https://randomuser.me/api/portraits/women/71.jpg",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
    {
      clientName: "Winson henry",
      location: "America",
      clientPhoto: "https://randomuser.me/api/portraits/women/71.jpg",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
    {
      clientName: "Winson henry",
      location: "America",
      clientPhoto: "https://randomuser.me/api/portraits/women/71.jpg",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
    {
      clientName: "Winson henry",
      location: "America",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
    {
      clientName: "Winson henry",
      location: "America",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
    {
      clientName: "Winson henry",
      location: "America",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
          initialSlide: 2,
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
  return (
    <>
      <Slider {...settings}>
        {testiSliderData.map((data, index) => (
          <TestiSliderItem key={index + " testimonial"} testimonials={data} />
        ))}
      </Slider>
    </>
  );
}

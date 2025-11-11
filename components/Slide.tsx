'use client';
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Slide() {
  const sliderRef = useRef<Slider>(null);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const width = window.innerWidth;

    setSettings({
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "ease-out",
      slidesToShow: width < 576 ? 1 : width < 992 ? 2 : width < 1200 ? 3 : 3,
      slidesToScroll: 1,
      centerMode: width < 576 ? true : false,
      centerPadding: width < 576 ? "50px" : "0px",
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3, centerMode: false },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2, centerMode: false },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1, centerMode: true, centerPadding: "50px" },
        },
      ],
    });

  }, []);

  if (!settings) return null; // 초기 SSR 시 렌더링 막기

  return (
    <Slider ref={sliderRef} {...settings} className="slider">
      <div><Image src="/images/slider_1.jpg" alt="image" width={1366} height={1025} /></div>
      <div><Image src="/images/slider_2.jpg" alt="image" width={1366} height={1025} /></div>
      <div><Image src="/images/slider_4.jpg" alt="image" width={1366} height={1025} /></div>
      <div><Image src="/images/slider_5.jpg" alt="image" width={1366} height={1025} /></div>
      <div><Image src="/images/slider_6.jpg" alt="image" width={1366} height={1025} /></div>
      <div><Image src="/images/slider_7.jpg" alt="image" width={1366} height={1025} /></div>
    </Slider>
  );
}

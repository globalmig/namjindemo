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
      {[1, 2, 4, 5, 6, 7].map((num) => (
        <div key={num} className="w-full px-2.5 overflow-x-hidden">
          <Image
            src={`/images/slider_${num}.jpg`}
            alt="철거 전문 남진철거"
            className="w-full h-auto rounded-xs pc:rounded-4xl"
            width={1366}
            height={1025}
            sizes="(max-width: 576px) 85vw, (max-width: 992px) 50vw, 34vw"
          />
        </div>
      ))}
    </Slider>
  );
}

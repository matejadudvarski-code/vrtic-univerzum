import { useEffect, useRef } from "react";
import "../styles/scroll.css";

const aktivnosti1 = [
    {
      name: "Likovni Kabinet",
      body: "Amazing experience. Highly recommend!",
      img: "/public/images/Umetnicki-centar.jpg",
    },
    {
      name: "Muzički Kabinet",
      body: "Very helpful and professional staff.",
      img: "/public/images/Muzicki-centar.jpg",
    },
    {
      name: "Montesori Kabinet",
      body: "A pleasure to work with this team.",
      img: "/public/images/montesori kabinet2_1920x1280.webp",
    },
    {
      name: "Naučni Kabinet",
      body: "Top notch quality and delivery.",
      img: "/public/images/Naucni-istrazivacki-centar.jpg",
    },
    {
      name: "Sala za Sport",
      body: "Exceeded expectations in every way.",
      img: "/public/images/sala_1920x1280.webp",
    },
    {
      name: "Senzorna Soba",
      body: "Fantastic experience all around.",
      img: "/public/images/senzorna_soba_2276x1280.jpg",
    },
    {
      name: "Slana Soba",
      body: "Fantastic experience all around.",
      img: "/public/images/slana soba_1920x1280.webp",
    },
    {
      name: "Baby Space",
      body: "Fantastic experience all around.",
      img: "/public/images/baby space 2_1920x1280.webp",
    },
    {
      name: "Dvorište",
      body: "Fantastic experience all around.",
      img: "/public/images/dvoriste_1920x1280.webp",
    },
    {
      name: "Logopedski Kabinet",
      body: "Fantastic experience all around.",
      img: "/public/images/logopedski kabinet_1920x1280.webp",
    },
    {
      name: "Psihološka Podrška",
      body: "Fantastic experience all around.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "Nutricionista",
      body: "Fantastic experience all around.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "Kuhinja",
      body: "Fantastic experience all around.",
      img: "/public/images/Kuhinja_1920x1280.webp",
    },
  ];
  
  const AktivnostCard = ({ img, name, body }) => (
    <div className="card mx-3 flex-shrink-0" style={{ width: "500px" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
  
  export default function MarqueeBootstrap() {
    const scrollingCards = [...aktivnosti1, ...aktivnosti1];
  
    return (
      <div className="marquee-wrapper">
      <div className="marquee-container py-4">
        <div className="marquee-track d-flex">
          {scrollingCards.map((r, idx) => (
            <AktivnostCard key={`top-${idx}`} {...r} />
          ))}
        </div>
      </div>

        <div className="marquee-container py-4 reverse">
        <div className="marquee-track reverse-track d-flex">
          {scrollingCards.map((r, idx) => (
            <AktivnostCard key={`bottom-${idx}`} {...r} />
          ))}
        </div>
      </div>
      </div>
    );
  }


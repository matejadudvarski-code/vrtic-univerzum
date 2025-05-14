import { useEffect, useRef } from "react";
import "../styles/scroll.css";

const aktivnosti1 = [
    {
      name: "Likovni Kabinet",
      body: "Neki opis.",
      img: "/images/Umetnicki-centar.jpg",
    },
    {
      name: "Muzički Kabinet",
      body: "Neki opis.",
      img: "/images/Muzicki-centar.jpg",
    },
    {
      name: "Montesori Kabinet",
      body: "Neki opis.",
      img: "/images/montesori kabinet2_1920x1280.webp",
    },
    {
      name: "Naučni Kabinet",
      body: "Neki opis.",
      img: "/images/Naucni-istrazivacki-centar.jpg",
    },
    {
      name: "Sala za Sport",
      body: "Neki opis.",
      img: "/images/sala_1920x1280.webp",
    },
    {
      name: "Senzorna Soba",
      body: "Neki opis.",
      img: "/images/senzorna_soba_2276x1280.jpg",
    },
    {
      name: "Slana Soba",
      body: "Neki opis.",
      img: "/images/slana soba_1920x1280.webp",
    },
    {
      name: "Baby Space",
      body: "Neki opis.",
      img: "/images/baby space 2_1920x1280.webp",
    },
    {
      name: "Dvorište",
      body: "Neki opis.",
      img: "/images/dvoriste_1920x1280.webp",
    },
    {
      name: "Logopedski Kabinet",
      body: "Neki opis.",
      img: "/images/logopedski kabinet_1920x1280.webp",
    },
    {
      name: "Psihološka Podrška",
      body: "Neki opis.",
      img: "/images/scroll/scroll6.jpg",
    },
    {
      name: "Nutricionista",
      body: "Neki opis.",
      img: "/images/scroll/scroll6.jpg",
    },
    {
      name: "Kuhinja",
      body: "Neki opis.",
      img: "/images/Kuhinja_1920x1280.webp",
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


import { useEffect, useRef } from "react";
import "../styles/scroll.css";

const aktivnosti1 = [
    {
      name: "Jack",
      body: "Amazing experience. Highly recommend!",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "Jill",
      body: "Very helpful and professional staff.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "John",
      body: "A pleasure to work with this team.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "Jane",
      body: "Top notch quality and delivery.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "James",
      body: "Exceeded expectations in every way.",
      img: "/public/images/scroll/scroll6.jpg",
    },
    {
      name: "Jenny",
      body: "Fantastic experience all around.",
      img: "/public/images/scroll/scroll6.jpg",
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


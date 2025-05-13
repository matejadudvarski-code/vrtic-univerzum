// src/components/ConfettiHero.jsx
import React, { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";

export default function ConfettiHero() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🎉', '✨', '💫'],
      confettiRadius: 6,
      confettiNumber: 80,
    });
  }, []);

  return <></>;
}

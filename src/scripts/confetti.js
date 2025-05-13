import JSConfetti from 'js-confetti';

document.addEventListener('DOMContentLoaded', () => {
  const jsConfetti = new JSConfetti();

  setTimeout(() => {
    jsConfetti.addConfetti({
      confettiNumber: 100,
      emojis: ['🎉', '✨'],
      emojiSize: 24,
      spread: 90,
      origin: { x: 0.1, y: 1 }, // left bottom
    });

    jsConfetti.addConfetti({
      confettiNumber: 100,
      emojis: ['🎉', '✨'],
      emojiSize: 24,
      spread: 90,
      origin: { x: 0.9, y: 1 }, // right bottom
    });
  }, 500);
});

const pickRandom = () => {
  const objets = document.querySelectorAll(".tag");
  return objets[Math.floor(Math.random() * objets.length)];
};
const agregarColor = (tg) => {
  tg.classList.add("highlight");
};
const quitarColor = (tg) => {
  tg.classList.remove("highlight");
};
export const seleccionRandom = () => {
  const time = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandom();
    if (randomTag !== undefined) {
      agregarColor(randomTag);
      setTimeout(() => {
        quitarColor(randomTag);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandom();
      agregarColor(randomTag);
    }, 100);
  }, time * 100);
};

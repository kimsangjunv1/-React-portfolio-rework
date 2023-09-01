import Lenis from "@studio-freight/lenis";

const lenis = () => {
  const lenis = new Lenis({
    duration: 0.3,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default lenis;

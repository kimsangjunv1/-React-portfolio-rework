import Lenis from "@studio-freight/lenis";

const lenis = () => {
  const lenis = new Lenis({
    duration: 1,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default lenis;

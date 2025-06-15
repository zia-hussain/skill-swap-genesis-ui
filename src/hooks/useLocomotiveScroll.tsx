
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
export function useLocomotiveScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      multiplier: 1.03,
      inertia: 0.11,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      class: "is-reveal"
    });
    return () => {
      scroll.destroy();
    };
  }, []);
}

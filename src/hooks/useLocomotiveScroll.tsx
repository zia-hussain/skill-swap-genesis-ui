
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function useLocomotiveScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true, // smooth on desktop
      multiplier: 1.03,
      inertia: 0.11,
      smartphone: { smooth: false }, // USE NATIVE SCROLLING ON MOBILE
      tablet: { smooth: false },     // USE NATIVE SCROLLING ON TABLET
      class: "is-reveal"
    });
    return () => {
      scroll.destroy();
    };
  }, []);
}

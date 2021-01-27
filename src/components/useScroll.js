import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();

  const [element, view] = useInView({ threshold: 0.4 });
  if (view) {
    controls.start("show");
  }
  return [element, controls];
};

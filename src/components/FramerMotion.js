export const containerAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 1 } },
};

export const layerAnim = {
  hidden: { width: "0" },
  show: { width: "50%", transition: { duration: 0.5 } },
};

export const popAnim = {
  hidden: { x: "-50%", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } },
};

export const listAnim = {
  show: { transition: { staggerChildren: 0.2 } },
};

export const scrollAnim = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 300 },
  },
};

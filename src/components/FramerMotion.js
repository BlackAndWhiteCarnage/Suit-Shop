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

export const shakeAnim = {
  hidden: { y: 0 },
  show: {
    y: 10,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 300,
      repeat: Infinity,
    },
  },
};

export const scaleAnim = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const scaleRotateAnim = {
  hidden: { scale: 0, rotate: 360 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
};

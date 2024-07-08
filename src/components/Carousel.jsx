import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Carousel = ({ images = [] }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex overflow-auto"
        dragConstraints={{ right: 0, left: -width }}
        transition={{ duration: 0.8 }}
      >
        {images.map((item, index) => (
          <motion.div
            className="min-h-[50px] min-w-[200px] px-[12px]"
            key={index}
          >
            <img
              src={item}
              alt="cars"
              className="w-[100%] h-[90%] rounded-[12px] pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

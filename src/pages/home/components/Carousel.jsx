import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import carsOne from "@/assets/images/carsOne.jpg";
import carsTwo from "@/assets/images/carsTwo.jpg";
import carsThree from "@/assets/images/carsThree.jpg";
import carsFour from "@/assets/images/carsFour.jpg";

const images = [carsOne, carsTwo, carsThree, carsFour];
export const Carousel = () => {
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
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((item, index) => (
          <motion.div
            className="min-h-[200px] min-w-[333px] px-[12px]"
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

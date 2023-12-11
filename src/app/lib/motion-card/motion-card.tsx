import Image, { StaticImageData } from "next/image";
import "./motion-card.css";
import { motion, Variants } from "framer-motion";
import classNames from "classnames";
import PolygonImage from "@/../public/polygon.png";

const cardVariants: Variants = {
  offscreen: {
    y: "100%",
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface Props {
  className?: string;
  src: StaticImageData;
  alt?: string;
}

function MotionImageCard({ className, src, alt }: Props) {
  return (
    <motion.div
      className={classNames(className, "card-container")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <Image
        className="polygon w-full -z-0 absolute bottom-0"
        src={PolygonImage}
        alt={"Shape"}
      />
      <motion.div className="card" variants={cardVariants}>
        <Image className="w-full" src={src} alt={alt || "Image"} />
      </motion.div>
    </motion.div>
  );
}

export default MotionImageCard;

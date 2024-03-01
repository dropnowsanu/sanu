"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(0, 183, 235, 1)",
    },
  };
  return (
    <Link href={"/"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="h-12 w-12 border rounded-full flex items-center justify-center shadow-sm text-4xl font-bold text-sky-500 border-teal-300 p-2"
      >
        S
      </motion.div>
    </Link>
  );
};

export default Logo;

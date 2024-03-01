"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { El_Messiri } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const messiri = El_Messiri({ subsets: ["latin"] });

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-t-lg sm:h-80 order-last lg:h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full bg-gradient-to-bl from-teal-50/80 via-white/5 via-50% to-sky-50/30 rounded-tr-full pl-10 pt-4 dark:from-blue-950 dark:via-slate-800 dark:to-blue-950/20"
            >
              <Image
                alt="img"
                src="/images/banner.png"
                width={300}
                height={310}
                className="absolute object-cover"
              />
              <Image
                alt="img"
                src="/images/pattern-1.svg"
                width={24}
                height={24}
                className="absolute top-6 left-5 md:left-1"
              />
              <Image
                alt="img"
                src="/images/pattern-2.svg"
                width={28}
                height={28}
                className="absolute top-12 right-11 md:right-32"
              />
              <Image
                alt="img"
                src="/images/pattern-3.svg"
                width={28}
                height={28}
                className="absolute bottom-10 left-4 md:left-1 animate-bounce duration-1000"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="img"
                  src="/images/pattern-4.svg"
                  width={28}
                  height={28}
                  className="absolute bottom-20 md:right-32 right-10 animate-ping duration-1000"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:py-24 space-y-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-semibold tracking-wide text-slate-600"
            >
              Hello Everyone!
            </motion.span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 sm:text-4xl"
            >
              <span className={`${messiri.className} text-4xl md:text-6xl font-bold dark:text-slate-300`}>
                I'm
              </span>
              <span
                className={`${messiri.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400`}
              >
                <Typewriter
                  options={{
                    strings: ["Developer", "Social Worker"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-gray-600"
            >
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex w-full max-w-sm items-center relative"
            >
              <Input
                type="email"
                placeholder="Type your email address"
                className="h-14 border-teal-400 bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200 dark:from-slate-400 dark:via-slate-500 dark:to-slate-600"
              />
              <Button
                type="submit"
                className="absolute right-2 flex items-center gap-1 bg-gradient-to-r from-sky-500 from-10% via-sky-400 via-50% to-teal-400 to-90%"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

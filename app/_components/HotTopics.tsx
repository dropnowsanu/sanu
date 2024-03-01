"use client";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { El_Messiri } from "next/font/google";

const messiri = El_Messiri({ subsets: ["latin"] });

type Props = {};

const Cards = [
  {
    id: 1,
    name: "Movie",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/sport.png",
  },
  {
    id: 2,
    name: "Sports",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img2.jpg",
  },
  {
    id: 3,
    name: "Technology",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/movie.png",
  },
  {
    id: 4,
    name: "Healthy",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/lifestyle.png",
  },
  {
    id: 5,
    name: "Interviews",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/sport.png",
  },
  {
    id: 6,
    name: "Design",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png",
  },
  {
    id: 7,
    name: "Healthy",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/lifestyle.png",
  },
  {
    id: 8,
    name: "Interviews",
    articale: 10,
    img: "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/sport.png",
  },
];

const HotTopics = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [slicedCards, setSlicedCards] = useState(1);
  const [startSlice, setStartSlice] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Slice cards based on window width
    if (windowWidth <= 768) {
      // Change the value according to your breakpoint for mobile
      setSlicedCards(1);
      setStartSlice(0);
    } else {
      setSlicedCards(6);
      setStartSlice(0);
    }
  }, [windowWidth, Cards]);

  const handleLeft = () => {
    if (startSlice > 0) {
      setStartSlice(startSlice - 1);
      setSlicedCards(slicedCards - 1);
    }
  };
  const handleRight = () => {
    if (slicedCards != Cards.length && startSlice != Cards.length - 1) {
      setStartSlice(startSlice + 1);
      setSlicedCards(slicedCards + 1);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="border mx-8 p-6 border-slate-300 shadow-lg bg-gradient-to-l from-slate-200 via-sky-50 to-slate-200 rounded-md shadow-teal-500/10 dark:fom-slate-800 dark:via-slate-500 dark:to-slate-600 dark:border-sky-400">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
          <div className="col-span-1 space-y-4">
            <h2 className={`${messiri.className} text-2xl font-bold dark:text-slate-300`}>
              Hot topics
              </h2>
            <p className="text-sm text-muted-foreground">
              Don't miss out on the latest news about Travel tips, Hotels
              review, Food guide...
            </p>
            <div className="flex items-center gap-4">
              <ArrowLeftCircleIcon
                onClick={() => handleLeft()}
                className={`${
                  startSlice === 0 && "text-muted-foreground"
                } w-6 h-6 cursor-pointer`}
              />
              <ArrowRightCircleIcon
                onClick={() => handleRight()}
                className={`${
                  slicedCards === Cards.length && "text-muted-foreground"
                } w-6 h-6 cursor-pointer`}
              />
            </div>
          </div>
          {Cards.slice(startSlice, slicedCards).map((card) => (
            <div key={card.id} className="relative">
              <Image
                alt="img"
                src={card.img}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-md cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 hover:shadow-sm shadow-sky-500/30"
              />
              <div className="absolute left-2 bottom-6">
                <h3 className="font-bold text-slate-50">{card.name}</h3>
                <p className="text-sm text-slate-200">
                  Articles {card.articale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotTopics;

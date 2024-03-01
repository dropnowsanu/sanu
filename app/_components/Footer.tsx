import Logo from "@/components/Logo";
import NewsLatter from "@/components/NewsLatter";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Categories = [
  {
    id: 1,
    name: "Design",
    url: "/work/design",
  },
  {
    id: 2,
    name: "Healthy",
    url: "/work/healthy",
  },
  {
    id: 3,
    name: "Interviews",
    url: "/work/interviews",
  },
  {
    id: 4,
    name: "Lifestyle",
    url: "/work/lifestyle",
  },
  {
    id: 5,
    name: "Sports",
    url: "/work/sports",
  },
  {
    id: 6,
    name: "Technology",
    url: "/work/tech",
  },
  {
    id: 7,
    name: "Travel Tips",
    url: "/work/travel",
  },
  {
    id: 8,
    name: "Music",
    url: "/work/music",
  },
];

const Footer = (props: Props) => {
  return (
    <div className="w-full h-full py-6">
      <div className="max-w-7xl mx-auto p-10 border rounded-3xl border-slate-300 shadow-sm bg-gradient-to-bl from-teal-50 via-sky-50 to-green-50 dark:from-blue-950/30 dark:via-slate-800 dark:to-gray-950/50 dark:border-teal-400">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-6">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-slate-600">
              When an unknown prnoto sans took a galley and scrambled it to make
              specimen book not only five When an unknown prnoto sans took a
              galley and scrambled it to five centurie.
            </p>
            <div>
              <h2 className="font-bold text-lg text-slate-700 dark:text-slate-400">Address</h2>
              <p className="text-slate-600">
                123 Main Street New York, NY 10001
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-lg text-slate-700 dark:text-slate-400">Categories</h2>
            <div className="grid grid-cols-2 justify-between items-center gap-2">
              {Categories.map((category) => (
                <Link
                  href={category.url}
                  key={category.id}
                  className="text-slate-500 hover:text-slate-950"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-lg text-slate-700 dark:text-slate-400">Newsletter</h2>
            <NewsLatter />
          </div>
        </div>
        <Separator />
        <div className="pt-6 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-1">
            <span className="text-slate-600">
              &copy; {new Date().getFullYear()} Created by
            </span>
            <Link href={"/"} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-orange-400 via-30% to-teal-500">
              Sanu Islam
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-1 text-slate-600 cursor-pointer hover:text-black">
              <Facebook className="w-5 h-5" />
              Facebook
            </span>
            <span className="flex items-center gap-1 text-slate-600 cursor-pointer hover:text-black">
              <Github className="w-5 h-5" />
              Github
            </span>
            <span className="flex items-center gap-1 text-slate-600 cursor-pointer hover:text-black">
              <Instagram className="w-5 h-5" />
              Instagram
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

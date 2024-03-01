"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { usePathname } from "next/navigation";

type Props = {};

const Links = [
  {
    id: 1,
    name: "Home",
    tag: "home",
    link: "/",
    duration: 0.8,
  },
  {
    id: 2,
    name: "About Me",
    tag: "about",
    link: "/about",
    duration: 1,
  },
  {
    id: 3,
    name: "Works",
    tag: "work",
    link: "/work",
    duration: 1.2,
  },
  {
    id: 4,
    name: "Contact",
    tag: "contact",
    link: "/contact",
    duration: 1.4,
  },
];

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="w-full h-full mb-10">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Logo />
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:flex items-center gap-8 hidden"
          >
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className={`${
                  pathname === link.link && "text-cyan-500"
                } text-slate-600 text-lg hover:text-cyan-500`}
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 2 }}
              transition={{ duration: 0.5 }}
            >
              <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-slate-900" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.5 }}
              transition={{ duration: 1.5 }}
            >
              <ModeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.5 }}
              transition={{ duration: 1.5 }}
            >
              <Button className="bg-gradient-to-r from-sky-500 from-10% via-sky-400 via-50% to-teal-400 to-90% hidden md:block">
                Subscribe
              </Button>
              <Menu className="w-7 h-7 sm:hidden" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Ueberschrift from "./ueberschrift";
import Sidebar from "./sidebar";
export default function Component() {
  return (
    <div className="bg-transparent min-h-screen text-black flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
            <h2 className="ml-4 font-bold">henri</h2>
            <nav className="mr-4">
                <Link className="underline" href="/contakt">
                    contakt
                </Link>
            </nav>
        </div>
      <div className="flex flex-col p-3 w-6/12 rounded-md bg-gray-200 mt-10 dark:bg-slate-700">
        <div className="flex dark:text-white">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
            whileHover={{ color: "rgb(21, 92, 133)" }}
          >
            Hey{" "}
          </motion.h2>
          <motion.h2
            className="text-3xl"
            whileHover={{ rotate: 20 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {""}✌️
          </motion.h2>
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ,
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex dark:text-white"
        >
          ich heiße Henri, bin 13 Jahre alt und liebe das Programmieren. Ich
          programmiere seit ich 11 Jahre alt bin fast täglich. Tätig bin ich am
          meisten in der Webentwicklung. Weitere Hobbies sind Ui- und Uxdesign,
          sowie Grafikdesign und Videoschnitt.{" "}
        </motion.div>
      </div>
      <Ueberschrift title="Skills"/>
      <Sidebar titleOne="NextJs" titleTwo="TailwindCss" linkOne="https://nextjs.org" linkTwo="https://tailwindcss.com" />
      <Sidebar titleOne="Express" titleTwo="Python" linkOne="https://expressjs.com" linkTwo="https://python.org" />
      <Sidebar titleOne="NextJs" titleTwo="TailwindCss" linkOne="https://nextjs.org" linkTwo="https://tailwindcss.com" />
    </div>
  );
}

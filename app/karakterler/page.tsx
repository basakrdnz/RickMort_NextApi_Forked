"use client";
import { motion, Variants } from "framer-motion";

import Button from "@/components/Button";
import { FILTERS_FOR_LESSONS } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PocoCards {
  image: string;
  name: string;
  id: string;
  species: string;
  gender: string;
  api: string;
}
const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: -100,
    rotate: -360,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Cards = ({ image, name, id, species, gender, api }: PocoCards) => {
  return (
    <div className="flex mt-24 flex-col w-1/2 m-auto font-bold  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 border-8 border-yellow-200 rounded-lg gap-5 justify-between p-4 cursor-pointer">
      <div className="flex justify-between py-8 rounded-lg ">
        <div className="flex w-1 h-20 bg-blue-400 "></div>
        <div>{name} </div>
        <div className="flex w-1 h-10 bg-blue-400 "></div>
        <div>Species: {species} </div>
        <div className="flex w-1 h-20 bg-blue-400 "></div>
      </div>

      <div className="mx-auto">
        <Image src={image} alt={""} width={300} height={200}></Image>
      </div>
      <div className="flex justify-between">
        <h2>Gender</h2>
        <div>{gender} </div>
      </div>

      <div className="h-[0px] w-96 border-4 border-blue-400 mx-auto"></div>
      <div className="flex justify-between">
        <div>ID: {id}</div>
        <Button title={"Select"} variant={"white"}></Button>
      </div>
    </div>
  );
};

const Tutors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/rick/api/character");
        const data = await response.json();
        //sadece ilk 3 karakteri almak için
        const firstThreeCharacters = data.results.slice(0, 10);
        console.log(firstThreeCharacters);
        setData(firstThreeCharacters);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  return (
    <section
      id="karakterler"
      className="container flex flex-col m-auto px-20 my-10"
    >
      <div>
        <div id="upper_search_bar" className="flex justify-between mx-3">
          <div className="flex w-3/5 h-16 rounded-md shadow-2xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <Image
              src="/search_icon.png"
              alt={"search_icon"}
              width={10}
              height={20}
              className="p-5 h-auto w-auto"
            ></Image>

            <input
              type="text"
              placeholder="Karakter İsmi"
              className="h-10 w-64 my-auto p-5 rounded-full"
            />
            <div className="flex h-6 w-0 border-2 my-auto ml-10"></div>
            <input
              type="text"
              placeholder="Bölüm İsmi"
              className="h-10 w-64 m-auto p-5 rounded-full"
            />
            <div className="my-auto mr-4">
              <Button
                title={"Search"}
                variant={"white"}
                icon="/search_icon.png"
              ></Button>
            </div>
          </div>
          <div className="flex relative bg-red-300 p-2 px-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <select
              name="popular_lessons"
              id="popular_lessons"
              className=" w-96 h-12 text-black border-2 rounded-full my-auto "
            >
              <option value="Popular Lesson"></option>
              <option value="A"></option>
              <option value="B"></option>
              <option value="C"></option>
            </select>
            <Image
              src="/show_icon.png"
              alt={"show"}
              width={70}
              height={50}
              className="flex absolute p-6 top-1"
            ></Image>
          </div>
        </div>
        <div
          id="bottom_search_bar"
          className="flex flex-wrap justify-between gap-4 items-center container text-white my-5"
        >
          {FILTERS_FOR_LESSONS.map((lesson) => (
            <div className=" p-4 px-5  border-2 rounded-lg shadow-lg text-lg cursor-pointer bg-gradient-to-b from-blue-500 via-green-500 to-green-500">
              {lesson.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-6 justify-between">
        {data.map((rickandmortyapi: any) => (
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="splash" />
            <motion.div className="card" variants={cardVariants}>
              <Cards
                image={rickandmortyapi.image}
                name={rickandmortyapi.name}
                id={rickandmortyapi.id}
                species={rickandmortyapi.species}
                gender={rickandmortyapi.gender}
                api={rickandmortyapi.url}
              ></Cards>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tutors;

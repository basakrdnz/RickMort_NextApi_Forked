import React from "react";
import Button from "./Button";
import Image from "next/image";
import { COUNTRY_URL, PEOPLE_URL } from "@/constants";

interface JoinedPeople {
  title: string;
  morePeople: string;
}
const PeopleJoined = ({ title, morePeople }: JoinedPeople) => {
  return (
    <div
      className={`absolute font-bold bottom-10 pl-7 flex flex-col bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 -left-36  rounded-xl h-28 w-60 z-3`}
    >
      <Image
        src={"/Chart.png"}
        alt={"upperImage"}
        width={40}
        height={40}
        className="flex absolute -ml-7 "
      ></Image>
      <p className={`flex text-black text-lg mt-4 ml-6`}>{title}</p>
      <div className="flex my-auto pl-5">
        <span className="flex overflow-hidden  -space-x-4">
          {PEOPLE_URL.map((url) => (
            <Image
              src={url}
              alt="person"
              key={url}
              width={56}
              height={56}
              className="inline-block rounded-full h-10 w-10"
            ></Image>
          ))}
          <div
            className={`bg-green-700 rounded-full h-11 w-11 font-bold text-center pt-2 text-white`}
          >
            {morePeople}
          </div>
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex flex-col md:m-10 md:mx-20 md:p-10 container h-screen md:justify-around">
      <div className="flex md:flex-row flex-col md:justify-around">
        <div className="flex flex-col md:w-1/2 gap-10 p-10">
          <div className="flex text-white">
            <p>Rick and Morty</p>
            <div className="w-36 h-0 border border-white my-auto ml-3"></div>
          </div>
          <h1 className="text-5xl font-bold tracking-widest">
            Rick, Morty'yi farklı evrenlere götürerek
            <strong className="text-white"> sıra dışı </strong>
            deneyimler yaşatıyor
          </h1>
          <p className="text-gray-400 font-light">
            Bu Başak'ın yeni şeyler öğrenirken oluşturduğu örnek bir sitedir...
          </p>
          <Button title={"Bu deneyimi yaşa"} variant={"white"}></Button>
        </div>
        <div className="h-[500px] w-96 relative bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full">
          <div className="absolute rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-28 h-28 mt-20 -ml-10 z-30">
            <Image
              src="/indir__2_-removebg-preview.png"
              alt={"heroimg1"}
              width={80}
              height={100}
              className="ml-4 mt-3"
            ></Image>
          </div>
          <div className="absolute rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-28 h-28 ml-64 -mt-5 z-30">
            <Image
              src="/indir__3_-removebg-preview.png"
              alt={"heroimg2"}
              width={140}
              height={180}
            ></Image>
          </div>
          <div className="absolute rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-28 h-28 mt-60 ml-80 z-30">
            <Image
              src="/indir__4_-removebg-preview.png"
              alt={"heroimg3"}
              width={140}
              height={180}
            ></Image>
          </div>
          <div className="overflow-hidden rounded-full absolute top-20 ">
            <Image
              src="/Rick_And_Morty_Sticker-removebg-preview.png"
              alt={""}
              width={800}
              height={1500}
            ></Image>
          </div>
          <PeopleJoined title="10+ Karakterler" morePeople="5+"></PeopleJoined>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mt-10 md:gap-40 md:mx-40">
        <div className="flex flex-col md:w-1/2 gap-5 ">
          <p className="text-orange-500">BURASI NERESİ?</p>
          <h1 className="text-4xl font-bold">Başak'ın disko temalı sitesi</h1>
          <div className="flex">
            <p className="text-orange-500">Teşekkürler..</p>
            <div className="w-[136px] h-0 border border-orange-400 my-auto ml-5"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-neutral-500 text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna
            nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet
            ullamcorper et, ante venenatis.
          </p>
          <div className="flex gap-10">
            <div className="grid grid-cols-3 md:flex gap-6 cursor-pointer">
              {COUNTRY_URL.map((url) => (
                <Image
                  src={url}
                  alt="countries"
                  key={url}
                  width={60}
                  height={50}
                  className="md:inline-block shadow-[0_0px_20px_0px_rgba(0,0,0,0.4)] rounded-full max-w-full max-h-full "
                ></Image>
              ))}
            </div>
            <a href="/karakterler">
              <button
                className="text-orange-500 flex m-auto relative"
                id="view_all"
              >
                View all
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  height={30}
                  width={30}
                  className="flex absolute left-14 -top-1 ml-2"
                ></Image>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*import Image from "next/image";
import Button from "./Button";

interface HeroImageProps {
  backgroundImage: string;
  peopleImage: string;
  tutorsOnline: string;
  circle_1: string;
  circle_2: string;
  circle_3: string;
}

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex border-2 border-red-600 container m-auto h-[550px] mt-10"
    >
      <div className="flex flex-col gap-5 m-24">
        <div className="flex">
          <h2 className="text-orange-400">We are The Best </h2>
          <div className="w-[136px] h-[0px] border border-orange-400 my-auto"></div>
        </div>
        <h1>
          Learn Frome Home With<strong> The Best </strong>Online Languange
          Tutors
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
          dui mollis . Suspendisse nulla :
        </p>
        <Button title={"Try Free Lessons"} variant={"green"}></Button>
      </div>
      <HeroImage></HeroImage>
    </section>
  );
};

const HeroImage = () => {
  return (
    <section className="flex relative bg-gradient-to-r from-yellow-500 to-pink-500 h-full w-96 rounded-full ml-10">
      <Image src="/images/people_1.png" alt={"people"} height={100} width={100}></Image>
      <div className="absolute bg-red-500 border-white border-4 rounded-full w-28 h-28 left-80 bottom-48 -mb-20"></div>
      <div className="absolute bg-red-500 border-white border-4 rounded-full w-28 h-28 left-80 top-10 mr-10"></div>
      <div className="absolute bg-red-500 border-white border-4 rounded-full w-28 h-28 mt-36 -left-12"></div>
      <div className="bg-white absolute flex rounded-lg border-2 border-pink-700 h-20 w-52 bottom-20 -ml-32"></div>
    </section>
  );
};

export default Hero;*/

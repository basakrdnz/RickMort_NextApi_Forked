import Image from "next/image";
import React from "react";
import Button from "./Button";
import { NAVBAR_LİNKS } from "@/constants";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="flex justify-around p-5">
        <Link href={"/"}>
          <h1 className="font-bold mt-5 text-lg">MortyPortalı</h1>
        </Link>
        <ul className="my-auto hidden md:flex" id="navbar-default">
          {NAVBAR_LİNKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="p-5 hover:text-yellow-400 hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="md:flex gap-5 hidden" id="navbar-default">
          <Button title={"Giriş"} variant={"blue"}></Button>
          <Button title={"Üye ol"} variant={"yellow"}></Button>
        </div>
        <div className="md:hidden">
          <Hamburger></Hamburger>
        </div>
      </div>
      <div className="w-[1500px] h-[0px] border border-stone-300 m-auto"></div>
    </section>
  );
};

export default Navbar;

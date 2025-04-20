import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "radix-ui";
import { List, X } from "phosphor-react";
import logo from "../assets/overwatch-logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenu.Root className="
      md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2
      bg-white/90 backdrop-blur-md shadow-lg md:rounded-xl
      px-6 py-3 md:w-[97%] list-none
      flex items-center gap-6 z-50
      flex-wrap md:flex-nowrap
    ">

      {/* Logo */}
      <NavigationMenu.Item className="ml-4">
        <NavigationMenu.Link asChild className="select-none leading-none p-3">
          <Link to='/'>
            <img src={logo} alt="Logo Overwatch" className="w-10 h-10" />
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      {/* Botão Mobile */}
      <button
        className="ml-auto block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <List size={28} />}
      </button>

      {/* Links */}
      <div
        className={`w-full flex-col md:flex-row md:flex md:items-center md:justify-between 
    ${isOpen ? "flex mt-4 gap-4" : "hidden md:flex"}`}
      >
        {/* Grupo de links */}
        <div className="flex flex-col md:flex-row gap-4">
          <NavigationMenu.Item>
              <Link to='/herois' className="select-none leading-none rounded-lg hover:bg-[#F1742B] hover:text-white text-gray-600 p-3 font-semibold">
                Heróis
              </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
              <Link to='/mapas' className="select-none leading-none rounded-md hover:bg-[#F1742B] hover:text-white text-gray-600 p-3 font-semibold">
                Mapas
              </Link>
          </NavigationMenu.Item>
        </div>

        {/* Botão */}
        <NavigationMenu.Item className="w-full md:w-auto mt-4 md:mt-0">
          <NavigationMenu.Link
            target="_blank"
            href="https://overwatch.blizzard.com/pt-br/"
            className="select-none leading-none text-gray-600 block"
          >
            <button className="bg-[#F1742B] text-white px-4 py-3 rounded-md font-semibold hover:bg-orange-400 w-full md:w-auto">
              Visite o site oficial
            </button>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </div>

    </NavigationMenu.Root>
  );
}

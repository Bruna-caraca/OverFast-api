import React from "react";
import { useNavigate } from 'react-router-dom';
import { mostrarIconeRole } from "../utils/utils";


export function HeroCard({ name, role, portrait, heroKey }) {
    const navigate = useNavigate();
  return (
    <div 
        onClick={() => navigate(`/herois/${heroKey}`)}
        className="bg-white rounded-2xl shadow-lg overflow-hidden w-40 sm:w-48 hover:scale-105 transition-transform duration-300">
      <img
        src={portrait}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="flex gap-3 p-3 text-center">
      <img className="w-6" src={mostrarIconeRole(role)} />
        <span className="font-bold text-gray-800">{name}</span>
      </div>
    </div>
  );
}

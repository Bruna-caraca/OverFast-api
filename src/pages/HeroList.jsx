import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import fundoHerois from '../assets/fundo-herois.png';
import { HeroCard } from '../components/Card';
import { fetchHeroes } from '../services/api';
import { Loader } from '../components/Loader';
import { useNavigate, useSearchParams } from 'react-router-dom';

const filters = [
  { label: "Todos", value: "all" },
  { label: "Tanque", value: "tank" },
  { label: "Dano", value: "damage" },
  { label: "Suporte", value: "support" },
];

export function HeroList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "all"
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(role);

  useEffect(() => {
    setSelectedFilter(role);
  }, [role]);

  useEffect(() => {
    setLoading(true);
    fetchHeroes(role)
      .then((data) => {
        setHeroes(data);
        setLoading(false);
      });
  }, [role]);

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
    navigate(`/herois?role=${newFilter}`);
  };

  if (loading) return <Loader />;

  return (
    <div className='relative'>
      <Header />
      <div className="relative w-full h-[30vh] md:h-[60vh]">
        <img src={fundoHerois} alt="Fundo Heróis" className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-[#377FD4]/50 flex items-center justify-center'>
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Heróis</h1>
        </div>
      </div>
      <section className='bg-[#377FD4] py-16 px-4 md:px-10 min-h-[400px]'>
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`
                  px-6 py-2 rounded-md font-semibold transition
                  ${selectedFilter === filter.value
                  ? "bg-white text-[#F1742B]"
                  : "bg-white/20 text-white hover:bg-white/30"
                }
                `}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] px-4"
        >
          {heroes.map((hero) => (
            <HeroCard
              key={hero.key}
              name={hero.name}
              role={hero.role}
              portrait={hero.portrait}
              heroKey={hero.key}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
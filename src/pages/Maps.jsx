import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import fundoMapas from '../assets/fundo-mapas.png'
import { fetchGamemodes, fetchMaps } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { MapCard } from '../components/MapCard';
import { BackToTopButton } from '../components/BackToTopButton';

export function Maps() {
    const navigate = useNavigate();
    const [gamemodes, setGamemodes] = useState([]);
    const [maps, setMaps] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const selectedGamemode = gamemodes.find(mode => mode.key === selectedFilter);

    useEffect(() => {
        setLoading(true);
        fetchGamemodes()
            .then((data) => {
                setGamemodes(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchMaps(selectedFilter)
            .then((data) => {
                setMaps(data);
                setLoading(false);
            });
    }, [selectedFilter]);

    const handleFilterChange = (newFilter) => {
        setSelectedFilter(newFilter);
        navigate(`/mapas?gamemode=${newFilter}`);
    };

    if (loading) return <Loader />;

    return (
        <div className='relative'>
            <Header />
            <div className="relative w-full h-[30vh] md:h-[60vh]">
                <img src={fundoMapas} alt="Fundo Mapas" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Mapas</h1>
                </div>
            </div>
            <section className='bg-black py-16 px-4 md:px-10 min-h-[400px] w-full justify-center'>
                <div className="overflow-x-auto w-full whitespace-nowrap sm:flex-wrap sm:overflow-visible flex gap-2 mb-10 md:justify-center">
                    <button
                        onClick={() => setSelectedFilter(null)}
                        className={`
                            ml4-4 px-4 py-2 rounded-md font-medium transition whitespace-normal break-words text-sm md:text-base
                            ${selectedFilter === null ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
                        `}
                    >
                        All
                    </button>
                    {gamemodes.map(filter => (
                        <button
                            key={filter.key}
                            onClick={() => handleFilterChange(filter.key)}
                            className={`
                                flex items-center gap-2 md:px-6 px-3 py-2 rounded-md font-medium transition text-sm md:text-base min-w-max justify-center
                                ${selectedFilter === filter.key
                                    ? "bg-white text-black"
                                    : "bg-white/20 text-white hover:bg-white/30"
                                }
                            `}
                        >
                            <img 
                                key={filter.key}
                                src={filter.icon} 
                                alt="Ícone modo de jogo" 
                                className={`
                                md:w-8 w-6
                                ${selectedFilter === filter.key
                                    ? "invert"
                                    : ""
                                }
                            `}
                            />
                            {filter.name}
                        </button>
                    ))}
                </div>
                {selectedGamemode && (
                    <div className="text-white text-center mb-8 flex flex-col items-center gap-4 px-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={selectedGamemode.icon}
                                alt={`Ícone de ${selectedGamemode.name}`}
                                className="w-8 h-8"
                            />
                            <h2 className="text-2xl md:text-3xl font-semibold">{selectedGamemode.name}</h2>
                        </div>
                        <p className="max-w-3xl text-sm md:text-base text-white/80">
                            {selectedGamemode.description}
                        </p>
                    </div>
                )}
                <div className="flex flex-wrap gap-4 justify-center">
                    {maps.map(item =>
                        <MapCard
                            key={item.name}
                            name={item.name}
                            screenshot={item.screenshot}
                            location={item.location}
                            gamemodes={item.gamemodes}
                            showGamemode={!selectedFilter}
                        />
                    )}
                </div>
            </section>
            <BackToTopButton />
        </div>
    )
}
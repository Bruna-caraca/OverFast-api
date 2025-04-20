import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchHeroDetails } from '../services/api';
import { Header } from '../components/Header';
import { heroImageSizes, mostrarIconeRole, traduzirRole } from '../utils/utils';
import { iconPlace, iconBirthday } from '../utils/consts'


export function HeroInfo() {
  const { heroKey } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetchHeroDetails(heroKey).then(data => setHero(data));
  }, [heroKey]);

  if (!hero) return <p className="text-center mt-10 text-gray-500">Carregando...</p>;

  const heroImage = new URL(`../assets/heroes/${heroKey}-full-body.webp`, import.meta.url).href;

  return (
    <div className="relative min-h-screen bg-[#377FD4] text-white">
      <Header />
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-4 pt-20 pb-10 md:pt-32 md:pb-20">
        {/* Card de Informações */}
        <div className="bg-white/20 bg-opacity-60 backdrop-blur-lg text-white p-6 rounded-2xl shadow-lg z-10 max-w-lg md:max-w-sm w-full md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.name}</h1>
          <p className="text-md leading-relaxed text-white/90">{hero.description}</p>
          <div className="flex mt-2">
            <img className="w-6 invert" src={mostrarIconeRole(hero.role)} />
            <span className="text-md m-2">{traduzirRole(hero.role)}</span>
          </div>
          {console.log(heroKey)}
          <div className="flex">
            <img className='w-6' src={iconPlace} />
            <span className="text-md m-2">{hero.location}</span>
          </div>
          <div className="flex">
            <img className='w-6' src={iconBirthday} />
            <span className="text-md m-2">{`${hero.birthday} (${hero.age} ${hero.age > 1 ? 'anos' : 'ano'})`}</span>
          </div>
        </div>

        {/* Imagem herói */}
        <div className={`relative md:-mt-0 z-20 ${heroImageSizes[heroKey]}`}>
          <img src={heroImage} alt={hero.name} className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
}

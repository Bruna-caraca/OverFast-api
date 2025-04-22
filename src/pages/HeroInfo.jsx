import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchHeroDetails } from '../services/api';
import { Header } from '../components/Header';
import { heroImageSizes, mostrarIconeRole, traduzirRole } from '../utils/utils';
import { iconPlace, iconBirthday } from '../utils/consts'
import { Loader } from '../components/Loader';
import { BookBookmark, CaretDown, Pause, Play } from 'phosphor-react';
import { Accordion } from 'radix-ui';
import { BackToTopButton } from '../components/BackToTopButton';

export function HeroInfo() {
  const videoRef = useRef(null);
  const { heroKey } = useParams();
  const [hero, setHero] = useState(null);
  const [selectedAbility, setSelectedAbility] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    fetchHeroDetails(heroKey).then(data => setHero(data));
  }, [heroKey]);

  useEffect(() => {
    setActiveImage(hero?.story?.chapters[0]?.picture)
  }, hero)

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.includes("watch")
      ? new URLSearchParams(new URL(url).search).get("v")
      : url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getTipoMedia = (tipoMedia) => {
    if (tipoMedia === 'comic') {
      return 'Ver Quadrinho'
    }
    else if (tipoMedia === 'short-story') {
      return 'Ler conto completo'
    }
    else return null;
  }

  const handleImageChange = (index) => {
    setActiveImage(hero?.story?.chapters[index].picture);
  };

  if (!hero) return <Loader />;

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
          <div className="flex">
            <img className='w-6' src={iconPlace} />
            <span className="text-md m-2">{hero.location}</span>
          </div>
          <div className="flex">
            <img className='w-6' src={iconBirthday} />
            <span className="text-md m-2">{`${hero.birthday === null ? 'Desconhecido' : hero.birthday} (${hero.age} ${hero.age > 1 ? 'anos' : 'ano'})`}</span>
          </div>
        </div>
        <div className={`relative md:-mt-0 z-20 ${heroImageSizes[heroKey]}`}>
          <img src={heroImage} alt={hero.name} className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>
      {hero.abilities?.length > 0 && (
        <div className="relative aspect-video w-full md:h-[80vh] h-[90vh]">
          <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-4xl md:text-4xl font-bold text-white drop-shadow-lg z-20 uppercase">
            Habilidades
          </h2>
          <video
            ref={videoRef}
            src={hero.abilities[selectedAbility]?.video?.link.mp4}
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black/80 to-black/20 px-4 pb-10" />
          <button
            onClick={togglePlay}
            className="
              absolute 
              top-4 left-4 
              md:top-auto md:bottom-4
              z-40 
              bg-gray-600/70 rounded-full p-2 
              backdrop-blur-sm hover:bg-gray-500/40 transition"
          >
            {isPlaying ? <Pause weight='fill' className="w-6 h-6" /> : <Play weight='fill' className="w-6 h-6" />}
          </button>

          <div className="absolute z-20 bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 py-6">
            {/* Botões das habilidades */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
              {hero.abilities.map((ability, index) => (
                <button
                  key={ability.name}
                  onClick={() => setSelectedAbility(index)}
                  className={`w-16 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transition border-2
                    ${selectedAbility === index
                      ? "border-white bg-white/50"
                      : "border-transparent bg-white/20 hover:bg-white/30"
                    }`}
                >
                  <img
                    src={ability.icon}
                    alt={ability.name}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}

            </div>

            {/* Descrição da habilidade */}
            <div className="text-center text-white max-w-3xl mx-auto text-sm sm:text-base">
              <p className="font-bold mb-1">{hero.abilities[selectedAbility].name}</p>
              <p className="opacity-80">{hero.abilities[selectedAbility].description}</p>
            </div>
          </div>
        </div>
      )}
      <section className="bg-black text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            História
          </h2>

          <p className='mb-8'>{hero?.story?.summary}</p>
          {hero.story?.media?.type === "video" ? (
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src={getYoutubeEmbedUrl(hero.story?.media?.link)}
                title={`História de ${hero.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : hero.story?.media !== null ? (
            <a
              href={hero.story?.media?.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex gap-2 bg-[#F1742B] hover:bg-[#d36223] text-white font-semibold px-6 py-3 rounded-md transition shadow-lg items-center justify-center"
            >
              <BookBookmark weight='bold' size={20} />
              {getTipoMedia(hero?.story?.media?.type)}
            </a>
          ) : null}

          <p className="max-w-3xl text-center text-lg leading-relaxed text-gray-300">
            {hero.story?.text}
          </p>

        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row bg-gradient-to-b from-[#0049B7] to-[#007AFF] text-white">
        {/* Accordion */}
        <div className="w-full md:w-1/2 px-6 py-10">
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-0"
            onValueChange={(value) => {
              const index = parseInt((value)?.split('-')[1] || '0', 10);
              handleImageChange(index);
            }}
            className="space-y-4"
          >
            {hero.story?.chapters.map((chapter, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20 pb-4"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full text-left font-bold text-lg uppercase transition flex justify-between items-center">
                    {chapter.title}
                    <CaretDown className="ml-2 transition-transform duration-400 ease-in-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-md text-white data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {chapter.content}
                </Accordion.Content>

              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Imagem lateral */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={activeImage}
            alt="Imagem da história"
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
}

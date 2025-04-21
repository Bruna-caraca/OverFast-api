import React from 'react';
import { Header } from '../components/Header';
import fundoMapas from '../assets/fundo-mapas.png'

export function Maps() {
    return (
        <div className='relative'>
            <Header />
            <div className="relative w-full h-[30vh] md:h-[60vh]">
                <img src={fundoMapas} alt="Fundo Mapas" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Mapas</h1>
                </div>
            </div>
            <section className='bg-black py-16 px-4 md:px-10 min-h-[400px]'>

            </section>
        </div>
    )
}
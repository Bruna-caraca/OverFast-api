import React from 'react';
import fundoDesktop from "../assets/fundo-desktop.png"
import fundoMobile from "../assets/fundo-mobile.jpg"
import logo2 from "../assets/overwatch2-logo.avif"
import { Header } from '../components/Header';

export function Home() {
    return (
        <div className='relative'>
            <Header />
            <div className='relative w-full h-screen'>
                <img src={fundoDesktop} alt="Fundo" className='w-full h-screen object-cover absolute z-0 hidden md:block inset-0'/>
                <img src={fundoMobile} alt="Fundo" className='w-full h-screen object-cover absolute z-0 md:hidden block'/>
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40'/>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <img src={logo2} height="51px" alt="Logo Overwatch 2" className='md:w-90 w-50'/>
                    <h1 className="text-white md:text-4xl font-bold m-8 uppercase">Conheça mais sobre o jogo</h1>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import logo from '../assets/overwatch-logo.png'

export function Loader() {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-gray-500">
            <img src={logo} alt="Logo" className="w-14 h-14 animate-pulse" />
            <p className="text-sm uppercase tracking-widest">Carregando dados...</p>
        </div>

    )
}
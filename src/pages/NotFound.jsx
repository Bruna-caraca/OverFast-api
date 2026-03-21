import { useRef } from "react";

export function NotFound() {
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6"
        >
            {/* GRID DE FUNDO */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* LUZ DO MOUSE */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `radial-gradient(300px circle at var(--x) var(--y), rgba(249,115,22,0.25), transparent 60%)`,
                }}
            />

            <div className="relative z-10 text-center">
                <h1 className="text-7xl md:text-9xl font-extrabold text-orange-500 tracking-widest drop-shadow-[0_0_20px_rgba(249,115,22,0.7)]">
                    404
                </h1>

                <div className="w-32 h-1 bg-orange-500 mx-auto my-6 shadow-[0_0_15px_#f97316]" />

                <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
                    Página não encontrada. Você saiu da zona de combate.
                </p>

                <a
                    href="/"
                    className="inline-block mt-10 px-8 py-3 bg-orange-500 text-black font-bold uppercase tracking-wider border border-orange-500 transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_20px_#f97316]"
                >
                    Voltar para base
                </a>
            </div>
        </div>
    );
}
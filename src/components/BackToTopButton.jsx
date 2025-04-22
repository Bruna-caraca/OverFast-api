import { useEffect, useState } from "react";
import { ArrowUp } from "phosphor-react";

export function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 rounded-full bg-white/10 text-white shadow-lg hover:bg-white/20 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Voltar ao topo"
        >
            <ArrowUp size={24} weight="bold" />
        </button>
    );
}

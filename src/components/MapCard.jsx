import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function MapCard({ name, gamemodes, screenshot, location, showGamemode }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div
                    className="bg-white rounded-2xl overflow-hidden w-56 md:w-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    <img
                        src={screenshot}
                        alt={name}
                        className="w-full h-40 object-cover"
                    />
                    <div className="gap-3 p-3 text-center">
                        <p className="font-bold text-gray-800">{name}</p>
                        <p className="text-gray-800">{location}</p>
                        {showGamemode &&
                            gamemodes.map((item, idx) =>
                                <span key={idx} className="text-gray-800 capitalize block">{item}</span>
                            )
                        }
                    </div>
                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 max-w-6xl w-[90%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl overflow-hidden shadow-lg z-50 outline-none"
                    aria-describedby={`Imagem do mapa ${name}`}
                >
                    <Dialog.Title />
                    <img src={screenshot} alt={name} className="w-full object-cover" />
                    <div className="p-4 text-center">
                        <p className="text-lg font-bold text-gray-800">{name}</p>
                        <p className="text-gray-600">{location}</p>
                        {showGamemode &&
                            gamemodes.map((item, idx) =>
                                <span key={idx} className="text-gray-600 capitalize block">{item}</span>
                            )
                        }
                    </div>

                    <Dialog.Close className="absolute top-2 right-2 text-black hover:text-gray-800">
                        <X className="h-6 w-6"/>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

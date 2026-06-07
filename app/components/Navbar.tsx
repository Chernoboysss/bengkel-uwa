"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Bengkel UWA"
                        width={50}
                        height={50}
                    />

                    <div>
                        <h1 className="text-sm font-bold text-slate-900 md:text-xl">
                            BENGKEL UWA
                        </h1>

                        <p className="hidden text-xs text-slate-500 md:block">
                            Ketok Magic • Body Repair • Cat Mobil
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="/"
                        className="font-medium text-slate-700 hover:text-blue-600"
                    >
                        Home
                    </a>

                    {/* <a
                        href="#layanan"
                        className="font-medium text-slate-700 hover:text-blue-600"
                    >
                        Layanan
                    </a>


                    <a
                        href="#testimoni"
                        className="font-medium text-slate-700 hover:text-blue-600"
                    >
                        Testimoni
                    </a>

                    <a
                        href="#kontak"
                        className="font-medium text-slate-700 hover:text-blue-600"
                    >
                        Kontak
                    </a> */}

                    <a
                        href="/dokumentasi"
                        className="font-medium text-slate-700 hover:text-blue-600"
                        
                    >
                        Galeri
                    </a>

                    <a
                        href="https://wa.me/6285693495820"
                        target="_blank"
                        className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                    >
                        Hubungi Kami
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    className="rounded-lg bg-slate-100 p-2 text-slate-800 shadow-sm md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white shadow-lg md:hidden">
                    <div className="flex flex-col p-4">

                        <a
                            href="/"
                            className="py-3 text-slate-800 font-medium hover:text-blue-600"
                        >
                            Home
                        </a>

                        {/* <a
                            href="#layanan"
                            className="py-3 text-slate-800 font-medium hover:text-blue-600"
                        >
                            Layanan
                        </a>

                        <a
                            href="#testimoni"
                            className="py-3 text-slate-800 font-medium hover:text-blue-600"
                        >
                            Testimoni
                        </a>

                        <a
                            href="#kontak"
                            className="py-3 text-slate-800 font-medium hover:text-blue-600"
                        >
                            Kontak
                        </a> */}

                        <a
                            href="/dokumentasi"
                            className="py-3 text-slate-800 font-medium hover:text-blue-600"
                        >
                            Galeri
                        </a>

                        <a
                            href="https://wa.me/6285693495820"
                            target="_blank"
                            className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-center text-white"
                        >
                            Hubungi Kami
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}
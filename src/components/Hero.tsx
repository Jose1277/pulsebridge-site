"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center">
            {/*Logo absolute top left*/}
            <div className="absolute top-6 left-6 z-10">
                <Image src="/logo.png" alt="PulseBridge Logo" width={300} height={80} />
            </div>

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/nurse-hero.jpg')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-turquesa via-blue to-navy opacity-75" />

            <div className="relative text-center px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Your path to nursing in the United States starts with honest guidance
                </motion.h1>

                {/* TODO: Button link to application form */}
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    href="#apply"
                    className="inline-block bg-turquesa text-dark font-semibold px-8 py-4 rounded-full hover:brightness-110 transition"
                >
                    Apply for Pre-Screening
                </motion.a>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 text-white/80"
                >
                    Realistic expectations • No false promises
                </motion.p>
            </div>
        </section>
    );
}
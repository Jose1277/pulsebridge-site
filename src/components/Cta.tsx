"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Cta() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section ref={ref} className="py-32" style={{ background: "var(--gradient-hero)" }}>
            <motion.div
                style={{ scale, opacity }}
                className="max-w-5xl mx-auto px-4 text-center"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to start your journey?
                </h2>

                <p className="text-lg text-white-100 mb-10">
                    Complete our pre-screening application and take the first step toward your future in the United States
                </p>

                <a
                    href="#apply"
                    className="inline-block bg-white text-navy font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform"
                >
                    Apply Here
                </a>
            </motion.div>
        </section >
    );
}
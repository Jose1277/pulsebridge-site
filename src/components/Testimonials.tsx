"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
    {
        quote: "Clear steps, realistic expectations, and real support when I needed it.",
        name: "Maria L., RN",
        location: "California",
    },
    {
        quote: "Finally someone who understood the EB-3 process because she's living it too.",
        name: "Carlos R., RN",
        location: "Florida",
    },
    {
        quote: "She was honest about timelines from day one. No surprises, no false hope.",
        name: "Sarah M., RN",
        location: "Texas",
    },
];

export default function Testimonials() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.floor(latest * testimonials.length),
            testimonials.length - 1
        );
        setCurrentIndex(index);
    });

    return (
        <section ref={containerRef} className="h-[200vh] relative">
            <div className="sticky  top-0 md:h-screen h-[100svh] flex items-center justify-center bg-neutral-100">
                <div className="max-w-4xl mx-auto px-4 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">
                        What Nurses Say
                    </h2>

                    <div className="relative h-64 overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x: (currentIndex - index) * 100 + "%",
                                    opacity: index === currentIndex ? 1 : 0.3,
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-2xl w-full">
                                    <p className="text-xl italic text-neutral-700 mb-6">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="w-12 h-1 bg-turquesa mx-auto mb-4" />
                                    <p className="font-semibold text-navy">{testimonial.name}</p>
                                    <p className="text-neutral-500">{testimonial.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
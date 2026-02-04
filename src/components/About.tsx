"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const achievements = [
    "200+ nurses supported",
    "3+ years recruiting experience",
    "Currently in EB-3 process",
];

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const opacityLeft = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const xLeft = useTransform(scrollYProgress, [0, 0.5], [-300, 0]);

    const opacityRight = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const xRight = useTransform(scrollYProgress, [0, 0.5], [300, 0]);

    return (
        <section ref={ref} className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div style={{ opacity: opacityLeft, x: xLeft }}>
                        <Image
                            src="/josilene.jpg"
                            alt="Josilene Duarte"
                            width={448}
                            height={448}
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div style={{ opacity: opacityRight, x: xRight }}>
                        <span className="inline-block px-4 py-2 bg-turquesa/10 text-turquesa rounded-full text-sm font-medium mb-6">
                            About the Recruiter
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                            Who guides you through this process?
                        </h2>

                        <h3 className="text-2xl font-semibold text-navy mb-2">Josilene Duarte</h3>

                        <p className="text-neutral-600 mb-6">
                            Registered Nurse • Independent Recruiter • EB-3 Candidate
                        </p>

                        <blockquote className="border-l-4 border-turquesa pl-4 mb-8 bg-navy text-white p-4 rounded-r-lg">
                            <p className="italic">
                                I'm going through the same EB-3 process I help others navigate. I know what works, what takes time, and what to expect.
                            </p>
                        </blockquote>

                        <div className="space-y-3">
                            {achievements.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-turquesa" />
                                    <span className="text-neutral-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
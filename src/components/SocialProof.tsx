"use client";

import { color, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "3+", label: "Years experience", color: "text-navy" },
    { value: "EB-3", label: "Licensed RN in process", color: "text-[color:var(--blue)]" },
    { value: "200+", label: "Nurses supported", color: "text-turquesa" },
];

function StatItem({ stat, index, scrollYProgress }: {
    stat: { value: string; label: string; color: string };
    index: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scrollYProgress: any;
}) {
    const start = index * 0.15;
    const end = start + 0.3;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const x = useTransform(scrollYProgress, [start, end], [-50, 0]);

    return (
        <motion.div style={{ opacity, x }} className="text-center">
            <p className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
            </p>
            <p className="text-neutral-600">{stat.label}</p>
        </motion.div>
    );
}

export default function SocialProof() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={ref} className="py-20 bg-neutral-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            stat={stat}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
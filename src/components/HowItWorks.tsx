"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, ClipboardList, CheckCircle, Play, Send } from "lucide-react";

const steps = [
    { title: "Contact", description: "Initial conversation via WhatsApp", icon: MessageCircle, color: "turquesa" },
    { title: "Apply", description: "Complete pre-screening form", icon: ClipboardList, color: "blue" },
    { title: "Review", description: "We assess your eligibility", icon: CheckCircle, color: "blue" },
    { title: "Prepare", description: "Resume & interview guidance", icon: Play, color: "navy" },
    { title: "Connect", description: "Referral to partner companies", icon: Send, color: "navy" },
];

export default function HowItWorks() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const colorClasses = {
        turquesa: { active: "border-turquesa text-turquesa", inactive: "border-neutral-100 text-neutral-100" },
        blue: { active: "border-blue text-blue", inactive: "border-neutral-100 text-neutral-100" },
        navy: { active: "border-navy text-navy", inactive: "border-neutral-100 text-neutral-100" },
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    return (
        <section ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen flex items-center justify-center bg-white py-16 md:py-0">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-10 md:mb-16">
                        How It Works
                    </h2>

                    <div className="relative">
                        {/* BG line */}
                        <div className="absolute left-[26px] md:left-6.5 -top-6 md:-top-8 -bottom-6 md:-bottom-8 w-1 bg-neutral-100" />


                        {/* Color line */}
                        <motion.div
                            className="absolute left-[26px] md:left-6.5 -top-6 md:-top-8 w-1 bg-gradient-to-b from-turquesa via-blue to-navy origin-top"
                            style={{
                                scaleY: progress,
                                height: "calc(100% + 48px)",
                            }}
                        />

                        {/* Steps */}
                        <div className="relative flex flex-col">
                            {steps.map((step, index) => {
                                const stepProgress = Math.max(0, Math.min(1, (progress - index * 0.2) / 0.15));
                                const isActive = stepProgress > 0;
                                const Icon = step.icon;
                                const colors = colorClasses[step.color as keyof typeof colorClasses];

                                return (
                                    <div key={index} className="flex gap-6 md:gap-8 pb-12 md:pb-8 last:pb-0">
                                        <div
                                            className={`relative z-10 w-14 h-14 md:w-14 md:h-14 rounded-full border-2 md:border-3 bg-white flex items-center justify-center transition-colors duration-300 ${isActive ? colors.active : colors.inactive}`}
                                        >
                                            <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>

                                        <div className={`pt-1 md:pt-3 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"}`}>
                                            <h3 className="text-lg md:text-xl font-semibold text-navy mb-1">{step.title}</h3>
                                            <p className="text-sm md:text-base text-neutral-600">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, ClipboardList, CheckCircle, Play, Send } from "lucide-react";

const steps = [
    { title: "Contact", description: "Initial conversation via WhatsApp", icon: MessageCircle },
    { title: "Apply", description: "Complete pre-screening form", icon: ClipboardList },
    { title: "Review", description: "We assess your eligibility", icon: CheckCircle },
    { title: "Prepare", description: "Resume & interview guidance", icon: Play },
    { title: "Connect", description: "Referral to partner companies", icon: Send },
];

export default function HowItWorks() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    return (
        <section ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen flex items-center justify-center bg-white">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">
                        How It Works
                    </h2>

                    <div className="relative">
                        {/* BG line */}
                        <div className="absolute left-6.5 top-7 bottom-7 w-1 bg-turquesa/20" />

                        {/* Color line */}
                        <motion.div
                            className="absolute left-6.5 top-7 w-1 bg-gradient-to-b from-turquesa via-blue to-navy origin-top"
                            style={{
                                scaleY: progress,
                                height: 'calc(100% - 56px)'
                            }}
                        />
                        {/* Steps */}
                        <div className="relative flex flex-col">
                            {steps.map((step, index) => {
                                const stepProgress = Math.max(0, Math.min(1, (progress - index * 0.2) / 0.15));
                                const isActive = stepProgress > 0;
                                const Icon = step.icon;

                                return (
                                    <div key={index} className="flex gap-6 pb-8 last:pb-0">
                                        <div
                                            className={`relative z-10 w-14 h-14 rounded-full border-2 border-turquesa flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-turquesa" : "bg-white"
                                                }`}
                                        >
                                            <Icon size={24} className={isActive ? "text-white" : "text-turquesa"} />
                                        </div>

                                        <div className={`pt-3 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"}`}>
                                            <h3 className="text-xl font-semibold text-navy mb-1">{step.title}</h3>
                                            <p className="text-neutral-600">{step.description}</p>
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
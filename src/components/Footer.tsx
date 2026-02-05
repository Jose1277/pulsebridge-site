import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-dark">
            <div className="md:max-w-6xl max-w-full md:mx-auto mx-4 md:px-4 md:py-16 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left place-items-center md:place-items-start">
                    {/* Icon and description */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src="/logo-white.png"
                            alt="PulseBridge"
                            width={180}
                            height={60}
                            className="mb-4"
                        />
                        <p className="text-white/70 max-w-sm">
                            Connecting nurses to the right opportunities with honest guidance.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="w-full flex flex-col items-center md:items-start">
                        <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>

                        <div className="space-y-4 w-full max-w-sm">
                            <a
                                href="https://wa.me/5561912345678"
                                className="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-turquesa transition-colors"
                            >
                                <MessageCircle size={20} />
                                <span>+55 (61) 9 1234-5678</span>
                            </a>

                            <a
                                href="mailto:josilene@pulsebridgesolutions.com"
                                className="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-turquesa transition-colors"
                            >
                                <Mail size={20} />
                                <span>josilene@pulsebridgesolutions.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="w-full flex flex-col items-center md:items-start">
                        <h4 className="text-xl font-semibold text-white mb-6">Disclaimer</h4>
                        <p className="text-white/60 text-sm max-w-sm">
                            PulseBridge Health Solutions provides independent recruitment and candidate guidance only.
                            Employment, immigration, and placement processes are conducted by partner companies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <p className="text-center text-white/50 text-sm">
                        © 2026 PulseBridge Health Solutions LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

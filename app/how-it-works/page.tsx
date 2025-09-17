"use client";

import {
    CheckCircle,
    Shield,
    Send,
    Eye,
    Users,
    Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
    const steps = [
        {
            title: "Submit a Report",
            description:
                "Quickly create a new report by providing details such as title, description, and optional image upload.",
            icon: Send,
        },
        {
            title: "Stay Anonymous & Secure",
            description:
                "Your identity is always protected. Reports are stored securely, ensuring privacy and confidentiality.",
            icon: Shield,
        },
        {
            title: "Track Report Progress",
            description:
                "Monitor your reports as they move from pending to resolution in real time.",
            icon: Eye,
        },
        {
            title: "Resolution & Feedback",
            description:
                "Once resolved, you’ll be notified and can share additional feedback if needed.",
            icon: CheckCircle,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="border-b border-neutral-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            How It Works
                        </h1>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Reporting Made Easy
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8">
                        Our platform is designed to make reporting simple, secure, and
                        anonymous. Whether you want to submit an issue, track its progress,
                        or follow up, we’ve got you covered.
                    </p>
                    <Link
                        href="/auth/signin"
                        className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-500 transition"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/how-it-works-illustration.png"
                        alt="Reporting Illustration"
                        width={450}
                        height={300}
                        className="rounded-lg border border-neutral-800 shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* Steps Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-neutral-200 mb-4">
                        How It Works
                    </h3>
                    <p className="text-neutral-400 text-lg">
                        Four simple steps to submit, track, and resolve reports.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                <step.icon className="w-7 h-7 text-blue-500" />
                            </div>
                            <h4 className="text-lg font-medium text-neutral-200 mb-2">
                                {step.title}
                            </h4>
                            <p className="text-sm text-neutral-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Extra Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center order-2 md:order-1">
                    <Image
                        src="/how-it-works-illustration.png"
                        alt="Security Illustration"
                        width={450}
                        height={300}
                        className="rounded-lg border border-neutral-800 shadow-lg object-cover"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold mb-4">
                        Built with Security in Mind
                    </h3>
                    <p className="text-neutral-400 mb-6">
                        We prioritize your safety and anonymity. With end-to-end
                        encryption and strict privacy measures, your data stays secure.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <Lock className="text-blue-500 w-5 h-5" />
                            <span className="text-neutral-300">
                                End-to-end encryption for sensitive data
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Users className="text-blue-500 w-5 h-5" />
                            <span className="text-neutral-300">
                                Trusted by communities and organizations
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-16 bg-neutral-900/50 border-t border-neutral-800">
                <h3 className="text-3xl font-bold mb-4">
                    Ready to Make a Difference?
                </h3>
                <p className="text-neutral-400 mb-8">
                    Start submitting reports today and help us create a safer community.
                </p>
                <Link
                    href="/auth/signin"
                    className="px-8 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-500 transition"
                >
                    Get Started Now
                </Link>
            </section>
        </div>
    );
}

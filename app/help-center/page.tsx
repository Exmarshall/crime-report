"use client";

import { Shield, Phone, HelpCircle, Mail, Clock } from "lucide-react";

const faqs = [
    {
        question: "Is my report anonymous?",
        answer:
            "Yes. All reports are kept confidential unless you choose to share your identity.",
        icon: <Shield className="w-6 h-6 text-green-400" />,
    },
    {
        question: "How long does it take to get feedback?",
        answer:
            "Reports are reviewed within 24–48 hours. Urgent cases get priority.",
        icon: <Clock className="w-6 h-6 text-yellow-400" />,
    },
    {
        question: "What should I do if I'm in danger right now?",
        answer:
            "Dial the Nigerian emergency number 112 immediately before submitting an online report.",
        icon: <Phone className="w-6 h-6 text-red-400" />,
    },
    {
        question: "How can I contact support?",
        answer:
            "You can reach our support team via email or the contact form on this site.",
        icon: <Mail className="w-6 h-6 text-blue-400" />,
    },
];

const emergencyContacts = [
    { name: "Nigeria Police", number: "112 / 199", color: "text-red-400" },
    { name: "Ambulance (Medical Emergency)", number: "112", color: "text-green-400" },
    { name: "Fire Service", number: "112", color: "text-yellow-400" },
];

export default function HelpCenter() {
    return (
        <div className="min-h-screen bg-black text-white">
            
         

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {/* FAQs */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {faq.icon}
                                    <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-blue-400 transition">
                                        {faq.question}
                                    </h3>
                                </div>
                                <p className="text-neutral-400 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Emergency Contacts */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Nigerian Emergency Contacts
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {emergencyContacts.map((contact) => (
                            <div
                                key={contact.name}
                                className="bg-neutral-900/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-neutral-800 hover:border-blue-600 transition-all text-center"
                            >
                                <p className="font-semibold text-neutral-200">{contact.name}</p>
                                <p className={`text-xl font-bold ${contact.color}`}>
                                    {contact.number}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

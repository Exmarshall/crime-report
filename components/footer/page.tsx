export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/80 backdrop-blur-xl mt-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
                {/* Left */}
                <p>© {new Date().getFullYear()} All rights reserved .  Divine Favour</p>

                {/* Right */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="/privacy"
                        className="hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms"
                        className="hover:text-white transition-colors"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
  
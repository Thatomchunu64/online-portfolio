import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Show if not at the top and not on hero section
            const hero = document.getElementById("home");
            if (!hero) return setShow(window.scrollY > 200);
            const rect = hero.getBoundingClientRect();
            setShow(rect.bottom < 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;
    return (
        <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            <FaArrowUp className="w-5 h-5" />
        </button>
    );
}

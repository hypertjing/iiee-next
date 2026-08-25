"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercentage =
                documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

            setVisible(scrollPercentage >= 10);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <Button
            type="button"
            variant="iieeblue"
            // size="icon"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            aria-label="Scroll to top"
            className="absolute bottom-10 right-10 fixed shadow-xl shadow-[#285987]/60"
        >
            Scroll to top <ArrowUp className="size-4" />
        </Button>
    );
}

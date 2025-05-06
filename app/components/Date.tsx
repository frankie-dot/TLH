"use client";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { Archivo } from "next/font/google";
import Link from "next/link";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400"],
});

const dates = [
  { id: 1, month: "August", num: 15, suffix: "th", city: "Los Angeles" },
  { id: 2, month: "August", num: 20, suffix: "th", city: "New York City" },
  { id: 3, month: "Sept", num: 15, suffix: "th", city: "Sydney" },
  { id: 4, month: "Oct", num: 5, suffix: "th", city: "Tokyo" },
  { id: 5, month: "Oct", num: 10, suffix: "th", city: "London" },
  { id: 6, month: "Oct", num: 10, suffix: "th", city: "London" },
  { id: 7, month: "Oct", num: 10, suffix: "th", city: "London" },
];

function Date() {
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Effect to disable scrolling when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [isOpen]);

  // Effect to calculate and set the container height to fill the rest of the screen
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const newHeight = windowHeight - containerTop;
        setContainerHeight(`${newHeight}px`);
      }
    };

    // Initial calculation
    updateHeight();

    // Update on window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full flex overflow-y-auto items-center justify-start"
      style={{ height: containerHeight }}
    >
      <div className="flex max-w-full w-full flex-col justify-start z-[999] h-full">
        <div 
          className="w-full ticket-cont rounded-lg z-[999] shadow-lg max-w-full h-full overflow-y-auto scrollbar-hide"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
                  }}
>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .buy-button {
              background-color: #FFF8F8;
              color: #000;
              padding: 0.25rem 1rem;
              border-radius: 0.25rem;
              font-weight: 500;
              transition: all 0.2s ease-in-out;
              border: 1px solid rgba(0, 0, 0, 0.1);
            }
            .buy-button:hover {
              background-color: #FFE8E8;
              transform: translateY(-1px);
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
          `}</style>
          {dates.map((item) => (
            <div key={item.id} className="ticket flex items-center justify-between w-full px-4 py-3 border-b border-gray-200 hover:bg-gray-50 bg-black text-white">
              <div className={`${archivo.className} flex items-center justify-start w-[120px]`}>
                {item.month} {item.num}
                {item.suffix}
              </div>
              <div className={archivo.className}>{item.city}</div>

              <Link href="/" id="buy" className={`${archivo.className}`}>
                BUY
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Date;
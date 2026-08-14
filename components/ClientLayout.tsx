"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import bgImage from "../public/background.jpg";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide macOS loader after 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500">
          <FaApple className="text-6xl mb-8 animate-pulse text-neutral-200" />

          <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-neutral-200 rounded-full animate-macProgress" />
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 -z-10 w-full h-full">
            <Image
              src={bgImage}
              alt="Background"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <main className="relative z-10">{children}</main>
        </>
      )}
    </>
  );
}

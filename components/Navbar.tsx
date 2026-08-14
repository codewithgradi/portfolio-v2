"use client";
import { useState } from "react";
import { FaTerminal, FaGlobe } from "react-icons/fa6";
import styles from "@/config/styles.module.css";
import { LuMail } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { MdCalendarToday, MdPerson } from "react-icons/md";

import Window from "@/components/Window";
import About from "@/components/About";
import Contact from "./Contact";
import Chat from "./Chat";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const Navbar = () => {
  // ID of the window currently in focus
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  // Array of window IDs that are minimized
  const [minimizedWindowIds, setMinimizedWindowIds] = useState<number[]>([]);

  const data = [
    {
      id: 1,
      icon: <MdPerson />,
      background: "#0c73e9",
      text: "white",
      title: "About Me",
      component: About,
    },
    {
      id: 2,
      icon: <FaGlobe />,
      background: "skyblue",
      text: "white",
      title: "My Projects",
      component: Projects,
    },
    {
      id: 3,
      icon: <FaTerminal />,
      background: "#272733",
      text: "white",
      title: "Skills & Terminal",
      component: Skills,
    },
    {
      id: 4,
      icon: <MdCalendarToday />,
      background: "white",
      text: "red",
      title: "Work Experience",
      component: Experience,
    },
    {
      id: 5,
      icon: <BsChat />,
      background: "#0aeb60",
      text: "white",
      title: "Chat Bot",
      component: Chat,
    },
    {
      id: 6,
      icon: <LuMail />,
      background: "#0a64eb",
      text: "white",
      title: "Contact",
      component: Contact,
    },
  ];

  // Handle clicking a dock icon
  const handleIconClick = (id: number) => {
    if (activeWindowId === id) {
      // If already open and focused, minimize it
      setMinimizedWindowIds((prev) => [...prev, id]);
      setActiveWindowId(null);
    } else {
      // If minimized or closed, open/restore it
      setMinimizedWindowIds((prev) =>
        prev.filter((windowId) => windowId !== id),
      );
      setActiveWindowId(id);
    }
  };

  // Red Button (X): Completely closes the window
  const handleClose = (id: number) => {
    if (activeWindowId === id) setActiveWindowId(null);
    setMinimizedWindowIds((prev) => prev.filter((windowId) => windowId !== id));
  };

  // Orange Button (-): Minimizes the window to the dock
  const handleMinimize = (id: number) => {
    setMinimizedWindowIds((prev) => [...prev, id]);
    setActiveWindowId(null);
  };

  const ActiveComponent = data.find((d) => d.id === activeWindowId);

  return (
    <>
      {/* macOS Dock Navbar */}
      <nav
        className={`${styles.glassEffect} 
                fixed bottom-6 left-0 right-0 m-auto 
                px-2 sm:px-4 space-x-1 sm:space-x-2 
                py-2 rounded-2xl items-end h-16 sm:h-20 
                w-fit flex z-50`}
      >
        {data.map((d) => {
          const isOpen = activeWindowId === d.id;
          const isMinimized = minimizedWindowIds.includes(d.id);

          return (
            <div
              key={d.id}
              className="relative flex flex-col items-center group mt-auto cursor-pointer"
              onClick={() => handleIconClick(d.id)}
            >
              <p
                style={{ background: d.background, color: d.text }}
                className="font-bold rounded-2xl transition duration-300 ease-in-out transform group-hover:-translate-y-2
                                text-xl sm:text-2xl p-3 sm:p-4 hover:scale-110 shadow-lg"
              >
                {d.icon}
              </p>

              {/* macOS-style Dot Indicator */}
              {(isOpen || isMinimized) && (
                <span
                  className={`w-1.5 h-1.5 rounded-full absolute -bottom-2 transition-all ${
                    isOpen ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              )}
            </div>
          );
        })}
      </nav>

      {/* Window Component */}
      {ActiveComponent && (
        <Window
          title={ActiveComponent.title}
          key={ActiveComponent.id}
          onClose={() => handleClose(ActiveComponent.id)}
          onMinimized={() => handleMinimize(ActiveComponent.id)}
        >
          <ActiveComponent.component />
        </Window>
      )}
    </>
  );
};

export default Navbar;

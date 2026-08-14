import React, { useMemo, useState } from "react";
import styles from "@/config/styles.module.css";
import { motion } from "framer-motion";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimized: () => void;
}

const Window = ({ title, children, onClose, onMinimized }: Props) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const actionMap: { [key: number]: () => void } = useMemo(
    () => ({
      1: onClose,
      2: onMinimized,
      3: handleMaximize,
    }),
    [onClose, onMinimized],
  );

  const controlButtons = [
    { id: 1, color: "#ef4444" }, // Red
    { id: 2, color: "#f59e0b" }, // Orange
    { id: 3, color: "#10b981" }, // Green
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        id="win"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{
          duration: 0.25,
          type: "spring",
          stiffness: 220,
          damping: 22,
        }}
        className={`flex flex-col ${styles.window} rounded-2xl shadow-2xl overflow-hidden bg-neutral-800 border border-neutral-700/50 transition-all duration-300 ${
          isMaximized
            ? "w-full h-full max-w-none max-h-none rounded-none"
            : "w-full max-w-2xl h-auto max-h-[85vh]"
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3 bg-neutral-700/80 rounded-t-2xl shrink-0 border-b border-neutral-600/50">
          <div className="flex space-x-2">
            {controlButtons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={actionMap[btn.id]}
                className="w-3.5 h-3.5 rounded-full transition-transform active:scale-90 focus:outline-none"
                style={{ backgroundColor: btn.color }}
              />
            ))}
          </div>

          <p className="text-white font-medium text-sm truncate px-2 select-none">
            {title}
          </p>

          <div className="w-12" />
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 text-white scrollbar-thin scrollbar-thumb-neutral-600">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Window;

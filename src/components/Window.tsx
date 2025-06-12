"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  width?: string;
  height?: string;
  initialPosition?: { x: number; y: number };
  headerClassName?: string;
  disableFullscreen?: boolean;
}

const Window = ({
  title,
  children,
  onClose,
  width = "800px",
  height = "600px",
  initialPosition,
  headerClassName,
  disableFullscreen,
}: WindowProps) => {
  const [position, setPosition] = useState(() => {
    if (initialPosition) {
      return initialPosition;
    }
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2 - parseInt(width) / 2;
      const centerY = window.innerHeight / 2 - parseInt(height) / 2;
      return { x: centerX, y: centerY };
    }
    return { x: 0, y: 0 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!initialPosition) {
      const centerX = window.innerWidth / 2 - parseInt(width) / 2;
      const centerY = window.innerHeight / 2 - parseInt(height) / 2;
      setPosition({ x: centerX, y: centerY });
    }

    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setIsMaximized(isMobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (isMaximized) return;
    if (target.closest("button")) return;
    if (target.closest("[data-draggable]")) {
      setIsDragging(true);
      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isMaximized) return;

    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;

    setPosition({
      x: newX,
      y: newY,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    }
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(() => onClose(), 300);
  };

  useEffect(() => {
    return () => {
      if (windowRef.current) {
        windowRef.current.releasePointerCapture?.(0);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            width: isMaximized ? "100vw" : width,
            height: isMaximized ? "100vh" : height,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { type: "spring", damping: 25, stiffness: 300 },
            width: { duration: 0.4, ease: "easeInOut" },
            height: { duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed z-50"
          ref={windowRef}
          style={{
            position: "fixed",
            left: isMaximized ? 0 : position.x,
            top: isMaximized ? 0 : position.y,
            width: isMaximized ? "100vw" : width,
            height: isMaximized ? "100vh" : height,
            boxShadow: isDragging
              ? "0 12px 24px rgba(0,0,0,0.35)"
              : "0 8px 20px rgba(0,0,0,0.25)",
            borderRadius: isMaximized ? 0 : 12,
            userSelect: isDragging ? "none" : "auto",
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <div
            className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col cursor-default"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              data-draggable
              className={`title-bar px-4 py-2 border-b border-slate-700 flex items-center justify-between select-none cursor-grab active:cursor-grabbing bg-slate-900/95 ${headerClassName || ""}`}
              onPointerDown={handlePointerDown}
              onDoubleClick={() => {
                if (!disableFullscreen) handleMaximize();
              }}
              style={{ userSelect: "none" }}
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleMinimize}
                  className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:brightness-125 transition-all shadow-md"
                  aria-label="Minimize"
                />
                {!isMobile && !disableFullscreen && (
                  <button
                    onClick={handleMaximize}
                    className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] hover:brightness-125 transition-all shadow-md"
                    aria-label={isMaximized ? "Restore" : "Maximize"}
                  />
                )}
              </div>

              <div className="w-12"></div>
            </div>

            <motion.div
              className="flex-1 overflow-auto bg-slate-800/90 custom-scrollbar"
              animate={{ opacity: isDragging ? 0.9 : 1 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;

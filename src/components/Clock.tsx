"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => setCurrentTime(new Date());

    const now = new Date();
    const initialDelay = 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!mounted) return null;

  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = currentTime
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  return (
    <div className="flex items-center space-x-2 text-xs text-white font-thin font-sans uppercase">
      <span>{formattedDate}</span>
      <span>{formattedTime}</span>
    </div>
  );
};

export default Clock;

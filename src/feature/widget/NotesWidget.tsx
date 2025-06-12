"use client";
import React, { useEffect, useState } from "react";
import { IoFolderOpenSharp } from "react-icons/io5";

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

const LOCAL_KEY = "notes";

const NotesWidget = () => {
  const [latestNotes, setLatestNotes] = useState<Note[]>([]);

  const loadLatestNotes = () => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        const parsed: Note[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const sorted = [...parsed].sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          setLatestNotes(sorted.slice(0, 2));
        } else {
          setLatestNotes([]);
        }
      } catch (e) {
        console.error("Failed to load notes:", e);
        setLatestNotes([]);
      }
    } else {
      setLatestNotes([]);
    }
  };

  useEffect(() => {
    loadLatestNotes();

    const interval = setInterval(() => {
      loadLatestNotes();
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed top-10 left-4
        bg-zinc-900 text-white rounded-2xl shadow-xl w-72
        border border-zinc-700
      "
    >
      <div className="select-none flex items-center gap-2 px-3 py-2 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-t-2xl">
        <IoFolderOpenSharp className="text-white" size={20} />
        <h2 className="text-md font-semibold tracking-wide">Notes</h2>
      </div>
      {latestNotes.length > 0 ? (
        <div className="px-3 py-2 space-y-3 select-text">
          {latestNotes.map((note) => (
            <div key={note.id}>
              <h3 className="font-semibold text-sm truncate">{note.title}</h3>
              <p className="text-sm text-slate-300 mt-1 line-clamp-2">
                {note.content || "No content"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="select-none text-sm text-slate-300 leading-relaxed px-3 py-4">
          You don’t have any notes yet.
        </p>
      )}
    </div>
  );
};

export default NotesWidget;

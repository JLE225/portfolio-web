"use client";
import React, { useEffect, useState } from "react";
import { Plus, Trash } from "lucide-react";
import clsx from "clsx";

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

const LOCAL_KEY = "notes";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setNotes(parsed);
        }
      } catch (e) {
        console.error("Failed to parse notes:", e);
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(notes));
    }, 100);

    return () => clearTimeout(timeout);
  }, [notes]);

  const createNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "New Note",
      content: "",
      updatedAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setTimeout(() => setSelectedNoteId(newNote.id), 0);
  };

  const updateNote = (field: "title" | "content", value: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === selectedNoteId
        ? { ...note, [field]: value, updatedAt: new Date().toISOString() }
        : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = () => {
    if (!selectedNoteId) return;
    const filtered = notes.filter((note) => note.id !== selectedNoteId);
    setNotes(filtered);
    setSelectedNoteId(null);
  };

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  return (
    <div className="flex h-full bg-zinc-900 text-white border border-zinc-700 rounded-lg overflow-hidden shadow-xl">
      <div className="w-64 bg-zinc-800 border-r border-zinc-700 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-700">
          <span className="font-semibold text-sm">Add Notes</span>
          <button
            onClick={createNote}
            className="text-zinc-300 hover:text-white transition"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto select-none custom-scrollbar">
          {notes.length === 0 ? (
            <p className="text-center text-zinc-500 mt-10">No Notes</p>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className={clsx(
                  "group px-4 py-3 text-sm border-b border-zinc-700 hover:bg-zinc-700 overflow-x-hidden relative",
                  selectedNoteId === note.id && "bg-zinc-700 text-white"
                )}
              >
                <div
                  onClick={() => setSelectedNoteId(note.id)}
                  className="cursor-pointer"
                >
                  <div className="font-medium truncate w-full">
                    {note.title || "Untitled"}
                  </div>
                  {note.content && (
                    <div className="text-xs text-gray-400 truncate w-full block">
                      {note.content.split("\n")[0]}
                    </div>
                  )}
                  <div className="text-[10px] text-zinc-500">
                    {new Date(note.updatedAt).toLocaleString(undefined, {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setNotes((prev) => prev.filter((n) => n.id !== note.id));
                    if (selectedNoteId === note.id) {
                      setSelectedNoteId(null);
                    }
                  }}
                  className="absolute right-2 top-3 text-zinc-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                  title="Delete note"
                >
                  <Trash size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex-1 bg-zinc-900 flex flex-col p-6 overflow-hidden">
        {selectedNote ? (
          <>
            <input
              value={selectedNote.title}
              onChange={(e) => updateNote("title", e.target.value)}
              placeholder="Title"
              className="w-full bg-transparent text-2xl font-semibold mb-4 outline-none placeholder:text-zinc-500"
            />
            <textarea
              value={selectedNote.content}
              onChange={(e) => updateNote("content", e.target.value)}
              placeholder="Start writing..."
              className="flex-1 w-full bg-transparent resize-none outline-none text-base placeholder:text-zinc-500 overflow-y-auto custom-scrollbar"
            />
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-zinc-600">
            Select or create a note to begin
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;

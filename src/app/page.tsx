import Header from "@/components/Header";
import AppList from "@/feature/AppList";
import NoteWidget from "@/feature/widget/NotesWidget";

export default function Home() {
  return (
    <div className="text-white min-h-screen w-full bg-slate-900">
      <Header />
      <AppList />
      <NoteWidget />
    </div>
  );
}

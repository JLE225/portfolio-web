import Header from "@/components/Header";
import AppList from "@/feature/AppList";

export default function Home() {
  return (
    <div className="text-text min-h-screen w-full bg-slate-900">
      <Header />
      <AppList />
    </div>
  );
}

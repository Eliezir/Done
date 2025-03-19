import type { ReactNode } from "react";
// import { Sidebar } from ""

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[200px] bg-blue-400" />
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
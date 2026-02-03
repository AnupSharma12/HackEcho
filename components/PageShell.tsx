import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export default function PageShell({
  title,
  description,
  actions,
  children
}: PageShellProps) {
  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-electric-cyan/80">
              HackEcho
            </p>
            <h1 className="text-3xl font-semibold text-chalk-white">{title}</h1>
            {description ? (
              <p className="mt-2 max-w-2xl text-sm text-chalk-white/70">
                {description}
              </p>
            ) : null}
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </header>
        {children}
      </div>
    </main>
  );
}

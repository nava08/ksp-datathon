const sections = [
  'Crime Dashboard',
  'Crime Heatmap',
  'Criminal Network Analysis',
  'Risk Scoring',
  'Predictive Analytics',
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-900">KSP InsightX</h1>
          <span className="text-sm text-slate-600">Karnataka State Police Datathon 2026</span>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">AI-Driven Crime Analytics Platform</h2>
          <p className="mt-2 text-slate-600">
            Foundational dashboard for crime intelligence, hotspot mapping, network analysis, and predictive insights.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900">{section}</h3>
              <p className="mt-2 text-sm text-slate-600">Placeholder module ready for incremental implementation.</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

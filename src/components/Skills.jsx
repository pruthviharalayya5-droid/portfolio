const skillGroups = [
  {
    title: 'Programming',
    items: ['C', 'C++', 'Java', 'Python'],
  },
  {
    title: 'Web / Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend / APIs',
    items: ['Python', 'FastAPI'],
  },
  {
    title: 'AI',
    items: ['Ollama', 'Qwen', 'AI Assistant Development'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Other',
    items: ['Data Structures & Algorithms', 'OSRM', 'Maps & Routing'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Skills</p>
        <h2>Technical foundations and practical interests.</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[26px] border border-slate-800 bg-slate-900/60 p-6 shadow-[0_10px_25px_rgba(2,6,23,0.18)] transition hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-slate-900"
          >
            <h3 className="mb-5 text-lg font-semibold text-slate-100">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/20 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import { Award, Code2, Cpu, Rocket } from 'lucide-react';

const highlights = [
  {
    title: 'Hackathon Participation',
    description: 'Worked in a collaborative environment focused on solving practical problems through software development.',
    icon: Rocket,
  },
  {
    title: 'Smart Logistics Project',
    description: 'Explored maps, routing, and logistics-oriented engineering in a project focused on route-related work.',
    icon: Cpu,
  },
  {
    title: 'JARVIS AI Assistant Project',
    description: 'Built a personal AI assistant project exploring voice interaction, AI models, memory, and modular architecture.',
    icon: Code2,
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Continuously developing problem-solving skills through DSA learning and practical coding practice.',
    icon: Award,
  },
];

function Highlights() {
  return (
    <section id="highlights" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Highlights</p>
        <h2>Consistent learning and hands-on development.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-[24px] border border-slate-800 bg-slate-900/60 p-5 shadow-[0_10px_25px_rgba(2,6,23,0.18)] transition hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-slate-900"
          >
            <div className="mb-4 inline-flex rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;

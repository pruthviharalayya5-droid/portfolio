import { ArrowUpRight, Code2, MapPinned, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Smart Logistics',
    role: 'Maps & Routes Engineer',
    description:
      'A logistics-focused project involving maps, routing, and route optimization.',
    problem:
      'The project addresses logistics planning by working with maps and routing to support efficient movement and route-based decision making.',
    approach:
      'The approach focuses on practical route-related engineering, using map and routing concepts to explore how logistics workflows can be structured around location-aware planning.',
    technology:
      'Python, FastAPI, OSRM, Maps & Routing, Git, GitHub',
    myRole:
      'I worked on the project as the Maps & Routes Engineer, contributing to the routing and mapping aspects of the system.',
    learning:
      'This project strengthened my understanding of route logic, maps integration, and engineering work in a logistics context.',
    cta: [{ label: 'GitHub', href: 'https://github.com/pruthviharalayya5-droid' }],
  },
  {
    title: 'JARVIS — Personal AI Assistant',
    role: 'AI Assistant Project',
    description:
      'A personal AI assistant project built to explore voice interaction, AI models, memory, and modular software architecture.',
    problem:
      'The goal of the project was to explore how an assistant could be structured around voice interaction, model use, and memory while learning practical software design.',
    approach:
      'The project was approached as a learning and building exercise, focused on modular architecture and experimentation with AI-driven interaction.',
    technology:
      'Python, Ollama, Qwen, Voice interaction, Memory, Modular architecture',
    myRole:
      'I explored the project as a hands-on learning experience in AI assistant development, architecture, and model interaction.',
    learning:
      'The work helped me understand how AI assistants can be designed with modular components, memory considerations, and iterative experimentation.',
    cta: [],
  },
  {
    title: 'Hackathon Participation',
    role: 'Collaborative Developer',
    description:
      'A hackathon experience focused on collaborative software development and building a practical technology solution.',
    problem:
      'The hackathon centered on working as a team to solve a real problem through software development, with a practical application in mind.',
    approach:
      'The team worked collaboratively, combining problem solving and development practices to turn an idea into a working prototype or solution.',
    technology:
      'Git/GitHub workflow, team collaboration, problem solving, maps and routing work',
    myRole:
      'I contributed through collaborative development, problem solving, and work connected to maps and routing in the project effort.',
    learning:
      'This experience strengthened my ability to work within a team, manage code through Git/GitHub, and learn through rapid software development.',
    cta: [],
  },
];

const sectionIcons = [MapPinned, Sparkles, Code2];

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Projects</p>
        <h2>Focused work that reflects engineering curiosity and learning.</h2>
      </div>

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => {
          const Icon = sectionIcons[index % sectionIcons.length];

          return (
            <article
              key={project.title}
              className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/60 shadow-[0_18px_50px_rgba(2,6,23,0.28)] transition hover:-translate-y-0.5 hover:border-cyan-500/30"
            >
              <div className="border-b border-slate-800 bg-slate-950/40 p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                        {index + 1}. Project
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-100 md:text-3xl">{project.title}</h3>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
                      {project.role}
                    </p>
                  </div>

                  {project.cta.length > 0 && (
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.cta.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/15"
                        >
                          {label}
                          <ArrowUpRight size={16} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Problem
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{project.problem}</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Approach
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{project.approach}</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Technology
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{project.technology}</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    My Role
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{project.myRole}</p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Engineering / Learning
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">{project.learning}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

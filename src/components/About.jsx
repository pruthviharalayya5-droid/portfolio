import { BrainCircuit, BookOpenText, Lightbulb, Sparkles } from 'lucide-react';

const traits = [
  'Software development',
  'Artificial intelligence',
  'Problem solving',
  'Data structures and algorithms',
  'Building practical projects',
  'Learning new technologies',
];

const icons = [BrainCircuit, BookOpenText, Lightbulb, Sparkles];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">About</p>
        <h2>Building thoughtful software with curiosity and discipline.</h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.28)] md:p-8">
          <p className="text-base leading-8 text-slate-300">
            I am a Computer Science Engineering student at REVA University, Bengaluru, and I am
            interested in software development, artificial intelligence, and problem solving. I enjoy
            learning through projects, exploring how systems work, and turning ideas into practical
            solutions.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            My focus is on building technical skills through real-world work, understanding data
            structures and algorithms, and developing projects that strengthen both engineering and
            learning.
          </p>
        </div>

        <div className="space-y-4">
          {traits.map((trait, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={trait}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_10px_25px_rgba(2,6,23,0.18)] transition hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-300">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200">{trait}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

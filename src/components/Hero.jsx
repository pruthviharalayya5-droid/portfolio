import {
  ArrowDown,
  ArrowRight,
  Code2,
} from 'lucide-react';

function Hero() {
  return (
    <section
      id="top"
      className="section-shell flex min-h-[calc(100vh-73px)] items-center"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE */}
        <div>
          {/* Small heading */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Computer Science Engineering Student
          </p>

          {/* Name */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
            Pruthvi Jagannath
            <span className="block text-slate-400">
              Haralayya
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            I build software projects to understand how technology works,
            solve practical problems, and turn ideas into working systems.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Currently exploring software development, AI, problem solving,
            and real-world engineering projects.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">

            {/* Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View my work
              <ArrowRight size={16} />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Contact me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/pruthviharalayya5-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-200"
            >
              <span className="text-xs font-bold">GH</span>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prithvijagannathharalayya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-200"
            >
              <span className="text-xs font-bold">in</span>
              LinkedIn
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:justify-self-end">
          <div className="relative max-w-sm">

            {/* Main Focus Card */}
            <div className="border border-slate-800 bg-slate-900/60 p-6">

              {/* Card Header */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-4">

                <span className="font-mono text-xs text-slate-500">
                  CURRENT_FOCUS
                </span>

                <span className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Learning
                </span>

              </div>

              {/* Focus Items */}
              <div className="space-y-6">

                {/* Software Development */}
                <div>
                  <div className="mb-2 flex items-center gap-3">

                    <Code2
                      size={19}
                      className="text-cyan-400"
                    />

                    <h3 className="font-semibold text-slate-100">
                      Software Development
                    </h3>

                  </div>

                  <p className="pl-8 text-sm leading-relaxed text-slate-500">
                    Building projects while improving programming,
                    data structures, and development fundamentals.
                  </p>
                </div>

                {/* AI */}
                <div>
                  <div className="mb-2 flex items-center gap-3">

                    <span className="font-mono text-sm font-bold text-cyan-400">
                      AI
                    </span>

                    <h3 className="font-semibold text-slate-100">
                      Exploring AI
                    </h3>

                  </div>

                  <p className="pl-8 text-sm leading-relaxed text-slate-500">
                    Experimenting with practical AI tools and systems
                    through personal projects.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Label */}
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-slate-600">

              <span>
                BUILD → LEARN → IMPROVE
              </span>

              <ArrowDown size={14} />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
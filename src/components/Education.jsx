import { GraduationCap, MapPin, School } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Education</p>
        <h2>Academic foundation in computer science.</h2>
      </div>

      <div className="mt-10 rounded-[28px] border border-slate-800 bg-slate-900/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.28)] md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-100">REVA University, Bengaluru</h3>
              <p className="mt-2 text-base text-slate-300">
                Bachelor&apos;s / Undergraduate Program: Computer Science & Engineering
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-300 md:items-end">
            <div className="flex items-center gap-2">
              <School size={16} className="text-cyan-300" />
              <span>Status: Currently Pursuing</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-300" />
              <span>Expected Graduation: 2029</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

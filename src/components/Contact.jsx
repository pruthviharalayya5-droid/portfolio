import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

const contactItems = [
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=pruthviharalayya5@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pruthviharalayya5-droid',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prithvijagannathharalayya/',
    icon: BriefcaseBusiness,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Contact</p>
        <h2>Let&apos;s connect and build something meaningful.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {contactItems.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === 'Email' || href.startsWith('http') ? '_blank' : undefined}
            rel={label === 'Email' || label === 'LinkedIn' ? 'noopener noreferrer' : href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className={`group flex items-center justify-center gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-slate-100 transition hover:border-cyan-500/40 hover:bg-slate-900 ${
              label === 'Email' ? 'relative z-10 pointer-events-auto' : ''
            }`}
          >
            <div className="inline-flex rounded-xl border border-slate-700 bg-slate-950/80 p-3 text-cyan-300">
              <Icon size={20} />
            </div>
            <span className="text-base font-medium group-hover:text-cyan-300">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;

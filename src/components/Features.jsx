import { Sparkles, Shield, Rocket, Gauge } from 'lucide-react';

const features = [
  {
    title: 'Design Systems',
    description:
      'Cohesive UI foundations that scale. Tokens, components, docs — all wired for speed.',
    icon: Sparkles,
  },
  {
    title: 'Secure by Default',
    description:
      'Security and privacy baked in from day one. Reviews, tooling, and guardrails.',
    icon: Shield,
  },
  {
    title: 'Zero to One',
    description: 'Launch v1 fast with a pragmatic roadmap and crisp execution.',
    icon: Rocket,
  },
  {
    title: 'Operational Excellence',
    description: 'Performance, monitoring, and CI that keep product velocity high.',
    icon: Gauge,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need to build bravely
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            We combine product thinking, tasteful visuals, and reliable engineering into one cohesive team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6 hover:shadow-lg transition shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-sm">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

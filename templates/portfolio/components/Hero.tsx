import { hero } from "../content";

export function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-36 md:pt-40 md:pb-48 bg-gradient-to-br from-ocean via-sky-700 to-wave text-white overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-ocean/60 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-wave/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-white/60">
          {hero.role} · {hero.location}
        </p>
        <h1 className="mt-3 text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-wave">{hero.name}</span>
        </h1>
        <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-xl">
          {hero.headline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={hero.ctaPrimary.href}
            className="inline-block px-6 py-3 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-block px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      {/* wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 fill-paper"
        >
          <path d="M0,60 C240,0 480,80 720,48 C960,16 1200,72 1440,32 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}

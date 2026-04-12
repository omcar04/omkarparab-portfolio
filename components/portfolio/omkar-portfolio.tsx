import DigitalArtSlider from "@/components/portfolio/digital-art-slider";
import Image from "next/image";
import HeroTypewriter from "@/components/portfolio/hero-typewriter";
import { education, experience, projects } from "@/data/portfolio";
import SoccerJuggle from "@/components/portfolio/soccer-juggle";
import SectionReveal from "@/components/portfolio/section-reveal";
import ThemeToggle from "@/components/portfolio/theme-toggle";

const skillGroups = [
  {
    title: "Web Technologies",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Vue", icon: "devicon-vuejs-plain" },
      { name: "NextJS", icon: "devicon-nextjs-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "Oracle", icon: "devicon-oracle-original" },
      {
        name: "Microsoft SQL Server",
        icon: "devicon-microsoftsqlserver-plain",
      },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ],
  },
  {
    title: "Cloud / OS / Tools",
    items: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "macOS", icon: "devicon-apple-original" },
      { name: "Windows", icon: "devicon-windows8-original" },
      { name: "Cloudflare", icon: "devicon-cloudflare-plain" },
    ],
  },
  {
    title: "CI/CD & Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitLab", icon: "devicon-gitlab-plain" },
      { name: "DevOps", icon: "devicon-azuredevops-plain" },
      { name: "JIRA", icon: "devicon-jira-plain" },
      { name: "Confluence", icon: "devicon-confluence-plain" },
    ],
  },
];

const digitalArt = [
  {
    title: "On Their Own Journey",
    src: "/art-journey.png",
  },
  {
    title: "Earth Through The Rim",
    src: "/art-earth-hoop.png",
  },
  {
    title: "Tree In Streetwear",
    src: "/art-tree-fit.jpg",
  },
  {
    title: "Sunset Sips",
    src: "/art-lips-lake.png",
  },
  {
    title: "Paper Boat Drift",
    src: "/art-paper-boat.jpg",
  },
  {
    title: "Creation In Orbit",
    src: "/art-creation-moon.png",
  },
];

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  return (
    <i
      className={`${icon} text-lg leading-none`}
      aria-hidden="true"
      title={name}
    />
  );
}

export default function OmkarPortfolio() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <nav className="sticky top-0 z-40 -mx-6 flex items-center justify-between border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)] px-6 py-5 backdrop-blur md:-mx-10 md:px-10 lg:-mx-12 lg:px-12">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
            <span>Omkar Parab</span>
            <span className="inline-block text-[var(--accent)]">/</span>
            <span>Problem Solver</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
              <a
                href="#about"
                className="transition hover:text-[var(--foreground)]"
              >
                About
              </a>
              <a
                href="#experience"
                className="transition hover:text-[var(--foreground)]"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="transition hover:text-[var(--foreground)]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition hover:text-[var(--foreground)]"
              >
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <section className="grid min-h-[78vh] items-center gap-12 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
          <div>
            <HeroTypewriter />

            <h1 className="max-w-5xl text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-7xl lg:text-[88px]">
              Building clean,
              <br />
              high-performance
              <br />
              digital products.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I&apos;m Omkar - a product-minded full stack engineer focused on
              building thoughtful software across frontend, backend, AI, and
              data. I care about products that feel sharp, useful, and
              well-crafted from system design to user experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1SM5gC3TbJMhQvtc63nWjphOnsqy72_aO/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--button-primary-bg)] bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-medium text-[var(--button-primary-text)] transition hover:opacity-90"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="border border-[var(--button-secondary-border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="relative w-full max-w-sm border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors duration-300">
              <div className="absolute top-4 right-4 z-10 flex items-center gap-3 text-[var(--muted-2)]">
                <a
                  href="mailto:omcar04@gmail.com"
                  aria-label="Email Omkar"
                  className="transition hover:text-[var(--accent)]"
                >
                  <svg
                    className="h-4.5 w-4.5 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/omcarparab/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="transition hover:text-[var(--accent)]"
                >
                  <svg
                    className="h-4.5 w-4.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 18.34V9.68H5.66V18.34H8.34ZM7 8.49A1.56 1.56 0 1 0 7 5.37A1.56 1.56 0 0 0 7 8.49ZM18.34 18.34V13.6C18.34 11.06 16.99 9.5 14.71 9.5C13.61 9.5 12.88 10.1 12.58 10.53V9.68H9.9C9.94 10.24 9.9 18.34 9.9 18.34H12.58V13.5C12.58 13.24 12.6 12.98 12.67 12.79C12.87 12.27 13.33 11.73 14.08 11.73C15.06 11.73 15.46 12.49 15.46 13.6V18.34H18.34Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/omcar04"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="transition hover:text-[var(--accent)]"
                >
                  <svg
                    className="h-4.5 w-4.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.93c.58.1.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36c-.52-1.33-1.28-1.69-1.28-1.69c-1.05-.72.08-.71.08-.71c1.16.08 1.78 1.2 1.78 1.2c1.03 1.77 2.7 1.26 3.36.96c.1-.75.4-1.26.72-1.55c-2.56-.29-5.26-1.28-5.26-5.73c0-1.27.45-2.31 1.2-3.13c-.12-.29-.52-1.46.11-3.04c0 0 .98-.31 3.2 1.19A11.03 11.03 0 0 1 12 6.07c.98 0 1.97.13 2.9.38c2.22-1.5 3.2-1.19 3.2-1.19c.63 1.58.23 2.75.11 3.04c.75.82 1.2 1.86 1.2 3.13c0 4.46-2.7 5.43-5.27 5.72c.42.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              </div>
              <div className="border-b border-[var(--border)] pb-4 pt-2">
                <div className="relative mx-auto h-48 w-full max-w-[15rem] overflow-hidden">
                  <Image
                    src="/omkar-id-photo-v8.png"
                    alt="Portrait of Omkar Parab"
                    fill
                    sizes="240px"
                    className="object-contain object-center [mask-image:linear-gradient(180deg,rgba(0,0,0,1)_72%,rgba(0,0,0,0))]"
                  />
                </div>
              </div>

              <div className="space-y-6 pt-5 text-sm text-[var(--text-soft)]">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    Work
                  </p>
                  <p className="leading-7">
                    Product-minded engineering across frontend, backend, and
                    data with strong attention to clarity, performance, and
                    usability.
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    Exploring
                  </p>
                  <p className="leading-7">
                    LLM-powered workflows, interaction design, distributed
                    system design, and sports-oriented data products.
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    Mindset
                  </p>
                  <p className="leading-7">
                    Engineer brain. Design instinct. Always optimizing for
                    clarity, speed, and feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionReveal>
          <section
            id="about"
            className="grid gap-10 border-t border-[var(--border)] py-20 lg:grid-cols-[0.7fr_1.3fr]"
          >
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Design-led thinking,
              <br />
              engineering-led execution.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[var(--text-soft)] md:text-[1.02rem]">
            <p>
              My journey started in 2014 when I built a website for my football
              team. That first collision of code, design, and personal interest
              made the web feel exciting - and I&apos;ve been building ever
              since.
            </p>
            <p>
              Since then, I&apos;ve worked on consumer platforms, research
              systems, dashboards, analytics products, backend flows, and
              AI-powered tools. I enjoy turning complexity into products that
              feel simple, fast, and intentional.
            </p>
            <p>
              Outside work, I&apos;m into football, digital art, photography,
              and visual design. That creative side shapes how I think about
              products: clean structure, strong pacing, and details that make
              things feel better to use.
            </p>
            <p>
              I care about the way products perform, but also how they feel.
              That means clean systems, deliberate interaction, strong visual
              rhythm, and interfaces that don&apos;t need to shout to stand out.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted-3)]">
              <span className="border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2">
                Full Stack Systems
              </span>
              <span className="border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2">
                AI Workflows
              </span>
              <span className="border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2">
                Sports Data
              </span>
              <span className="border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-2">
                Digital Art
              </span>
            </div>
          </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section
            id="experience"
            className="border-t border-[var(--border)] py-20"
          >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Selected experience
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted-3)]">
              A mix of product engineering, full stack development, research,
              and performance-focused systems work.
            </p>
          </div>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {experience.map((item) => (
              <div
                key={item.company}
                className="grid gap-5 py-8 md:grid-cols-[120px_220px_1fr] md:items-start"
              >
                <div className="flex items-center md:pt-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted-3)]">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-[var(--foreground)]">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
                  {item.blurb}
                </p>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section
            id="projects"
            className="border-t border-[var(--border)] py-20"
          >
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Featured work
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group border border-[var(--border)] bg-[var(--panel)] p-6 transition duration-300 hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    {project.category}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--muted-2)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)]"
                    >
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                  {project.description}
                </p>
                <div className="mt-8 border-t border-[var(--border)] pt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted-3)]">
                  {project.stack}
                </div>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className="border-t border-[var(--border)] py-20">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Tools I use, with room to adapt.
            </h2>
          </div>

          <div className="border border-[var(--border)] bg-[var(--panel)] transition-colors duration-300">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`grid gap-6 px-5 py-5 md:grid-cols-[220px_1fr] ${
                  index !== skillGroups.length - 1
                    ? "border-b border-[var(--border)]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    {group.title}
                  </p>
                </div>

                <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 py-1.5 text-sm text-[var(--chip-text)] transition-colors duration-300 hover:text-[var(--foreground)]"
                    >
                      <span className="text-[var(--muted-2)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                        <SkillIcon icon={skill.icon} name={skill.name} />
                      </span>
                      <span className="leading-5">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className="border-t border-[var(--border)] py-20">
          <div className="mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Education
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Academic background
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.institution}
                className="border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors duration-300"
              >
                {item.institution.includes("University of Florida") ? (
                  <a
                    href="https://drive.google.com/file/d/1jWZo4hc8PXA66BJpBKmlqJZDYIvQ_HgV/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm uppercase tracking-[0.18em] text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    {item.institution}
                  </a>
                ) : item.institution.includes("Fr. C. Rodrigues") ? (
                  <a
                    href="https://drive.google.com/file/d/1_vTevq2hxBSkuiKAc5aKWSx1ItVIVtE8/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm uppercase tracking-[0.18em] text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    {item.institution}
                  </a>
                ) : (
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {item.institution}
                  </p>
                )}

                <h3 className="mt-6 max-w-md text-2xl font-medium leading-tight text-[var(--foreground)]">
                  {item.degree}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[var(--muted-2)]">
                  {item.gpa}
                </p>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className="border-t border-[var(--border)] py-20">
            <SoccerJuggle />
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className="border-t border-[var(--border)] py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Digital Art
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Surreal edits, visual experiments, and compositions.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted-3)]">
              A small collection of pieces that mix photography, collage, and
              visual storytelling outside of product work.
            </p>
          </div>

          <DigitalArtSlider art={digitalArt} />
          </section>
        </SectionReveal>

        <SectionReveal>
          <section
            id="contact"
            className="border-t border-[var(--border)] py-20"
          >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-2)]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Let&apos;s build something precise, modern, and memorable.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="max-w-xl text-sm leading-7 text-[var(--muted-3)]">
                Open to thoughtful product, full stack, AI, and data-focused
                conversations. Reach out wherever it feels easiest.
              </p>

              <div className="flex min-h-[280px] flex-col justify-between border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors duration-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-2)]">
                    Get in touch
                  </p>

                  <a
                    href="mailto:omcar04@gmail.com"
                    className="mt-4 inline-flex border border-[var(--button-primary-bg)] bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-medium text-[var(--button-primary-text)] transition hover:opacity-90"
                  >
                    Say hello
                  </a>
                </div>

                <div className="border-t border-[var(--border)] pt-5">
                  <a
                    href="mailto:omcar04@gmail.com"
                    className="inline-flex items-center gap-3 text-sm text-[var(--muted-2)] transition hover:text-[var(--foreground)]"
                  >
                    <span className="uppercase tracking-[0.18em]">Connect</span>
                  </a>

                  <div className="mt-3 flex items-center gap-4 text-[var(--muted-2)]">
                    <a
                      href="mailto:omcar04@gmail.com"
                      aria-label="Email Omkar"
                      className="transition hover:text-[var(--accent)]"
                    >
                      <svg
                        className="h-4.5 w-4.5 stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 6h16v12H4z" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/omcarparab/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="transition hover:text-[var(--accent)]"
                    >
                      <svg
                        className="h-4.5 w-4.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 18.34V9.68H5.66V18.34H8.34ZM7 8.49A1.56 1.56 0 1 0 7 5.37A1.56 1.56 0 0 0 7 8.49ZM18.34 18.34V13.6C18.34 11.06 16.99 9.5 14.71 9.5C13.61 9.5 12.88 10.1 12.58 10.53V9.68H9.9C9.94 10.24 9.9 18.34 9.9 18.34H12.58V13.5C12.58 13.24 12.6 12.98 12.67 12.79C12.87 12.27 13.33 11.73 14.08 11.73C15.06 11.73 15.46 12.49 15.46 13.6V18.34H18.34Z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/omcar04"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                      className="transition hover:text-[var(--accent)]"
                    >
                      <svg
                        className="h-4.5 w-4.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.93c.58.1.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36c-.52-1.33-1.28-1.69-1.28-1.69c-1.05-.72.08-.71.08-.71c1.16.08 1.78 1.2 1.78 1.2c1.03 1.77 2.7 1.26 3.36.96c.1-.75.4-1.26.72-1.55c-2.56-.29-5.26-1.28-5.26-5.73c0-1.27.45-2.31 1.2-3.13c-.12-.29-.52-1.46.11-3.04c0 0 .98-.31 3.2 1.19A11.03 11.03 0 0 1 12 6.07c.98 0 1.97.13 2.9.38c2.22-1.5 3.2-1.19 3.2-1.19c.63 1.58.23 2.75.11 3.04c.75.82 1.2 1.86 1.2 3.13c0 4.46-2.7 5.43-5.27 5.72c.42.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/omcar_parab"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter profile"
                      className="transition hover:text-[var(--accent)]"
                    >
                      <svg
                        className="h-4.5 w-4.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M18.9 2H22l-6.77 7.74L23.2 22H16.9l-4.94-7.34L5.53 22H2.42l7.24-8.28L2 2h6.46l4.46 6.64L18.9 2Zm-1.09 18h1.72L7.52 3.9H5.67L17.81 20Z" />
                      </svg>
                    </a>
                  </div>

                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--muted-3)]">
                    Designed &amp; Built by Omkar Parab
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>
        </SectionReveal>
      </main>
    </div>
  );
}

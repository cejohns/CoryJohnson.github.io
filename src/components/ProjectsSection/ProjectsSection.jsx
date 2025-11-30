// src/components/ProjectsSection.jsx
import React from "react";
import { softwareProjects, gameProjects } from "../data/projectsData";

function ProjectsGrid({ title, projects }) {
  if (!projects?.length) return null;

  return (
    <section className="mt-10">
      <header className="mb-6">
        <p className="text-xs font-semibold tracking-[0.25em] text-pink-400 uppercase">
          {title}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 md:p-6 shadow-lg shadow-black/40"
          >
            {/* Title row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700/70 text-lg">
                  <span aria-hidden="true">{project.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-3 text-sm text-slate-200">
              {project.summary}
            </p>

            {/* Tech */}
            <p className="mt-3 text-xs font-medium text-slate-400">
              Tech: <span className="text-slate-200">{project.techSummary}</span>
            </p>

            {/* Metric (optional, but we added them) */}
            {project.metric && (
              <p className="mt-3 text-xs text-emerald-300/90">
                ▲ {project.metric}
              </p>
            )}

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-1 hover:border-pink-400 hover:text-pink-300 transition"
                >
                  🔗 GitHub
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-pink-500 px-3 py-1 text-slate-950 hover:bg-pink-400 transition"
                >
                  🌐 Live Site
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-1 hover:border-pink-400 hover:text-pink-300 transition"
                >
                  🎥 Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white border-t border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-pink-400 uppercase">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Projects & Systems
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl">
              Software platforms, MES tooling, gaming content systems, and 
              gameplay prototypes that show how I think about real products 
              and player experiences.
            </p>
          </div>
        </div>

        {/* Software & Web Projects */}
        <ProjectsGrid
          title="Software & Web Projects"
          projects={softwareProjects}
        />

        {/* Game Development Projects */}
        <ProjectsGrid
          title="Game Development Projects"
          projects={gameProjects}
        />
      </div>
    </section>
  );
}

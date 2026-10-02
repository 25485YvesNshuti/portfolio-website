"use client";

import { useState } from "react";

type ProjectCategory =
  | "Professional"
  | "Academic"
  | "AI"
  | "Backend"
  | "Full Stack";

type Project = {
  name: string;
  mark: string;
  description?: string;
  stack: string[];
  categories: ProjectCategory[];
};

const filters = [
  "All",
  "Professional",
  "Academic",
  "AI",
  "Backend",
  "Full Stack",
] as const;

type Filter = (typeof filters)[number];

const projects: Project[] = [
  {
    name: "E-Sambu",
    mark: "ES",
    description:
      "Parcel-owner verification workflow project with a backend focus on owner lookup and validation flows. The project details were limited to local references and were not independently verified end-to-end.",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "REST API"],
    categories: ["Professional", "Backend"],
  },
  {
    name: "School Management System",
    mark: "SM",
    description:
      "An admin system for student, parent, faculty, class, and academic records, with role- and permission-based access controls.",
    stack: ["Java 17", "Spring Boot", "Thymeleaf", "PostgreSQL"],
    categories: ["Professional", "Backend", "Full Stack"],
  },
  {
    name: "Telecom Regulatory Management Information System",
    mark: "TR",
    stack: ["Spring Boot", "Thymeleaf", "Bootstrap", "JavaScript"],
    categories: ["Professional", "Full Stack"],
  },
  {
    name: "Online Auction Platform",
    mark: "OA",
    stack: ["Spring Boot", "Thymeleaf", "Bootstrap", "JavaScript"],
    categories: ["Professional", "Full Stack"],
  },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.some((category) => category === activeFilter),
        );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
            aria-pressed={activeFilter === filter}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-mark">{project.mark}</span>
                <span className="project-visual-tech">{project.stack[0]}</span>
              </div>
              <div className="project-card-content">
                <p className="project-category">{project.categories[0]}</p>
                <h3>{project.name}</h3>
                {project.description && <p>{project.description}</p>}
                <ul className="tag-list" aria-label={`${project.name} technology stack`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-projects" role="status">
          No {activeFilter.toLowerCase()} projects are listed yet.
        </p>
      )}
    </>
  );
}

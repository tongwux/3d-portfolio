import { myProjects } from '../constants/index.js';
export default function Projects() {
  return <section className="c-space my-20" id="projects">
    <h2 className="head-text text-center mb-10">My Projects</h2>
    <p className="projects-intro">A closer look at the interfaces, systems and experiments behind the work.</p>
    <div className="projects-grid">
      {myProjects.map(project => <article key={project.title} className="grid-container project-card">
        <img src={project.spotlight} alt="" className="project-spotlight" loading="lazy" />
        <div className="project-content">
          <div className="project-heading"><img src={project.logo} alt="" className="project-logo" loading="lazy" /><p className="project-category">{project.category}</p></div>
          <h3 className="grid-headtext">{project.title}</h3>
          <p className="grid-subtext">{project.desc}</p>
          <h4 className="project-label">IMPLEMENTED IN SOURCE</h4>
          <ul className="project-features">{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul>
          <h4 className="project-label">TECH STACK</h4>
          <ul className="project-stack" aria-label={`${project.title} technology stack`}>{project.stack.map(tech=><li key={tech}>{tech}</li>)}</ul>
          <details className="project-scope"><summary>Current scope & build notes</summary><p>{project.scope}</p>{project.reference && <><p>Reference architecture for the next iteration: {project.plannedStack.join(' · ')}.</p><a href={project.reference.href} target="_blank" rel="noopener noreferrer" className="project-reference">{project.reference.title} ↗</a></>}</details>
          {project.href?<a className="project-source" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>View source on GitHub ↗</a>:<p className="project-private">{project.sourceLabel}</p>}
        </div>
      </article>)}
    </div>
  </section>;
}

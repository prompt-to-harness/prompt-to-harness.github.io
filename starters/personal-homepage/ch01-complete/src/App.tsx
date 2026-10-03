const projects = [
  {
    name: '学习笔记',
    description: '记录课程练习',
  },
]

export default function App() {
  return (
    <>
      <header className="hero">
        <h1 className="hero__name">示例同学</h1>
        <p className="hero__intro">正在学习 AI 协作开发。</p>
        <a className="hero__action" href="#projects">
          查看项目
        </a>
      </header>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <h2 className="projects__title" id="projects-title">
          项目
        </h2>
        <ul className="projects__list">
          {projects.map((project) => (
            <li className="project-card" key={project.name}>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__description">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

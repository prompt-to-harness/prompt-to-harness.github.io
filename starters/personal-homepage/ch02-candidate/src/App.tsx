const projects = [
  {
    name: '红绿灯感知量产',
    description: '城市 NOA 红绿灯感知模块的量产方案设计、部署与加速',
  },
  {
    name: '端侧多模态推理引擎',
    description: '在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产',
  },
  {
    name: 'RoboHarness',
    description: '把自然语言需求转成可执行、可验证、可持续迭代的研发流程',
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

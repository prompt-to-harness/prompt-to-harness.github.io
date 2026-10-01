# Evidence Ledger

| claim_id | claim | source | source_class | evidence | confidence | notes |
| --- | --- | --- | --- | --- | --- | --- |
| AE-01 | GitHub Skills 使用模板仓库让学习者复制练习，并在自己的仓库中完成步骤 | https://github.com/skills/introduction-to-github | Primary | 页面提供 “Copy Exercise” 模板入口；练习步骤包含 branch、commit、PR、merge | Verified | 官方 GitHub Skills 仓库 |
| AE-02 | GitHub Skills 用仓库内的 Actions 根据 push/branch/path 等可观察事件推进步骤并回写反馈 | https://github.com/skills/introduction-to-github/blob/main/.github/workflows/2-commit-a-file.yml | Primary | workflow 监听指定 branch/path，运行检查后向 issue 写入下一步内容，并启用下一 workflow | Verified | workflow 源码直接可读 |
| AE-03 | GitHub Skills 的测试课程把测试、覆盖率、失败诊断和合并门禁组合在一个模板仓库中 | https://github.com/skills/test-with-actions | Primary | 课程目标和步骤包含多版本测试、coverage、调查失败测试和强制通过后合并 | Verified | 课程定位为 <60 分钟练习 |
| AE-04 | GitHub 模板仓库生成相同目录和文件，但与模板历史无关，不能直接在模板和生成仓库之间建 PR | https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository | Primary | 官方文档明确说明生成仓库 histories unrelated，不能在两者 branch 间创建/合并 PR | Verified | 这影响“回 PR 到 starter repo”的设计 |
| AE-05 | GitHub Actions 的 fork/PR 工作流需要处理不可信代码、权限和 secrets 风险 | https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions | Primary | 官方安全指南将脚本注入、权限、secrets、fork 等列为安全边界 | Supported | 页面动态内容，具体规则需按仓库设置核对 |
| AE-06 | check50 通过可复现检查自动检查代码，并在学生编码时提供自动反馈 | https://cs50.readthedocs.io/projects/check50/en/latest/ | Primary | 文档定义为检查学生代码、自动评分并提供反馈；检查可本地运行 | Verified | 文档版本较旧，但模式仍清晰 |
| AE-07 | SWE-bench 将真实 GitHub issue、代码库和生成 patch 分离，并在容器化环境中运行测试评估 | https://github.com/SWE-bench/SWE-bench | Primary | README 定义输入为 codebase+issue、输出为 patch；评估命令运行可复现 harness，结果写入 logs | Verified | 它评估结果，不评估人的开发过程 |
| AE-08 | GitHub Classroom 官方文档提示该应用于 2026-08-28 退役 | https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding | Primary | 页面出现 “Closing down ... retired on August 28, 2026” | Verified | 访问日期 2026-09-02；不建议新项目依赖 Classroom |
| AE-09 | GitHub Skills 提供 Copilot code review 练习，可在 PR 中请求 review 并用仓库规则定制 review consideration | https://github.com/skills/copilot-code-review | Primary | 课程步骤包含 PR review、仓库级 review criteria 和自动 code review | Verified | 这是辅助 review，不等同于课程评分 |

window.lesson = {
  "title": "3.1 外部佐证版式样稿",
  "chapter": "第 3 章 · Vibe Coding 与能力扩展",
  "section": "03.01",
  "summary": "两页候选样稿",
  "scenes": [
    {
      "id": "preview-testing",
      "title": "检查通过，还要核对玩家实际看到的结果",
      "label": "检查通过，还要核对玩家实际看到的结果",
      "segment": "过程与质量",
      "layout": "evidence-scene source-preview preview-testing",
      "lead": "",
      "steps": [
        "查看原文"
      ],
      "html": "<div class=\"testing-page\"><div class=\"our-case\"><span>本课 · 紫色版</span><strong>61 项自动检查通过</strong><i>→</i><strong>截图仍发现牌面朝向错误</strong></div><div class=\"testing-body\"><div class=\"p-page\"><div class=\"p-page-bar\">Anthropic · Justin Young · 2025-11-26</div><img class=\"source-image\" src=\"../../materials/external/development-guidance/anthropic-testing.png\" alt=\"Anthropic 关于测试漏检与按用户方式验证的实验观察\"></div><div class=\"connection\"><span>两组案例共同提醒我们</span><h3>检查覆盖了什么？</h3><p>从用户要完成的过程出发，<br>核对功能和实际画面。</p><small>外部依据：Claude 的网页开发实验。</small></div></div></div>",
      "refs": [
        {
          "text": "Effective harnesses for long-running agents · Testing",
          "url": "https://www.anthropic.com/research/effective-harnesses-for-long-running-agents#testing",
          "kind": "live"
        }
      ],
      "script": [],
      "seconds": 60
    },
    {
      "id": "preview-variability",
      "title": "一次成功，不保证下次沿用同样做法",
      "label": "一次成功，不保证下次沿用同样做法",
      "segment": "过程与质量",
      "layout": "evidence-scene source-preview preview-variability",
      "lead": "",
      "steps": [
        "查看原文"
      ],
      "html": "<div class=\"logic-page\"><div class=\"variation\"><div class=\"task\"><span>同样的开发要求</span><strong>交给 AI</strong></div><div class=\"branch\">↗<br>→<br>↘</div><div class=\"choices\"><div><b>方案</b><span>布局与功能安排可能不同</span></div><div><b>步骤</b><span>可能先规划，也可能直接实现</span></div><div><b>检查</b><span>检查范围也需要逐次核对</span></div></div><div class=\"evidence-label\">这一判断的概念依据</div><div class=\"p-page\"><div class=\"p-page-bar\">OpenAI · Evaluation best practices</div><img class=\"source-image\" src=\"../../materials/external/development-guidance/openai-variability.png\" alt=\"OpenAI 关于相同输入可能产生不同输出的说明\"></div><p class=\"scope-note\">历史游戏的任务条件不同，用于观察过程与质量，不能据此单独归因于随机性。</p></div></div>",
      "refs": [
        {
          "text": "OpenAI · Evaluation best practices",
          "url": "https://developers.openai.com/api/docs/guides/evaluation-best-practices#:~:text=Generative%20AI%20is%20variable.",
          "kind": "live"
        }
      ],
      "script": [],
      "seconds": 60
    }
  ],
  "segments": [
    {
      "label": "作品目标",
      "seconds": 120
    },
    {
      "label": "开发请求",
      "seconds": 120
    },
    {
      "label": "过程与质量",
      "seconds": 120
    },
    {
      "label": "方法与复用",
      "seconds": 120
    },
    {
      "label": "交付与回顾",
      "seconds": 120
    }
  ]
};

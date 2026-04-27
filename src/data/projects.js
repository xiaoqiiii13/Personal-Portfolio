export const projects = [
  {
    slug: "the-last-lightkeeper",
    title: "The Last Lightkeeper",
    category: "AIGC 视觉故事书 / Prompt 工作流项目",
    oneLine: "一个关于记忆、情感与机器定义价值的 AI 辅助科幻故事书项目。",
    myRole: ["故事概念设计", "场景拆解", "Prompt 设计", "AI 图像筛选", "视觉一致性控制", "项目反思整理"],
    tools: ["Midjourney / Stable Diffusion", "ChatGPT", "Python (Image Processing)"],
    skills: ["Prompt 设计", "视觉叙事", "AIGC 工作流", "AI 图像筛选", "伦理反思"],
    overview: "《末代守灯人》（The Last Lightkeeper）是一个深度结合 AIGC 技术与科幻叙事的视觉故事书项目。该项目旨在探讨当记忆可以被数字化存储时，AI 如何定义人类情感的‘价值’。",
    workflow: [
      { step: "叙事概念构建", detail: "确立后启示录风格的世界观，通过 AI 辅助头脑风暴，深化角色动机与伦理冲突。" },
      { step: "视觉资产拆解", detail: "将故事文本映射为核心场景，制定统一的视觉风格规范（包括光影冷暖、构图平衡等）。" },
      { step: "精准 Prompt 工程", detail: "通过多维度提示词组合管理，控制 AI 生成角色的外形一致性与环境氛围的延续性。" },
      { step: "内容策展与筛选", detail: "从成千上万张 AI 生成图像中筛选出符合叙事节奏的 4 个篇章，并进行后期内容整合。" }
    ],
    demonstrates: [
      "能够将复杂的 AI 伦理讨论具象化为高水准的视觉叙事。",
      "具备成熟的结构化 Prompt 管理能力，实现 AI 输出的可预测性。",
      "扮演‘AI 策展人’角色，利用人工审美对算法内容进行二次重塑。",
      "对 AI 技术在数字内容创作中的作者身份与隐私影响有深刻思考。"
    ],
    reflection: "在 AIGC 时代，我的角色正在从‘内容创作者’转向‘内容指挥家’。核心价值不再仅仅是工具的操作，而是对审美边界的把控和对叙事逻辑的严苛筛选。",
    images: ["/images/AIGC视觉故事书/cover_the_last_lightkeeper.png"],
    links: {
      live: "https://69ecef2f0f78a6c30eda499f--peaceful-moxie-3a0881.netlify.app/",
      github: ""
    }
  },
  {
    slug: "ai-companion-website",
    title: "AI Companion: 数字时代的陪伴",
    category: "AI 专题数字体验 / 内容交互项目",
    oneLine: "一个聚焦于 AI 社交与情感连接的深度专题展示，探索技术如何重塑人类亲密关系。",
    myRole: ["信息架构规划", "AI 辅助文本生成", "视觉动效设计", "内容逻辑校验"],
    tools: ["React", "AIGC Content Tools", "Tailwind CSS"],
    skills: ["数字媒体信息架构", "AI 文本质量控制", "前端交互实现", "用户体验审计"],
    overview: "该项目是一个高度结构化的数字媒体平台，系统性地呈现了 AI 伴侣领域的社会学观察、产品现状与未来趋势。通过模块化内容设计，引导用户深度思考人机交互的边界。",
    workflow: [
      { step: "结构化信息拆解", detail: "将复杂的 AI 社交现象归纳为‘事实真相’、‘认知偏见’、‘行业案例’等交互模块。" },
      { step: "AI 共创工作流", detail: "利用 AI 快速生成不同视角的观点初稿，并通过人工深度加工确保专业性与客观性。" },
      { step: "用户浏览路径优化", detail: "设计非线性阅读流，结合卡片式布局提高关键信息的获取效率。" },
      { step: "上线前体验巡检", detail: "对跨设备响应、文字排版节奏与链接跳转逻辑进行全方位的人工校验。" }
    ],
    demonstrates: [
      "具备将碎片化 AI 信息转化为结构化数字体验的能力。",
      "擅长结合 AI 生成内容的效率与人工编辑的深度。",
      "深刻理解数字媒体的排版美学与用户交互心理。",
      "能独立完成从内容策划到前端视觉呈现的完整闭环。"
    ],
    reflection: "信息的组织形式本身就是一种叙事。通过这个项目，我验证了如何用‘AI 提速+人工提质’的模式，快速构建高质量的数字内容专题。",
    images: ["/images/AI伴侣/ai.png"],
    links: {
      live: "https://aidm7350groupproject.vercel.app",
      github: ""
    }
  }
];

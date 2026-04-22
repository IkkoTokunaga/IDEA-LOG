export const siteConfig = {
  name: "つくったもの",
  title: "好奇心を、実装する。",
  subtitle: "個人開発の小さなアーカイブ",
  tagline:
    "これまで手を動かして組み立ててきたものを、淡々と並べています。",
  navigation: [
    { href: "#works", label: "作品", labelEn: "Works" },
    { href: "#about", label: "紹介", labelEn: "About" },
    { href: "#tech", label: "道具", labelEn: "Stack" },
    { href: "#links", label: "連絡", labelEn: "Links" },
  ],
  social: {
    github: "https://github.com/your-handle",
    email: "mailto:hello@example.com",
  },
} as const;

export const qualifications = [
  {
    id: "ap",
    code: "AP",
    name: "応用情報技術者",
    nameEn: "Applied Information Technology Engineer",
    description:
      "ITインフラ・アルゴリズム・システム戦略まで横断する、上位基礎の国家資格。",
  },
  {
    id: "sc",
    code: "RISS",
    name: "情報処理安全確保支援士",
    nameEn: "Registered Information Security Specialist",
    description:
      "サイバーセキュリティの専門職として登録される国家資格。脅威分析と対策設計を担う。",
  },
] as const;

export const techStack = [
  {
    category: "画面",
    categoryEn: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "裏側",
    categoryEn: "Backend",
    items: ["Laravel", "PHP", "Node.js", "REST / GraphQL"],
  },
  {
    category: "基盤",
    categoryEn: "Infra",
    items: ["Docker", "AWS（S3 / CloudFront）", "GitHub Actions", "Linux"],
  },
  {
    category: "安全",
    categoryEn: "Security",
    items: ["脅威モデリング", "OWASP Top 10", "ネットワーク監視", "IAM 設計"],
  },
] as const;

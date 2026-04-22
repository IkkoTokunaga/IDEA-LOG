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
    id: "fe",
    code: "FE",
    name: "基本情報技術者",
    nameEn: "Fundamental Information Technology Engineer",
    description:
      "アルゴリズム・データ構造からネットワーク・DB まで、IT エンジニアの基礎を幅広く問う国家資格。",
  },
  {
    id: "sg",
    code: "SG",
    name: "情報セキュリティマネジメント",
    nameEn: "Information Security Management",
    description:
      "組織における情報セキュリティ運用・リスク管理の基礎を体系的に扱う国家資格。",
  },
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
    code: "SC",
    name: "情報処理安全確保支援士試験 合格",
    nameEn: "Information Security Specialist Examination (Passed)",
    description:
      "サイバーセキュリティ領域の国家試験に合格。脅威分析とセキュア設計の基礎を備える（登録セキスペとしての登録は未実施）。",
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

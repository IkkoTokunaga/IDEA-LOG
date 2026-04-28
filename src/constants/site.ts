/** 本番ホスト（メタデータの metadataBase・OG URL）。 */
export const siteUrl = "https://www.ikk-dev.jp";

/** トップページのディスクリプション（メタタグ・構造化データで共通利用）。 */
export const homePageDescription =
  "基本情報・応用情報・情報セキュリティマネジメント等の資格を持つITエンジニアの個人開発アーカイブ。知育アプリ、API検証環境、OSI参照モデルの可視化など、Next.js・Laravel・AWSを用いた作品と技術スタックを紹介。";

export const siteConfig = {
  name: "つくったもの",
  title: "好奇心を、実装する。",
  subtitle: "個人開発の小さなアーカイブ",
  tagline:
    "これまで手を動かして組み立ててきたものを、淡々と並べています。",
  navigation: [
    { href: "#works", label: "作品", labelEn: "Works" },
    { href: "#about", label: "紹介", labelEn: "About" },
    { href: "#tech", label: "技術", labelEn: "Stack" },
    { href: "#contact", label: "問合", labelEn: "Contact" },
    { href: "#links", label: "活動", labelEn: "Links" },
  ],
  social: {
    github: "https://github.com/IkkoTokunaga/IDEA-LOG",
    x: "https://x.com/ikk_cheese",
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
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Laravel 12", "PHP 8.3", "SQLite", "REST API"],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "AWS（S3 / CloudFront）",
      "Terraform",
      "GitHub Actions",
      "Linux (WSL2)",
    ],
  },
  {
    category: "Security",
    items: ["脅威分析", "セキュア設計", "リスク管理", "ネットワークセキュリティ"],
  },
] as const;

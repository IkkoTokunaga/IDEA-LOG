export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  links?: {
    demo?: string;
    repo?: string;
    docker?: string;
  };
  /** Tailwind color token used as subtle hover accent (e.g. "cyan", "emerald", "amber"). */
  accent: "cyan" | "emerald" | "amber" | "violet" | "rose";
};

export const projects: Project[] = [
  {
    id: "kids-learning-app",
    title: "Children's Learning App",
    tagline: "Canvas API で実現する、低レイテンシな知育体験",
    description:
      "幼児向けの学習アプリ。ひらがな・数字の描画練習を通じて、手先の運動と認知発達を支援する。",
    problem:
      "幼児の操作は予測が難しく、タップ／ドラッグ／長押しが混在する。遅延や取りこぼしは学習意欲を直接損なう。",
    solution:
      "HTML Canvas でポインタイベントを低レベルに制御し、requestAnimationFrame で描画パイプラインを最適化。タップ判定はヒットボックスを動的に拡張し、誤検知を抑制した。",
    stack: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    highlights: [
      "Pointer Events を統一的に扱い、マルチデバイス対応",
      "音声フィードバックと描画を 16ms 以内に同期",
      "オフラインでも完結する PWA 構成",
    ],
    accent: "amber",
  },
  {
    id: "api-tester",
    title: "API-Tester",
    tagline: "Laravel 12 × Docker で作る、ポータブルな API 検証環境",
    description:
      "REST API を単一の UI から試行し、リクエスト / レスポンス履歴や環境変数を一元管理する検証ツール。",
    problem:
      "案件ごとに Postman / curl / 自作スクリプトが散在し、端末や環境をまたいだ再現性の確保が課題だった。",
    solution:
      "Laravel 12 + SQLite により、単一コンテナで完結するポータブル構成を設計。docker run 一発で同じ環境を立ち上げ、履歴・環境変数をローカルに永続化してどこでも検証を再現可能にした。",
    stack: ["Laravel 12", "PHP 8.3", "SQLite", "Docker", "Tailwind CSS"],
    highlights: [
      "docker compose 一発で起動し、SQLite で DB サーバ不要。イメージ 1 つで完結するポータビリティ",
      "リクエスト / レスポンス履歴の永続化、環境ごとの変数管理、エクスポート / インポート対応",
      "UI からのリクエスト編集、cURL / コードスニペット生成、履歴検索による開発体験の向上",
    ],
    links: {
      docker: "https://hub.docker.com/r/tokuppee15/api-tester",
    },
    accent: "emerald",
  },
  {
    id: "osi-reference",
    title: "OSI Reference Model Site",
    tagline: "概念を『触れる』ことで理解させるビジュアル学習サイト",
    description:
      "OSI 参照モデルの 7 階層と、各層で流れるデータ（PDU）をインタラクティブに可視化する学習サイト。",
    problem:
      "OSI モデルは抽象度が高く、教科書的な説明だけでは『どのレイヤで何が起きているか』の直観が湧きにくい。",
    solution:
      "階層ごとに PDU の構造体を TypeScript で型定義し、カプセル化／非カプセル化の過程をアニメーションで表現。ネットワーク機器（L2SW / L3SW / Router）の振る舞いも対応付けた。",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    highlights: [
      "複雑なデータ構造を型安全にモデリング",
      "レイヤ間の遷移アニメーションで概念を直感化",
      "セキュリティ観点（盗聴 / 改ざん / なりすまし）をレイヤごとに併記",
    ],
    accent: "cyan",
  },
];

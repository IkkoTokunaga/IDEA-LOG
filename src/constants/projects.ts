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
    id: "kids-quiz-meiro",
    title: "生活クイズ（クイズ迷路）",
    tagline: "生活マナーの4択クイズでゴールを目指す段階式ゲーム",
    description:
      "4択クイズに正解しながら迷路トラックを進む知育アプリ。ステージ1〜3の3部構成で、各ステージ10問をクリアしてゴールを目指す。",
    problem:
      "低年齢向けクイズでは、誤タップや連打による誤判定、進行状態の分かりづらさが学習継続の障害になりやすい。",
    solution:
      "選択肢シャッフルと正誤判定ロジックを分離し、正解時のみ進捗を加算。タップガードとフィードバックオーバーレイで誤操作を抑え、段階クリア画面で達成感を可視化した。",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
    highlights: [
      "クイズJSONをステージごとに読み込み、毎回ランダム出題を実現",
      "10マス進行のパストラックで学習進捗を直感的に表示",
      "正解/不正解の音と演出、ステージクリア画面、最終ゴール画面を実装",
    ],
    links: {
      demo: "https://kids-quiz-meiro.vercel.app/",
    },
    accent: "amber",
  },
  {
    id: "kids-shape",
    title: "形遊び",
    tagline: "図形配置と回転の操作で空間認識を鍛える学習アプリ",
    description:
      "図形を自由に配置できるモードと、くぼみに合わせて解くクイズモードを実装。難易度は易・中・難・鬼の4段階を用意した。",
    problem:
      "図形学習は静的教材だと試行錯誤しづらく、子どもが『置く・回す・合わせる』感覚を体験しにくい。",
    solution:
      "React Konva でドラッグ可能な図形ステージを構築し、距離・角度の吸着判定で正解位置にスナップ。段階的な問題設計と演出で継続的に遊べる体験を作った。",
    stack: ["Next.js", "TypeScript", "React Konva", "Docker"],
    highlights: [
      "自由モードとクイズモードを分離し、学習段階に応じた導線を設計",
      "図形タイプごとの対称性を考慮した回転誤差判定を実装",
      "レスポンシブ対応、効果音、正解演出で学習の没入感を向上",
    ],
    links: {
      demo: "https://kids-shape.vercel.app/",
    },
    accent: "violet",
  },
  {
    id: "kids-kanji",
    title: "漢字練習",
    tagline: "なぞり書きと自由記述を両立した漢字トレーニング",
    description:
      "小学1〜2年相当の漢字データを一覧化し、読み・例文を見ながら練習できる Web アプリ。『なぞる』と『自由に書く』を同時に使えるUIを採用した。",
    problem:
      "手書き練習では、モバイル環境でのスクロールやリサイズ時に描画が崩れやすく、学習継続を阻害しやすい。",
    solution:
      "Canvas の座標変換とリサイズ処理を最適化し、ポインターの補間・平滑化・線分分割で書き味を安定化。描画量を基に次へ進む条件を設け、練習の質を担保した。",
    stack: ["Next.js", "TypeScript", "Canvas API"],
    highlights: [
      "一覧画面から開始位置を選べる漢字練習フローを実装",
      "coalesced events と曲線補間で自然な手書き体験を実現",
      "リサイズ時の描画保持と再同期でモバイルの表示崩れを抑制",
    ],
    links: {
      demo: "https://kids-kanji.vercel.app/",
    },
    accent: "rose",
  },
  {
    id: "kids-oekaki-hiroba",
    title: "おえかき ひろば",
    tagline: "多彩な描画ツールで創造力を伸ばすキッズ向けお絵かきアプリ",
    description:
      "Next.js 上でレガシーHTML実装を活かしつつ、子どもが直感的に使えるお絵かき体験を提供。線色・塗り・太さ・ブラシ種・テンプレート・スタンプをワンタップで切り替えできる。",
    problem:
      "キッズ向け描画UIでは、機能を増やすほど操作が複雑化し、モバイル環境での描画ズレや誤操作も起きやすくなる。",
    solution:
      "キャンバス2層構成とリサイズ追従で描画を安定化し、ポップアップ式ツールバーで操作を整理。塗りつぶし、テンプレート背景、カテゴリ別スタンプを統合し、遊びながら表現できる構成にした。",
    stack: ["Next.js", "TypeScript", "HTML Canvas", "Node.js Test"],
    highlights: [
      "ペン/ふで/クレヨン/スプレー/マーカー/ネオン/チョークを実装",
      "17種類の背景テンプレートと外部JSON読み込みスタンプを提供",
      "線の太さUIと描画ロジックをテストで検証し、改修時の退行を防止",
    ],
    links: {
      demo: "https://kids-oekaki.vercel.app/",
    },
    accent: "cyan",
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
    links: {
      demo: "https://osi-protocol-guide.vercel.app/",
    },
    accent: "cyan",
  },
];

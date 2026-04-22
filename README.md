# Portfolio — IT Engineer

応用情報技術者／情報処理安全確保支援士としての専門性と、個人開発実績をまとめたシングルページ・ポートフォリオ。
Next.js（App Router / Static Export）＋ Tailwind CSS v4 で構築し、AWS S3 + CloudFront への配信を前提としています。

## Tech Stack

| Layer        | Tech                                                     |
| ------------ | -------------------------------------------------------- |
| Runtime      | Node.js 24 (Active LTS)                                  |
| Framework    | Next.js 16 (App Router, `output: 'export'`)              |
| UI           | React 19 / Tailwind CSS v4 / lucide-react                |
| Language     | TypeScript 5                                             |
| Container    | Docker / Docker Compose                                  |
| Delivery     | AWS S3 + CloudFront (GitHub Actions 想定)                 |

## 前提

すべての開発作業は Docker コンテナ内で完結するよう設計しています。ホスト OS に Node.js / npm を入れる必要はありません。

- Docker Desktop（WSL 利用時は Docker Desktop の「WSL Integration」を有効化）
- または Docker Engine + Docker Compose v2

> WSL 2 で `docker` コマンドが見つからない場合は、Docker Desktop の Settings → Resources → WSL Integration から対象ディストロの連携を ON にしてください。

## セットアップ（初回）

```bash
# コンテナをビルドして初回の依存インストールを実施
docker compose build

# コンテナ内で依存を取得（初回のみ）
docker compose run --rm web npm install

# 開発サーバ起動（http://localhost:3000）
docker compose up
```

## 主要コマンド（すべてコンテナ内で実行）

```bash
# 開発サーバ
docker compose up

# 本番ビルド（静的書き出し）
docker compose run --rm web npm run build
# 出力先: ./out/

# 任意のコマンドを一時コンテナで実行
docker compose run --rm web npm run lint
```

## ディレクトリ構成

```
.
├── Dockerfile
├── docker-compose.yml
├── next.config.ts          # output: 'export' / images.unoptimized: true
├── postcss.config.mjs      # Tailwind v4 PostCSS プラグイン
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx        # シングルページ構成
│   │   └── globals.css     # Tailwind v4 CSS-first 設定
│   ├── components/         # Hero / Profile / Projects / ...
│   └── constants/
│       ├── projects.ts     # 実績データ（ここに追記すればカードが増えます）
│       └── site.ts         # サイト設定 / 資格 / Tech Stack
└── README.md
```

## デプロイ（AWS S3 + CloudFront）

1. `docker compose run --rm web npm run build` で `./out/` を生成
2. `aws s3 sync ./out s3://<bucket>/ --delete`
3. CloudFront のキャッシュを invalidations で `/*` 無効化

GitHub Actions で上記を自動化する想定です（`.github/workflows/deploy.yml` は必要に応じて追加）。

## カスタマイズ

- 実績の追加: `src/constants/projects.ts` に `Project` を push
- 資格・Tech Stack の編集: `src/constants/site.ts`
- カラー / タイポ: `src/app/globals.css` の `@theme` ブロック

## ライセンス

Private — 本人の許可なく再配布しないでください。

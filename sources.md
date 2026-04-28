# 情報源一覧・編集方針

本サイトの情報は以下のソースをもとにまとめています。

> ⚠️ **2026年4月29日 編集方針改定**: 過去の検証で複数の英語攻略サイトから AI 生成と推定される誤情報が混入していたことが判明したため、情報源を **3階層に分類して扱い**ます。今後の新規記事執筆ではこの方針に従います。

---

## ✅ Tier 1: 一次情報・準一次情報（積極利用）

最も信頼性が高く、本サイトの主要情報源として優先採用します。

### 公式

| 名前 | URL | 内容 |
|------|-----|------|
| Steam ストアページ（日本語） | https://store.steampowered.com/app/3041230/?l=japanese | **公式日本語訳の一次ソース** |
| Steam ニュース | https://store.steampowered.com/news/app/3041230 | 公式パッチノート |
| Steam ニュースRSSフィード | https://store.steampowered.com/feeds/news/app/3041230/ | 自動取得用 |
| SteamDB | https://steamdb.info/app/3041230/ | パッチ履歴・ビルド情報 |
| Pocketpair Publishing 公式 | https://www.pocketpair.jp/publishing/windrose/ | 国内パブリッシャー公式（固有名詞訳） |
| Kraken Express 公式 Discord | — | 開発スタジオ公式チャンネル（個別ハンドルは要確認） |

### コミュニティ実プレイヤー検証

| 名前 | URL | 内容 |
|------|-----|------|
| Steam Community Discussions | https://steamcommunity.com/app/3041230/discussions/ | **実プレイヤー検証の一次情報**（最重要） |
| Reddit r/Windrose | https://www.reddit.com/r/Windrose/ | プレイヤー検証スレッド |
| Fextralife wiki | https://windrose.wiki.fextralife.com/ | コミュニティ編集 wiki（数値検証で意外と高信頼） |
| windrose.gaming.tools | https://windrose.gaming.tools/ | 武器・アイテムデータベース |
| GAMERS Wiki (jpngamerswiki) | https://jpngamerswiki.com/windrose/ | 日本語コミュニティ wiki |

### ユーザー提供情報

| 名前 | 内容 |
|------|------|
| 実機スクリーンショット | サイト管理人がプレイ中に撮影した UI 表示（最高信頼度） |

---

## ⚠️ Tier 2: 注意付き利用（一次情報と必ず照合）

一部 AI 生成記事が混在しているが、独自取材・実プレイ検証記事もあるサイト。**引用前に Tier 1 で裏取りが取れたもののみ採用**します。

| サイト | 主な傾向 |
|-------|---------|
| method.gg | 武器・ビルド系で詳細記事あり、ただし数値情報は要照合 |
| boostmatch.gg | ボス攻略・基本ガイドは比較的信頼。数値は要照合 |
| thegameswiki.com | 構造化情報多いが二次情報依存 |
| gamerblurb.com | 散発的に独自情報あり |
| allthings.how | 一般的記述は OK、具体数値は要照合 |
| gamebrief.net | リソースガイド系 |
| TechRaptor | 初心者向けガイド |
| Deltia's Gaming | 難易度解説（数値は要照合） |
| Captain-Carry | プログレッションガイド |
| MetaForge | ビルドガイド（数値は要照合） |
| Dexerto Windrose Wiki | 構造化情報 |
| PC Gamer | ゲーム業界記事の標準品質 |
| GameSpot / IGN / TheGamer / GamesRadar | 同上、一般情報なら OK |
| InGameNews | 開発者インタビュー記事 |

---

## 🚫 Tier 3: 引用しない（過去の検証で誤情報を確認）

具体的な数値情報・仕様情報で**実プレイヤー検証と矛盾する記述**が確認されたサイト。**今後は引用しません**。

| サイト | 確認された問題 |
|-------|---------------|
| **mobalytics.gg** | 重量ペナルティ・Conquistador 4P 効果・Tracker セット効果等で複数誤情報 |
| **xmodhub** | 重量ペナルティ等の AI ハルシネーション |
| **neonlightsmedia** | Tier別効果のマージ・数値ブレ |
| **bisecthosting** | Vitality 20 ソフトキャップ等の誤情報 |
| **playerauctions** | 装備セット効果の誤記述 |
| **skycoach** | 数値ブレ（35% / 45% など同一項目で記事ごとに変動） |
| **shigjeta** | 二次情報の劣化コピー疑い |
| **prodigygamers** | 同上 |
| **gfinityesports** | 一般 AI 生成コンテンツ多数 |
| **backyarddrunkard** | 信頼性低 |

> **既存記事内の Tier 3 引用について**: 一斉削除はしません。**記事更新の機会があるたびに**、該当引用を Tier 1 で再確認 → 確認できれば差し替え、できなければ記述削除という方針で段階的に整理します。

---

## 編集方針

### 新規記事執筆時のルール

1. **Tier 1 を一次情報として優先**
2. Tier 2 は **必ず Tier 1 と照合してから採用**
3. **Tier 3 は引用しない**
4. 数値情報（HP/ダメージ/%/秒数など）は**最低でも複数の Tier 1 ソースで一致を確認**
5. 開発者発言を引用する際は **個別ハンドル名が公式アカウントか必ず確認**

### 既存記事のメンテナンス

- 編集機会のあるページから順次、Tier 3 引用を整理
- **一斉スイープはしない**（誤って正しい情報を消すリスクを避けるため）
- 検証エージェント起動時は本ポリシーを必ず指示に含める

### AI 生成記事の見分け方（過去の検証で得た知見）

- ❗ 数値が記事ごとに微妙にブレている（35% / 45% など）
- ❗ 2P/4P や Tier 別効果が混在して記述されている
- ❗ 「公式」「開発者発言」と明記されているが一次ソースが辿れない
- ❗ 同一文言（例: "approximately 4,000 damage burst"）が複数サイトに横展開されている
- ❗ 存在しないパッチノート項目を主張している

---

## 注意事項

- 本サイトの情報は有志が収集・翻訳したものです
- 公式の見解や保証はありません
- ゲームのアップデートにより情報が古くなる場合があります
- 誤りを発見した場合は [お問い合わせ](contact.md) または [Steam コミュニティ](https://steamcommunity.com/app/3041230) でご報告ください

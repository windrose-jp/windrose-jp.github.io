# 調査エージェント向け 情報源ポリシー

> 本ファイルは Claude / Agent が調査タスクを実行する際に必ず参照する情報源の取り扱い方針です。新規記事作成・既存記事の検証・コミュニティ調査などで一貫した品質を保つために使用します。
>
> 関連: [用語集（翻訳指標）](glossary.md) — 英語→日本語訳の対応表。記事執筆時に表記が揺れていないか確認する。

## 情報源の3階層分類

### ✅ Tier 1: 一次情報（積極利用）
- **Steam Community Discussions**: 実プレイヤー検証の最重要ソース
- **Reddit r/Windrose**: 検証スレッド
- **Fextralife wiki** (windrose.wiki.fextralife.com): コミュニティ編集 wiki、信頼性高
- **windrose.gaming.tools**: コミュニティ DB
- **Steam JP 日本語ストア**: 公式日本語訳
- **Pocketpair Publishing JP 公式**: 国内パブリッシャー
- **Kraken Express 公式 Discord/Twitter**（個別ハンドル要確認）
- **jpngamerswiki**: 日本語コミュニティ wiki
- **ユーザー提供スクリーンショット**: 実機 UI 表示

### ⚠️ Tier 2: 注意付き利用（一次情報と必ず照合）
- method.gg / boostmatch.gg / thegameswiki / gamerblurb / allthings.how / gamebrief / TechRaptor / Deltia's Gaming / Captain-Carry / MetaForge / Dexerto / PC Gamer / GameSpot / IGN / TheGamer / GamesRadar / InGameNews
- **必ず Tier 1 で裏取りしてから採用**

### 🚫 Tier 3: 引用禁止（誤情報を確認済み）
- **mobalytics.gg**: Conquistador 4P・Tracker・重量ペナルティ等で誤情報多数
- **xmodhub**: AI ハルシネーション
- **neonlightsmedia**: Tier 別効果のマージ・数値ブレ
- **bisecthosting**: Vitality 20 ソフトキャップ等の誤情報
- **playerauctions**: 装備セット効果の誤記述
- **skycoach**: 数値ブレ（35%/45% など同項目で変動）
- **shigjeta / prodigygamers / gfinityesports / backyarddrunkard**: 二次劣化コピー疑い

## エージェント起動時の指示テンプレート

新規調査エージェントを起動する際、以下の文言をプロンプトに含めること：

```
**情報源の取り扱い**:
- Tier 1（Steam Community / Reddit / Fextralife wiki / windrose.gaming.tools / 公式 Discord）を一次情報として優先
- Tier 2（method.gg / boostmatch.gg / thegameswiki 等）は二次情報として扱い、Tier 1 と照合できたもののみ採用
- Tier 3（mobalytics.gg / xmodhub / neonlightsmedia / bisecthosting / playerauctions / skycoach / shigjeta / prodigygamers / gfinityesports / backyarddrunkard）は**参照しない**
- 数値情報は最低でも複数の Tier 1 ソースで一致を確認
- 開発者発言を引用する際は個別ハンドル名が公式アカウントか必ず確認
```

## AI 生成記事の警戒シグナル

調査中に以下のパターンを見たら **AI 生成疑い**と判断：

1. **数値ブレ**: 同じ項目について記事ごとに数字が微妙に違う（例: Tracker healing = 35% / 45% / 38%）
2. **Tier 効果の混在**: 2P と 4P の効果が合体して記述されている（例: Conquistador 4P が「-15% DR + Bulwark」になっている）
3. **辿れない出典**: 「公式」「開発者発言」と書かれているが一次ソースに辿り着けない
4. **同一文言の横展開**: 複数サイトに同じ英文（"approximately 4,000 damage burst" 等）が並ぶ
5. **存在しないパッチノート**: 公式パッチノートに記載のない項目を「修正された」と主張
6. **テンプレ文構造**: 「In Windrose, [feature] is...」のような定型文が多用されている

## 過去の主な訂正履歴

| 日付 | 訂正内容 | 出典 Tier 3 サイト |
|------|--------|-------------------|
| 2026-04-29 | 重量（Encumbrance）ペナルティ削除 | mobalytics / xmodhub / neonlightsmedia |
| 2026-04-29 | Vitality 20 ソフトキャップ → 30まで一定 | bisecthosting |
| 2026-04-29 | Conquistador 4P 効果訂正（Bulwark のみ） | mobalytics 系 |
| 2026-04-29 | Tracker 2P/4P 効果訂正（DR と Healing が逆） | 複数 AI 生成サイト |
| 2026-04-29 | Marksman 2P から Jump 削除 | 複数 AI 生成サイト |
| 2026-04-29 | Hotfix 0.10.0.1.6 のリスポーン調整は実在せず | 複数 |
| 2026-04-29 | Foothills Divi-Divi 例外説 → Bonfire 半径ベース | Deltia's 系 |

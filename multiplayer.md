# マルチプレイ

> 情報源: [Steam ストアページ](https://store.steampowered.com/app/3041230/Windrose/) / [GameSpot Co-op解説](https://www.gamespot.com/articles/how-does-co-op-multiplayer-work-in-windrose/1100-6539399/) / [TheGamer Multiplayer Guide](https://www.thegamer.com/windrose-coop-multiplayer-friend-guide/) / [Method.gg Crossplay](https://www.method.gg/windrose/how-co-op-works-in-windrose-crossplay-and-how-to-join-friends) / [Steam: Quests in coop](https://steamcommunity.com/app/3041230/discussions/0/802344996812680465/) / [PC Gamer: ISP help](https://www.pcgamer.com/games/survival-crafting/windrose-developers-ask-players-if-they-happen-to-know-someone-at-a-major-isp-who-can-help-diagnose-online-co-op-issues/)

## マルチプレイの概要

Windroseは**オンラインCo-op（協力プレイ）**に対応しています。**1ワールド最大8人**まで参加可能ですが、**4人以下推奨**です（5人以上で同期遅延・パフォーマンス低下が顕著）。**ローカル/分割画面はなし**。

| 方式 | 説明 |
|------|------|
| **ホスト型セッション** | プレイヤーが自分のゲームをホスト → 招待コードで友人を招待 |
| **専用サーバー（Dedicated）** | **Nitrado 経由**で常時稼働サーバーを構築可能。ホスト不在でも継続稼働 |
| **ダイレクトIP接続** | サーバーIPを直接入力して接続（Patch 0.10.0.3.104 で追加） |

### 招待コードの仕様

招待コードは **1〜32文字**で自由設定可（2026年4月17日 Hotfix で文字数制限緩和）。

### 参加手順

1. ホスト側: メインメニュー → **「Host a game」** → コード生成
2. 参加側: メインメニュー → **「Connect to server」** → コード入力
3. **両方ともチュートリアルクリア必須**（クリア前は接続できないバグ報告あり）

### クロスプレイ

PC間のクロスプレイに対応。コンソール展開はEA時点では限定的。

---

## World Properties（ワールド設定）

「World Properties」画面でワールドごとに以下をカスタム可能：

| 項目 | 内容 |
|------|------|
| **難易度** | 開始前に決定。**ゲーム中の変更は途中の「EDIT」のみ可** |
| **敵スケーリング** | 人数連動でHP・ダメージ補正。**3人以上ボスHPがバグで過大化していた問題は Hotfix 0.10.0.2.54 で修正済み** |
| **資源リスポーン周期** | カスタム可 |
| **PvP** | OFF推奨（フレンド限定セッションでも誤射事故防止） |

---

## ⚠️ Co-op クエストの同期問題

複数の致命的な落とし穴があります。

### ① クエスト進行はホスト依存

- メインクエストは**ホストの進行が基準**になる
- **ゲスト単独で発見した場所・倒した敵が進行カウントされない**ケース多数
- ゲストが自分のワールドに戻ると、ホストワールドで進めた進行はリセットされる場合あり

→ **解決策**: 重要クエストはホストが必ず近くにいる状態で進める。**ソロでメインを進めたいワールドはホスト1本に固定する**。

### ② コントローラーで会話を「B/O離脱」するとフラグが立たない

- B / O ボタンで会話終了したクエストは進行が記録されないバグ多数
- **マウスカーソルで会話メニューを選択する**回避策が確実
- コントローラーユーザーは要注意（公式に報告済み）

### ③ 「Quests in Coop」全般の名声

Steam ディスカッションで「Co-op時のクエスト挙動が破綻気味」との不満が多発。**Pocketpair側で2026年内に改善予定**との開発者発言あり。

---

## ⚠️ サーバー接続トラブル（既知の障害）

「Server Join Problems」のスレッドが頻発。公式 Discord で**ISP関係者を募集するほど深刻**。以下の手順で改善する場合あり：

| 対処 | 内容 |
|------|------|
| **Force Relay Connection** | **設定→Network から有効化（2026-04-30 パッチで追加）**。P2P接続がブロックされるISP環境で有効。pingが少し上がる代わりに接続が安定 |
| **Connectivity Server を手動選択** | 設定→Network から地域指定 |
| **Direct IP 接続** | 招待コードで接続できない場合の最終手段 |
| **両者がポート開放** | Nitrado 経由なら不要 |
| **ホスト・ゲスト両方が一度ソロでチュートリアル完了** | 接続条件 |
| **VPN OFF** | VPN経由で接続失敗のケース多数 |

→ 詳細: [Steam: Server Join Problems](https://steamcommunity.com/app/3041230/discussions/0/807974232125550477/)

> 📌 **2026-04-30 パッチ（0.10.0.4.268）の接続改善**：
> - Force Relay Connection 設定追加（上記）
> - **非英語Windowsユーザー名（Ä・Ö・Ü 等の特殊文字を含むユーザー名）でのクラッシュ**を修正
> - サーバーホスト時の船舶パフォーマンスを改善

---

## ソロプレイとの違い

ソロでも全コンテンツにアクセス可能。Co-op では役割分担で難所が楽になる：

### 船での自然な役割分担

| 役 | 内容 |
|----|------|
| 舵取り（Helmsman） | 舵輪を操作・進路指示 |
| 砲撃手（Gunner） | 左舷・右舷の砲を独立に運用 |
| 修理（Engineer） | 戦闘中に Repair Kit / Combat Repair Kit を継続使用 |
| ボーディング（Boarder） | 接舷時に乗り込み戦の主力 |

### 戦闘での役割分担

→ 詳細は [ビルド集](character/builds.md#co-op-での役割分担) を参照

---

## 共有要素

| 共有 | 内容 |
|------|------|
| **拠点（Bonfire/建造物）** | ホストワールドの建物は共有 |
| **NPC ワーカー効果** | ホストワールドにアサインされたNPC効果を全員享受 |
| **Doctor Galen 無料ポーション** | Bonfire ごとに独立タイマー（Co-op全員に配布される個数共通） |
| **派閥名声（Reputation）** | プレイヤー間で共有されるかは議論中【要検証】 |

---

## ⚠️ Co-op で「やって失敗した」例

- **ホストが先に難所に進んでフラグだけ立ててしまう** → ゲストが個別に体験できない
- **NPCを誰かが Evict してしまう** → 全員から消失（[取り逃し注意集](missable.md)参照）
- **ゲストが拠点を破壊** → 修復にかなりの素材が必要
- **PvP ON のままフレンド誤射** → 全員でデス

---

## 関連ページ

- [取り逃し注意集](missable.md)
- [ビルド集](character/builds.md)
- [海戦ガイド](ships/naval-combat.md)
- [パッチノート](patch-notes.md)

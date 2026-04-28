# 実は Crew は航海に同行しない

> 「実は」シリーズ第2回

## 海賊ゲームで「乗組員」という単語を見たら、誰だってこう思う

Windrose は海賊サバイバルゲームだ。船を造り、海を渡り、嵐と砲撃を抜け、孤島の宝を奪う。プレイヤーは派閥の拠点で **「Crew Member」** という単語に出会う。500 Piastre を払えば雇用できる。

そう、雇用してから気づくのだ。

> "Wait... where do they go? They're not on my ship?"
> （あれ、雇った人どこ？船に乗ってない…？）

Reddit には**「Crew が船に乗らないんだけどバグ？」スレッドが何度も立っている**。答えはいつも同じだ：

**Crew は船に乗らない。彼らは拠点に常駐するワークステーション要員である。**

## 「乗組員」という単語が罠

英語の "Crew" は明確に「船員」を意味する。海賊ゲームでこの語を見れば、当然プレイヤーは船員を期待する。実際、Sea of Thieves や Skull and Bones の Crew は船に乗る。Valheim ですら船舶クルーは想定にあった。

しかし Windrose の Crew は違う。彼らは：

| Crew Member | 役割 |
|-------------|------|
| **Black Axel** | 拠点の調理ステーションで料理産出 +30% |
| **Rosalinda Mercer** | 錬金ステーションで Clay Bottle 倍化、Elixir 産出 +30% |
| **Jasper Crowe** | 解体台で素材返却 +30% |
| **Mortar Joe** | 火薬ステーションで Gunpowder 産出 +50% |
| **Doctor Galen** | 拠点に常駐して毎時 Minor Healing Potion を1本配布 |
| **John Doe** | Research（研究）機能を提供 |
| **Farming Contractor** | 8時間オフライン放置で農業ファーミング |

全員、**拠点ベンチに張り付いて生産効率を上げる工房ワーカー**。船には1ミリも近づかない。

## なぜこんな設計になったのか

Windrose の戦闘・航海は完全に**プレイヤー1人（またはCo-opの数人）で完結する**設計になっている。船の操舵、砲撃、帆操作、乗船戦闘 — すべてプレイヤー操作前提で、AI クルーが必要な余地が無い。

代わりに、サバイバル要素（拠点運営・素材生産・装備強化）の部分で「人手」が必要になる。Crew はそこに割り当てられた。

つまり、**「海賊ゲームの Crew」と「サバイバルゲームの workers」が同じ単語に統合されている**のが Windrose の特徴で、これがプレイヤーの混乱を生む。

## 雇用後にもう一つの罠

Crew を雇用したらそれで効果が出るかというと、出ない。

**Bonfire の「Worker タブ」から手動でアサインしないと稼働しない。**

雇用しただけだと NPC は拠点をうろつくだけ。Bonfire を開いて、Worker タブで「このベンチにこの NPC を割り当てる」操作が必須。これも英語コミュニティで何度も警告されている見落としポイントだ。

更に：

- **Settle のみ使う**：Evict（退去）コマンドは NPC が消失するバグ報告が多数。使わない方が安全
- **John Doe（Research 提供）は Needle in a Haystack クエスト後に Settle 必須**：これを忘れると研究機能が永続ロックされる

## まとめ：Crew は「船員」ではなく「工房職人」

Windrose を始めた日本人プレイヤーが「Crew = 船員」と期待して肩透かしを食らわないよう、改めて：

- Crew は拠点ベンチに常駐する生産要員
- 雇用後は Bonfire の Worker タブで手動アサイン
- Evict は使わない、Settle のみ使う
- Doctor Galen のポーション配布は Bonfire ごとに独立タイマー

「海戦で隣に立って大砲を撃ってくれる仲間」を欲しい人は、**Co-op で実プレイヤーを連れてくる**しかない。

---

## 関連ページ

- [勢力・名声](../factions.md) — Crew Member 一覧と雇用費
- [取り逃し注意集](../missable.md) — John Doe の Settle 必須警告
- [マルチプレイ](../multiplayer.md) — Co-op で実プレイヤーを集める

## 情報源

- [PlayerAuctions: NPC All Locations and How to Recruit](https://www.playerauctions.com/windrose-guide/tips-guides/npc-all-locations-and-how-to-recruit/)
- [TheGamer: Complete Guide to Crew Members](https://www.thegamer.com/windrose-complete-guide-to-crew-members-hire-workers-locations/)
- [NeonLightsMedia: Workers Crew Guide](https://www.neonlightsmedia.com/blog/windrose-workers-crew-guide)

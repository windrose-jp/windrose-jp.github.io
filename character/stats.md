# ステータス

> 情報源: [Method.gg Best Stats and Talents](https://www.method.gg/windrose/best-stats-and-talents-to-level-up-first-in-windrose) / [Slashskill Hidden Mechanics](https://www.slashskill.com/windrose-tips-and-tricks-hidden-mechanics-the-game-never-explains/) / [PCGamesN - Stamina](https://www.pcgamesn.com/windrose/increase-stamina)

## ステータスは6種類

Windrose のキャラステータスは **6種類**。うち3つは常時効果、残り3つは**武器種ごとのダメージスケーリング**を担当する。

| ステータス | 1ポイントあたりの効果 | タイプ |
|----------|---------------------|------|
| **生命力（Vitality / VIT）** | **+13 最大HP** | 常時効果 |
| **持久力（Endurance / END）** | **+5 最大スタミナ** | 常時効果 |
| **熟練度（Mastery）** | **+0.5% クリティカル率** | 常時効果 |
| **筋力（Strength / STR）** | ダメージスケール（重武器） | 武器別 |
| **敏捷性（Agility / AGI）** | ダメージスケール（俊敏武器） | 武器別 |
| **精密性（Precision / PRE）** | ダメージスケール（技巧武器） | 武器別 |

## 武器種とスケーリングの対応

武器はいずれかの「武器別ステータス」でスケールする。**使わない武器系統にポイントを振っても攻撃力は上がらない**ので注意。

| スケール | 武器種（例） |
|---------|------------|
| **筋力（Strength）** | 棍棒（Club）、ハルバード（Halberd）、Great Club 等の重武器 |
| **敏捷性（Agility）** | サーベル（Saber）、グレートソード（Greatsword）、ラッパ銃（Blunderbuss）等 |
| **精密性（Precision）** | レイピア（Rapier）、ピストル（Pistol）、マスケット銃（Musket）等 |

武器の詳細ステータスは装備画面に「D→C→B→A→S」のスケーリング文字で表示される（ダークソウル式）。

## 🔄 ステータス・タレントのリスペックは**無料・何度でも可能**

**最重要の隠し仕様のひとつ。**

- ステータス（Attribute）・**タレント（Talent）ともにリスペックは完全無料**
- **何度でもやり直し可能**（開発者公式確認 / method.gg 検証済み）
- 用途別に振り直すプレイが可能:
  - **採取・運搬時**: 持久力（Endurance）フル振り → スタミナ最大化で効率UP
  - **戦闘時**: 生命力（Vitality）+ 武器スケール重視に戻す
  - **ボス戦前**: 熟練度（Mastery）を足してクリ率を上げる
  - **タレントも同様に**: ボス前に特化タレントへ組み直し → 終了後に戻す運用が可能

## 序盤の推奨配分

1. **持久力（Endurance）を優先**（スタミナ不足がWindroseの主な死因）
2. **生命力（Vitality）を並行して確保**（+13 HP/pt なので積みやすい）
3. **主武器のスケール**（筋力 / 敏捷性 / 精密性 のいずれか）に振る
4. **熟練度（Mastery）** は終盤〜ビルド最適化フェーズで積む

```
推奨: 持久力 > 生命力 > 武器スケール > 熟練度
```

### ⚠️ Vitality 20 でソフトキャップ

**Vitality は 20 までが効率最高**。20 を超えると効果が逓減する仕様（コミュニティ検証済み）。**生命力を 30〜40 に積むより、20 で止めて他のステータスに振った方が総合的に強い**。

| Vitality | HP | 効率 |
|----------|----|------|
| 〜20 | +260 HP | 通常の +13/pt |
| 20〜 | 漸減 | 投資効率が落ちる |

> 情報源: [BisectHosting Best Builds](https://www.bisecthosting.com/blog/windrose-best-builds-character-stats-talents-weapons-armors-stat-distribution-returns)

### ⚠️ 遠距離武器は Stamina 0 消費

**Pistol / Musket / Blunderbuss などの遠距離武器は射撃時に Stamina を消費しない**。Marksman ビルドでは Endurance を 0 にして Precision・Vitality に全振りする選択肢が成立する。

### 片手武器+Pistol の構造的優位

- **片手武器は off-hand に Pistol を装備可能**（両手武器は不可）
- 戦闘中の射撃→近接持ち替えがシームレス
- **Drake's Pistol** で Vulnerability を付与してから近接で叩く戦術が強力（[Plague Mark コンボ](builds.md#plague-mark-コンボs-火力ループ)参照）

## 重量（Encumbrance）ペナルティ

キャラの積載重量には**明確な閾値**がある。重装備や大量採取時は注意。

| 重量割合 | ペナルティ |
|---------|-----------|
| 〜75% | ペナルティなし |
| **75% 超** | **スタミナ回復 -20%** |
| **100% 超** | **移動速度 半減、ドッジのスタミナ消費 2倍** |
| **125% 超** | **スプリント・ファストトラベル不可** |

**探索中は 50% 以下に保つのが理想**。採取が多い島では早めに船に戻して荷下ろしする習慣を。

## インベントリ拡張（Accessory スロット）

背負い袋を装備すると所持スロット数が増える：

| アイテム | スロット追加数 |
|---------|--------------|
| Torn Sailcloth Bag | **+4** |
| Sailor Backpack | **+8** |
| Quartermaster Backpack | **+12** |
| Traveler's Backpack | **+20** |

初期状態は **クイックスロット 8 + バックパック 16**。

## 装備ティア

装備のレアリティによってパッシブ枠やAscend可否が変わる：

| ティア | 色 | パッシブ | Ascend |
|-------|----|---------|-------|
| Common | 白 | なし | 不可 |
| Uncommon | 緑 | なし | 不可 |
| **Rare** | 青 | **ユニークパッシブあり** | **Tumbaga Ingot でEpicへ昇格可能** |
| **Epic** | 紫 | **強力なパッシブ追加** | Ascend完了形 |

Ascension の詳細は [ユニーク装備](../equipment/uniques.md) を参照。

## 関連ページ

- [タレント](talents.md)
- [ビルド集](builds.md)
- [食事・ポーション](buffs.md)
- [体幹・スタミナ](../combat/poise-stamina.md)

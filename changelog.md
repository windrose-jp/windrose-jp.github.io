# 更新履歴

## 全更新履歴

<!-- FULL_CHANGELOG_START -->
## 2026-04-29

- [訂正] **重量（Encumbrance）ペナルティの記述を削除**：複数の英語攻略サイトが掲載していた「重量超過でスタミナ消費増・移動速度半減」等の記述はAI生成と推定される誤情報と判明。Steam公式コミュニティで「重量システムは存在しない、スロット制限のみ」が一次情報として確認され、character/stats.mdから該当セクションを削除し、誤情報への注意喚起を追記
- [訂正] **AI生成サイト由来の誤情報を一斉訂正**（並行検証エージェント3本で発覚）：
  - **Vitality 20 ソフトキャップ説**: 誤り。Steam実プレイヤー検証では「30まで +13/pt 一定、31以降逓減」が一次情報。stats.md・builds.md を訂正
  - **Conquistador 4部位効果**: 誤り。実際は「2P=被ダメ-15%、4P=Bulwark のみ」。AI生成記事が2P・4P効果を合体させた典型ハルシネーション。bosses.md を訂正
  - **Tracker セット効果**: 誤り。実際は「2P=被ダメ-10%、4P=回復+45%」。本wikiは「2P=回復+35%」と誤掲載。armor.md を訂正
  - **Marksman 2P**: 「Sprint/Jump/Dash -30%」のJumpは誤追加、実際は「Sprint/Dash」のみ。armor.md を訂正
  - **Plague Mark コンボ約4,000ダメージ**: 複数サイトで同一文言、実機検証なし。具体数値表記を緩和
  - **Plague Halberd 35% / Plague Pistol 40% lifesteal**: 同上、複数サイト同一文言で実機検証なし。表記緩和
  - **Officer WHOLF が「開発者公式」**: 誤り。WHOLFはコミュニティモデレーター（ボランティア）であり開発スタジオ（Kraken Express）従業員ではない。respawn.md の出典記述を訂正
  - **Hotfix 0.10.0.1.6 で Resource node respawn rates 調整**: 公式パッチノートに該当項目なし（実際は localization/Nitrado リンク/Server Info hidden のみ）。respawn.md を訂正
  - **Foothills の Divi-Divi 木だけ生え戻る**: 誤り。実際は「Bonfire 半径外なら木は再生、半径内は再生しない」というBonfire距離ベース仕様。respawn.md の樹種別例外説を削除
  - **海賊キャンプ 24 in-game 時間サイクル**: WHOLF原投稿に記載なし、二次情報のみ。respawn.md 記述を緩和
  - **ボス再戦ドロップなし説**: 一次情報未確認。column/boss-rematch.md および respawn.md を「コミュニティ通説」トーンに修正
  - **Cubert [WR] 開発者発言**: 個別ハンドルが Kraken Express 従業員かは未確認。troubleshooting.md の表記を緩和
- [訂正] 開発元名を「Five Dimensions Studio」→「Kraken Express」（旧 Windrose Crew、ウズベキスタン拠点）に訂正：about.md の運営者情報セクションを修正

## 2026-04-28

- [攻略] **【重要】SSD書込み問題の専用ページ「トラブルシューティング」を新設**：通常プレイ中に毎時20〜60GBの異常書込み（実セーブは約30MB）、autosaveが約1秒ごとに発生、SSD温度83℃到達例、TBW消費が保証期間超過する計算。回避策としてJunction Linkでセーブを別ドライブに移動する手順、Steam Cloud無効化を併記。トップページとSUMMARYに警告を掲示
- [攻略] **コラムコーナー新設**：3記事を公開。「トルトゥーガでは何も買えない」「Crew（乗組員）は航海に同行しない」「ボス再戦には報酬がない（と言われている）」。海外コミュニティで頻出した誤解・小ネタを読み物として再構成
- [攻略] トラブルシューティングのSSD回避策に**Junction解除手順**を追記：rmdirで安全に解除、del/sやrmdir/sは絶対禁止、エクスプローラー削除事故の警告を明記

## 2026-04-27

- [攻略] マルチプレイページを大幅補強：1ワールド最大8人/4人推奨、World Properties詳細、Co-opクエスト同期問題（ホスト依存・ゲスト発見カウント問題）、コントローラー会話離脱バグ、サーバー接続トラブル対処手順、ダイレクトIP接続を追記
- [攻略] 取り逃し注意集に Boar Whistle（Foothills祭壇 Offering）、Truffle（Ancient Village儀式の戦闘ペット）、Letter to a Good Friend（Smugglers解放起点）、Co-opフラグ事故、難易度EDIT変更を追加
- [攻略] ゲームが教えてくれない仕様に Demolish 100%返却（Tent/FT Bell/階段/柵を使い捨てインフラとして運用）、ベッドQキー朝までスキップを追加
- [攻略] ビルド集に Plague Mark コンボ（Rapier軽攻撃8スタック→Drake's Pistol→Heavy Attack で約4,000ダメ）、Plague Halberd Cleave 派生、Reliable Musket Marksman の詳細スタッツ・タレント振りを追加
- [攻略] ステータスページに Vitality 20 ソフトキャップ、遠距離武器 Stamina 0 消費、片手武器+Pistol オフハンド構造的優位を追記
- [攻略] 食事・ポーションに Elixir 具体数値（Concentration +30% Crit Dmg、Cruelty +8% damage、Firm Hand +13% melee）を追加
- [攻略] 近接武器ページに重要ステータス効果（Plague Mark / Vulnerability / Bleed / Ward / Take Aim / Distortion / Winded / Temporal Health）とパリィ性能武器別差（Saber 完全無傷+ポスチャー保持、Halberd Crude派生不可）を追加
- [攻略] ボス攻略の Israel Hands 攻撃パターンを6種に拡張（Spirit Cannon の正しい回避法=大きく弧を描いてスプリント、Spectral Charge=通り抜けるダッシュ）、Truffle 戦闘ペット活用を追記
- [攻略] Kraken Vanguard 戦の具体的Tip（Frigate推奨、Inkプール回避、触手パリィ、帆半畳みで嵐ダメ-30%）と Maelstrom 外縁 Kraken（別エンカウント）を追記
- [攻略] Chick Chan（Plague Crusher）をボス一覧に追加、Stargazer Tower 3基クリア後 Warlord's Death Site で発生
- [攻略] Stargazer Tower パズル解法を強化（カメラ上向き＋星座パターン、第1塔 Observatory Stele 起点、Chick Chan討伐で完了）
- [攻略] 勢力・名声に Trader Contracts（People of Tortuga レピュ報酬で拠点に商人を呼べる契約：Wood/Clay/Food/Seeds/Animal Goods）を追加
- [攻略] リスポーン仕様を大幅補強：プレイヤー死亡時の復活地点優先順位（Tent最優先・要アクティブ化、3秒待機）、墓（tombstone）仕様、装備保持/バックパック全ロスト、ボスアリーナ内Tent不可、Plague即死、船関連リスポーン（Wharf からの Wood ×20 で Ketch 完全修理復活、船上ではリスポーン不可）、ボス再戦は基本ドロップなし、木は基本リスポーンしないが Foothills の Divi-Divi は例外で復活、海賊キャンプは24in-game時間サイクル、開発者公式リスポーン時間（鉱石6h・植物2h・動物2h・キャンプ24in-game時間）、Hotfix 0.10.0.1.6 の resource node respawn rates 調整を記載

## 2026-04-26

- [攻略] Thorn Fiddler（夜間蟹系敵）・Grenadier（爆発物投擲敵）を一般敵一覧に追加
- [攻略] Cursed Swamps の Plague tribe 敵 4 種（Hunter / Warrior / Witch / Crocodile）を一般敵一覧に追加。各ドロップ素材を記載
- [攻略] Senkamati Corrupted を要検証エントリとして追加
- [攻略] Quagmire Powder・Mire Metal Ingot を鉱石・インゴットページに追加（精錬レシピ: Ancient Scraps ×2 + Quagmire Powder ×1）
- [攻略] Tarred Planks・Tarred Fabric（Cursed Swamps 加工素材）を木材・石材ページに追加
- [攻略] エンチャントページの Tainted Bile ドロップ元を具体化、Quagmire Powder・Mire Metal Ingot の正確なレシピを追記
- [攻略] Quagmire Powder の最適ファーミング地（Ancient Debris × 4 サイト = Lv12 / 1 周 40〜50 個 / Tainted Ruins Of An Ancient Temple = Lv15）を追記
- [攻略] Plague Crusher を一般敵一覧に追加（Plague tribe で唯一 Quagmire Powder を落とさない例外を明記）
- [攻略] Plague Witch のドロップに Quagmire Powder を追加
- [攻略] Ghost Captain 戦の推奨装備に Conquistador's Set 4 ピース（Bulwark = 行動中断不可）と Musket ビルドの有効性を追記

## 2026-04-24

- [攻略] Stargazer Tower パズル解法を追加（Fate of the Prophets クエスト、Tumbaga Ingot ×19）
- [攻略] Tumbaga Ingot 地域別入手数・最適ファーミング地を追記（Cursed Swamp 計50個）
- [攻略] Wharf アンロック前提クエスト3本を明記
- [攻略] フリゲート砲プロパティ（Hardened / Devastating / Raked）を追記
- [攻略] Plague Thralls（疫病の下僕）を敵一覧に追加
- [攻略] FAQ にメインクエスト消失バグ・Ship Boarding バグを追記
<!-- FULL_CHANGELOG_END -->


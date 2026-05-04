# トラブルシューティング

> 本ページは Windrose の Early Access 期に発生している既知の重大な不具合と、コミュニティで確立された回避策をまとめたものです。**修正パッチが配信され次第、内容を更新します**。

---

## 公式バグ報告窓口: windrose.support

Kraken Express が2026年4月28日に**公式のバグ報告・要望集約サイト [windrose.support](https://windrose.support/) を開設**しました。技術的な問題の解決策をナレッジベースで検索でき、新規バグの報告や機能要望の投票ができます。**現状ベータ版・英語のみ**ですが、開発側は将来的にDiscordから段階的にこちらへ集約していく方針を表明しています。日本語ユーザーの場合は機械翻訳併用で利用するか、引き続きSteamディスカッションへの投稿でも問題ありません。

---

## ⚠️ 【進行中】2026-05-03 アップデート以降の起動・描画不具合

> 📢 **直近報告**: 2026-05-03 配信のアップデート後、複数のプレイヤーから**起動ロードの著しい遅延**と**画面フリッカー**が報告されています。Steam Community で 29 reply 規模のスレッドが立ち、議論が継続中。**修正パッチが配信されるまでの一時的な回避策**を以下に記載します。

### 報告されている症状

| 症状 | 内容 |
|------|------|
| **起動ロード遅延** | 通常 1〜3 秒で開くタイトル画面が **15 分超** かかる例あり |
| **画面フリッカー** | プレイ中に画面がちらつく（特定の GPU・解像度で再現報告） |
| **以前のビルドに戻しても再現** | 一部ユーザーは Steam の Beta タブで前のバージョンに戻しても解決しなかった |

### コミュニティで共有されている回避策（一時的）

> ⚠️ **未公式・未検証の回避策**です。あくまで Steam Community で複数プレイヤーが「これで通った」と報告している手順です。実行は自己責任で。

1. 既存セーブが入った状態で**新規ワールドを作成**してメインメニューに戻る
2. ゲームを**完全終了**する
3. 再起動して既存セーブを開く

→ 何らかのキャッシュ再生成が走り、ロードが正常化する例が報告されている。

### 公式対応状況

- 公式 Steam Announcements / windrose.support に該当バグの修正パッチ告知は**まだなし**（2026-05-04 時点）
- 開発側の認識・修正予定が出次第、本セクションを更新
- 影響を受けた場合は [windrose.support](https://windrose.support/) からのバグ報告を推奨

→ 議論スレッド: [Steam Community: New update startup issue](https://steamcommunity.com/app/3041230/discussions/0/837249543665944124/)

---

## ⚠️ 【最重要】SSD への過剰書き込み問題

> 📢 **2026-04-30 アップデート（0.10.0.4.268-9d2ca277）で「ゲームプレイ中のディスク使用量を削減」「アイドル時のCPU使用量を削減」が公式パッチノートに明記されました**。書き込み量がどこまで下がったかは実機検証次第ですが、**未検証の現時点では引き続き下記の回避策を推奨**します。実プレイヤー検証の結果が出次第、本セクションを更新予定。

**Windrose は通常プレイ中に異常な量のディスク書き込みを発生させます**（0.10.0.3.104 以前で確認）。SSD の寿命（TBW）を急速に消費するため、**修正パッチの効果が確認されるまでは下記の回避策を強く推奨します**。

### 問題の規模

| 項目 | 数値 |
|------|------|
| 書き込みレート | 通常 6.5〜24 MB/s、ピーク 100 MB/s |
| 1時間あたり書き込み量 | **20 GB〜50〜60 GB** |
| 実セーブデータの実体 | わずか **約 30 MB** |
| autosave 頻度 | **約1秒ごと**（設計外の高頻度） |
| SSD 温度報告 | システムドライブで **83℃** 到達例あり（SSD の上限 70℃ を超過） |

### TBW（Total Bytes Written）への影響

- 50GB/時 × 3時間/日 = **150GB/日 ≈ 4.5TB/月**
- 一般的な 500GB クラス SSD の保証 TBW は 150〜600TB
- → **保証期間（5年）より先に保証 TBW を使い切る計算**になる
- 温度 83℃ も SSD 寿命を大きく削る領域

### 原因（技術的）

- **RocksDB**（埋込みデータベース）の WAL（Write-Ahead Log）/ SST ファイルが過剰にフラッシュされている
- UE5 の D3DSCache（DirectX 12 シェーダーキャッシュ、約 1GB 上限で常時上書き）も寄与
- 他の UE5 タイトルで同様の挙動は出ておらず、**Windrose 固有の実装問題**

### 開発者の公式認知

開発スタジオ **Kraken Express**（旧名 Windrose Crew、2026-04-14 改称、ウズベキスタン・タシュケント拠点）の関係者と思われる **Cubert [WR]** ハンドルが Discord で問題を認知している旨の発言が、複数の英語攻略サイト（neonlightsmedia 等）で引用されている：

> "We're aiming to deliver the fix in one of the nearest updates (most likely in the next one)."
> （次回アップデートでの修正を目指している）

⚠️ **注**: この個別ハンドルが Kraken Express の公式従業員かどうかは Web 検索では一次確認が取れていない。発言自体は複数サイトに引用されているが、独立した一次ソース（公式 Discord ログ・公式 Twitter 等）の確認待ち。

**2026-04-30 のパッチ 0.10.0.4.268-9d2ca277** で「ゲームプレイ中のディスク使用量を削減」「アイドル時のCPU使用量を削減」が公式パッチノートに明記された。書き込み量が完全に解消したかは未検証のため、コミュニティで実測値が共有されるまでは**回避策（下記）の適用を継続推奨**。

---

## 回避策

### 推奨：Junction Link でセーブを HDD/別ドライブに移動

セーブフォルダを別ドライブに物理移動し、Windows の Junction Link で元の場所からリダイレクトする方法。**書き込み先を SSD から外せるため、寿命消費を完全に回避できる**。

#### 手順

1. **Windrose を終了**
2. 以下のフォルダを別ドライブに**移動**（コピーではなく移動）
   ```
   C:\Users\[ユーザー名]\AppData\Local\R5\Saved\SaveProfiles
   ```
   移動先例: `D:\Windrose Saves\SaveProfiles`
3. **コマンドプロンプトを「管理者として実行」**で起動
4. 以下のコマンドを実行（パスは自分の環境に合わせて修正）：
   ```cmd
   mklink /J "C:\Users\[ユーザー名]\AppData\Local\R5\Saved\SaveProfiles" "D:\Windrose Saves\SaveProfiles"
   ```
5. junction が作成されたか確認：
   ```cmd
   dir /AL "C:\Users\[ユーザー名]\AppData\Local\R5\Saved"
   ```
   出力に `<JUNCTION>` 表示があれば成功

#### 注意点

- **移動先ドライブの種類**: HDD は I/O 速度が遅いため、可能なら**別の SATA SSD** を推奨。NVMe → HDD は読込速度が大きく落ちる可能性あり
- **GitHub にコミュニティ製の自動化ツール**があるが、利用前に必ず VirusTotal で検査すること
- **コマンドプロンプト操作に不慣れな場合**は、無理せず公式パッチを待つのも合理的な選択

#### セーブパスの表記揺れについて【要検証】

英語コミュニティでは以下2系統のパスが報告されている：

- `C:\Users\[ユーザー名]\AppData\Local\R5\Saved\SaveProfiles\`（`R5` は開発コードネームの可能性）
- `C:\Users\[ユーザー名]\AppData\Local\Windrose\Saved\SaveGames\`

**自分の環境で実際にどちらが存在するか確認してから操作してください**。両方ある場合は両方を junction 化するのが安全。

#### 元に戻す手順（公式パッチ適用後など）

公式パッチで SSD 書き込み問題が修正されたら、Junction を解除して元の状態に戻すこと。**順番を間違えるとセーブデータを失う恐れがある**ため慎重に。

1. **Windrose を終了**

2. junction が存在することを確認：
   ```cmd
   dir /AL "C:\Users\[ユーザー名]\AppData\Local\R5\Saved"
   ```
   `<JUNCTION>` 表示と退避先パス（例: `D:\Windrose Saves\SaveProfiles`）が出ることを確認

3. **junction を削除**（管理者権限のコマンドプロンプトで）：
   ```cmd
   rmdir "C:\Users\[ユーザー名]\AppData\Local\R5\Saved\SaveProfiles"
   ```

   > ⚠️ **重要**: junction の削除は**必ず `rmdir` コマンドで行うこと**。エクスプローラーから右クリック削除しても通常は安全だが、ごく稀に**junction の中身（=退避先の実データ）まで削除される事故**が報告されている。`rmdir` なら junction だけが消えて退避先データは無傷で残る
   >
   > ⚠️ **絶対にやってはいけない**: `del /s` や `rmdir /s` は使わない。これらは中身を再帰削除するためセーブデータが消える

4. 退避先（例: `D:\Windrose Saves\SaveProfiles`）の SaveProfiles フォルダを**元の場所に戻す**：
   ```
   D:\Windrose Saves\SaveProfiles
   ↓ 移動
   C:\Users\[ユーザー名]\AppData\Local\R5\Saved\SaveProfiles
   ```
   エクスプローラーのドラッグ移動でも、`move` コマンドでも可

5. ゲームを起動し、セーブデータが正常にロードされることを確認

6. 確認できたら退避先のドライブにあった空フォルダ（`D:\Windrose Saves\` 等）を削除して片付け

#### junction 状態のまま運用を続けても問題はない

修正パッチ後も「別ドライブにセーブを置いたまま」でも動作上の支障は無い。書き込み量が正常化されればそのままで構わない。**戻すかどうかは好み**。

### 補助：Steam Cloud Saves 無効化

書き込み量自体の削減には直結しないが、**セーブファイル破損による Fatal Error クラッシュを回避**できる別件の対処として有効。

1. Steam ライブラリで Windrose を右クリック → **プロパティ**
2. **一般** タブの「Steam Cloud」項目のチェックを外す

---

## その他の既知問題

### Fatal Error / ローディング画面停止

- 主因: Steam Cloud Saves との同期競合によるセーブ破損
- 回避策: 上記の Steam Cloud 無効化
- Demo 版で発生時: `RocksDB` フォルダ削除で復旧

### Co-op 接続不可（ISP ブロック）

- 主因: 専用サーバーがモスクワ IP に解決され、一部 ISP がブロック
- 修正済み: Hotfix 0.10.0.2.54 で **Direct IP 接続オプション**追加
- メニューから手動でサーバーを選択可能

### Co-op の Shared Quest 同期不全

- 症状: Gunpowder 納品クエストが片方だけ完了、ボス戦死亡者が報酬除外 等
- 現状: パッチ待ち。詳細は [マルチプレイ](multiplayer.md) を参照

---

## 関連ページ

- [マルチプレイ](multiplayer.md) — Co-op 同期問題の詳細
- [パッチノート](patch-notes.md) — 修正状況の追跡
- [更新履歴](changelog.md)

---

> **免責**: 本ページの回避策はコミュニティ検証情報に基づきます。Junction Link 操作はファイルシステムを変更します。**実行は読者の責任で行ってください**。心配な場合は公式パッチを待つ選択も合理的です。

---

**情報源**:
- [Save files spam destroys SSD - Steam Community](https://steamcommunity.com/app/3041230/discussions/0/802345591601392353/)
- [Excessive SSD write load caused by RocksDB - Steam Community](https://steamcommunity.com/app/3041230/discussions/0/807975352045546490/)
- [Excessive SSD Data Writing - Steam Community](https://steamcommunity.com/app/3041230/discussions/0/807975542034793658/)
- [SDD Issue FIX (Junction Link 手順) - Steam Community](https://steamcommunity.com/app/3041230/discussions/0/807975352045439259/)
- 開発者発言: Cubert [WR] @ 公式 Discord

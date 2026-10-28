# 猜猜俱樂部

純前端繁體中文派對猜詞遊戲，不需要後端、帳號或建置套件。

## 開始玩

選擇題庫與 60／90／120 秒回合，把手機橫拿在額頭前，螢幕朝朋友。朋友提示答案；向下翻（螢幕朝地）表示猜對，向上翻（螢幕朝天）跳過。每題作答後先把手機立回額頭前，再進行下一次翻轉。結束後顯示猜對、跳過與最後未作答題目。題庫抽題不重複。

提供六個題庫、350 道題目。修改 `decks.js` 可增加題庫與字詞。

## 本機

```sh
npm run dev
# http://localhost:5173
npm test
npm run check
```

手機動作感測需要 HTTPS（或 localhost）與使用者授權。iOS 會在按下開始時要求權限；拒絕或不支援時可直接點選按鈕。鍵盤 ↓ 猜對、↑ 跳過。全螢幕、橫向鎖定與保持螢幕常亮依瀏覽器支援而定；必要時手動橫轉並解除系統直向鎖定。計時以實際經過時間計算，切換分頁仍繼續。

## GitHub Pages

1. 建立 GitHub repo `guess-party`，將本專案推至 `main`。
2. 在 repo 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。
3. 執行 `Deploy GitHub Pages` workflow（推送 main 也會自動執行）。
4. 預期網址為 `https://stanfc.github.io/guess-party/`，以 Actions 實際輸出為準。

所有資源採相對路徑，支援 repo 子路徑部署。Google Fonts 無法連線時自動改用系統字體；遊戲不依賴其他外部服務。

## 驗證

Node 內建測試驗證題庫完整性、洗牌、兩個橫向方向的翻轉判定、防重複與短暫晃動過濾。實機仍需驗證 iPhone Safari／Android Chrome 的感測器授權與翻轉操作。

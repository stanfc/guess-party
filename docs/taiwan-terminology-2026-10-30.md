# 專業術語翻譯重審（2026-10-30，現行紀錄）

此文件取代前一日的維護判斷。2026-10-29 的「台灣用語檢視」把口語、迷因、題庫名稱美化與真正的專業翻譯混在一起，還把不同作品互換當成訂正。這是範圍與判準的錯誤；不能把該批改動概括成「中國用語訂正」。

## 這次的範圍

- 逐筆重審上一輪 86 處：撤回 73 處、保留 13 處。迷因大賞全部恢復到 `23bd098`（上輪審閱前）的名稱、說明、161 道題目與順序，包含破防、社牛、吃瓜、鍵盤俠等，不個別挑掉。
- 恢復吃貨集合、校園回憶殺、戲精挑戰賽等原題庫名稱；恢復不必要的戀愛、童年、心理、服裝用詞改寫。不同作品互換也撤回；例如不再把絕命航班當成命運航班的已確認對譯。這不等於替原題不明的片名做正確性背書。
- 專業檢視涵蓋生物、資工、電機、醫學保健、科學、科技、法律 7 庫，共 1,330 題；逐項閱讀與有來源查證分開記錄。**生物 180 題另有完整逐題表**，未附個別來源者明確標記，沒有把「讀過」寫成「已獲權威核定」。
- 新增 7 處專業譯名調整，均對應相同英文概念；生物本輪 3 處，另保留上一輪體染色體 1 處。其他有台灣教材／研究直接用例者保留。

## 判準

1. 先確認英文概念，再核對台灣教育／學術／官方專業資料；不單靠繁體字、直覺或網路流行語對照網站。
2. 優先使用台灣教學常見譯名；若兩種都在台灣使用，要記錄為並存譯名，不能說舊詞是中國專用詞。
3. 保留專業題的難度，不拿另一個概念、另一種物品、另一部作品替代原題。
4. 迷因和原創語句維持原樣；這次不進行「換成比較自然的敘述」這種編輯改寫。

## 本輪採用的專業譯名

| 題庫 | 修改前 | 目前採用 | 英文概念 | 依據與限制 | 來源 |
| --- | --- | --- | --- | --- | --- |
| 資工名詞 | 位址轉譯旁路緩衝器 | 轉譯後備緩衝器 | translation lookaside buffer (TLB) | 原譯名混入旁路的直譯；採智慧財產局國際專利分類及台灣論文所用譯名，不更換概念。 | [tlb-tipo](#tlb-tipo)、[tlb-ncl](#tlb-ncl) |
| 資工名詞 | 分區化 | 資料分割 | data partitioning | 依所在的資料庫脈絡，採 AWS 台灣繁中資料的資料分割；不混同 sharding，也不是改成資料庫正規化。 | [partition-aws](#partition-aws) |
| 生物名詞 | 移碼突變 | 框移突變 | frameshift mutation | 依國家教育研究院中小學常用中英雙語詞彙彙編採框移突變；移碼突變仍可見於台灣資料，不將其定性為中國專用詞。 | [frameshift-naer](#frameshift-naer) |
| 電機名詞 | 羅倫茲力 | 勞侖茲力 | Lorentz force | 採國家教育研究院物理學名詞與台灣物理實驗教材使用的勞侖茲力；仍是相同物理概念，不是另換題目。 | [lorentz-naer](#lorentz-naer)、[lorentz-nthu](#lorentz-nthu) |
| 科學研究所 | 奧爾特雲 | 歐特雲 | Oort cloud | 採中央氣象署數位科普網的譯名歐特雲；台灣資料也收錄奧爾特雲為別譯，不將別譯說成錯誤或中國專用。 | [oort-cwa](#oort-cwa)、[oort-tam](#oort-tam) |
| 生物名詞 | 基因流 | 基因交流 | gene flow | 採臺大科學Online教學名稱基因交流；仍指族群間等位基因移動，不換成其他遺傳現象。屬台灣教學譯名選擇，不宣稱基因流在台灣無人使用。 | [gene-flow-ntu](#gene-flow-ntu) |
| 生物名詞 | 分歧演化 | 趨異演化 | divergent evolution | 採臺大科學Online的趨異演化，並與同庫趨同演化相對應。台灣統測也用分歧演化，因此是並存譯名的選擇，不標為中國專用詞。 | [divergent-ntu](#divergent-ntu)、[divergent-tcte](#divergent-tcte) |

## 生物特別查證的保留項目

以下詞雖然可能有其他譯法，但找到台灣資料直接使用，因此不換成日常語句，也不認定為中國專用詞。

| 原題（保留） | 英文對照 | 依據 |
| --- | --- | --- |
| 遺傳漂變 | genetic drift | [bio-drift-naer](#bio-drift-naer) |
| 創始者效應 | founder effect | [bio-founder-ntu](#bio-founder-ntu) |
| 表觀遺傳 | epigenetics | [bio-epi-ntu](#bio-epi-ntu) |
| 腺苷三磷酸 | ATP | [bio-atp-hanlin](#bio-atp-hanlin) |
| 流體鑲嵌模型 | fluid mosaic model | [bio-membrane-moe](#bio-membrane-moe) |
| 促進性擴散 | facilitated diffusion | [bio-diffusion-hanlin](#bio-diffusion-hanlin) |
| 胞吞作用 | endocytosis | [bio-endo-nstc](#bio-endo-nstc) |
| 胞吐作用 | exocytosis | [bio-endo-nstc](#bio-endo-nstc) |
| 蘭氏結 | nodes of Ranvier | [bio-ranvier-moex](#bio-ranvier-moex) |
| 共顯性 | codominance | [bio-codominance-hanlin](#bio-codominance-hanlin) |
| 轉移RNA | transfer RNA | [bio-trna-moe](#bio-trna-moe) |
| 訊息RNA | messenger RNA | [bio-trna-moe](#bio-trna-moe) |
| 核糖體RNA | ribosomal RNA | [bio-trna-moe](#bio-trna-moe) |
| DNA聚合酶 | DNA polymerase | [bio-replication-ceec](#bio-replication-ceec)、[bio-okazaki-hanlin](#bio-okazaki-hanlin) |
| 解旋酶 | helicase | [bio-replication-ceec](#bio-replication-ceec)、[bio-okazaki-hanlin](#bio-okazaki-hanlin) |
| 連接酶 | ligase | [bio-okazaki-hanlin](#bio-okazaki-hanlin) |
| 岡崎片段 | Okazaki fragment | [bio-okazaki-hanlin](#bio-okazaki-hanlin) |
| 啟動子 | promoter | [bio-genes-ncue](#bio-genes-ncue) |
| 內含子 | intron | [bio-genes-ncue](#bio-genes-ncue) |
| 外顯子 | exon | [bio-genes-ncue](#bio-genes-ncue) |
| 基因靜默 | gene silencing | [bio-silencing-sinica](#bio-silencing-sinica) |
| 適應輻射 | adaptive radiation | [bio-adaptive-ntu](#bio-adaptive-ntu) |
| 生態棲位 | ecological niche | [bio-niche-moex](#bio-niche-moex) |
| 受質專一性 | substrate specificity | [bio-specificity-nstc](#bio-specificity-nstc) |
| 伴細胞 | companion cell | [bio-companion-hanlin](#bio-companion-hanlin) |
| 半保留複製 | semiconservative replication | [bio-semiconservative-moe](#bio-semiconservative-moe) |
| 核小體 | nucleosome | [bio-nucleosome-sinica](#bio-nucleosome-sinica) |
| 組蛋白 | histone | [bio-nucleosome-sinica](#bio-nucleosome-sinica) |
| 染色質 | chromatin | [bio-nucleosome-sinica](#bio-nucleosome-sinica) |
| 操縱組 | operon | [bio-operon-nchu](#bio-operon-nchu) |
| 溶小體 | lysosome | [bio-lysosome-ntu](#bio-lysosome-ntu) |
| 過氧化體 | peroxisome | [bio-peroxisome-tfg](#bio-peroxisome-tfg) |
| 核型 | karyotype | [bio-karyotype-nhri](#bio-karyotype-nhri) |
| 細胞凋亡 | apoptosis | [bio-apoptosis-sinica](#bio-apoptosis-sinica) |

生物逐題表：[180 題 TSV](taiwan-terminology-2026-10-30-biology.tsv)。其中連接酶保留泛稱，不把所有 ligase 限縮成 DNA ligase；轉移 RNA、訊息 RNA、核糖體 RNA 也有教育部資料支持。

## 其他專業詞查證後保留

| 題目 | 英文概念 | 來源 |
| --- | --- | --- |
| 布隆過濾器 | Bloom filter | [bloom-ntust](#bloom-ntust) |
| 最小成本擴張樹 | minimum cost spanning tree | [mst-moex](#mst-moex) |
| 強連通元件 | strongly connected component | [scc-tku](#scc-tku) |
| 歸約 | reduction (computational complexity) | [reduction-ncu](#reduction-ncu) |
| 預先寫入記錄 | write-ahead logging | [wal-ms](#wal-ms) |
| 電壓隨耦器 | voltage follower | [voltage-follower-moex](#voltage-follower-moex) |
| 施密特觸發器 | Schmitt trigger | [schmitt-moe](#schmitt-moe) |
| 共模拒斥比 | common-mode rejection ratio | [cmrr-ti](#cmrr-ti) |
| 迴轉率 | slew rate | [slew-ntu](#slew-ntu) |
| 奈奎斯特圖 | Nyquist plot | [nyquist-nthu](#nyquist-nthu) |
| 臨界電壓 | threshold voltage | [threshold-ntu](#threshold-ntu) |
| 波粒二象性 | wave-particle duality | [wave-particle-ntu](#wave-particle-ntu) |
| 過度配適 | overfitting | [overfit-cbc](#overfit-cbc) |
| 響應式網頁 | responsive web design | [rwd-moda](#rwd-moda) |
| 虛擬私人網路 | virtual private network | [vpn-nsysu](#vpn-nsysu) |
| 雙因素驗證 | two-factor authentication | [2fa-slack](#2fa-slack) |
| 腎絲球過濾率 | glomerular filtration rate | [medical-gfr-ntu](#medical-gfr-ntu) |
| 糖化血色素 | glycated hemoglobin | [medical-hba1c-hpa](#medical-hba1c-hpa) |
| 磁振造影 | magnetic resonance imaging | [medical-mri-vghtpe](#medical-mri-vghtpe) |

## 前一輪 86 筆決定的重審結果

「目前採用」是這次最後狀態；撤回不代表原詞只能在台灣使用，而是原先改寫沒有符合需求。

| 題庫 ID | 上輪原文 | 上輪改成 | 目前採用 | 處理 | 理由 |
| --- | --- | --- | --- | --- | --- |
| taiwan-memes | 破防 | 氣到跳腳 | 破防 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 蹭熱度 | 搭順風車 | 蹭熱度 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 鍵盤俠 | 鍵盤魔人 | 鍵盤俠 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 置板凳 | 搬椅子等看戲 | 置板凳 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 蓋樓 | 推文接龍 | 蓋樓 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 尬聊 | 硬找話題 | 尬聊 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 尬爆 | 尷尬到不行 | 尬爆 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 社死 | 糗到想鑽地洞 | 社死 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 社恐 | 怕生 | 社恐 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 社牛 | 超級外向 | 社牛 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 情緒價值 | 情緒支持 | 情緒價值 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 海王 | 到處留情 | 海王 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 養魚 | 到處曖昧 | 養魚 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 問就是 | 不要問很可怕 | 問就是 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 這波不虧 | 賺到啦 | 這波不虧 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 不忍直視 | 看不下去 | 不忍直視 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 我也是醉了 | 真的是齁 | 我也是醉了 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 直接封神 | 有夠神 | 直接封神 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 神仙打架 | 高手過招 | 神仙打架 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 史詩級翻車 | 出大糗 | 史詩級翻車 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 人間清醒 | 看得很開 | 人間清醒 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 迷惑行為 | 莫名其妙 | 迷惑行為 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 不是吧阿Sir | 不會吧大哥 | 不是吧阿Sir | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 大型翻車現場 | 出包現場 | 大型翻車現場 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 內耗 | 想太多 | 內耗 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 懶癌末期 | 懶到生菇 | 懶癌末期 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 吃瓜 | 看熱鬧 | 吃瓜 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 懂的都懂 | 內行看門道 | 懂的都懂 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 翻車了 | 出包了 | 翻車了 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 暖男 | 貼心男 | 暖男 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 渣男 | 負心漢 | 渣男 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 直接原地爆炸 | 氣到快炸掉 | 直接原地爆炸 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 大可不必 | 真的不用 | 大可不必 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 先別急 | 麥緊張 | 先別急 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 驚不驚喜 | 有沒有很驚喜 | 驚不驚喜 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 意不意外 | 有沒有很意外 | 意不意外 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 奇怪的知識增加了 | 長知識了 | 奇怪的知識增加了 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 官方吐槽 | 官方自己吐槽 | 官方吐槽 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| taiwan-memes | 風向帶起來 | 帶風向 | 風向帶起來 | 撤回 | 撤回：把迷因換成普通敘述會失去梗；不因語源或別處也使用就自行替換。迷因題庫整組恢復。 |
| romance | 異地戀 | 跨國戀情 | 異地戀 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 姐弟戀 | 姊弟戀 | 姐弟戀 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 網戀見面 | 和網友約會 | 網戀見面 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 情侶情人節約會 | 情人節約會 | 情侶情人節約會 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 感情內耗 | 感情讓人心累 | 感情內耗 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 斷聯 | 不再聯絡 | 斷聯 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 小情緒 | 鬧彆扭 | 小情緒 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| romance | 摸頭殺 | 溫柔摸頭 | 摸頭殺 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| campus | 同桌 | 隔壁同學 | 同桌 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| childhood | 小霸王遊戲機 | Nintendo64 | 小霸王遊戲機 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| childhood | 橡皮泥 | 紙黏土 | 橡皮泥 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| childhood | 紋身貼紙 | 刺青貼紙 | 紋身貼紙 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| emotions-psychology | 精神內耗 | 心力交瘁 | 精神內耗 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| emotions-psychology | 冷暴力 | 冷漠對待 | 冷暴力 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| emotions-psychology | 邊界感 | 尊重界線 | 邊界感 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| emotions-psychology | 光環效應 | 月暈效應 | 光環效應 | 撤回 | 撤回：光環效應與月暈效應在台灣並存，沒有必要單靠譯名偏好改題。 |
| biology | 常染色體 | 體染色體 | 體染色體 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| sports | 鋼架雪車 | 俯式雪橇 | 俯式雪橇 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| music-dance | 蕭 | 簫 | 簫 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| music-dance | 齊舞 | 團體舞 | 齊舞 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| fashion | 工裝褲 | 工作褲 | 工裝褲 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| fashion | 工裝風 | 工作服風格 | 工裝風 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| fashion | 耳釘 | 耳針式耳環 | 耳釘 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| fashion | 甜酷風 | 甜美個性風 | 甜酷風 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| fashion | 多巴胺穿搭 | 亮色系穿搭 | 多巴胺穿搭 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| kpop | 站姐 | 追星攝影 | 站姐 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| festivals | 壓年錢 | 紅包袋 | 壓年錢 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| festivals | 初一回娘家 | 初一拜年 | 初一回娘家 | 撤回 | 撤回：原先以口語改寫或另換題目，未證明是必要的台灣專業譯名訂正。 |
| video-games | 反恐精英 | 絕對武力 | 絕對武力 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| video-games | 胡鬧廚房 | Overcooked | 胡鬧廚房 | 撤回 | 撤回：改成英文不代表更符合台灣版本；原作品譯名在台灣也有使用。 |
| tv-series | 生活大爆炸 | 宅男行不行 | 宅男行不行 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 越獄 | 越獄風雲 | 越獄風雲 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 迷失 | LOST檔案 | LOST檔案 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 逃避雖可恥但有用 | 月薪嬌妻 | 月薪嬌妻 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 殺死伊芙 | 追殺夏娃 | 追殺夏娃 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 破產姐妹 | 破產姊妹花 | 破產姊妹花 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 人選之人造浪者波 | 人選之人—造浪者 | 人選之人—造浪者 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 良醫墨非實習醫生 | 良醫墨非 | 良醫墨非 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| tv-series | 追緝令 | 紙牌屋 | 追緝令 | 撤回 | 撤回：不同作品互換不是翻譯訂正；指涉不明或別名問題另案記錄，不藉本次任意換片。 |
| tv-series | 絕命航班 | 命運航班 | 絕命航班 | 撤回 | 撤回：不同作品互換不是翻譯訂正；指涉不明或別名問題另案記錄，不藉本次任意換片。 |
| tv-series | 龍櫻 | 女王偵訊室 | 龍櫻 | 撤回 | 撤回：不同作品互換不是翻譯訂正；指涉不明或別名問題另案記錄，不藉本次任意換片。 |
| tv-series | 冰與火之歌 | 核爆家園 | 冰與火之歌 | 撤回 | 撤回：不同作品互換不是翻譯訂正；指涉不明或別名問題另案記錄，不藉本次任意換片。 |
| food | 吃貨集合 | 美食大集合 | 吃貨集合 | 撤回 | 撤回：題庫名稱的風格調整不在這次專業術語翻譯需求內。 |
| campus | 校園回憶殺 | 校園青春記憶 | 校園回憶殺 | 撤回 | 撤回：題庫名稱的風格調整不在這次專業術語翻譯需求內。 |
| acting | 戲精挑戰賽 | 演技大考驗 | 戲精挑戰賽 | 撤回 | 撤回：題庫名稱的風格調整不在這次專業術語翻譯需求內。 |
| geography | 乞力馬札羅山 | 吉力馬札羅山 | 吉力馬札羅山 | 保留 | 保留：相同作品／概念的台灣譯名或明確錯字訂正；不另換成其他題目。 |
| history | 葉卡捷琳娜二世 | 凱薩琳二世 | 葉卡捷琳娜二世 | 撤回 | 撤回：依俄語／英語轉譯的人名並存，不是需要更換人物名稱的錯誤。 |

保留的 13 筆主要是台灣作品譯名、錯字、體染色體、俯式雪橇與吉力馬札羅山；各筆保留來源見 JSON 的 `previous_decisions[].sources`。不宣稱所有未修改的專業詞均有唯一台灣標準譯名。

## 來源

查閱日期：2026-10-30。`previous-` 為上一輪已有的直接專名／用詞來源，這次沿用；其餘為本輪查得的專業資料。

<a id="tlb-tipo"></a>
- **tlb-tipo**：[ 智慧財產局國際專利分類 G06F 12/1027：轉譯後備緩衝器](https://www.tipo.gov.tw/tw/patents/478.html?isLevel=false&sb=G06F01714&vs=202501)

<a id="tlb-ncl"></a>
- **tlb-ncl**：[ 臺灣博碩士論文：虛擬快取及全共享轉譯後備緩衝區](https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id%3D%22104NTHU5442058%22.&searchmode=basic)

<a id="partition-aws"></a>
- **partition-aws**：[ AWS 繁中資料庫教材：資料分割](https://d1.awsstatic.com/psc-digital/2024/gc-600/database-mod-apps/Building-modern-applications-using-AWS-databases-zh-tw.pdf)

<a id="frameshift-naer"></a>
- **frameshift-naer**：[ 國家教育研究院中小學常用中英雙語詞彙彙編：frameshift mutation／框移突變](https://teric.naer.edu.tw/wSite/DoDownload?fileName=1553030411237&format=pdf&xmlId=2037445)

<a id="lorentz-naer"></a>
- **lorentz-naer**：[ 國家教育研究院物理學名詞：Lorentz force／勞侖茲力](https://teric.naer.edu.tw/wSite/DoDownload?fileName=1462779739979&format=pdf&xmlId=1849190)

<a id="lorentz-nthu"></a>
- **lorentz-nthu**：[ 清華大學普通物理實驗：電流天平與勞侖茲電磁力](https://www.phys.nthu.edu.tw/~gplab/exp014.html)

<a id="oort-cwa"></a>
- **oort-cwa**：[ 中央氣象署數位科普網：歐特雲](https://edu.cwa.gov.tw/PopularScience/as/as_3.html)

<a id="oort-tam"></a>
- **oort-tam**：[ 臺北天文館 Mitaka 介紹：歐特雲，另譯奧爾特雲](https://www-ws.gov.taipei/001/Upload/439/relfile/21708/3425244/11111122050.pdf)

<a id="gene-flow-ntu"></a>
- **gene-flow-ntu**：[ 臺大科學Online：基因交流](https://case.ntu.edu.tw/highscope/基因交流/index.html)

<a id="divergent-ntu"></a>
- **divergent-ntu**：[ 臺大科學Online：趨異演化（Divergent Evolution）](https://case.ntu.edu.tw/highscope/趨異演化（divergent-evolution）/index.html)

<a id="divergent-tcte"></a>
- **divergent-tcte**：[ 技專校院入學測驗：分歧演化（divergent evolution）](https://web1.tcte.edu.tw/EXAM/090_4y/12_2.pdf)

<a id="bloom-ntust"></a>
- **bloom-ntust**：[ 臺灣科技大學高等資料結構課程：動態雜湊與布隆過濾器](https://www.csie.ntust.edu.tw/var/file/38/1038/img/2176/116415510.pdf)

<a id="mst-moex"></a>
- **mst-moex**：[ 考選部試題：最小成本的擴張樹](https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=508&code=112010&q=1&s=0601&t=Q)

<a id="scc-tku"></a>
- **scc-tku**：[ 淡江大學演算法教材：強連通元件](https://mail.tku.edu.tw/inhon/Algorithm_HW_2015.pdf)

<a id="reduction-ncu"></a>
- **reduction-ncu**：[ 中央大學演算法教材：NP、SAT 與歸約](https://staff.csie.ncu.edu.tw/jrjiang/alg2026/2026-Recipe%2C%20Cook%2C%20Carp%2C%20and%20Bernstein.pdf)

<a id="wal-ms"></a>
- **wal-ms**：[ Microsoft SQL Server 繁中官方文件：預先寫入記錄（WAL）](https://learn.microsoft.com/zh-tw/sql/relational-databases/sql-server-transaction-log-architecture-and-management-guide?view=sql-server-ver17)

<a id="voltage-follower-moex"></a>
- **voltage-follower-moex**：[ 考選部試題：電壓隨耦器](https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=514&code=096260&q=1&s=4001&t=Q)

<a id="schmitt-moe"></a>
- **schmitt-moe**：[ 教育大市集課綱與影片：施密特／史密特觸發器](https://market.cloud.edu.tw/resources/video/1854652)

<a id="cmrr-ti"></a>
- **cmrr-ti**：[ Texas Instruments 繁中官方影片：共模拒斥比](https://www.ti.com/zh-tw/video/6117695411001)

<a id="slew-ntu"></a>
- **slew-ntu**：[ 臺大論文關鍵字：迴轉率／slew rate](https://tdr.lib.ntu.edu.tw/handle/123456789/15214)

<a id="nyquist-nthu"></a>
- **nyquist-nthu**：[ 清華大學開放式課程：奈奎斯特圖](https://ocw.nthu.edu.tw/ocw/index.php?chid=1655&cid=133&page=chapter)

<a id="threshold-ntu"></a>
- **threshold-ntu**：[ 臺大半導體論文：臨界電壓／threshold voltage](https://tdr.lib.ntu.edu.tw/retrieve/30910a65-ac5e-4e1d-9000-902b6550935a/ntu-110-2.pdf)

<a id="wave-particle-ntu"></a>
- **wave-particle-ntu**：[ 臺大科學Online：光波粒二象性](https://case.ntu.edu.tw/微粒說/index.html)

<a id="overfit-cbc"></a>
- **overfit-cbc**：[ 中央銀行研究：過度配適（overfitting）](https://www.cbc.gov.tw/dl-181550-9f8b21f6618f4213b6c4d749f6e2deea.html)

<a id="rwd-moda"></a>
- **rwd-moda**：[ 數位發展部無障礙網路空間服務網：響應式網頁設計](https://accessibility.moda.gov.tw/Questions/Detail/146?Category=18%2F)

<a id="vpn-nsysu"></a>
- **vpn-nsysu**：[ 中山大學圖書與資訊處：虛擬私人網路](https://lis.nsysu.edu.tw/p/412-1001-7113.php?Lang=zh-tw)

<a id="2fa-slack"></a>
- **2fa-slack**：[ Slack 繁體中文官方文件：雙因素驗證](https://slack.com/intl/zh-tw/help/articles/204509068-設定雙因素驗證)

<a id="frameshift-moex"></a>
- **frameshift-moex**：[ 台灣歷屆試題亦使用讀碼移位，說明非只有一種可用譯法](https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=104&code=099010&q=1&s=200&t=Q)

<a id="bio-drift-naer"></a>
- **bio-drift-naer**：[ 國家教育研究院生態學名詞：基因漂變；遺傳漂變](https://teric.naer.edu.tw/wSite/PDFReader?fileName=1469516817561&format=pdf&xmlId=)

<a id="bio-founder-ntu"></a>
- **bio-founder-ntu**：[ 臺大 CASE 報科學：創始者效應](https://case.ntu.edu.tw/blog/?p=40003)

<a id="bio-epi-ntu"></a>
- **bio-epi-ntu**：[ 臺大 CASE 報科學：表觀遺傳](https://case.ntu.edu.tw/blog/?p=37642)

<a id="bio-atp-hanlin"></a>
- **bio-atp-hanlin**：[ 翰林高中生物：腺苷三磷酸](https://www.ehanlin.com.tw/app/keyword/高中/生物/腺苷三磷酸.html)

<a id="bio-membrane-moe"></a>
- **bio-membrane-moe**：[ 教育大市集：流體鑲嵌模型](https://market.cloud.edu.tw/resources/video/1848918)

<a id="bio-diffusion-hanlin"></a>
- **bio-diffusion-hanlin**：[ 翰林高中生物：促進性擴散](https://www.ehanlin.com.tw/app/keyword/高中/生物/促進性擴散.html)

<a id="bio-endo-nstc"></a>
- **bio-endo-nstc**：[ 國科會科技大觀園：胞吞作用、胞吐作用](https://scitechvista.nat.gov.tw/Article/c000008/detail?ID=a755d9f4-d6f5-4168-810a-fecdc6e42a99)

<a id="bio-ranvier-moex"></a>
- **bio-ranvier-moex**：[ 考選部試題：蘭氏結（nodes of Ranvier）](https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=301&code=112020&q=1&s=11&t=Q)

<a id="bio-codominance-hanlin"></a>
- **bio-codominance-hanlin**：[ 翰林高中生物：等顯性，又稱共顯性](https://www.ehanlin.com.tw/app/keyword/高中/生物/等顯性.html)

<a id="bio-trna-moe"></a>
- **bio-trna-moe**：[ 教育部教育百科：轉移 RNA、訊息 RNA、核糖體 RNA](https://pedia.cloud.edu.tw/Entry/Detail?title=轉移核糖核酸)

<a id="bio-replication-ceec"></a>
- **bio-replication-ceec**：[ 大考中心115分科生物評分說明：DNA連接酶、DNA聚合酶、解旋酶等詞](https://www.ceec.edu.tw/xcepaper/cont?qperoid=0Q252586588219181161&sid=0Q257650379492479492&xsmsid=0J066588036013658199)

<a id="bio-okazaki-hanlin"></a>
- **bio-okazaki-hanlin**：[ 翰林111分科生物解析：岡崎片段、DNA聚合酶、解旋酶、DNA連接酶](https://public.ehanlin.com.tw/pre-exam/astn/111分科測驗生物解析.pdf)

<a id="bio-genes-ncue"></a>
- **bio-genes-ncue**：[ 彰化師大生物科學科能力競賽：啟動子、內含子、外顯子](https://biology.ncue.edu.tw/download.php?dir=archive&filename=540b3d6568ac08915f624f25191326ab.pdf&title=111學年度考題.pdf)

<a id="bio-silencing-sinica"></a>
- **bio-silencing-sinica**：[ 中研院研究：基因靜默](https://abrc.sinica.edu.tw/faculty/latest_research_view.php?aid=7266&id=yalin&lang=zh)

<a id="bio-adaptive-ntu"></a>
- **bio-adaptive-ntu**：[ 臺大科學Online：適應輻射](https://case.ntu.edu.tw/生命自會找到出路-談適應輻射adaptive-radiation-2/index.html)

<a id="bio-niche-moex"></a>
- **bio-niche-moex**：[ 考選部生態學試題：生態棲位（Niche）](https://wwwq.moex.gov.tw/exam/wHandExamQandA_File.ashx?c=437&code=113080&q=1&s=1711&t=Q)

<a id="bio-specificity-nstc"></a>
- **bio-specificity-nstc**：[ 國科會科技大觀園：受質專一性](https://scitechvista.nat.gov.tw/Article/C000003/detail?ID=cd8da3e4-5356-4338-a7d9-736cd8c832b0)

<a id="bio-companion-hanlin"></a>
- **bio-companion-hanlin**：[ 翰林高中生物：伴細胞](https://www.ehanlin.com.tw/keywordPool/wordPage.html?key=伴細胞&subject=H-BI)

<a id="bio-semiconservative-moe"></a>
- **bio-semiconservative-moe**：[ 教育大市集：半保留複製模式](https://market.cloud.edu.tw/resources/video/1831021)

<a id="bio-nucleosome-sinica"></a>
- **bio-nucleosome-sinica**：[ 中研院訊：核小體、組蛋白、染色質](https://newsletter.sinica.edu.tw/26961/)

<a id="bio-operon-nchu"></a>
- **bio-operon-nchu**：[ 中興大學研究：人工基因操縱組](https://idcsa.nchu.edu.tw/en/page-1.php?id=9d671e11-ed3f-11e8-adde-0050569c05ae)

<a id="bio-lysosome-ntu"></a>
- **bio-lysosome-ntu**：[ 臺大醫院：溶小體儲積症酵素活性分析](https://www.ntuh.gov.tw/gene-lab-bclab/Fpage.action?fid=8395)

<a id="bio-peroxisome-tfg"></a>
- **bio-peroxisome-tfg**：[ 北一女生物教材研習：過氧化體](https://www.csghs.tp.edu.tw/wp-content/uploads/doc/zs2251/生物學學理解碼%20─教材疑難雜症討論.pdf)

<a id="bio-karyotype-nhri"></a>
- **bio-karyotype-nhri**：[ 國家衛生研究院細胞庫：染色體核型分析](https://rr.nhri.edu.tw/cellbank/c/c_1_16.htm)

<a id="bio-apoptosis-sinica"></a>
- **bio-apoptosis-sinica**：[ 中研院研究：細胞凋亡](https://www.sinica.edu.tw/news_content/55/2671)

<a id="medical-gfr-ntu"></a>
- **medical-gfr-ntu**：[ 臺大醫院：腎絲球過濾率](https://epaper.ntuh.gov.tw/health/202306/health_3.html)

<a id="medical-hba1c-hpa"></a>
- **medical-hba1c-hpa**：[ 國民健康署：糖化血色素](https://www.hpa.gov.tw/Pages/List.aspx?nodeid=359+)

<a id="medical-mri-vghtpe"></a>
- **medical-mri-vghtpe**：[ 臺北榮總：磁振造影](https://ihealth.vghtpe.gov.tw/media/401)

<a id="previous-autosome"></a>
- **previous-autosome**：[ 臺中榮民總醫院：體染色體隱性遺傳](https://www.vghtc.gov.tw/News_Content/2586/13005)

<a id="previous-autosome-education"></a>
- **previous-autosome-education**：[ 國立臺灣科學教育館：體染色體顯性遺傳](https://www.ntsec.gov.tw/article/FileAtt.ashx?id=5634)

<a id="previous-skeleton"></a>
- **previous-skeleton**：[ 智慧財產局兩岸用語對照：俯式雪橇／鋼架雪車](https://www.tipo.gov.tw/wSite/public/Attachment/0/f1746433990859.pdf)

<a id="previous-xiao"></a>
- **previous-xiao**：[ 教育部重編國語辭典：簫](https://dict.revised.moe.edu.tw/dictView.jsp?ID=7025&q=1&word=1)

<a id="previous-counter-strike"></a>
- **previous-counter-strike**：[ Valve 繁體中文官網：絕對武力](https://www.counter-strike.net/?l=tchinese)

<a id="previous-big-bang"></a>
- **previous-big-bang**：[ Netflix 台灣：宅男行不行](https://www.netflix.com/tw/title/70143830)

<a id="previous-prison-break"></a>
- **previous-prison-break**：[ Disney+ 台灣：越獄風雲](https://www.disneyplus.com/zh-tw/browse/entity-d1d023da-ebb7-474c-b858-c4890e2d5757)

<a id="previous-lost"></a>
- **previous-lost**：[ Apple TV 台灣：LOST檔案](https://tv.apple.com/tw/show/lost檔案/umc.cmc.224vt3dmosi0331a2yc8ny3l8)

<a id="previous-nigeru"></a>
- **previous-nigeru**：[ 緯來日本台：月薪嬌妻](https://japan.videoland.com.tw/vl_japan-article.php?id=2998)

<a id="previous-killing-eve"></a>
- **previous-killing-eve**：[ LINE TV：追殺夏娃](https://www.linetv.tw/drama/15502/behind/14128)

<a id="previous-broke-girls"></a>
- **previous-broke-girls**：[ Prime Video 繁體中文：破產姊妹花](https://www.primevideo.com/-/zh_TW/detail/0NFED42SIL07AH3L7VW19NFSCW)

<a id="previous-wave-makers"></a>
- **previous-wave-makers**：[ Netflix 台灣：人選之人—造浪者](https://www.netflix.com/tw/title/81655481)

<a id="previous-good-doctor"></a>
- **previous-good-doctor**：[ Netflix 台灣：良醫墨非](https://www.netflix.com/tw/title/80176893)

<a id="previous-kilimanjaro"></a>
- **previous-kilimanjaro**：[ 教育部重編國語辭典：吉力馬札羅山](https://dict.revised.moe.edu.tw/dictView.jsp?ID=87930&q=1&word=札)

## 可核對的檔案

- [完整重審與來源 JSON](taiwan-terminology-2026-10-30.json)
- [生物 180 題逐題表](taiwan-terminology-2026-10-30-biology.tsv)
- [已被取代的歷史紀錄](taiwan-usage-2026-10-29.md)

文件不納入遊戲公開檔案。回合時間、翻轉判定、抽題方式與所有題庫模式不變。

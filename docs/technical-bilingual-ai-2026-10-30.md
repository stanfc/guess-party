# 資工、電機中英術語與 AI 擴充（2026-10-30）

依使用者要求，資工、電機以相關領域背景的玩家為對象，中英並列，沒有自然中文名稱的技術可直接使用英文；這項例外只適用這兩個題庫。其他 36 個題庫未修改，包含迷因、生物與醫學。

## 題數與編選

- 資工：原有 180 題概念及順序全部保留，增加英文；另外新增 150 題 AI，共 330 題。
- 電機：原有 180 題概念及順序全部保留，增加英文。
- 全部 38 個題庫合計 6,965 題（混合模式另行去除跨題庫重複主名稱）。

AI 涵蓋學習方式、資料切分與評估、最佳化、傳統機器學習、神經網路、Transformer、LLM 與微調、RAG、推論、電腦視覺、生成模型及強化學習。LoRA、QLoRA、FlashAttention 等保留慣用英文，避免為了中文而硬譯。中文沿用台灣學術用法；英文縮寫在適用時一併提供。

逐題對照：[510 題 TSV](technical-bilingual-ai-2026-10-30.tsv)。這是本次編選對照，不更動前次生物術語稽核的歷史紀錄。

## 顯示與混合模式

中文主名稱維持大字，英文顯示於下一行；英文原文題可換行。中英名稱是同一道題、只判分一次，成績保留完整名稱。資料以每行一題儲存，英文空格不會切題。

「所有題庫」按主名稱去重，優先使用中英版本。例如神經網路只會出現一次。資工的 Transformer 架構與電機的變壓器（Transformer）是不同概念，兩者保留。

## 核對參考

以下為概念及英文名稱的第一手參考；不是宣稱每個中文譯名只有一種標準答案。

- [Stanford CS231n 課程](https://cs231n.stanford.edu/schedule.html)：深度學習、反向傳播與視覺模型。
- [PyTorch：Scaled Dot Product Attention](https://docs.pytorch.org/docs/stable/generated/torch.nn.functional.scaled_dot_product_attention.html)：注意力機制與相關英文名稱。
- [PyTorch：CrossEntropyLoss](https://docs.pytorch.org/docs/stable/generated/torch.nn.CrossEntropyLoss.html)：損失函數。
- [Hugging Face：PEFT](https://huggingface.co/docs/transformers/peft)：參數微調及相關方法。
- [Hugging Face：LoRA](https://huggingface.co/docs/peft/package_reference/lora)：LoRA 及相關變體。
- [Texas Instruments：MOSFET 與 slew rate](https://www.ti.com/document-viewer/lit/html/SBAA698A/GUID-B7639C84-29BC-48B3-BE65-2D49B5414A77)：電機元件名稱。

## 驗證

原有兩個題庫的 360 個中文主名稱逐題比對保留；其餘 36 個題庫與修改前資料完全相同。自動測試涵蓋中英解析、英文空格及縮寫括號、題數、混合去重及原有遊戲規則。

另以 Chrome 驗證 667×375、844×390 橫向尺寸的長中英題目、英文原文題、中文題及作答成績，題目未與計時或操作列重疊。

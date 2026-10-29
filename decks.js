// 題目以人工編選；同題庫不放入別名湊數，每個題庫至少 150 題。
const words = text => text.split(/[\s,，]+/u).filter(Boolean);
// 資工與電機每行一題，保留英文中的空格；中英名稱是同一道題。
const technicalWords = text => text.trim().split(/\n+/u).map(line => {
  const [chinese, english] = line.trim().split('|');
  return english ? `${chinese}（${english}）` : chinese;
});
export const decks = [
  {
    id: 'geography', icon: '◎', name: '世界地圖', category: '知識探險',
    description: '地名、地標與景點，靠提示環遊世界', color: '#8fcbd4',
    words: words(`
東京 京都 大阪 奈良 札幌 沖繩 富士山 東京鐵塔 晴空塔 清水寺
金閣寺 伏見稻荷大社 姬路城 嚴島神社 白川鄉 首爾 釜山 濟州島 景福宮 南山塔
曼谷 清邁 普吉島 大皇宮 吳哥窟 河內 下龍灣 胡志明市 會安 新加坡
魚尾獅 濱海灣花園 吉隆坡 雙子星大樓 檳城 峇里島 婆羅浮屠 馬尼拉 長灘島 馬爾地夫
新德里 泰姬瑪哈陵 孟買 加德滿都 喜馬拉雅山 聖母峰 不丹 杜拜 哈里發塔 阿布達比
佩特拉古城 死海 耶路撒冷 伊斯坦堡 聖索菲亞大教堂 卡帕多奇亞 棉堡 雅典 帕德嫩神殿 聖托里尼
羅馬 羅馬競技場 比薩斜塔 威尼斯 佛羅倫斯 米蘭大教堂 梵蒂岡 阿爾卑斯山 馬特洪峰 琉森
巴黎 艾菲爾鐵塔 羅浮宮 凱旋門 聖母院 凡爾賽宮 聖米歇爾山 尼斯 摩納哥 巴塞隆納
聖家堂 馬德里 阿爾罕布拉宮 塞維亞 里斯本 波多 倫敦 大笨鐘 倫敦塔橋 巨石陣
愛丁堡 都柏林 阿姆斯特丹 布魯塞爾 柏林 布蘭登堡門 新天鵝堡 布拉格 布拉格天文鐘 維也納
布達佩斯 克拉科夫 哥本哈根 小美人魚雕像 斯德哥爾摩 奧斯陸 卑爾根 赫爾辛基 雷克雅維克 冰島藍湖
莫斯科 聖彼得堡 貝加爾湖 紐約 自由女神像 帝國大廈 中央公園 華盛頓 白宮 舊金山
金門大橋 洛杉磯 好萊塢 拉斯維加斯 大峽谷 黃石國家公園 優勝美地 西雅圖 芝加哥 波士頓
阿拉斯加 夏威夷 檀香山 多倫多 尼加拉瀑布 溫哥華 班夫國家公園 魁北克 墨西哥城 奇琴伊察
哈瓦那 巴拿馬運河 里約熱內盧 基督像 亞馬遜雨林 伊瓜蘇瀑布 布宜諾斯艾利斯 馬丘比丘 復活節島 烏尤尼鹽湖
加拉巴哥群島 安地斯山脈 巴塔哥尼亞 開羅 吉薩金字塔 獅身人面像 撒哈拉沙漠 尼羅河 摩洛哥 馬拉喀什
塞倫蓋提 吉力馬札羅山 維多利亞瀑布 開普敦 好望角 馬達加斯加 雪梨 雪梨歌劇院 墨爾本 大堡礁
烏魯魯 紐西蘭 皇后鎮 米佛峽灣 南極洲 北極圈 格陵蘭 西伯利亞 長城 紫禁城
兵馬俑 桂林 九寨溝 張家界 黃山 布達拉宮 香港 維多利亞港 澳門 大三巴牌坊
    `),
  },
  {
    id: 'animals', icon: '♧', name: '動植物', category: '知識探險',
    description: '台灣身邊的動物與花草，從家裡、校園猜到田野', color: '#a1c49b',
    words: words(`
貓 狗 兔子 倉鼠 天竺鼠 松鼠 刺蝟 牛 羊 豬
馬 水牛 山羊 猴子 山豬 水鹿 山羌 石虎 穿山甲 台灣黑熊
雞 鴨 鵝 火雞 鴿子 麻雀 燕子 白頭翁 綠繡眼 喜鵲
烏鴉 斑鳩 白鷺鷥 夜鷺 翠鳥 啄木鳥 貓頭鷹 老鷹 鸚鵡 黑面琵鷺
蝴蝶 蛾 蜜蜂 虎頭蜂 螞蟻 蚊子 蒼蠅 蟑螂 蟋蟀 蟬
蜻蜓 豆娘 螳螂 竹節蟲 瓢蟲 金龜子 獨角仙 鍬形蟲 螢火蟲 蝗蟲
蜘蛛 蜈蚣 馬陸 蚯蚓 蝸牛 蛞蝓 青蛙 蟾蜍 蝌蚪 壁虎
蜥蜴 烏龜 鱉 雨傘節 眼鏡蛇 蛇 海龜 海豚 鯨魚 蝙蝠
金魚 孔雀魚 錦鯉 吳郭魚 虱目魚 鯉魚 鯰魚 泥鰍 鰻魚 鰱魚
鯊魚 魟魚 鯨鯊 翻車魚 飛魚 鮪魚 鯖魚 旗魚 秋刀魚 白帶魚
海馬 河豚 小丑魚 彈塗魚 烏賊 章魚 花枝 魷魚 水母 海星
螃蟹 寄居蟹 招潮蟹 龍蝦 溪蝦 蛤蜊 牡蠣 田螺 九孔 海膽
榕樹 樟樹 松樹 柏樹 楓樹 竹子 椰子樹 檳榔樹 木棉 鳳凰木
相思樹 青江菜 楓香 台灣欒樹 阿勃勒 苦楝 菠菜 花椰菜 紅檜 香蕉樹
玫瑰 向日葵 百合 康乃馨 菊花 蘭花 蝴蝶蘭 杜鵑 桂花 玉蘭花
櫻花 梅花 桃花 荷花 睡蓮 牽牛花 九重葛 茉莉花 雞蛋花 金針花
含羞草 咸豐草 酢漿草 蒲公英 狗尾草 芒草 幸運草 浮萍 姑婆芋 咬人貓
仙人掌 蘆薈 黃金葛 虎尾蘭 龜背芋 多肉植物 鹿角蕨 山蘇 筆筒樹 捕蠅草
九層塔 薄荷 迷迭香 薰衣草 香菜 蔥 蒜 韭菜 薑 辣椒
稻米 玉米 甘蔗 地瓜 芋頭 花生 黃豆 綠豆 紅豆 芝麻
番茄 茄子 小黃瓜 絲瓜 苦瓜 南瓜 冬瓜 高麗菜 空心菜 地瓜葉
芒果 荔枝 龍眼 芭樂 蓮霧 木瓜 鳳梨 西瓜 草莓 桑葚
    `),
  },
  {
    id: 'idioms', icon: '文', name: '成語諺語', category: '文化娛樂',
    description: '四字成語到生活俗諺，考驗聯想功力', color: '#e7b28d',
    words: words(`
畫蛇添足 畫龍點睛 對牛彈琴 守株待兔 亡羊補牢 狐假虎威 井底之蛙 杯弓蛇影 掩耳盜鈴 刻舟求劍
揠苗助長 一石二鳥 雞飛狗跳 雞同鴨講 馬到成功 龍飛鳳舞 虎頭蛇尾 狗急跳牆 魚目混珠 如魚得水
九牛一毛 盲人摸象 鶴立雞群 狼吞虎嚥 心花怒放 手舞足蹈 目瞪口呆 七嘴八舌 垂頭喪氣 眉開眼笑
愁眉苦臉 喜出望外 火冒三丈 汗流浹背 東張西望 左顧右盼 七上八下 三心二意 一心一意 半途而廢
雪中送炭 錦上添花 自相矛盾 水落石出 走馬看花 大海撈針 愚公移山 開門見山 天花亂墜 一箭雙鵰
背水一戰 破釜沉舟 臥薪嘗膽 四面楚歌 草木皆兵 風聲鶴唳 指鹿為馬 完璧歸趙 負荊請罪 三顧茅廬
望梅止渴 畫餅充飢 濫竽充數 買櫝還珠 南轅北轍 緣木求魚 守口如瓶 一諾千金 一言九鼎 千金一擲
一毛不拔 見錢眼開 財大氣粗 囊空如洗 捉襟見肘 入不敷出 開源節流 量入為出 細水長流 積少成多
滴水穿石 聚沙成塔 眾志成城 同舟共濟 風雨同舟 患難與共 肝膽相照 推心置腹 刎頸之交 萍水相逢
一見如故 相見恨晚 青梅竹馬 兩小無猜 門當戶對 白頭偕老 舉案齊眉 相敬如賓 破鏡重圓 藕斷絲連
一刀兩斷 不歡而散 反目成仇 勾心鬥角 爾虞我詐 明爭暗鬥 笑裡藏刀 口蜜腹劍 口是心非 陽奉陰違
表裡如一 光明磊落 問心無愧 理直氣壯 振振有詞 啞口無言 張口結舌 欲言又止 吞吞吐吐 閃爍其詞
滔滔不絕 口若懸河 妙語如珠 出口成章 對答如流 才高八斗 學富五車 博古通今 滿腹經綸 胸有成竹
熟能生巧 勤能補拙 笨鳥先飛 廢寢忘食 懸梁刺股 鑿壁偷光 囊螢映雪 孜孜不倦 溫故知新 舉一反三
觸類旁通 不恥下問 精益求精 高瞻遠矚 更上一層樓 不進則退 逆水行舟 急功近利 好高騖遠 眼高手低
人山人海 車水馬龍 門庭若市 絡繹不絕 水洩不通 萬人空巷 摩肩接踵 熱火朝天 門可羅雀 鴉雀無聲
遠水救不了近火 遠親不如近鄰 三個臭皮匠勝過一個諸葛亮 一分耕耘一分收穫 天下沒有白吃的午餐 吃得苦中苦方為人上人 吃一塹長一智 不經一事不長一智 路遙知馬力日久見人心 百聞不如一見
百尺竿頭更進一步 一寸光陰一寸金 人不可貌相海水不可斗量 萬事起頭難 好事多磨 船到橋頭自然直 車到山前必有路 天無絕人之路 山不轉路轉 留得青山在不怕沒柴燒
    `),
  },
  {
    id: 'daily', icon: '✦', name: '日常生活', category: '輕鬆入門',
    description: '從早到晚的小事，每個人都能來一局', color: '#f6c94c',
    words: words(`
鬧鐘 牙刷 吹風機 洗衣機 吸塵器 遙控器 電梯 紅綠燈 雨傘 口罩
背包 行李箱 信用卡 悠遊卡 充電器 耳機 自拍棒 便利商店 夜市 郵局
銀行 圖書館 電影院 遊樂園 動物園 公車 捷運 高鐵 計程車 腳踏車
機車 救護車 消防車 直升機 熱氣球 帳篷 睡袋 枕頭 棉被 沙發
冰箱 微波爐 電鍋 烤箱 冷氣 電風扇 掃地機器人 電腦 鍵盤 滑鼠
印表機 相機 望遠鏡 放大鏡 鏡子 梳子 指甲剪 拖鞋 安全帽 雨衣
洗髮精 潤髮乳 沐浴乳 肥皂 洗面乳 防曬乳 護唇膏 乳液 香水 體香劑
牙膏 牙線 漱口水 棉花棒 衛生紙 濕紙巾 衛生棉 面紙 毛巾 浴巾
洗衣精 柔軟精 漂白水 洗碗精 菜瓜布 海綿 抹布 拖把 掃把 畚箕
垃圾桶 垃圾袋 資源回收 廚餘桶 洗衣籃 衣架 曬衣夾 燙衣板 熨斗 除濕機
空氣清淨機 飲水機 熱水壺 咖啡機 果汁機 電磁爐 瓦斯爐 抽油煙機 烤麵包機 氣炸鍋
平底鍋 炒鍋 湯鍋 砧板 菜刀 削皮刀 開罐器 開瓶器 保鮮膜 鋁箔紙
保鮮盒 保溫瓶 馬克杯 玻璃杯 吸管 筷子 湯匙 叉子 盤子 碗公
床單 枕頭套 蚊帳 窗簾 地毯 抱枕 鞋櫃 衣櫃 書櫃 書桌
檯燈 吊燈 小夜燈 延長線 插座 插頭 電池 手電筒 螺絲起子 膠帶
剪刀 美工刀 釘書機 迴紋針 橡皮擦 立可帶 便利貼 原子筆 鉛筆 尺
鑰匙 鑰匙圈 錢包 零錢包 存錢筒 發票 收據 購物袋 紙箱 泡泡紙
預約掛號 排隊叫號 自助結帳 網路購物 超商取貨 貨到付款 掃描QR碼點餐 轉帳匯款 手機充電 設定鬧鐘
    `),
  },
  {
    id: 'jobs', icon: '☀', name: '職場', category: '輕鬆入門',
    description: '各行各業加上辦公室生存日常', color: '#8fcbd4',
    words: words(`
醫生 護理師 牙醫 獸醫 藥師 消防員 警察 老師 校長 廚師
麵包師傅 調酒師 咖啡師 服務生 外送員 司機 機師 空服員 船長 太空人
科學家 工程師 程式設計師 建築師 水電工 木工 油漆工 農夫 漁夫 園丁
花藝師 理髮師 化妝師 攝影師 導演 演員 歌手 舞者 模特兒 畫家
作家 記者 主播 律師 法官 會計師 房仲 導遊 翻譯 圖書館員
郵差 保全 清潔員 運動員 裁判 教練 救生員 魔術師 小丑 考古學家
社工師 心理師 營養師 物理治療師 職能治療師 語言治療師 牙體技術師 醫檢師 放射師 助產師
精算師 估價師 地政士 記帳士 稽核員 證券分析師 保險業務員 理財專員 銀行櫃員 稅務員
公務員 外交官 立法委員 里長 檢察官 書記官 法警 監所管理員 海巡人員 調查員
產品經理 專案經理 人資專員 行政助理 執行秘書 採購專員 客服專員 行銷企劃 社群小編 平面設計師
動畫師 插畫家 遊戲企劃 遊戲測試員 音效師 燈光師 舞台監督 剪輯師 配音員 經紀人
水族飼育員 寵物美容師 訓犬師 殯葬禮儀師 鑑識人員 調香師 品酒師 茶藝師 裁縫師 鐘錶師
履歷 自傳 面試 錄取通知 試用期 到職日 員工證 門禁卡 打卡機 薪資單
基本薪資 年終獎金 績效獎金 加班費 勞健保 勞退提繳 特別休假 補休 育嬰留停 病假
員工旅遊 尾牙 春酒 教育訓練 交接 離職 預告期間 資遣 退休 升遷
晨會 週會 視訊會議 腦力激盪 會議紀錄 簽呈 報價單 請款單 出差報告 工作日誌
專案時程 甘特圖 關鍵績效指標 年度預算 成本控管 業績目標 客戶拜訪 簡報 截止日期 工作排程
辦公室隔板 茶水間 影印機 碎紙機 投影機 白板 會議室 分機電話 公司信箱 自動回覆
遠端工作 彈性工時 輪班 值班 代理人 制式合約 職業傷害 職場霸凌 利益衝突 保密協議
    `),
  },
  {
    id: 'songs', icon: '♫', name: '華語金曲', category: '文化娛樂',
    description: '經典歌名大集合，可以哼旋律來提示', color: '#f0a8bd',
    words: words(`
晴天 七里香 稻香 青花瓷 夜曲 告白氣球 簡單愛 愛在西元前 雙截棍 龍捲風
星晴 安靜 黑色幽默 開不了口 半島鐵盒 回到過去 東風破 髮如雪 菊花台 千里之外
聽媽媽的話 不能說的秘密 蒲公英的約定 最長的電影 說好的幸福呢 蘭亭序 煙花易冷 說了再見 紅塵客棧 算什麼男人
突然好想你 知足 溫柔 倔強 戀愛ING 乾杯 派對動物 後來的我們 志明與春嬌 終結孤單
憨人 傷心的人別聽慢歌 你不是真正的快樂 如煙 我不願讓你一個人 星空 擁抱 人生海海 盛夏光年 時光機
十年 K歌之王 浮誇 愛情轉移 好久不見 你的背包 淘汰 陰天快樂 陪你度過漫長歲月 孤勇者
紅豆 我願意 棋子 天空 但願人長久 夢中人 人間 匆匆那年 因為愛情 矜持
聽海 原來你什麼都不想要 姊妹 解脫 我可以抱你嗎 三天三夜 站在高崗上 如果你也聽說 記得 連名帶姓
江南 一千年以後 曹操 小酒窩 她說 修煉愛情 可惜沒如果 不為誰而作的歌 那些你很冒險的夢 背對背擁抱
天黑黑 綠光 遇見 我懷念的 開始懂了 我不難過 同類 逆光 我要的幸福 神奇
愛你 睫毛彎彎 彩虹的微笑 第一次愛的人 大眠 那年夏天寧靜的海 當你 月光 睜一隻眼閉一隻眼 我會好好的
倒帶 日不落 舞孃 說愛你 看我72變 布拉格廣場 野蠻遊戲 大藝術家 玫瑰少年 騎士精神
勇氣 分手快樂 寧夏 暖暖 可惜不是你 會呼吸的痛 情歌 崇拜 慢冷 燕尾蝶
後來 很愛很愛你 為愛痴狂 成全 原來你也在這裡 遇見幸福的事 當愛在靠近 一輩子的孤單 我很好 親愛的路人
童話 第一次 約定 掌心 朋友 心太軟 對面的女孩看過來 浪花一朵朵 傷心太平洋 依靠
吻別 祝福 一千個傷心的理由 每天愛你多一些 一路上有你 她來聽我的演唱會 情書 如果這都不算愛 吻得太逼真 情非得已
新不了情 至少還有你 如果沒有你 沒那麼簡單 泡沫 光年之外 喜歡你 演員 你還要我怎樣 醜八怪
小幸運 那些年 追光者 想見你想見你想見你 刻在我心底的名字 如果可以 我很好騙 愛人錯過 披星戴月的想你 好不容易
    `),
  },
  {
    id: 'law', icon: '§', name: '法律用語', category: '高手挑戰',
    description: '從物權到刑訴，法律人請接招', color: '#b7a5dc',
    words: words(`
意思表示 法律行為 負擔行為 處分行為 物權行為 債權行為 無因管理 不當得利 侵權行為 締約上過失
行為能力 權利能力 意思能力 限制行為能力 無行為能力 法定代理 意定代理 表見代理 無權代理 自己代理
雙方代理 代理權授與 善意第三人 通謀虛偽意思表示 錯誤 詐欺 脅迫 撤銷權 形成權 抗辯權
請求權 支配權 消滅時效 除斥期間 時效中斷 時效不完成 停止條件 解除條件 始期 終期
誠實信用原則 權利濫用 禁止反言 契約自由 情事變更原則 債務不履行 給付不能 給付遲延 不完全給付 受領遲延
同時履行抗辯權 不安抗辯權 先訴抗辯權 代位權 詐害債權撤銷權 債權讓與 債務承擔 第三人利益契約 連帶債務 不真正連帶債務
無過失責任 過失相抵 損益相抵 回復原狀 所失利益 所受損害 精神慰撫金 違約金 定金 抵銷
提存 混同 清償代位 免除 代物清償 買賣 租賃 承攬 委任 保證
物權法定主義 一物一權主義 公示原則 公信原則 善意取得 占有改定 簡易交付 指示交付 動產質權 不動產抵押權
最高限額抵押權 留置權 地上權 農育權 不動產役權 典權 占有保護請求權 所有物返還請求權 妨害除去請求權 妨害防止請求權
取得時效 分別共有 公同共有 共有物分割 區分所有權 剩餘財產分配請求權 特留分 應繼分 遺產酌給請求權 拋棄繼承
罪刑法定原則 法益 構成要件該當性 違法性 有責性 不作為犯 保證人地位 未遂犯 不能未遂 中止未遂
間接正犯 共同正犯 教唆犯 幫助犯 正當防衛 緊急避難 阻卻違法事由 阻卻罪責事由 責任能力 原因自由行為
直接故意 間接故意 有認識過失 無認識過失 客觀歸責 相當因果關係 容許風險 信賴原則 禁止錯誤 容許構成要件錯誤
想像競合 法條競合 數罪併罰 接續犯 繼續犯 結果犯 行為犯 危險犯 身分犯 加重結果犯
無罪推定 不自證己罪 罪疑唯輕 嚴格證明 自由心證 證據能力 證明力 傳聞法則 毒樹果實理論 違法取證
搜索 扣押 羈押 羈押禁見 具保 責付 限制住居 緩起訴 職權不起訴 再議
告訴乃論 自訴 公訴 交互詰問 主詰問 反詰問 誘導詰問 拘提 通緝 提審
既判力 形成力 執行力 訴訟標的 訴之利益 當事人適格 舉證責任 訴訟擔當 既判力客觀範圍 爭點效
一事不再理 訴訟繫屬 重複起訴禁止 辯論主義 處分權主義 職權探知主義 訴之變更 訴之追加 反訴 訴訟參加
假扣押 假處分 定暫時狀態處分 假執行 支付命令 督促程序 再審之訴 上訴 抗告 非訟事件
法律保留原則 法律優位原則 比例原則 平等原則 信賴保護原則 行政處分 行政契約 行政罰 行政執行 訴願
    `),
  },
  {
    id: 'dinosaurs', icon: '◭', name: '恐龍圖鑑', category: '高手挑戰',
    description: '暴龍只是入門，冷門恐龍迷的主場', color: '#b6bd8d',
    words: words(`
暴龍 三角龍 劍龍 腕龍 梁龍 雷龍 迷惑龍 異特龍 伶盜龍 恐爪龍
猶他盜龍 阿基里斯龍 馳龍 小盜龍 中華龍鳥 尾羽龍 始祖鳥 近鳥龍 耀龍 擅攀鳥龍
棘龍 重爪龍 似鱷龍 激龍 魚獵龍 鯊齒龍 南方巨獸龍 馬普龍 高棘龍 食肉牛龍
阿貝力龍 瑪君龍 奧卡龍 爆誕龍 蠍獵龍 皺褶龍 帝王龍 怪踝龍 雙脊龍 冰脊龍
單脊龍 角鼻龍 蠻龍 斑龍 非洲獵龍 永川龍 中華盜龍 氣龍 懼龍 蛇髮女怪龍
艾伯塔龍 特暴龍 分支龍 虔州龍 雄關龍 帝龍 冠龍 羽王龍 狹盤龍 阿巴拉契亞龍
似鳥龍 似鴕龍 似雞龍 似鵝龍 似金翅鳥龍 恐手龍 似鵜鶘龍 竊蛋龍 擬鳥龍 葬火龍
可汗龍 河源龍 巨盜龍 天青石龍 斑比盜龍 細爪龍 似蜥鳥龍 中國獵龍 拜倫龍 烏爾巴克齒龍
鐮刀龍 懶爪龍 北票龍 阿拉善龍 肅州龍 南雄龍 內蒙古龍 凌源龍 建昌龍 慢龍
甲龍 包頭龍 多刺甲龍 結節龍 蜥結龍 埃德蒙頓甲龍 加斯頓龍 敏迷龍 匈牙利龍 北方盾龍
美甲龍 多智龍 盤足龍 戈壁龍 沙漠龍 小盾龍 莫阿大學龍 林龍 天鎮龍 無齒甲龍
沱江龍 華陽龍 釘背龍 巨棘龍 嘉陵龍 重慶龍 勒蘇維斯龍 銳龍 米拉加亞龍 劍節龍
原角龍 鸚鵡嘴龍 隱龍 朝陽龍 遼寧角龍 古角龍 黎明角龍 鷹角龍 纖角龍 小角龍
矮角龍 蒙大拿角龍 烏丹角龍 祖尼角龍 尖角龍 戟龍 厚鼻龍 野牛龍 河神龍 梅杜莎角龍
惡魔角龍 異角龍 艾伯塔角龍 開角龍 五角龍 牛角龍 近角龍 無鼻角龍 猶他角龍 華麗角龍
中國角龍 諸城角龍 祖魯龍 傾角龍 厚頭龍 劍角龍 圓頭龍 傾頭龍 平頭龍 高頭龍
禽龍 曼特爾龍 豪勇龍 高吻龍 腱龍 彎龍 橡樹龍 稜齒龍 奔山龍 萊索托龍
鴨嘴龍 埃德蒙頓龍 慈母龍 副櫛龍 櫛龍 盔龍 賴氏龍 亞冠龍 格里芬龍 短冠龍
山東龍 青島龍 巴克龍 原巴克龍 譚氏龍 沼澤龍 阿拉羅龍 薩哈利龍 卡戎龍 巨保羅龍
阿根廷龍 巴塔哥巨龍 普爾塔龍 無畏龍 薩爾塔龍 阿拉莫龍 馬門溪龍 峨眉龍 蜀龍 華北龍
長頸巨龍 板龍 黑丘龍 里奧哈龍 大椎龍 雲南龍 金山龍 祿豐龍 鯨龍 火山齒龍
    `),
  },
  {
    id: 'food', icon: '◒', name: '吃貨集合', category: '輕鬆入門',
    description: '台灣小吃到異國料理，猜完剛好吃宵夜', color: '#ff9476',
    words: words(`
珍珠奶茶 臭豆腐 蚵仔煎 滷肉飯 牛肉麵 小籠包 鹽酥雞 雞排 地瓜球 大腸包小腸
肉圓 碗粿 米血糕 豬血湯 蔥抓餅 蛋餅 飯糰 豆漿 油條 燒餅
蘿蔔糕 涼麵 麻辣鍋 薑母鴨 羊肉爐 火鍋 壽司 拉麵 披薩 漢堡
薯條 炸雞 義大利麵 咖哩飯 蛋包飯 章魚燒 可麗餅 鬆餅 甜甜圈 馬卡龍
提拉米蘇 布丁 冰淇淋 剉冰 豆花 仙草 愛玉 鳳梨酥 太陽餅 蛋黃酥
月餅 粽子 湯圓 紅豆餅 雞蛋糕 烤玉米 烤地瓜 皮蛋 榴槤 芒果
擔仔麵 蚵仔麵線 肉羹麵 鍋燒意麵 炒米粉 炒粄條 客家小炒 薑絲大腸 三杯雞 宮保雞丁
糖醋里肌 魚香茄子 麻婆豆腐 蔥爆牛肉 蒜泥白肉 東坡肉 梅干扣肉 佛跳牆 清蒸鱸魚 紅燒獅子頭
酸辣湯 貢丸湯 四神湯 排骨酥湯 金針排骨湯 麻油雞 筒仔米糕 油飯 潤餅 刈包
豬腳麵線 鴨肉飯 雞肉飯 排骨飯 燒臘飯 海南雞飯 叉燒包 流沙包 腸粉 蝦餃
燒賣 港式蘿蔔糕 葡式蛋塔 菠蘿油 西多士 咖椰吐司 叻沙 肉骨茶 沙嗲 打拋豬
月亮蝦餅 泰式酸辣蝦湯 綠咖哩 椰汁雞湯 芒果糯米飯 越南河粉 越南春捲 法國麵包 潛艇堡 墨西哥捲餅
墨西哥夾餅 玉米濃湯 南瓜濃湯 洋蔥湯 凱薩沙拉 烤雞 沙威瑪 鷹嘴豆泥 西班牙海鮮燉飯 義大利燉飯
千層麵 焗烤飯 烤田螺 油封鴨 鵝肝 威靈頓牛排 班尼迪克蛋 美式煎餅 德國豬腳 德式香腸
韓式烤肉 石鍋拌飯 韓式炸雞 海鮮煎餅 部隊鍋 辣炒年糕 泡菜鍋 冷麵 參雞湯 紫菜包飯
天婦羅 豬排丼 親子丼 鰻魚飯 茶碗蒸 玉子燒 壽喜燒 關東煮 廣島燒 大阪燒
銅鑼燒 大福 蕨餅 羊羹 抹茶聖代 可頌 肉桂捲 司康 舒芙蕾 檸檬塔
蒙布朗 巴斯克乳酪蛋糕 黑森林蛋糕 歐培拉蛋糕 拿破崙千層 草莓大福 杏仁豆腐 楊枝甘露 燒仙草 八寶粥
    `),
  },
  {
    id: 'actions', icon: '↗', name: '比手畫腳', category: '輕鬆入門',
    description: '不用開口也能玩，全身都是提示', color: '#b7a5dc',
    words: words(`
刷牙 洗頭 吹頭髮 刮鬍子 化妝 敷面膜 打噴嚏 打嗝 打哈欠 打呼
夢遊 跳繩 游泳 潛水 衝浪 滑雪 溜冰 騎馬 射箭 打保齡球
打棒球 打籃球 踢足球 打羽球 舉重 伏地挺身 仰臥起坐 跳芭蕾 跳街舞 打太極
彈鋼琴 拉小提琴 打鼓 吹笛子 指揮 唱歌 拍照 自拍 釣魚 烤肉
炒菜 揉麵團 切洋蔥 洗碗 拖地 曬衣服 縫衣服 換尿布 遛狗 澆花
搭帳篷 攀岩 走鋼索 變魔術 求婚 握手 擁抱 比愛心 坐雲霄飛車 追公車
擠牙膏 戴隱形眼鏡 點眼藥水 掏耳朵 剪指甲 綁鞋帶 穿襪子 拉拉鍊 扣鈕扣 打領帶
撐雨傘 穿雨衣 甩雨水 擦玻璃 換燈泡 通馬桶 修水管 鎖螺絲 量尺寸 搬家
推購物車 刷條碼 刷信用卡 找零錢 拆包裹 戳破泡泡紙 折紙飛機 放風箏 吹泡泡 玩溜溜球
轉呼拉圈 踩高蹺 跳房子 躲貓貓 拔河 丟沙包 打水漂 堆雪人 打雪仗 滾雪球
划船 划獨木舟 立槳 騎腳踏車 騎機車 開車 倒車入庫 換輪胎 加油 洗車
跳傘 高空彈跳 滑翔傘 滑草 滑板 直排輪 滑水 打高爾夫 打桌球 打網球
打拳擊 練瑜珈 蹲馬步 做深蹲 開合跳 棒式 競走 短跑起跑 跳遠 跳高
撐竿跳 丟鐵餅 擲標槍 丟鉛球 擊劍 撐船 拋接雜耍 吞火 噴火 口技
吹口哨 吹氣球 吹蠟燭 舔冰淇淋 吃辣 檸檬酸到皺眉 狼吞虎嚥 喝珍珠奶茶 剝瓜子 剝蝦
包水餃 擀麵皮 打蛋 刨冰 翻煎餅 炸薯條 灑胡椒 磨咖啡 拉花 泡茶
抓蚊子 趕蒼蠅 拔蘿蔔 摘水果 割稻子 餵雞 擠牛奶 趕羊 梳羊毛 撿雞蛋
偷看考卷 舉手發問 擦黑板 寫書法 蓋印章 數鈔票 打算盤 翻書 查字典 對鏡子練笑容
    `),
  },
  {
    id: 'taiwan', icon: '島', name: '台灣走透透', category: '文化娛樂',
    description: '山海景點、在地文化與熟悉的台灣味', color: '#8fcbb2',
    words: words(`
台北101 中正紀念堂 國父紀念館 故宮博物院 龍山寺 大稻埕 迪化街 西門町 象山 士林夜市
饒河街夜市 寧夏夜市 北投溫泉 陽明山 擎天崗 竹子湖 地熱谷 貓空 兒童新樂園 台北市立動物園
淡水老街 漁人碼頭 八里 九份 金瓜石 黃金博物館 十分瀑布 平溪天燈 猴硐 貢寮
福隆海水浴場 野柳女王頭 金山老街 石門洞 三芝 三峽老街 鶯歌陶瓷博物館 板橋林家花園 烏來 內洞瀑布
基隆廟口 和平島 潮境公園 正濱漁港 八斗子 大溪老街 石門水庫 拉拉山 小烏來 桃園神社
竹圍漁港 永安漁港 小人國 六福村 小叮噹科學主題樂園 內灣老街 北埔老街 十七公里海岸線 南寮漁港 司馬庫斯
雪霸國家公園 觀霧 合歡山 武嶺 清境農場 日月潭 九族文化村 溪頭 杉林溪 忘憂森林
集集車站 車埕 埔里酒廠 紙教堂 桃米生態村 鹿港老街 鹿港天后宮 八卦山大佛 田尾公路花園 扇形車庫
高美濕地 彩虹眷村 台中國家歌劇院 國立自然科學博物館 逢甲夜市 審計新村 宮原眼科 東海大學 霧峰林家 光復新村
大甲鎮瀾宮 白沙屯拱天宮 飛牛牧場 勝興車站 龍騰斷橋 三義木雕 南庄老街 苗栗客家圓樓 大湖草莓 泰安溫泉
阿里山 奮起湖 祝山 玉山 北回歸線標誌 嘉義檜意森活村 故宮南院 布袋高跟鞋教堂 東石漁人碼頭 北港朝天宮
西螺大橋 古坑咖啡 劍湖山世界 虎尾糖廠 安平古堡 安平樹屋 赤崁樓 奇美博物館 十鼓文創園區 藍晒圖文創園區
神農街 孔廟 四草綠色隧道 七股鹽山 井仔腳瓦盤鹽田 關子嶺溫泉 駁二藝術特區 衛武營 蓮池潭 佛光山
旗津 西子灣 打狗英國領事館 愛河 美濃紙傘 田寮月世界 茂林紫蝶幽谷 夢時代 澄清湖 壽山
墾丁國家公園 鵝鑾鼻 龍磐草原 船帆石 南灣 海生館 東港大鵬灣 小琉球 琉球花瓶岩 霧台
三仙台 多良車站 池上伯朗大道 鹿野高台 知本溫泉 初鹿牧場 鐵花村 綠島 蘭嶼 朝日溫泉
七星潭 清水斷崖 太魯閣 錐麓古道 鯉魚潭 瑞穗牧場 石梯坪 六十石山 雲山水 光復糖廠
龜山島 太平山 見晴懷古步道 礁溪溫泉 羅東夜市 蘭陽博物館 傳統藝術中心 冬山河 梅花湖 南方澳
澎湖雙心石滬 澎湖跨海大橋 七美 望安 吉貝沙尾 金門風獅爺 翟山坑道 莒光樓 馬祖藍眼淚 芹壁聚落
布袋戲 歌仔戲 陣頭 八家將 電音三太子 辦桌 流水席 搶孤 蜂炮 炸寒單
    `),
  },
  {
    id: 'movies', icon: '▶', name: '電影之夜', category: '文化娛樂',
    description: '經典片名與銀幕角色，演技派出動', color: '#c7b5d8',
    words: words(`
鐵達尼號 阿凡達 復仇者聯盟 鋼鐵人 美國隊長 雷神索爾 黑豹 奇異博士 蜘蛛人 蟻人
星際大戰 星際效應 全面啟動 駭客任務 回到未來 侏羅紀公園 侏羅紀世界 金剛 哥吉拉 魔戒
哈利波特 納尼亞傳奇 神鬼奇航 變形金剛 不可能的任務 玩命關頭 捍衛戰士 捍衛任務 蝙蝠俠 黑暗騎士
小丑 神力女超人 超人 水行俠 X戰警 死侍 金鋼狼 星際異攻隊 黑寡婦 驚奇隊長
魔鬼終結者 異形 終極戰士 第五元素 絕地救援 地心引力 明天過後 ID4星際終結者 世界末日 彗星撞地球
大白鯊 神鬼傳奇 印第安納瓊斯 國家寶藏 達文西密碼 神鬼認證 神隱任務 特務間諜 金牌特務
教父 黑色追緝令 刺激1995 鬥陣俱樂部 阿甘正傳 綠色奇蹟 雨人 美麗境界 心靈捕手 楚門的世界
幸福綠皮書 寄生上流 與神同行 我只是個計程車司機 屍速列車 哭聲 下女的誘惑 奇蹟男孩 模仿遊戲
穿著Prada的惡魔 實習大叔 高年級實習生 麻雀變公主 麻辣女王 金法尤物 辣媽辣妹 戀夏500日 樂來越愛你 真愛每一天
愛是您愛是我 新娘百分百 新娘不是我 電子情書 當哈利碰上莎莉 第六感生死戀 靈異孤兒院 鬼店 厲陰宅 安娜貝爾
牠 七夜怪談 咒怨 暫時停止呼吸 噤界 逃出絕命鎮 分裂 控制 記憶拼圖 隔離島
孤兒怨 大法師 大逃殺 飢餓遊戲 分歧者 移動迷宮 怪奇孤兒院 怪獸與牠們的產地 巧克力冒險工廠 王牌天神
王牌大騙子 阿呆與阿瓜 摩登大聖 博物館驚魂夜 野蠻遊戲 小鬼當家 史密斯任務 鬼靈精 料理鼠王 瓦力
天外奇蹟 腦筋急轉彎 可可夜總會 靈魂急轉彎 元素方城市 動物方城市 海底總動員 玩具總動員 超人特攻隊 怪獸電力公司
怪獸大學 汽車總動員 冰雪奇緣 魔髮奇緣 海洋奇緣 獅子王 美女與野獸 阿拉丁 小美人魚 花木蘭
魔法滿屋 無敵破壞王 大英雄天團 史瑞克 馬達加斯加 功夫熊貓 馴龍高手 冰原歷險記 神偷奶爸 寵物當家
海角七號 賽德克巴萊 艋舺 返校 孤味 陽光普照 聽說 我的少女時代 那些年我們一起追的女孩 月老
刻在你心底的名字 關於我和鬼變成家人的那件事 做工的人 當男人戀愛時 瀑布 大佛普拉斯 血觀音 目擊者 甜蜜蜜 無間道
重慶森林 花樣年華 霸王別姬 活著 臥虎藏龍 少林足球 功夫 食神 唐伯虎點秋香 九品芝麻官
鋒迴路轉 奧本海默
    `),
  },
  {
    id: 'anime', icon: '☆', name: '動漫宇宙', category: '文化娛樂',
    description: '作品、角色和招式，宅友默契測驗', color: '#eaa9b0',
    words: words(`
哆啦A夢 大雄 靜香 胖虎 小夫 任意門 竹蜻蜓 時光機 縮小燈 記憶吐司
名偵探柯南 江戶川柯南 工藤新一 毛利蘭 毛利小五郎 灰原哀 怪盜基德 服部平次 赤井秀一 安室透
航海王 蒙其D魯夫 羅羅亞索隆 娜美 騙人布 香吉士 多尼多尼喬巴 妮可羅賓 佛朗基 布魯克
吉貝爾 波特卡斯D艾斯 香克斯 波雅漢考克 特拉法爾加羅 哥爾D羅傑 惡魔果實 霸氣 草帽海賊團 千陽號
火影忍者 漩渦鳴人 宇智波佐助 春野櫻 旗木卡卡西 我愛羅 自來也 大蛇丸 綱手 宇智波鼬
影分身之術 螺旋丸 千鳥 寫輪眼 白眼 九尾 進擊的巨人 艾連葉卡 米卡莎 里維兵長
阿爾敏 調查兵團 立體機動裝置 超大型巨人 鬼滅之刃 竈門炭治郎 竈門禰豆子 我妻善逸 嘴平伊之助 富岡義勇
蝴蝶忍 煉獄杏壽郎 日輪刀 水之呼吸 咒術迴戰 虎杖悠仁 伏黑惠 釘崎野薔薇 五條悟 兩面宿儺
領域展開 無量空處 SPY×FAMILY間諜家家酒 安妮亞 約兒 洛伊德 彭德 排球少年 日向翔陽 影山飛雄
灌籃高手 櫻木花道 流川楓 赤木剛憲 三井壽 宮城良田 湘北高中 影子籃球員 網球王子 越前龍馬
七龍珠 孫悟空 貝吉達 比克 弗利沙 魔人普烏 龜派氣功 超級賽亞人 筋斗雲 神龍
美少女戰士 月野兔 水星仙子 火星仙子 木星仙子 金星仙子 木之本櫻 庫洛牌 小可 魔法少女小圓
蠟筆小新 野原新之助 野原美冴 野原廣志 野原小葵 小白 櫻桃小丸子 花輪同學 蛋黃哥 角落小夥伴
皮卡丘 小智 噴火龍 傑尼龜 妙蛙種子 伊布 卡比獸 可達鴨 超夢 百變怪
數碼寶貝 亞古獸 加布獸 天女獸 鋼之鍊金術師 愛德華愛力克 阿爾馮斯愛力克 等價交換 死亡筆記本 夜神月
路克 彌海砂 獵人 小傑 奇犽 酷拉皮卡 雷歐力 西索 庫洛洛 念能力
犬夜叉 日暮籬 殺生丸 桔梗 四魂之玉 銀魂 坂田銀時 神樂 志村新八 定春
新世紀福音戰士 碇真嗣 綾波零 明日香 初號機 AT力場 鋼彈 夏目友人帳 貓咪老師 蟲師
神隱少女 無臉男 白龍 龍貓 霍爾的移動城堡 卡西法 魔女宅急便 琪琪 天空之城 波妞

我的英雄學院 綠谷出久 爆豪勝己 麗日御茶子 轟焦凍 飯田天哉 蛙吹梅雨 歐爾麥特 相澤消太 死柄木弔
    `),
  },
  {
    id: 'science', icon: '⚗', name: '科學研究所', category: '知識探險',
    description: '宇宙、物理、生物，一起大開眼界', color: '#95becf',
    words: words(`
太陽系 銀河系 黑洞 白洞 蟲洞 中子星 白矮星 紅巨星 超新星 脈衝星
水星 金星 地球 火星 木星 土星 天王星 海王星 冥王星 月球
小行星 彗星 流星 隕石 流星雨 星雲 星團 星座 獵戶座 北斗七星
北極星 天狼星 織女星 牛郎星 仙女座星系 大麥哲倫星系 歐特雲 古柏帶 小行星帶 太陽風
日食 月食 極光 潮汐 重力波 重力 失重 逃逸速度 光年 天文單位
大霹靂 宇宙膨脹 暗物質 暗能量 宇宙微波背景輻射 紅移 都卜勒效應 克卜勒定律 相對論 時間膨脹
量子力學 薛丁格的貓 波粒二象性 不確定性原理 量子糾纏 量子穿隧 光電效應 雙狹縫實驗 布朗運動 熵
原子 分子 質子 中子 電子 夸克 微中子 反物質 同位素 放射性衰變
核分裂 核融合 週期表 氫 氦 碳 氧 氮 鈉 氯
鐵 銅 金 銀 汞 鎢 鈾 石墨 鑽石 石墨烯
酸鹼中和 氧化還原 電解 觸媒 酵素 滲透壓 表面張力 毛細現象 浮力 折射
反射 繞射 干涉 共振 電磁感應 電阻 超導體 半導體 靜電 電漿
細胞 細胞膜 細胞核 粒線體 葉綠體 核糖體 染色體 基因 去氧核糖核酸 核糖核酸
光合作用 呼吸作用 有絲分裂 減數分裂 幹細胞 抗體 抗原 疫苗 病毒 細菌
真菌 藻類 寄生蟲 共生 食物鏈 食物網 生態系 生物多樣性 天擇 演化
遺傳 突變 隱性基因 顯性基因 血型 複製羊 基因編輯 基因轉殖 微生物 發酵
板塊運動 地震 震央 震源 地震波 火山 岩漿 熔岩 斷層 褶皺
沉積岩 火成岩 變質岩 化石 琥珀 冰河 冰山 永凍土 海溝 中洋脊
溫室效應 臭氧層 酸雨 聖嬰現象 反聖嬰現象 科氏力 龍捲風 颱風 雷暴 雲海
水循環 蒸發 凝結 昇華 凝固 熔化 沸點 絕對零度 絕對濕度 比熱
    `),
  },
  {
    id: 'sports', icon: '◉', name: '運動競技場', category: '輕鬆入門',
    description: '球類、賽事、招式，動起來就有提示', color: '#b6c98e',
    words: words(`
棒球 籃球 足球 羽球 桌球 網球 排球 沙灘排球 橄欖球 美式足球
壘球 手球 水球 曲棍球 冰上曲棍球 高爾夫 保齡球 撞球 壁球 袋棍球
拳擊 跆拳道 柔道 空手道 劍道 合氣道 巴西柔術 摔角 相撲 擊劍
射箭 射擊 鐵人三項 現代五項 十項全能 七項全能 馬拉松 半馬 越野跑 競走
短跑 接力賽 跨欄 障礙賽跑 跳高 跳遠 三級跳遠 撐竿跳高 鉛球 鐵餅
鏈球 標槍 游泳 自由式 蛙式 仰式 蝶式 混合式 跳水 水上芭蕾
競速滑冰 短道競速滑冰 花式滑冰 冰壺 越野滑雪 高山滑雪 跳台滑雪 自由式滑雪 滑雪板 雪車
雪橇 俯式雪橇 衝浪 風浪板 帆船 獨木舟 輕艇激流 划船 立槳 滑水
競技體操 韻律體操 彈翻床 地板運動 鞍馬 吊環 跳馬 雙槓 單槓 平衡木
高低槓 霹靂舞 攀岩 抱石 舉重 抓舉 挺舉 健力 地板滾球 滑板
自由車 BMX越野車 登山車 公路車 場地自由車 馬術 障礙超越 盛裝舞步 賽馬 馬球
一級方程式 世界拉力錦標賽 耐力賽 摩托車大獎賽 小型賽車 電競 西洋棋 圍棋 象棋 橋牌
全壘打 安打 三振 保送 盜壘 雙殺 觸身球 高飛犧牲打 滿貫全壘打 再見安打
投手 捕手 一壘手 游擊手 中外野手 指定打擊 牛棚 救援投手 先發投手 代打
灌籃 三分球 罰球 籃板球 阻攻 抄截 運球 走步 二次運球 帶球撞人
越位 角球 自由球 十二碼 烏龍球 帽子戲法 黃牌 紅牌 延長賽 傷停補時
發球 破發 決勝局 局點 賽末點 大滿貫 扣殺 吊球 殺球 放小球
奧運 帕運 亞運 世大運 世界盃 歐洲盃 超級盃 台灣大賽 湯姆斯盃 尤伯盃
    `),
  },
  {
    id: 'history', icon: '古', name: '歷史時光機', category: '知識探險',
    description: '人物、事件、文明，穿越課本來猜題', color: '#d4b891',
    words: words(`
秦始皇 漢武帝 唐太宗 武則天 宋太祖 宋仁宗 明太祖 永樂帝 康熙 乾隆
孔子 孟子 老子 莊子 墨子 荀子 韓非子 孫子 司馬遷 司馬光
屈原 李白 杜甫 白居易 蘇軾 李清照 辛棄疾 陶淵明 王羲之 吳道子
張衡 蔡倫 祖沖之 沈括 畢昇 李時珍 徐光啟 郭守敬 黃道婆 宋應星
諸葛亮 關羽 張飛 趙雲 劉備 曹操 孫權 司馬懿 周瑜 呂布
岳飛 文天祥 戚繼光 鄭成功 鄭和 張騫 班超 玄奘 鑑真 王昭君
蘇格拉底 柏拉圖 亞里斯多德 亞歷山大大帝 凱撒 奧古斯都 克麗奧佩特拉 漢尼拔 斯巴達克斯 君士坦丁大帝
查理曼 聖女貞德 理查一世 薩拉丁 成吉思汗 忽必烈 帖木兒 伊凡雷帝 彼得大帝 葉卡捷琳娜二世
路易十四 拿破崙 華盛頓 林肯 傑佛遜 俾斯麥 維多利亞女王 伊莉莎白一世 甘地 曼德拉
哥倫布 麥哲倫 達伽馬 馬可波羅 庫克船長 達爾文 牛頓 伽利略 哥白尼 克卜勒
文藝復興 宗教改革 啟蒙運動 工業革命 法國大革命 美國獨立戰爭 南北戰爭 俄國革命 明治維新 辛亥革命
第一次世界大戰 第二次世界大戰 冷戰 柏林圍牆倒塌 古巴飛彈危機 諾曼第登陸 珍珠港事件 中途島海戰 滑鐵盧戰役 特洛伊戰爭
馬拉松戰役 溫泉關戰役 坎尼會戰 百年戰爭 玫瑰戰爭 三十年戰爭 七年戰爭 十字軍東征 黑死病 大航海時代
絲路 茶馬古道 三角貿易 波士頓傾茶事件 圈地運動 光榮革命 西進運動 淘金熱 阿波羅登月 太空競賽
美索不達米亞 蘇美文明 巴比倫 亞述 波斯帝國 古埃及 古希臘 古羅馬 拜占庭帝國 鄂圖曼帝國
印度河文明 哈拉帕 孔雀王朝 笈多王朝 吳哥王朝 馬雅文明 阿茲特克文明 印加帝國 復活節島石像 羅塞塔石碑
楔形文字 象形文字 甲骨文 竹簡 紙莎草紙 活字印刷術 羅盤 火藥 地動儀 日晷
長平之戰 赤壁之戰 官渡之戰 淝水之戰 安史之亂 靖康之難 土木堡之變 甲午戰爭 鴉片戰爭 洋務運動
    `),
  },
  {
    id: 'technology', icon: '⌘', name: '科技玩家', category: '知識探險',
    description: '手機、網路到程式，科技梗一次猜個夠', color: '#99bac4',
    words: words(`
智慧型手機 平板電腦 筆記型電腦 桌上型電腦 迷你電腦 電子書閱讀器 智慧手錶 智慧手環 智慧眼鏡 智慧喇叭
藍牙耳機 骨傳導耳機 降噪耳機 真無線耳機 電競耳機 網路攝影機 行車紀錄器 運動攝影機 全景相機 空拍機
單眼相機 無反光鏡相機 即可拍相機 拍立得 環形補光燈 穩定器 三腳架 外接閃光燈 電子觀景窗 記憶卡
中央處理器 繪圖處理器 主機板 記憶體 固態硬碟 傳統硬碟 電源供應器 散熱器 水冷系統 散熱膏
機械鍵盤 薄膜鍵盤 軌跡球 觸控板 繪圖板 繪圖螢幕 電競螢幕 曲面螢幕 電子紙 投影機
光碟機 隨身碟 外接硬碟 讀卡機 集線器 擴充基座 不斷電系統 網路儲存伺服器 機殼 網路卡
路由器 數據機 交換器 網路線 光纖 無線網路 行動熱點 基地台 衛星網路 海底電纜
網際網路 區域網路 虛擬私人網路 網域名稱 IP位址 防火牆 通訊協定 封包 頻寬 延遲
雲端運算 邊緣運算 物聯網 大數據 區塊鏈 數位孿生 擴增實境 虛擬實境 混合實境 全像投影
人工智慧 機器學習 深度學習 神經網路 生成式人工智慧 大型語言模型 自然語言處理 電腦視覺 語音辨識 文字轉語音
聊天機器人 提示詞 訓練資料 微調 推論 參數 過度配適 強化學習 監督式學習 非監督式學習
作業系統 瀏覽器 搜尋引擎 網頁 應用程式 外掛程式 開放原始碼軟體 版本控制 程式碼 編譯器
直譯器 除錯器 變數 迴圈 條件判斷 函式 遞迴 陣列 雜湊表 二元樹
演算法 資料結構 物件導向 函數式程式設計 資料庫 關聯式資料庫 查詢語言 應用程式介面 前端 後端
全端 持續整合 持續部署 容器 虛擬機器 負載平衡 快取 伺服器 用戶端 響應式網頁
雙因素驗證 生物辨識 指紋辨識 臉部辨識 端對端加密 公開金鑰 私密金鑰 數位簽章 零信任 釣魚郵件
勒索軟體 木馬程式 電腦病毒 零日漏洞 分散式阻斷服務攻擊 社交工程 密碼管理器 沙盒 資料備份 災難復原
藍牙 近場通訊 無線充電 快速充電 行動電源 鋰電池 太陽能電池 3D列印 雷射切割 數位游標卡尺
    `),
  },
  {
    id: 'fantasy', icon: '✧', name: '神話與奇幻', category: '高手挑戰',
    description: '東西方神祇、傳說生物與魔法道具', color: '#baa5cd',
    words: words(`
宙斯 赫拉 波賽頓 哈帝斯 雅典娜 阿波羅 阿提米絲 阿芙蘿黛蒂 阿瑞斯 赫密斯
赫菲斯托斯 狄蜜特 赫斯提亞 戴奧尼索斯 普羅米修斯 潘朵拉 海克力斯 阿基里斯 奧德修斯 珀耳修斯
忒修斯 伊阿宋 梅杜莎 米諾陶洛斯 獨眼巨人 半人馬 飛馬 獅鷲 三頭犬 斯芬克斯
塞壬 哈耳庇厄 九頭蛇 奇美拉 金羊毛 特洛伊木馬 阿里阿德涅的線團 潘朵拉的盒子 厄里斯的金蘋果 奧林帕斯山
奧丁 索爾 洛基 芙蕾雅 弗雷 提爾 海姆達爾 巴德爾 海拉 伊登
芬里爾 耶夢加得 斯雷普尼爾 女武神 世界樹 彩虹橋 英靈殿 諸神黃昏 雷神之鎚 永恆之槍
拉神 歐西里斯 伊西斯 荷魯斯 阿努比斯 賽特 托特 巴斯特 哈索爾 瑪特
濕婆 毗濕奴 梵天 象頭神 迦梨 杜爾迦 因陀羅 哈努曼 羅摩 迦樓羅
盤古 女媧 伏羲 神農 黃帝 蚩尤 后羿 嫦娥 吳剛 玉兔
夸父 精衛 刑天 共工 祝融 西王母 東王公 九天玄女 玄天上帝 玉皇大帝
王母娘娘 太上老君 二郎神 哪吒 李靖 雷公 電母 風伯 雨師 河伯
土地公 城隍 媽祖 關聖帝君 保生大帝 註生娘娘 月下老人 文昌帝君 魁星 鍾馗
八仙 呂洞賓 鐵拐李 漢鍾離 張果老 何仙姑 藍采和 韓湘子 曹國舅 濟公
孫悟空 豬八戒 沙悟淨 唐三藏 白龍馬 牛魔王 鐵扇公主 紅孩兒 蜘蛛精 白骨精
白蛇 青蛇 許仙 法海 八岐大蛇 天照大神 月讀命 須佐之男 稻荷神 惠比壽
大國主 河童 天狗 雪女 九尾狐 酒吞童子 座敷童子 唐傘小僧 一反木綿 轆轤首
鳳凰 麒麟 貔貅 饕餮 白澤 獬豸 鯤鵬 應龍 朱雀 玄武
獨角獸 人魚 精靈 矮人 哈比人 巨魔 哥布林 半獸人 食人魔 石像鬼
吸血鬼 狼人 木乃伊 殭屍 巫妖 巫師 女巫 德魯伊 死靈法師 聖騎士
魔杖 水晶球 魔法掃帚 魔法陣 傳送門 魔法書 隱形斗篷 賢者之石 聖杯 石中劍
    `),
  },
  {
    id: 'computer-science', icon: '⌨', name: '資工名詞', category: '高手挑戰',
    description: '中英並列，從演算法與系統到機器學習、LLM 與強化學習', color: '#92bacb',
    words: technicalWords(`
時間複雜度|Time Complexity
空間複雜度|Space Complexity
漸近上界|Asymptotic Upper Bound
攤銷分析|Amortized Analysis
遞迴關係式|Recurrence Relation
主定理|Master Theorem
分治法|Divide and Conquer
動態規劃|Dynamic Programming (DP)
貪婪演算法|Greedy Algorithm
回溯法|Backtracking
分支限界法|Branch and Bound
暴力搜尋|Brute-force Search
啟發式搜尋|Heuristic Search
深度優先搜尋|Depth-first Search (DFS)
廣度優先搜尋|Breadth-first Search (BFS)
雙向搜尋|Bidirectional Search
二元搜尋|Binary Search
線性搜尋|Linear Search
拓樸排序|Topological Sort
最短路徑|Shortest Path
最小成本擴張樹|Minimum Spanning Tree (MST)
最大流|Maximum Flow
最小割|Minimum Cut
二分圖|Bipartite Graph
最大配對|Maximum Matching
強連通元件|Strongly Connected Component (SCC)
關節點|Articulation Point
歐拉路徑|Eulerian Path
漢米爾頓路徑|Hamiltonian Path
旅行推銷員問題|Traveling Salesperson Problem (TSP)
背包問題|Knapsack Problem
最長共同子序列|Longest Common Subsequence (LCS)
最長遞增子序列|Longest Increasing Subsequence (LIS)
編輯距離|Edit Distance
八皇后問題|Eight Queens Puzzle
河內塔|Tower of Hanoi
停機問題|Halting Problem
哥德爾不完備定理|Gödel's Incompleteness Theorem
圖靈機|Turing Machine
有限狀態機|Finite-state Machine (FSM)
正規語言|Regular Language
正規表示式|Regular Expression (Regex)
上下文無關文法|Context-free Grammar (CFG)
下推自動機|Pushdown Automaton (PDA)
確定性自動機|Deterministic Automaton
非確定性自動機|Nondeterministic Automaton
計算可判定性|Decidability
多項式時間|Polynomial Time
歸約|Reduction
非確定性多項式時間|Nondeterministic Polynomial Time (NP)
堆疊|Stack
佇列|Queue
雙向佇列|Deque
優先佇列|Priority Queue
單向鏈結串列|Singly Linked List
雙向鏈結串列|Doubly Linked List
循環鏈結串列|Circular Linked List
動態陣列|Dynamic Array
稀疏矩陣|Sparse Matrix
位元陣列|Bit Array
雜湊碰撞|Hash Collision
開放定址法|Open Addressing
鏈結法|Separate Chaining
完美雜湊|Perfect Hashing
布隆過濾器|Bloom Filter
不相交集合|Disjoint-set Union (DSU)
路徑壓縮|Path Compression
線段樹|Segment Tree
二元索引樹|Binary Indexed Tree (Fenwick Tree)
字典樹|Trie
二元搜尋樹|Binary Search Tree (BST)
平衡二元樹|Balanced Binary Tree
紅黑樹|Red-black Tree
B樹|B-tree
B加樹|B+ Tree
最小堆積|Min-heap
最大堆積|Max-heap
跳躍串列|Skip List
後綴陣列|Suffix Array
後綴樹|Suffix Tree
氣泡排序|Bubble Sort
選擇排序|Selection Sort
插入排序|Insertion Sort
合併排序|Merge Sort
快速排序|Quicksort
堆積排序|Heapsort
計數排序|Counting Sort
基數排序|Radix Sort
桶排序|Bucket Sort
外部排序|External Sorting
行程|Process
執行緒|Thread
行程排程|Process Scheduling
內容切換|Context Switch
系統呼叫|System Call
中斷|Interrupt
號誌|Semaphore
互斥鎖|Mutex
競爭條件|Race Condition
死結|Deadlock
臨界區域|Critical Section
讀者寫者問題|Readers–Writers Problem
生產者消費者問題|Producer–Consumer Problem
哲學家用餐問題|Dining Philosophers Problem
優先權反轉|Priority Inversion
飢餓現象|Starvation
活鎖|Livelock
不可分割操作|Atomic Operation
記憶體障壁|Memory Barrier
條件變數|Condition Variable
虛擬記憶體|Virtual Memory
分頁|Paging
分段|Segmentation
頁面置換|Page Replacement
缺頁中斷|Page Fault
位址轉譯|Address Translation
轉譯後備緩衝器|Translation Lookaside Buffer (TLB)
快取一致性|Cache Coherence
記憶體洩漏|Memory Leak
緩衝區溢位|Buffer Overflow
堆積記憶體|Heap Memory
堆疊記憶體|Stack Memory
記憶體回收|Garbage Collection (GC)
參考計數|Reference Counting
懸空指標|Dangling Pointer
未初始化指標|Uninitialized Pointer
記憶體對齊|Memory Alignment
位元組序|Byte Order
大端序|Big-endian
小端序|Little-endian
詞彙分析|Lexical Analysis
語法分析|Syntax Analysis (Parsing)
語意分析|Semantic Analysis
抽象語法樹|Abstract Syntax Tree (AST)
中介表示法|Intermediate Representation (IR)
常數折疊|Constant Folding
死碼消除|Dead Code Elimination
暫存器配置|Register Allocation
即時編譯|Just-in-time Compilation (JIT)
交叉編譯|Cross-compilation
型別推導|Type Inference
多型|Polymorphism
封裝|Encapsulation
繼承|Inheritance
抽象類別|Abstract Class
介面|Interface
多載|Overloading
覆寫|Overriding
閉包|Closure
延遲求值|Lazy Evaluation
資料庫正規化|Database Normalization
函數相依|Functional Dependency
候選鍵|Candidate Key
主鍵|Primary Key
外鍵|Foreign Key
索引|Index
交易|Transaction
隔離等級|Isolation Level
髒讀|Dirty Read
幻讀|Phantom Read
預先寫入記錄|Write-ahead Logging (WAL)
多版本並行控制|Multiversion Concurrency Control (MVCC)
兩階段認可|Two-phase Commit (2PC)
分散式共識|Distributed Consensus
最終一致性|Eventual Consistency
線性一致性|Linearizability
複寫|Replication
資料分割|Data Partitioning
容錯|Fault Tolerance
拜占庭將軍問題|Byzantine Generals Problem
三向交握|Three-way Handshake
滑動視窗|Sliding Window
壅塞控制|Congestion Control
封包交換|Packet Switching
距離向量路由|Distance-vector Routing
鏈結狀態路由|Link-state Routing
公開金鑰密碼學|Public-key Cryptography
雜湊函數|Hash Function
緩衝區不足|Insufficient Buffer Space
跨網站指令碼攻擊|Cross-site Scripting (XSS)
機器學習|Machine Learning (ML)
深度學習|Deep Learning (DL)
監督式學習|Supervised Learning
非監督式學習|Unsupervised Learning
半監督式學習|Semi-supervised Learning
自監督式學習|Self-supervised Learning
強化學習|Reinforcement Learning (RL)
遷移學習|Transfer Learning
多任務學習|Multi-task Learning
主動學習|Active Learning
訓練集|Training Set
驗證集|Validation Set
測試集|Test Set
交叉驗證|Cross-validation
資料洩漏|Data Leakage
過度配適|Overfitting
配適不足|Underfitting
偏差與變異|Bias and Variance
正規化|Regularization
提前停止訓練|Early Stopping
梯度下降|Gradient Descent
隨機梯度下降|Stochastic Gradient Descent (SGD)
小批次梯度下降|Mini-batch Gradient Descent
反向傳播|Backpropagation
自動微分|Automatic Differentiation (Autodiff)
學習率|Learning Rate
學習率排程|Learning Rate Schedule
梯度裁切|Gradient Clipping
梯度消失|Vanishing Gradient
梯度爆炸|Exploding Gradient
線性迴歸|Linear Regression
邏輯斯迴歸|Logistic Regression
決策樹|Decision Tree
隨機森林|Random Forest
支援向量機|Support Vector Machine (SVM)
k近鄰法|k-Nearest Neighbors (k-NN)
k平均分群|k-Means Clustering
主成分分析|Principal Component Analysis (PCA)
XGBoost
LightGBM
神經網路|Neural Network
多層感知器|Multilayer Perceptron (MLP)
卷積神經網路|Convolutional Neural Network (CNN)
循環神經網路|Recurrent Neural Network (RNN)
長短期記憶網路|Long Short-term Memory (LSTM)
閘控循環單元|Gated Recurrent Unit (GRU)
圖神經網路|Graph Neural Network (GNN)
自編碼器|Autoencoder
變分自編碼器|Variational Autoencoder (VAE)
生成對抗網路|Generative Adversarial Network (GAN)
活化函數|Activation Function
ReLU
GELU
Softmax
Dropout
批次正規化|Batch Normalization
層正規化|Layer Normalization
殘差連接|Residual Connection
權重衰減|Weight Decay
AdamW
損失函數|Loss Function
交叉熵損失|Cross-entropy Loss
均方誤差|Mean Squared Error (MSE)
對比學習|Contrastive Learning
度量學習|Metric Learning
知識蒸餾|Knowledge Distillation
模型剪枝|Model Pruning
模型量化|Model Quantization
混合精度訓練|Mixed-precision Training
分散式訓練|Distributed Training
Transformer
自注意力|Self-attention
交叉注意力|Cross-attention
多頭注意力|Multi-head Attention
縮放點積注意力|Scaled Dot-product Attention
位置編碼|Positional Encoding
旋轉位置編碼|Rotary Position Embedding (RoPE)
因果遮罩|Causal Mask
編碼器|Encoder
解碼器|Decoder
大型語言模型|Large Language Model (LLM)
分詞器|Tokenizer
子詞分詞|Subword Tokenization
位元組配對編碼|Byte Pair Encoding (BPE)
詞嵌入|Word Embedding
預訓練|Pretraining
微調|Fine-tuning
指令微調|Instruction Tuning
監督式微調|Supervised Fine-tuning (SFT)
參數高效微調|Parameter-efficient Fine-tuning (PEFT)
LoRA
QLoRA
人類回饋強化學習|Reinforcement Learning from Human Feedback (RLHF)
直接偏好最佳化|Direct Preference Optimization (DPO)
檢索增強生成|Retrieval-augmented Generation (RAG)
向量資料庫|Vector Database
語意搜尋|Semantic Search
重排序|Reranking
提示工程|Prompt Engineering
思維鏈|Chain of Thought (CoT)
少樣本學習|Few-shot Learning
零樣本學習|Zero-shot Learning
上下文學習|In-context Learning (ICL)
上下文視窗|Context Window
KV Cache
FlashAttention
PagedAttention
混合專家模型|Mixture of Experts (MoE)
推測解碼|Speculative Decoding
溫度取樣|Temperature Sampling
Top-k Sampling
Top-p Sampling
Beam Search
模型幻覺|Hallucination
提示注入|Prompt Injection
多模態模型|Multimodal Model
視覺Transformer|Vision Transformer (ViT)
物件偵測|Object Detection
語意分割|Semantic Segmentation
實例分割|Instance Segmentation
擴散模型|Diffusion Model
去雜訊|Denoising
潛在空間|Latent Space
Flow Matching
Classifier-free Guidance (CFG)
BERT
GPT
CLIP
ResNet
U-Net
馬可夫決策過程|Markov Decision Process (MDP)
貝爾曼方程式|Bellman Equation
Q-learning
深度Q網路|Deep Q-network (DQN)
策略梯度|Policy Gradient
Actor–Critic
近端策略最佳化|Proximal Policy Optimization (PPO)
離線強化學習|Offline Reinforcement Learning
探索與利用|Exploration and Exploitation
獎勵塑形|Reward Shaping
混淆矩陣|Confusion Matrix
精確率|Precision
召回率|Recall
F1分數|F1 Score
ROC曲線|Receiver Operating Characteristic Curve (ROC Curve)
ROC曲線下面積|Area Under the ROC Curve (AUROC)
資料增強|Data Augmentation
類別不平衡|Class Imbalance
領域適應|Domain Adaptation
模型可解釋性|Model Interpretability
    `),
  },
  {
    id: 'electrical-engineering', icon: '⚡', name: '電機名詞', category: '高手挑戰',
    description: '中英並列，挑戰電路、半導體、電力系統與控制理論', color: '#edc360',
    words: technicalWords(`
電壓|Voltage
電流|Current
電阻|Resistance
電導|Conductance
電容|Capacitance
電感|Inductance
電抗|Reactance
阻抗|Impedance
導納|Admittance
電功率|Electric Power
歐姆定律|Ohm's Law
克希荷夫電流定律|Kirchhoff's Current Law (KCL)
克希荷夫電壓定律|Kirchhoff's Voltage Law (KVL)
戴維寧定理|Thévenin's Theorem
諾頓定理|Norton's Theorem
疊加定理|Superposition Theorem
最大功率轉移定理|Maximum Power Transfer Theorem
節點分析|Nodal Analysis
網目分析|Mesh Analysis
等效電路|Equivalent Circuit
串聯電路|Series Circuit
並聯電路|Parallel Circuit
分壓器|Voltage Divider
分流器|Current Divider
惠斯登電橋|Wheatstone Bridge
電壓源|Voltage Source
電流源|Current Source
受控電源|Controlled Source
開路|Open Circuit
短路|Short Circuit
直流電|Direct Current (DC)
交流電|Alternating Current (AC)
正弦波|Sine Wave
方波|Square Wave
三角波|Triangle Wave
脈衝波|Pulse Wave
頻率|Frequency
週期|Period
相位|Phase
相量|Phasor
均方根值|Root Mean Square (RMS)
峰對峰值|Peak-to-peak Value
功率因數|Power Factor
有效功率|Active Power
無效功率|Reactive Power
視在功率|Apparent Power
複功率|Complex Power
共振|Resonance
暫態響應|Transient Response
穩態響應|Steady-state Response
電場|Electric Field
磁場|Magnetic Field
電通量|Electric Flux
磁通量|Magnetic Flux
電位|Electric Potential
位移電流|Displacement Current
介電常數|Permittivity
磁導率|Permeability
高斯定律|Gauss's Law
安培定律|Ampère's Law
法拉第電磁感應定律|Faraday's Law of Induction
冷次定律|Lenz's Law
馬克士威方程式|Maxwell's Equations
勞侖茲力|Lorentz Force
集膚效應|Skin Effect
渦電流|Eddy Current
磁滯|Hysteresis
磁飽和|Magnetic Saturation
電磁波|Electromagnetic Wave
波阻抗|Wave Impedance
傳輸線|Transmission Line
特性阻抗|Characteristic Impedance
駐波|Standing Wave
反射係數|Reflection Coefficient
阻抗匹配|Impedance Matching
史密斯圖|Smith Chart
天線|Antenna
波導|Waveguide
同軸電纜|Coaxial Cable
微帶線|Microstrip
半導體|Semiconductor
本質半導體|Intrinsic Semiconductor
摻雜|Doping
電子|Electron
電洞|Hole
費米能階|Fermi Level
能隙|Band Gap
空乏區|Depletion Region
接面電位|Junction Potential
載子遷移率|Carrier Mobility
二極體|Diode
齊納二極體|Zener Diode
發光二極體|Light-emitting Diode (LED)
光二極體|Photodiode
蕭特基二極體|Schottky Diode
雙極性接面電晶體|Bipolar Junction Transistor (BJT)
金氧半場效應電晶體|Metal–Oxide–Semiconductor Field-effect Transistor (MOSFET)
接面場效應電晶體|Junction Field-effect Transistor (JFET)
絕緣閘極雙極性電晶體|Insulated-gate Bipolar Transistor (IGBT)
矽控整流器|Silicon-controlled Rectifier (SCR)
截止區|Cutoff Region
主動區|Active Region
飽和區|Saturation Region
臨界電壓|Threshold Voltage
通道長度調變|Channel-length Modulation
體效應|Body Effect
次臨界擺幅|Subthreshold Swing
米勒效應|Miller Effect
厄利效應|Early Effect
小訊號模型|Small-signal Model
運算放大器|Operational Amplifier (Op-amp)
反相放大器|Inverting Amplifier
非反相放大器|Non-inverting Amplifier
差動放大器|Differential Amplifier
儀表放大器|Instrumentation Amplifier
電壓隨耦器|Voltage Follower
比較器|Comparator
積分器|Integrator
微分器|Differentiator
施密特觸發器|Schmitt Trigger
共模拒斥比|Common-mode Rejection Ratio (CMRR)
開迴路增益|Open-loop Gain
閉迴路增益|Closed-loop Gain
增益頻寬積|Gain–Bandwidth Product (GBW)
迴轉率|Slew Rate
輸入偏移電壓|Input Offset Voltage
負回授|Negative Feedback
正回授|Positive Feedback
振盪器|Oscillator
鎖相迴路|Phase-locked Loop (PLL)
低通濾波器|Low-pass Filter (LPF)
高通濾波器|High-pass Filter (HPF)
帶通濾波器|Band-pass Filter (BPF)
帶拒濾波器|Band-stop Filter
傅立葉轉換|Fourier Transform
拉普拉斯轉換|Laplace Transform
Z轉換|Z-transform
摺積|Convolution
取樣定理|Sampling Theorem
混疊|Aliasing
脈衝響應|Impulse Response
頻率響應|Frequency Response
波德圖|Bode Plot
奈奎斯特圖|Nyquist Plot
根軌跡|Root Locus
轉移函數|Transfer Function
狀態空間模型|State-space Model
可控制性|Controllability
可觀測性|Observability
比例積分微分控制器|Proportional–Integral–Derivative Controller (PID)
變壓器|Transformer
感應馬達|Induction Motor
同步馬達|Synchronous Motor
直流馬達|DC Motor
步進馬達|Stepper Motor
伺服馬達|Servo Motor
無刷直流馬達|Brushless DC Motor (BLDC)
三相電|Three-phase Power
星形接法|Wye Connection
三角形接法|Delta Connection
整流器|Rectifier
直流轉交流變流器|DC-to-AC Inverter
直流截波器|DC Chopper
降壓轉換器|Buck Converter
升壓轉換器|Boost Converter
脈波寬度調變|Pulse-width Modulation (PWM)
切換式電源|Switched-mode Power Supply (SMPS)
突波保護器|Surge Protector
接地|Grounding
斷路器|Circuit Breaker
可程式邏輯控制器|Programmable Logic Controller (PLC)
現場可程式化邏輯閘陣列|Field-programmable Gate Array (FPGA)
類比數位轉換器|Analog-to-digital Converter (ADC)
數位類比轉換器|Digital-to-analog Converter (DAC)
正反器|Flip-flop
邏輯閘|Logic Gate
全加器|Full Adder
多工器|Multiplexer (MUX)
暫存器|Register
靜態隨機存取記憶體|Static Random-access Memory (SRAM)
    `),
  },
  {
    id: 'biology', icon: '⚘', name: '生物名詞', category: '高手挑戰',
    description: '細胞、遺傳、演化與生態的專業挑戰', color: '#a9c59c',
    words: words(`
細胞學說 原核生物 真核生物 細胞膜 細胞壁 細胞質 細胞核 核仁 核膜 核孔
粒線體 葉綠體 高基氏體 內質網 粗糙內質網 平滑內質網 核糖體 溶小體 過氧化體 液泡
中心體 細胞骨架 微管 微絲 中間絲 纖毛 鞭毛 莢膜 菌毛 細胞外基質
磷脂雙層 流體鑲嵌模型 膜蛋白 選擇性通透性 簡單擴散 促進性擴散 主動運輸 胞吞作用 胞吐作用 鈉鉀幫浦
滲透作用 膨壓 質壁分離 膜電位 靜止電位 動作電位 突觸 神經傳導物質 髓鞘 蘭氏結
染色質 染色體 同源染色體 姊妹染色分體 著絲點 端粒 核小體 組蛋白 核型 體染色體
性染色體 基因 等位基因 基因座 基因型 表現型 顯性 隱性 不完全顯性 共顯性
多基因遺傳 性聯遺傳 連鎖遺傳 基因重組 互換 分離律 獨立分配律 哈溫平衡 基因頻率 遺傳漂變
瓶頸效應 創始者效應 基因交流 突變 點突變 插入突變 缺失突變 框移突變 同義突變 錯義突變
無義突變 DNA複製 半保留複製 DNA聚合酶 解旋酶 連接酶 岡崎片段 轉錄 轉譯 反轉錄
訊息RNA 轉移RNA 核糖體RNA 密碼子 反密碼子 起始密碼子 終止密碼子 內含子 外顯子 RNA剪接
啟動子 操縱組 轉錄因子 表觀遺傳 DNA甲基化 基因靜默 聚合酶連鎖反應 凝膠電泳 限制酶 質體
基因選殖 基因定序 基因編輯 蛋白質摺疊 蛋白質變性 胜肽鍵 胺基酸 酵素 活化能 受質專一性
競爭性抑制 非競爭性抑制 回饋抑制 腺苷三磷酸 糖解作用 檸檬酸循環 電子傳遞鏈 氧化磷酸化 化學滲透作用 乳酸發酵
酒精發酵 光反應 卡爾文循環 光系統 碳固定 光呼吸 蒸散作用 木質部 韌皮部 伴細胞
篩管 導管 氣孔 保衛細胞 生長素 吉貝素 細胞分裂素 離層酸 乙烯 向光性
有絲分裂 減數分裂 細胞週期 紡錘體 細胞凋亡 細胞分化 幹細胞 全能性 胚胎發育 原腸胚
天擇 適應輻射 趨同演化 趨異演化 共同演化 生殖隔離 物種形成 演替 承載量 生態棲位
    `),
  },
  {
    id: 'medical-health', icon: '✚', name: '醫學保健', category: '知識探險',
    description: '人體、檢查、疾病與日常健康照護名詞', color: '#e5a7a2',
    words: words(`
血壓 心跳 呼吸頻率 體溫 血氧濃度 身體質量指數 腰圍 體脂率 基礎代謝率 肌肉量
收縮壓 舒張壓 脈壓 靜脈 動脈 微血管 血小板 紅血球 白血球 血紅素
血漿 心房 心室 心瓣膜 冠狀動脈 主動脈 頸動脈 肺泡 支氣管 橫膈膜
食道 胃 小腸 大腸 肝臟 膽囊 胰臟 脾臟 腎臟 膀胱
甲狀腺 副甲狀腺 腦下垂體 腎上腺 胸腺 淋巴結 視網膜 角膜 耳膜 前庭系統
全血球計數檢查 空腹血糖 糖化血色素 血脂檢查 總膽固醇 低密度脂蛋白 高密度脂蛋白 三酸甘油脂 肝功能 腎功能
肌酸酐 腎絲球過濾率 尿酸 尿蛋白 糞便潛血檢查 心電圖 胸部X光 腹部超音波 心臟超音波 骨質密度檢查
電腦斷層 磁振造影 正子攝影 胃鏡 大腸鏡 子宮頸抹片 乳房攝影 聽力檢查 視力檢查 眼壓檢查
高血壓 糖尿病 高血脂 代謝症候群 肥胖 脂肪肝 慢性腎臟病 痛風 骨質疏鬆症 肌少症
貧血 甲狀腺機能亢進 甲狀腺機能低下 氣喘 慢性阻塞性肺病 肺炎 胃食道逆流 消化性潰瘍 膽結石 腎結石
冠狀動脈心臟病 心肌梗塞 心律不整 心房顫動 心臟衰竭 中風 短暫性腦缺血 靜脈曲張 深層靜脈栓塞 肺栓塞
偏頭痛 眩暈 失眠 睡眠呼吸中止症 失智症 巴金森氏症 癲癇 憂鬱症 焦慮症 恐慌症
近視 遠視 散光 老花眼 白內障 青光眼 乾眼症 中耳炎 耳鳴 牙周病
蛀牙 智齒 根管治療 洗牙 過敏性鼻炎 異位性皮膚炎 蕁麻疹 接觸性皮膚炎 濕疹 足癬
流感 腸病毒 水痘 帶狀疱疹 麻疹 德國麻疹 B型肝炎 C型肝炎 結核病 登革熱
疫苗 預防接種 群體免疫 抗生素 抗病毒藥物 止痛藥 抗組織胺 處方藥 成藥 藥物交互作用
急診 分診 門診 轉診 住院 加護病房 復健 安寧緩和醫療 長期照護 居家照護
心肺復甦術 自動體外心臟電擊去顫器 哈姆立克法 復甦姿勢 止血 包紮 扭傷 脫臼 骨折 腦震盪
均衡飲食 膳食纖維 全穀雜糧 不飽和脂肪酸 反式脂肪 鈉攝取 有氧運動 阻力訓練 伸展運動 戒菸
    `),
  },
  {
    id: 'taiwan-memes', icon: '哈', name: '台灣迷因大賞', category: '文化娛樂',
    description: '鄉民用語、社群迷因與台灣網路梗', color: '#f4b1a4',
    words: words(`
是在哈囉 我就爛 阿嬤養的 黑人問號 笑死 有夠派 先不要 好喔 好的沒問題 真的假的
是在哭 笑爛 破防 崩潰 玻璃心 炎上 跟風 蹭熱度 釣魚文 反串
鄉民 鍵盤俠 酸民 小編 迷因 梗圖 廢文 洗版 路過推 推文
噓文 樓下支援 卡位 坐等更新 伸手牌 懶人包 朝聖 考古文 神回覆 置板凳
蓋樓 已讀不回 不讀不回 秒讀秒回 句點王 尬聊 尬爆 社死 社恐 社牛
情勒 情緒價值 暈船 下船 脫單 母胎單身 工具人 暖男 渣男 海王
養魚 我全都要 有圖有真相 沒圖沒真相 這很可以 太神啦 我不行了 直接原地爆炸 太扯了 蛤真的假的
完蛋了 這我一定吉 問就是 大可不必 你確定欸 先說好 確定要欸 我超派 毫無違和感 這什麼巫術
這波不虧 不忍直視 眼睛業障重 母湯喔 金價母湯 先別急 你不要再說了 我也是醉了 笑到流淚 膝蓋中箭
有生之年 這不是我要的 驚不驚喜 意不意外 我好興奮啊 起飛啦 這個我懂 直接封神 神仙打架 史詩級翻車
人間清醒 人間蒸發 迷惑行為 奇怪的知識增加了 不是吧阿Sir 大型翻車現場 官方吐槽 最強業配 史上最速 打臉現場
偷臭 臭嘴 毒舌 嘴砲 戰文 引戰 風向帶起來 逆風 燒起來 公關災難
退追 退坑 入坑 推坑 出坑 課金仔 無課仔 爆肝仔 邊緣人 現充
邊緣化 厭世 臭臉 負能量 正能量 正向思考 內耗 斷捨離 耍廢 廢到笑
懶癌末期 吃瓜 看戲 懂的都懂 幫補血 恭喜發財 先幫QQ 眼神死 心累累 哭啊
我傻眼 問號滿頭 一臉問號 開地圖砲 以一概全 網路公審 肉搜 出征 說好的呢 翻車了
今天也要加油
    `),
  },
  {
    id: 'romance', icon: '♥', name: '戀愛修羅場', category: '輕鬆入門',
    description: '從曖昧到分手，每段感情都是題目', color: '#ef9db3',
    words: words(`
一見鍾情 日久生情 暗戀 單戀 雙向暗戀 互有好感 告白 單膝下跪 結婚 交換訂婚戒指
初戀 熱戀 苦戀 遠距離戀愛 異地戀 姐弟戀 年齡差 戀愛長跑 地下戀情 辦公室戀情
校園戀情 兒時玩伴變情人 網路戀愛 網戀見面 交友軟體 配對成功 約會 相親 聯誼 速食愛情
曖昧期 朋友以上戀人未滿 心動 心跳加速 怦然心動 偷偷喜歡 放閃 閃光 情侶裝 情侶鞋
情侶情人節約會 紀念日 交往週年 驚喜禮物 手寫情書 玫瑰花 巧克力禮盒 燭光晚餐 雙人旅行 摩天輪告白
牽手 十指緊扣 從背後抱住 親吻 初吻 額頭吻 輕吻 接吻 親密接觸 撒嬌
依偎 公主抱 壁咚 摸頭殺 枕邊悄悄話 傳情自拍 視訊約會 睡前電話 晚安訊息 早安訊息
秒回訊息 訊息不回覆 忽冷忽熱 欲擒故縱 欲拒還迎 試探心意 查勤 報備 行蹤共享 定位分享
吃醋 醋桶 佔有慾 感情安全感 信任危機 猜忌 翻舊帳 冷處理 吵架 和好
道歉 求原諒 送花賠罪 主動示弱 和事佬 小情緒 感情勒索 感情內耗 缺乏安全感 懷疑對方還愛不愛
劈腿 出軌 抓姦 第三者 小三 三角戀 四角戀 同時曖昧 多線發展 備胎
只被當朋友 曖昧對象 前任 初戀情人 舊情復燃 重修舊好 復合 分手 分手炮 斷聯
分手訊息 和平分手 被甩 提分手 分手禮物 分手宣言 失戀 情傷 心碎 借酒澆愁
戒斷反應 刪除合照 退回禮物 封鎖對方 解除封鎖 偷看限動 偷看前任 共同好友 朋友勸分 分手後做朋友
見家長 拜訪岳父母 見公婆 催婚 求婚戒指 婚前協議 婚禮籌備 婚紗照 蜜月旅行 新婚生活
同居 試婚 家務分工 因小事吵翻天 床頭吵床尾和 生活習慣磨合 金錢觀不合 價值觀衝突 未來規劃 承諾恐懼
    `),
  },
  {
    id: 'campus', icon: '校', name: '校園回憶殺', category: '輕鬆入門',
    description: '教室、考試、社團與青春的校園生活', color: '#e7cb85',
    words: words(`
早自習 晨讀 升旗典禮 朝會 國歌 校內頒獎 校長致詞 教官室 學務處 教務處
訓導主任 班導師 代課老師 實習老師 風紀股長 班長 副班長 衛生股長 體育股長 學藝股長
總務股長 康樂股長 服務股長 小老師 班會 週記 聯絡簿 家長聯絡單 成績單 獎懲單
缺曠紀錄 遲到紀錄 請假單 補請假 病假單 早退 翹課 逃學 補考 重修
期中考 期末考 段考 小考 隨堂測驗 模擬考 會考 學測 分科測驗 統測
考試作弊 偷瞄隔壁答案 小抄 橡皮擦傳答案 考卷對答案 考前抱佛腳 熬夜讀書 考前猜題 臨時抽考 開書考試
考試鐘聲 選擇題 填充題 申論題 作文題 作答卡 答案卷 劃卡機 加分題 扣考
寒假作業 暑假作業 讀書心得 閱讀護照 家庭作業 課堂筆記 抄筆記 借作業 抄作業 作業沒交
分組報告 上台報告 口頭報告 課堂抽問 舉手回答 黑板解題 課後輔導 補習班 安親班 自習室
教室座位 座位表 換座位 同桌 隔壁班 轉學生 插班生 畢業生 學長姐 學弟妹
學生證 制服 運動服 班服 校服外套 室內鞋 書包 便當袋 識別證 書套
課桌椅 講台 黑板 白板筆 粉筆 板擦 擦黑板比賽 粉筆灰 公布欄 導師桌
福利社 合作社 圖書館借書證 自習教室 電腦教室 音樂教室 美術教室 實驗室 健康中心 禮堂
操場 跑道 司令台 籃球場 排球場 體育館 游泳池 午休時間 午餐時間 打掃時間
營養午餐 午餐桶 打飯菜 午餐值日生 飯後潔牙 倒廚餘 掃地區域 大掃除 值日生 廁所清潔
校外教學 畢業旅行 隔宿露營 童軍活動 運動會 大隊接力 拔河比賽 園遊會 校慶 才藝表演
迎新宿營 社團博覽會 熱舞社 吉他社 班際球賽 畢業典禮 畢業紀念冊 畢業照 謝師宴
    `),
  },
  {
    id: 'video-games', icon: '🎮', name: '遊戲玩家', category: '文化娛樂',
    description: '電玩作品、角色與遊戲世界的共同語言', color: '#9ac4e0',
    words: words(`
超級瑪利歐 瑪利歐賽車 瑪利歐派對 路易吉洋樓 耀西的手工世界 大金剛 星之卡比 薩爾達傳說 曠野之息 王國之淚
織夢島 時之笛 斯普拉遁 集合啦動物森友會 任天堂明星大亂鬥 寶可夢紅版 寶可夢劍盾 寶可夢朱紫 寶可夢傳說阿爾宙斯 寶可夢大集結
Minecraft 創造模式 生存模式 苦力怕 終界龍 紅石機關 地獄堡壘 Roblox AmongUs 糖豆人
Fortnite 絕地求生 Apex英雄 特戰英豪 鬥陣特攻 英雄聯盟 傳說對決 激鬥峽谷 Dota2 絕對武力
決勝時刻 戰地風雲 虹彩六號 全境封鎖 絕命異次元 惡靈古堡 沉默之丘 最後生還者 戰神 地平線西域禁地
秘境探險 古墓奇兵 刺客教條 極地戰嚎 看門狗 俠盜獵車手 碧血狂殺 電馭叛客2077 巫師3 艾爾登法環
黑暗靈魂 隻狼 血源詛咒 仁王 臥龍蒼天隕落 黑神話悟空 魔物獵人 魔物獵人荒野 惡魔獵人 貝優妮塔
最終幻想 勇者鬥惡龍 女神異聞錄 真女神轉生 尼爾自動人形 王國之心 異度神劍 歧路旅人 勇氣默示錄 聖火降魔錄
逆轉裁判 槍彈辯駁 人中之龍 審判之眼 潛龍諜影 死亡擱淺 底特律變人 暴雨殺機 超能殺機 小小夢魘
空洞騎士 蔚藍 星露谷物語 泰拉瑞亞 饑荒 Hades 死亡細胞 以撒的結合 雨中冒險 殺戮尖塔
吸血鬼倖存者 史萊姆農場 缺氧 邊緣世界 文明帝國 世紀帝國 星海爭霸 魔獸爭霸 魔獸世界 暗黑破壞神
流亡黯道 火炬之光 楓之谷 仙境傳說 跑跑卡丁車 爆爆王 勁舞團 新瑪奇 天堂 新天堂II
原神 崩壞星穹鐵道 絕區零 鳴潮 明日方舟 蔚藍檔案 賽馬娘 FGO 碧藍航線 勝利女神妮姬
爐石戰記 皇室戰爭 部落衝突 荒野亂鬥 糖果傳奇 植物大戰殭屍 憤怒鳥 神廟逃亡 地鐵跑酷 水果忍者
紀念碑谷 傳說之下 Deltarune 茶杯頭 胡鬧廚房 雙人成行 逃出生天 人類一敗塗地 Phasmophobia 致命公司
    `),
  },
  {
    id: 'childhood', icon: '✿', name: '童年大集合', category: '文化娛樂',
    description: '老玩具、下課遊戲和令人懷念的小時候', color: '#edc792',
    words: words(`
尪仔標 玻璃彈珠 彈珠台 戳戳樂 扭蛋機 轉蛋機 夾娃娃機 抽抽樂 抽獎箱 幸運籤
橡皮筋跳繩 踩格子遊戲 跳格子 操場追逐戰 鬼抓人紅綠燈 木頭人 躲貓貓倒數 老鷹抓小雞 一二三木頭人 蘿蔔蹲
大風吹 搶椅子 沙包打靶 踢毽子 打陀螺 戰鬥陀螺 四驅車 遙控汽車 遙控直升機 發條玩具
竹蜻蜓飛行比賽 紙飛機 紙船 風箏 風車 水槍 丟水球大戰 泡泡槍 比賽吹大泡泡 泡泡水
黏土 史萊姆 水晶寶寶 魔術沙 太空沙 彈力球 跳跳球 呼拉圈 竹節繩 溜溜球
掌上型遊戲機 電子雞 GameBoy 紅白機 小霸王遊戲機 電視遊樂器 卡帶 卡匣 電子寵物 像素遊戲
跳舞機 投籃機 打地鼠機 太鼓達人 拳擊機 迷你賽車場 點歌機 歌唱機 貼紙相機 大頭貼
拍貼機 貼紙簿 收集貼紙 交換貼紙 立體貼紙 夜光貼紙 紋身貼紙 姓名貼紙 集點卡 印章簿
彈簧玩具 魔術方塊 九連環 智力扣 拼圖 積木 樂高 磁力片 軌道車 木製火車
洋娃娃 芭比娃娃 泰迪熊 玩具廚房 扮家家酒 玩具醫生 玩具收銀機 玩具電話 玩具食物 玩具鈔票
橡皮泥 彩色筆 蠟筆 水彩 塗鴉本 著色本 摺紙 剪紙 手指畫 串珠
串珠手環 彩虹編織 繩結手環 友情手環 紙膠帶 卡片交換 明信片 收藏卡 球員卡 戰鬥卡
漫畫出租店 漫畫週刊 兒童雜誌 故事書 童話書 有聲書 童謠兒歌 兒童劇 幼兒園表演 故事媽媽
學步車 三輪車 滑步車 輔助輪 腳踏車初體驗 溜滑梯 翹翹板 鞦韆 攀爬架 沙坑
沙雕 沙堡 沙鏟 玩水桶 撈魚 撈金魚 釣魚玩具 夜市射氣球 套圈圈 夜市打彈珠
放學等家長 課後安親 午睡墊 午睡枕 小被被 安撫玩偶 生日派對 生日帽 生日蠟燭 兒童節禮物
    `),
  },
  {
    id: 'emotions-psychology', icon: '☺', name: '情緒與心理', category: '輕鬆入門',
    description: '心情、性格、人際互動與心理現象', color: '#b9add8',
    words: words(`
快樂 悲傷 憤怒 恐懼 驚訝 厭惡 興奮 無聊 緊張 焦慮
期待 失望 沮喪 懊惱 羞愧 內疚 自豪 感動 羨慕 嫉妒
孤獨 寂寞 空虛 委屈 心酸 惆悵 懷念 不安 安心 放鬆
疲倦 煩躁 麻木 無助 無奈 絕望 希望 喜悅 滿足 幸福感
成就感 挫折感 歸屬感 認同感 安全感 危機感 罪惡感 羞恥感 優越感 自卑感
自信 自尊 自卑 自戀 自我懷疑 自我肯定 自我接納 自我否定 自我探索 自我認同
同理心 同情心 責任感 使命感 正義感 羞恥心 虛榮心 好奇心 企圖心 競爭心
害羞 內向 外向 樂觀 悲觀 固執 隨和 龜毛 急性子 慢性子
完美主義 拖延症 選擇困難 社交恐懼 表演焦慮 冒牌者症候群 人群恐懼 密集恐懼 懼高症 幽閉恐懼
恐慌發作 情緒低落 情緒高漲 情緒波動 情緒失控 情緒穩定 情緒調節 情緒壓抑 情緒宣洩 情緒勞動
壓力來源 壓力釋放 情緒勒索 冷暴力 精神內耗 過度思考 過度解讀 反芻思考 災難化思考 非黑即白
以偏概全 貼標籤 自證預言 確認偏誤 光環效應 旁觀者效應 從眾效應 安慰劑效應 首因效應 近因效應
錨定效應 損失規避 認知失調 選擇性注意 注意力分散 心流狀態 心理韌性 自我效能 感恩練習 正念練習
邊界感 人際界線 人際距離 人際衝突 溝通障礙 非暴力溝通 積極傾聽 肢體語言 言外之意 眼神交流
第一印象 社交疲勞 社交電量 社會比較 同儕壓力 群體壓力 情感依附 依附焦慮 逃避依附 安全依附
    `),
  },
  {
    id: 'brands', icon: '©', name: '品牌大亂鬥', category: '文化娛樂',
    description: '台灣日常到全球知名的品牌與商店', color: '#e8ae9a',
    words: words(`
麥當勞 肯德基 摩斯漢堡 漢堡王 頂呱呱 丹丹漢堡 必勝客 達美樂 拿坡里 披薩工廠
星巴克 路易莎 85度C cama咖啡 伯朗咖啡 怡客咖啡 先喝道 春水堂 迷客夏 可不可熟成紅茶
五十嵐 清心福全 茶湯會 龜記 麻古茶坊 得正 大苑子 一沐日 萬波島嶼紅茶 八曜和茶
全家便利商店 7-ELEVEN 萊爾富 OK超商 全聯福利中心 家樂福 好市多 愛買 大潤發 頂好
無印良品 宜得利 IKEA 特力屋 HOLA 寶雅 康是美 屈臣氏 美廉社 小北百貨
NET UNIQLO GU ZARA H&M GAP Levi's Nike Adidas Puma
NewBalance Converse Vans ASICS Skechers Timberland Crocs Birkenstock DrMartens Apple
Samsung Google Sony Microsoft Nintendo ASUS Acer MSI Gigabyte Lenovo
Dell HP Logitech Razer SteelSeries Corsair JBL Bose Sennheiser Marshall
Beats Dyson Philips Panasonic Sharp LG Toshiba Hitachi MitsubishiElectric Electrolux
Whirlpool Bosch Siemens Haier Toyota Honda Nissan Mazda Subaru MitsubishiMotors
Lexus BMW Mercedes-Benz Audi Volkswagen Porsche Ferrari Lamborghini Tesla Volvo
Ford Hyundai Kia Suzuki Yamaha Gogoro Kymco SYM Vespa Harley-Davidson
Ducati Kawasaki Netflix Disney+ HBO Spotify YouTube LINE Instagram Facebook
TikTok Twitch 蝦皮購物 momo購物網 PChome 博客來 誠品書店 金石堂 燦坤 全國電子
順發3C 光南
    `),
  },
  {
    id: 'music-dance', icon: '♪', name: '音樂與舞蹈', category: '文化娛樂',
    description: '樂器、舞風、音樂現場與表演用語', color: '#e5a2ca',
    words: words(`
流行音樂 爵士樂 古典音樂 搖滾樂 重金屬 嘻哈 饒舌 靈魂樂 放克 雷鬼
藍調 鄉村音樂 電子音樂 迪斯可 浩室音樂 鐵克諾 鼓打貝斯 低音浩室 陷阱音樂 獨立音樂
民謠 龐克 另類搖滾 復古放克 拉丁音樂 巴薩諾瓦 森巴音樂 世界音樂 環境音樂 電影配樂
鋼琴 電子琴 合成器 管風琴 吉他 電吉他 木吉他 貝斯 烏克麗麗 小提琴
中提琴 大提琴 低音提琴 長笛 短笛 雙簧管 單簧管 低音管 薩克斯風 小號
長號 法國號 低音號 口琴 手風琴 直笛 豎琴 古箏 琵琶 二胡
笛子 嗩吶 簫 揚琴 木琴 鐵琴 馬林巴琴 定音鼓 爵士鼓 大鼓
小鼓 銅鈸 鈴鼓 沙鈴 木魚 卡林巴琴 非洲鼓 康加鼓 邦哥鼓 歌唱
和聲 合唱 獨唱 重唱 假音 轉音 顫音 即興演唱 清唱 節奏
節拍 拍號 音階 音程 和弦 轉調 升調 降調 休止符 五線譜
簡譜 高音譜記號 低音譜記號 音準 走音 破音 音域 聽音 記譜 演唱會
音樂祭 安可 彩排 走位 謝幕 開場嘉賓 暖場 壓軸 樂團 主唱
吉他手 鼓手 鍵盤手 貝斯手 音控師 調音師 DJ 打碟 混音 街舞
地板大風車 Popping Locking House HipHop舞 Waacking Vogue JazzFunk Krump 芭蕾舞
現代舞 爵士舞 踢踏舞 探戈 華爾滋 森巴 恰恰 森巴舞 肚皮舞 即興舞蹈
舞蹈對決 齊舞 編舞 排舞 排練 舞蹈教室 節奏感 身體律動 定格動作
    `),
  },
  {
    id: 'horror-legends', icon: '☾', name: '恐怖與都市傳說', category: '高手挑戰',
    description: '靈異傳說、怪談角色和恐怖片經典橋段', color: '#a7abc6',
    words: words(`
鬼壓床 鬼打牆 鬼影 靈異照片 靈異錄音 靈異直播 靈異事件 鬼故事 靈異節目 鬼屋
凶宅 鬧鬼飯店 廢棄醫院 廢棄學校 廢棄遊樂園 墓園 公墓 亂葬崗 陰宅 凶案現場
碟仙 筆仙 錢仙 鏡仙 通靈板 降靈術 招魂 附身 驅魔 超渡
安魂 頭七 做七 普渡 牽亡魂 冥婚 陰陽眼 第六感 靈媒 乩童
觀落陰 符咒 護身符 鎮魂鈴 桃木劍 八卦鏡 香灰 紅線 平安符 淨符
符水 紅衣小女孩 魔神仔 林投姐 陳守娘 虎姑婆 水鬼 抓交替 好兄弟 孤魂野鬼
地基主 黑白無常 牛頭馬面 城隍爺 判官 閻羅王 孟婆 奈何橋 忘川河 黃泉路
鬼門關 跳跳殭屍 吸血鬼獵人 滿月變身 女巫審判 木乃伊詛咒 科學怪人 稻草人 殺人魔 無頭騎士
死神 裂嘴女 廁所裡的花子 八尺大人 人面犬 鬼娃娃 貞子 伽椰子 富江 紅色房間
如月車站 百慕達三角 黑眼小孩 瘦長鬼影 哭泣天使 飛蛾人 大腳怪 卓柏卡布拉 雪人 怪奇物語中的顛倒世界
黑衣人傳說 午夜十二點 凌晨三點 半夜敲門 門縫眼睛 窗外人影 床底有人 衣櫃異響 無人來電 詭異腳步聲
耳邊傳來陌生聲音 自動開門 電梯停在不存在的樓層 空房間有人笑 監視器黑影 鏡中倒影消失 走廊盡頭的腳步 地下室哭聲 消失的乘客 多出來的房客
重複的夢 血手印 掌印 消失的遺照 詛咒錄影帶 不明來電 匿名恐嚇信 神祕失蹤 失蹤人口 寄生娃娃
詭異人偶 密室逃脫 恐怖密室 心理驚悚 驚嚇橋段 突然嚇人 怪聲音 倒數計時 封閉空間 迷宮逃生
鬼抓人 禁忌遊戲 試膽大會 夜間探險 夜遊墳場 無人村 失落古堡 被詛咒的寶物 封印儀式 怨靈報復
亡者歸來
    `),
  },
  {
    id: 'festivals', icon: '✺', name: '節慶與習俗', category: '文化娛樂',
    description: '節日、人生禮俗與世界各地的慶典', color: '#e8c38f',
    words: words(`
農曆新年 除夕 圍爐 守歲 拜年 走春 開工紅包 壓歲錢 春聯 貼門神
年夜飯 年糕 發糕 年節蘿蔔糕禮盒 長年菜 年菜外帶 團圓飯 壓年錢 放鞭炮 放煙火
舞龍 舞獅 迎財神 發紅包 搶頭香 點光明燈 安太歲 祭改 拜天公 送神
小年夜 初一回娘家 初二回娘家 初三睡到飽 初四迎神 初五開工 初九天公生 元宵節 猜燈謎 提燈籠
放天燈 蜂炮防護裝備 寒單爺出巡 元宵湯圓 平溪天燈節 鹽水蜂炮 情人節 白色情人節 七夕情人節 七夕拜七娘媽
清明節 掃墓 祭祖 清明潤餅攤 寒食節 端午節 包粽子 立蛋 划龍舟 艾草
香包 雄黃酒 午時水 端午掛菖蒲 中元節 中元普渡 盂蘭盆節 放水燈 搶孤高棚 普渡供品
中秋節 賞月 中秋烤肉架 吃月餅 吃柚子 七夕牽紅線 月餅禮盒 重陽節 敬老活動 登高
冬至 搓湯圓 吃湯圓 補冬 尾牙摸彩 春酒聚餐 送灶神 尾牙抽獎 開春團拜 聖誕節
平安夜 聖誕交換禮物 聖誕襪 聖誕樹 聖誕老人 聖誕市集 聖誕花圈 聖誕禮物 倒數跨年 跨年煙火
元旦 元旦升旗 西洋情人節 愚人節 母親節 父親節 兒童節 教師節 萬聖節 不給糖就搗蛋
南瓜燈 變裝派對 感恩節 感恩節火雞 復活節 復活節彩蛋 復活節兔子 黑色星期五 日本七夕 盂蘭盆舞
節分撒豆 女兒節 男孩節 櫻花祭 雪祭 日本成人之日 祇園祭 青森睡魔祭 潑水節 排燈節
色彩節 開齋節 宰牲節 光明節 猶太逾越節 西班牙番茄節 里約嘉年華 慕尼黑啤酒節 婚禮 文定
訂婚 儀式婚宴 喜帖 喜餅 迎娶 闖關遊戲 伴郎伴娘 丟捧花 滿月酒 彌月禮物
抓周 收涎 剃胎毛 週歲生日 生日蛋糕 生日願望 壽宴 祝壽
    `),
  },
  {
    id: 'tv-series', icon: '▣', name: '影集追劇王', category: '文化娛樂',
    description: '台劇、韓劇、美劇與全球熱門影集', color: '#bca8da',
    words: words(`
想見你 我們與惡的距離 俗女養成記 華燈初上 逆局 模仿犯 八尺門的辯護人 此時此刻 不良執念清除師 村裡來了個暴走女外科
你的孩子不是你的孩子 茶金 火神的眼淚 國際橋牌社 天橋上的魔術師 誰是被害者 罪夢者 她和她的她 影后 我們六個
人選之人—造浪者 斯卡羅 返校影集 你的婚姻不是你的婚姻 第九節課 比悲傷更悲傷的故事影集 愛的奧特萊斯 1006的房客 植劇場 天黑請閉眼
通靈少女 靈異街11號 花甲男孩轉大人 我的婆婆怎麼那麼可愛 酸甜之味 麻醉風暴 一把青 雨後驕陽 孤獨的美食家 深夜食堂
半澤直樹 王牌大律師 月薪嬌妻 家政婦女王 交響情人夢 東京愛情故事 FirstLove初戀 重啟人生 Unnatural法醫女王 MIU404
派遣女王 女王的教室 醫龍 白色巨塔 仁醫 龍櫻 東大特訓班 極道鮮師 失戀巧克力職人 我的事說來話長
來自星星的你 太陽的後裔 鬼怪 愛的迫降 梨泰院Class 黑暗榮耀 非常律師禹英禑 我的出走日記 機智醫生生活 機智牢房生活
請回答1988 請回答1997 請回答1994 浪漫醫生金師傅 機智的山村生活 二十五二十一 淚之女王 背著善宰跑 我的惡魔 京城怪物
魷魚遊戲 地獄公使 SweetHome 末日騎士 Moving異能 未生 信號 隧道 Voice聲命線 惡之花
模範計程車 屍戰朝鮮 殭屍校園 造后者 少年法庭 D.P逃兵追緝令 我的名字 黑道律師文森佐 財閥家的小兒子 夫妻的世界
SkyCastle天空之城 Penthouse上流戰爭 主君的太陽 殺人者的購物目錄 善良的男人 皮諾丘 W兩個世界 舉重妖精金福珠 三流之路 沒關係是愛情啊
雖然是精神病但沒關係 六人行 宅男行不行 追愛總動員 摩登家庭 辦公室風雲 荒唐分局 良善之地 破產姊妹花 新鮮王子妙事多
追緝令 怪奇物語 絕命毒師 絕命律師 黑鏡 紙房子 后翼棄兵 星期三 安眠書店 菁英殺機
性愛自修室 權力遊戲 龍族前傳 最後生還者影集 陰屍路 美國恐怖故事 西方極樂園 黑袍糾察隊 無照律師 繼承之戰
白蓮花大飯店 冰與火之歌 獵魔士 奧術 安道爾 曼達洛人 神盾局特工 汪達幻視 鷹眼 夜魔俠
月光騎士 王冠 唐頓莊園 柏捷頓家族 黑幫家族 新世紀福爾摩斯 新聞急先鋒 良醫墨非 實習醫生 怪醫豪斯
犯罪心理 CSI犯罪現場 NCIS重返犯罪現場 破案神探 毒梟 越獄風雲 LOST檔案 疑犯追蹤 漢娜的遺言 絕命航班
追殺夏娃
    `),
  },
  {
    id: 'friendship', icon: '☻', name: '朋友默契大考驗', category: '輕鬆入門',
    description: '最熟悉的朋友才懂的糗事與小默契', color: '#edb4a3',
    words: words(`
約好卻遲到 放鴿子 臨時取消 聚會改期 約吃飯選不出來 討論去哪玩 集體選擇困難 沒人訂餐廳 訂位失敗 到場才發現沒營業
一起迷路 看錯地圖 搭錯捷運 坐過站 趕不上末班車 忘記帶錢包 忘記帶鑰匙 手機快沒電 行動電源沒電 充電線借來借去
借錢不還 忘記轉帳 平分帳單 算錯帳 餐費找零 AA制 請客吃飯 偷偷買單 一起吃宵夜 分享最後一口
合照閉眼 集體自拍 醜照外流 被偷拍 偷拍朋友幹嘛 姿勢擺太久 選照片選不出來 修圖修太大 限動標錯人 照片沒存到
群組潛水 群組洗版 群組公告沒看 只回貼圖 不小心傳錯群 傳錯貼圖 訊息收回 錯字連發 傳語音訊息 已讀後消失
群組約局 組隊失敗 揪團沒人回 轉傳迷因 連結打不開 語音通話打不通 視訊背景被看到 偷偷開靜音 音訊延遲 通話睡著
幫忙佔位 排隊買票 幫拿飲料 幫拿包包 借外套 共撐一把傘 鞋帶鬆了不提醒 背後貼紙條 偷藏零食 偷吃薯條
幫朋友慶生 忘記朋友生日 驚喜派對 驚喜被拆穿 蛋糕砸臉 蠟燭吹不熄 禮物買錯尺寸 禮物撞款 生日祝福複製貼上 卡片寫太肉麻
聚餐冷場 搞錯笑點 尷尬沉默 一起爆笑 笑到停不下來 講冷笑話 朋友接梗 集體傻眼 笑點太低 忍笑失敗
互取綽號 童年黑歷史 暱稱被公開 老梗重提 爆料前任 揭穿謊話 嘴朋友 互相吐槽 互相吹捧 裝不熟
暗號手勢 默契眼神 隔空對眼 偷偷比手勢 同時說一樣的話 同時想到一件事 不用講就懂 不約而同 心有靈犀 兩人同聲
秘密基地 私房景點 一起通宵 深夜談心 心事分享 秘密交換 偶爾失聯 久別重逢 意外巧遇 不期而遇
感情軍師 幫忙傳話 幫忙探口風 幫朋友告白 幫忙把風 陪朋友失戀 陪去買醉 勸朋友分手 幫忙和好 陪朋友哭
分組同一組 分組分開 坐隔壁 傳紙條 偷笑上課 幫忙點名 代簽到 幫忙抄筆記 借考古題 一起蹺課
出去玩忘記帶東西 房間分配 睡覺打呼 翻身搶被 睡過頭叫不起床 洗澡洗太久 行李裝不下 共用盥洗用品 迷路找人 錯過集合
    `),
  },
  {
    id: 'abstract', icon: '∞', name: '抽象概念地獄', category: '高手挑戰',
    description: '難以具象的哲學、邏輯和抽象思維', color: '#9eacc4',
    words: words(`
自由 公平 正義 平等 真理 美德 善良 邪惡 命運 因果
存在 虛無 無限 有限 永恆 瞬間 過去 現在 未來 時間
空間 維度 平行宇宙 多重宇宙 時空悖論 時間旅行 時間循環 無限迴圈 量子態 不確定性
機率 偶然 必然 隨機 混沌 秩序 複雜性 簡化 模糊 邊界
連續 離散 對稱 不對稱 均衡 非均衡 相對性 絕對性 同一性 差異性
主觀 客觀 本質 表象 現象 實在 幻象 假設 演繹推理 結論
信念 懷疑 確信 知識 智慧 理性 感性 直覺 靈感 想像
意識 自我 潛意識 集體意識 自我覺察 自由意志 決定論 存在主義 虛無主義 唯物主義
唯心主義 理想主義 現實主義 功利主義 義務論 相對主義 懷疑論 實用主義 人文主義 倫理
道德 責任 義務 權利 特權 規範 原則 公共利益 個人利益 動機
意圖 行為 結果 代價 報酬 風險 機會 成本 價值 效率
效能 進步 退步 成長 轉變 抽象化 適應 創新 傳承 信任
背叛 忠誠 承諾 誠信 偽善 偏見 刻板印象 歧視 包容 悖論
矛盾 二律背反 循環論證 假兩難 稻草人謬誤 滑坡謬誤 訴諸權威 以人廢言 倖存者偏差 無知之幕
忒修斯之船 祖父悖論 費米悖論 電車難題 囚徒困境 蒙提霍爾問題 希爾伯特旅館 無限猴子定理 生日悖論 機會成本
沉沒成本 邊際效益 逆向選擇 道德風險 資訊不對稱 路徑依賴 網路效應 蝴蝶效應 黑天鵝事件
    `),
  },
  {
    id: 'acting', icon: '劇', name: '戲精挑戰賽', category: '輕鬆入門',
    description: '超有畫面的日常情境，讓人演到崩潰', color: '#f0aa8d',
    words: words(`
踩到樂高 被蚊子叮到 被蟑螂嚇到 看到蜘蛛 突然打噴嚏 強忍哈欠 嘴巴燙到 喝到超酸檸檬 吃到超辣火鍋 被靜電電到
腳抽筋 手指夾到門 踩到水坑 褲子裂開 鞋子磨腳 鞋帶踩到 頭撞門框 手機摔地上 吃東西噎到 差點跌倒
鬧鐘響不停 睡過頭 起床氣 起床發現停電 浴室沒熱水 洗頭洗到一半停水 半夜找廁所 夢到遲到 還沒睡飽 被冷氣吹醒
考試偷看 被老師點名 課堂打瞌睡 考卷拿到零分 考滿分不敢相信 考試忘帶筆 交白卷 作業被退件 上台忘詞 突然要自我介紹
演講麥克風沒聲音 投影機故障 面試被問倒 面試講錯公司 上班打卡失敗 發現忘了開會 簡報按錯頁 投影片跑版 咳嗽停不下來 視訊忘記關鏡頭
告白被拒絕 收到情書 看到暗戀的人 突然被求婚 接到分手電話 撞見前任 情侶吵架 送錯禮物 約會遲到 被誤認成情侶
看到偶像 抽中大獎 刮中頭獎 中樂透 拿到冠軍 拿到最後一名 突然被稱讚 拿錯獎盃 與偶像擊掌 看到限量商品
排隊排錯隊 趕不上公車 搭錯車 迷路找路 車門快關被擋住 捷運坐過站 電扶梯突然停下 打開空錢包 找不到停車位置 車鑰匙鎖在車裡
打開空冰箱 打翻飲料 咬到舌頭 吃到頭髮 吃冰太快頭痛 搶最後一塊炸雞 口袋發現零錢 偷吃被發現 點錯外送 洗衣服染色
掛衣服被風吹走 打掃看到蟑螂 吸塵器卡住 填滿洗碗槽 泡沫滿地 傢俱組裝失敗 鍋子燒焦 炒菜噴油 電鍋跳起來嚇到 玩遊戲被隊友雷
被對手偷襲 卡關很久 血量只剩一滴 抽卡全槓龜 抽到稀有角色 網路突然斷線 連敗十場 甩掉遊戲手把 遊戲存檔消失 跟朋友裝熟
想偷聽八卦 八卦講到本人 看到熟人裝沒看到 朋友突然嚎啕大哭 忍不住偷笑 笑到噴飲料 朋友講錯名字 被集體整人 生日驚喜嚇到 雲霄飛車急速下墜
看恐怖片 漆黑鬼屋 被人從背後拍肩膀 夜路聽到怪聲 以為有人跟蹤 發現鏡子裡有人 打開空衣櫃 聽到鬼故事後不敢睡 半夜燈突然亮起 唱歌破音
麥克風沒電 忘記歌詞 跳舞踩錯拍 拉筋拉不動 被舞伴踩腳 演戲忘台詞 舞台燈光太亮 上場前發抖 表演結束謝幕 坐到濕椅子
踩到狗大便 風吹走假髮 突然下大雨 雨傘被吹翻 錯把陌生人當朋友 戴耳機唱超大聲 講電話對方沒聽到 相機倒數還沒準備好 睡覺被叫醒 電梯裡放屁
    `),
  },
  {
    id: 'kpop', icon: '♬', name: 'K-POP 宇宙', category: '文化娛樂',
    description: '韓團、歌手、熱門歌曲與韓流粉絲文化', color: '#f3a8bd',
    words: words(`
BTS ASTRO RM Jin SUGA j-hope Jimin V Jungkook BLACKPINK
Jisoo Jennie Rosé Lisa TWICE 娜璉 定延 MOMO Sana 志效
Mina 多賢 彩瑛 子瑜 少女時代 太妍 潤娥 Tiffany 孝淵 徐玄
俞利 秀英 Sunny SHINee 溫流 Key 珉豪 泰民 鐘鉉 EXO
伯賢 燦烈 D.O. Kai 世勳 Suho Xiumin Chen SuperJunior 利特
希澈 藝聲 神童 銀赫 東海 始源 圭賢 厲旭 BIGBANG G-Dragon
太陽 T.O.P 大聲 勝利 2NE1 CL Dara 朴春 敏智 WonderGirls
宣美 泫雅 4MINUTE f(x) Krystal Victoria Amber Luna RedVelvet Irene
Seulgi Wendy Joy Yeri aespa Karina Winter Giselle Ningning IVE
張員瑛 安兪真 Rei Liz Leeseo Gaeul NewJeans Minji Hanni Danielle
Haerin Hyein LE_SSERAFIM 宮脇咲良 金采源 許允眞 Kazuha 洪恩採 ILLIT Yunah
Minju Moka Wonhee Iroha ITZY 禮志 Lia 留眞 彩領 有娜
NMIXX Lily Haewon Sullyoon Bae Jiwoo Kyujin (G)I-DLE 田小娟 Minnie
雨琦 薇娟 舒華 SEVENTEEN S.Coups 淨漢 Joshua Jun Hoshi 圓佑
Woozi DK 玟奎 THE8 勝寛 Vernon Dino StrayKids 方燦 LeeKnow
彰彬 鉉辰 HAN Felix 昇玟 I.N TXT 秀彬 然竣 杋圭
太顯 休寧凱 ENHYPEN 正元 希承 Jay Jake 成訓 Sunoo Ni-ki
NCT NCT127 NCTDREAM WayV Mark 泰容 在玹 楷燦 道英 Johnny
Ten RIIZE Shotaro 恩奭 成燦 元彬 炤熙 Anton ZEROBASEONE 成韓彬
金地雄 章昊 石馬修 金太來 Ricky 金奎彬 朴乾旭 韓維辰 BOYNEXTDOOR TWS
ATEEZ TREASURE THEBOYZ MONSTAX GOT7 DAY6 BTOB INFINITE Apink MAMAMOO
華莎 頌樂 玟星 輝人 KARA SISTAR Girl'sDay IU 李知恩 BoA
PSY ZICO DEAN Crush Heize 李孝利 權恩妃 練習生 出道曲 回歸舞台
主打歌 音樂節目 打歌期 安可舞台 直拍 站姐 粉絲應援 應援棒 手燈 官方會員
粉絲簽名會 見面會 專輯小卡 拆專輯 隨機小卡 韓團周邊 專輯預購 回歸預告 概念照 隨機舞蹈
年末舞台 頒獎典禮 音樂銀行 人氣歌謠 MCountdown MusicCore
    `),
  },
  {
    id: 'fashion', icon: '♢', name: '服裝與時尚', category: '文化娛樂',
    description: '服裝、配件、穿搭風格與流行設計', color: '#d8b1b5',
    words: words(`
T恤 素T 圖案T恤 短版上衣 背心 細肩帶背心 無袖上衣 襯衫 牛津襯衫 法蘭絨襯衫
Polo衫 高領毛衣 針織衫 開襟毛衣 連帽上衣 大學T 運動外套 棒球外套 飛行外套 牛仔外套
皮衣 西裝外套 大衣 風衣 羽絨外套 鋪棉外套 透明防風外套 機能外套 罩衫 披肩
牛仔褲 直筒褲 喇叭褲 寬褲 窄管褲 工裝褲 西裝褲 西裝短褲 百慕達短褲 運動短褲
百褶裙 A字裙 鉛筆裙 牛仔裙 長裙 迷你裙 蛋糕裙 魚尾裙 皮裙 吊帶裙
連身裙 洋裝 小禮服 晚禮服 婚紗 旗袍 和服 韓服 浴衣 連身褲
睡衣 睡袍 居家服 發熱衣 內搭褲 緊身衣 刷毛上衣 泳裝 比基尼 泳褲
絲襪 褲襪 網襪 及膝襪 長筒襪 隱形襪 船型襪 襪套 護膝 腿套
球鞋 帆布鞋 跑鞋 慢跑鞋 皮鞋 樂福鞋 瑪莉珍鞋 高跟鞋 粗跟鞋 細跟鞋
長靴 短靴 雨靴 雪靴 馬丁靴 切爾西靴 涼鞋 夾腳拖 厚底鞋 芭蕾平底鞋
棒球帽 漁夫帽 貝雷帽 毛帽 鴨舌帽 草帽 頭巾 頭帶 髮箍 髮夾
髮圈 鯊魚夾 蝴蝶結髮飾 耳環 耳釘 耳骨夾 項鍊 鎖骨鍊 手鍊 戒指
手錶 墨鏡 眼鏡框 皮帶 腰封 領帶 領結 胸針 袖扣 絲巾
圍巾 手套 口罩鍊 帆布包 托特包 肩背包 斜背包 腰包 水桶包 手提包
鏈條包 郵差包 編織包 後背包 晚宴包 髮帶 皮革手環 針織帽 珍珠項鍊 復古風
Y2K 極簡風 街頭風 美式休閒 日系穿搭 韓系穿搭 法式優雅 甜酷風 學院風 哥德風
龐克風 波希米亞風 工裝風 機能風 運動休閒風 中性風 多巴胺穿搭 同色系穿搭 撞色穿搭
    `),
  },
];

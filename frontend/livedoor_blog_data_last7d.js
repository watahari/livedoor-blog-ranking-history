var labels = ['2023-12-18','2023-12-19','2023-12-20','2023-12-21','2023-12-22','2023-12-23','2023-12-24',];var datasets = [{"label":"ツイッター速報","data":[1,7,33,49,69,29,50]},{"label":"まめきちまめこニートの日常","data":[2,1,2,2,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,1,1,2,2,2]},{"label":"哲学ニュースnwk","data":[4,11,10,9,5,10,8]},{"label":"はちま起稿","data":[5,4,3,3,3,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,3,4,6,7,4,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,5,5,4,6,5,6]},{"label":"ハムスター速報","data":[8,6,6,5,4,6,4]},{"label":"暇つぶしニュース","data":[9,10,7,8,9,9,7]},{"label":"痛いニュース(ﾉ∀`)","data":[10,8,8,7,8,7,9]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,9,9,10,10,8,10]},{"label":"なんJ PRIDE","data":[12,14,15,14,15,13,13]},{"label":"【2ch】ニュー速クオリティ","data":[13,12,14,13,11,12,12]},{"label":"BIPブログ","data":[14,16,13,15,14,17,16]},{"label":"ねいろ速報さん","data":[15,15,16,17,16,16,15]},{"label":"わんこーる速報！","data":[16,13,11,11,13,14,14]},{"label":"カラパイア","data":[17,20,30,30,33,37,39]},{"label":"なんJクエスト","data":[18,24,22,22,18,24,28]},{"label":"ヤゴヴのマンガ劇場","data":[19,17,12,12,12,11,11]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[20,19,19,16,17,15,17]},{"label":"NEWSぽけまとめーる","data":[21,21,18,18,20,28,21]},{"label":"ぶる速-VIP","data":[22,27,28,26,25,23,25]},{"label":"稲妻速報","data":[23,18,20,19,21,21,18]},{"label":"独女ちゃんねる","data":[24,101,101,101,101,101,101]},{"label":"ラビット速報","data":[25,22,24,24,19,18,19]},{"label":"VIPPERな俺","data":[26,26,26,28,28,19,27]},{"label":"ゴールデンタイムズ","data":[27,25,21,23,26,22,23]},{"label":"うしみつ-5chまとめ-","data":[28,29,29,25,24,25,26]},{"label":"おーるじゃんる","data":[29,30,25,21,22,26,24]},{"label":"もちログ","data":[30,23,17,20,23,20,20]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[31,46,84,101,70,56,36]},{"label":"日刊やきう速報","data":[32,28,27,27,27,27,29]},{"label":"おうまがタイムズ","data":[33,35,35,45,47,60,31]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[34,58,53,55,41,36,41]},{"label":"カイカイ反応通信","data":[35,31,34,32,29,32,34]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[36,41,23,37,82,95,101]},{"label":"ネギ速","data":[37,33,32,29,50,48,30]},{"label":"カオスちゃんねる","data":[38,40,41,36,32,41,35]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[39,50,63,56,71,42,63]},{"label":"ふくよかまるみのピリカラ人生","data":[40,77,46,80,45,71,56]},{"label":"オタク.com －オタコム－","data":[41,42,42,41,44,49,42]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[42,49,47,39,35,45,53]},{"label":"ニュースBUZZ","data":[43,65,56,64,76,66,95]},{"label":"流速VIP","data":[44,59,64,66,75,43,55]},{"label":"あにこ便","data":[45,55,61,58,54,55,48]},{"label":"IT速報","data":[46,43,38,31,30,34,49]},{"label":"マンガと私と猫ブログ。","data":[47,60,101,50,31,39,57]},{"label":"ガールズVIPまとめ","data":[48,45,67,43,38,30,37]},{"label":"ぱんをたずねて2000里ちょい","data":[49,48,57,40,37,38,46]},{"label":"今日速2ch","data":[50,70,40,35,61,67,66]},{"label":"乃木坂46まとめ 1/46","data":[51,53,52,52,43,54,52]},{"label":"ついんてーる速報","data":[52,57,65,61,46,52,38]},{"label":"はむらの毎日マンガ","data":[53,34,71,34,57,101,59]},{"label":"絵日記でございます。","data":[54,68,77,74,66,65,65]},{"label":"まとめたニュース","data":[55,38,37,33,39,31,44]},{"label":"芸能人の気になる噂","data":[56,47,51,46,52,59,51]},{"label":"人間まおと愉快な仲間たち","data":[57,67,60,54,48,63,62]},{"label":"ポリー速報","data":[58,62,58,65,62,47,61]},{"label":"海外の万国反応記＠海外の反応","data":[59,64,55,59,55,50,60]},{"label":"【2ch】コピペ情報局","data":[60,56,54,63,42,46,47]},{"label":"スズぺぺの人生何とかなってます!!","data":[61,61,62,57,56,53,54]},{"label":"オタクニュース","data":[62,101,101,81,83,69,33]},{"label":"PS5速報！","data":[63,66,69,71,58,57,58]},{"label":"De速","data":[64,52,50,53,72,61,72]},{"label":"パチンコ・パチスロ.com","data":[65,63,49,44,49,58,69]},{"label":"まとめブレイド","data":[66,85,73,73,63,51,68]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[67,44,44,38,34,33,40]},{"label":"まとめロッテ！","data":[68,80,87,91,86,75,70]},{"label":"2chコピペ保存道場","data":[69,82,88,75,81,79,84]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[70,83,59,72,80,80,64]},{"label":"鷹速@ホークスまとめブログ","data":[71,75,80,69,74,62,71]},{"label":"軍事・ミリタリー速報☆彡","data":[72,74,83,85,85,74,75]},{"label":"鈴木さん速報","data":[73,81,79,76,77,70,87]},{"label":"サカラボ | サッカーまとめ速報","data":[74,78,97,84,84,77,76]},{"label":"サル山の裏マンガ","data":[75,51,94,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[76,101,100,88,79,96,101]},{"label":"ライフハックちゃんねる弐式","data":[77,84,95,70,64,73,91]},{"label":"MLB NEWS@まとめ","data":[78,101,101,92,92,81,98]},{"label":"デジタルニューススレッド","data":[79,101,101,95,93,97,99]},{"label":"ずっと日曜日のターン","data":[80,101,101,87,53,68,101]},{"label":"ろぼ速VIP","data":[81,99,101,89,91,99,93]},{"label":"投資ちゃんねる","data":[82,86,96,82,89,91,88]},{"label":"やみ速@なんJ西武まとめ","data":[83,76,90,77,67,72,82]},{"label":"はーとログ","data":[84,87,93,90,95,84,81]},{"label":"footballnet【サッカーまとめ】","data":[85,100,98,78,97,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[86,88,74,83,94,83,74]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[87,54,68,67,60,64,78]},{"label":"大艦巨砲主義！","data":[88,95,101,96,101,100,94]},{"label":"銃とバッジは置いていけ","data":[89,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[90,96,86,62,65,86,85]},{"label":"まとめ太郎！","data":[91,101,101,101,99,101,101]},{"label":"うみこのおとぼけぐらし","data":[92,97,92,93,88,88,92]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[93,94,91,94,101,101,90]},{"label":"お料理速報","data":[94,101,101,101,98,101,101]},{"label":"最強ジャンプ放送局","data":[95,93,101,97,100,93,101]},{"label":"しばたまブログ","data":[96,101,101,101,101,101,22]},{"label":"世にも奇妙ななんかの話","data":[97,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[98,69,101,101,101,40,32]},{"label":"ニュース30over","data":[99,101,101,101,101,101,101]},{"label":"馬鳥速報","data":[100,90,85,79,87,78,89]},{"label":"あいチャンネル","data":[101,32,31,51,59,35,79]},{"label":"おたみの日々","data":[101,36,82,60,51,101,73]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,37,39,42,36,44,45]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,39,70,101,101,101,101]},{"label":"働く大人の非常識","data":[101,71,45,48,73,89,67]},{"label":"ミラクルファミリー","data":[101,72,48,86,101,101,101]},{"label":"つつみのブログ","data":[101,73,101,101,101,101,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,79,78,68,68,101,80]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,89,81,101,101,85,96]},{"label":"ダンナ様は安月給","data":[101,91,89,101,101,82,77]},{"label":"今日もブブはからまわり。","data":[101,92,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,98,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,36,101,101,94,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,43,47,78,76,83]},{"label":"ぷみらの看護師奮闘記マンガ","data":[101,101,66,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,72,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,75,101,101,87,43]},{"label":"ヲタママだっていーじゃない！","data":[101,101,76,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,99,101,101,101,101]},{"label":"あさことはぎゆうの漫画おきば","data":[101,101,101,98,101,92,86]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,99,96,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,100,101,101,101]},{"label":"甘辛ミックス","data":[101,101,101,101,40,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,90,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,90,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,98,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,97]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,100]}];
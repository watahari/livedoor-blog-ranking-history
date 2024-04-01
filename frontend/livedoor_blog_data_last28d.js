var labels = ['2024-03-05','2024-03-06','2024-03-07','2024-03-08','2024-03-09','2024-03-10','2024-03-11','2024-03-12','2024-03-13','2024-03-14','2024-03-15','2024-03-16','2024-03-17','2024-03-18','2024-03-19','2024-03-20','2024-03-21','2024-03-22','2024-03-23','2024-03-24','2024-03-25','2024-03-26','2024-03-27','2024-03-28','2024-03-29','2024-03-30','2024-03-31','2024-04-01',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,1,2,2,2,1,1,2,2,3,1,2,2,2,1,1,2,2,3,1,1,2,2,2]},{"label":"まめきちまめこニートの日常","data":[2,1,1,1,4,3,1,1,1,2,2,1,1,1,2,4,1,1,2,3,1,1,1,2,3,1,1,1]},{"label":"はちま起稿","data":[3,3,3,3,3,2,3,3,3,3,3,3,3,4,3,3,3,5,5,4,4,4,5,5,2,4,4,4]},{"label":"ハムスター速報","data":[4,4,5,4,5,4,5,6,5,4,4,4,8,7,4,5,5,4,4,5,5,5,2,3,4,5,5,5]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,5,4,5,7,5,4,5,4,5,5,6,5,5,5,6,6,6,7,6,6,6,6,6,6,6,6,6]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,6,6,6,8,7,6,7,6,8,6,5,4,6,6,7,8,3,3,2,3,3,4,4,5,3,3,3]},{"label":"痛いニュース(ﾉ∀`)","data":[7,8,8,7,6,9,7,11,10,10,9,10,12,12,8,8,9,10,6,9,10,7,7,9,7,7,8,8]},{"label":"暇つぶしニュース","data":[8,7,7,8,11,6,8,10,7,9,8,8,6,11,9,10,7,9,10,10,7,8,8,7,8,8,7,7]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,9,9,9,9,8,9,8,8,11,10,9,11,10,10,11,11,7,8,8,8,9,9,8,9,9,9,10]},{"label":"ぶる速-VIP","data":[10,10,12,13,17,18,15,20,15,18,16,19,18,21,21,19,20,25,25,21,20,21,20,18,19,23,16,12]},{"label":"ヤゴヴのマンガ劇場","data":[11,11,10,10,13,12,10,9,9,7,7,7,9,9,7,9,10,8,9,7,9,10,10,11,10,10,21,31]},{"label":"BIPブログ","data":[12,12,11,11,10,11,11,12,11,12,11,11,14,13,12,13,12,13,12,12,13,13,11,10,11,11,12,11]},{"label":"哲学ニュースnwk","data":[13,14,13,12,12,14,18,18,19,15,18,14,10,8,11,12,14,18,14,14,16,11,17,12,13,13,14,15]},{"label":"なんJ PRIDE","data":[14,13,14,15,15,15,14,14,16,13,19,13,17,15,15,15,18,12,11,11,11,12,12,13,14,12,11,9]},{"label":"わんこーる速報！","data":[15,15,15,14,14,13,12,13,13,14,14,12,20,16,16,14,13,16,17,13,12,15,14,16,16,16,18,17]},{"label":"ねいろ速報さん","data":[16,17,17,17,16,17,17,16,20,17,21,18,21,20,17,18,22,24,23,20,21,17,19,19,20,20,24,20]},{"label":"【2ch】ニュー速クオリティ","data":[17,16,16,16,18,16,16,17,17,16,20,15,19,17,18,16,19,19,15,16,17,18,16,15,17,18,17,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,18,18,22,21,22,21,15,21,19,22,20,27,23,20,20,21,26,20,19,18,20,18,21,22,19,23,23]},{"label":"ラビット速報","data":[19,21,20,19,19,19,19,19,22,22,23,21,22,22,24,21,24,21,26,22,22,25,23,22,18,21,22,22]},{"label":"あいチャンネル","data":[20,32,73,21,35,21,47,35,18,44,35,17,52,38,19,24,64,22,32,69,24,34,73,20,52,47,25,64]},{"label":"稲妻速報","data":[21,23,19,20,24,24,25,22,23,20,25,26,24,24,27,26,29,32,31,26,30,26,24,27,27,31,30,26]},{"label":"ゴールデンタイムズ","data":[22,26,25,23,23,26,31,27,32,24,27,22,28,29,26,27,28,27,27,27,19,24,22,32,35,28,32,28]},{"label":"VIPPERな俺","data":[23,22,22,18,22,25,27,24,25,23,28,27,25,26,32,23,34,23,29,31,31,33,30,24,21,22,35,25]},{"label":"カラパイア","data":[24,25,24,30,39,40,30,36,39,37,40,42,42,42,34,32,35,38,38,34,35,35,36,36,37,38,39,37]},{"label":"うしみつ-5chまとめ-","data":[25,30,23,25,27,27,29,29,28,25,24,23,23,28,30,28,30,36,35,28,26,31,31,31,25,27,28,24]},{"label":"おーるじゃんる","data":[26,24,26,24,26,20,23,21,24,27,31,28,30,35,13,1,15,17,22,18,23,27,26,28,30,30,27,19]},{"label":"日刊やきう速報","data":[27,33,28,28,28,33,33,33,29,33,34,24,29,31,31,30,27,14,18,17,27,22,21,23,29,17,15,14]},{"label":"NEWSぽけまとめーる","data":[28,28,30,27,33,34,28,31,26,21,30,29,31,25,28,22,26,31,34,25,29,23,28,29,28,25,33,30]},{"label":"なんJクエスト","data":[29,29,29,29,32,30,24,25,34,30,32,31,33,32,38,33,31,28,24,23,32,28,25,30,23,26,29,21]},{"label":"まとめたニュース","data":[30,35,37,41,44,43,38,54,43,50,44,36,54,47,51,53,49,42,39,35,33,42,52,34,24,35,44,38]},{"label":"おうまがタイムズ","data":[31,31,31,26,30,31,26,28,38,32,45,35,36,33,29,25,25,30,30,29,25,29,34,26,31,24,31,32]},{"label":"ネギ速","data":[32,38,34,31,34,37,34,30,30,34,42,33,34,37,33,29,33,29,28,24,28,30,27,25,26,29,37,33]},{"label":"もちログ","data":[33,37,36,40,36,38,32,32,27,26,29,25,26,27,22,17,23,20,16,15,15,16,15,14,15,15,13,13]},{"label":"カイカイ反応通信","data":[34,34,33,33,31,35,36,34,37,31,36,34,32,40,39,36,37,39,45,33,39,36,32,35,33,36,38,41]},{"label":"etusivu note","data":[35,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[36,27,32,32,25,28,22,23,35,28,26,16,16,18,35,40,38,33,48,55,34,44,35,33,36,32,26,27]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[37,40,35,34,37,32,37,43,45,47,61,38,40,39,42,39,54,40,36,32,40,41,39,38,41,40,50,47]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[38,39,40,39,38,49,39,40,33,35,51,37,35,34,36,35,32,37,40,39,41,43,33,39,34,33,43,35]},{"label":"ついんてーる速報","data":[39,48,55,52,47,55,46,49,46,61,59,65,61,65,58,55,60,54,60,56,58,56,54,50,45,48,46,49]},{"label":"IT速報","data":[40,42,49,38,40,41,35,39,40,46,37,39,37,44,37,31,36,35,42,37,36,39,44,40,38,50,41,39]},{"label":"オタク.com －オタコム－","data":[41,47,38,42,42,42,42,47,49,39,53,47,47,45,46,44,44,49,53,45,44,37,42,42,43,49,51,48]},{"label":"芸能人の気になる噂","data":[42,43,47,50,54,57,43,41,52,36,52,60,57,57,55,42,39,50,55,49,48,47,49,51,53,52,47,44]},{"label":"パチンコ・パチスロ.com","data":[43,49,58,51,65,68,70,48,54,51,55,54,53,62,60,47,61,43,54,73,66,55,55,56,58,39,52,61]},{"label":"くまおのマンガ堂","data":[44,41,41,44,41,50,50,44,47,43,49,53,56,58,57,50,58,64,67,75,69,80,76,78,75,73,91,75]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[45,44,43,45,46,45,44,50,51,40,48,44,48,50,44,41,42,46,49,46,53,54,60,44,47,42,49,36]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[46,62,62,61,56,53,45,73,72,65,54,50,45,63,75,61,41,60,59,58,52,57,82,73,40,55,60,67]},{"label":"【2ch】コピペ情報局","data":[47,46,48,47,45,44,41,58,50,41,62,49,43,54,59,58,46,57,56,50,51,53,40,41,51,54,54,43]},{"label":"ポリー速報","data":[48,57,56,58,57,64,66,60,59,54,66,56,55,49,49,65,55,34,43,47,42,49,43,48,55,51,56,51]},{"label":"あにこ便","data":[49,55,52,55,50,48,49,59,58,62,63,52,44,53,50,57,59,63,58,42,49,52,59,55,56,53,55,52]},{"label":"人間まおと愉快な仲間たち","data":[50,52,50,49,48,60,53,42,48,42,41,41,38,41,43,45,57,59,65,95,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[51,77,72,69,66,69,75,82,84,94,94,69,97,90,84,62,70,51,52,61,64,64,58,57,63,43,34,34]},{"label":"ガールズVIPまとめ","data":[52,51,39,37,52,54,57,53,41,60,43,43,49,52,61,54,47,44,37,36,38,38,41,47,42,57,59,56]},{"label":"PS5速報！","data":[53,53,53,54,53,63,67,70,65,63,64,62,59,60,52,51,52,56,51,52,50,50,51,46,54,56,57,55]},{"label":"スズぺぺの人生何とかなってます!!","data":[54,56,54,56,61,47,55,52,53,38,46,40,41,43,40,38,40,41,44,38,37,40,37,37,39,41,45,45]},{"label":"カオスちゃんねる","data":[55,50,44,57,49,56,48,55,56,52,47,55,51,51,53,63,45,61,64,44,43,48,57,49,44,45,48,42]},{"label":"はむらの毎日マンガ","data":[56,20,27,65,20,29,59,56,12,48,17,30,60,19,23,37,16,67,19,30,60,19,29,101,101,101,101,101]},{"label":"馬鳥速報","data":[57,68,97,68,72,78,80,68,82,69,69,70,72,100,85,68,84,70,94,76,47,66,78,88,91,76,101,59]},{"label":"海外の万国反応記＠海外の反応","data":[58,58,42,46,29,36,40,37,42,45,56,48,46,46,54,52,43,53,66,51,45,51,46,43,48,37,53,50]},{"label":"ふくよかまるみのピリカラ人生","data":[59,36,59,35,55,39,58,101,36,56,33,59,101,36,56,34,51,101,33,43,95,32,50,101,101,101,20,68]},{"label":"チリツモブログ","data":[60,54,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,65,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[61,67,64,66,60,67,74,67,68,66,67,63,70,72,64,56,63,45,62,63,56,63,66,64,60,60,67,72]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[62,63,75,62,64,70,91,71,63,64,100,101,87,71,65,80,101,101,74,68,88,101,101,80,71,77,63,78]},{"label":"De速","data":[63,59,45,48,58,58,54,45,44,53,38,51,62,59,66,48,50,47,41,40,46,45,38,45,46,34,36,40]},{"label":"最強ジャンプ放送局","data":[64,78,79,84,83,81,78,74,92,93,84,85,91,92,71,83,87,85,85,89,90,71,86,87,80,94,90,86]},{"label":"ライフハックちゃんねる弐式","data":[65,76,68,76,77,72,68,65,67,57,68,68,66,79,67,76,73,87,79,67,84,67,67,63,66,61,86,82]},{"label":"すや子のブログ","data":[66,73,101,78,87,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"軍事・ミリタリー速報☆彡","data":[67,60,70,67,76,74,76,78,77,72,74,83,76,81,81,79,80,78,78,72,76,75,74,62,72,80,82,69]},{"label":"ずっと日曜日のターン","data":[68,70,57,59,67,62,69,46,66,55,57,46,64,55,48,49,53,66,73,62,62,68,48,61,49,46,77,80]},{"label":"流速VIP","data":[69,65,61,64,59,71,61,66,70,68,70,61,65,66,70,64,62,73,77,70,54,59,70,52,59,62,64,58]},{"label":"かりんこのかりん党","data":[70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はーとログ","data":[71,72,76,80,74,83,88,87,89,74,75,81,79,78,88,73,78,79,84,79,74,84,68,74,77,83,78,84]},{"label":"2chコピペ保存道場","data":[72,71,69,75,81,75,101,75,73,73,76,71,69,74,69,74,69,72,70,78,67,76,77,67,73,72,81,79]},{"label":"投資ちゃんねる","data":[73,66,51,73,71,52,52,69,60,67,77,67,67,70,76,71,68,82,72,71,80,77,69,75,76,68,73,73]},{"label":"今日速2ch","data":[74,61,84,72,70,82,64,84,57,59,60,75,73,67,96,92,79,68,50,57,73,58,56,60,65,67,101,101]},{"label":"ジャンプ速報","data":[75,80,66,63,75,59,63,64,101,76,85,78,75,76,77,86,72,86,90,64,59,61,81,70,61,58,66,62]},{"label":"サカラボ | サッカーまとめ速報","data":[76,75,67,85,86,89,72,63,81,84,86,90,86,77,94,94,95,93,75,85,75,92,71,85,86,87,74,91]},{"label":"鷹速@ホークスまとめブログ","data":[77,95,94,81,99,101,101,101,97,101,101,99,94,101,91,101,101,96,99,101,97,101,91,99,84,86,76,81]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[78,101,71,60,62,46,13,26,64,81,101,95,71,101,101,101,101,101,95,59,55,62,80,98,88,101,83,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[79,84,78,71,90,92,94,83,87,79,93,92,85,83,93,90,82,95,82,54,98,83,100,69,87,78,94,92]},{"label":"絵日記でございます。","data":[80,79,87,43,78,79,71,88,101,89,98,91,68,80,87,101,90,74,80,82,100,100,94,93,99,90,79,100]},{"label":"ろぼ速VIP","data":[81,82,77,79,82,77,81,101,88,87,83,86,82,82,92,100,93,71,83,83,72,90,88,71,68,82,97,74]},{"label":"つつみのブログ","data":[82,101,101,101,84,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,69,101,68,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[83,81,88,86,95,97,95,91,90,96,89,80,80,86,74,82,91,98,101,101,101,101,101,101,89,69,68,94]},{"label":"鈴木さん速報","data":[84,83,81,93,93,87,93,97,101,83,96,89,90,98,99,93,89,75,81,80,81,82,90,76,78,92,93,101]},{"label":"犬のかがやきブログ","data":[85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[86,88,89,87,92,86,98,100,93,92,87,96,89,95,95,99,99,100,89,92,83,98,89,89,85,91,92,93]},{"label":"登山ちゃんねる","data":[87,74,82,90,89,99,79,77,71,75,71,87,81,69,73,84,83,94,86,84,61,74,83,97,81,81,87,76]},{"label":"しばたまブログ","data":[88,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,19,29]},{"label":"デジタルニューススレッド","data":[89,89,92,91,91,73,84,89,91,88,92,93,92,91,100,96,96,99,93,96,92,89,87,84,79,89,88,90]},{"label":"まとめロッテ！","data":[90,94,99,101,101,101,96,101,94,101,101,88,101,101,101,101,97,101,101,90,70,85,101,101,97,96,99,71]},{"label":"大艦巨砲主義！","data":[91,101,101,94,98,96,97,101,95,90,91,101,100,101,98,101,100,101,101,98,96,94,98,94,92,97,101,96]},{"label":"働く大人の非常識","data":[92,69,60,77,69,61,65,57,61,85,65,64,88,88,80,60,66,90,76,74,94,88,63,54,67,101,61,77]},{"label":"おる速","data":[93,101,91,92,101,101,101,93,83,101,90,101,93,87,72,72,74,77,71,66,57,78,62,72,64,64,72,70]},{"label":"ニュースBUZZ","data":[94,100,74,53,79,65,51,62,79,58,80,101,58,61,97,78,56,48,61,48,63,65,61,58,62,93,80,66]},{"label":"ダイエット速報＠2ちゃんねる","data":[95,96,85,96,101,101,101,92,86,82,78,94,101,64,78,101,81,81,91,91,85,87,84,79,98,98,84,57]},{"label":"MLB NEWS@まとめ","data":[96,101,101,82,80,93,85,94,101,100,97,82,96,97,89,98,98,55,69,60,68,79,65,83,83,79,100,88]},{"label":"資格ちゃんねる","data":[97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,97,101,79,91,97,81,101,101,71,101]},{"label":"まとめブレイド","data":[98,101,101,83,85,101,101,101,101,101,101,84,83,101,101,101,101,76,68,86,101,95,101,101,82,70,70,97]},{"label":"お料理速報","data":[99,101,100,98,101,94,90,86,101,97,79,98,98,84,101,101,85,101,101,101,82,86,101,96,101,99,101,85]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[100,101,83,88,97,95,101,99,96,78,73,76,63,73,86,89,88,88,87,81,78,73,45,77,57,71,62,63]},{"label":"ツイッター速報","data":[101,19,21,74,1,10,56,101,101,101,39,66,39,30,62,101,101,11,21,77,101,101,101,101,101,101,101,101]},{"label":"あきばさやかの人生ケアレスミス","data":[101,45,63,36,73,101,101,101,62,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,64,46,101,51,51,101,51,55,101,58,57,101,56,101,43,48,101,47,41,101,46,47,101,101,44,42,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,85,101,101,101,101,101,101,99,95,101,101,101,101,101,101,75,84,100,101,101,101,96,91,70,74,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,87,96,89,101,101,101,90,100,101,101,101,101,101,101,87,101,92,101,101,71,99,101,100,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,90,95,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,91,101,101,101,101,101,101,101,101,101,97,101,93,101,97,101,91,92,93,101,93,95,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あんころの漫画日和","data":[101,93,93,101,88,80,101,96,85,99,81,77,78,101,79,70,76,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,97,90,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,92,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,98,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,99,80,70,68,66,62,61,69,49,50,58,50,48,41,46,65,52,57,101,101,60,53,101,50,63,101,53]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,65,101,101,101,101,101,78,101,101,101,13,101,68,95,101,62,101,101,101,101,101,59,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,86,101,94,100,101,85,98,86,95,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,95,63,91,77,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,97,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101]},{"label":"〜うちのヒフミヨ！４人育児はエンターテインメント〜","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,100,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,43,23,20,81,14,6,13,45,15,14,14,67,17,15,13,53,14,14,13,53,12,14,10,46]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,96,90,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,76,73,80,80,70,82,72,77,89,83,85,86,89,88,94,87,81,85,86,90,88,75,83]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,85,86,95,76,71,88,79,84,68,82,69,77,69,96,87,77,72,72,66,74,75,96,65]},{"label":"ぱんをたずねて2000里ちょい","data":[101,101,101,101,101,88,82,76,74,77,72,73,74,75,63,59,71,58,63,65,65,70,75,82,69,65,58,60]},{"label":"気になる芸能まとめ","data":[101,101,101,101,101,98,99,101,101,101,99,101,101,99,101,101,101,101,101,97,86,101,99,95,100,101,101,98]},{"label":"トレジャーハンティン部、部長のブログ","data":[101,101,101,101,101,101,60,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,92,38,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,4,31,29,12,32,7,2,25,77,67,65,46,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,15,74,101,101,45,66,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"魔界のニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,96,90,101,101,101,101,101,91,96,101,101,93,95,98,95]},{"label":"うちのとらまる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,4,83,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,89]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101]},{"label":"証券非行被害者救済ボランティアのブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101]},{"label":"柴犬どんぐり三毛猫たんぽぽ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,93,101,101,101,95,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,96,101,101,101]},{"label":"ながの通信 - 長野県長野市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,64,90,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,17,32,59,69,18]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,84,85,87]},{"label":"らばQ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,40,54]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,95,99]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101]},{"label":"みぃ子のブログ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101]}];
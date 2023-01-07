var labels = ['2022-12-11','2022-12-12','2022-12-13','2022-12-14','2022-12-15','2022-12-16','2022-12-17','2022-12-18','2022-12-19','2022-12-20','2022-12-21','2022-12-22','2022-12-23','2022-12-24','2022-12-25','2022-12-26','2022-12-27','2022-12-28','2022-12-29','2022-12-30','2022-12-31','2023-01-01','2023-01-02','2023-01-03','2023-01-04','2023-01-05','2023-01-06','2023-01-07',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,2,2,1,1,1,1,1,3,4,1,1,1,1,1,2,1,17,22,2,1,1,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[2,3,3,4,4,3,4,5,4,3,4,4,4,4,3,4,4,4,5,5,5,3,2,3,4,4,6,6]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1,1,1,2,2,2]},{"label":"はちま起稿","data":[4,4,4,3,3,4,3,3,5,4,3,3,3,2,2,3,3,3,3,3,3,4,4,2,3,3,3,3]},{"label":"ヤゴヴのマンガ劇場","data":[5,5,5,7,7,5,5,7,7,6,7,7,6,7,7,6,7,8,8,7,15,31,27,19,20,20,13,11]},{"label":"ハムスター速報","data":[6,9,8,5,5,6,8,9,10,7,6,5,5,5,8,10,5,5,4,4,4,6,7,8,11,7,7,5]},{"label":"暇つぶしニュース","data":[7,6,6,6,6,7,7,8,6,5,5,6,7,6,6,5,6,7,6,6,6,8,3,4,6,6,8,8]},{"label":"不思議.net","data":[8,7,7,8,8,8,6,6,8,9,8,8,8,9,5,9,8,6,7,13,19,26,29,29,25,8,4,4]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[9,8,10,11,11,10,9,12,9,11,10,9,9,11,10,11,13,10,13,12,10,9,5,6,8,9,10,9]},{"label":"【2ch】ニュー速クオリティ","data":[10,10,9,10,9,9,11,11,11,10,9,10,10,10,9,7,9,9,9,8,7,10,8,7,9,10,9,10]},{"label":"なんJ PRIDE","data":[11,13,17,15,15,13,16,16,17,14,18,17,15,15,17,16,18,21,18,19,14,16,12,11,12,15,18,18]},{"label":"わんこーる速報！","data":[12,11,11,13,12,11,13,14,13,15,14,13,13,13,15,13,15,15,11,11,9,12,10,9,7,11,12,12]},{"label":"哲学ニュースnwk","data":[13,12,14,14,13,12,14,13,15,16,13,12,11,12,13,14,12,11,12,10,13,13,11,10,10,12,14,15]},{"label":"おうまがタイムズ","data":[14,17,18,18,20,21,18,17,16,19,17,16,14,19,16,17,19,20,16,18,16,15,14,14,15,17,15,17]},{"label":"ねいろ速報さん","data":[15,18,16,16,18,18,20,18,21,20,20,18,19,23,19,19,16,19,17,20,17,19,23,17,19,18,19,19]},{"label":"カラパイア","data":[16,15,13,9,10,15,10,4,3,8,15,20,17,18,14,8,10,13,14,14,11,5,9,12,17,14,17,16]},{"label":"痛いニュース(ﾉ∀`)","data":[17,19,21,19,14,17,17,19,19,17,19,15,18,21,18,18,17,16,21,17,18,17,21,15,14,16,16,14]},{"label":"BIPブログ","data":[18,16,15,17,17,20,12,10,12,12,11,11,12,14,11,12,11,14,15,16,12,14,13,13,13,13,11,13]},{"label":"NEWSぽけまとめーる","data":[19,20,20,21,19,24,22,22,27,26,23,25,31,25,22,22,27,24,24,29,23,22,22,23,23,19,26,22]},{"label":"ゴールデンタイムズ","data":[20,21,19,22,21,16,19,21,23,18,21,28,24,20,26,20,21,25,20,23,21,18,18,25,18,21,23,27]},{"label":"なんJクエスト","data":[21,22,22,20,24,27,29,27,28,28,29,23,25,31,29,28,25,26,28,26,28,20,16,16,22,26,24,26]},{"label":"VIPPERな俺","data":[22,29,32,27,25,25,27,29,31,31,27,24,27,26,27,27,22,18,19,24,31,27,25,31,27,23,25,24]},{"label":"しばたまブログ","data":[23,23,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,59,101,101,101,101]},{"label":"ぶる速-VIP","data":[24,26,29,24,22,29,30,28,30,29,28,31,30,28,32,29,28,28,29,27,29,25,20,21,16,28,22,23]},{"label":"稲妻速報","data":[25,24,23,23,23,23,21,23,22,22,25,21,23,24,24,23,24,22,27,25,22,21,26,24,24,30,29,31]},{"label":"カイカイ反応通信","data":[26,30,26,26,30,30,28,30,34,32,31,30,28,29,31,31,30,29,32,31,40,56,62,62,63,60,32,29]},{"label":"日刊やきう速報","data":[27,27,30,33,27,22,24,25,29,27,32,33,32,32,33,30,32,30,25,32,34,29,24,26,28,29,30,21]},{"label":"ラビット速報","data":[28,25,24,25,26,26,23,26,26,25,26,26,26,27,21,24,23,27,26,28,24,23,19,18,21,24,28,30]},{"label":"うしみつ-5chまとめ-","data":[29,28,25,30,33,31,32,32,32,24,30,29,29,30,30,35,33,31,33,41,71,101,101,101,96,39,21,25]},{"label":"footballnet【サッカー5chまとめ】","data":[30,37,41,49,39,36,52,74,82,38,80,58,62,71,73,59,83,44,90,101,93,36,46,44,50,72,91,90]},{"label":"世にも奇妙ななんかの話","data":[31,101,27,28,29,101,25,24,25,53,22,22,22,70,23,25,26,96,30,30,27,24,101,20,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[32,32,31,32,32,32,26,20,24,21,24,27,21,22,20,21,20,23,22,21,20,40,65,94,34,25,20,20]},{"label":"IT速報","data":[33,33,33,31,31,34,31,31,33,30,35,35,37,35,40,38,38,35,40,35,36,32,33,32,33,31,31,37]},{"label":"サカラボ | サッカーまとめ速報","data":[34,38,40,40,41,46,43,59,50,33,41,52,61,62,55,55,62,55,75,56,60,64,53,57,54,46,51,51]},{"label":"人間まおと愉快な仲間たち","data":[35,31,28,29,16,14,15,15,14,13,12,14,16,16,12,15,14,12,10,9,8,11,6,5,5,5,5,7]},{"label":"まとめたニュース","data":[36,35,37,36,34,33,33,35,37,44,33,41,42,37,41,33,51,46,37,36,32,38,32,39,37,40,37,36]},{"label":"おーるじゃんる","data":[37,34,36,39,35,42,42,40,41,39,40,34,36,33,35,39,35,37,34,37,38,41,45,36,38,41,33,39]},{"label":"ニュースBUZZ","data":[38,51,35,44,43,41,39,34,35,36,36,36,34,36,36,37,34,38,43,46,48,33,31,33,44,37,35,28]},{"label":"あいチャンネル","data":[39,14,12,12,28,28,37,56,18,23,16,32,33,17,25,54,48,17,23,15,33,37,15,30,31,45,66,73]},{"label":"ネギ速","data":[40,36,38,41,45,38,36,39,47,37,38,40,39,57,37,34,37,32,41,34,35,30,43,38,29,32,38,38]},{"label":"【2ch】コピペ情報局","data":[41,39,42,37,36,35,35,33,36,40,39,39,35,40,38,43,40,40,36,39,37,39,36,37,40,38,36,35]},{"label":"野球お絵かき@なんJまとめ","data":[42,41,54,69,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[43,46,39,38,40,44,40,47,51,55,55,47,46,44,42,44,42,34,35,22,25,35,37,35,36,36,34,41]},{"label":"カエルDXのオタ活日記","data":[44,52,49,54,50,43,47,50,42,42,60,64,63,63,57,80,87,48,55,48,66,63,101,83,94,87,99,101]},{"label":"山田全自動のあるある日記","data":[45,50,57,56,53,49,51,51,60,51,44,43,43,43,39,32,45,53,50,42,26,7,28,27,26,27,27,33]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[46,45,34,35,38,37,38,37,39,34,34,42,41,34,34,36,29,33,38,38,43,34,34,34,32,33,40,32]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[47,57,69,76,55,48,55,49,46,66,58,38,54,55,61,65,82,73,62,53,45,66,63,41,48,51,61,53]},{"label":"オタク.com －オタコム－","data":[48,53,47,50,44,45,44,42,54,45,45,46,44,45,49,42,50,45,47,51,39,43,42,42,46,44,45,49]},{"label":"海外の万国反応記＠海外の反応","data":[49,54,52,51,56,59,59,63,43,63,57,53,55,56,50,64,63,60,64,57,61,62,60,58,56,70,55,65]},{"label":"ガールズVIPまとめ","data":[50,58,55,78,66,61,82,72,52,81,47,62,58,41,69,66,65,76,72,50,52,51,52,54,59,63,79,87]},{"label":"De速","data":[51,88,78,88,77,80,85,101,86,88,81,71,76,76,76,79,94,81,53,54,75,86,78,97,101,100,101,97]},{"label":"カオスちゃんねる","data":[52,48,43,42,46,62,50,65,40,50,59,56,47,61,46,49,44,39,44,40,47,52,54,55,53,43,41,44]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[53,59,46,45,52,50,45,46,48,49,46,50,56,39,44,50,46,51,39,49,50,49,47,48,51,54,47,52]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[54,64,59,85,58,66,101,79,101,101,73,101,101,89,101,101,101,101,101,101,101,92,101,101,85,67,101,69]},{"label":"あにこ便","data":[55,44,44,47,49,55,56,53,44,47,50,49,51,48,47,48,43,47,48,52,62,67,64,63,61,66,64,61]},{"label":"ライフハックちゃんねる弐式","data":[56,99,84,92,101,101,79,81,67,79,71,76,78,72,60,69,58,67,52,70,59,68,69,75,76,57,57,62]},{"label":"チリツモブログ","data":[57,101,101,101,51,101,101,101,101,41,61,101,38,58,48,101,66,101,77,101,101,101,41,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[58,69,75,91,71,85,101,101,101,58,97,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[59,40,48,58,54,67,60,60,49,59,53,45,52,60,64,56,49,58,68,63,51,42,48,50,45,55,54,58]},{"label":"スズぺぺの人生何とかなってます!!","data":[60,56,51,52,59,58,48,48,45,46,48,48,45,42,45,47,39,50,46,60,49,53,88,101,101,52,48,48]},{"label":"ポリー速報","data":[61,55,45,46,47,53,54,52,55,54,56,59,57,38,52,58,67,54,51,68,58,70,55,56,52,49,52,47]},{"label":"働く大人の非常識","data":[62,90,101,96,101,101,80,67,80,87,91,101,94,101,67,40,61,70,101,80,80,101,73,92,101,79,101,76]},{"label":"ツイッター速報","data":[63,68,88,101,67,19,34,97,96,94,63,19,20,8,28,26,41,36,31,33,44,48,39,28,35,34,44,55]},{"label":"鷹速@ホークスまとめブログ","data":[64,63,58,62,62,64,64,68,63,65,76,66,81,67,71,72,72,72,70,71,77,78,79,79,60,86,85,64]},{"label":"芸能人の気になる噂","data":[65,67,60,60,63,65,58,55,59,60,62,60,48,59,56,60,64,65,60,64,56,60,59,47,43,56,49,56]},{"label":"気になる芸能まとめ","data":[66,65,80,68,73,68,66,64,61,71,70,70,74,75,65,68,78,68,73,67,63,59,51,51,47,50,56,59]},{"label":"今日速2ch","data":[67,61,70,74,101,39,41,77,66,52,37,54,64,53,78,77,55,101,91,87,73,28,30,53,49,35,53,57]},{"label":"ついんてーる速報","data":[68,66,79,84,95,72,76,87,94,80,77,77,60,68,68,61,68,49,58,65,55,54,56,46,57,77,65,72]},{"label":"マンガと私と猫ブログ。","data":[69,42,62,43,65,40,46,36,38,35,49,37,49,49,43,57,52,63,85,74,82,83,101,101,101,65,42,43]},{"label":"まとめロッテ！","data":[70,77,82,67,79,101,101,101,101,101,101,89,101,90,95,101,81,80,101,101,101,95,77,101,101,101,101,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[71,80,93,99,82,88,98,101,101,72,86,101,96,101,101,101,101,101,101,93,87,101,86,98,99,80,78,101]},{"label":"うちの夫が糖尿病になっちゃった！","data":[72,73,64,53,48,52,57,57,53,48,54,55,53,51,54,52,47,41,45,44,46,50,40,40,42,48,46,45]},{"label":"軍事・ミリタリー速報☆彡","data":[73,75,65,66,75,77,53,76,77,77,75,68,71,73,70,78,73,78,86,75,76,75,83,71,73,74,67,70]},{"label":"ずっと日曜日のターン","data":[74,70,67,57,70,101,75,66,64,101,90,98,75,95,80,53,56,88,56,84,65,46,57,69,67,64,81,84]},{"label":"web漫画家やしろあずきの日常","data":[75,82,73,73,60,56,65,44,71,62,52,51,59,47,51,67,89,92,63,95,54,69,101,64,75,76,43,42]},{"label":"えみコミック！","data":[76,49,77,48,89,47,87,43,70,43,66,44,73,46,77,45,60,42,74,47,79,44,72,45,66,47,75,50]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[77,91,98,101,86,100,78,99,98,91,101,101,100,101,89,91,101,99,101,94,101,101,89,77,92,89,101,101]},{"label":"ふぇー速","data":[78,43,53,83,74,99,92,58,88,101,95,82,91,96,94,84,101,75,81,66,72,61,61,66,68,75,50,54]},{"label":"PS5速報！","data":[79,72,50,55,57,82,93,62,56,64,82,81,93,65,53,51,54,52,57,58,53,58,71,82,86,61,60,82]},{"label":"VIP NEWS","data":[80,47,81,87,101,73,90,61,62,75,101,73,72,66,58,63,59,64,79,55,64,79,49,70,39,62,59,63]},{"label":"2chコピペ保存道場","data":[81,79,72,59,61,63,62,70,69,78,69,72,70,77,74,85,85,82,78,76,83,72,80,65,62,58,73,68]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[82,71,68,70,78,69,71,41,65,70,64,61,65,54,59,73,75,74,71,72,67,71,66,67,69,69,68,67]},{"label":"WorldFootballNewS","data":[83,101,101,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[84,81,101,101,101,60,86,94,101,101,101,101,101,101,101,99,101,101,66,101,101,101,94,68,77,93,101,100]},{"label":"投資ちゃんねる","data":[85,89,89,101,87,76,83,82,85,97,88,87,79,80,82,62,76,85,87,78,81,84,70,73,58,71,77,77]},{"label":"お料理速報","data":[86,84,87,94,88,78,101,101,79,67,83,57,69,74,81,70,74,84,69,59,74,81,96,72,88,59,71,79]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[87,86,66,82,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[88,101,101,90,101,96,101,96,100,99,101,96,101,85,101,101,101,101,101,101,101,101,97,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[89,76,71,93,101,83,89,98,101,101,100,78,101,101,101,101,101,101,82,86,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[90,78,56,64,85,98,101,83,93,101,85,86,88,84,84,92,92,69,80,90,89,94,100,95,90,95,96,101]},{"label":"登山ちゃんねる","data":[91,93,101,101,101,101,101,101,101,101,101,95,87,101,90,83,90,79,101,101,88,65,81,93,91,94,83,101]},{"label":"まとめブレイド","data":[92,74,92,97,101,79,74,85,95,95,87,92,82,99,63,76,71,61,59,45,84,57,50,61,64,53,69,91]},{"label":"もちログ","data":[93,101,101,101,101,93,95,100,89,84,101,93,98,101,101,86,69,89,89,69,69,45,38,43,41,42,39,46]},{"label":"ろぼ速VIP","data":[94,92,96,80,90,90,101,101,97,101,92,94,85,100,97,87,101,97,93,82,95,101,92,60,83,101,101,101]},{"label":"鈴木さん速報","data":[95,101,101,77,99,92,94,101,101,100,101,90,90,91,99,90,101,100,100,89,97,96,82,96,101,101,86,96]},{"label":"まとめ太郎！","data":[96,83,101,81,84,84,77,80,78,68,74,80,92,81,83,71,84,93,88,96,101,99,101,101,101,101,101,85]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[97,101,101,101,101,101,81,84,91,101,84,99,84,86,87,96,91,83,76,77,90,101,101,101,101,81,72,75]},{"label":"デジタルニューススレッド","data":[98,95,101,101,76,101,101,88,90,90,89,101,97,98,91,95,95,94,99,85,96,80,74,78,95,88,84,78]},{"label":"ふくよかまるみのピリカラ人生","data":[99,96,86,79,81,75,73,75,76,73,65,63,66,78,66,75,57,56,49,61,70,74,99,101,101,101,101,101]},{"label":"はーとログ","data":[100,85,94,89,91,94,96,89,83,101,72,84,86,82,86,82,96,101,94,101,101,97,95,84,101,92,92,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,60,101,101,42,101,101,92,101,61,43,79,67,52,101,101,53,62,54,101,42,90,101,85,101,101,58,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,62,101,65,101,74,101,86,73,69,93,97,101,83,101,101,101,98,101,101,100,101,67,76,100,68,76,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,87,100,101,101,71,67,101,87,101,101,101,83,97,72,101,101,101,97,101,101,101,101,101,65,101,101,101]},{"label":"オタクニュース","data":[101,94,101,61,98,101,101,101,99,101,101,101,101,101,101,97,99,90,101,101,86,101,101,87,81,90,87,101]},{"label":"あおばブログ","data":[101,97,99,75,97,91,100,95,84,92,79,74,89,87,101,101,101,101,101,101,78,85,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,98,90,71,69,70,70,38,57,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"エクサワロス","data":[101,100,95,98,83,87,88,101,92,86,101,101,95,93,79,74,98,86,84,81,92,89,76,86,82,78,93,94]},{"label":"ぱんをたずねて2000里ちょい","data":[101,101,61,100,101,57,68,73,101,56,51,75,40,64,101,41,93,43,42,62,41,55,35,52,78,101,101,40]},{"label":"馬鳥速報","data":[101,101,63,63,64,51,61,91,72,57,78,67,50,50,62,81,79,59,83,73,85,88,68,74,79,85,74,60]},{"label":"つんの日常ブログ","data":[101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,83,101,101,101,101,101,101,96,101,101,101,101,98,94,86,95,101,92,99,91,101,101,97,97,101,101]},{"label":"MLB NEWS@まとめ","data":[101,101,85,72,80,86,84,93,75,101,67,88,99,88,88,101,101,101,101,101,94,73,85,90,70,73,101,83]},{"label":"FF14速報","data":[101,101,91,101,93,89,101,101,101,83,99,100,77,79,92,101,70,77,95,101,101,101,101,101,93,101,90,80]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,97,101,92,101,101,101,101,101,96,83,68,94,96,88,88,101,101,83,101,101,101,101,101,84,94,93]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,34,37,54,69,78,81,85,98,101,101,101,101,101,101,101,101,101,101,101,58,81,101,83,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,86,72,101,63,101,58,101,42,69,101,69,101,101,101,87,98,101,57,101,101,101,101,101,70,71]},{"label":"大艦巨砲主義！","data":[101,101,101,95,101,95,101,101,101,101,101,91,101,101,101,101,101,101,101,100,98,100,101,101,101,96,97,101]},{"label":"つつみのブログ","data":[101,101,101,101,68,101,72,101,101,101,101,65,101,101,101,101,101,101,61,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,89]},{"label":"Jnews1","data":[101,101,101,101,101,81,49,71,101,101,94,101,101,101,101,89,80,101,67,43,30,47,101,101,71,101,101,101]},{"label":"美容外科クリニックで働くパチ美の日常","data":[101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,92,88,101,82,101,101,87,101,80,88]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,45,20,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カラフル牧場","data":[101,101,101,101,101,101,101,54,74,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベビーシッターさいおの日常茶飯","data":[101,101,101,101,101,101,101,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アルセウス速報＠ポケモンまとめ","data":[101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Aula","data":[101,101,101,101,101,101,101,101,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,93,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,97,91,101,101,101,87,91,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,101,101,101,85,101,92,75,101,77,71,101,79,91,101,101,80,72,101,63,66]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,80,101,93,101,101,101,101,98,101,77,90,100,89,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,46,36,66,65,91,68,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,76,101,88,74,82,88,86]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,31,57,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,93,101,99,84,99,101,101]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,98,87,89,80,101,98,101]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44,91,101,91,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,49,55,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,98,98,101,101]},{"label":"スカッと連載ブログ（スカログ）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,95]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,30,22,89,81]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34]},{"label":"香香背男のblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74]},{"label":"はらぺこもんろーのまんが。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]},{"label":"ぬこー様ちゃんの大好き絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]}];
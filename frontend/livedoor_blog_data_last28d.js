var labels = ['2022-11-13','2022-11-14','2022-11-15','2022-11-16','2022-11-17','2022-11-18','2022-11-19','2022-11-20','2022-11-21','2022-11-22','2022-11-23','2022-11-24','2022-11-25','2022-11-26','2022-11-27','2022-11-28','2022-11-29','2022-11-30','2022-12-01','2022-12-02','2022-12-03','2022-12-04','2022-12-05','2022-12-06','2022-12-07','2022-12-08','2022-12-09','2022-12-10',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,3,2,2,4,2,3,2,2,2,2,2]},{"label":"まめきちまめこニートの日常","data":[2,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,2,1,1,1,1,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,3,3,3,4,4,2,3,3,5,5,5,3,4,4,4,4,4,4,4,1,3,4,4,3,4,4,3]},{"label":"はちま起稿","data":[4,4,4,4,3,3,4,5,4,4,4,4,4,3,5,5,5,5,3,3,7,4,5,3,4,3,3,4]},{"label":"暇つぶしニュース","data":[5,5,6,5,6,6,6,7,6,6,7,6,5,7,6,7,6,6,7,7,6,5,8,6,9,7,7,7]},{"label":"不思議.net","data":[6,8,8,8,8,9,8,6,7,8,8,7,9,9,10,10,9,9,8,9,12,10,7,8,7,8,10,8]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[7,6,7,7,7,8,9,9,13,11,9,11,12,10,12,13,12,11,10,8,9,7,9,9,8,9,9,9]},{"label":"ハムスター速報","data":[8,11,5,6,5,7,7,11,9,7,6,9,6,5,11,9,7,7,6,6,5,8,10,7,6,6,5,5]},{"label":"カラパイア","data":[9,9,14,17,15,5,1,4,8,3,3,2,8,12,8,3,1,1,5,18,21,16,17,20,17,12,23,19]},{"label":"【2ch】ニュー速クオリティ","data":[10,10,9,9,9,10,10,8,10,9,11,10,11,11,9,11,10,10,11,10,14,12,11,10,10,10,11,10]},{"label":"わんこーる速報！","data":[11,13,11,13,13,11,11,13,14,14,12,12,14,14,13,12,13,13,12,13,15,13,12,16,16,17,14,12]},{"label":"哲学ニュースnwk","data":[12,12,13,10,11,12,13,14,20,17,16,17,17,16,15,15,17,14,13,16,16,15,14,13,14,18,15,15]},{"label":"あいチャンネル","data":[13,22,22,49,14,17,12,15,11,26,18,37,15,27,40,21,14,31,24,12,36,54,29,15,30,21,12,11]},{"label":"なんJ PRIDE","data":[14,16,15,11,12,15,14,17,16,15,14,16,10,13,14,14,15,15,16,19,11,14,16,18,12,15,19,17]},{"label":"BIPブログ","data":[15,7,12,14,16,16,20,16,15,16,13,14,16,22,19,16,16,16,14,11,13,11,13,12,11,11,13,14]},{"label":"ねいろ速報さん","data":[16,14,10,12,10,13,16,18,18,13,15,13,20,19,16,17,18,18,17,17,29,17,18,17,21,16,17,18]},{"label":"NEWSぽけまとめーる","data":[17,17,17,27,18,21,21,19,17,20,19,22,25,30,30,29,26,22,26,22,19,19,19,22,18,23,21,23]},{"label":"おうまがタイムズ","data":[18,15,16,15,17,18,18,20,19,19,17,15,18,21,18,18,19,17,18,20,26,20,20,21,15,14,16,16]},{"label":"なんJクエスト","data":[19,26,25,31,22,30,27,26,25,30,25,24,23,24,22,23,30,29,25,25,27,23,23,25,23,27,26,26]},{"label":"VIPPERな俺","data":[20,31,35,20,30,24,24,27,24,36,27,27,33,32,29,35,25,20,21,21,24,30,32,34,22,22,20,21]},{"label":"稲妻速報","data":[21,19,20,19,21,22,22,21,21,22,23,21,32,28,27,24,22,24,22,26,34,29,25,26,25,26,22,20]},{"label":"ゴールデンタイムズ","data":[22,21,19,16,20,23,23,29,31,24,26,25,26,15,20,25,20,23,23,23,22,24,24,23,24,25,24,22]},{"label":"ぶる速-VIP","data":[23,18,23,18,28,27,30,25,29,29,29,19,30,23,26,19,28,26,27,24,33,26,26,28,32,24,28,27]},{"label":"日刊やきう速報","data":[24,29,31,29,26,28,25,22,27,28,28,18,27,26,25,28,31,25,28,32,28,32,27,27,27,28,32,25]},{"label":"うしみつ-5chまとめ-","data":[25,27,28,25,29,29,33,30,28,23,21,20,35,29,23,22,23,30,30,29,37,33,31,30,31,32,29,29]},{"label":"おーるじゃんる","data":[26,32,34,42,37,36,40,33,38,34,36,31,41,37,34,34,40,32,33,36,41,36,37,40,38,36,38,32]},{"label":"ヤゴヴのマンガ劇場","data":[27,28,26,28,25,19,15,12,12,10,10,8,7,8,7,6,8,8,9,5,8,6,6,5,5,5,6,6]},{"label":"ラビット速報","data":[28,23,24,32,27,26,26,24,26,32,32,29,29,25,28,27,29,27,29,28,30,25,28,29,29,29,25,28]},{"label":"痛いニュース(ﾉ∀`)","data":[29,30,32,23,23,20,19,23,32,25,24,28,19,17,21,26,24,19,15,15,17,21,22,14,13,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[30,24,99,22,19,14,17,77,22,18,40,42,101,101,38,36,33,101,34,31,40,101,34,33,34,101,31,30]},{"label":"絵日記でございます。","data":[31,48,51,75,101,100,91,101,101,99,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,80,99]},{"label":"カイカイ反応通信","data":[32,33,30,33,32,33,36,31,33,35,30,30,13,20,24,30,36,28,31,27,10,22,30,31,20,20,27,24]},{"label":"サル山の裏マンガ","data":[33,25,21,21,36,31,28,34,51,37,44,86,101,51,99,101,71,101,100,101,101,101,101,101,101,101,101,101]},{"label":"IT速報","data":[34,37,37,35,41,34,38,36,36,39,37,39,34,33,33,32,37,36,37,34,32,34,44,35,33,39,41,35]},{"label":"つんの日常ブログ","data":[35,68,101,59,88,101,78,101,101,101,101,101,101,65,101,101,101,58,96,101,101,96,101,101,78,101,101,101]},{"label":"ニュースBUZZ","data":[36,34,33,34,35,35,32,47,34,48,35,40,49,35,32,33,50,34,32,43,47,39,36,36,35,43,46,65]},{"label":"もちログ","data":[37,36,29,30,31,32,31,32,23,21,20,23,24,18,17,20,21,21,19,14,20,18,21,19,19,19,18,48]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[38,42,43,36,42,37,39,35,35,33,34,38,47,36,35,37,35,33,39,37,35,41,39,37,42,31,37,36]},{"label":"【2ch】コピペ情報局","data":[39,44,36,37,44,38,34,42,42,44,38,36,43,39,36,51,39,35,36,41,43,43,43,46,44,40,39,40]},{"label":"ずっと日曜日のターン","data":[40,47,44,61,101,78,80,56,67,69,56,53,59,58,71,58,54,85,81,61,95,101,52,94,93,87,81,50]},{"label":"人間まおと愉快な仲間たち","data":[41,45,49,52,47,48,52,43,48,42,42,34,42,44,45,42,45,51,46,47,54,45,47,44,37,33,36,34]},{"label":"ネギ速","data":[42,43,38,46,51,42,44,38,41,51,41,32,46,38,41,41,38,42,35,39,49,40,41,54,49,46,44,39]},{"label":"ガールズVIPまとめ","data":[43,63,86,68,46,54,71,53,61,47,59,51,70,61,62,80,52,54,69,63,57,63,78,60,63,57,83,80]},{"label":"はむらの毎日マンガ","data":[44,35,27,26,24,25,29,28,30,27,22,26,36,55,101,101,87,72,57,45,44,42,40,41,41,34,33,33]},{"label":"乃木坂46まとめ 1/46","data":[45,39,48,41,40,43,58,52,37,40,54,45,58,43,43,47,49,47,59,52,67,50,45,42,47,52,51,37]},{"label":"カオスちゃんねる","data":[46,56,50,51,54,57,51,51,59,60,52,56,51,56,56,64,56,50,49,46,45,49,48,50,58,44,45,46]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[47,38,40,54,49,47,53,45,47,46,33,41,56,42,39,50,48,48,43,38,56,48,51,56,54,48,49,60]},{"label":"まとめたニュース","data":[48,41,41,47,33,40,48,41,39,41,50,35,38,53,42,39,34,39,45,40,39,44,38,55,39,38,42,31]},{"label":"カエルDXのオタ活日記","data":[49,40,42,50,43,44,37,39,50,56,55,55,60,50,49,40,53,52,38,30,48,52,53,38,46,56,62,54]},{"label":"あにこ便","data":[50,49,46,56,48,53,59,55,49,50,47,48,62,57,48,49,43,46,48,101,101,101,101,101,101,101,101,101]},{"label":"VIP NEWS","data":[51,54,52,86,101,51,46,75,46,68,74,58,64,54,79,62,69,82,50,62,55,68,76,78,86,45,60,101]},{"label":"チリツモブログ","data":[52,101,69,101,101,73,47,101,101,53,101,101,57,101,101,101,42,40,101,101,101,101,74,101,40,101,40,81]},{"label":"web漫画家やしろあずきの日常","data":[53,52,39,43,56,50,69,64,62,66,45,71,69,91,69,95,60,69,88,101,83,98,92,101,83,64,87,101]},{"label":"ポリー速報","data":[54,46,47,40,45,46,45,49,45,52,51,52,52,46,53,54,58,59,61,55,46,59,59,65,61,62,52,43]},{"label":"オタク.com －オタコム－","data":[55,51,45,48,50,52,57,48,56,31,39,46,50,47,47,53,41,45,44,50,60,51,50,57,50,53,48,52]},{"label":"マンガと私と猫ブログ。","data":[56,20,18,24,39,39,60,50,57,55,63,47,75,59,76,61,75,53,41,42,96,62,87,53,43,80,47,38]},{"label":"PS5速報！","data":[57,76,55,72,69,66,70,89,80,73,77,65,81,64,67,70,65,62,60,58,65,61,81,62,60,54,66,47]},{"label":"芸能人の気になる噂","data":[58,59,56,62,60,58,64,57,63,67,67,57,65,62,58,59,61,61,65,57,72,64,57,66,59,58,65,68]},{"label":"気になる芸能まとめ","data":[59,53,54,60,68,72,72,58,60,61,72,54,72,66,51,57,66,73,70,76,85,70,66,83,81,85,94,86]},{"label":"De速","data":[60,67,63,53,52,59,42,37,52,45,46,61,68,74,55,55,67,71,54,64,82,88,91,59,74,76,53,45]},{"label":"軍事・ミリタリー速報☆彡","data":[61,58,66,66,65,64,63,59,55,58,65,68,83,69,65,82,73,63,66,66,81,77,83,70,79,71,85,70]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[62,71,70,58,63,62,68,61,65,57,69,63,77,70,70,72,64,44,47,49,51,55,70,77,57,61,43,51]},{"label":"えみコミック！","data":[63,50,53,45,53,41,55,40,54,43,48,44,101,48,95,48,86,43,91,44,92,47,72,43,82,42,77,41]},{"label":"サカラボ | サッカーまとめ速報","data":[64,72,57,65,67,63,49,67,71,49,49,49,21,31,31,31,32,38,40,35,18,27,33,32,28,30,34,49]},{"label":"海外の万国反応記＠海外の反応","data":[65,69,61,57,70,60,62,60,53,65,62,50,28,41,46,60,70,65,51,59,25,37,42,45,48,50,55,67]},{"label":"鷹速@ホークスまとめブログ","data":[66,77,58,55,58,56,56,71,78,64,61,62,63,75,63,78,62,55,58,74,64,69,68,79,66,67,67,55]},{"label":"MLB NEWS@まとめ","data":[67,70,76,73,79,71,82,83,82,75,93,76,92,86,92,79,91,93,75,92,101,97,101,101,97,83,76,76]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[68,87,80,76,61,61,81,82,89,76,79,82,85,71,77,85,78,79,68,67,84,82,93,48,68,73,79,82]},{"label":"ふくよかまるみのピリカラ人生","data":[69,85,100,100,99,101,101,101,95,96,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,89,93,97]},{"label":"ライフハックちゃんねる弐式","data":[70,57,84,64,57,67,61,65,70,70,60,74,82,79,60,63,55,57,72,60,71,73,65,84,85,59,54,56]},{"label":"ふぇー速","data":[71,60,68,74,72,74,89,81,77,92,66,66,67,84,54,45,68,80,89,54,76,58,61,87,75,90,72,78]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[72,80,87,101,101,101,101,79,64,79,75,73,90,78,91,94,89,87,55,48,63,57,55,69,80,86,95,96]},{"label":"2chコピペ保存道場","data":[73,91,91,87,75,84,84,62,69,84,82,85,78,77,83,90,80,74,63,75,88,67,75,75,76,68,69,73]},{"label":"はーとログ","data":[74,81,81,79,76,85,76,70,75,85,87,92,100,92,64,73,77,89,77,81,90,101,79,81,84,77,68,89]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[75,90,92,91,91,98,86,87,94,101,96,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,71]},{"label":"なんJ（まとめては）いかんのか？","data":[76,101,101,44,62,76,66,66,88,101,101,75,101,101,81,74,92,78,79,101,101,101,101,101,101,84,91,90]},{"label":"オタクニュース","data":[77,101,65,101,90,101,101,101,91,101,101,90,98,88,101,101,101,86,101,101,78,79,101,85,89,101,101,101]},{"label":"投資ちゃんねる","data":[78,74,77,90,82,88,90,101,99,95,97,97,101,101,101,98,99,101,97,90,101,94,86,92,92,94,75,92]},{"label":"Jnews1","data":[79,64,79,101,101,101,43,10,5,12,31,33,97,101,101,101,101,101,101,101,80,86,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[80,79,60,81,78,77,54,78,81,87,83,98,80,99,86,88,101,75,71,77,73,92,94,91,101,101,101,77]},{"label":"まとめロッテ！","data":[81,86,72,67,85,90,97,98,97,90,89,94,73,101,100,99,96,101,101,101,86,101,101,101,88,99,84,58]},{"label":"大艦巨砲主義！","data":[82,97,88,98,86,92,94,99,101,100,88,101,101,101,94,100,101,83,92,85,101,101,101,96,100,92,101,100]},{"label":"ダイエット速報＠2ちゃんねる","data":[83,66,85,85,74,101,101,90,76,71,85,60,101,101,74,101,101,92,101,101,91,90,101,101,101,101,88,101]},{"label":"まとめブレイド","data":[84,55,64,94,101,75,83,54,68,82,101,95,84,80,101,101,101,84,101,101,101,87,101,89,73,75,70,91]},{"label":"パート主婦のリアルな日常","data":[85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぱんをたずねて2000里ちょい","data":[86,62,94,63,92,83,101,101,86,101,58,83,101,101,78,71,101,101,101,101,101,101,101,101,101,74,101,72]},{"label":"ついんてーる速報","data":[87,82,75,82,71,80,87,63,72,88,86,70,66,45,44,76,88,60,64,69,79,85,64,58,56,79,58,84]},{"label":"流速VIP","data":[88,92,78,70,64,70,88,73,73,77,70,69,79,60,66,84,63,67,73,70,75,66,60,82,55,55,73,79]},{"label":"しばたまブログ","data":[89,83,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,35,35,72,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[90,95,101,93,83,69,67,68,43,38,43,43,53,63,50,43,51,49,56,56,70,60,62,61,69,63,57,53]},{"label":"阪神タイガースちゃんねる","data":[91,75,96,97,96,101,101,97,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うちの夫が糖尿病になっちゃった！","data":[92,94,90,89,77,81,77,72,84,74,81,80,76,67,57,56,57,64,67,72,77,71,67,67,65,65,63,66]},{"label":"ろぼ速VIP","data":[93,100,101,96,97,89,93,96,96,97,92,89,101,96,101,97,94,98,101,101,101,101,99,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[94,101,67,78,101,82,73,101,74,78,101,84,71,101,101,101,101,77,53,101,101,101,101,68,72,101,92,64]},{"label":"ゆっぺのゆる漫画ブログ","data":[95,65,101,39,34,45,41,46,40,54,53,59,37,40,89,38,27,76,52,82,50,31,80,49,101,37,30,101]},{"label":"馬鳥速報","data":[96,101,89,69,81,101,74,93,101,91,76,79,87,73,98,68,79,66,74,96,94,93,71,76,77,91,82,88]},{"label":"鈴木さん速報","data":[97,99,101,101,100,97,92,85,90,89,84,88,101,89,85,93,84,94,85,89,101,101,101,101,99,100,90,93]},{"label":"今日速2ch","data":[98,93,101,101,101,101,101,69,66,80,101,101,94,101,52,65,101,101,76,68,74,99,101,73,62,101,101,87]},{"label":"なんJ　高校野球まとめ速報","data":[99,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,97,84,69,93,90,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[100,101,98,71,55,49,50,76,101,59,64,77,101,94,68,89,101,96,87,91,87,80,84,101,101,101,101,85]},{"label":"エクサワロス","data":[101,61,71,84,84,99,99,94,101,81,101,101,95,101,84,87,95,101,78,87,100,81,85,98,87,88,99,95]},{"label":"お料理速報","data":[101,73,73,83,98,86,101,84,83,83,94,81,88,87,101,83,85,101,86,65,98,78,58,80,95,96,101,98]},{"label":"ツイッター速報","data":[101,78,101,95,101,101,101,80,44,62,57,100,31,49,101,81,47,37,101,78,3,28,1,11,45,51,59,44]},{"label":"デジタルニューススレッド","data":[101,88,101,101,101,95,101,88,85,98,95,101,101,100,101,92,83,95,90,88,93,89,96,90,98,93,101,101]},{"label":"働く大人の非常識","data":[101,89,59,77,89,101,101,101,101,63,101,78,101,93,73,66,101,101,101,79,101,101,97,64,101,101,101,69]},{"label":"背中をポンポン","data":[101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,98,97,101,101,101,101,101,98,101,91,101,101,101,101,101,101,101,101,94,101,101,98,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,62,101,66,101,65,101,101,101,101,72,101,101,101,101,101,101,62,101,61,101,101,101,101,101,101,62]},{"label":"ミラクルファミリー","data":[101,101,82,38,38,68,101,101,101,101,98,67,101,101,82,101,59,88,101,100,68,76,73,39,94,101,96,63]},{"label":"最強ジャンプ放送局","data":[101,101,83,101,101,94,98,95,100,86,101,101,101,101,101,101,82,99,99,97,101,101,101,88,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,93,101,101,101,101,101,101,101,100,101,101,68,88,101,101,100,101,101,101,101,101,101,91,82,101,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,80,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,88,101,101,75,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,92,101,101,96,92,101,94,90,91,89,85,75,77,74,81,80,71,69,65,63,63,70,66,61,59]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,99,101,101,101,101,101,101,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,59,65,95,101,101,101,101,101,101,101,90,101,101,101,101,101,101,95,101,101,101,101,101,101]},{"label":"スカッと連載ブログ（スカログ）","data":[101,101,101,101,73,96,101,74,101,101,73,101,101,72,97,101,76,101,101,80,101,101,88,97,101,72,100,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,80,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,69,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,101,101,101,93,101,100,91,101,101,80,64,74,95,80,91,90,97,84,95,101,91,101,101,101,81,89,94]},{"label":"素敵な鬼女様","data":[101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,55,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,78,75]},{"label":"アルセウス速報","data":[101,101,101,101,101,87,35,44,58,72,78,87,93,90,87,86,81,91,83,83,89,74,77,99,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,101,101,91,101,101,101,101,71,96,101,101,101,101,100,101,101,101,101,101,101,95,101,98,97,101]},{"label":"となりのモンスター屋さん【となもん】(モンハン/ポケモン/特撮/ゲーム関連ブログ)","data":[101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,85,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101]},{"label":"ベビーシッターさいおの日常茶飯","data":[101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,93,101,101,101,82,101,101,101,101,101,98,101,101,101,100,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,99,93,39,52,59,52,46,68,82,84,38,46,54,52,36,47,50,83]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,99,40,81,101,67,72,101,101,101,52,56,56,74,53,70,71,74]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,22,6,3,8,11,12,20,33,23,9,15,24,26,35,35,42]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,101,101,101,44,101,101,101,101,101,101,101,42,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,45,34,37,46,44,41,42,53,31,38,46,51,51,60,64,57]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,48,76,61,101,93,70,94,101,101,101,89,71,71,41,74,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,54,83,101,101,101,101,101,101,58,72,100,101,67,101,101,101]},{"label":"Samurai GOAL","data":[101,101,101,101,101,101,101,101,101,101,101,101,55,97,96,75,97,101,101,101,53,83,101,101,64,101,101,101]},{"label":"フットカルチョ","data":[101,101,101,101,101,101,101,101,101,101,101,101,61,101,101,101,101,101,101,101,62,101,101,101,101,101,101,101]},{"label":"フットボール速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,101,101,101,101,101,101,91,98,101,69,101,101,101,99,59,75,101,86,101,101,98,101]},{"label":"翻訳ちゃんねる | 海外の反応まとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,44,101,101,101,101,101,101,95,101,101,101,101,101]},{"label":"Aやんのええやん！ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,56,101,101,101,101,101,101,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,95,86,101]},{"label":"あにこ便","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51,66,53,49,47,52,49,56,61]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101]},{"label":"あね子の日常withいっちょまえ姉妹","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101]},{"label":"痛いニュース(ﾉ∀`)","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,8,13]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101]}];
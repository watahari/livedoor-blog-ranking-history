var labels = ['2022-10-14','2022-10-15','2022-10-16','2022-10-17','2022-10-18','2022-10-19','2022-10-20','2022-10-21','2022-10-22','2022-10-23','2022-10-24','2022-10-25','2022-10-26','2022-10-27','2022-10-28','2022-10-29','2022-10-30','2022-10-31','2022-11-01','2022-11-02','2022-11-03','2022-11-04','2022-11-05','2022-11-06','2022-11-07','2022-11-08','2022-11-09','2022-11-10',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,3,4,4,4,1,1,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,2,3,2,1,2,2,2,2,3,2,2,3,2,1,1,1,1,2,2,2,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,4,3,3,3,3,4,3,2,3,3,4,3,3,4,2,3,3,5,5,2,3,3,3,3,5,3,4]},{"label":"はちま起稿","data":[4,3,4,4,4,4,3,4,4,4,5,3,5,4,3,4,4,4,4,3,4,2,2,2,4,3,4,3]},{"label":"ハムスター速報","data":[5,5,9,10,6,5,5,5,5,7,8,7,8,7,7,6,9,9,10,9,8,10,8,12,10,4,6,5]},{"label":"暇つぶしニュース","data":[6,6,5,5,5,8,7,8,7,6,6,6,6,8,8,7,5,5,8,8,5,5,7,5,5,8,10,6]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[7,7,10,9,7,9,9,7,8,8,9,9,9,10,9,8,7,7,9,6,6,7,6,7,8,9,9,9]},{"label":"不思議.net","data":[8,9,6,6,8,7,6,9,9,9,7,8,7,9,10,10,8,8,11,10,9,8,10,8,7,6,5,8]},{"label":"【2ch】ニュー速クオリティ","data":[9,10,7,8,10,10,10,11,11,10,10,10,10,11,11,12,11,12,12,11,11,9,9,10,11,10,11,10]},{"label":"ヤゴヴのマンガ劇場","data":[10,8,8,7,9,6,8,6,6,5,4,5,4,5,5,5,10,10,7,7,7,6,5,6,6,7,8,15]},{"label":"わんこーる速報！","data":[11,13,13,14,15,18,16,18,17,12,12,14,11,13,13,13,13,11,13,13,13,13,12,13,13,13,12,13]},{"label":"なんJ PRIDE","data":[12,12,11,11,17,16,14,12,12,11,11,11,12,14,12,11,14,13,14,12,15,14,16,15,16,16,14,11]},{"label":"BIPブログ","data":[13,18,17,12,16,15,18,21,16,13,13,12,13,18,16,14,15,16,15,14,14,16,15,9,9,12,13,17]},{"label":"ねいろ速報さん","data":[14,15,15,15,13,17,15,17,18,15,16,13,16,16,18,19,19,19,17,17,16,15,14,16,17,15,15,12]},{"label":"はむらの毎日マンガ","data":[15,42,101,101,101,98,72,53,56,61,53,56,40,42,39,40,35,35,35,32,33,33,32,37,33,32,32,32]},{"label":"哲学ニュースnwk","data":[16,16,14,13,12,11,12,16,21,18,17,16,14,15,14,15,16,15,16,15,12,11,11,14,15,14,16,14]},{"label":"NEWSぽけまとめーる","data":[17,17,16,19,20,24,29,15,22,21,23,22,21,27,20,24,22,24,25,16,17,21,25,20,23,18,22,18]},{"label":"おうまがタイムズ","data":[18,24,24,17,18,19,19,19,20,19,14,15,20,19,17,18,18,23,21,19,19,19,19,18,18,17,17,16]},{"label":"カラパイア","data":[19,27,26,16,11,12,11,10,10,14,18,20,17,6,6,9,12,6,6,4,10,12,13,11,14,11,7,7]},{"label":"人間まおと愉快な仲間たち","data":[20,21,20,20,19,13,13,20,15,17,15,25,28,33,45,58,62,59,55,54,62,72,58,50,51,54,54,53]},{"label":"日刊やきう速報","data":[21,14,19,25,27,25,21,13,14,16,19,23,18,12,19,17,20,22,20,23,21,20,26,22,24,19,20,20]},{"label":"ゆっぺのゆる漫画ブログ","data":[22,35,42,101,38,101,101,88,101,50,46,46,36,38,52,38,70,38,59,101,37,37,57,81,101,39,36,52]},{"label":"稲妻速報","data":[23,20,25,22,22,23,22,22,25,23,22,19,19,20,22,22,25,26,28,25,22,22,21,24,27,26,26,26]},{"label":"VIPPERな俺","data":[24,22,31,24,28,26,23,25,27,35,36,32,27,23,25,23,28,21,24,20,24,30,23,28,32,27,23,25]},{"label":"ゴールデンタイムズ","data":[25,23,21,21,21,20,26,24,19,22,21,24,22,21,21,25,23,28,22,22,23,29,24,19,19,24,29,23]},{"label":"なんJクエスト","data":[26,25,23,23,23,21,20,23,23,20,20,18,23,24,23,21,21,18,23,27,20,17,18,21,20,23,25,22]},{"label":"うしみつ-5chまとめ-","data":[27,30,30,27,24,29,28,28,32,26,30,30,29,22,26,31,29,29,30,30,28,28,30,32,29,30,28,27]},{"label":"ラビット速報","data":[28,19,27,28,30,30,24,26,28,28,26,29,31,28,27,27,27,30,29,29,30,26,27,30,28,29,27,28]},{"label":"まとめたニュース","data":[29,46,39,35,42,45,38,35,24,36,39,38,54,36,29,47,39,36,41,44,44,46,34,39,52,45,37,36]},{"label":"ぶる速-VIP","data":[30,26,29,26,26,28,27,29,30,25,25,26,26,29,32,30,31,31,31,35,29,25,28,31,26,22,19,21]},{"label":"カイカイ反応通信","data":[31,31,36,37,31,33,34,32,34,34,35,31,33,31,33,32,33,25,19,18,18,27,29,26,31,28,30,29]},{"label":"おーるじゃんる","data":[32,32,28,30,34,31,35,31,33,32,33,34,30,30,34,35,37,33,27,24,32,32,36,33,35,36,38,38]},{"label":"ネギ速","data":[33,29,41,40,43,39,36,41,38,39,43,53,53,65,48,41,43,41,43,40,41,48,47,45,41,46,49,43]},{"label":"カエルDXのオタ活日記","data":[34,36,33,42,33,46,43,45,44,43,48,50,45,35,31,39,41,45,47,33,31,38,40,23,40,51,41,48]},{"label":"古オタクの日常","data":[35,39,43,46,44,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュースBUZZ","data":[36,34,35,36,37,37,30,30,29,30,31,35,32,32,38,29,36,53,39,53,34,31,45,41,39,35,42,39]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[37,40,34,32,35,35,25,39,41,29,32,33,38,34,37,36,38,39,32,34,40,36,39,36,37,33,35,37]},{"label":"あいチャンネル","data":[38,11,12,31,14,14,17,14,13,27,34,27,15,17,15,28,24,17,33,28,36,18,17,35,21,21,24,34]},{"label":"スズぺぺの人生何とかなってます!!","data":[39,45,40,43,45,44,42,44,40,44,41,37,34,40,35,43,40,37,44,42,46,64,42,51,46,42,44,64]},{"label":"【2ch】コピペ情報局","data":[40,47,47,33,36,42,46,34,43,40,37,42,37,41,40,46,42,40,40,38,38,40,35,42,42,38,34,41]},{"label":"IT速報","data":[41,44,32,39,39,38,41,36,37,41,49,40,39,37,36,42,34,34,37,36,35,34,43,38,36,43,33,33]},{"label":"軍事・ミリタリー速報☆彡","data":[42,54,57,55,55,57,57,71,69,72,54,62,56,69,66,68,65,66,68,63,54,68,75,75,71,67,66,79]},{"label":"馬鳥速報","data":[43,64,75,81,57,32,32,43,59,56,52,60,50,71,73,81,82,81,77,55,73,87,67,65,82,90,78,74]},{"label":"De速","data":[44,51,45,41,46,54,61,40,35,37,66,48,44,43,63,45,48,79,58,58,58,73,72,66,56,52,47,35]},{"label":"カオスちゃんねる","data":[45,50,44,48,54,52,59,55,57,51,67,54,58,46,54,55,61,54,51,46,39,52,49,54,47,50,50,56]},{"label":"サル山の裏マンガ","data":[46,38,37,45,32,27,31,33,31,31,29,21,25,26,30,34,30,32,38,31,26,42,31,29,30,25,21,24]},{"label":"オタク.com －オタコム－","data":[47,49,52,50,47,49,48,51,49,53,45,49,42,47,43,50,53,48,50,47,53,51,56,56,50,49,40,40]},{"label":"ダンナ様は安月給","data":[48,101,101,101,60,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガールズVIPまとめ","data":[49,62,71,74,48,43,50,59,48,59,63,41,51,56,44,62,45,69,54,59,61,44,66,47,49,41,48,71]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[50,61,49,34,40,34,39,37,42,45,47,47,52,52,42,48,50,42,48,45,43,50,53,49,58,60,52,54]},{"label":"あにこ便","data":[51,59,46,44,41,47,47,54,55,47,44,44,46,49,53,53,47,50,49,48,51,54,54,53,48,44,46,49]},{"label":"ポリー速報","data":[52,56,54,51,53,40,45,38,36,46,40,39,47,48,41,37,46,47,46,43,45,43,46,40,43,48,43,42]},{"label":"ライフハックちゃんねる弐式","data":[53,73,65,86,75,75,69,61,82,74,80,71,64,72,74,85,71,65,56,67,76,55,63,60,65,58,58,78]},{"label":"スカッと連載ブログ（スカログ）","data":[54,65,88,101,97,101,101,101,101,101,101,101,101,101,101,101,99,101,101,100,97,98,76,85,101,78,97,101]},{"label":"芸能人の気になる噂","data":[55,66,61,52,49,68,63,60,66,67,59,65,59,68,60,74,58,44,71,61,56,56,60,61,59,59,60,61]},{"label":"MLB NEWS@まとめ","data":[56,69,76,63,77,71,75,78,71,73,58,58,76,53,50,51,54,71,78,65,68,62,78,64,68,75,95,85]},{"label":"かねの光は七光り","data":[57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[58,77,67,57,64,56,51,58,72,71,55,59,43,57,49,65,44,49,34,49,48,41,37,27,38,40,45,44]},{"label":"ふぇー速","data":[59,48,55,71,68,73,78,67,68,97,78,57,61,73,85,88,89,87,86,60,67,80,52,69,73,74,62,57]},{"label":"なんJ（まとめては）いかんのか？","data":[60,57,69,80,73,83,65,46,53,55,57,52,48,61,92,54,60,46,69,101,64,53,84,100,86,55,75,66]},{"label":"えみコミック！","data":[61,37,53,38,52,36,52,47,54,49,68,45,57,55,46,49,52,55,42,50,77,60,69,55,53,47,74,45]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[62,83,81,87,85,95,56,75,101,62,73,67,71,99,64,70,72,76,93,64,88,101,73,73,63,73,73,70]},{"label":"今日もブブはからまわり。","data":[63,79,87,101,89,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[64,58,58,66,66,55,66,72,78,60,69,101,68,59,57,64,55,57,65,57,42,59,62,71,75,88,68,62]},{"label":"痛いニュース(ﾉ∀`)","data":[65,74,73,77,76,76,77,83,84,83,90,77,81,79,81,94,86,93,53,89,96,58,44,43,57,53,39,30]},{"label":"web漫画家やしろあずきの日常","data":[66,70,56,47,61,80,74,81,58,38,91,89,101,101,101,71,68,86,36,66,60,77,77,84,89,101,57,50]},{"label":"Jnews1","data":[67,52,48,53,87,93,81,101,101,101,51,68,101,101,75,16,6,14,18,37,47,35,20,17,34,79,81,101]},{"label":"気になる芸能まとめ","data":[68,75,64,61,74,70,76,80,73,66,60,69,72,54,59,59,51,52,74,71,79,66,80,67,62,71,67,65]},{"label":"今日速2ch","data":[69,89,86,65,79,92,101,64,46,70,65,101,90,62,70,61,101,72,60,72,78,57,74,59,74,99,77,69]},{"label":"海外の万国反応記＠海外の反応","data":[70,72,79,67,62,67,60,70,74,78,71,55,60,60,55,57,63,60,57,52,69,61,65,57,72,57,55,59]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[71,53,50,54,51,53,53,42,39,42,38,36,35,44,51,52,49,43,45,41,49,69,55,44,61,56,53,63]},{"label":"ついんてーる速報","data":[72,78,74,69,69,78,73,86,64,87,75,64,67,66,61,80,76,77,67,75,82,65,70,86,84,85,84,77]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[73,43,66,82,80,72,62,68,80,85,95,87,82,78,77,86,79,88,85,70,81,89,51,72,79,82,80,76]},{"label":"エクサワロス","data":[74,90,80,75,67,77,64,62,83,75,79,61,75,74,69,77,66,70,73,79,66,81,68,74,76,77,92,87]},{"label":"お料理速報","data":[75,68,101,72,63,89,93,101,96,100,92,88,101,101,90,83,87,84,83,96,87,90,82,101,85,80,88,96]},{"label":"PS5速報！","data":[76,97,97,96,78,59,58,65,61,54,88,51,55,63,58,56,56,64,62,62,65,91,83,89,101,69,59,58]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[77,71,60,62,56,58,68,56,63,58,64,79,65,100,101,78,67,75,72,68,95,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[78,67,63,59,72,66,70,50,51,57,56,73,62,58,62,69,57,62,64,69,71,71,81,68,66,63,65,60]},{"label":"やみ速@なんJ西武まとめ","data":[79,93,84,101,58,87,67,87,67,79,74,78,88,101,91,101,97,94,88,81,74,49,86,78,77,61,86,83]},{"label":"サカラボ | サッカーまとめ速報","data":[80,85,72,68,70,84,79,82,89,92,76,72,85,86,67,60,69,67,80,56,59,75,64,58,60,70,71,67]},{"label":"つんの日常ブログ","data":[81,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,76,101]},{"label":"大艦巨砲主義！","data":[82,84,85,90,82,82,88,94,90,82,72,75,84,85,79,93,78,96,90,74,80,93,95,95,96,93,94,86]},{"label":"2chコピペ保存道場","data":[83,98,94,78,90,96,80,90,88,88,101,80,87,81,83,91,75,74,76,73,90,78,85,87,78,89,72,80]},{"label":"FF14速報","data":[84,87,90,99,83,50,40,74,75,95,101,66,70,83,87,82,90,101,81,51,83,76,88,92,101,98,83,101]},{"label":"ぱんをたずねて2000里ちょい","data":[85,101,51,49,99,48,37,52,50,64,42,83,101,51,68,101,59,85,66,80,50,67,38,46,101,37,63,46]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[86,99,77,88,96,90,86,69,77,63,89,91,74,45,76,97,94,101,87,83,63,79,89,99,95,101,91,90]},{"label":"阪神タイガースちゃんねる","data":[87,80,59,83,94,88,91,73,70,80,97,92,80,88,65,72,80,91,92,77,91,96,94,94,81,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[88,100,100,94,92,81,101,101,101,101,101,101,94,90,99,101,101,101,98,101,101,97,98,101,98,92,101,101]},{"label":"VIP NEWS","data":[89,63,68,84,84,64,82,79,60,91,77,82,95,50,101,67,101,90,79,91,72,70,59,48,45,65,101,55]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[90,88,101,73,101,63,101,98,79,101,94,101,78,101,80,75,101,61,101,101,101,101,101,101,101,101,101,101]},{"label":"もちログ","data":[91,91,91,56,50,51,44,48,47,52,61,101,101,101,101,100,96,101,89,92,57,39,50,62,67,72,64,47]},{"label":"絵日記でございます。","data":[92,33,62,97,101,62,89,101,101,101,101,101,101,91,101,101,101,101,101,78,55,45,41,97,101,101,101,101]},{"label":"はーとログ","data":[93,101,101,100,98,101,95,101,97,98,101,96,101,101,98,79,74,73,82,76,93,74,71,80,70,83,70,75]},{"label":"投資ちゃんねる","data":[94,101,96,98,101,86,94,92,101,77,86,94,101,101,88,101,98,82,101,101,99,101,92,101,101,95,101,95]},{"label":"まとめブレイド","data":[95,82,101,101,101,79,55,91,101,93,101,84,89,82,94,76,64,89,63,86,84,63,101,82,64,66,56,81]},{"label":"鈴木さん速報","data":[96,101,101,101,101,101,97,101,94,96,96,93,93,95,96,101,91,100,101,101,101,92,99,93,101,100,89,84]},{"label":"ふくよかまるみのピリカラ人生","data":[97,101,101,101,101,101,101,101,101,101,101,101,96,87,82,92,95,101,100,98,101,101,101,101,101,91,93,89]},{"label":"デジタルニューススレッド","data":[98,101,93,95,101,101,101,101,101,101,101,99,86,101,101,101,101,97,101,101,101,101,96,98,91,101,100,101]},{"label":"流速VIP","data":[99,101,101,101,93,101,101,84,100,101,101,101,101,101,97,101,83,99,101,101,101,101,101,101,83,101,101,101]},{"label":"ガレ速@滝沢ガレソまとめ速報","data":[100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,28,22,58,25,22,49,95,101,33,28,43,73,64,28,26,26,27,26,26,27,24,22,34,25,20,18,19]},{"label":"笑う母には福来る　byはなゆい","data":[101,41,101,101,101,101,101,77,93,101,101,101,101,101,71,101,101,101,101,101,101,101,101,101,101,101,87,101]},{"label":"チリツモブログ","data":[101,55,101,101,86,61,101,49,101,48,101,101,49,101,47,101,101,101,101,101,101,101,48,101,101,101,69,51]},{"label":"つつみのブログ","data":[101,60,101,101,101,101,54,101,65,101,101,101,101,70,101,63,101,101,101,101,75,101,101,101,101,101,101,68]},{"label":"オタクニュース","data":[101,76,83,60,101,101,85,101,101,99,93,81,101,101,101,101,101,56,84,87,89,101,101,70,90,87,61,73]},{"label":"ずっと日曜日のターン","data":[101,81,101,64,81,85,101,76,81,68,81,101,77,101,101,101,92,80,101,101,101,47,91,77,69,101,98,101]},{"label":"まとめロッテ！","data":[101,86,78,70,71,94,83,57,52,76,82,74,66,67,78,95,101,83,91,84,92,94,79,91,87,76,85,82]},{"label":"ろくのコミックブログ","data":[101,94,101,93,101,99,101,100,101,101,101,100,101,92,101,98,101,101,101,94,101,82,101,79,101,68,101,91]},{"label":"うみの漫画ブログ","data":[101,95,92,91,65,60,84,66,76,69,85,76,63,75,56,66,84,92,101,101,101,101,101,101,101,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,96,95,101,101,101,101,101,101,94,101,101,97,84,86,89,81,101,95,82,85,83,90,88,99,101,101,101]},{"label":"しばたまブログ","data":[101,101,18,18,59,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,25,12,31,51,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,38,29,29,101,33,27,26,24,27,28,24,25,24,20,17,51,101,101,101,101,101,52,44,34,31,31]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,70,76,101,101,101,101,101,65,62,98,83,39,93,33,77,101,101,90,86,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,82,79,101,101,96,101,101,101,100,101,79,101,101,101,101,98,101,101,101,100,101,101,101,101,96,97]},{"label":"ろぼ速VIP","data":[101,101,89,92,100,100,100,96,101,101,101,101,92,89,95,96,73,101,101,97,98,85,101,83,80,97,101,93]},{"label":"最強ジャンプ放送局","data":[101,101,98,101,91,97,101,97,99,84,99,70,99,98,89,101,88,101,94,101,101,99,101,90,94,81,101,101]},{"label":"働く大人の非常識","data":[101,101,99,85,88,101,71,101,87,86,101,101,101,97,101,90,101,78,101,101,70,101,93,101,92,101,90,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,89,101,101,92,89,98,90,101,97,101,77,84,84,85,101,101,101,101,101,101,101,88,86,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,95,91,101,101,101,101,98,86,101,101,101,101,100,101,97,101,101,101,101,101,101,101,101,101]},{"label":"ヤチナツマンガ","data":[101,101,101,101,101,41,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,101,65,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,84,97,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,69,90,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,88]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,63,86,101,84,101,91,101,101,101,101,101,101,101,101,101,101,63,55,101,82,99]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,85,91,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,101,101,101,101,101,101,93,62,101,101,85,69,101,101,44,32,20,1,21,52,86,87,76,22,64,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,45,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"らばQ","data":[101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,95,101,101,101,101,93,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"日々野 希色の日常まんが","data":[101,101,101,101,101,101,101,101,101,81,50,63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,24,17,41,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,70,101,101,101,101,101,101,63,99,101,101,101,101,101,101,101,101,101]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,83,90,100,96,101,101,93,68,75,85,94,88,101,101,97,101,101,101]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,99,101,101,101,95,101,101,101,101,101,101,101,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,76,101,101,101,101,101,101,101,95,101,101,101,101,101,94]},{"label":"ババア、育児をする","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あにこぱす","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,73,101,58,70,39,25,23,61,101,54,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,52,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,101,100,101,33,101,101,101,101,101]},{"label":"らっさむ漫画blog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,94,99,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,96,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,98]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72]},{"label":"うちの夫が糖尿病になっちゃった！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]}];
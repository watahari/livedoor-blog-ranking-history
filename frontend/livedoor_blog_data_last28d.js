var labels = ['2022-08-03','2022-08-04','2022-08-05','2022-08-06','2022-08-07','2022-08-08','2022-08-09','2022-08-10','2022-08-11','2022-08-12','2022-08-13','2022-08-14','2022-08-15','2022-08-16','2022-08-17','2022-08-18','2022-08-19','2022-08-20','2022-08-21','2022-08-22','2022-08-23','2022-08-24','2022-08-25','2022-08-26','2022-08-27','2022-08-28','2022-08-29','2022-08-30',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,3,16,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]},{"label":"不思議.net","data":[2,2,2,2,3,2,3,2,1,1,2,2,3,3,3,4,6,6,4,3,4,3,6,6,7,5,5,5]},{"label":"オレ的ゲーム速報＠刃","data":[3,3,4,4,2,3,2,3,2,2,1,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,1]},{"label":"痛いニュース(ﾉ∀`)","data":[4,4,3,3,5,4,6,13,17,23,23,25,27,25,24,27,31,29,24,22,22,24,27,28,27,30,30,28]},{"label":"ヤゴヴのマンガ劇場","data":[5,6,6,6,6,5,5,5,5,4,4,5,9,37,38,28,22,18,19,16,12,10,10,11,12,10,10,12]},{"label":"はちま起稿","data":[6,5,5,5,4,6,4,4,4,3,5,4,4,4,4,3,4,4,3,4,3,4,4,3,4,3,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,7,8,8,8,9,8,8,8,6,6,6,6,5,5,5,3,5,5,5,5,6,5,5,6,4,4,4]},{"label":"暇つぶしニュース","data":[8,8,10,10,10,8,9,7,9,7,9,7,5,6,7,7,8,8,9,6,8,8,8,7,5,6,6,7]},{"label":"ハムスター速報","data":[9,9,9,9,9,10,7,6,7,8,8,11,8,7,8,6,5,2,6,7,6,5,3,4,3,7,8,6]},{"label":"【2ch】ニュー速クオリティ","data":[10,12,12,13,11,11,10,12,10,9,10,10,11,8,9,8,7,7,8,9,7,7,7,9,8,8,7,8]},{"label":"カラパイア","data":[11,14,14,12,14,13,14,15,15,12,12,8,7,9,11,11,15,12,7,8,13,12,12,10,11,20,16,9]},{"label":"わんこーる速報！","data":[12,11,11,11,12,14,11,11,12,10,13,12,13,12,12,12,10,10,15,15,10,13,11,13,15,11,11,10]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[13,13,13,14,13,12,13,10,11,11,11,13,12,11,10,9,9,9,10,11,9,9,9,8,9,9,9,11]},{"label":"人間まおと愉快な仲間たち","data":[14,10,7,7,7,7,12,9,6,5,7,9,10,10,6,10,11,11,11,10,15,16,16,19,20,19,23,29]},{"label":"おうまがタイムズ","data":[15,18,16,17,21,18,17,20,14,13,14,20,17,14,14,15,20,17,18,19,19,15,17,14,13,14,12,17]},{"label":"NEWSぽけまとめーる","data":[16,16,17,16,18,19,20,19,22,20,18,15,22,16,17,17,17,23,13,12,20,19,19,16,21,22,14,13]},{"label":"なんJ PRIDE","data":[17,15,18,20,16,17,21,22,16,14,16,18,18,17,16,16,14,14,12,14,16,14,13,15,16,15,13,15]},{"label":"哲学ニュースnwk","data":[18,17,19,18,19,20,18,18,18,18,15,17,14,15,13,13,12,15,22,17,18,18,15,12,10,13,15,16]},{"label":"あいチャンネル","data":[19,19,21,21,32,24,22,43,23,19,32,22,20,18,36,26,16,16,16,18,17,21,47,21,14,12,29,21]},{"label":"BIPブログ","data":[20,20,15,15,15,15,16,14,13,15,17,14,16,13,15,14,13,13,14,13,11,11,14,17,18,17,20,19]},{"label":"日刊やきう速報","data":[21,23,28,27,22,28,30,30,27,24,25,29,25,30,25,25,23,24,23,26,26,27,23,27,28,25,24,23]},{"label":"ねいろ速報さん","data":[22,22,20,22,17,16,15,17,19,21,20,19,19,21,18,18,18,20,21,20,14,17,18,20,22,21,19,14]},{"label":"稲妻速報","data":[23,24,22,19,25,22,23,25,21,27,21,26,29,26,22,22,24,22,27,30,29,28,25,26,26,28,28,24]},{"label":"うしみつ-5chまとめ-","data":[24,30,30,26,26,26,26,29,31,31,27,24,23,19,23,20,21,26,26,25,24,25,26,24,24,27,21,20]},{"label":"ゆっぺのゆる漫画ブログ","data":[25,59,31,58,36,68,39,23,49,35,88,101,101,45,101,51,26,56,37,74,59,38,88,41,32,69,101,43]},{"label":"カエルDXのオタ活日記","data":[26,27,49,44,48,45,48,49,52,36,38,34,32,34,31,37,34,33,44,34,32,31,31,36,40,49,45,45]},{"label":"ふくよかまるみのピリカラ人生","data":[27,25,23,25,23,21,24,21,20,22,19,21,21,20,19,19,19,19,20,21,21,20,20,18,17,18,18,18]},{"label":"ぶる速-VIP","data":[28,21,27,30,29,27,28,24,28,25,24,23,24,23,20,23,27,27,25,23,25,23,29,34,25,26,57,58]},{"label":"ぱんをたずねて2000里ちょい","data":[29,43,37,37,35,31,59,42,26,33,34,38,36,32,30,40,33,36,38,72,40,40,40,49,39,44,36,50]},{"label":"なんJクエスト","data":[30,31,26,29,24,23,25,28,25,30,26,27,30,28,27,30,32,31,31,31,28,32,24,29,34,31,27,27]},{"label":"VIPPERな俺","data":[31,28,24,24,20,25,19,16,24,17,29,35,31,27,26,21,29,28,30,27,30,26,21,23,23,23,22,26]},{"label":"ラビット速報","data":[32,29,29,28,27,29,27,27,29,29,28,32,26,29,28,29,30,30,29,29,31,29,30,30,31,29,26,25]},{"label":"ゴールデンタイムズ","data":[33,26,25,23,28,30,29,26,30,28,22,28,28,24,21,24,28,25,28,32,23,33,28,31,29,24,25,22]},{"label":"カイカイ反応通信","data":[34,32,32,31,30,32,31,31,33,32,31,36,40,35,35,34,36,32,35,33,33,34,33,33,30,32,32,30]},{"label":"VIP NEWS","data":[35,47,46,68,41,51,49,66,61,73,49,64,46,49,53,52,60,49,49,43,49,56,37,84,62,46,37,62]},{"label":"【2ch】コピペ情報局","data":[36,37,38,32,31,33,38,41,38,45,42,46,45,42,43,38,48,41,45,45,36,35,34,39,43,42,44,37]},{"label":"えみコミック！","data":[37,68,40,75,39,69,42,78,34,61,33,61,42,83,45,84,40,68,33,59,34,77,39,83,41,61,40,60]},{"label":"IT速報","data":[38,40,34,33,38,38,41,45,45,37,44,43,35,40,44,39,43,39,40,40,43,46,45,47,38,35,41,36]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[39,38,50,55,58,58,47,47,48,52,56,60,62,57,64,64,65,55,56,54,53,61,59,65,63,63,73,70]},{"label":"まとめたニュース","data":[40,36,35,34,34,42,32,35,39,38,36,40,44,31,37,47,49,46,36,42,44,37,43,40,36,33,39,33]},{"label":"世にも奇妙ななんかの話","data":[41,39,41,43,44,37,33,33,32,34,30,33,34,73,29,31,25,21,17,24,78,22,22,22,19,16,17,55]},{"label":"乃木坂46まとめ 1/46","data":[42,45,51,50,49,50,60,60,43,41,41,50,54,41,52,63,63,65,54,53,48,55,57,55,53,59,66,40]},{"label":"ニュースBUZZ","data":[43,33,36,35,47,43,52,37,37,39,37,47,47,53,54,36,39,37,51,35,39,36,51,38,37,37,35,32]},{"label":"ガールズVIPまとめ","data":[44,49,42,42,33,35,37,32,44,47,54,42,37,43,47,42,45,42,46,44,45,44,41,45,45,36,31,44]},{"label":"気になる芸能まとめ","data":[45,44,44,41,37,34,35,39,42,40,39,41,38,36,39,43,42,40,39,36,35,41,42,42,44,38,34,42]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[46,41,43,39,46,41,40,34,36,42,40,37,43,38,33,33,41,43,41,38,37,43,38,43,33,34,38,31]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[47,52,63,81,78,83,86,100,90,89,74,77,90,95,78,72,81,80,68,66,80,73,68,67,61,58,54,48]},{"label":"おーるじゃんる","data":[48,34,39,40,42,40,43,44,41,44,43,48,53,50,49,46,51,48,47,41,52,45,54,50,52,41,43,34]},{"label":"ネギ速","data":[49,42,33,36,40,39,36,36,35,26,35,30,39,33,34,41,46,34,43,37,46,49,46,32,35,40,33,39]},{"label":"スカッと連載ブログ（スカログ）","data":[50,54,65,45,54,53,51,101,69,71,66,78,57,64,58,60,57,51,58,47,51,47,50,59,50,50,52,51]},{"label":"なんJ（まとめては）いかんのか？","data":[51,46,47,38,43,36,85,63,59,58,45,45,49,97,79,57,50,59,59,57,68,74,101,70,72,48,42,73]},{"label":"ポリー速報","data":[52,55,62,49,51,56,53,48,46,46,50,57,56,52,56,70,54,50,57,52,47,60,61,57,57,51,59,57]},{"label":"オタク.com －オタコム－","data":[53,51,45,46,53,48,44,50,54,54,52,52,52,48,48,50,53,52,53,50,50,53,48,48,47,53,49,46]},{"label":"チリツモブログ","data":[54,101,101,56,101,101,90,91,83,101,67,101,58,101,101,45,68,101,101,48,56,101,101,56,101,101,101,101]},{"label":"海外の万国反応記＠海外の反応","data":[55,65,60,62,60,59,55,55,56,49,57,68,64,62,68,69,72,64,61,63,57,64,58,64,59,64,76,72]},{"label":"カオスちゃんねる","data":[56,53,52,51,62,49,45,51,47,43,47,72,65,75,62,53,55,53,48,56,58,52,55,51,55,47,64,56]},{"label":"芸能人の気になる噂","data":[57,60,58,54,67,57,56,56,62,59,69,63,63,56,55,54,64,67,65,60,66,70,71,73,71,70,68,75]},{"label":"Jnews1","data":[58,56,97,101,101,101,77,77,101,101,48,16,33,72,101,80,77,101,88,64,101,67,49,68,89,39,47,93]},{"label":"軍事・ミリタリー速報☆彡","data":[59,64,69,71,73,72,74,72,68,64,72,82,82,80,85,76,84,73,69,67,55,76,69,69,66,67,83,90]},{"label":"ついんてーる速報","data":[60,67,57,72,71,64,71,58,60,67,64,66,93,82,87,92,76,61,66,81,81,57,65,76,68,80,70,67]},{"label":"今日速2ch","data":[61,74,84,89,83,52,58,73,101,82,101,101,101,98,59,91,73,77,100,101,61,86,101,63,51,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[62,70,72,66,66,71,61,67,71,81,97,76,95,101,93,73,96,101,101,101,101,101,62,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[63,35,48,57,56,73,87,87,92,75,59,80,87,85,92,100,101,97,101,101,101,96,99,101,101,101,100,87]},{"label":"あにこ便","data":[64,61,55,59,57,47,57,57,64,60,61,56,61,59,63,67,61,57,55,51,60,65,60,53,56,55,56,63]},{"label":"エクサワロス","data":[65,88,76,78,81,67,69,71,67,62,71,89,72,65,74,87,90,84,71,71,71,72,83,91,82,83,82,82]},{"label":"ライフハックちゃんねる弐式","data":[66,79,82,63,85,75,72,64,65,66,79,91,74,69,61,62,56,63,67,69,90,69,64,62,70,60,74,79]},{"label":"流速VIP","data":[67,94,71,74,77,66,68,81,87,78,92,94,83,91,70,65,88,90,84,92,96,94,90,93,69,72,87,99]},{"label":"ずっと日曜日のターン","data":[68,48,73,82,50,62,94,80,93,76,55,58,59,44,57,101,67,54,63,49,75,68,91,85,64,77,50,64]},{"label":"De速","data":[69,73,54,61,52,61,101,61,53,50,51,53,69,68,69,55,59,47,50,46,38,51,44,44,54,56,67,54]},{"label":"サカラボ | サッカーまとめ速報","data":[70,57,67,53,79,63,65,74,77,69,91,88,71,66,80,68,74,82,70,65,64,79,73,61,74,78,72,65]},{"label":"はーとログ","data":[71,80,74,70,75,70,80,86,88,85,73,83,78,76,83,82,85,78,75,78,77,71,80,75,80,75,88,91]},{"label":"なんJ　高校野球まとめ速報","data":[72,84,90,94,74,55,62,54,57,51,65,55,51,55,51,48,38,38,42,39,42,59,72,86,79,84,61,81]},{"label":"ろくのコミックブログ","data":[73,101,78,101,87,101,81,101,101,101,101,101,101,101,101,99,101,93,101,79,101,89,101,80,101,66,101,74]},{"label":"MLB NEWS@まとめ","data":[74,63,61,52,65,74,64,65,50,55,63,65,76,61,65,58,62,60,62,62,65,63,82,79,67,73,55,47]},{"label":"最強ジャンプ放送局","data":[75,89,89,100,92,93,63,82,100,96,101,92,99,96,101,101,94,101,97,100,73,95,93,87,94,88,98,69]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[76,58,53,48,45,44,46,46,63,100,68,59,67,58,67,59,52,45,52,70,101,101,101,101,75,45,62,59]},{"label":"2chコピペ保存道場","data":[77,66,75,79,88,79,75,85,72,79,81,79,75,87,77,81,87,79,83,86,79,58,67,77,73,74,78,84]},{"label":"鷹速@ホークスまとめブログ","data":[78,72,87,95,101,86,92,69,81,98,85,93,91,84,91,93,92,88,96,97,84,80,92,92,90,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[79,78,70,84,90,95,91,92,75,86,89,81,70,78,86,95,91,81,79,80,97,101,101,89,84,96,92,88]},{"label":"PS5速報！","data":[80,62,59,65,68,89,70,96,101,68,86,67,66,67,73,77,79,66,80,98,101,78,70,58,60,62,53,52]},{"label":"馬鳥速報","data":[81,69,64,69,86,84,83,59,76,83,75,74,77,81,71,74,66,58,87,85,63,39,35,46,46,43,46,38]},{"label":"ふぇー速","data":[82,76,56,76,69,46,34,52,51,70,77,62,60,54,41,79,75,70,91,75,62,48,56,54,76,101,93,78]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[83,75,68,80,82,78,54,62,66,77,70,70,92,74,76,88,80,72,86,89,86,81,84,72,91,101,96,77]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[84,83,66,64,84,85,88,76,79,93,93,98,89,79,89,86,82,71,76,84,82,83,81,90,81,82,95,94]},{"label":"され妻つきこブログ｜アラサーママのサレ妻経験録","data":[85,101,101,86,61,60,66,88,101,101,95,86,81,86,101,101,101,95,92,93,87,101,101,101,77,68,79,76]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[86,81,83,67,59,65,76,99,70,65,76,71,94,77,84,101,100,86,82,73,76,66,75,78,78,85,69,68]},{"label":"マンガと私と猫ブログ。","data":[87,101,86,101,80,96,101,70,58,57,78,54,73,101,101,61,70,101,64,68,101,62,66,101,101,65,51,41]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[88,98,92,101,101,101,101,101,101,101,101,101,101,101,42,49,69,74,89,101,101,101,101,101,99,92,99,35]},{"label":"モンハンライズ：サンブレイク2chまとめ速報 - MHRise攻略","data":[89,92,91,97,95,92,97,83,55,53,58,69,68,70,72,83,78,75,81,83,89,93,95,95,92,97,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[90,50,79,101,76,76,67,93,101,92,101,96,101,90,60,71,89,98,77,91,101,82,94,60,83,91,65,97]},{"label":"かぞくちゃんねる","data":[91,97,98,93,93,82,89,97,85,97,99,101,97,60,88,101,101,101,98,87,88,88,97,94,88,86,71,96]},{"label":"大艦巨砲主義！","data":[92,87,81,96,101,101,101,90,101,101,101,101,101,101,94,101,101,100,90,101,101,101,101,101,101,101,101,101]},{"label":"もちログ","data":[93,101,101,101,101,101,101,101,74,48,46,44,48,39,101,101,101,101,101,101,101,101,78,96,101,90,91,92]},{"label":"FF14速報","data":[94,82,93,98,101,101,101,79,99,101,98,73,101,101,96,101,101,94,99,94,72,50,53,52,58,57,60,49]},{"label":"投資ちゃんねる","data":[95,91,77,91,91,91,96,98,101,87,101,101,98,99,99,97,101,101,85,95,95,100,101,101,101,95,101,98]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[96,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[97,101,99,101,98,87,101,101,97,80,101,84,80,63,75,101,86,101,78,82,101,101,101,101,100,79,86,101]},{"label":"絵日記でございます。","data":[98,71,96,101,101,101,101,101,101,101,62,95,101,101,50,75,93,83,101,101,83,98,100,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[99,100,101,92,94,100,98,89,84,90,100,100,85,100,81,90,101,101,101,96,92,92,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[100,101,101,101,101,98,93,84,94,101,84,101,101,94,95,101,101,101,101,99,99,90,85,98,101,101,101,101]},{"label":"アニはつ -アニメ発信場-","data":[101,77,88,90,72,88,73,75,91,95,96,101,88,88,101,101,95,89,94,101,91,97,89,82,93,101,101,80]},{"label":"デジタルニューススレッド","data":[101,85,101,101,101,97,95,94,96,101,101,99,96,101,98,101,101,96,101,101,101,101,98,101,101,100,101,101]},{"label":"つつみのブログ","data":[101,86,101,77,101,101,79,101,101,101,101,101,101,89,101,78,101,69,101,101,70,101,77,101,101,101,101,71]},{"label":"今日もブブはからまわり。","data":[101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,93,80,83,96,77,82,68,82,99,53,39,41,22,32,44,47,44,34,55,41,42,32,25,42,52,58,53]},{"label":"働く大人の非常識","data":[101,95,101,101,70,94,101,101,73,63,80,85,101,101,101,66,101,76,60,58,74,91,96,88,86,101,80,101]},{"label":"お料理速報","data":[101,96,100,87,100,81,78,101,98,74,82,101,100,93,90,98,83,92,93,90,85,87,74,97,87,93,90,95]},{"label":"はむらの毎日マンガ","data":[101,101,85,47,55,54,50,40,40,56,60,49,55,47,40,32,35,35,32,28,27,30,36,35,48,54,48,61]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かきまとめ@なんJ","data":[101,101,95,85,63,80,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,85,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,60,97,101,101,101,78,84,94,51,50,51,46,56,58,91,72,101,101,101,101,71,97,101,63,83]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,88,64,101,101,53,86,94,101,75,86,101,100,89,101,101,101,88,101,101,76,101,101,101,81,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,99,101,101,84,101,101,101,101,101,101,92,101,101,97,85,101,101,98,101,101,101,101,101,89,101]},{"label":"笑う母には福来る　byはなゆい","data":[101,101,101,101,89,101,101,101,101,101,101,87,79,101,101,101,44,87,101,101,101,101,101,37,65,98,101,101]},{"label":"ろぼ速VIP","data":[101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,98,99,94,100]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Jの番記者","data":[101,101,101,101,101,101,101,38,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すや子のブログ","data":[101,101,101,101,101,101,101,95,80,72,90,90,84,71,66,85,71,62,74,77,69,85,79,101,96,81,101,101]},{"label":"2chNEWSまとめ","data":[101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,101,101,101,101,101,101,101,95,88,87,97,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,35,37,101,101,101,101,101,101,101,101,101,101,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,101,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,31,15,46,82,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,87,81,85,76,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"テスタのブログ−目指せ利益７０億","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,97,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101]},{"label":"しなのんちのいくる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,67,101,101,101,49,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,94,101,86,101,101,101,101,101]},{"label":"独女ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,84,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101]},{"label":"コノユビ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,99,101,89,101,66]},{"label":"Eorzean","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,52,66,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,74,101,71,75,101]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,77,86]},{"label":"古オタクの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,84,89]},{"label":"本田未央ちゃん応援まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85]}];
var labels = ['2022-08-20','2022-08-21','2022-08-22','2022-08-23','2022-08-24','2022-08-25','2022-08-26','2022-08-27','2022-08-28','2022-08-29','2022-08-30','2022-08-31','2022-09-01','2022-09-02','2022-09-03','2022-09-04','2022-09-05','2022-09-06','2022-09-07','2022-09-08','2022-09-09','2022-09-10','2022-09-11','2022-09-12','2022-09-13','2022-09-14','2022-09-15','2022-09-16',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"label":"ハムスター速報","data":[2,6,7,6,5,3,4,3,7,8,6,7,4,5,4,9,10,7,6,4,3,4,8,7,4,5,5,5]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2]},{"label":"はちま起稿","data":[4,3,4,3,4,4,3,4,3,3,3,3,3,3,3,3,4,4,3,3,4,3,3,4,3,3,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,5,5,5,6,5,5,6,4,4,4,4,6,7,5,6,6,5,4,6,6,6,4,3,5,4,4,4]},{"label":"不思議.net","data":[6,4,3,4,3,6,6,7,5,5,5,5,5,6,6,4,5,6,5,5,5,5,5,6,6,6,6,8]},{"label":"【2ch】ニュー速クオリティ","data":[7,8,9,7,7,7,9,8,8,7,8,8,8,8,9,10,9,9,8,10,9,10,11,10,9,10,10,9]},{"label":"暇つぶしニュース","data":[8,9,6,8,8,8,7,5,6,6,7,6,7,4,8,5,7,8,7,9,7,7,7,8,7,9,8,7]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[9,10,11,9,9,9,8,9,9,9,11,9,10,11,10,11,11,10,9,7,10,12,12,15,13,13,11,10]},{"label":"わんこーる速報！","data":[10,15,15,10,13,11,13,15,11,11,10,11,13,12,11,12,12,12,10,11,11,9,10,12,12,12,12,11]},{"label":"人間まおと愉快な仲間たち","data":[11,11,10,15,16,16,19,20,19,23,29,38,40,40,32,36,35,45,40,36,34,32,33,35,36,35,31,25]},{"label":"カラパイア","data":[12,7,8,13,12,12,10,11,20,16,9,10,12,10,12,8,3,2,12,13,13,11,9,9,11,8,9,15]},{"label":"BIPブログ","data":[13,14,13,11,11,14,17,18,17,20,19,20,21,20,20,25,19,20,17,23,27,15,16,14,15,15,18,19]},{"label":"なんJ PRIDE","data":[14,12,14,16,14,13,15,16,15,13,15,17,14,14,13,15,13,14,15,15,16,14,14,11,14,11,13,13]},{"label":"哲学ニュースnwk","data":[15,22,17,18,18,15,12,10,13,15,16,16,11,15,18,19,15,13,16,14,12,13,13,13,10,14,14,14]},{"label":"あいチャンネル","data":[16,16,18,17,21,47,21,14,12,29,21,13,19,13,22,14,27,32,13,16,14,17,15,25,29,17,15,12]},{"label":"おうまがタイムズ","data":[17,18,19,19,15,17,14,13,14,12,17,21,15,16,14,13,14,17,18,17,17,16,17,16,17,16,16,16]},{"label":"ヤゴヴのマンガ劇場","data":[18,19,16,12,10,10,11,12,10,10,12,12,9,9,7,7,8,11,11,8,8,8,6,5,8,7,7,6]},{"label":"ふくよかまるみのピリカラ人生","data":[19,20,21,21,20,20,18,17,18,18,18,18,16,17,17,18,17,15,24,39,50,74,90,101,101,101,101,101]},{"label":"ねいろ速報さん","data":[20,21,20,14,17,18,20,22,21,19,14,19,17,21,21,17,16,16,19,21,18,20,19,18,16,21,19,18]},{"label":"世にも奇妙ななんかの話","data":[21,17,24,78,22,22,22,19,16,17,55,15,18,18,16,16,20,72,23,18,20,23,51,101,101,101,101,101]},{"label":"稲妻速報","data":[22,27,30,29,28,25,26,26,28,28,24,23,23,24,24,24,22,18,25,20,25,24,20,23,21,23,23,23]},{"label":"NEWSぽけまとめーる","data":[23,13,12,20,19,19,16,21,22,14,13,14,20,22,15,20,18,19,14,12,15,18,18,17,18,22,20,22]},{"label":"日刊やきう速報","data":[24,23,26,26,27,23,27,28,25,24,23,25,27,19,26,29,25,29,26,25,28,25,23,20,20,20,24,26]},{"label":"ゴールデンタイムズ","data":[25,28,32,23,33,28,31,29,24,25,22,24,25,26,19,21,26,22,22,24,19,19,26,21,23,18,21,17]},{"label":"うしみつ-5chまとめ-","data":[26,26,25,24,25,26,24,24,27,21,20,22,26,29,28,27,23,25,20,19,23,30,29,29,25,29,25,27]},{"label":"ぶる速-VIP","data":[27,25,23,25,23,29,34,25,26,57,58,30,24,30,25,26,24,23,28,26,24,26,25,22,19,27,26,24]},{"label":"VIPPERな俺","data":[28,30,27,30,26,21,23,23,23,22,26,26,22,23,23,23,28,21,21,22,26,21,21,24,30,24,22,20]},{"label":"痛いニュース(ﾉ∀`)","data":[29,24,22,22,24,27,28,27,30,30,28,29,30,32,30,32,36,31,33,33,35,35,38,42,39,38,39,38]},{"label":"ラビット速報","data":[30,29,29,31,29,30,30,31,29,26,25,27,29,27,27,28,31,27,32,29,30,31,28,28,27,25,29,30]},{"label":"なんJクエスト","data":[31,31,31,28,32,24,29,34,31,27,27,28,28,25,31,22,21,24,30,27,21,22,24,19,31,28,27,21]},{"label":"カイカイ反応通信","data":[32,35,33,33,34,33,33,30,32,32,30,31,31,33,29,31,32,26,27,31,32,29,30,32,28,30,30,29]},{"label":"カエルDXのオタ活日記","data":[33,44,34,32,31,31,36,40,49,45,45,55,45,48,40,43,45,47,29,28,22,27,22,27,26,34,17,28]},{"label":"ネギ速","data":[34,43,37,46,49,46,32,35,40,33,39,37,32,39,39,30,38,35,44,37,39,48,60,50,50,36,45,35]},{"label":"はむらの毎日マンガ","data":[35,32,28,27,30,36,35,48,54,48,61,101,101,101,101,101,101,101,101,101,101,101,98,82,71,66,54,62]},{"label":"ぱんをたずねて2000里ちょい","data":[36,38,72,40,40,40,49,39,44,36,50,46,43,45,50,48,58,54,54,93,56,61,45,33,22,32,28,31]},{"label":"ニュースBUZZ","data":[37,51,35,39,36,51,38,37,37,35,32,33,33,56,49,41,46,49,35,53,49,39,44,47,35,50,47,45]},{"label":"なんJ　高校野球まとめ速報","data":[38,42,39,42,59,72,86,79,84,61,81,94,97,93,98,85,87,90,96,95,95,86,76,81,101,95,100,98]},{"label":"IT速報","data":[39,40,40,43,46,45,47,38,35,41,36,43,38,35,34,38,37,41,43,32,33,37,40,43,41,43,32,40]},{"label":"気になる芸能まとめ","data":[40,39,36,35,41,42,42,44,38,34,42,44,41,37,38,34,34,34,36,40,42,46,36,31,38,37,43,51]},{"label":"【2ch】コピペ情報局","data":[41,45,45,36,35,34,39,43,42,44,37,39,46,41,35,39,43,42,45,43,31,38,47,44,47,44,37,33]},{"label":"ガールズVIPまとめ","data":[42,46,44,45,44,41,45,45,36,31,44,49,37,47,36,45,41,33,55,41,45,34,58,46,46,56,35,32]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[43,41,38,37,43,38,43,33,34,38,31,36,39,50,33,35,40,30,37,30,38,36,37,37,33,33,36,37]},{"label":"web漫画家やしろあずきの日常","data":[44,34,55,41,42,32,25,42,52,58,53,42,66,85,97,97,101,99,82,62,70,28,31,40,32,19,38,39]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[45,52,70,101,101,101,101,75,45,62,59,65,61,73,71,71,54,46,48,54,88,78,57,49,57,60,46,47]},{"label":"まとめたニュース","data":[46,36,42,44,37,43,40,36,33,39,33,34,42,34,37,37,39,39,51,34,36,45,50,34,37,31,41,36]},{"label":"De速","data":[47,50,46,38,51,44,44,54,56,67,54,59,53,65,58,86,101,101,88,59,96,75,69,71,54,45,53,84]},{"label":"おーるじゃんる","data":[48,47,41,52,45,54,50,52,41,43,34,48,50,46,43,44,44,37,46,42,43,42,52,39,43,40,34,34]},{"label":"VIP NEWS","data":[49,49,43,49,56,37,84,62,46,37,62,47,63,49,57,76,53,48,57,47,57,43,41,53,72,73,82,81]},{"label":"ポリー速報","data":[50,57,52,47,60,61,57,57,51,59,57,50,55,62,61,59,57,56,56,51,53,71,61,54,49,57,50,58]},{"label":"スカッと連載ブログ（スカログ）","data":[51,58,47,51,47,50,59,50,50,52,51,35,44,42,42,52,50,40,64,46,44,47,48,38,48,39,42,42]},{"label":"オタク.com －オタコム－","data":[52,53,50,50,53,48,48,47,53,49,46,53,47,54,46,40,51,51,50,52,46,51,53,45,45,48,49,48]},{"label":"カオスちゃんねる","data":[53,48,56,58,52,55,51,55,47,64,56,58,52,52,60,61,62,65,60,61,48,53,55,57,55,53,51,43]},{"label":"ずっと日曜日のターン","data":[54,63,49,75,68,91,85,64,77,50,64,95,91,66,70,50,49,63,85,73,78,76,35,74,44,59,72,66]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[55,56,54,53,61,59,65,63,63,73,70,79,62,64,54,42,33,36,39,55,60,58,77,67,59,62,68,56]},{"label":"ゆっぺのゆる漫画ブログ","data":[56,37,74,59,38,88,41,32,69,101,43,84,101,57,96,46,29,80,38,45,101,40,27,30,76,101,55,41]},{"label":"あにこ便","data":[57,55,51,60,65,60,53,56,55,56,63,63,56,58,59,55,52,60,63,57,55,63,59,56,61,67,61,53]},{"label":"馬鳥速報","data":[58,87,85,63,39,35,46,46,43,46,38,40,35,28,47,56,47,38,47,35,40,50,68,62,52,46,44,49]},{"label":"なんJ（まとめては）いかんのか？","data":[59,59,57,68,74,101,70,72,48,42,73,67,78,59,52,83,72,95,101,80,69,70,34,36,42,41,33,57]},{"label":"MLB NEWS@まとめ","data":[60,62,62,65,63,82,79,67,73,55,47,51,60,44,45,51,48,52,42,44,51,57,42,52,51,64,69,55]},{"label":"ついんてーる速報","data":[61,66,81,81,57,65,76,68,80,70,67,64,64,75,65,79,89,89,73,70,79,97,54,72,79,69,65,61]},{"label":"すや子のブログ","data":[62,74,77,69,85,79,101,96,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ライフハックちゃんねる弐式","data":[63,67,69,90,69,64,62,70,60,74,79,68,72,63,67,74,69,75,69,77,64,66,62,89,78,71,73,67]},{"label":"海外の万国反応記＠海外の反応","data":[64,61,63,57,64,58,64,59,64,76,72,69,69,71,51,58,76,57,59,63,68,62,67,61,58,63,56,76]},{"label":"乃木坂46まとめ 1/46","data":[65,54,53,48,55,57,55,53,59,66,40,32,36,36,41,49,42,50,49,49,41,44,46,41,34,51,60,46]},{"label":"PS5速報！","data":[66,80,98,101,78,70,58,60,62,53,52,60,59,60,53,54,55,73,83,90,65,92,101,77,77,85,57,72]},{"label":"芸能人の気になる噂","data":[67,65,60,66,70,71,73,71,70,68,75,70,67,67,73,66,64,67,67,66,59,67,64,64,68,52,67,60]},{"label":"えみコミック！","data":[68,33,59,34,77,39,83,41,61,40,60,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[69,101,101,70,101,77,101,101,101,101,71,101,75,101,80,101,101,64,101,67,101,60,101,101,64,101,63,101]},{"label":"ふぇー速","data":[70,91,75,62,48,56,54,76,101,93,78,56,54,76,66,73,71,68,52,87,76,84,66,76,101,55,52,74]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[71,76,84,82,83,81,90,81,82,95,94,89,84,82,79,88,90,88,79,79,75,72,79,68,74,76,76,71]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[72,86,89,86,81,84,72,91,101,96,77,73,65,74,85,90,91,97,68,60,73,94,89,93,91,79,87,79]},{"label":"軍事・ミリタリー速報☆彡","data":[73,69,67,55,76,69,69,66,67,83,90,76,70,70,64,65,75,58,71,78,82,69,71,63,66,54,58,59]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[74,89,101,101,101,101,101,99,92,99,35,45,76,98,101,91,101,101,74,101,101,101,101,101,101,101,101,101]},{"label":"モンハンライズ：サンブレイク2chまとめ速報 - MHRise攻略","data":[75,81,83,89,93,95,95,92,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"働く大人の非常識","data":[76,60,58,74,91,96,88,86,101,80,101,101,101,101,99,101,101,101,91,101,101,64,65,51,80,101,101,93]},{"label":"今日速2ch","data":[77,100,101,61,86,101,63,51,101,101,101,101,101,101,101,62,82,86,70,48,80,41,78,86,101,101,101,87]},{"label":"はーとログ","data":[78,75,78,77,71,80,75,80,75,88,91,87,82,87,82,82,88,77,94,84,74,85,86,79,90,78,74,80]},{"label":"2chコピペ保存道場","data":[79,83,86,79,58,67,77,73,74,78,84,77,79,78,76,75,78,76,84,86,90,87,82,70,65,72,71,73]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[80,68,66,80,73,68,67,61,58,54,48,72,74,61,75,64,67,61,66,76,85,80,74,75,67,58,48,50]},{"label":"やみ速@なんJ西武まとめ","data":[81,79,80,97,101,101,89,84,96,92,88,97,101,94,100,101,93,84,86,101,101,99,101,100,100,101,94,86]},{"label":"サカラボ | サッカーまとめ速報","data":[82,70,65,64,79,73,61,74,78,72,65,85,71,68,78,78,56,78,65,71,72,73,80,66,56,61,70,63]},{"label":"絵日記でございます。","data":[83,101,101,83,98,100,101,101,101,101,101,101,101,101,101,101,99,93,99,94,29,33,43,59,83,87,101,101]},{"label":"エクサワロス","data":[84,71,71,71,72,83,91,82,83,82,82,74,86,95,83,67,66,71,62,68,63,56,75,69,73,70,86,69]},{"label":"footballnet【サッカー5chまとめ】","data":[85,101,101,98,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[86,82,73,76,66,75,78,78,85,69,68,66,58,51,48,72,74,66,89,75,81,68,73,88,95,92,59,44]},{"label":"笑う母には福来る　byはなゆい","data":[87,101,101,101,101,101,37,65,98,101,101,101,101,31,84,99,101,101,101,101,37,89,101,101,101,101,101,52]},{"label":"鷹速@ホークスまとめブログ","data":[88,96,97,84,80,92,92,90,101,101,101,96,93,90,101,95,95,87,101,83,101,91,91,90,86,84,77,85]},{"label":"アニはつ -アニメ発信場-","data":[89,94,101,91,97,89,82,93,101,101,80,98,98,97,101,101,100,100,101,69,98,93,101,101,69,93,75,91]},{"label":"流速VIP","data":[90,84,92,96,94,90,93,69,72,87,99,88,94,89,86,80,80,74,78,88,84,77,85,73,82,77,80,82]},{"label":"もっちのママ友トラブル・子育て漫画","data":[91,72,101,101,101,101,71,97,101,63,83,61,68,101,101,101,83,69,101,85,91,101,101,101,62,90,81,101]},{"label":"お料理速報","data":[92,93,90,85,87,74,97,87,93,90,95,101,87,96,89,87,94,83,98,81,71,81,100,80,89,83,79,77]},{"label":"ろくのコミックブログ","data":[93,101,79,101,89,101,80,101,66,101,74,101,73,101,68,101,61,101,72,101,67,101,70,101,53,101,66,101]},{"label":"FF14速報","data":[94,99,94,72,50,53,52,58,57,60,49,54,51,43,72,69,65,43,58,50,66,79,99,99,85,47,64,75]},{"label":"され妻つきこブログ｜アラサーママのサレ妻経験録","data":[95,92,93,87,101,101,101,77,68,79,76,91,101,84,81,70,73,59,76,101,100,90,81,78,75,81,91,101]},{"label":"デジタルニューススレッド","data":[96,101,101,101,101,98,101,101,100,101,101,101,101,101,101,92,98,94,101,101,101,101,101,101,101,101,97,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[97,101,101,101,96,99,101,101,101,100,87,80,80,101,95,101,101,91,95,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[98,77,91,101,82,94,60,83,91,65,97,92,96,92,69,53,81,85,101,82,101,101,84,95,96,82,96,101]},{"label":"えび通","data":[99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[100,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,100,101,84,84,74,78,83]},{"label":"マンガと私と猫ブログ。","data":[101,64,68,101,62,66,101,101,65,51,41,41,34,38,90,33,30,28,31,72,101,101,32,26,24,26,40,68]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,77,101,72,65,70,91,101,101]},{"label":"オタクニュース","data":[101,78,82,101,101,101,101,100,79,86,101,83,95,77,88,77,70,53,77,65,62,59,49,60,60,86,85,88]},{"label":"投資ちゃんねる","data":[101,85,95,95,100,101,101,101,95,101,98,99,90,101,101,93,97,98,97,101,89,88,101,92,94,94,95,90]},{"label":"Jnews1","data":[101,88,64,101,67,49,68,89,39,47,93,57,49,81,74,47,63,101,34,38,83,83,101,91,101,101,101,54]},{"label":"しなのんちのいくる","data":[101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,97,100,73,95,93,87,94,88,98,69,81,88,91,92,81,96,82,87,100,101,101,95,96,81,96,90,96]},{"label":"かぞくちゃんねる","data":[101,98,87,88,88,97,94,88,86,71,96,90,89,86,91,100,101,81,93,97,97,96,88,94,101,97,92,100]},{"label":"チリツモブログ","data":[101,101,48,56,101,101,56,101,101,101,101,52,101,53,56,101,101,101,101,101,47,49,101,101,101,49,101,70]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,61,67,101,101,101,49,101,101,101,101,101,55,44,68,79,92,101,101,101,101,101,85,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,76,94,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,88,101,101,76,101,101,101,81,101,86,85,101,101,96,84,101,81,101,101,101,101,101,92,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,96,92,92,101,101,101,101,101,101,101,48,72,93,89,92,101,80,101,101,101,101,101,101,101,101,92]},{"label":"鈴木さん速報","data":[101,101,99,99,90,85,98,101,101,101,101,100,100,101,101,101,85,79,90,92,93,101,94,98,97,89,101,101]},{"label":"独女ちゃんねる","data":[101,101,101,54,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,101,101,93,101,101,101,101,101,101,101,101,101,99,101,84,86,101,101,101,101,101,101,101,101,101,93,95]},{"label":"素敵な鬼女様","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,98,99,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,54,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,75,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビ","data":[101,101,101,101,99,101,99,101,89,101,66,101,101,101,101,94,101,101,101,101,101,101,101,101,98,101,83,101]},{"label":"Eorzean","data":[101,101,101,101,101,52,66,101,101,101,101,78,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[101,101,101,101,101,62,101,101,101,101,101,71,57,69,62,63,77,55,41,64,61,65,93,87,101,100,84,65]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,63,74,101,71,75,101,62,101,83,55,101,59,44,101,58,58,101,101,101,101,101,101,101]},{"label":"もちログ","data":[101,101,101,101,101,78,96,101,90,91,92,75,83,79,77,60,68,70,75,74,52,55,63,48,40,42,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,101,87,81,85,76,101,101,101,101,101,101,101,101,101,101,99,92,101,101,101,101,80,101,89]},{"label":"ろぼ速VIP","data":[101,101,101,101,101,101,100,98,99,94,100,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,97]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,101,101,101,101,101,101,95,101,77,86,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"古オタクの日常","data":[101,101,101,101,101,101,101,101,87,84,89,82,77,80,63,57,60,62,53,56,54,52,56,58,63,65,62,64]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,94,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,87,101,93,101,98,101]},{"label":"本田未央ちゃん応援まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,88,94,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101]},{"label":"俺の頭の中/月光もりあ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,101,101,101,101,101,101,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,99,101,101]},{"label":"大物Youtubeｒ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,87,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,99,101,83,83,88,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,82,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,54,39,55,99,101,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,97,101,101,75,88,99]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,97,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,94]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78]}];
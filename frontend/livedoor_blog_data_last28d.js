var labels = ['2022-12-22','2022-12-23','2022-12-24','2022-12-25','2022-12-26','2022-12-27','2022-12-28','2022-12-29','2022-12-30','2022-12-31','2023-01-01','2023-01-02','2023-01-03','2023-01-04','2023-01-05','2023-01-06','2023-01-07','2023-01-08','2023-01-09','2023-01-10','2023-01-11','2023-01-12','2023-01-13','2023-01-14','2023-01-15','2023-01-16','2023-01-17','2023-01-18',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,3,4,1,1,1,1,1,2,1,17,22,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,1,1,2,2,2,2,2,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2]},{"label":"はちま起稿","data":[3,3,2,2,3,3,3,3,3,3,4,4,2,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,4,3,4,4,4,5,5,5,3,2,3,4,4,6,6,4,5,5,5,6,7,6,5,4,5,5]},{"label":"ハムスター速報","data":[5,5,5,8,10,5,5,4,4,4,6,7,8,11,7,7,5,6,8,7,6,5,4,4,6,7,6,6]},{"label":"暇つぶしニュース","data":[6,7,6,6,5,6,7,6,6,6,8,3,4,6,6,8,8,7,6,6,7,7,6,7,7,6,7,7]},{"label":"ヤゴヴのマンガ劇場","data":[7,6,7,7,6,7,8,8,7,15,31,27,19,20,20,13,11,9,7,8,8,8,9,11,8,9,10,9]},{"label":"不思議.net","data":[8,8,9,5,9,8,6,7,13,19,26,29,29,25,8,4,4,5,4,4,4,3,5,5,4,5,4,4]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[9,9,11,10,11,13,10,13,12,10,9,5,6,8,9,10,9,11,12,11,9,10,11,8,11,10,8,10]},{"label":"【2ch】ニュー速クオリティ","data":[10,10,10,9,7,9,9,9,8,7,10,8,7,9,10,9,10,10,9,10,11,9,10,9,10,8,9,8]},{"label":"BIPブログ","data":[11,12,14,11,12,11,14,15,16,12,14,13,13,13,13,11,13,12,15,19,15,24,22,18,15,14,19,16]},{"label":"哲学ニュースnwk","data":[12,11,12,13,14,12,11,12,10,13,13,11,10,10,12,14,15,13,11,13,12,14,13,13,12,11,12,11]},{"label":"わんこーる速報！","data":[13,13,13,15,13,15,15,11,11,9,12,10,9,7,11,12,12,14,10,9,10,11,12,10,9,12,13,13]},{"label":"人間まおと愉快な仲間たち","data":[14,16,16,12,15,14,12,10,9,8,11,6,5,5,5,5,7,8,13,25,31,25,37,53,62,67,62,57]},{"label":"痛いニュース(ﾉ∀`)","data":[15,18,21,18,18,17,16,21,17,18,17,21,15,14,16,16,14,15,19,18,16,18,21,15,19,20,24,22]},{"label":"おうまがタイムズ","data":[16,14,19,16,17,19,20,16,18,16,15,14,14,15,17,15,17,17,17,12,13,12,14,14,13,15,14,12]},{"label":"なんJ PRIDE","data":[17,15,15,17,16,18,21,18,19,14,16,12,11,12,15,18,18,18,18,20,18,19,17,20,18,17,17,18]},{"label":"ねいろ速報さん","data":[18,19,23,19,19,16,19,17,20,17,19,23,17,19,18,19,19,19,20,15,20,17,16,19,16,19,21,23]},{"label":"ツイッター速報","data":[19,20,8,28,26,41,36,31,33,44,48,39,28,35,34,44,55,66,76,55,55,58,8,16,38,33,32,38]},{"label":"カラパイア","data":[20,17,18,14,8,10,13,14,14,11,5,9,12,17,14,17,16,16,14,14,21,23,25,27,20,13,11,14]},{"label":"稲妻速報","data":[21,23,24,24,23,24,22,27,25,22,21,26,24,24,30,29,31,30,22,23,25,22,23,22,29,27,28,26]},{"label":"世にも奇妙ななんかの話","data":[22,22,70,23,25,26,96,30,30,27,24,101,20,101,101,101,101,101,101,91,101,90,98,101,98,101,101,101]},{"label":"なんJクエスト","data":[23,25,31,29,28,25,26,28,26,28,20,16,16,22,26,24,26,28,23,24,27,26,27,28,22,28,29,28]},{"label":"VIPPERな俺","data":[24,27,26,27,27,22,18,19,24,31,27,25,31,27,23,25,24,22,28,29,22,15,20,21,28,29,22,25]},{"label":"NEWSぽけまとめーる","data":[25,31,25,22,22,27,24,24,29,23,22,22,23,23,19,26,22,29,16,16,14,16,15,17,17,16,20,19]},{"label":"ラビット速報","data":[26,26,27,21,24,23,27,26,28,24,23,19,18,21,24,28,30,26,30,27,26,28,28,29,26,24,27,27]},{"label":"はむらの毎日マンガ","data":[27,21,22,20,21,20,23,22,21,20,40,65,94,34,25,20,20,20,21,17,19,20,18,34,25,18,18,15]},{"label":"ゴールデンタイムズ","data":[28,24,20,26,20,21,25,20,23,21,18,18,25,18,21,23,27,23,24,22,23,27,26,23,23,23,25,24]},{"label":"うしみつ-5chまとめ-","data":[29,29,30,30,35,33,31,33,41,71,101,101,101,96,39,21,25,24,26,21,17,21,24,26,21,21,26,20]},{"label":"カイカイ反応通信","data":[30,28,29,31,31,30,29,32,31,40,56,62,62,63,60,32,29,33,32,34,32,30,33,30,32,31,30,31]},{"label":"ぶる速-VIP","data":[31,30,28,32,29,28,28,29,27,29,25,20,21,16,28,22,23,21,25,26,28,29,30,24,27,22,23,21]},{"label":"あいチャンネル","data":[32,33,17,25,54,48,17,23,15,33,37,15,30,31,45,66,73,76,27,28,24,13,19,12,33,26,15,17]},{"label":"日刊やきう速報","data":[33,32,32,33,30,32,30,25,32,34,29,24,26,28,29,30,21,27,31,33,29,32,32,37,34,30,35,29]},{"label":"おーるじゃんる","data":[34,36,33,35,39,35,37,34,37,38,41,45,36,38,41,33,39,39,41,38,44,39,36,36,40,44,34,34]},{"label":"IT速報","data":[35,37,35,40,38,38,35,40,35,36,32,33,32,33,31,31,37,36,33,32,36,40,41,40,37,34,31,33]},{"label":"ニュースBUZZ","data":[36,34,36,36,37,34,38,43,46,48,33,31,33,44,37,35,28,32,35,31,40,33,44,45,41,32,40,37]},{"label":"マンガと私と猫ブログ。","data":[37,49,49,43,57,52,63,85,74,82,83,101,101,101,65,42,43,43,54,51,56,60,43,80,65,46,41,66]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[38,54,55,61,65,82,73,62,53,45,66,63,41,48,51,61,53,68,45,44,61,61,49,49,51,53,63,55]},{"label":"【2ch】コピペ情報局","data":[39,35,40,38,43,40,40,36,39,37,39,36,37,40,38,36,35,41,42,35,47,42,42,51,36,45,46,40]},{"label":"ネギ速","data":[40,39,57,37,34,37,32,41,34,35,30,43,38,29,32,38,38,47,50,43,43,46,40,48,42,38,37,36]},{"label":"まとめたニュース","data":[41,42,37,41,33,51,46,37,36,32,38,32,39,37,40,37,36,37,36,30,33,31,31,31,35,35,33,30]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[42,41,34,34,36,29,33,38,38,43,34,34,34,32,33,40,32,34,38,42,37,43,34,43,39,41,36,35]},{"label":"山田全自動のあるある日記","data":[43,43,43,39,32,45,53,50,42,26,7,28,27,26,27,27,33,38,37,37,34,37,38,25,24,48,45,48]},{"label":"えみコミック！","data":[44,73,46,77,45,60,42,74,47,79,44,72,45,66,47,75,50,69,55,98,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[45,52,60,64,56,49,58,68,63,51,42,48,50,45,55,54,58,59,58,60,73,66,67,68,66,61,66,51]},{"label":"オタク.com －オタコム－","data":[46,44,45,49,42,50,45,47,51,39,43,42,42,46,44,45,49,45,47,47,53,49,54,47,47,51,42,43]},{"label":"乃木坂46まとめ 1/46","data":[47,46,44,42,44,42,34,35,22,25,35,37,35,36,36,34,41,35,34,36,38,38,35,41,31,42,38,39]},{"label":"スズぺぺの人生何とかなってます!!","data":[48,45,42,45,47,39,50,46,60,49,53,88,101,101,52,48,48,55,52,67,58,77,56,82,82,101,101,101]},{"label":"あにこ便","data":[49,51,48,47,48,43,47,48,52,62,67,64,63,61,66,64,61,56,48,41,49,51,46,50,46,50,49,47]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[50,56,39,44,50,46,51,39,49,50,49,47,48,51,54,47,52,57,46,46,54,55,59,54,43,52,47,42]},{"label":"web漫画家やしろあずきの日常","data":[51,59,47,51,67,89,92,63,95,54,69,101,64,75,76,43,42,51,72,53,39,50,51,67,54,59,53,60]},{"label":"サカラボ | サッカーまとめ速報","data":[52,61,62,55,55,62,55,75,56,60,64,53,57,54,46,51,51,46,44,52,59,74,55,59,61,49,52,58]},{"label":"海外の万国反応記＠海外の反応","data":[53,55,56,50,64,63,60,64,57,61,62,60,58,56,70,55,65,54,61,68,66,56,62,52,60,65,56,59]},{"label":"今日速2ch","data":[54,64,53,78,77,55,101,91,87,73,28,30,53,49,35,53,57,67,99,66,48,44,81,101,101,55,44,46]},{"label":"うちの夫が糖尿病になっちゃった！","data":[55,53,51,54,52,47,41,45,44,46,50,40,40,42,48,46,45,44,49,48,51,45,47,46,45,47,43,41]},{"label":"カオスちゃんねる","data":[56,47,61,46,49,44,39,44,40,47,52,54,55,53,43,41,44,48,51,45,57,52,48,57,56,60,55,52]},{"label":"お料理速報","data":[57,69,74,81,70,74,84,69,59,74,81,96,72,88,59,71,79,87,78,64,92,78,72,76,78,75,67,82]},{"label":"footballnet【サッカー5chまとめ】","data":[58,62,71,73,59,83,44,90,101,93,36,46,44,50,72,91,90,63,60,63,76,95,52,32,48,37,50,54]},{"label":"ポリー速報","data":[59,57,38,52,58,67,54,51,68,58,70,55,56,52,49,52,47,50,53,54,50,59,64,58,64,56,61,63]},{"label":"芸能人の気になる噂","data":[60,48,59,56,60,64,65,60,64,56,60,59,47,43,56,49,56,52,64,59,64,62,79,62,55,63,54,49]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[61,65,54,59,73,75,74,71,72,67,71,66,67,69,69,68,67,72,73,76,65,67,68,42,58,78,77,62]},{"label":"ガールズVIPまとめ","data":[62,58,41,69,66,65,76,72,50,52,51,52,54,59,63,79,87,82,81,61,42,75,69,70,69,68,60,76]},{"label":"ふくよかまるみのピリカラ人生","data":[63,66,78,66,75,57,56,49,61,70,74,99,101,101,101,101,101,90,101,90,96,101,101,101,101,71,98,84]},{"label":"カエルDXのオタ活日記","data":[64,63,63,57,80,87,48,55,48,66,63,101,83,94,87,99,101,60,68,50,46,64,82,88,76,86,88,101]},{"label":"つつみのブログ","data":[65,101,101,101,101,101,101,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[66,81,67,71,72,72,72,70,71,77,78,79,79,60,86,85,64,70,67,79,62,70,85,56,67,77,79,77]},{"label":"馬鳥速報","data":[67,50,50,62,81,79,59,83,73,85,88,68,74,79,85,74,60,91,101,69,35,34,39,33,49,64,51,50]},{"label":"軍事・ミリタリー速報☆彡","data":[68,71,73,70,78,73,78,86,75,76,75,83,71,73,74,67,70,65,70,74,67,72,73,66,72,85,57,61]},{"label":"ミラクルファミリー","data":[69,101,69,101,101,101,87,98,101,57,101,101,101,101,101,70,71,89,101,101,101,101,53,60,101,101,101,56]},{"label":"気になる芸能まとめ","data":[70,74,75,65,68,78,68,73,67,63,59,51,51,47,50,56,59,53,57,49,63,69,65,65,57,62,64,67]},{"label":"De速","data":[71,76,76,76,79,94,81,53,54,75,86,78,97,101,100,101,97,81,87,82,101,101,101,101,88,101,74,79]},{"label":"2chコピペ保存道場","data":[72,70,77,74,85,85,82,78,76,83,72,80,65,62,58,73,68,58,65,71,69,76,77,77,63,82,70,65]},{"label":"VIP NEWS","data":[73,72,66,58,63,59,64,79,55,64,79,49,70,39,62,59,63,49,43,58,68,63,60,63,87,43,69,86]},{"label":"あおばブログ","data":[74,89,87,101,101,101,101,101,101,78,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぱんをたずねて2000里ちょい","data":[75,40,64,101,41,93,43,42,62,41,55,35,52,78,101,101,40,31,29,40,30,41,29,35,50,39,16,32]},{"label":"ライフハックちゃんねる弐式","data":[76,78,72,60,69,58,67,52,70,59,68,69,75,76,57,57,62,71,59,70,72,80,61,64,53,58,85,68]},{"label":"ついんてーる速報","data":[77,60,68,68,61,68,49,58,65,55,54,56,46,57,77,65,72,78,62,65,70,73,71,71,79,80,78,69]},{"label":"やみ速@なんJ西武まとめ","data":[78,101,101,101,101,101,101,82,86,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[79,67,52,101,101,53,62,54,101,42,90,101,85,101,101,58,101,40,63,101,45,35,63,38,101,36,58,101]},{"label":"まとめ太郎！","data":[80,92,81,83,71,84,93,88,96,101,99,101,101,101,101,101,85,98,84,80,79,96,101,101,100,87,94,101]},{"label":"PS5速報！","data":[81,93,65,53,51,54,52,57,58,53,58,71,82,86,61,60,82,99,56,78,60,79,80,69,80,72,80,53]},{"label":"ふぇー速","data":[82,91,96,94,84,101,75,81,66,72,61,61,66,68,75,50,54,64,90,56,71,92,92,55,52,84,93,73]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[83,68,94,96,88,88,101,101,83,101,101,101,101,101,84,94,93,93,79,92,82,83,84,86,84,100,84,81]},{"label":"はーとログ","data":[84,86,82,86,82,96,101,94,101,101,97,95,84,101,92,92,101,79,89,95,93,81,101,91,81,79,76,83]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[85,101,92,75,101,77,71,101,79,91,101,101,80,72,101,63,66,101,71,62,101,53,45,44,44,40,39,45]},{"label":"ジャンプ速報","data":[86,88,84,84,92,92,69,80,90,89,94,100,95,90,95,96,101,101,91,86,101,99,96,98,89,96,101,101]},{"label":"投資ちゃんねる","data":[87,79,80,82,62,76,85,87,78,81,84,70,73,58,71,77,77,73,69,72,78,82,76,81,94,76,86,87]},{"label":"MLB NEWS@まとめ","data":[88,99,88,88,101,101,101,101,101,94,73,85,90,70,73,101,83,75,88,73,77,87,83,101,90,90,72,74]},{"label":"まとめロッテ！","data":[89,101,90,95,101,81,80,101,101,101,95,77,101,101,101,101,101,101,101,101,95,101,86,95,101,101,101,88]},{"label":"鈴木さん速報","data":[90,90,91,99,90,101,100,100,89,97,96,82,96,101,101,86,96,96,100,88,83,89,101,83,83,95,91,78]},{"label":"大艦巨砲主義！","data":[91,101,101,101,101,101,101,101,100,98,100,101,101,101,96,97,101,86,101,101,94,85,90,93,74,101,101,98]},{"label":"まとめブレイド","data":[92,82,99,63,76,71,61,59,45,84,57,50,61,64,53,69,91,62,101,85,100,101,57,75,93,101,81,92]},{"label":"もちログ","data":[93,98,101,101,86,69,89,89,69,69,45,38,43,41,42,39,46,42,40,39,41,36,101,101,101,101,73,71]},{"label":"ろぼ速VIP","data":[94,85,100,97,87,101,97,93,82,95,101,92,60,83,101,101,101,101,85,94,89,86,91,90,75,81,87,80]},{"label":"登山ちゃんねる","data":[95,87,101,90,83,90,79,101,101,88,65,81,93,91,94,83,101,92,82,83,74,93,99,97,73,101,101,95]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[96,101,85,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[97,101,83,101,101,101,98,101,101,100,101,67,76,100,68,76,101,83,94,57,75,84,101,85,95,74,101,100]},{"label":"ずっと日曜日のターン","data":[98,75,95,80,53,56,88,56,84,65,46,57,69,67,64,81,84,80,66,81,101,101,66,73,59,54,75,93]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[99,84,86,87,96,91,83,76,77,90,101,101,101,101,81,72,75,74,86,87,81,71,70,72,68,89,101,64]},{"label":"FF14速報","data":[100,77,79,92,101,70,77,95,101,101,101,101,101,93,101,90,80,94,97,101,52,48,50,61,85,73,65,70]},{"label":"チリツモブログ","data":[101,38,58,48,101,66,101,77,101,101,101,41,101,101,101,101,101,101,101,101,101,47,101,39,77,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,80,101,93,101,101,101,101,98,101,77,90,100,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,83,97,72,101,101,101,97,101,101,101,101,101,65,101,101,101,77,83,75,85,101,58,79,101,101,101,101]},{"label":"働く大人の非常識","data":[101,94,101,67,40,61,70,101,80,80,101,73,92,101,79,101,76,101,101,101,101,65,87,101,101,93,97,97]},{"label":"エクサワロス","data":[101,95,93,79,74,98,86,84,81,92,89,76,86,82,78,93,94,97,101,93,84,91,88,101,99,92,83,94]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[101,96,101,101,101,101,101,101,93,87,101,86,98,99,80,78,101,100,101,100,101,101,101,101,101,83,89,101]},{"label":"デジタルニューススレッド","data":[101,97,98,91,95,95,94,99,85,96,80,74,78,95,88,84,78,84,95,84,87,88,97,94,86,91,99,85]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,100,101,89,91,101,99,101,94,101,101,89,77,92,89,101,101,101,80,101,80,100,101,84,96,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[101,101,89,101,101,101,101,101,101,101,92,101,101,85,67,101,69,61,101,101,101,57,101,101,101,69,68,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,85,46,36,66,65,91,68,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,98,94,86,95,101,92,99,91,101,101,97,97,101,101,85,98,97,97,101,101,100,101,101,100,96]},{"label":"絵日記でございます。","data":[101,101,101,100,101,101,101,101,101,101,76,101,88,74,82,88,86,101,101,101,101,101,78,74,71,66,48,72]},{"label":"Jnews1","data":[101,101,101,101,89,80,101,67,43,30,47,101,101,71,101,101,101,25,39,101,101,68,74,101,101,101,59,44]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,97,99,90,101,101,86,101,101,87,81,90,87,101,101,101,101,101,101,101,87,70,101,101,101]},{"label":"えび通","data":[101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[101,101,101,101,99,101,101,66,101,101,101,94,68,77,93,101,100,101,92,101,91,101,101,101,97,88,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,31,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,97,91,101,101,101,87,91,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,75,77,88,94,95,89,92,98,95,90]},{"label":"美容外科クリニックで働くパチ美の日常","data":[101,101,101,101,101,101,101,92,88,101,82,101,101,87,101,80,88,101,101,101,101,101,75,78,91,70,71,75]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,96,101,101,93,101,99,84,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,101,101,97,101,98,87,89,80,101,98,101,101,101,101,101,98,101,92,101,99,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,101,101,101,101,101,101,101,101,101,101,44,91,101,91,101,101,101,101,101,101,101,100,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,58,81,101,83,101,101,101,101,101,86,101,101,99,30,57,82,91]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,75,49,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,84,59,101,101,101,101,101,101,101,101,101,101,101,14,25,92,89]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,93,101,98,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカッと連載ブログ（スカログ）","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,95,88,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,30,22,89,81,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,101,101,101,101,101,101,101,101,101,101,90,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,89,101,101,101,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,99,97,89,101,101,101,101,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,101,101,101,101,101,101,101,101,101,101,101]},{"label":"香香背男のblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はらぺこもんろーのまんが。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,96,96,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぬこー様ちゃんの大好き絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,95,101,101,101,101,101,101,101,101,101,101]},{"label":"るぅのおいしいうちごはん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101]},{"label":"ホリー絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,98,101,101,101,101,101,101,101]},{"label":"Flower Cage｜カリーナの宝塚依存症ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,99]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101]}];
var labels = ['2023-01-23','2023-01-24','2023-01-25','2023-01-26','2023-01-27','2023-01-28','2023-01-29','2023-01-30','2023-01-31','2023-02-01','2023-02-02','2023-02-03','2023-02-04','2023-02-05','2023-02-06','2023-02-07','2023-02-08','2023-02-09','2023-02-10','2023-02-11','2023-02-12','2023-02-13','2023-02-14','2023-02-15','2023-02-16','2023-02-17','2023-02-18','2023-02-19',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,2,1,2,2,2,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,3,2,1,3,3,2,3,2,3,2,3,2,2,1,1,2,2,2,2,2,2,1]},{"label":"カラパイア","data":[3,10,10,9,10,12,10,11,12,15,21,18,22,16,17,15,8,16,18,15,11,12,18,14,17,17,16,10]},{"label":"はちま起稿","data":[4,3,3,3,3,3,4,3,3,4,5,5,4,4,4,3,4,3,3,3,3,3,3,3,3,3,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,4,4,4,5,5,5,4,4,9,6,6,6,5,5,5,5,5,6,5,6,5,4,5,4,5,5,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,7,7,8,6,6,8,8,8,8,8,8,8,9,8,7,7,7,7,6,5,4,6,6,6,7,6,6]},{"label":"ハムスター速報","data":[7,5,5,5,4,4,6,7,6,5,4,4,5,6,6,6,6,6,4,4,4,6,5,4,5,4,4,4]},{"label":"暇つぶしニュース","data":[8,9,6,6,7,8,9,9,7,7,9,9,10,8,9,8,10,8,8,8,7,7,7,7,7,6,7,7]},{"label":"ツイッター速報","data":[9,6,16,18,17,9,1,6,9,1,1,3,2,3,1,4,2,4,5,7,10,16,29,24,30,40,33,43]},{"label":"ヤゴヴのマンガ劇場","data":[10,8,8,7,8,7,7,5,5,6,7,7,7,7,7,17,32,29,19,16,12,11,12,12,10,9,10,12]},{"label":"わんこーる速報！","data":[11,13,12,12,12,13,15,12,10,11,13,14,13,14,13,12,14,13,11,12,14,10,10,9,12,14,12,11]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[12,12,9,11,11,11,13,13,13,13,10,10,9,10,10,10,11,9,10,9,8,8,8,8,8,8,9,8]},{"label":"【2ch】ニュー速クオリティ","data":[13,11,11,10,9,10,11,10,11,12,11,12,12,11,11,9,12,10,9,10,9,9,9,10,9,10,8,9]},{"label":"哲学ニュースnwk","data":[14,15,14,13,13,14,14,17,14,10,12,11,11,13,14,11,9,12,13,11,18,13,13,11,14,13,13,13]},{"label":"はむらの毎日マンガ","data":[15,14,13,16,28,15,12,27,16,14,16,36,23,18,18,27,70,87,90,67,49,50,52,45,39,76,46,39]},{"label":"痛いニュース(ﾉ∀`)","data":[16,19,15,17,14,16,17,20,20,17,14,13,17,25,23,21,17,14,17,14,13,15,11,13,11,11,11,14]},{"label":"おうまがタイムズ","data":[17,16,19,19,15,17,16,15,15,19,17,15,15,15,15,23,15,15,16,26,28,30,26,23,16,18,20,21]},{"label":"うしみつ-5chまとめ-","data":[18,17,17,14,16,19,20,22,21,26,23,26,28,23,28,32,27,30,29,18,22,21,20,20,22,24,23,23]},{"label":"なんJ PRIDE","data":[19,20,22,26,22,21,18,18,18,20,18,16,18,17,16,20,19,19,22,19,16,17,14,16,15,16,18,17]},{"label":"BIPブログ","data":[20,22,28,21,18,26,19,23,25,24,28,19,16,12,12,13,16,17,14,13,17,19,19,17,13,12,15,16]},{"label":"ねいろ速報さん","data":[21,18,20,22,20,24,21,21,17,23,20,21,21,19,21,18,20,22,21,21,21,20,15,18,18,19,17,18]},{"label":"VIPPERな俺","data":[22,23,29,25,25,20,33,14,19,18,19,27,24,22,38,33,26,24,30,25,25,28,27,25,27,25,27,27]},{"label":"ゴールデンタイムズ","data":[23,21,25,28,21,23,22,25,22,21,27,22,26,26,24,26,18,26,27,23,27,23,22,22,25,23,25,26]},{"label":"なんJクエスト","data":[24,25,23,23,24,25,23,24,27,31,26,24,25,27,26,25,22,18,23,22,20,24,23,26,24,27,24,29]},{"label":"NEWSぽけまとめーる","data":[25,24,24,15,19,22,27,19,23,29,22,23,19,21,22,19,23,21,26,24,24,18,16,15,21,15,21,25]},{"label":"ネギ速","data":[26,32,30,30,30,31,32,32,29,27,24,28,27,20,25,31,25,23,25,29,30,22,28,28,28,21,32,40]},{"label":"ぶる速-VIP","data":[27,26,21,20,23,30,24,31,32,35,35,25,31,24,19,22,24,20,20,20,15,14,17,21,19,20,14,15]},{"label":"ラビット速報","data":[28,31,33,29,27,28,28,29,26,32,32,31,32,29,30,29,31,31,28,27,31,26,25,27,26,28,31,24]},{"label":"稲妻速報","data":[29,27,26,27,26,29,26,30,28,33,29,29,30,31,29,30,28,27,31,28,26,25,21,19,20,22,19,22]},{"label":"あいチャンネル","data":[30,51,18,24,61,18,25,16,34,30,15,17,14,28,27,16,29,28,12,32,35,38,63,31,32,30,42,34]},{"label":"カイカイ反応通信","data":[31,30,31,31,29,34,31,33,30,34,38,37,37,30,39,35,30,32,34,33,32,35,30,29,29,29,36,28]},{"label":"Jnews1","data":[32,58,97,101,101,101,45,34,80,82,101,101,101,91,69,54,77,56,70,101,101,101,101,101,59,101,101,68]},{"label":"日刊やきう速報","data":[33,37,36,33,34,41,30,37,33,36,34,35,36,33,40,36,33,34,32,31,33,29,34,32,31,34,30,31]},{"label":"まとめたニュース","data":[34,35,35,42,33,36,38,36,36,39,39,47,29,34,35,24,34,36,35,36,42,27,35,36,36,38,38,36]},{"label":"山田全自動のあるある日記","data":[35,28,27,32,35,42,35,40,40,42,37,32,33,39,41,37,37,43,33,41,101,101,101,77,62,31,29,30]},{"label":"もちログ","data":[36,36,40,37,41,32,34,67,61,62,53,53,58,63,51,45,36,39,41,42,37,37,32,35,34,26,22,19]},{"label":"ニュースBUZZ","data":[37,38,52,41,39,37,49,43,45,37,46,46,44,44,36,43,38,48,38,52,56,48,47,56,47,64,87,48]},{"label":"IT速報","data":[38,42,46,44,42,49,39,45,39,41,40,39,34,37,37,42,41,35,42,40,36,39,37,47,42,39,39,41]},{"label":"おーるじゃんる","data":[39,33,37,38,37,47,44,42,41,40,33,38,40,36,32,38,35,33,36,34,39,34,33,34,33,32,35,38]},{"label":"乃木坂46まとめ 1/46","data":[40,40,43,48,43,35,43,48,37,50,48,54,59,42,43,40,42,50,59,43,45,46,41,44,49,52,54,53]},{"label":"カエルDXのオタ活日記","data":[41,43,47,36,31,46,50,41,35,43,51,57,39,73,55,51,55,60,71,53,74,101,101,80,93,91,97,101]},{"label":"ふぇー速","data":[42,72,87,76,91,99,57,58,71,77,59,59,69,53,80,44,60,45,64,72,68,79,79,49,52,55,62,61]},{"label":"ぱんをたずねて2000里ちょい","data":[43,29,42,35,40,27,36,26,31,22,30,20,35,48,20,34,50,25,24,39,57,32,49,30,43,33,44,32]},{"label":"マンガと私と猫ブログ。","data":[44,71,45,59,45,33,29,28,24,25,41,30,46,32,42,28,21,38,73,30,23,40,24,38,23,36,26,20]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[45,39,32,34,38,39,42,39,38,45,45,40,43,45,34,39,46,44,39,35,34,36,38,37,38,41,37,45]},{"label":"超絶\"厳選\"ニュースまとめch","data":[46,89,101,101,101,83,101,69,60,89,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[47,41,41,43,44,43,41,47,49,49,43,42,38,35,31,14,13,11,15,17,29,31,31,39,37,35,28,37]},{"label":"うちの夫が糖尿病になっちゃった！","data":[48,45,44,46,46,44,46,46,44,44,44,44,47,46,46,46,43,41,43,37,43,41,43,43,40,42,43,44]},{"label":"サカラボ | サッカーまとめ速報","data":[49,59,77,64,66,61,67,77,43,56,61,69,77,64,47,57,58,66,68,70,61,58,75,58,67,65,68,63]},{"label":"人間まおと愉快な仲間たち","data":[50,47,50,47,48,50,52,50,47,46,55,41,41,40,44,47,45,40,44,44,41,47,46,53,55,53,58,72]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[51,46,48,40,47,101,47,44,42,101,42,43,42,38,56,101,101,101,101,101,101,101,101,101,101,101,92,101]},{"label":"【2ch】コピペ情報局","data":[52,34,39,45,32,45,37,35,48,38,47,45,50,41,45,48,40,37,37,38,38,44,45,41,35,43,40,42]},{"label":"VIP NEWS","data":[53,91,82,78,63,66,83,84,82,73,66,64,71,50,71,59,84,53,66,49,44,42,36,50,79,50,50,58]},{"label":"オタク.com －オタコム－","data":[54,49,49,52,49,51,53,53,50,52,49,51,53,54,50,50,48,49,46,50,51,45,42,40,50,44,55,46]},{"label":"あにこ便","data":[55,50,53,50,52,54,55,54,53,58,56,58,61,55,53,53,52,57,52,56,55,51,51,54,51,54,57,54]},{"label":"PS5速報！","data":[56,53,51,54,51,56,56,61,54,60,62,63,54,79,66,52,53,79,87,55,79,68,61,48,63,49,53,51]},{"label":"web漫画家やしろあずきの日常","data":[57,55,57,83,69,92,95,70,62,54,50,52,45,43,72,70,61,75,55,78,70,74,96,59,56,45,48,47]},{"label":"流速VIP","data":[58,70,75,69,59,59,68,55,55,63,75,72,84,75,65,68,64,63,61,64,62,62,59,71,69,68,70,69]},{"label":"気になる芸能まとめ","data":[59,57,58,60,65,58,51,52,65,69,64,73,66,52,49,67,63,72,75,73,64,60,65,69,74,61,67,60]},{"label":"海外の万国反応記＠海外の反応","data":[60,56,59,58,56,57,59,62,57,57,58,68,62,60,63,58,49,54,50,54,59,57,57,57,54,47,56,50]},{"label":"ずっと日曜日のターン","data":[61,82,101,77,82,101,72,87,63,70,85,78,78,82,101,101,91,78,77,62,48,59,66,79,100,101,49,70]},{"label":"馬鳥速報","data":[62,48,38,39,36,38,40,51,46,28,25,33,48,49,52,56,39,46,45,60,69,65,60,51,60,58,52,66]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[63,68,67,53,54,68,66,68,75,59,52,48,51,47,54,73,65,69,56,69,54,69,76,61,71,46,45,62]},{"label":"カオスちゃんねる","data":[64,62,55,51,50,55,54,49,52,61,63,62,60,57,57,61,54,42,47,45,40,49,54,62,57,59,47,49]},{"label":"De速","data":[65,63,84,101,80,71,101,101,95,98,94,81,72,72,73,94,92,97,95,84,47,56,68,74,85,74,73,75]},{"label":"ついんてーる速報","data":[66,60,54,72,58,64,58,71,78,66,67,61,65,62,59,65,73,58,51,63,65,55,53,65,77,78,66,67]},{"label":"ガールズVIPまとめ","data":[67,52,62,65,53,48,48,57,66,51,57,55,52,56,58,55,44,47,49,51,46,43,39,46,41,37,34,35]},{"label":"footballnet【サッカー5chまとめ】","data":[68,69,65,85,84,93,101,101,68,65,54,75,81,68,48,78,87,61,69,86,100,101,101,64,45,51,86,77]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[69,101,94,101,101,86,101,99,56,83,78,100,101,95,62,79,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"芸能人の気になる噂","data":[70,77,68,56,60,63,60,60,67,68,68,66,67,58,70,69,62,65,80,75,88,76,86,85,82,63,63,55]},{"label":"お料理速報","data":[71,61,90,81,81,75,91,74,83,88,80,60,57,71,75,62,83,73,54,74,81,70,77,96,91,73,69,88]},{"label":"FF14速報","data":[72,78,61,68,62,52,65,56,58,16,31,49,56,77,76,66,71,68,58,77,85,86,82,76,72,71,80,87]},{"label":"ライフハックちゃんねる弐式","data":[73,54,70,62,74,62,64,65,74,71,84,70,68,67,78,64,69,59,53,57,58,72,78,52,44,57,79,56]},{"label":"美容外科クリニックで働くパチ美の日常","data":[74,66,73,80,90,73,75,101,72,72,72,67,64,65,61,60,56,51,48,47,66,61,48,55,46,48,60,57]},{"label":"ダイエット速報＠2ちゃんねる","data":[75,88,99,93,98,101,76,91,94,101,101,101,101,101,101,101,101,101,92,71,87,53,97,100,101,98,101,96]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[76,80,71,67,68,65,63,75,79,76,74,76,73,80,82,76,66,71,57,48,67,73,72,60,65,56,51,65]},{"label":"まとめブレイド","data":[77,92,66,91,75,82,80,63,101,101,101,101,101,66,86,74,72,81,82,65,53,66,44,42,66,66,65,95]},{"label":"ポリー速報","data":[78,75,74,66,57,60,62,66,59,67,60,65,70,61,67,75,67,76,62,58,52,64,71,67,53,60,61,59]},{"label":"happy-go-lucky　-心地いい暮らしのコツ-","data":[79,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はーとログ","data":[80,76,80,84,88,74,81,85,91,85,91,85,92,86,92,101,89,101,88,82,86,85,93,81,80,94,89,73]},{"label":"鷹速@ホークスまとめブログ","data":[81,87,78,79,79,81,77,80,81,79,88,77,80,84,84,86,75,77,76,80,91,93,89,99,78,88,75,80]},{"label":"軍事・ミリタリー速報☆彡","data":[82,83,60,70,72,72,73,72,77,78,76,79,75,74,74,71,78,80,78,66,71,67,64,68,73,75,74,76]},{"label":"働く大人の非常識","data":[83,85,69,57,101,78,97,59,101,74,73,101,101,101,60,82,76,101,101,101,50,52,50,82,94,96,101,64]},{"label":"登山ちゃんねる","data":[84,101,98,86,101,96,93,96,101,101,101,101,101,101,100,84,101,85,79,81,94,96,101,101,88,82,98,100]},{"label":"世にも奇妙ななんかの話","data":[85,101,101,49,64,101,70,64,101,55,101,34,20,59,101,101,57,92,60,101,72,101,62,101,87,101,101,101]},{"label":"2chコピペ保存道場","data":[86,86,64,61,70,67,71,78,73,75,77,71,74,76,64,77,68,82,74,61,75,78,69,75,61,70,72,74]},{"label":"銃とバッジは置いていけ","data":[87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[88,101,101,101,93,101,101,101,76,91,101,101,101,101,79,100,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"投資ちゃんねる","data":[89,73,76,73,71,76,69,73,92,80,82,74,82,81,87,81,74,70,63,79,82,75,67,70,75,81,77,82]},{"label":"ミラクルファミリー","data":[90,101,63,97,101,101,101,101,89,47,71,80,101,101,101,101,80,55,72,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[91,67,93,101,86,84,79,101,101,101,99,95,101,101,96,97,101,100,101,101,101,99,88,101,101,101,95,92]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[92,101,101,101,101,79,84,79,87,84,100,97,99,87,83,92,94,67,86,89,83,87,92,101,101,92,91,86]},{"label":"MLB NEWS@まとめ","data":[93,95,101,101,97,87,87,83,88,81,86,101,85,89,91,80,95,101,101,95,99,101,101,87,96,95,99,83]},{"label":"ろぼ速VIP","data":[94,97,89,92,89,94,78,90,99,87,93,94,97,83,81,90,88,88,97,85,78,83,90,93,97,90,85,90]},{"label":"大艦巨砲主義！","data":[95,94,101,101,92,88,101,98,101,92,96,87,100,101,89,101,100,101,84,101,95,94,80,97,83,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[96,101,95,101,101,101,101,97,101,90,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"エクサワロス","data":[97,74,79,88,76,70,74,81,85,96,90,101,94,94,88,88,93,89,99,93,77,77,73,88,95,83,76,85]},{"label":"オタクニュース","data":[98,81,88,63,101,89,85,94,84,101,79,101,101,101,101,101,59,91,101,101,101,97,101,101,101,101,96,93]},{"label":"今日速2ch","data":[99,101,101,74,78,101,99,82,70,53,70,50,63,69,33,49,51,64,81,76,63,54,101,101,92,69,101,98]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[100,65,83,101,94,101,101,76,101,101,101,86,101,99,101,85,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,44,34,55,101,40,101,38,64,48,36,56,49,101,101,41,99,74,40,96,76,101,40,33,101,67,59,52]},{"label":"つつみのブログ","data":[101,64,101,75,101,101,101,101,69,101,65,101,101,101,101,63,101,62,101,68,101,101,56,101,58,101,64,101]},{"label":"最強ジャンプ放送局","data":[101,84,92,101,83,90,101,101,90,95,95,98,91,93,101,89,85,95,91,101,101,98,85,92,101,86,88,91]},{"label":"鈴木さん速報","data":[101,90,85,99,85,91,100,95,96,94,101,88,87,98,94,91,97,93,101,97,80,81,87,91,101,89,84,89]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,93,101,101,101,98,101,101,86,86,101,84,86,101,97,93,79,83,85,87,84,95,91,83,89,99,101,97]},{"label":"絵日記でございます。","data":[101,96,101,94,101,97,101,100,101,101,97,101,101,88,68,87,101,101,101,101,101,101,55,72,64,100,94,99]},{"label":"デジタルニューススレッド","data":[101,98,96,95,101,85,88,93,100,101,98,91,93,92,95,98,96,86,94,91,92,92,94,89,99,97,100,94]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,99,101,100,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,100,100,101,101,101,101,101,101,101,101,101,101,97,85,83,82,98,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,56,82,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,81,89,87,80,89,89,97,93,81,83,95,90,101,101,98,99,89,92,96,91,99,86,101,80,78,84]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,86,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,74,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[101,101,101,71,67,101,86,88,101,64,69,101,76,85,77,72,101,52,67,100,73,80,101,66,86,79,101,79]},{"label":"素敵な鬼女様","data":[101,101,101,87,99,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,71,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,90,73,53,101,101,101,101,101,101,101,51,101,101,47,101,101,46,101,101,101,101,48,101,41,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,98,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,101,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,77,69,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,72,82,101]},{"label":"バイク速報","data":[101,101,101,101,95,100,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,77,94,101,101,101,101,101,101,100,98,95,90,96,101,88,93,89,83,90,98,85,81,81]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,101,82,92,101,97,101,99,101,101,101,101,101,101,100,101,97,84,101,101,101,101,101,101]},{"label":"Aula","data":[101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[101,101,101,101,101,101,98,101,101,101,83,82,90,96,101,96,101,101,101,101,60,63,101,101,70,87,93,78]},{"label":"守口つーしん","data":[101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,51,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,101,101,101,101,101,98,101,89,90,96,101,101,101,101,90,83,101,101,88,70,63,81,84,90,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,94,98,82,81,84,76,77,71,71]},{"label":"はらぺこもんろーのまんが。","data":[101,101,101,101,101,101,101,101,101,100,101,93,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,92,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ちば通信 - 千葉県千葉市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,96,79,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,55,78,101,101,101,84,65,59,101,101,58,73,101,101,101,33]},{"label":"会社員倉間のまいにちホリデー！！","data":[101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,99,101,94,101,101,90,101,101,78,90,62,83,101]},{"label":"あなたは『おもしろマガジン』","data":[101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,70,101,101,86,101,101,101,101,101,95,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,98,95,101,101,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,100,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,19,33,84,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101]},{"label":"抱っこだ立つんだ揺れるんだ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101]}];
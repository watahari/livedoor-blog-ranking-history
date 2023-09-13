var labels = ['2023-08-17','2023-08-18','2023-08-19','2023-08-20','2023-08-21','2023-08-22','2023-08-23','2023-08-24','2023-08-25','2023-08-26','2023-08-27','2023-08-28','2023-08-29','2023-08-30','2023-08-31','2023-09-01','2023-09-02','2023-09-03','2023-09-04','2023-09-05','2023-09-06','2023-09-07','2023-09-08','2023-09-09','2023-09-10','2023-09-11','2023-09-12','2023-09-13',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2]},{"label":"はちま起稿","data":[3,3,4,4,3,3,3,3,3,5,5,3,3,3,3,4,4,3,3,3,4,3,3,4,5,5,3,3]},{"label":"ハムスター速報","data":[4,4,3,5,7,4,4,4,4,3,3,7,7,4,4,3,3,4,4,4,5,4,4,3,4,6,5,4]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,6,6,6,4,6,5,5,5,4,7,4,5,6,5,5,6,5,5,5,3,5,5,5,3,4,6,5]},{"label":"痛いニュース(ﾉ∀`)","data":[6,8,9,8,10,8,6,6,7,7,10,9,8,8,6,8,8,9,7,6,6,6,6,6,7,9,7,7]},{"label":"カラパイア","data":[7,13,5,21,9,16,23,24,18,13,4,5,4,5,7,6,5,6,11,13,10,7,9,8,6,3,4,9]},{"label":"人間まおと愉快な仲間たち","data":[8,7,8,7,6,7,14,40,43,44,57,47,42,40,35,39,39,38,47,39,38,35,33,34,40,44,41,39]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[9,5,7,3,5,5,7,7,6,6,6,6,6,7,8,7,7,7,6,7,7,8,7,7,8,7,8,8]},{"label":"アルファルファモザイク","data":[10,10,10,10,13,13,10,9,11,12,9,10,10,10,10,11,10,12,9,9,9,11,10,11,12,10,10,12]},{"label":"暇つぶしニュース","data":[11,9,11,15,11,9,8,12,12,9,11,11,11,11,11,12,11,10,10,10,11,10,11,12,9,11,12,11]},{"label":"哲学ニュースnwk","data":[12,11,14,13,16,11,12,11,10,8,14,15,13,14,14,14,12,11,12,11,12,12,12,10,11,12,11,10]},{"label":"【2ch】ニュー速クオリティ","data":[13,15,15,16,17,15,13,13,13,14,15,13,14,15,13,13,13,13,13,12,13,13,13,14,15,15,13,14]},{"label":"ヤゴヴのマンガ劇場","data":[14,12,13,12,14,12,11,10,9,11,8,8,9,9,9,9,9,8,8,8,8,9,8,9,10,8,9,6]},{"label":"もちログ","data":[15,14,12,11,12,10,9,8,8,10,12,12,12,12,12,10,52,87,89,90,88,90,84,99,71,82,82,60]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[16,17,16,20,22,20,16,16,17,17,20,19,17,16,15,15,15,17,17,15,17,16,15,17,16,17,15,13]},{"label":"ねいろ速報さん","data":[17,16,18,22,21,14,17,17,15,16,18,18,15,20,17,19,16,15,14,14,16,15,18,18,20,18,17,17]},{"label":"BIPブログ","data":[18,19,17,17,15,17,18,22,19,15,13,17,16,19,18,22,14,14,18,20,15,14,16,15,13,14,14,15]},{"label":"なんJ PRIDE","data":[19,20,21,19,19,19,20,19,21,18,17,22,20,24,20,21,21,18,19,17,21,17,14,13,14,13,16,16]},{"label":"なんJクエスト","data":[20,22,26,29,26,28,25,26,23,21,21,24,24,26,26,31,25,24,20,21,20,25,28,22,21,22,23,21]},{"label":"ぶる速-VIP","data":[21,23,24,26,28,21,21,23,14,19,24,27,22,18,25,23,20,19,16,18,19,21,22,27,25,27,20,20]},{"label":"おうまがタイムズ","data":[22,18,20,24,27,24,22,18,16,20,16,23,23,22,19,16,18,16,24,22,23,20,19,19,22,24,25,28]},{"label":"わんこーる速報！","data":[23,25,22,25,23,18,15,20,22,23,22,16,19,21,16,18,17,20,15,16,18,19,17,16,19,16,18,19]},{"label":"NEWSぽけまとめーる","data":[24,21,19,18,18,25,19,27,20,22,23,21,18,23,27,20,24,23,23,23,26,22,25,20,18,19,19,18]},{"label":"ゴールデンタイムズ","data":[25,26,25,35,25,27,27,35,29,34,30,34,27,30,30,24,22,29,25,24,29,27,20,23,26,28,28,27]},{"label":"あいチャンネル","data":[26,30,23,52,44,23,29,25,31,25,62,101,41,25,34,28,31,77,27,31,25,29,26,32,87,31,33,23]},{"label":"ラビット速報","data":[27,28,31,32,33,29,28,31,27,31,26,31,26,27,28,25,30,25,29,29,31,26,29,25,24,20,24,22]},{"label":"おーるじゃんる","data":[28,32,36,37,38,36,31,34,30,29,31,33,30,13,22,30,29,26,30,28,30,24,31,28,31,34,34,34]},{"label":"稲妻速報","data":[29,24,27,33,31,32,30,30,26,28,28,28,31,32,31,26,23,21,22,19,22,23,21,21,29,23,26,26]},{"label":"VIPPERな俺","data":[30,31,32,34,32,22,24,29,24,26,25,29,32,29,23,27,26,28,31,26,28,18,23,24,34,32,27,29]},{"label":"日刊やきう速報","data":[31,27,30,28,34,35,33,15,25,24,19,30,34,28,29,34,27,22,26,25,32,30,27,26,27,21,29,24]},{"label":"乃木坂46まとめ 1/46","data":[32,29,41,27,29,41,47,52,42,35,34,25,25,17,21,32,35,32,28,34,24,33,36,29,28,30,30,40]},{"label":"うしみつ-5chまとめ-","data":[33,38,37,36,36,34,38,33,32,33,32,32,33,34,37,33,32,30,32,30,33,28,30,30,33,35,35,33]},{"label":"世にも奇妙ななんかの話","data":[34,34,34,38,35,86,101,101,101,101,77,69,62,74,101,61,49,43,35,101,44,47,41,101,39,25,21,25]},{"label":"まとめたニュース","data":[35,33,48,47,53,31,35,32,33,37,37,41,39,39,41,38,43,37,43,38,40,39,38,39,38,36,40,44]},{"label":"マンガと私と猫ブログ。","data":[36,51,47,39,37,58,101,58,63,60,43,45,101,101,61,58,54,50,54,85,68,68,56,50,73,56,94,73]},{"label":"ネギ速","data":[37,40,43,43,40,38,34,37,35,36,27,26,28,36,33,29,28,31,33,36,34,34,35,35,30,26,31,37]},{"label":"山田全自動のあるある日記","data":[38,35,28,30,30,26,26,28,34,27,29,20,21,33,24,48,19,53,46,27,14,37,42,40,45,46,49,69]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[39,41,44,55,51,47,56,49,49,57,54,50,45,35,38,35,33,33,42,35,27,38,24,33,41,45,53,55]},{"label":"ゆっぺのゆる漫画ブログ","data":[40,97,80,101,43,100,37,67,101,38,74,101,37,60,32,37,62,69,101,33,35,60,101,31,32,73,39,31]},{"label":"チリツモブログ","data":[41,49,40,57,101,101,40,42,101,84,33,61,101,41,101,101,41,101,101,53,101,101,101,101,101,55,101,101]},{"label":"IT速報","data":[42,45,45,45,45,40,41,38,38,39,35,36,40,44,45,41,37,36,37,41,41,41,45,42,42,40,36,35]},{"label":"カイカイ反応通信","data":[43,43,42,41,49,39,43,41,37,40,36,40,35,37,36,36,34,35,38,37,39,36,34,38,36,29,22,30]},{"label":"気になる芸能まとめ","data":[44,46,49,44,46,43,44,44,50,45,42,39,44,47,46,42,46,41,41,42,43,42,44,43,43,41,46,41]},{"label":"ぱんをたずねて2000里ちょい","data":[45,64,46,59,42,49,39,55,39,53,39,53,43,42,42,55,40,48,44,45,37,45,37,41,35,43,32,42]},{"label":"ツイッター速報","data":[46,37,38,23,8,30,32,14,36,61,41,35,38,43,62,80,98,91,80,72,91,101,92,61,23,70,44,80]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[47,47,51,53,50,46,54,48,40,42,45,46,50,50,40,51,42,45,49,55,48,40,39,44,50,50,38,38]},{"label":"ふくよかまるみのピリカラ人生","data":[48,42,39,40,39,37,36,36,28,30,55,38,36,38,39,40,36,34,34,32,36,32,32,36,37,37,37,36]},{"label":"ニュースBUZZ","data":[49,48,56,49,64,42,49,47,92,47,50,42,75,48,70,57,84,44,59,51,47,49,52,53,48,47,55,53]},{"label":"働く大人の非常識","data":[50,101,75,87,60,52,75,68,71,101,85,101,55,58,83,101,75,67,62,75,71,58,74,101,88,68,85,51]},{"label":"はむらの毎日マンガ","data":[51,101,35,60,86,75,101,101,86,101,84,101,101,97,101,101,93,101,101,101,101,101,65,95,101,64,101,101]},{"label":"【2ch】コピペ情報局","data":[52,54,50,54,57,51,55,46,52,48,48,56,52,56,49,49,57,56,48,48,52,43,40,46,44,58,48,48]},{"label":"ポリー速報","data":[53,50,66,61,58,53,62,54,57,52,56,54,53,76,59,63,61,54,64,54,60,55,47,60,69,61,62,70]},{"label":"カオスちゃんねる","data":[54,52,58,51,54,50,52,50,55,43,52,49,56,65,53,47,45,47,52,40,49,54,46,49,54,60,52,54]},{"label":"オタク.com －オタコム－","data":[55,55,59,56,52,48,51,43,47,51,51,48,47,49,44,46,44,49,51,44,51,44,43,47,51,53,51,49]},{"label":"馬鳥速報","data":[56,53,70,68,71,76,48,63,41,58,61,44,49,57,51,43,55,58,66,66,74,71,48,74,62,83,66,67]},{"label":"ガールズVIPまとめ","data":[57,44,54,58,47,54,46,39,54,41,40,37,46,46,43,44,51,46,39,43,45,48,53,48,46,51,42,47]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[58,101,97,101,101,77,101,96,101,101,101,67,70,66,47,69,74,101,101,101,101,84,86,89,76,86,88,66]},{"label":"なんJ（まとめては）いかんのか？","data":[59,63,61,48,56,89,83,45,53,46,49,59,78,70,64,60,50,57,56,98,83,85,67,66,57,57,74,82]},{"label":"芸能人の気になる噂","data":[60,56,53,62,61,56,57,57,58,67,64,74,71,81,66,73,63,60,57,58,66,65,66,54,52,67,84,79]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[61,60,52,42,48,45,50,53,44,49,66,43,51,54,50,50,48,42,40,49,50,46,51,51,49,49,56,52]},{"label":"ついんてーる速報","data":[62,62,71,70,78,57,53,64,65,59,71,58,61,62,56,54,67,59,67,64,59,79,76,57,72,62,50,58]},{"label":"ライフハックちゃんねる弐式","data":[63,58,72,75,83,62,66,72,81,77,87,83,63,63,58,74,71,78,72,65,61,61,61,58,56,81,73,74]},{"label":"De速","data":[64,69,62,46,59,33,58,56,60,50,38,57,67,73,54,45,47,52,45,47,46,50,50,37,47,59,54,50]},{"label":"流速VIP","data":[65,61,67,71,68,69,64,60,66,74,58,60,58,61,57,59,68,65,70,68,64,69,62,59,58,78,60,72]},{"label":"青木ぼんろの日常","data":[66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うちの夫が糖尿病になっちゃった！","data":[67,65,69,63,63,60,63,61,59,56,59,63,60,64,63,66,64,68,71,67,69,62,58,55,55,66,61,61]},{"label":"はーとログ","data":[68,70,74,72,72,80,82,77,74,73,81,76,79,85,74,72,70,74,82,83,75,83,70,73,77,77,80,85]},{"label":"海外の万国反応記＠海外の反応","data":[69,57,64,64,62,63,59,62,61,64,60,75,59,67,60,56,56,39,61,57,53,73,55,52,59,54,57,68]},{"label":"今日速2ch","data":[70,96,55,69,65,84,67,91,101,101,101,66,74,52,85,67,101,61,50,91,101,64,73,101,101,48,47,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[71,100,95,80,101,101,80,84,77,89,86,79,101,95,97,99,87,89,101,89,86,89,96,65,83,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[72,75,87,79,80,71,88,90,69,78,67,70,72,78,73,78,89,83,100,71,78,75,81,75,80,79,75,81]},{"label":"パチンコ・パチスロ.com","data":[73,73,63,84,70,44,42,51,46,55,69,81,76,71,68,65,88,72,53,76,56,81,60,87,75,76,72,63]},{"label":"あにこ便","data":[74,71,73,73,69,64,68,73,73,70,68,65,64,75,71,68,69,62,65,61,67,70,72,67,63,69,69,75]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[75,87,79,94,88,95,91,78,75,71,83,82,85,98,89,92,92,88,79,87,101,88,101,92,90,101,95,89]},{"label":"投資ちゃんねる","data":[76,78,86,83,79,88,89,80,90,86,90,68,94,91,93,84,83,73,85,80,79,87,90,80,81,96,81,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[77,77,89,86,87,82,78,75,70,65,63,64,54,55,48,52,53,55,55,52,55,53,54,62,67,74,67,56]},{"label":"Rinのシンプルライフ","data":[78,36,29,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[79,79,77,65,67,67,74,83,82,69,70,78,82,86,80,81,79,80,77,63,70,31,64,77,70,80,70,86]},{"label":"ダイエット速報＠2ちゃんねる","data":[80,101,101,101,101,99,101,101,96,101,101,101,84,101,101,101,101,101,101,78,84,99,97,101,94,94,77,101]},{"label":"footballnet【サッカー5chまとめ】","data":[81,74,78,85,77,96,79,66,45,76,72,85,95,101,101,101,101,101,84,70,101,101,101,101,101,42,59,76]},{"label":"軍事・ミリタリー速報☆彡","data":[82,76,85,81,84,83,73,81,72,72,65,80,81,83,77,64,72,64,74,74,73,72,71,72,68,84,71,78]},{"label":"2chコピペ保存道場","data":[83,83,82,92,94,73,70,79,79,81,88,87,87,80,78,76,73,70,73,69,80,74,77,70,74,87,78,83]},{"label":"PS5速報！","data":[84,95,93,90,75,68,65,59,62,54,53,52,48,53,52,53,58,66,75,59,54,52,59,79,60,65,64,62]},{"label":"MLB NEWS@まとめ","data":[85,68,81,66,73,72,92,85,56,63,76,73,77,82,79,82,85,76,86,101,77,63,85,84,92,91,93,101]},{"label":"バイク速報","data":[86,82,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[87,67,68,78,93,81,85,87,80,66,75,88,90,93,75,77,77,81,87,88,85,82,79,68,82,98,83,84]},{"label":"ろぼ速VIP","data":[88,99,101,101,100,94,93,99,99,101,101,98,98,87,101,96,101,97,95,101,94,91,101,91,96,101,89,101]},{"label":"へー子の漫画日和","data":[89,93,91,88,99,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[90,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[91,72,60,50,66,78,69,71,48,75,100,92,83,101,101,89,101,82,101,93,87,92,89,85,78,92,91,96]},{"label":"まとめ太郎！","data":[92,101,96,95,92,98,101,101,88,101,101,101,99,101,101,101,101,101,101,101,101,101,100,101,101,101,101,87]},{"label":"VIP NEWS","data":[93,101,101,74,85,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[94,90,92,101,98,70,76,76,87,82,101,99,101,101,99,94,101,98,93,101,82,86,88,90,95,97,97,101]},{"label":"デジタルニューススレッド","data":[95,101,101,101,101,97,100,100,97,100,101,93,101,101,92,97,97,100,101,101,93,93,91,88,97,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[96,86,90,101,101,66,60,94,83,92,92,72,96,88,72,75,90,99,68,46,63,67,69,96,85,89,58,45]},{"label":"FF14速報","data":[97,59,76,101,101,101,77,89,76,93,101,90,80,72,88,87,99,101,97,94,97,100,93,82,86,100,90,99]},{"label":"サカラボ | サッカーまとめ速報","data":[98,66,65,67,55,55,61,69,67,85,73,86,65,84,69,70,80,75,63,73,72,77,87,78,66,33,45,46]},{"label":"Jnews1","data":[99,101,101,14,20,79,101,101,51,80,47,55,91,51,86,101,101,95,36,79,81,101,101,101,17,39,96,32]},{"label":"お料理速報","data":[100,89,101,100,82,87,101,93,89,94,101,84,93,101,87,88,94,101,90,101,101,101,95,101,100,101,100,93]},{"label":"野球の記録で話したい","data":[101,39,33,76,101,101,101,95,101,101,101,101,101,101,101,101,101,27,21,50,98,101,101,101,101,101,101,101]},{"label":"SAMURAI Footballers","data":[101,80,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,52,65,90]},{"label":"絵日記でございます。","data":[101,81,83,77,81,59,71,88,98,95,101,51,57,89,91,95,101,101,101,101,99,101,75,69,93,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,84,88,82,91,92,101,101,78,79,95,101,101,101,100,90,78,63,78,100,101,95,101,86,65,72,76,92]},{"label":"ずっと日曜日のターン","data":[101,85,57,99,101,61,81,74,64,87,97,71,73,90,55,71,60,92,60,84,62,94,63,45,53,101,68,57]},{"label":"やみ速@なんJ西武まとめ","data":[101,88,101,101,101,101,101,101,91,91,101,101,101,94,76,85,101,96,101,95,92,101,101,97,101,93,101,101]},{"label":"あおばブログ","data":[101,91,101,97,101,101,87,70,101,101,79,101,92,77,101,83,101,79,101,86,65,101,83,71,101,95,101,88]},{"label":"登山ちゃんねる","data":[101,92,99,101,95,91,101,101,101,101,98,101,101,101,101,101,100,90,92,101,95,101,101,94,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,98,101,98,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,84,101,89,101,72,21,101,83,101,101,101,101,82,17,59,40,101,101,101,57,101,76,101,101,98,91]},{"label":"日向坂46まとめ速報","data":[101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,98,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,9,24,74,101,101,101,101,101,101,101,31,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,31,41,101,95,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,99,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,89,101,101,101,82,68,62,46,62,88,96,84,101,96,101,94,101,101,96,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,101,101,91,74,65,94,92,95,101,80,89,68,69,96,100,101,101,83,99,101,66,80,101,98,90,87,59]},{"label":"まとめロッテ！","data":[101,101,101,93,101,85,90,101,101,101,89,96,89,59,101,79,101,94,98,97,101,101,101,83,79,99,86,98]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,96,90,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,63,79,94]},{"label":"おたみの日々","data":[101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,96,101,101,101,101,101,101,101,101,101,94,101,95,101,101,101,90,80,78,81,101,101,101,97]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,38,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,90,101,101,101,101,101,101,97,101,101,101,101,101,101,92,101,101,99,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,45,101,101,101,101,101,101,45,101,101,101,101,101,101,42,101,101,101,101,101,101,43]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,84,86,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,101,101,101,101,101,86,101,101,96,94,101,101,100,101,86,65,101,76,56,100,59,49,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,101,101,101,97,98,94,90,99,94,86,92,81,101,82,71,81,81,76,76,68,64,61,71,63,64]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,98,101,101,101,96,101,101,101,101,101,76,93,99,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,99,101,100,99,101,101,100,99,101,101,101,101,101,96,101,101,101,101,101,101,101,101]},{"label":"千曲がり奮闘記～紆余曲折の育児記録～","data":[101,101,101,101,101,101,101,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,93,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"抱っこだ立つんだ揺れるんだ","data":[101,101,101,101,101,101,101,101,101,32,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,68,101,101,69,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,101,101,101,101,101,101,101,88,91,77,66,79,65,62,66,101,69,62,57,56,57,63,91,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,96,101,101,56,64,101,101,101]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,98,101,98,101,101,101,101]},{"label":"スイスの街角から","data":[101,101,101,101,101,101,101,101,101,101,44,14,29,68,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,98,91,101,101,101,101,101,98,100,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"etusivu note","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,67,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,91,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,38,51,58,77,58,51,94,101,101,101,92,71]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,84,101,43,65]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101]},{"label":"ガイックとのフランス暮らし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,101,78,82,101,89,85,101,77]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,101]},{"label":"パチ美のマンガな日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,99,95]},{"label":"Samurai GOAL","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101]},{"label":"まとめさん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]}];
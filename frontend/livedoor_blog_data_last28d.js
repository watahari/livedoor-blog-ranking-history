var labels = ['2023-01-04','2023-01-05','2023-01-06','2023-01-07','2023-01-08','2023-01-09','2023-01-10','2023-01-11','2023-01-12','2023-01-13','2023-01-14','2023-01-15','2023-01-16','2023-01-17','2023-01-18','2023-01-19','2023-01-20','2023-01-21','2023-01-22','2023-01-23','2023-01-24','2023-01-25','2023-01-26','2023-01-27','2023-01-28','2023-01-29','2023-01-30','2023-01-31',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,3,2,1]},{"label":"まめきちまめこニートの日常","data":[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,1,2]},{"label":"はちま起稿","data":[3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,4,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,6,6,4,5,5,5,6,7,6,5,4,5,5,4,6,5,6,6,7,7,8,6,6,8,8,8]},{"label":"人間まおと愉快な仲間たち","data":[5,5,5,7,8,13,25,31,25,37,53,62,67,62,57,58,58,45,49,50,47,50,47,48,50,52,50,47]},{"label":"暇つぶしニュース","data":[6,6,8,8,7,6,6,7,7,6,7,7,6,7,7,7,8,8,7,8,9,6,6,7,8,9,9,7]},{"label":"わんこーる速報！","data":[7,11,12,12,14,10,9,10,11,12,10,9,12,13,13,13,14,14,13,11,13,12,12,12,13,15,12,10]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[8,9,10,9,11,12,11,9,10,11,8,11,10,8,10,11,11,10,11,12,12,9,11,11,11,13,13,13]},{"label":"【2ch】ニュー速クオリティ","data":[9,10,9,10,10,9,10,11,9,10,9,10,8,9,8,8,10,9,10,13,11,11,10,9,10,11,10,11]},{"label":"哲学ニュースnwk","data":[10,12,14,15,13,11,13,12,14,13,13,12,11,12,11,10,12,13,12,14,15,14,13,13,14,14,17,14]},{"label":"ハムスター速報","data":[11,7,7,5,6,8,7,6,5,4,4,6,7,6,6,6,5,6,9,7,5,5,5,4,4,6,7,6]},{"label":"なんJ PRIDE","data":[12,15,18,18,18,18,20,18,19,17,20,18,17,17,18,16,16,19,19,19,20,22,26,22,21,18,18,18]},{"label":"BIPブログ","data":[13,13,11,13,12,15,19,15,24,22,18,15,14,19,16,20,20,20,22,20,22,28,21,18,26,19,23,25]},{"label":"痛いニュース(ﾉ∀`)","data":[14,16,16,14,15,19,18,16,18,21,15,19,20,24,22,15,18,18,14,16,19,15,17,14,16,17,20,20]},{"label":"おうまがタイムズ","data":[15,17,15,17,17,17,12,13,12,14,14,13,15,14,12,14,17,16,15,17,16,19,19,15,17,16,15,15]},{"label":"ぶる速-VIP","data":[16,28,22,23,21,25,26,28,29,30,24,27,22,23,21,26,25,29,30,27,26,21,20,23,30,24,31,32]},{"label":"カラパイア","data":[17,14,17,16,16,14,14,21,23,25,27,20,13,11,14,19,7,11,5,3,10,10,9,10,12,10,11,12]},{"label":"ゴールデンタイムズ","data":[18,21,23,27,23,24,22,23,27,26,23,23,23,25,24,24,27,21,25,23,21,25,28,21,23,22,25,22]},{"label":"ねいろ速報さん","data":[19,18,19,19,19,20,15,20,17,16,19,16,19,21,23,21,22,23,21,21,18,20,22,20,24,21,21,17]},{"label":"ヤゴヴのマンガ劇場","data":[20,20,13,11,9,7,8,8,8,9,11,8,9,10,9,9,9,7,8,10,8,8,7,8,7,7,5,5]},{"label":"ラビット速報","data":[21,24,28,30,26,30,27,26,28,28,29,26,24,27,27,28,31,27,24,28,31,33,29,27,28,28,29,26]},{"label":"なんJクエスト","data":[22,26,24,26,28,23,24,27,26,27,28,22,28,29,28,27,28,26,26,24,25,23,23,24,25,23,24,27]},{"label":"NEWSぽけまとめーる","data":[23,19,26,22,29,16,16,14,16,15,17,17,16,20,19,22,23,24,23,25,24,24,15,19,22,27,19,23]},{"label":"稲妻速報","data":[24,30,29,31,30,22,23,25,22,23,22,29,27,28,26,23,24,28,27,29,27,26,27,26,29,26,30,28]},{"label":"不思議.net","data":[25,8,4,4,5,4,4,4,3,5,5,4,5,4,4,5,4,4,3,5,4,4,4,5,5,5,4,4]},{"label":"山田全自動のあるある日記","data":[26,27,27,33,38,37,37,34,37,38,25,24,48,45,48,37,38,46,42,35,28,27,32,35,42,35,40,40]},{"label":"VIPPERな俺","data":[27,23,25,24,22,28,29,22,15,20,21,28,29,22,25,25,21,17,20,22,23,29,25,25,20,33,14,19]},{"label":"日刊やきう速報","data":[28,29,30,21,27,31,33,29,32,32,37,34,30,35,29,29,32,38,33,33,37,36,33,34,41,30,37,33]},{"label":"ネギ速","data":[29,32,38,38,47,50,43,43,46,40,48,42,38,37,36,33,36,39,31,26,32,30,30,30,31,32,32,29]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[30,22,89,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あいチャンネル","data":[31,45,66,73,76,27,28,24,13,19,12,33,26,15,17,31,34,12,29,30,51,18,24,61,18,25,16,34]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[32,33,40,32,34,38,42,37,43,34,43,39,41,36,35,36,44,31,35,45,39,32,34,38,39,42,39,38]},{"label":"IT速報","data":[33,31,31,37,36,33,32,36,40,41,40,37,34,31,33,40,41,40,37,38,42,46,44,42,49,39,45,39]},{"label":"はむらの毎日マンガ","data":[34,25,20,20,20,21,17,19,20,18,34,25,18,18,15,12,13,25,16,15,14,13,16,28,15,12,27,16]},{"label":"ツイッター速報","data":[35,34,44,55,66,76,55,55,58,8,16,38,33,32,38,18,15,22,18,9,6,16,18,17,9,1,6,9]},{"label":"乃木坂46まとめ 1/46","data":[36,36,34,41,35,34,36,38,38,35,41,31,42,38,39,35,43,37,47,40,40,43,48,43,35,43,48,37]},{"label":"まとめたニュース","data":[37,40,37,36,37,36,30,33,31,31,31,35,35,33,30,32,35,32,45,34,35,35,42,33,36,38,36,36]},{"label":"おーるじゃんる","data":[38,41,33,39,39,41,38,44,39,36,36,40,44,34,34,38,45,34,38,39,33,37,38,37,47,44,42,41]},{"label":"VIP NEWS","data":[39,62,59,63,49,43,58,68,63,60,63,87,43,69,86,101,99,60,41,53,91,82,78,63,66,83,84,82]},{"label":"【2ch】コピペ情報局","data":[40,38,36,35,41,42,35,47,42,42,51,36,45,46,40,34,42,42,39,52,34,39,45,32,45,37,35,48]},{"label":"もちログ","data":[41,42,39,46,42,40,39,41,36,101,101,101,101,73,71,59,63,56,44,36,36,40,37,41,32,34,67,61]},{"label":"うちの夫が糖尿病になっちゃった！","data":[42,48,46,45,44,49,48,51,45,47,46,45,47,43,41,43,46,41,46,48,45,44,46,46,44,46,46,44]},{"label":"芸能人の気になる噂","data":[43,56,49,56,52,64,59,64,62,79,62,55,63,54,49,66,59,57,59,70,77,68,56,60,63,60,60,67]},{"label":"ニュースBUZZ","data":[44,37,35,28,32,35,31,40,33,44,45,41,32,40,37,56,33,43,40,37,38,52,41,39,37,49,43,45]},{"label":"流速VIP","data":[45,55,54,58,59,58,60,73,66,67,68,66,61,66,51,63,62,66,69,58,70,75,69,59,59,68,55,55]},{"label":"オタク.com －オタコム－","data":[46,44,45,49,45,47,47,53,49,54,47,47,51,42,43,53,52,51,54,54,49,49,52,49,51,53,53,50]},{"label":"気になる芸能まとめ","data":[47,50,56,59,53,57,49,63,69,65,65,57,62,64,67,72,67,67,56,59,57,58,60,65,58,51,52,65]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[48,51,61,53,68,45,44,61,61,49,49,51,53,63,55,44,54,64,60,63,68,67,53,54,68,66,68,75]},{"label":"今日速2ch","data":[49,35,53,57,67,99,66,48,44,81,101,101,55,44,46,41,53,63,43,99,101,101,74,78,101,99,82,70]},{"label":"footballnet【サッカー5chまとめ】","data":[50,72,91,90,63,60,63,76,95,52,32,48,37,50,54,83,94,91,90,68,69,65,85,84,93,101,101,68]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[51,54,47,52,57,46,46,54,55,59,54,43,52,47,42,47,49,50,48,47,41,41,43,44,43,41,47,49]},{"label":"ポリー速報","data":[52,49,52,47,50,53,54,50,59,64,58,64,56,61,63,55,64,61,67,78,75,74,66,57,60,62,66,59]},{"label":"カオスちゃんねる","data":[53,43,41,44,48,51,45,57,52,48,57,56,60,55,52,67,51,58,58,64,62,55,51,50,55,54,49,52]},{"label":"サカラボ | サッカーまとめ速報","data":[54,46,51,51,46,44,52,59,74,55,59,61,49,52,58,52,65,68,63,49,59,77,64,66,61,67,77,43]},{"label":"超絶\"厳選\"ニュースまとめch","data":[55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,89,101,101,101,83,101,69,60]},{"label":"海外の万国反応記＠海外の反応","data":[56,70,55,65,54,61,68,66,56,62,52,60,65,56,59,64,61,59,57,60,56,59,58,56,57,59,62,57]},{"label":"ついんてーる速報","data":[57,77,65,72,78,62,65,70,73,71,71,79,80,78,69,79,81,70,66,66,60,54,72,58,64,58,71,78]},{"label":"投資ちゃんねる","data":[58,71,77,77,73,69,72,78,82,76,81,94,76,86,87,88,85,76,73,89,73,76,73,71,76,69,73,92]},{"label":"ガールズVIPまとめ","data":[59,63,79,87,82,81,61,42,75,69,70,69,68,60,76,69,69,62,65,67,52,62,65,53,48,48,57,66]},{"label":"鷹速@ホークスまとめブログ","data":[60,86,85,64,70,67,79,62,70,85,56,67,77,79,77,65,76,81,70,81,87,78,79,79,81,77,80,81]},{"label":"あにこ便","data":[61,66,64,61,56,48,41,49,51,46,50,46,50,49,47,50,55,53,51,55,50,53,50,52,54,55,54,53]},{"label":"2chコピペ保存道場","data":[62,58,73,68,58,65,71,69,76,77,77,63,82,70,65,77,70,69,72,86,86,64,61,70,67,71,78,73]},{"label":"カイカイ反応通信","data":[63,60,32,29,33,32,34,32,30,33,30,32,31,30,31,30,30,30,32,31,30,31,31,29,34,31,33,30]},{"label":"まとめブレイド","data":[64,53,69,91,62,101,85,100,101,57,75,93,101,81,92,81,74,101,78,77,92,66,91,75,82,80,63,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[65,101,101,101,77,83,75,85,101,58,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[66,47,75,50,69,55,98,101,101,101,101,101,101,101,101,101,95,101,88,101,101,101,101,101,77,94,101,101]},{"label":"ずっと日曜日のターン","data":[67,64,81,84,80,66,81,101,101,66,73,59,54,75,93,84,77,71,89,61,82,101,77,82,101,72,87,63]},{"label":"ふぇー速","data":[68,75,50,54,64,90,56,71,92,92,55,52,84,93,73,70,82,101,62,42,72,87,76,91,99,57,58,71]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[69,69,68,67,72,73,76,65,67,68,42,58,78,77,62,71,73,73,71,76,80,71,67,68,65,63,75,79]},{"label":"MLB NEWS@まとめ","data":[70,73,101,83,75,88,73,77,87,83,101,90,90,72,74,91,78,92,91,93,95,101,101,97,87,87,83,88]},{"label":"Jnews1","data":[71,101,101,101,25,39,101,101,68,74,101,101,101,59,44,42,39,86,34,32,58,97,101,101,101,45,34,80]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[72,101,63,66,101,71,62,101,53,45,44,44,40,39,45,48,48,44,101,51,46,48,40,47,101,47,44,42]},{"label":"軍事・ミリタリー速報☆彡","data":[73,74,67,70,65,70,74,67,72,73,66,72,85,57,61,75,71,74,68,82,83,60,70,72,72,73,72,77]},{"label":"絵日記でございます。","data":[74,82,88,86,101,101,101,101,101,78,74,71,66,48,72,82,87,97,95,101,96,101,94,101,97,101,100,101]},{"label":"web漫画家やしろあずきの日常","data":[75,76,43,42,51,72,53,39,50,51,67,54,59,53,60,51,37,48,52,57,55,57,83,69,92,95,70,62]},{"label":"ライフハックちゃんねる弐式","data":[76,57,57,62,71,59,70,72,80,61,64,53,58,85,68,60,68,72,64,73,54,70,62,74,62,64,65,74]},{"label":"なんJ（まとめては）いかんのか？","data":[77,93,101,100,101,92,101,91,101,101,101,97,88,101,101,57,101,101,101,101,101,101,101,101,101,98,101,101]},{"label":"ぱんをたずねて2000里ちょい","data":[78,101,101,40,31,29,40,30,41,29,35,50,39,16,32,45,26,36,28,43,29,42,35,40,27,36,26,31]},{"label":"馬鳥速報","data":[79,85,74,60,91,101,69,35,34,39,33,49,64,51,50,61,50,55,61,62,48,38,39,36,38,40,51,46]},{"label":"なんJ　高校野球まとめ速報","data":[80,101,98,101,101,101,101,101,98,101,92,101,99,101,101,101,101,101,101,101,101,86,101,101,101,96,101,101]},{"label":"オタクニュース","data":[81,90,87,101,101,101,101,101,101,101,87,70,101,101,101,101,88,98,101,98,81,88,63,101,89,85,94,84]},{"label":"エクサワロス","data":[82,78,93,94,97,101,93,84,91,88,101,99,92,83,94,93,98,85,80,97,74,79,88,76,70,74,81,85]},{"label":"ろぼ速VIP","data":[83,101,101,101,101,85,94,89,86,91,90,75,81,87,80,92,90,93,86,94,97,89,92,89,94,78,90,99]},{"label":"阪神タイガースちゃんねる","data":[84,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[85,67,101,69,61,101,101,101,57,101,101,101,69,68,101,101,101,101,101,101,101,101,71,67,101,86,88,101]},{"label":"PS5速報！","data":[86,61,60,82,99,56,78,60,79,80,69,80,72,80,53,49,57,54,53,56,53,51,54,51,56,56,61,54]},{"label":"美容外科クリニックで働くパチ美の日常","data":[87,101,80,88,101,101,101,101,101,75,78,91,70,71,75,90,75,84,77,74,66,73,80,90,73,75,101,72]},{"label":"お料理速報","data":[88,59,71,79,87,78,64,92,78,72,76,78,75,67,82,73,72,75,97,71,61,90,81,81,75,91,74,83]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101]},{"label":"ジャンプ速報","data":[90,95,96,101,101,91,86,101,99,96,98,89,96,101,101,95,91,101,100,91,67,93,101,86,84,79,101,101]},{"label":"登山ちゃんねる","data":[91,94,83,101,92,82,83,74,93,99,97,73,101,101,95,96,101,95,81,84,101,98,86,101,96,93,96,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[92,89,101,101,101,80,101,80,100,101,84,96,101,101,101,101,101,80,94,101,93,101,101,101,98,101,101,86]},{"label":"FF14速報","data":[93,101,90,80,94,97,101,52,48,50,61,85,73,65,70,76,60,77,76,72,78,61,68,62,52,65,56,58]},{"label":"カエルDXのオタ活日記","data":[94,87,99,101,60,68,50,46,64,82,88,76,86,88,101,62,56,47,50,41,43,47,36,31,46,50,41,35]},{"label":"デジタルニューススレッド","data":[95,88,84,78,84,95,84,87,88,97,94,86,91,99,85,94,92,99,85,101,98,96,95,101,85,88,93,100]},{"label":"うしみつ-5chまとめ-","data":[96,39,21,25,24,26,21,17,21,24,26,21,21,26,20,17,19,15,17,18,17,17,14,16,19,20,22,21]},{"label":"最強ジャンプ放送局","data":[97,97,101,101,85,98,97,97,101,101,100,101,101,100,96,101,101,101,101,101,84,92,101,83,90,101,101,90]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[98,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[99,80,78,101,100,101,100,101,101,101,101,101,83,89,101,101,101,87,87,69,101,94,101,101,86,101,99,56]},{"label":"ダイエット速報＠2ちゃんねる","data":[100,68,76,101,83,94,57,75,84,101,85,95,74,101,100,86,80,65,98,75,88,99,93,98,101,76,91,94]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,52,48,48,55,52,67,58,77,56,82,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,65,42,43,43,54,51,56,60,43,80,65,46,41,66,54,40,35,36,44,71,45,59,45,33,29,28,24]},{"label":"働く大人の非常識","data":[101,79,101,76,101,101,101,101,65,87,101,101,93,97,97,74,101,82,101,83,85,69,57,101,78,97,59,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,81,72,75,74,86,87,81,71,70,72,68,89,101,64,78,79,78,82,92,101,101,101,101,79,84,79,87]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,83,101,101,101,101,101,86,101,101,99,30,57,82,91,101,101,101,101,101,101,56,82,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,84,94,93,93,79,92,82,83,84,86,84,100,84,81,101,101,101,101,100,65,83,101,94,101,101,76,101]},{"label":"なんJ・2ch（5ちゃんねる）実況まとめにゅーす","data":[101,91,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はーとログ","data":[101,92,92,101,79,89,95,93,81,101,91,81,79,76,83,85,84,83,74,80,76,80,84,88,74,81,85,91]},{"label":"大艦巨砲主義！","data":[101,96,97,101,86,101,101,94,85,90,93,74,101,101,98,97,96,96,101,95,94,101,101,92,88,101,98,101]},{"label":"De速","data":[101,100,101,97,81,87,82,101,101,101,101,88,101,74,79,101,101,94,75,65,63,84,101,80,71,101,101,95]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,58,101,40,63,101,45,35,63,38,101,36,58,101,39,29,52,101,101,44,34,55,101,40,101,38,64]},{"label":"野球の記録で話したい","data":[101,101,62,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,70,71,89,101,101,101,101,53,60,101,101,101,56,101,66,101,83,90,101,63,97,101,101,101,101,89]},{"label":"今日もブブはからまわり。","data":[101,101,82,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[101,101,86,96,96,100,88,83,89,101,83,83,95,91,78,87,100,88,101,101,90,85,99,85,91,100,95,96]},{"label":"パチンコ・パチスロ.com","data":[101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]},{"label":"アニはつ -アニメ発信場-","data":[101,101,100,101,101,101,101,99,97,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,34,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,101,101,101,101]},{"label":"香香背男のblog","data":[101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,85,98,84,80,79,96,101,101,100,87,94,101,100,101,100,101,101,101,81,89,87,80,89,89,97]},{"label":"はらぺこもんろーのまんが。","data":[101,101,101,92,101,96,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカッと連載ブログ（スカログ）","data":[101,101,101,95,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぬこー様ちゃんの大好き絵日記","data":[101,101,101,99,95,101,101,101,101,101,101,101,101,101,101,101,89,89,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,90,101,90,96,101,101,101,101,71,98,84,80,83,90,93,101,100,100,101,101,101,101,101,101]},{"label":"るぅのおいしいうちごはん","data":[101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,75,77,88,94,95,89,92,98,95,90,98,101,101,101,101,99,101,100,96,101,101,101,101]},{"label":"ホリー絵日記","data":[101,101,101,101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,89,98,101,101,101,101,101,101,101,101,101,101,99,96,101,95,101,101,101,101,97,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,101,101,91,101,90,98,101,98,101,101,101,89,101,33,55,85,101,101,49,64,101,70,64,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,69,61,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,101,101,95,101,86,95,101,101,101,88,101,86,79,92,101,101,101,101,101,101,82,92,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,101,101,47,101,39,77,101,101,101,46,47,49,101,101,101,101,90,73,53,101,101,101]},{"label":"Flower Cage｜カリーナの宝塚依存症ブログ","data":[101,101,101,101,101,101,101,101,54,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,93,101,101,101,101,99,101,101,101,101,101,101,101,87,99,101,90,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,14,25,92,89,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,88,101,101,101,93,101,101,101,76]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,95,100,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101,101,101,64,101,75,101,101,101,101,69]},{"label":"古オタクの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ひとこま作者","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,87,101,101,101,101,101,101,101,101]},{"label":"happy-go-lucky　-心地いい暮らしのコツ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,79,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"Aula","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101]},{"label":"守口つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93]}];
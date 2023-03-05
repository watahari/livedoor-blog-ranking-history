var labels = ['2023-02-06','2023-02-07','2023-02-08','2023-02-09','2023-02-10','2023-02-11','2023-02-12','2023-02-13','2023-02-14','2023-02-15','2023-02-16','2023-02-17','2023-02-18','2023-02-19','2023-02-20','2023-02-21','2023-02-22','2023-02-23','2023-02-24','2023-02-25','2023-02-26','2023-02-27','2023-02-28','2023-03-01','2023-03-02','2023-03-03','2023-03-04','2023-03-05',];var datasets = [{"label":"ツイッター速報","data":[1,4,2,4,5,7,10,16,29,24,30,40,33,43,74,45,27,27,23,22,31,49,43,24,21,26,23,34]},{"label":"まめきちまめこニートの日常","data":[2,1,1,1,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,3,2,2,1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2]},{"label":"はちま起稿","data":[4,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,5,5,5,6,5,6,5,4,5,4,5,5,5,5,5,5,6,6,7,7,9,8,8,9,7,9,10]},{"label":"ハムスター速報","data":[6,6,6,6,4,4,4,6,5,4,5,4,4,4,4,4,4,4,4,4,5,5,5,4,5,5,5,5]},{"label":"ヤゴヴのマンガ劇場","data":[7,17,32,29,19,16,12,11,12,12,10,9,10,12,9,11,12,12,11,9,8,7,6,6,6,6,6,6]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[8,7,7,7,7,6,5,4,6,6,6,7,6,6,6,6,6,5,5,5,4,4,4,5,4,4,4,4]},{"label":"暇つぶしニュース","data":[9,8,10,8,8,8,7,7,7,7,7,6,7,7,7,7,7,7,7,6,6,6,7,7,7,9,8,7]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[10,10,11,9,10,9,8,8,8,8,8,8,9,8,10,10,10,10,10,8,11,13,14,9,11,13,12,11]},{"label":"【2ch】ニュー速クオリティ","data":[11,9,12,10,9,10,9,9,9,10,9,10,8,9,8,8,9,11,12,12,10,10,11,10,10,10,10,8]},{"label":"BIPブログ","data":[12,13,16,17,14,13,17,19,19,17,13,12,15,16,13,12,14,16,15,13,9,8,10,13,12,12,13,13]},{"label":"わんこーる速報！","data":[13,12,14,13,11,12,14,10,10,9,12,14,12,11,12,16,13,13,13,14,12,11,12,14,13,11,14,17]},{"label":"哲学ニュースnwk","data":[14,11,9,12,13,11,18,13,13,11,14,13,13,13,15,13,11,8,8,11,15,14,18,21,15,14,15,18]},{"label":"おうまがタイムズ","data":[15,23,15,15,16,26,28,30,26,23,16,18,20,21,20,15,18,14,14,15,14,18,15,15,14,15,16,15]},{"label":"なんJ PRIDE","data":[16,20,19,19,22,19,16,17,14,16,15,16,18,17,17,19,20,20,16,17,18,19,25,22,18,18,20,14]},{"label":"カラパイア","data":[17,15,8,16,18,15,11,12,18,14,17,17,16,10,11,14,16,17,17,20,16,15,9,12,17,16,18,21]},{"label":"はむらの毎日マンガ","data":[18,27,70,87,90,67,49,50,52,45,39,76,46,39,29,30,50,38,28,28,23,23,22,42,19,20,19,35]},{"label":"ぶる速-VIP","data":[19,22,24,20,20,20,15,14,17,21,19,20,14,15,16,17,17,15,20,26,26,22,21,27,23,28,17,20]},{"label":"ぱんをたずねて2000里ちょい","data":[20,34,50,25,24,39,57,32,49,30,43,33,44,32,42,36,46,36,42,63,58,85,32,26,28,45,36,51]},{"label":"ねいろ速報さん","data":[21,18,20,22,21,21,21,20,15,18,18,19,17,18,18,20,22,23,21,21,19,21,17,23,24,22,22,19]},{"label":"NEWSぽけまとめーる","data":[22,19,23,21,26,24,24,18,16,15,21,15,21,25,26,21,19,21,22,24,22,16,23,28,29,21,26,28]},{"label":"痛いニュース(ﾉ∀`)","data":[23,21,17,14,17,14,13,15,11,13,11,11,11,14,14,9,8,9,9,10,13,12,13,11,8,8,11,12]},{"label":"ゴールデンタイムズ","data":[24,26,18,26,27,23,27,23,22,22,25,23,25,26,28,23,21,18,19,18,21,17,24,18,20,25,29,26]},{"label":"ネギ速","data":[25,31,25,23,25,29,30,22,28,28,28,21,32,40,31,31,34,43,32,31,30,41,27,16,27,32,34,40]},{"label":"なんJクエスト","data":[26,25,22,18,23,22,20,24,23,26,24,27,24,29,22,25,28,24,18,23,25,26,30,25,26,27,27,25]},{"label":"あいチャンネル","data":[27,16,29,28,12,32,35,38,63,31,32,30,42,34,43,33,35,30,66,44,79,37,35,36,75,41,33,61]},{"label":"うしみつ-5chまとめ-","data":[28,32,27,30,29,18,22,21,20,20,22,24,23,23,21,22,29,39,34,38,36,32,34,39,33,35,39,32]},{"label":"稲妻速報","data":[29,30,28,27,31,28,26,25,21,19,20,22,19,22,25,27,24,29,29,27,29,30,28,29,25,24,25,27]},{"label":"ラビット速報","data":[30,29,31,31,28,27,31,26,25,27,26,28,31,24,24,24,25,25,25,30,24,25,20,19,22,23,28,23]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[31,14,13,11,15,17,29,31,31,39,37,35,28,37,38,43,32,44,40,45,41,43,41,44,48,40,43,49]},{"label":"おーるじゃんる","data":[32,38,35,33,36,34,39,34,33,34,33,32,35,38,39,39,40,33,41,35,34,36,37,31,37,33,32,38]},{"label":"今日速2ch","data":[33,49,51,64,81,76,63,54,101,101,92,69,101,98,79,101,87,91,73,48,75,33,51,33,60,72,61,58]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[34,39,46,44,39,35,34,36,38,37,38,41,37,45,48,40,36,37,37,34,40,39,45,37,32,38,48,39]},{"label":"まとめたニュース","data":[35,24,34,36,35,36,42,27,35,36,36,38,38,36,40,49,38,40,43,40,38,38,40,41,41,42,47,43]},{"label":"ニュースBUZZ","data":[36,43,38,48,38,52,56,48,47,56,47,64,87,48,36,47,45,52,36,36,37,45,52,52,55,31,41,42]},{"label":"IT速報","data":[37,42,41,35,42,40,36,39,37,47,42,39,39,41,37,37,39,42,44,43,46,46,38,46,42,37,38,37]},{"label":"VIPPERな俺","data":[38,33,26,24,30,25,25,28,27,25,27,25,27,27,34,26,26,32,31,29,20,27,29,35,30,19,31,24]},{"label":"カイカイ反応通信","data":[39,35,30,32,34,33,32,35,30,29,29,29,36,28,32,28,33,35,33,37,35,34,33,32,34,36,37,36]},{"label":"日刊やきう速報","data":[40,36,33,34,32,31,33,29,34,32,31,34,30,31,35,29,30,28,30,33,32,31,36,40,38,29,30,22]},{"label":"山田全自動のあるある日記","data":[41,37,37,43,33,41,101,101,101,77,62,31,29,30,27,32,31,22,27,25,28,28,26,30,36,30,7,9]},{"label":"マンガと私と猫ブログ。","data":[42,28,21,38,73,30,23,40,24,38,23,36,26,20,19,34,23,34,26,16,33,24,19,20,31,46,24,30]},{"label":"乃木坂46まとめ 1/46","data":[43,40,42,50,59,43,45,46,41,44,49,52,54,53,49,35,44,31,35,32,27,29,31,38,40,43,40,45]},{"label":"人間まおと愉快な仲間たち","data":[44,47,45,40,44,44,41,47,46,53,55,53,58,72,89,96,101,101,101,101,95,94,73,94,88,84,85,88]},{"label":"【2ch】コピペ情報局","data":[45,48,40,37,37,38,38,44,45,41,35,43,40,42,47,46,42,46,46,47,42,42,42,49,46,47,44,46]},{"label":"うちの夫が糖尿病になっちゃった！","data":[46,46,43,41,43,37,43,41,43,43,40,42,43,44,45,44,43,41,39,42,43,44,39,45,43,44,46,48]},{"label":"サカラボ | サッカーまとめ速報","data":[47,57,58,66,68,70,61,58,75,58,67,65,68,63,60,56,63,75,69,75,59,61,63,70,72,62,83,73]},{"label":"footballnet【サッカー5chまとめ】","data":[48,78,87,61,69,86,100,101,101,64,45,51,86,77,83,75,74,92,101,80,80,74,76,75,101,101,80,87]},{"label":"気になる芸能まとめ","data":[49,67,63,72,75,73,64,60,65,69,74,61,67,60,56,62,70,74,60,67,54,62,71,69,68,70,71,66]},{"label":"オタク.com －オタコム－","data":[50,50,48,49,46,50,51,45,42,40,50,44,55,46,52,51,48,47,48,46,47,47,44,51,51,53,50,53]},{"label":"もちログ","data":[51,45,36,39,41,42,37,37,32,35,34,26,22,19,23,18,15,19,24,19,17,20,16,17,16,17,21,16]},{"label":"馬鳥速報","data":[52,56,39,46,45,60,69,65,60,51,60,58,52,66,76,76,49,66,63,56,63,78,60,65,59,52,57,63]},{"label":"あにこ便","data":[53,53,52,57,52,56,55,51,51,54,51,54,57,54,57,52,54,53,55,59,49,57,56,62,56,59,60,56]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[54,73,65,69,56,69,54,69,76,61,71,46,45,62,44,50,58,60,51,52,45,48,49,50,44,49,53,52]},{"label":"カエルDXのオタ活日記","data":[55,51,55,60,71,53,74,101,101,80,93,91,97,101,101,80,91,86,101,86,101,81,86,71,101,86,100,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[56,101,101,101,101,101,101,101,101,101,101,101,92,101,93,63,101,58,56,53,101,60,57,57,101,57,52,54]},{"label":"カオスちゃんねる","data":[57,61,54,42,47,45,40,49,54,62,57,59,47,49,53,64,53,49,62,57,53,53,46,48,45,39,56,60]},{"label":"ガールズVIPまとめ","data":[58,55,44,47,49,51,46,43,39,46,41,37,34,35,33,38,41,26,45,50,44,40,47,43,50,50,45,29]},{"label":"ついんてーる速報","data":[59,65,73,58,51,63,65,55,53,65,77,78,66,67,68,53,55,67,71,70,73,75,80,76,63,65,66,59]},{"label":"働く大人の非常識","data":[60,82,76,101,101,101,50,52,50,82,94,96,101,64,90,101,101,69,101,76,101,86,67,97,101,101,93,80]},{"label":"美容外科クリニックで働くパチ美の日常","data":[61,60,56,51,48,47,66,61,48,55,46,48,60,57,65,57,86,101,101,101,101,101,101,101,101,101,101,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[62,79,101,101,98,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"海外の万国反応記＠海外の反応","data":[63,58,49,54,50,54,59,57,57,57,54,47,56,50,66,48,51,50,53,54,50,50,48,59,58,56,59,57]},{"label":"2chコピペ保存道場","data":[64,77,68,82,74,61,75,78,69,75,61,70,72,74,86,78,73,73,74,77,62,67,68,68,71,66,63,71]},{"label":"流速VIP","data":[65,68,64,63,61,64,62,62,59,71,69,68,70,69,70,67,62,68,70,60,61,66,58,60,57,71,70,55]},{"label":"PS5速報！","data":[66,52,53,79,87,55,79,68,61,48,63,49,53,51,54,54,59,55,58,51,71,59,55,53,61,60,58,62]},{"label":"ポリー速報","data":[67,75,67,76,62,58,52,64,71,67,53,60,61,59,63,70,56,57,49,71,55,55,53,61,54,51,54,47]},{"label":"絵日記でございます。","data":[68,87,101,101,101,101,101,101,55,72,64,100,94,99,51,90,101,84,86,95,101,101,101,101,67,101,101,95]},{"label":"Jnews1","data":[69,54,77,56,70,101,101,101,101,101,59,101,101,68,30,58,101,101,101,101,101,51,97,101,101,90,51,41]},{"label":"芸能人の気になる噂","data":[70,69,62,65,80,75,88,76,86,85,82,63,63,55,58,66,64,56,61,61,52,63,59,63,52,58,62,72]},{"label":"VIP NEWS","data":[71,59,84,53,66,49,44,42,36,50,79,50,50,58,61,42,82,82,50,49,57,56,92,73,66,94,81,82]},{"label":"web漫画家やしろあずきの日常","data":[72,70,61,75,55,78,70,74,96,59,56,45,48,47,50,41,37,45,59,69,72,58,64,56,74,55,75,67]},{"label":"De速","data":[73,94,92,97,95,84,47,56,68,74,85,74,73,75,77,74,71,61,79,78,56,68,74,77,86,80,82,79]},{"label":"軍事・ミリタリー速報☆彡","data":[74,71,78,80,78,66,71,67,64,68,73,75,74,76,81,72,65,63,75,64,60,65,62,67,73,61,72,81]},{"label":"お料理速報","data":[75,62,83,73,54,74,81,70,77,96,91,73,69,88,72,65,78,76,57,62,87,83,72,79,80,73,65,74]},{"label":"FF14速報","data":[76,66,71,68,58,77,85,86,82,76,72,71,80,87,101,77,52,80,87,85,93,91,82,74,89,93,77,93]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[77,72,101,52,67,100,73,80,101,66,86,79,101,79,69,83,101,77,90,66,90,101,69,64,101,63,73,101]},{"label":"ライフハックちゃんねる弐式","data":[78,64,69,59,53,57,58,72,78,52,44,57,79,56,59,61,61,54,67,72,51,73,66,55,64,67,69,70]},{"label":"サカサカ10【サッカーまとめ速報】","data":[79,100,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふぇー速","data":[80,44,60,45,64,72,68,79,79,49,52,55,62,61,62,55,47,72,84,83,76,88,100,101,83,54,88,89]},{"label":"ろぼ速VIP","data":[81,90,88,88,97,85,78,83,90,93,97,90,85,90,96,91,94,90,88,91,91,95,88,90,85,91,94,78]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[82,76,66,71,57,48,67,73,72,60,65,56,51,65,78,69,66,65,72,73,68,84,65,58,62,68,67,69]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[83,92,94,67,86,89,83,87,92,101,101,92,91,86,80,71,68,62,68,82,86,101,89,81,87,79,79,77]},{"label":"鷹速@ホークスまとめブログ","data":[84,86,75,77,76,80,91,93,89,99,78,88,75,80,99,87,75,78,76,68,69,71,78,86,78,85,68,64]},{"label":"ふくよかまるみのピリカラ人生","data":[85,83,82,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,84,97]},{"label":"まとめブレイド","data":[86,74,72,81,82,65,53,66,44,42,66,66,65,95,87,101,101,101,96,58,67,80,101,101,101,101,101,101]},{"label":"投資ちゃんねる","data":[87,81,74,70,63,79,82,75,67,70,75,81,77,82,82,84,80,81,77,92,70,82,83,83,79,97,95,85]},{"label":"エクサワロス","data":[88,88,93,89,99,93,77,77,73,88,95,83,76,85,88,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[89,101,100,101,84,101,95,94,80,97,83,101,101,101,98,98,97,98,101,98,94,97,87,89,95,101,98,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[91,80,95,101,101,95,99,101,101,87,96,95,99,83,84,86,85,88,82,79,89,87,84,78,65,75,76,65]},{"label":"はーとログ","data":[92,101,89,101,88,82,86,85,93,81,80,94,89,73,92,79,79,94,81,84,78,101,90,101,81,78,89,68]},{"label":"ちば通信 - 千葉県千葉市の地域情報サイト","data":[93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[94,91,97,93,101,97,80,81,87,91,101,89,84,89,91,94,92,85,94,93,88,90,79,85,84,92,96,96]},{"label":"デジタルニューススレッド","data":[95,98,96,86,94,91,92,92,94,89,99,97,100,94,97,97,84,93,89,96,92,96,81,95,82,101,101,98]},{"label":"ジャンプ速報","data":[96,97,101,100,101,101,101,99,88,101,101,101,95,92,101,81,101,101,101,101,101,101,95,101,101,101,101,99]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[97,93,79,83,85,87,84,95,91,83,89,99,101,97,101,101,88,101,95,88,85,77,93,88,91,81,91,94]},{"label":"えみコミック！","data":[98,95,90,96,101,88,93,89,83,90,98,85,81,81,75,68,69,70,65,65,66,76,70,72,69,77,74,75]},{"label":"はらぺこもんろーのまんが。","data":[99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[100,84,101,85,79,81,94,96,101,101,88,82,98,100,101,101,101,101,91,100,84,72,101,82,99,89,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,41,99,74,40,96,76,101,40,33,101,67,59,52,41,101,76,101,38,39,101,101,85,47,39,64,42,101]},{"label":"つつみのブログ","data":[101,63,101,62,101,68,101,101,56,101,58,101,64,101,101,101,101,59,101,101,101,101,61,101,101,101,64,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,90,101,101,101,101,98,87,101,101]},{"label":"最強ジャンプ放送局","data":[101,89,85,95,91,101,101,98,85,92,101,86,88,91,101,89,95,97,93,101,96,101,77,91,92,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[101,96,101,101,101,101,60,63,101,101,70,87,93,78,67,101,83,71,80,101,65,70,101,101,90,74,55,44]},{"label":"会社員倉間のまいにちホリデー！！","data":[101,99,101,94,101,101,90,101,101,78,90,62,83,101,73,95,101,79,97,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,47,101,101,46,101,101,101,101,48,101,41,101,101,101,101,101,54,101,101,101,101,101,49,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,57,92,60,101,72,101,62,101,87,101,101,101,85,73,67,48,47,41,39,35,54,34,35,34,35,33]},{"label":"オタクニュース","data":[101,101,59,91,101,101,101,97,101,101,101,101,96,93,64,82,101,101,101,101,101,101,101,101,101,95,101,101]},{"label":"ミラクルファミリー","data":[101,101,80,55,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,60,83,85,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,86,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ずっと日曜日のターン","data":[101,101,91,78,77,62,48,59,66,79,100,101,49,70,55,85,96,99,101,101,97,52,75,66,53,101,101,101]},{"label":"まとめ太郎！","data":[101,101,98,99,89,92,96,91,99,86,101,80,78,84,101,99,90,100,101,94,83,79,94,87,77,76,87,76]},{"label":"つんの日常ブログ","data":[101,101,101,84,65,59,101,101,58,73,101,101,101,33,46,59,99,64,78,87,81,64,91,92,76,98,101,101]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,90,83,101,101,88,70,63,81,84,90,101,101,88,81,101,101,89,101,101,99,84,70,82,101,92]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,92,71,87,53,97,100,101,98,101,96,101,101,77,101,101,74,82,101,98,96,101,99,101,101]},{"label":"バイク速報","data":[101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,96,101,101,101,98,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,100,101,97,84,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,93,101,101,86,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,90,101,101,100,101,101,101,101,101,101,101,101,101,101,101,98,100,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,101,101,94,98,82,81,84,76,77,71,71,71,60,57,51,52,55,48,54,50,54,47,48,49,50]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,19,33,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,71,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,101,90,74,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,100,101,100,99,101,99,96,100,97,101,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,68,72,82,101,101,101,101,101,101,101,101,101,101,101,101,101,92,31]},{"label":"抱っこだ立つんだ揺れるんだ","data":[101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,100,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,93,87,98,97,74,93,101,101,96,100,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,99,101,101,101,101,80,101,101,101,90]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,89,64,81,77,92,101,101,94,69,101,101]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101]},{"label":"古オタクの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,92,101,99,101,101,98,93,96,101,100]},{"label":"UMA WORLD DIARY","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,64,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,100,101,101,101]},{"label":"ちひろのスキブログ 〜主婦の日常マンガ〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,90,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,91]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84]}];
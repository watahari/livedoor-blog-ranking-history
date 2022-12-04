var labels = ['2022-11-07','2022-11-08','2022-11-09','2022-11-10','2022-11-11','2022-11-12','2022-11-13','2022-11-14','2022-11-15','2022-11-16','2022-11-17','2022-11-18','2022-11-19','2022-11-20','2022-11-21','2022-11-22','2022-11-23','2022-11-24','2022-11-25','2022-11-26','2022-11-27','2022-11-28','2022-11-29','2022-11-30','2022-12-01','2022-12-02','2022-12-03','2022-12-04',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,1,4,2,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,1,2,1,1,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,3,2,2,4,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,5,3,4,4,2,3,3,3,3,4,4,2,3,3,5,5,5,3,4,4,4,4,4,4,4,1,3]},{"label":"はちま起稿","data":[4,3,4,3,3,3,4,4,4,4,3,3,4,5,4,4,4,4,4,3,5,5,5,5,3,3,7,4]},{"label":"暇つぶしニュース","data":[5,8,10,6,6,6,5,5,6,5,6,6,6,7,6,6,7,6,5,7,6,7,6,6,7,7,6,5]},{"label":"ヤゴヴのマンガ劇場","data":[6,7,8,15,35,34,27,28,26,28,25,19,15,12,12,10,10,8,7,8,7,6,8,8,9,5,8,6]},{"label":"不思議.net","data":[7,6,5,8,8,7,6,8,8,8,8,9,8,6,7,8,8,7,9,9,10,10,9,9,8,9,12,10]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[8,9,9,9,7,8,7,6,7,7,7,8,9,9,13,11,9,11,12,10,12,13,12,11,10,8,9,7]},{"label":"BIPブログ","data":[9,12,13,17,12,18,15,7,12,14,16,16,20,16,15,16,13,14,16,22,19,16,16,16,14,11,13,11]},{"label":"ハムスター速報","data":[10,4,6,5,5,5,8,11,5,6,5,7,7,11,9,7,6,9,6,5,11,9,7,7,6,6,5,8]},{"label":"【2ch】ニュー速クオリティ","data":[11,10,11,10,10,9,10,10,9,9,9,10,10,8,10,9,11,10,11,11,9,11,10,10,11,10,14,12]},{"label":"しばたまブログ","data":[12,31,51,101,101,90,89,83,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,35]},{"label":"わんこーる速報！","data":[13,13,12,13,11,10,11,13,11,13,13,11,11,13,14,14,12,12,14,14,13,12,13,13,12,13,15,13]},{"label":"カラパイア","data":[14,11,7,7,9,12,9,9,14,17,15,5,1,4,8,3,3,2,8,12,8,3,1,1,5,18,21,16]},{"label":"哲学ニュースnwk","data":[15,14,16,14,13,11,12,12,13,10,11,12,13,14,20,17,16,17,17,16,15,15,17,14,13,16,16,15]},{"label":"なんJ PRIDE","data":[16,16,14,11,14,13,14,16,15,11,12,15,14,17,16,15,14,16,10,13,14,14,15,15,16,19,11,14]},{"label":"ねいろ速報さん","data":[17,15,15,12,15,15,16,14,10,12,10,13,16,18,18,13,15,13,20,19,16,17,18,18,17,17,29,17]},{"label":"おうまがタイムズ","data":[18,17,17,16,18,16,18,15,16,15,17,18,18,20,19,19,17,15,18,21,18,18,19,17,18,20,26,20]},{"label":"ゴールデンタイムズ","data":[19,24,29,23,20,23,22,21,19,16,20,23,23,29,31,24,26,25,26,15,20,25,20,23,23,23,22,24]},{"label":"なんJクエスト","data":[20,23,25,22,25,28,19,26,25,31,22,30,27,26,25,30,25,24,23,24,22,23,30,29,25,25,27,23]},{"label":"あいチャンネル","data":[21,21,24,34,16,14,13,22,22,49,14,17,12,15,11,26,18,37,15,27,40,21,14,31,24,12,36,54]},{"label":"ツイッター速報","data":[22,64,101,101,79,91,101,78,101,95,101,101,101,80,44,62,57,100,31,49,101,81,47,37,101,78,3,28]},{"label":"NEWSぽけまとめーる","data":[23,18,22,18,19,17,17,17,17,27,18,21,21,19,17,20,19,22,25,30,30,29,26,22,26,22,19,19]},{"label":"日刊やきう速報","data":[24,19,20,20,23,22,24,29,31,29,26,28,25,22,27,28,28,18,27,26,25,28,31,25,28,32,28,32]},{"label":"マンガと私と猫ブログ。","data":[25,20,18,19,17,25,56,20,18,24,39,39,60,50,57,55,63,47,75,59,76,61,75,53,41,42,96,62]},{"label":"ぶる速-VIP","data":[26,22,19,21,29,21,23,18,23,18,28,27,30,25,29,29,29,19,30,23,26,19,28,26,27,24,33,26]},{"label":"稲妻速報","data":[27,26,26,26,24,27,21,19,20,19,21,22,22,21,21,22,23,21,32,28,27,24,22,24,22,26,34,29]},{"label":"ラビット速報","data":[28,29,27,28,28,29,28,23,24,32,27,26,26,24,26,32,32,29,29,25,28,27,29,27,29,28,30,25]},{"label":"うしみつ-5chまとめ-","data":[29,30,28,27,26,26,25,27,28,25,29,29,33,30,28,23,21,20,35,29,23,22,23,30,30,29,37,33]},{"label":"サル山の裏マンガ","data":[30,25,21,24,27,19,33,25,21,21,36,31,28,34,51,37,44,86,101,51,99,101,71,101,100,101,101,101]},{"label":"カイカイ反応通信","data":[31,28,30,29,31,36,32,33,30,33,32,33,36,31,33,35,30,30,13,20,24,30,36,28,31,27,10,22]},{"label":"VIPPERな俺","data":[32,27,23,25,22,24,20,31,35,20,30,24,24,27,24,36,27,27,33,32,29,35,25,20,21,21,24,30]},{"label":"はむらの毎日マンガ","data":[33,32,32,32,30,30,44,35,27,26,24,25,29,28,30,27,22,26,36,55,101,101,87,72,57,45,44,42]},{"label":"Jnews1","data":[34,79,81,101,84,101,79,64,79,101,101,101,43,10,5,12,31,33,97,101,101,101,101,101,101,101,80,86]},{"label":"おーるじゃんる","data":[35,36,38,38,32,37,26,32,34,42,37,36,40,33,38,34,36,31,41,37,34,34,40,32,33,36,41,36]},{"label":"IT速報","data":[36,43,33,33,37,43,34,37,37,35,41,34,38,36,36,39,37,39,34,33,33,32,37,36,37,34,32,34]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[37,33,35,37,33,33,38,42,43,36,42,37,39,35,35,33,34,38,47,36,35,37,35,33,39,37,35,41]},{"label":"乃木坂46まとめ 1/46","data":[38,40,45,44,46,46,45,39,48,41,40,43,58,52,37,40,54,45,58,43,43,47,49,47,59,52,67,50]},{"label":"ニュースBUZZ","data":[39,35,42,39,36,32,36,34,33,34,35,35,32,47,34,48,35,40,49,35,32,33,50,34,32,43,47,39]},{"label":"カエルDXのオタ活日記","data":[40,51,41,48,40,40,49,40,42,50,43,44,37,39,50,56,55,55,60,50,49,40,53,52,38,30,48,52]},{"label":"ネギ速","data":[41,46,49,43,38,42,42,43,38,46,51,42,44,38,41,51,41,32,46,38,41,41,38,42,35,39,49,40]},{"label":"【2ch】コピペ情報局","data":[42,38,34,41,43,48,39,44,36,37,44,38,34,42,42,44,38,36,43,39,36,51,39,35,36,41,43,43]},{"label":"ポリー速報","data":[43,48,43,42,47,47,54,46,47,40,45,46,45,49,45,52,51,52,52,46,53,54,58,59,61,55,46,59]},{"label":"世にも奇妙ななんかの話","data":[44,34,31,31,101,31,30,24,99,22,19,14,17,77,22,18,40,42,101,101,38,36,33,101,34,31,40,101]},{"label":"VIP NEWS","data":[45,65,101,55,59,93,51,54,52,86,101,51,46,75,46,68,74,58,64,54,79,62,69,82,50,62,55,68]},{"label":"スズぺぺの人生何とかなってます!!","data":[46,42,44,64,101,101,101,101,101,92,101,101,96,92,101,94,90,91,89,85,75,77,74,81,80,71,69,65]},{"label":"カオスちゃんねる","data":[47,50,50,56,44,62,46,56,50,51,54,57,51,51,59,60,52,56,51,56,56,64,56,50,49,46,45,49]},{"label":"あにこ便","data":[48,44,46,49,51,53,50,49,46,56,48,53,59,55,49,50,47,48,62,57,48,49,43,46,48,101,101,101]},{"label":"ガールズVIPまとめ","data":[49,41,48,71,75,64,43,63,86,68,46,54,71,53,61,47,59,51,70,61,62,80,52,54,69,63,57,63]},{"label":"オタク.com －オタコム－","data":[50,49,40,40,50,52,55,51,45,48,50,52,57,48,56,31,39,46,50,47,47,53,41,45,44,50,60,51]},{"label":"人間まおと愉快な仲間たち","data":[51,54,54,53,45,38,41,45,49,52,47,48,52,43,48,42,42,34,42,44,45,42,45,51,46,47,54,45]},{"label":"まとめたニュース","data":[52,45,37,36,39,44,48,41,41,47,33,40,48,41,39,41,50,35,38,53,42,39,34,39,45,40,39,44]},{"label":"えみコミック！","data":[53,47,74,45,67,49,63,50,53,45,53,41,55,40,54,43,48,44,101,48,95,48,86,43,91,44,92,47]},{"label":"ミラクルファミリー","data":[54,101,101,101,101,101,101,101,82,38,38,68,101,101,101,101,98,67,101,101,82,101,59,88,101,100,68,76]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[55,101,82,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"De速","data":[56,52,47,35,49,50,60,67,63,53,52,59,42,37,52,45,46,61,68,74,55,55,67,71,54,64,82,88]},{"label":"痛いニュース(ﾉ∀`)","data":[57,53,39,30,21,20,29,30,32,23,23,20,19,23,32,25,24,28,19,17,21,26,24,19,15,15,17,21]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[58,60,52,54,41,45,47,38,40,54,49,47,53,45,47,46,33,41,56,42,39,50,48,48,43,38,56,48]},{"label":"芸能人の気になる噂","data":[59,59,60,61,53,55,58,59,56,62,60,58,64,57,63,67,67,57,65,62,58,59,61,61,65,57,72,64]},{"label":"サカラボ | サッカーまとめ速報","data":[60,70,71,67,61,67,64,72,57,65,67,63,49,67,71,49,49,49,21,31,31,31,32,38,40,35,18,27]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[61,56,53,63,68,76,80,79,60,81,78,77,54,78,81,87,83,98,80,99,86,88,101,75,71,77,73,92]},{"label":"気になる芸能まとめ","data":[62,71,67,65,63,73,59,53,54,60,68,72,72,58,60,61,72,54,72,66,51,57,66,73,70,76,85,70]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[63,73,73,70,74,101,94,101,67,78,101,82,73,101,74,78,101,84,71,101,101,101,101,77,53,101,101,101]},{"label":"まとめブレイド","data":[64,66,56,81,48,66,84,55,64,94,101,75,83,54,68,82,101,95,84,80,101,101,101,84,101,101,101,87]},{"label":"ライフハックちゃんねる弐式","data":[65,58,58,78,52,61,70,57,84,64,57,67,61,65,70,70,60,74,82,79,60,63,55,57,72,60,71,73]},{"label":"鷹速@ホークスまとめブログ","data":[66,63,65,60,56,56,66,77,58,55,58,56,56,71,78,64,61,62,63,75,63,78,62,55,58,74,64,69]},{"label":"もちログ","data":[67,72,64,47,42,41,37,36,29,30,31,32,31,32,23,21,20,23,24,18,17,20,21,21,19,14,20,18]},{"label":"MLB NEWS@まとめ","data":[68,75,95,85,64,58,67,70,76,73,79,71,82,83,82,75,93,76,92,86,92,79,91,93,75,92,101,97]},{"label":"ずっと日曜日のターン","data":[69,101,98,101,82,51,40,47,44,61,101,78,80,56,67,69,56,53,59,58,71,58,54,85,81,61,95,101]},{"label":"はーとログ","data":[70,83,70,75,73,79,74,81,81,79,76,85,76,70,75,85,87,92,100,92,64,73,77,89,77,81,90,101]},{"label":"軍事・ミリタリー速報☆彡","data":[71,67,66,79,69,63,61,58,66,66,65,64,63,59,55,58,65,68,83,69,65,82,73,63,66,66,81,77]},{"label":"海外の万国反応記＠海外の反応","data":[72,57,55,59,60,70,65,69,61,57,70,60,62,60,53,65,62,50,28,41,46,60,70,65,51,59,25,37]},{"label":"ふぇー速","data":[73,74,62,57,65,92,71,60,68,74,72,74,89,81,77,92,66,66,67,84,54,45,68,80,89,54,76,58]},{"label":"今日速2ch","data":[74,99,77,69,101,101,98,93,101,101,101,101,101,69,66,80,101,101,94,101,52,65,101,101,76,68,74,99]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[75,88,68,62,55,60,62,71,70,58,63,62,68,61,65,57,69,63,77,70,70,72,64,44,47,49,51,55]},{"label":"エクサワロス","data":[76,77,92,87,72,78,101,61,71,84,84,99,99,94,101,81,101,101,95,101,84,87,95,101,78,87,100,81]},{"label":"やみ速@なんJ西武まとめ","data":[77,61,86,83,86,98,100,101,98,71,55,49,50,76,101,59,64,77,101,94,68,89,101,96,87,91,87,80]},{"label":"2chコピペ保存道場","data":[78,89,72,80,78,77,73,91,91,87,75,84,84,62,69,84,82,85,78,77,83,90,80,74,63,75,88,67]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[79,82,80,76,71,75,68,87,80,76,61,61,81,82,89,76,79,82,85,71,77,85,78,79,68,67,84,82]},{"label":"ろぼ速VIP","data":[80,97,101,93,83,89,93,100,101,96,97,89,93,96,96,97,92,89,101,96,101,97,94,98,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[81,101,101,101,99,80,91,75,96,97,96,101,101,97,92,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"馬鳥速報","data":[82,90,78,74,66,71,96,101,89,69,81,101,74,93,101,91,76,79,87,73,98,68,79,66,74,96,94,93]},{"label":"流速VIP","data":[83,101,101,101,101,101,88,92,78,70,64,70,88,73,73,77,70,69,79,60,66,84,63,67,73,70,75,66]},{"label":"ついんてーる速報","data":[84,85,84,77,62,68,87,82,75,82,71,80,87,63,72,88,86,70,66,45,44,76,88,60,64,69,79,85]},{"label":"お料理速報","data":[85,80,88,96,87,85,101,73,73,83,98,86,101,84,83,83,94,81,88,87,101,83,85,101,86,65,98,78]},{"label":"なんJ（まとめては）いかんのか？","data":[86,55,75,66,54,35,76,101,101,44,62,76,66,66,88,101,101,75,101,101,81,74,92,78,79,101,101,101]},{"label":"まとめロッテ！","data":[87,76,85,82,95,59,81,86,72,67,85,90,97,98,97,90,89,94,73,101,100,99,96,101,101,101,86,101]},{"label":"山田全自動のあるある日記","data":[88,86,101,101,91,101,90,95,101,93,83,69,67,68,43,38,43,43,53,63,50,43,51,49,56,56,70,60]},{"label":"web漫画家やしろあずきの日常","data":[89,101,57,50,58,54,53,52,39,43,56,50,69,64,62,66,45,71,69,91,69,95,60,69,88,101,83,98]},{"label":"オタクニュース","data":[90,87,61,73,100,86,77,101,65,101,90,101,101,101,91,101,101,90,98,88,101,101,101,86,101,101,78,79]},{"label":"デジタルニューススレッド","data":[91,101,100,101,98,97,101,88,101,101,101,95,101,88,85,98,95,101,101,100,101,92,83,95,90,88,93,89]},{"label":"働く大人の非常識","data":[92,101,90,101,92,101,101,89,59,77,89,101,101,101,101,63,101,78,101,93,73,66,101,101,101,79,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[93,94,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[94,81,101,101,94,101,101,101,83,101,101,94,98,95,100,86,101,101,101,101,101,101,82,99,99,97,101,101]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[95,101,91,90,81,81,75,90,92,91,91,98,86,87,94,101,96,101,101,101,101,101,98,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[96,93,94,86,76,82,82,97,88,98,86,92,94,99,101,100,88,101,101,101,94,100,101,83,92,85,101,101]},{"label":"なんJ　高校野球まとめ速報","data":[97,101,101,101,101,101,99,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,97,84]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[98,92,101,101,90,101,101,101,93,101,101,101,101,101,101,101,100,101,101,68,88,101,101,100,101,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[99,101,101,101,101,101,101,101,101,101,93,101,100,91,101,101,80,64,74,95,80,91,90,97,84,95,101,91]},{"label":"footballnet【サッカー5chまとめ】","data":[100,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,22,6,3,8,11,12,20,33,23,9]},{"label":"ぱんをたずねて2000里ちょい","data":[101,37,63,46,70,57,86,62,94,63,92,83,101,101,86,101,58,83,101,101,78,71,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,39,36,52,34,39,95,65,101,39,34,45,41,46,40,54,53,59,37,40,89,38,27,76,52,82,50,31]},{"label":"つんの日常ブログ","data":[101,62,76,101,80,101,35,68,101,59,88,101,78,101,101,101,101,101,101,65,101,101,101,58,96,101,101,96]},{"label":"ろくのコミックブログ","data":[101,68,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"PS5速報！","data":[101,69,59,58,57,65,57,76,55,72,69,66,70,89,80,73,77,65,81,64,67,70,65,62,60,58,65,61]},{"label":"スカッと連載ブログ（スカログ）","data":[101,78,97,101,101,101,101,101,101,101,73,96,101,74,101,101,73,101,101,72,97,101,76,101,101,80,101,101]},{"label":"おる速","data":[101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,91,93,89,85,72,69,85,100,100,99,101,101,101,95,96,101,101,101,101,101,101,101,101,101,93,101,101]},{"label":"投資ちゃんねる","data":[101,95,101,95,101,84,78,74,77,90,82,88,90,101,99,95,97,97,101,101,101,98,99,101,97,90,101,94]},{"label":"FF14速報","data":[101,98,83,101,101,87,101,101,101,101,101,91,101,101,101,101,71,96,101,101,101,101,100,101,101,101,101,101]},{"label":"鈴木さん速報","data":[101,100,89,84,89,83,97,99,101,101,100,97,92,85,90,89,84,88,101,89,85,93,84,94,85,89,101,101]},{"label":"チリツモブログ","data":[101,101,69,51,101,101,52,101,69,101,101,73,47,101,101,53,101,101,57,101,101,101,42,40,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,79,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"笑う母には福来る　byはなゆい","data":[101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,96,97,101,96,83,66,85,85,74,101,101,90,76,71,85,60,101,101,74,101,101,92,101,101,91,90]},{"label":"つつみのブログ","data":[101,101,101,68,101,69,101,101,62,101,66,101,65,101,101,101,101,72,101,101,101,101,101,101,62,101,61,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,72,93,101,101,101,101,101,101,55,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,88,97,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うちの夫が糖尿病になっちゃった！","data":[101,101,101,92,88,88,92,94,90,89,77,81,77,72,84,74,81,80,76,67,57,56,57,64,67,72,77,71]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,94,77,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,96,99,101,101,101,99,101,101,101,101,101,101,68,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,74,101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,73,101,101]},{"label":"ちひろのスキブログ 〜主婦の日常マンガ〜","data":[101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,100,72,80,87,101,101,101,101,79,64,79,75,73,90,78,91,94,89,87,55,48,63,57]},{"label":"絵日記でございます。","data":[101,101,101,101,101,101,31,48,51,75,101,100,91,101,101,99,101,101,101,101,101,101,101,101,101,101,99,101]},{"label":"パート主婦のリアルな日常","data":[101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"背中をポンポン","data":[101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,98,97,101,101,101,101,101,98,101,91,101,101,101,101,101,101,101,101,94,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,80,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,88,101,101,75,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,59,65,95,101,101,101,101,101,101,101,90,101,101,101,101,101,101,95]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,101,101,80,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アルセウス速報","data":[101,101,101,101,101,101,101,101,101,101,101,87,35,44,58,72,78,87,93,90,87,86,81,91,83,83,89,74]},{"label":"となりのモンスター屋さん【となもん】(モンハン/ポケモン/特撮/ゲーム関連ブログ)","data":[101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,85,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,86,101,101]},{"label":"ベビーシッターさいおの日常茶飯","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,100]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,82,101,101,101,101,101,98,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,93,39,52,59,52,46,68,82,84,38,46]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,40,81,101,67,72,101,101,101,52,56]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44,101,101,101,101,101,101,101,42,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,45,34,37,46,44,41,42,53,31,38]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,48,76,61,101,93,70,94,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,83,101,101,101,101,101,101,58,72]},{"label":"Samurai GOAL","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,97,96,75,97,101,101,101,53,83]},{"label":"フットカルチョ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,101,101,101,101,101,101,101,62,101]},{"label":"フットボール速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,98,101,69,101,101,101,99,59,75]},{"label":"翻訳ちゃんねる | 海外の反応まとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,96,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,44,101,101,101,101,101,101]},{"label":"Aやんのええやん！ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,56,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"あにこ便","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51,66,53]}];
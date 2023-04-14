var labels = ['2023-03-18','2023-03-19','2023-03-20','2023-03-21','2023-03-22','2023-03-23','2023-03-24','2023-03-25','2023-03-26','2023-03-27','2023-03-28','2023-03-29','2023-03-30','2023-03-31','2023-04-01','2023-04-02','2023-04-03','2023-04-04','2023-04-05','2023-04-06','2023-04-07','2023-04-08','2023-04-09','2023-04-10','2023-04-11','2023-04-12','2023-04-13','2023-04-14',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,2,4,4,1,null,1,1,1,2,2,1,1,1,1,1,1,5,1,1,1,1,1,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[2,3,3,3,1,1,1,2,3,null,4,3,3,5,5,3,2,2,3,3,3,2,2,2,3,3,3,5]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,2,2,3,3,2,1,2,null,2,2,2,3,4,2,3,3,2,2,2,1,3,3,2,2,2,4]},{"label":"はちま起稿","data":[4,4,4,4,4,4,3,3,4,null,5,5,5,6,6,5,4,4,4,5,5,4,4,4,4,4,4,6]},{"label":"ハムスター速報","data":[5,8,11,6,9,7,6,5,5,null,3,4,4,4,3,6,5,5,5,4,4,3,5,6,5,5,5,2]},{"label":"ヤゴヴのマンガ劇場","data":[6,7,6,7,12,22,38,39,34,null,21,14,13,14,14,10,8,9,8,9,9,11,9,8,7,8,8,9]},{"label":"もちログ","data":[7,10,10,35,64,74,74,66,69,null,37,39,40,40,40,39,32,29,27,33,31,24,26,26,22,18,21,22]},{"label":"暇つぶしニュース","data":[8,6,7,9,8,10,9,6,6,null,8,7,8,8,8,7,6,8,7,7,8,8,6,7,9,6,9,10]},{"label":"痛いニュース(ﾉ∀`)","data":[9,14,13,12,14,12,12,9,7,null,6,8,6,7,7,9,7,7,6,8,6,6,8,5,6,9,7,7]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[10,12,12,10,10,9,10,11,12,null,10,10,9,12,15,17,14,13,15,15,10,9,10,11,8,7,10,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,9,5,5,6,8,8,7,8,null,7,6,7,9,9,8,11,12,9,10,14,14,15,16,17,13,12,11]},{"label":"【2ch】ニュー速クオリティ","data":[12,13,15,11,13,13,13,12,11,null,12,13,12,11,13,14,13,14,14,11,12,12,14,14,15,14,14,15]},{"label":"なんJ PRIDE","data":[13,16,16,14,5,5,7,8,10,null,11,12,16,15,12,11,9,10,10,14,11,13,12,10,10,15,13,13]},{"label":"BIPブログ","data":[14,17,19,13,11,14,14,10,9,null,9,11,15,19,16,13,12,16,18,13,15,15,19,15,16,11,15,14]},{"label":"カラパイア","data":[15,5,14,27,30,30,26,24,30,null,16,9,14,16,11,15,15,15,11,6,7,7,7,13,19,16,6,3]},{"label":"わんこーる速報！","data":[16,18,20,17,19,21,18,15,14,null,14,15,11,17,19,22,19,17,17,18,20,19,18,23,20,17,16,20]},{"label":"哲学ニュースnwk","data":[17,15,17,15,16,23,22,18,13,null,15,18,19,18,20,24,18,19,20,21,17,18,16,24,23,22,18,17]},{"label":"はむらの毎日マンガ","data":[18,20,38,22,23,25,45,26,17,null,35,23,17,13,32,21,33,20,16,32,18,16,25,19,14,12,29,18]},{"label":"山田全自動のあるある日記","data":[19,11,9,8,15,17,19,23,16,null,19,26,26,25,22,16,16,6,13,17,26,21,17,9,12,20,24,21]},{"label":"おうまがタイムズ","data":[20,19,18,16,18,16,17,16,15,null,20,20,18,20,18,19,20,18,19,20,19,17,22,22,18,19,17,19]},{"label":"日刊やきう速報","data":[21,24,24,28,7,6,11,17,18,null,24,22,20,22,17,18,21,23,21,22,28,26,21,21,28,24,19,24]},{"label":"ゴールデンタイムズ","data":[22,27,25,26,26,24,21,20,32,null,31,31,27,32,33,33,27,26,30,28,30,23,34,34,34,33,30,27]},{"label":"ぶる速-VIP","data":[23,22,22,23,22,20,24,21,20,null,17,21,21,21,23,23,30,28,22,27,22,28,13,27,27,25,25,28]},{"label":"稲妻速報","data":[24,25,26,24,29,33,28,30,28,null,29,30,24,26,28,30,24,22,24,26,23,20,27,29,26,29,22,26]},{"label":"NEWSぽけまとめーる","data":[25,23,29,25,20,19,15,14,24,null,23,27,23,24,26,25,22,25,25,23,24,22,20,18,29,32,27,25]},{"label":"ねいろ速報さん","data":[26,21,23,18,27,32,27,28,25,null,13,19,22,23,24,26,23,21,23,25,25,25,24,28,21,23,23,23]},{"label":"カイカイ反応通信","data":[27,33,37,34,21,11,20,27,33,null,28,33,36,36,38,37,39,31,35,34,35,35,36,39,35,35,35,35]},{"label":"ラビット速報","data":[28,30,28,20,28,29,25,22,21,null,22,29,25,27,27,29,25,24,28,29,29,29,32,30,24,26,31,30]},{"label":"なんJクエスト","data":[29,26,27,29,17,15,23,25,22,null,25,28,29,29,25,27,26,27,26,24,27,31,29,32,32,27,26,29]},{"label":"ネギ速","data":[30,29,32,38,42,36,30,34,35,null,30,35,34,33,30,32,38,33,36,30,33,30,31,37,38,28,34,34]},{"label":"マンガと私と猫ブログ。","data":[31,28,39,53,49,61,101,47,27,null,27,25,35,30,21,20,17,30,29,16,16,36,30,20,25,21,20,16]},{"label":"VIPPERな俺","data":[32,34,42,30,32,28,43,31,29,null,26,24,32,31,29,38,34,32,32,31,21,33,37,33,30,31,28,33]},{"label":"おーるじゃんる","data":[33,37,33,37,37,39,34,36,38,null,34,32,31,28,34,34,36,34,34,35,34,27,28,35,33,36,32,32]},{"label":"ぱんをたずねて2000里ちょい","data":[34,43,30,39,36,58,76,73,43,null,92,43,39,58,41,50,41,53,41,52,38,53,78,42,52,64,37,63]},{"label":"野球お絵かき@なんJまとめ","data":[35,38,43,42,25,27,29,32,37,null,42,49,47,42,31,36,37,39,37,40,46,52,45,46,65,79,72,94]},{"label":"うしみつ-5chまとめ-","data":[36,35,36,32,39,49,37,35,31,null,32,34,33,37,37,35,35,35,39,38,36,39,35,31,31,34,33,31]},{"label":"web漫画家やしろあずきの日常","data":[37,40,21,33,34,46,36,29,26,null,33,42,37,41,53,42,50,43,46,37,37,34,23,17,13,30,47,45]},{"label":"世にも奇妙ななんかの話","data":[38,31,34,55,44,38,39,33,36,null,64,101,101,101,98,101,101,101,74,75,58,57,54,47,37,37,42,37]},{"label":"あいチャンネル","data":[39,77,41,31,75,43,32,38,39,null,36,37,45,34,45,101,42,52,38,42,32,40,68,36,40,74,36,38]},{"label":"IT速報","data":[40,36,40,19,33,50,49,48,49,null,40,40,42,43,48,56,48,48,47,36,48,46,51,44,49,46,48,42]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[41,52,47,44,45,53,41,37,40,null,39,38,53,54,50,54,44,40,40,47,40,41,40,40,48,48,40,36]},{"label":"【2ch】コピペ情報局","data":[42,45,54,45,54,51,56,54,46,null,57,51,54,53,51,48,56,49,51,56,53,50,48,52,53,49,56,46]},{"label":"ツイッター速報","data":[43,51,92,69,101,101,65,101,82,null,58,83,97,90,101,97,72,101,101,62,52,43,33,25,36,42,55,56]},{"label":"まとめたニュース","data":[44,46,44,48,50,57,51,42,45,null,44,45,59,50,55,45,46,44,49,46,41,45,52,55,44,40,60,47]},{"label":"うちの夫が糖尿病になっちゃった！","data":[45,47,52,43,53,54,62,58,62,null,59,55,51,49,47,47,51,42,45,49,45,47,49,49,47,44,44,41]},{"label":"ニュースBUZZ","data":[46,48,101,56,60,45,57,63,44,null,82,65,61,47,63,55,49,57,70,101,49,38,44,51,63,47,53,51]},{"label":"ガールズVIPまとめ","data":[47,42,48,41,55,68,69,68,63,null,61,46,57,46,46,51,52,37,44,39,44,51,38,56,39,43,54,59]},{"label":"ふくよかまるみのピリカラ人生","data":[48,44,50,49,51,59,50,49,41,null,47,36,41,38,36,28,29,36,42,43,43,49,42,45,46,45,46,39]},{"label":"なんJ（まとめては）いかんのか？","data":[49,65,56,85,24,26,46,41,50,null,60,60,78,65,35,31,28,55,53,50,51,62,60,61,61,53,38,52]},{"label":"MLB NEWS@まとめ","data":[50,55,53,54,31,31,31,40,48,null,45,48,52,56,49,60,53,50,54,55,57,60,56,50,55,70,63,50]},{"label":"スズぺぺの人生何とかなってます!!","data":[51,49,49,46,52,52,52,50,47,null,41,44,43,44,44,41,47,41,43,45,42,42,41,43,45,41,45,40]},{"label":"ゆっぺのゆる漫画ブログ","data":[52,101,46,71,41,42,95,83,101,null,49,93,49,101,81,78,69,45,68,44,56,66,82,101,101,39,39,73]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[53,50,51,51,62,66,59,45,42,null,38,50,48,48,43,46,55,51,31,41,47,48,46,48,43,38,41,43]},{"label":"海外の万国反応記＠海外の反応","data":[54,57,55,57,40,34,47,53,56,null,62,59,64,60,60,61,64,56,61,57,62,61,58,62,56,67,66,66]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[55,74,73,75,38,40,35,51,74,null,66,85,65,87,66,65,63,78,73,68,73,63,63,92,85,75,75,79]},{"label":"オタク.com －オタコム－","data":[56,58,58,47,61,65,55,56,58,null,56,54,55,55,61,59,57,58,57,60,54,56,57,53,51,54,68,49]},{"label":"De速","data":[57,53,60,70,56,48,33,55,64,null,65,72,50,51,62,49,54,59,62,51,60,54,53,41,50,59,58,44]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[58,66,68,83,101,94,77,95,101,null,77,89,101,81,71,81,99,77,75,88,86,91,75,101,101,89,101,101]},{"label":"カオスちゃんねる","data":[59,56,63,62,73,69,63,57,59,null,68,56,56,52,58,73,60,63,59,59,63,69,70,66,78,80,59,54]},{"label":"ふぇー速","data":[60,76,65,82,47,86,54,100,57,null,101,90,86,91,96,101,101,91,55,58,69,101,77,57,101,101,91,67]},{"label":"乃木坂46まとめ 1/46","data":[61,54,57,52,57,56,60,60,53,null,50,41,46,35,54,53,40,46,48,48,39,37,43,38,41,50,49,53]},{"label":"ポリー速報","data":[62,60,72,72,48,35,40,44,54,null,51,53,58,59,57,52,45,47,50,53,61,58,55,58,57,56,64,48]},{"label":"鷹速@ホークスまとめブログ","data":[63,73,81,60,35,41,58,62,86,null,79,64,68,70,67,70,71,69,64,82,80,80,67,67,70,76,81,69]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[64,41,31,40,46,47,42,43,52,null,52,52,38,39,39,62,59,66,52,54,55,55,47,59,66,62,50,57]},{"label":"Jnews1","data":[65,39,86,50,70,18,5,13,23,null,55,101,30,1,1,4,31,38,33,19,50,101,62,64,75,72,101,101]},{"label":"えみコミック！","data":[66,61,64,58,65,60,61,52,51,null,43,47,44,45,52,57,58,54,60,66,65,59,61,60,60,60,61,55]},{"label":"あにこ便","data":[67,62,59,61,76,76,73,65,61,null,53,61,60,61,68,66,65,65,65,71,64,68,59,54,54,51,67,61]},{"label":"芸能人の気になる噂","data":[68,64,69,68,80,72,67,67,55,null,73,62,63,68,84,93,97,96,92,90,78,79,71,69,88,93,101,68]},{"label":"オタクニュース","data":[69,80,101,101,96,101,93,101,84,null,67,78,101,101,101,96,101,101,101,67,101,101,101,86,101,101,101,101]},{"label":"流速VIP","data":[70,68,70,67,85,83,80,86,72,null,78,74,71,69,70,71,67,76,89,78,66,67,64,76,77,73,71,82]},{"label":"ついんてーる速報","data":[71,63,89,76,81,89,82,82,83,null,70,68,62,67,75,69,74,68,72,93,91,87,76,70,81,88,85,71]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[72,72,77,80,92,90,86,79,77,null,76,71,74,72,77,85,88,89,85,80,77,81,80,84,84,81,74,76]},{"label":"馬鳥速報","data":[73,86,87,64,90,100,81,90,67,null,63,75,70,82,64,43,66,73,58,61,72,85,79,93,74,65,65,62]},{"label":"つつみのブログ","data":[74,101,101,101,101,81,101,101,101,null,75,101,72,101,101,101,101,72,101,101,101,64,101,101,101,77,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[75,101,101,101,77,55,44,46,73,null,85,81,90,73,83,82,87,100,80,92,93,95,86,101,99,101,96,88]},{"label":"気になる芸能まとめ","data":[76,70,62,66,69,78,71,72,65,null,72,69,73,71,78,76,73,79,86,81,75,71,65,63,83,91,80,83]},{"label":"やみ速@なんJ西武まとめ","data":[77,83,101,101,58,44,48,64,92,null,101,94,81,86,73,84,85,95,101,89,99,97,81,74,67,90,89,87]},{"label":"VIP NEWS","data":[78,87,66,101,66,82,72,69,70,null,48,66,87,94,101,101,98,87,100,101,90,101,101,101,87,101,101,101]},{"label":"軍事・ミリタリー速報☆彡","data":[79,71,85,77,87,92,91,76,75,null,83,80,83,76,80,83,90,84,82,74,88,72,73,79,69,83,84,81]},{"label":"PS5速報！","data":[80,91,96,96,101,71,64,61,71,null,54,70,79,74,65,63,86,101,71,69,94,82,95,101,80,58,57,75]},{"label":"ずっと日曜日のターン","data":[81,101,75,78,101,101,90,74,97,null,86,96,67,79,76,68,61,94,78,83,59,78,101,75,68,101,99,101]},{"label":"ライフハックちゃんねる弐式","data":[82,67,67,90,88,97,79,77,60,null,81,82,66,62,99,88,83,62,84,65,70,70,66,65,82,71,69,72]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[83,100,101,84,101,101,101,101,101,101,101,101,94,93,101,101,101,101,101,87,101,101,84,99,101,101,88,101]},{"label":"2chコピペ保存道場","data":[84,85,83,95,101,98,78,75,79,null,90,73,76,80,82,77,75,101,88,84,95,88,98,88,95,100,93,92]},{"label":"サカラボ | サッカーまとめ速報","data":[85,75,61,65,67,79,70,78,80,null,74,76,75,84,69,74,76,85,79,95,87,96,74,68,59,84,82,86]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[86,101,101,101,82,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[87,99,95,101,89,63,68,88,101,101,101,101,101,92,101,101,101,101,101,101,101,101,90,101,101,101,101,101]},{"label":"お料理速報","data":[88,98,76,73,78,101,84,92,101,null,88,98,89,77,92,101,80,81,101,97,76,94,96,85,101,101,86,84]},{"label":"阪神タイガースちゃんねる","data":[89,93,99,101,86,70,83,84,76,null,84,86,91,88,86,86,84,80,87,86,84,65,83,73,76,92,87,77]},{"label":"まとめロッテ！","data":[90,89,101,101,43,64,75,89,94,null,101,88,101,101,89,75,68,75,101,85,82,76,85,96,73,101,101,80]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[91,101,100,101,101,88,98,96,101,101,101,101,96,75,85,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"★レアモノ在庫再販速報","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[93,101,101,101,101,101,85,85,85,null,69,79,82,78,88,90,78,64,63,64,71,74,72,72,64,69,73,70]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[94,101,101,91,91,84,96,101,101,101,101,92,101,85,74,91,101,98,77,77,74,83,94,101,89,68,79,65]},{"label":"カエルDXのオタ活日記","data":[95,78,84,74,79,75,53,70,78,null,46,58,69,57,42,40,62,67,83,70,81,75,69,80,58,55,76,74]},{"label":"今日速2ch","data":[96,84,45,36,71,91,101,101,101,null,97,101,99,101,101,92,77,101,101,101,79,101,100,78,96,66,52,78]},{"label":"footballnet【サッカー5chまとめ】","data":[97,101,101,101,101,101,101,101,101,null,71,101,85,89,101,101,101,101,101,101,101,101,101,101,93,101,92,96]},{"label":"はーとログ","data":[98,92,91,92,83,85,88,87,99,null,94,91,84,95,79,87,93,92,96,94,98,89,88,101,101,101,100,89]},{"label":"ベイスターズ速報＠なんJ","data":[99,101,101,101,101,96,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"まとめブレイド","data":[100,101,98,101,101,101,101,101,101,101,101,101,101,101,56,101,101,88,101,101,101,93,93,101,101,98,101,60]},{"label":"しばたまブログ","data":[101,32,35,97,101,101,101,101,101,101,101,101,101,101,101,101,43,82,101,101,101,101,101,101,101,101,83,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,59,101,59,72,101,66,59,66,null,98,101,101,101,101,101,101,101,101,101,101,101,101,97,94,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,69,101,101,84,101,101,101,68,null,101,57,101,101,101,101,101,101,56,101,101,101,101,101,101,52,101,100]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,79,90,93,101,101,101,99,88,null,101,101,101,101,101,101,89,86,99,99,101,99,101,101,101,101,101,95]},{"label":"投資ちゃんねる","data":[101,81,79,89,97,101,94,93,87,null,96,84,88,96,90,99,95,101,97,91,100,100,89,91,97,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,82,78,101,101,101,101,71,101,101,101,99,101,66,59,44,94,71,101,101,101,32,50,83,100,101,101,85]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,88,93,101,101,101,101,97,101,101,101,87,101,99,101,101,101,101,101,101,101,101,101,101,71,101,101,101]},{"label":"野球の記録で話したい","data":[101,90,8,21,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,94,80,86,59,73,92,101,101,101,101,101,101,101,101,101,91,101,98,101,101,101,97,77,92,86,77,101]},{"label":"パチンコ・パチスロ.com","data":[101,95,101,88,101,101,89,91,93,null,80,17,28,64,72,101,100,70,66,73,67,77,91,71,62,61,62,58]},{"label":"Jamのおうち　＊ごはんと器とインテリア＊","data":[101,96,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"働く大人の非常識","data":[101,97,71,63,101,101,101,101,101,null,89,77,80,101,95,101,101,83,81,72,101,98,101,90,101,87,101,101]},{"label":"チリツモブログ","data":[101,101,74,101,101,67,101,101,101,101,101,101,101,63,101,101,101,101,90,79,101,101,101,81,86,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[101,101,94,79,95,101,97,101,100,null,91,95,101,97,93,95,101,74,76,76,89,86,92,95,98,96,95,91]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,97,87,74,80,101,101,90,null,101,101,77,83,97,98,70,93,101,101,101,101,99,94,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,81,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,94,94,101,101,101,95,null,93,101,101,101,101,72,79,61,93,63,68,101,101,101,42,94,101,101]},{"label":"ろぼ速VIP","data":[101,101,101,98,99,101,101,101,96,null,101,101,95,98,101,101,101,101,101,101,101,92,101,98,91,99,98,90]},{"label":"最強ジャンプ放送局","data":[101,101,101,99,101,101,101,101,101,null,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101]},{"label":"FF14速報","data":[101,101,101,100,101,101,101,101,101,null,87,101,101,101,87,58,81,97,94,98,85,101,101,101,101,85,94,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,63,101,101,81,81,null,101,67,101,101,100,64,101,60,69,101,101,101,101,101,101,57,43,64]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,68,93,101,101,101,101,101,101,101,101,101,101,101,101,67,101,101,101,101,101,101,101,90,93]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,93,101,101,101,101,101,101,101,92,101,101,67,92,101,91,101,101,73,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,98,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ってなんじぇですかー","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アルファルファモザイク","data":[101,101,101,101,101,37,16,19,19,null,18,16,10,10,10,12,10,11,12,12,13,10,11,12,11,10,11,12]},{"label":"海外反応！　I LOVE JAPAN　","data":[101,101,101,101,101,62,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Ｇ速@読売ジャイアンツまとめブログ","data":[101,101,101,101,101,95,100,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,99,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,89,null,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,101,91,null,100,101,101,101,91,89,101,101,101,96,101,101,101,101,101,101,101,98]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,101,101,98,null,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,null,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,101,101,101,101,101,63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"車速報","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ただの主婦が東大目指してみた","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,83,90,101,101,90,101,101,101]},{"label":"VTuberNews","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,96,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,84,101,101,101,97,101,101]},{"label":"ポケモンカード速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,97,101,101,101,79,78,101,101]},{"label":"デジタルニューススレッド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,44,39,82,101,101,101,101]},{"label":"おもちゃの巣（玩具レビュー）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,87,72,63,70,101]},{"label":"鳶の羽","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101]},{"label":"のばらのガーデニングブログ　Hana and Rose Garden+","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,51,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101]},{"label":"へー子の漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97]}];
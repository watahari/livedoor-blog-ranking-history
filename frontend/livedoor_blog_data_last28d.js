var labels = ['2023-04-24','2023-04-25','2023-04-26','2023-04-27','2023-04-28','2023-04-29','2023-04-30','2023-05-01','2023-05-02','2023-05-03','2023-05-04','2023-05-05','2023-05-06','2023-05-07','2023-05-08','2023-05-09','2023-05-10','2023-05-11','2023-05-12','2023-05-13','2023-05-14','2023-05-15','2023-05-16','2023-05-17','2023-05-18','2023-05-19','2023-05-20','2023-05-21',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,6,2,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,3,2,1,2,3,3,2,2,2,2,2,2,3,3,1,3,3,2,2,2,2,2,2,1,1,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,3,4,3,3,3,4,4,4,4,3,3,3,3,4,4,6,7,4,3,3,3,4,3,4,4,5,4]},{"label":"はちま起稿","data":[4,4,5,5,5,5,5,5,5,3,4,4,4,4,5,5,4,4,6,6,6,5,3,4,3,3,4,5]},{"label":"ハムスター速報","data":[5,5,6,4,4,6,7,8,7,5,5,5,5,7,7,7,5,6,5,5,7,7,6,5,5,2,3,6]},{"label":"ヤゴヴのマンガ劇場","data":[6,6,8,7,6,7,6,6,8,6,6,6,6,5,6,6,7,5,7,4,5,4,5,12,37,39,41,35]},{"label":"痛いニュース(ﾉ∀`)","data":[7,7,7,8,7,8,8,10,10,9,7,7,7,9,10,8,9,9,9,7,8,8,7,6,7,8,10,10]},{"label":"暇つぶしニュース","data":[8,8,9,9,9,9,9,7,9,10,10,8,9,10,9,10,10,10,10,9,10,9,9,8,9,10,11,9]},{"label":"マンガと私と猫ブログ。","data":[9,23,41,18,11,25,14,23,64,39,29,26,54,50,67,57,60,58,50,70,48,65,56,41,67,53,65,61]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[10,10,12,11,14,13,15,18,17,15,16,13,13,13,14,13,12,13,16,14,14,13,12,10,12,11,8,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,9,11,10,10,10,10,14,11,11,13,10,10,8,8,9,16,19,18,16,12,14,13,15,18,20,18,20]},{"label":"カラパイア","data":[12,17,10,6,8,4,2,2,3,8,8,12,8,6,2,1,3,8,17,13,15,15,17,16,6,5,6,2]},{"label":"web漫画家やしろあずきの日常","data":[13,19,19,19,12,36,36,38,20,20,39,44,44,54,39,31,8,1,1,28,54,86,101,101,101,101,101,101]},{"label":"なんJ PRIDE","data":[14,11,14,15,13,11,11,11,12,13,9,9,11,11,12,14,13,15,14,10,9,10,10,9,10,12,12,11]},{"label":"【2ch】ニュー速クオリティ","data":[15,15,15,13,15,12,12,15,15,16,15,15,14,15,15,15,14,14,12,12,13,12,11,11,14,13,13,12]},{"label":"アルファルファモザイク","data":[16,13,13,14,16,14,13,13,14,14,12,11,12,12,13,12,11,11,11,8,11,11,8,7,8,7,7,7]},{"label":"山田全自動のあるある日記","data":[17,12,18,17,20,16,16,9,13,12,11,14,19,17,20,25,27,26,24,32,38,38,40,45,60,54,39,26]},{"label":"はむらの毎日マンガ","data":[18,45,59,74,66,52,42,34,58,41,31,49,40,32,31,51,34,22,20,40,26,23,34,25,42,35,21,21]},{"label":"おうまがタイムズ","data":[19,18,16,16,17,15,19,17,19,18,14,16,15,16,16,17,17,17,19,17,21,20,20,19,19,14,16,13]},{"label":"ねいろ速報さん","data":[20,14,22,22,24,26,24,20,22,23,24,20,21,20,18,19,21,24,25,22,23,21,14,21,20,22,23,23]},{"label":"哲学ニュースnwk","data":[21,20,20,24,22,19,22,24,24,17,19,23,23,21,21,20,22,16,15,15,17,16,16,18,15,17,14,14]},{"label":"わんこーる速報！","data":[22,16,17,20,21,18,20,19,21,24,18,17,22,22,19,18,19,21,22,19,19,17,18,14,11,16,20,19]},{"label":"BIPブログ","data":[23,22,21,21,18,20,17,16,16,25,22,19,16,14,11,16,15,12,13,21,20,18,19,20,17,19,15,18]},{"label":"稲妻速報","data":[24,21,23,23,23,22,21,22,23,19,25,22,20,23,22,22,20,20,23,20,24,28,21,22,23,21,22,24]},{"label":"日刊やきう速報","data":[25,24,24,25,19,17,18,25,25,22,17,18,17,26,25,24,18,28,21,11,18,22,26,24,24,15,27,15]},{"label":"ふくよかまるみのピリカラ人生","data":[26,26,27,37,35,28,31,32,34,36,40,30,27,24,28,30,30,27,26,23,25,27,22,26,25,30,32,39]},{"label":"ツイッター速報","data":[27,34,2,12,33,37,41,28,18,40,23,38,39,43,48,33,54,37,8,18,16,19,28,13,35,9,9,32]},{"label":"VIPPERな俺","data":[28,37,30,29,26,33,29,43,30,28,34,39,33,25,30,36,26,29,41,27,39,31,27,36,30,33,33,17]},{"label":"世にも奇妙ななんかの話","data":[29,25,34,26,25,27,25,29,28,30,32,29,30,31,101,32,31,31,38,24,28,26,82,27,21,26,24,25]},{"label":"NEWSぽけまとめーる","data":[30,28,33,27,29,24,28,21,27,21,26,24,25,18,26,21,24,25,28,33,32,29,30,32,22,23,19,30]},{"label":"ぶる速-VIP","data":[31,31,28,31,27,23,23,26,26,26,28,28,32,30,17,29,23,23,27,25,22,24,15,17,13,18,17,27]},{"label":"ラビット速報","data":[32,27,31,34,28,29,32,31,35,29,21,27,26,28,24,23,28,33,39,35,27,30,23,29,29,25,25,34]},{"label":"ゴールデンタイムズ","data":[33,30,35,32,31,21,26,37,33,32,33,25,24,33,27,28,33,34,34,36,31,33,24,28,31,37,31,36]},{"label":"なんJクエスト","data":[34,29,25,30,32,31,30,30,31,35,37,21,18,27,23,26,29,30,29,30,29,25,29,30,28,32,34,33]},{"label":"うしみつ-5chまとめ-","data":[35,36,32,28,30,30,33,27,32,27,35,32,29,29,32,37,35,38,36,29,30,32,25,33,32,36,36,38]},{"label":"ネギ速","data":[36,40,40,41,55,48,44,40,38,31,27,37,35,35,47,46,46,39,37,34,34,42,38,38,36,34,30,37]},{"label":"おーるじゃんる","data":[37,32,29,36,34,32,35,33,29,37,41,34,31,34,35,34,38,42,44,31,35,36,35,35,26,24,28,28]},{"label":"Jnews1","data":[38,101,55,33,56,88,27,12,6,7,20,43,101,101,101,90,32,18,32,86,101,61,45,34,16,27,47,16]},{"label":"あいチャンネル","data":[39,33,37,35,36,35,84,46,36,34,36,35,70,36,37,39,25,35,33,39,80,35,39,31,41,31,37,85]},{"label":"De速","data":[40,42,49,42,38,34,37,36,37,33,30,31,28,47,33,27,39,49,56,53,55,43,46,47,34,45,44,41]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[41,65,67,49,54,68,53,56,46,68,61,59,52,57,65,62,61,71,64,63,60,59,66,63,58,74,55,53]},{"label":"カイカイ反応通信","data":[42,38,36,39,37,39,40,45,39,43,46,36,37,42,38,38,40,40,45,38,43,41,33,37,33,40,38,45]},{"label":"まとめたニュース","data":[43,46,47,46,49,43,34,39,42,44,47,42,41,37,34,43,37,46,43,46,41,46,36,40,43,41,40,47]},{"label":"スズぺぺの人生何とかなってます!!","data":[44,39,38,43,39,40,39,41,43,45,42,52,36,39,46,41,42,41,42,37,37,40,37,39,38,42,42,43]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[45,41,46,47,48,41,43,49,45,42,44,46,43,45,42,47,48,43,46,49,47,50,49,43,50,44,26,22]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[46,50,60,55,42,46,49,57,48,49,49,53,46,40,43,48,45,48,52,50,46,34,42,44,45,52,46,42]},{"label":"うちの夫が糖尿病になっちゃった！","data":[47,43,42,48,45,44,45,51,44,50,50,51,48,46,49,50,49,50,51,45,50,48,47,46,51,50,48,52]},{"label":"IT速報","data":[48,49,45,40,47,54,55,54,49,46,48,48,47,44,40,44,44,52,48,43,45,44,43,52,46,49,49,44]},{"label":"MLB NEWS@まとめ","data":[49,48,54,63,52,63,62,63,56,53,53,50,56,51,53,55,53,60,62,75,57,63,76,61,68,71,71,75]},{"label":"えみコミック！","data":[50,51,50,51,53,47,48,52,51,54,58,55,49,52,52,52,70,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[51,54,44,60,58,58,52,67,65,65,64,63,55,55,55,54,43,53,55,51,61,52,62,58,44,29,43,46]},{"label":"【2ch】コピペ情報局","data":[52,58,43,54,51,51,51,64,61,61,57,47,51,60,51,49,50,54,53,48,53,51,44,51,49,51,45,55]},{"label":"カオスちゃんねる","data":[53,61,66,61,74,66,66,70,59,60,59,60,58,58,68,58,63,57,63,55,52,49,50,55,52,59,61,57]},{"label":"オタク.com －オタコム－","data":[54,56,53,59,59,56,58,58,54,56,60,61,57,61,54,56,56,55,57,59,63,57,55,53,55,56,54,56]},{"label":"人間まおと愉快な仲間たち","data":[55,60,68,66,65,61,65,55,50,48,45,40,38,41,45,40,47,51,49,47,44,45,41,42,47,47,51,49]},{"label":"あにこ便","data":[56,52,62,64,61,65,60,61,55,57,65,67,65,64,60,53,58,65,61,60,62,64,61,65,66,66,64,66]},{"label":"ガールズVIPまとめ","data":[57,55,48,45,60,64,56,53,47,51,62,58,50,56,57,59,51,59,65,52,51,47,54,50,59,57,59,60]},{"label":"気になる芸能まとめ","data":[58,70,82,78,81,82,68,62,70,66,63,66,62,62,50,67,68,66,70,68,58,56,64,64,63,62,62,59]},{"label":"海外の万国反応記＠海外の反応","data":[59,63,65,72,70,69,72,68,69,62,69,69,63,66,61,63,64,62,60,65,67,53,63,66,61,61,58,62]},{"label":"ニュースBUZZ","data":[60,80,73,58,44,42,54,95,71,87,67,72,73,48,36,42,55,47,47,56,49,60,60,57,62,76,50,67]},{"label":"まとめブレイド","data":[61,101,90,101,101,100,59,99,101,75,100,101,84,90,59,86,89,81,83,67,83,101,101,86,72,60,99,71]},{"label":"カエルDXのオタ活日記","data":[62,71,101,101,50,53,47,101,90,38,101,101,101,101,101,101,101,45,31,41,36,39,51,54,65,80,74,96]},{"label":"PS5速報！","data":[63,62,69,67,68,59,70,66,82,83,90,93,100,101,101,77,62,61,67,66,96,68,53,74,94,96,100,101]},{"label":"ぱんをたずねて2000里ちょい","data":[64,35,26,38,41,55,64,50,66,71,78,96,101,101,101,84,101,101,82,73,97,82,87,62,78,68,82,101]},{"label":"ポリー速報","data":[65,57,58,56,57,62,61,60,63,58,55,57,64,59,56,73,59,76,72,57,56,54,59,56,56,65,73,58]},{"label":"もちログ","data":[66,59,63,52,46,45,50,48,40,47,38,33,34,38,44,35,36,32,35,26,33,37,32,23,27,28,29,31]},{"label":"なんJ（まとめては）いかんのか？","data":[67,64,80,69,40,50,46,35,53,59,43,41,45,53,58,66,57,63,54,44,42,62,101,71,57,46,66,50]},{"label":"サル山の裏マンガ","data":[68,68,75,95,62,57,57,73,62,63,101,70,67,67,99,75,67,68,101,72,69,71,68,101,77,101,78,68]},{"label":"芸能人の気になる噂","data":[69,67,77,73,97,83,87,69,72,85,82,83,82,73,72,81,95,77,88,85,71,67,71,67,64,69,63,64]},{"label":"流速VIP","data":[70,73,74,75,67,70,78,65,76,69,54,75,77,71,81,83,73,67,68,58,75,76,80,81,75,75,72,63]},{"label":"阪神タイガースちゃんねる","data":[71,86,85,83,80,93,75,82,78,79,81,78,69,68,64,60,74,83,80,84,70,69,79,84,81,77,83,74]},{"label":"パチンコ・パチスロ.com","data":[72,72,56,65,72,67,83,77,68,80,79,91,78,81,69,71,69,82,69,64,76,55,57,69,39,48,52,54]},{"label":"ベイスターズ速報＠なんJ","data":[73,100,101,99,82,73,63,78,95,81,68,74,80,86,71,79,93,101,101,101,101,101,101,101,101,101,101,89]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[74,69,78,82,73,74,67,75,75,84,72,62,60,65,62,74,79,88,73,79,66,84,98,87,85,100,84,70]},{"label":"ついんてーる速報","data":[75,74,72,79,76,71,71,71,84,72,71,73,76,69,73,72,90,75,77,69,59,83,65,75,87,73,75,65]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[76,79,84,84,79,76,88,93,83,78,75,82,87,84,83,80,71,70,76,78,82,85,77,72,54,79,76,79]},{"label":"2chコピペ保存道場","data":[77,82,81,90,84,94,98,96,99,91,95,101,91,77,78,93,84,90,97,94,93,99,81,82,80,83,86,86]},{"label":"サカラボ | サッカーまとめ速報","data":[78,89,94,94,101,98,101,85,96,96,70,84,85,89,79,101,88,99,85,76,85,80,84,90,86,101,89,100]},{"label":"鷹速@ホークスまとめブログ","data":[79,75,71,62,86,85,90,97,74,82,74,77,71,78,75,64,77,89,84,91,86,81,83,85,95,84,81,80]},{"label":"ダイエット速報＠2ちゃんねる","data":[80,101,101,101,101,96,101,101,101,101,87,101,101,101,97,101,101,101,101,101,101,101,101,80,100,101,101,101]},{"label":"つんの日常ブログ","data":[81,101,76,50,43,72,101,101,97,93,84,45,53,94,101,101,98,91,92,101,101,66,101,49,71,101,53,69]},{"label":"軍事・ミリタリー速報☆彡","data":[82,76,87,80,87,81,81,89,89,74,77,86,86,88,84,101,80,73,74,77,74,74,73,79,76,81,70,76]},{"label":"鈴木さん速報","data":[83,101,101,96,90,101,100,84,81,94,83,85,90,96,90,91,92,96,95,101,101,100,101,95,98,99,95,99]},{"label":"野球お絵かき@なんJまとめ","data":[84,101,101,101,75,38,38,42,101,73,51,56,66,72,101,101,101,101,101,98,81,95,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[85,92,88,88,96,78,79,91,100,101,101,101,101,101,101,101,101,101,94,54,64,77,74,83,99,101,91,101]},{"label":"はーとログ","data":[86,97,97,101,95,86,86,81,93,89,93,87,93,79,80,94,99,101,86,92,101,101,99,96,101,98,93,88]},{"label":"ライフハックちゃんねる弐式","data":[87,66,57,77,69,75,76,90,79,90,101,92,81,76,70,89,85,93,78,74,73,72,75,92,88,92,77,72]},{"label":"ずっと日曜日のターン","data":[88,101,92,89,101,101,101,76,67,101,101,101,79,101,92,65,94,87,71,61,89,96,78,101,82,64,98,83]},{"label":"ろぼ速VIP","data":[89,96,93,93,99,101,93,94,73,95,86,79,88,95,87,95,96,86,66,81,90,98,88,91,92,95,94,87]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[90,101,89,85,100,101,99,101,101,70,73,100,101,101,101,101,101,101,101,87,98,97,101,101,74,63,85,92]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[91,90,101,101,101,101,96,101,101,77,76,54,83,101,101,101,101,101,101,101,101,101,86,76,89,89,101,82]},{"label":"投資ちゃんねる","data":[92,99,101,101,93,99,89,92,101,98,99,98,94,91,96,101,86,85,99,96,87,92,93,99,96,94,101,97]},{"label":"働く大人の非常識","data":[93,77,101,101,101,101,101,101,98,101,101,101,101,75,88,101,81,80,87,101,65,58,72,93,101,101,101,101]},{"label":"まとめロッテ！","data":[94,91,101,98,101,89,94,98,88,101,101,101,92,98,91,101,101,101,101,89,94,90,94,101,101,97,97,94]},{"label":"ふぇー速","data":[95,101,96,87,89,101,101,87,101,67,89,76,98,101,74,101,97,101,101,101,77,79,92,101,69,101,79,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[96,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[97,101,101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,30,42,91,101,101,101,101,101,101,101]},{"label":"沼津つーしん","data":[98,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[99,101,101,101,94,101,101,101,57,97,101,68,59,49,77,69,87,56,101,101,99,101,96,101,90,101,101,98]},{"label":"デジタルニューススレッド","data":[100,101,101,101,101,101,101,101,101,101,101,101,95,99,101,101,101,101,91,99,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,44,95,44,101,60,101,44,41,99,88,101,42,101,41,70,41,36,58,101,40,89,31,59,101,43,67,29]},{"label":"野球の記録で話したい","data":[101,47,51,101,101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,40,38,57,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,53,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,78,79,101,101,101,101,101,94,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[101,81,101,101,63,84,91,83,60,52,52,71,75,63,101,101,101,72,40,82,95,70,52,94,101,78,92,73]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[101,83,83,71,101,87,69,74,77,76,94,94,68,83,101,97,100,78,75,71,78,87,89,77,84,70,69,95]},{"label":"馬鳥速報","data":[101,85,86,81,83,77,85,101,91,92,96,89,96,87,76,78,78,79,79,62,68,73,58,68,70,55,60,77]},{"label":"happy-go-lucky　-心地いい暮らしのコツ-","data":[101,87,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,97,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,94,101,92,92,101,101,80,86,101,101,99,101,74,82,98,101,101,101,101,100,101,101,101,101,101,101,91]},{"label":"お料理速報","data":[101,95,101,86,71,80,97,86,87,101,91,81,74,100,89,87,101,97,90,93,101,88,90,101,93,86,101,101]},{"label":"VIP NEWS","data":[101,98,101,101,101,101,74,101,101,64,101,101,61,85,94,92,76,101,81,101,79,93,69,78,101,72,90,84]},{"label":"今日もブブはからまわり。","data":[101,101,39,70,88,95,101,101,101,101,101,101,101,101,101,101,101,100,98,101,101,101,101,100,83,90,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,52,101,98,101,101,101,101,55,101,97,101,101,101,101,52,101,89,101,101,101,101,48,101,87,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,61,53,85,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,45,66,95,101,90,92,101,85,89,79,91,88,101]},{"label":"五箇野人の海外旅日記","data":[101,101,98,91,101,101,101,101,101,101,101,101,101,101,101,101,65,64,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,99,97,101,92,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,95,88,91,88,80,78]},{"label":"ミラクルファミリー","data":[101,101,100,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,101,101,35,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,76,101,101,101,101,101,101,80,101,101,101,101,76,101,69,101,80,101,101,101,101,73,101,101,101]},{"label":"筋肉速報","data":[101,101,101,100,101,101,101,101,101,101,101,95,99,80,86,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,64,101,92,88,92,101,101,101,101,101,66,101,72,101,101,101,101,101,101,98,101,67,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"毎日でぶどり","data":[101,101,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,79,101,101,101,101,66,101,101,101,101,101,101,84,101,101,88,94,101,97,48,85,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あおばブログ","data":[101,101,101,101,101,91,80,59,80,88,85,88,101,97,101,101,101,74,59,83,72,91,91,70,53,58,56,51]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,73,72,85,86,98,101,101,93,98,85,91,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,101,77,101,101,101,101,101,97,82,101,101,101,101,101,101,84,75,70,101,101,101,101,101]},{"label":"しなのんちのいくる","data":[101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽかぽかびより  (レシピ＆作り方・コツ)","data":[101,101,101,101,101,101,101,47,52,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,100,101,101,101,101,89,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,101,100,99,101,101,101,101,101,101,101,101,101,93,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,101,101,56,64,72,70,63,61,83,92,93,95,101,101,101,101,101,101,101,101]},{"label":"まりげのまんが。","data":[101,101,101,101,101,101,101,101,101,101,92,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"テレビマン漫画家 真船佳奈のトラブルDAYS","data":[101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,19,29,68,101,101,101,101,101,101,101,101,101,101,101,40]},{"label":"じゃじゃ嫁日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,92,85,82,82,44,101,101,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,90]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マランダー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,11,75,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"会社員倉間のまいにちホリデー！！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,100,101,101,101,101,101,101,101,101]},{"label":"ひとこま作者","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,4,6,48,73,101,101,101,93]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,67,101,101,101,101,101]},{"label":"水族館に行ってまいります。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,48]},{"label":"へー子の漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,81]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101]}];
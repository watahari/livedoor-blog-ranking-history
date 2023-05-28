var labels = ['2023-05-01','2023-05-02','2023-05-03','2023-05-04','2023-05-05','2023-05-06','2023-05-07','2023-05-08','2023-05-09','2023-05-10','2023-05-11','2023-05-12','2023-05-13','2023-05-14','2023-05-15','2023-05-16','2023-05-17','2023-05-18','2023-05-19','2023-05-20','2023-05-21','2023-05-22','2023-05-23','2023-05-24','2023-05-25','2023-05-26','2023-05-27','2023-05-28',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,6,2,1,1,1,1,1,1,1,1]},{"label":"カラパイア","data":[2,3,8,8,12,8,6,2,1,3,8,17,13,15,15,17,16,6,5,6,2,3,15,7,6,14,27,35]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,2,2,2,2,2,3,3,1,3,3,2,2,2,2,2,2,1,1,3,2,2,2,2,2,2,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,4,3,3,3,3,4,4,6,7,4,3,3,3,4,3,4,4,5,4,4,3,3,4,5,5,3]},{"label":"はちま起稿","data":[5,5,3,4,4,4,4,5,5,4,4,6,6,6,5,3,4,3,3,4,5,5,4,5,5,4,4,4]},{"label":"ヤゴヴのマンガ劇場","data":[6,8,6,6,6,6,5,6,6,7,5,7,4,5,4,5,12,37,39,41,35,19,18,17,16,20,15,16]},{"label":"暇つぶしニュース","data":[7,9,10,10,8,9,10,9,10,10,10,10,9,10,9,9,8,9,10,11,9,8,8,10,9,8,8,8]},{"label":"ハムスター速報","data":[8,7,5,5,5,5,7,7,7,5,6,5,5,7,7,6,5,5,2,3,6,7,5,4,3,3,3,5]},{"label":"山田全自動のあるある日記","data":[9,13,12,11,14,19,17,20,25,27,26,24,32,38,38,40,45,60,54,39,26,18,33,33,36,37,43,19]},{"label":"痛いニュース(ﾉ∀`)","data":[10,10,9,7,7,7,9,10,8,9,9,9,7,8,8,7,6,7,8,10,10,11,6,8,8,6,6,6]},{"label":"なんJ PRIDE","data":[11,12,13,9,9,11,11,12,14,13,15,14,10,9,10,10,9,10,12,12,11,10,10,11,10,13,13,13]},{"label":"Jnews1","data":[12,6,7,20,43,101,101,101,90,32,18,32,86,101,61,45,34,16,27,47,16,6,14,21,43,85,101,101]},{"label":"アルファルファモザイク","data":[13,14,14,12,11,12,12,13,12,11,11,11,8,11,11,8,7,8,7,7,7,9,7,6,7,7,7,7]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[14,11,11,13,10,10,8,8,9,16,19,18,16,12,14,13,15,18,20,18,20,22,22,28,28,30,22,17]},{"label":"【2ch】ニュー速クオリティ","data":[15,15,16,15,15,14,15,15,15,14,14,12,12,13,12,11,11,14,13,13,12,15,12,14,13,11,11,11]},{"label":"BIPブログ","data":[16,16,25,22,19,16,14,11,16,15,12,13,21,20,18,19,20,17,19,15,18,17,17,22,21,16,14,12]},{"label":"おうまがタイムズ","data":[17,19,18,14,16,15,16,16,17,17,17,19,17,21,20,20,19,19,14,16,13,13,16,24,17,19,19,15]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,17,15,16,13,13,13,14,13,12,13,16,14,14,13,12,10,12,11,8,8,12,9,9,14,10,10,14]},{"label":"わんこーる速報！","data":[19,21,24,18,17,22,22,19,18,19,21,22,19,19,17,18,14,11,16,20,19,14,13,12,12,15,12,9]},{"label":"ねいろ速報さん","data":[20,22,23,24,20,21,20,18,19,21,24,25,22,23,21,14,21,20,22,23,23,23,19,23,24,27,28,23]},{"label":"NEWSぽけまとめーる","data":[21,27,21,26,24,25,18,26,21,24,25,28,33,32,29,30,32,22,23,19,30,31,28,34,29,23,26,28]},{"label":"稲妻速報","data":[22,23,19,25,22,20,23,22,22,20,20,23,20,24,28,21,22,23,21,22,24,28,24,25,26,24,24,22]},{"label":"マンガと私と猫ブログ。","data":[23,64,39,29,26,54,50,67,57,60,58,50,70,48,65,56,41,67,53,65,61,52,48,47,66,54,37,36]},{"label":"哲学ニュースnwk","data":[24,24,17,19,23,23,21,21,20,22,16,15,15,17,16,16,18,15,17,14,14,16,21,19,11,9,9,10]},{"label":"日刊やきう速報","data":[25,25,22,17,18,17,26,25,24,18,28,21,11,18,22,26,24,24,15,27,15,21,30,31,23,28,29,25]},{"label":"ぶる速-VIP","data":[26,26,26,28,28,32,30,17,29,23,23,27,25,22,24,15,17,13,18,17,27,20,20,27,18,17,17,24]},{"label":"うしみつ-5chまとめ-","data":[27,32,27,35,32,29,29,32,37,35,38,36,29,30,32,25,33,32,36,36,38,33,34,38,34,36,33,26]},{"label":"ツイッター速報","data":[28,18,40,23,38,39,43,48,33,54,37,8,18,16,19,28,13,35,9,9,32,36,40,15,30,46,62,43]},{"label":"世にも奇妙ななんかの話","data":[29,28,30,32,29,30,31,101,32,31,31,38,24,28,26,82,27,21,26,24,25,26,77,26,19,18,20,20]},{"label":"なんJクエスト","data":[30,31,35,37,21,18,27,23,26,29,30,29,30,29,25,29,30,28,32,34,33,24,25,37,35,31,35,27]},{"label":"ラビット速報","data":[31,35,29,21,27,26,28,24,23,28,33,39,35,27,30,23,29,29,25,25,34,32,23,35,31,35,32,30]},{"label":"ふくよかまるみのピリカラ人生","data":[32,34,36,40,30,27,24,28,30,30,27,26,23,25,27,22,26,25,30,32,39,34,29,30,27,22,25,29]},{"label":"おーるじゃんる","data":[33,29,37,41,34,31,34,35,34,38,42,44,31,35,36,35,35,26,24,28,28,29,32,40,37,34,34,31]},{"label":"はむらの毎日マンガ","data":[34,58,41,31,49,40,32,31,51,34,22,20,40,26,23,34,25,42,35,21,21,45,27,20,45,29,21,18]},{"label":"なんJ（まとめては）いかんのか？","data":[35,53,59,43,41,45,53,58,66,57,63,54,44,42,62,101,71,57,46,66,50,41,85,77,56,52,63,54]},{"label":"De速","data":[36,37,33,30,31,28,47,33,27,39,49,56,53,55,43,46,47,34,45,44,41,39,44,51,47,48,53,52]},{"label":"ゴールデンタイムズ","data":[37,33,32,33,25,24,33,27,28,33,34,34,36,31,33,24,28,31,37,31,36,35,31,41,38,33,31,37]},{"label":"web漫画家やしろあずきの日常","data":[38,20,20,39,44,44,54,39,31,8,1,1,28,54,86,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめたニュース","data":[39,42,44,47,42,41,37,34,43,37,46,43,46,41,46,36,40,43,41,40,47,37,45,39,46,42,41,39]},{"label":"ネギ速","data":[40,38,31,27,37,35,35,47,46,46,39,37,34,34,42,38,38,36,34,30,37,40,37,43,41,44,40,40]},{"label":"スズぺぺの人生何とかなってます!!","data":[41,43,45,42,52,36,39,46,41,42,41,42,37,37,40,37,39,38,42,42,43,43,38,42,40,40,36,38]},{"label":"野球お絵かき@なんJまとめ","data":[42,101,73,51,56,66,72,101,101,101,101,101,98,81,95,101,101,101,101,101,101,101,101,96,82,63,60,50]},{"label":"VIPPERな俺","data":[43,30,28,34,39,33,25,30,36,26,29,41,27,39,31,27,36,30,33,33,17,25,39,32,33,26,30,42]},{"label":"ゆっぺのゆる漫画ブログ","data":[44,41,99,88,101,42,101,41,70,41,36,58,101,40,89,31,59,101,43,67,29,76,64,53,32,62,46,78]},{"label":"カイカイ反応通信","data":[45,39,43,46,36,37,42,38,38,40,40,45,38,43,41,33,37,33,40,38,45,44,35,44,42,39,38,41]},{"label":"あいチャンネル","data":[46,36,34,36,35,70,36,37,39,25,35,33,39,80,35,39,31,41,31,37,85,30,36,36,39,32,42,33]},{"label":"ぽかぽかびより  (レシピ＆作り方・コツ)","data":[47,52,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もちログ","data":[48,40,47,38,33,34,38,44,35,36,32,35,26,33,37,32,23,27,28,29,31,27,26,29,22,25,23,21]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[49,45,42,44,46,43,45,42,47,48,43,46,49,47,50,49,43,50,44,26,22,38,41,46,49,49,45,34]},{"label":"ぱんをたずねて2000里ちょい","data":[50,66,71,78,96,101,101,101,84,101,101,82,73,97,82,87,62,78,68,82,101,101,61,55,78,64,83,100]},{"label":"うちの夫が糖尿病になっちゃった！","data":[51,44,50,50,51,48,46,49,50,49,50,51,45,50,48,47,46,51,50,48,52,51,46,50,52,50,51,46]},{"label":"えみコミック！","data":[52,51,54,58,55,49,52,52,52,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガールズVIPまとめ","data":[53,47,51,62,58,50,56,57,59,51,59,65,52,51,47,54,50,59,57,59,60,55,57,69,75,80,69,73]},{"label":"IT速報","data":[54,49,46,48,48,47,44,40,44,44,52,48,43,45,44,43,52,46,49,49,44,48,43,52,55,53,54,48]},{"label":"人間まおと愉快な仲間たち","data":[55,50,48,45,40,38,41,45,40,47,51,49,47,44,45,41,42,47,47,51,49,46,47,64,58,38,39,53]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[56,46,68,61,59,52,57,65,62,61,71,64,63,60,59,66,63,58,74,55,53,54,54,63,57,65,59,51]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[57,48,49,49,53,46,40,43,48,45,48,52,50,46,34,42,44,45,52,46,42,49,49,56,48,45,48,57]},{"label":"オタク.com －オタコム－","data":[58,54,56,60,61,57,61,54,56,56,55,57,59,63,57,55,53,55,56,54,56,60,52,62,59,58,57,56]},{"label":"あおばブログ","data":[59,80,88,85,88,101,97,101,101,101,74,59,83,72,91,91,70,53,58,56,51,53,56,45,54,43,47,59]},{"label":"ポリー速報","data":[60,63,58,55,57,64,59,56,73,59,76,72,57,56,54,59,56,56,65,73,58,64,59,65,64,70,61,64]},{"label":"あにこ便","data":[61,55,57,65,67,65,64,60,53,58,65,61,60,62,64,61,65,66,66,64,66,65,55,66,69,67,68,63]},{"label":"気になる芸能まとめ","data":[62,70,66,63,66,62,62,50,67,68,66,70,68,58,56,64,64,63,62,62,59,67,68,78,74,71,72,61]},{"label":"MLB NEWS@まとめ","data":[63,56,53,53,50,56,51,53,55,53,60,62,75,57,63,76,61,68,71,71,75,68,66,71,73,74,91,97]},{"label":"【2ch】コピペ情報局","data":[64,61,61,57,47,51,60,51,49,50,54,53,48,53,51,44,51,49,51,45,55,56,51,57,50,51,50,47]},{"label":"流速VIP","data":[65,76,69,54,75,77,71,81,83,73,67,68,58,75,76,80,81,75,75,72,63,57,65,70,71,59,58,55]},{"label":"PS5速報！","data":[66,82,83,90,93,100,101,101,77,62,61,67,66,96,68,53,74,94,96,100,101,73,79,76,87,57,84,92]},{"label":"乃木坂46まとめ 1/46","data":[67,65,65,64,63,55,55,55,54,43,53,55,51,61,52,62,58,44,29,43,46,42,11,13,15,12,18,32]},{"label":"海外の万国反応記＠海外の反応","data":[68,69,62,69,69,63,66,61,63,64,62,60,65,67,53,63,66,61,61,58,62,61,58,68,68,61,66,65]},{"label":"芸能人の気になる噂","data":[69,72,85,82,83,82,73,72,81,95,77,88,85,71,67,71,67,64,69,63,64,63,70,73,76,92,90,84]},{"label":"カオスちゃんねる","data":[70,59,60,59,60,58,58,68,58,63,57,63,55,52,49,50,55,52,59,61,57,58,53,58,60,69,67,60]},{"label":"ついんてーる速報","data":[71,84,72,71,73,76,69,73,72,90,75,77,69,59,83,65,75,87,73,75,65,59,76,93,88,81,85,75]},{"label":"なんJ　高校野球まとめ速報","data":[72,85,86,98,101,101,93,98,85,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[73,62,63,101,70,67,67,99,75,67,68,101,72,69,71,68,101,77,101,78,68,66,60,74,65,90,64,58]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[74,77,76,94,94,68,83,101,97,100,78,75,71,78,87,89,77,84,70,69,95,80,81,72,72,73,70,76]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[75,75,84,72,62,60,65,62,74,79,88,73,79,66,84,98,87,85,100,84,70,75,96,91,77,79,92,89]},{"label":"ずっと日曜日のターン","data":[76,67,101,101,101,79,101,92,65,94,87,71,61,89,96,78,101,82,64,98,83,99,80,81,79,101,101,90]},{"label":"パチンコ・パチスロ.com","data":[77,68,80,79,91,78,81,69,71,69,82,69,64,76,55,57,69,39,48,52,54,69,50,49,53,66,65,66]},{"label":"ベイスターズ速報＠なんJ","data":[78,95,81,68,74,80,86,71,79,93,101,101,101,101,101,101,101,101,101,101,89,87,97,101,101,101,101,101]},{"label":"アクアカタリスト","data":[79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[80,86,101,101,99,101,74,82,98,101,101,101,101,100,101,101,101,101,101,101,91,98,101,101,101,101,101,101]},{"label":"はーとログ","data":[81,93,89,93,87,93,79,80,94,99,101,86,92,101,101,99,96,101,98,93,88,82,74,99,101,101,96,85]},{"label":"阪神タイガースちゃんねる","data":[82,78,79,81,78,69,68,64,60,74,83,80,84,70,69,79,84,81,77,83,74,72,63,79,83,78,77,74]},{"label":"今日速2ch","data":[83,60,52,52,71,75,63,101,101,101,72,40,82,95,70,52,94,101,78,92,73,101,101,54,101,101,99,81]},{"label":"鈴木さん速報","data":[84,81,94,83,85,90,96,90,91,92,96,95,101,101,100,101,95,98,99,95,99,101,91,95,94,86,93,98]},{"label":"サカラボ | サッカーまとめ速報","data":[85,96,96,70,84,85,89,79,101,88,99,85,76,85,80,84,90,86,101,89,100,74,89,87,81,77,87,83]},{"label":"お料理速報","data":[86,87,101,91,81,74,100,89,87,101,97,90,93,101,88,90,101,93,86,101,101,88,98,101,95,97,100,101]},{"label":"ふぇー速","data":[87,101,67,89,76,98,101,74,101,97,101,101,101,77,79,92,101,69,101,79,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[88,92,101,101,101,101,101,66,101,72,101,101,101,101,101,101,98,101,67,101,101,101,101,82,67,68,79,71]},{"label":"軍事・ミリタリー速報☆彡","data":[89,89,74,77,86,86,88,84,101,80,73,74,77,74,74,73,79,76,81,70,76,71,69,80,80,75,76,77]},{"label":"ライフハックちゃんねる弐式","data":[90,79,90,101,92,81,76,70,89,85,93,78,74,73,72,75,92,88,92,77,72,94,73,89,101,96,71,67]},{"label":"やみ速@なんJ西武まとめ","data":[91,100,101,101,101,101,101,101,101,101,101,94,54,64,77,74,83,99,101,91,101,101,101,75,89,88,94,91]},{"label":"投資ちゃんねる","data":[92,101,98,99,98,94,91,96,101,86,85,99,96,87,92,93,99,96,94,101,97,95,100,101,101,101,97,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[93,83,78,75,82,87,84,83,80,71,70,76,78,82,85,77,72,54,79,76,79,81,84,86,85,84,73,82]},{"label":"ろぼ速VIP","data":[94,73,95,86,79,88,95,87,95,96,86,66,81,90,98,88,91,92,95,94,87,92,72,94,92,94,95,86]},{"label":"ニュースBUZZ","data":[95,71,87,67,72,73,48,36,42,55,47,47,56,49,60,60,57,62,76,50,67,50,42,60,70,60,44,44]},{"label":"2chコピペ保存道場","data":[96,99,91,95,101,91,77,78,93,84,90,97,94,93,99,81,82,80,83,86,86,83,88,100,97,93,86,80]},{"label":"鷹速@ホークスまとめブログ","data":[97,74,82,74,77,71,78,75,64,77,89,84,91,86,81,83,85,95,84,81,80,85,90,90,84,76,75,79]},{"label":"まとめロッテ！","data":[98,88,101,101,101,92,98,91,101,101,101,101,89,94,90,94,101,101,97,97,94,89,83,85,99,87,81,95]},{"label":"まとめブレイド","data":[99,101,75,100,101,84,90,59,86,89,81,83,67,83,101,101,86,72,60,99,71,70,101,101,101,101,101,101]},{"label":"S-MAX","data":[100,101,101,101,101,89,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,57,97,101,68,59,49,77,69,87,56,101,101,99,101,96,101,90,101,101,98,96,101,101,101,101,74,62]},{"label":"カエルDXのオタ活日記","data":[101,90,38,101,101,101,101,101,101,101,45,31,41,36,39,51,54,65,80,74,96,101,101,92,86,101,101,101]},{"label":"馬鳥速報","data":[101,91,92,96,89,96,87,76,78,78,79,79,62,68,73,58,68,70,55,60,77,84,67,48,44,41,49,45]},{"label":"オタクニュース","data":[101,94,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,97,93,84,45,53,94,101,101,98,91,92,101,101,66,101,49,71,101,53,69,86,101,101,90,101,101,101]},{"label":"働く大人の非常識","data":[101,98,101,101,101,101,75,88,101,81,80,87,101,65,58,72,93,101,101,101,101,101,101,101,96,83,82,72]},{"label":"YoMuRy - ヨムリー -","data":[101,101,55,101,97,101,101,101,101,52,101,89,101,101,101,101,48,101,87,101,101,101,101,59,101,82,101,101]},{"label":"VIP NEWS","data":[101,101,64,101,101,61,85,94,92,76,101,81,101,79,93,69,78,101,72,90,84,101,71,83,62,55,56,49]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,101,70,73,100,101,101,101,101,101,101,101,87,98,97,101,101,74,63,85,92,97,101,101,101,98,98,94]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,77,76,54,83,101,101,101,101,101,101,101,101,101,86,76,89,89,101,82,101,93,18,25,56,78,70]},{"label":"登山ちゃんねる","data":[101,101,100,101,101,101,101,100,99,101,101,101,101,101,101,101,101,101,93,101,101,100,101,101,101,101,101,99]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,56,64,72,70,63,61,83,92,93,95,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,66,101,101,101,101,101,101,84,101,101,88,94,101,97,48,85,101,101,101,62,61,101,101,52,93]},{"label":"つつみのブログ","data":[101,101,101,80,101,101,101,101,76,101,69,101,80,101,101,101,101,73,101,101,101,101,75,101,101,101,80,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,87,101,101,101,97,101,101,101,101,101,101,101,101,80,100,101,101,101,101,101,101,101,101,101,101]},{"label":"まりげのまんが。","data":[101,101,101,92,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"テレビマン漫画家 真船佳奈のトラブルDAYS","data":[101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,95,99,80,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,101,101,101,101,95,99,101,101,101,101,91,99,101,101,101,101,101,101,101,101,101,101,101,100,99,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,97,82,101,101,101,101,101,101,84,75,70,101,101,101,101,101,101,101,97,93,101,101,69]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,19,29,68,101,101,101,101,101,101,101,101,101,101,101,40,62,101,101,101,101,101,101]},{"label":"じゃじゃ嫁日記","data":[101,101,101,101,101,101,92,85,82,82,44,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,90,101,94,98,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マランダー","data":[101,101,101,101,101,101,101,101,11,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,101,101,101,101,101,45,66,95,101,90,92,101,85,89,79,91,88,101,101,86,67,63,47,55,68]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,97,101,101,101,101,101,101,95,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,95,88,91,88,80,78,90,82,84,91,100,89,87]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,65,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"会社員倉間のまいにちホリデー！！","data":[101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,100,98,101,101,101,101,100,83,90,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,30,42,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,101,101,101,101,96,100,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101]},{"label":"ひとこま作者","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,40,38,57,101,101,101,101,101,91,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,4,6,48,73,101,101,101,93,78,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,67,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,93,99,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,101,101,35,101,101,101,101,61,21,16,101]},{"label":"水族館に行ってまいります。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,101,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,48,91,101,101,101,101,101,101]},{"label":"へー子の漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,81,77,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101]},{"label":"ともだちに忍者が多い人のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,101,101,101,101,101,101]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 乃木りんく","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,88,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101]},{"label":"ゆとりあるシンプルな暮らし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,16,20,101,101,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51,89,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"Eorzean","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,88,96]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88]}];
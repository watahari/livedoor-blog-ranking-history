var labels = ['2023-08-03','2023-08-04','2023-08-05','2023-08-06','2023-08-07','2023-08-08','2023-08-09','2023-08-10','2023-08-11','2023-08-12','2023-08-13','2023-08-14','2023-08-15','2023-08-16','2023-08-17','2023-08-18','2023-08-19','2023-08-20','2023-08-21','2023-08-22','2023-08-23','2023-08-24','2023-08-25','2023-08-26','2023-08-27','2023-08-28','2023-08-29','2023-08-30',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]},{"label":"ハムスター速報","data":[3,3,4,4,3,5,5,4,4,5,3,7,3,3,4,4,3,5,7,4,4,4,4,3,3,7,7,4]},{"label":"はちま起稿","data":[4,4,3,3,4,4,3,3,3,3,4,3,4,4,3,3,4,4,3,3,3,3,3,5,5,3,3,3]},{"label":"痛いニュース(ﾉ∀`)","data":[5,6,6,8,8,8,8,6,6,7,7,10,7,5,6,8,9,8,10,8,6,6,7,7,10,9,8,8]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,5,5,6,7,7,7,5,5,4,6,5,5,7,9,5,7,3,5,5,7,7,6,6,6,6,6,7]},{"label":"哲学ニュースnwk","data":[7,10,10,13,13,10,10,8,7,10,10,12,10,11,12,11,14,13,16,11,12,11,10,8,14,15,13,14]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[8,7,7,5,5,6,6,7,8,8,5,4,6,6,5,6,6,6,4,6,5,5,5,4,7,4,5,6]},{"label":"アルファルファモザイク","data":[9,8,11,12,12,12,12,11,10,9,9,9,9,10,10,10,10,10,13,13,10,9,11,12,9,10,10,10]},{"label":"暇つぶしニュース","data":[10,9,9,11,10,11,9,9,9,6,8,8,11,8,11,9,11,15,11,9,8,12,12,9,11,11,11,11]},{"label":"【2ch】ニュー速クオリティ","data":[11,12,14,15,15,14,14,14,12,11,11,14,13,13,13,15,15,16,17,15,13,13,13,14,15,13,14,15]},{"label":"もちログ","data":[12,13,13,14,14,13,13,13,13,12,14,17,20,17,15,14,12,11,12,10,9,8,8,10,12,12,12,12]},{"label":"BIPブログ","data":[13,15,21,16,18,19,19,23,18,13,12,13,14,18,18,19,17,17,15,17,18,22,19,15,13,17,16,19]},{"label":"ヤゴヴのマンガ劇場","data":[14,36,52,41,33,32,30,29,25,21,18,21,16,15,14,12,13,12,14,12,11,10,9,11,8,8,9,9]},{"label":"ツイッター速報","data":[15,11,8,9,11,25,48,42,14,25,42,47,34,27,46,37,38,23,8,30,32,14,36,61,41,35,38,43]},{"label":"わんこーる速報！","data":[16,16,17,19,21,22,18,19,22,19,19,20,18,23,23,25,22,25,23,18,15,20,22,23,22,16,19,21]},{"label":"人間まおと愉快な仲間たち","data":[17,14,12,10,9,9,11,12,11,14,15,16,12,12,8,7,8,7,6,7,14,40,43,44,57,47,42,40]},{"label":"なんJ PRIDE","data":[18,18,20,22,19,18,22,20,20,20,22,23,24,19,19,20,21,19,19,19,20,19,21,18,17,22,20,24]},{"label":"ねいろ速報さん","data":[19,19,16,18,17,17,16,17,17,15,13,15,15,16,17,16,18,22,21,14,17,17,15,16,18,18,15,20]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[20,17,22,21,16,16,15,15,19,18,17,18,17,14,16,17,16,20,22,20,16,16,17,17,20,19,17,16]},{"label":"あいチャンネル","data":[21,29,27,42,39,21,31,24,35,24,31,69,29,35,26,30,23,52,44,23,29,25,31,25,62,101,41,25]},{"label":"ふくよかまるみのピリカラ人生","data":[22,37,26,38,25,42,29,40,24,49,57,29,62,54,48,42,39,40,39,37,36,36,28,30,55,38,36,38]},{"label":"なんJクエスト","data":[23,26,33,27,26,29,25,33,34,26,24,19,25,22,20,22,26,29,26,28,25,26,23,21,21,24,24,26]},{"label":"稲妻速報","data":[24,23,24,25,24,24,23,25,29,31,25,28,30,29,29,24,27,33,31,32,30,30,26,28,28,28,31,32]},{"label":"ぶる速-VIP","data":[25,20,23,17,22,20,21,18,16,17,21,22,23,20,21,23,24,26,28,21,21,23,14,19,24,27,22,18]},{"label":"NEWSぽけまとめーる","data":[26,28,19,20,20,15,17,21,21,22,20,11,19,21,24,21,19,18,18,25,19,27,20,22,23,21,18,23]},{"label":"おうまがタイムズ","data":[27,21,18,23,28,27,20,16,23,23,23,25,22,26,22,18,20,24,27,24,22,18,16,20,16,23,23,22]},{"label":"ラビット速報","data":[28,27,28,24,27,31,26,26,32,27,26,27,27,25,27,28,31,32,33,29,28,31,27,31,26,31,26,27]},{"label":"カラパイア","data":[29,22,15,7,6,3,4,10,15,16,16,6,8,9,7,13,5,21,9,16,23,24,18,13,4,5,4,5]},{"label":"日刊やきう速報","data":[30,34,29,29,29,34,34,32,28,28,33,24,35,32,31,27,30,28,34,35,33,15,25,24,19,30,34,28]},{"label":"ゴールデンタイムズ","data":[31,24,25,32,23,28,24,28,26,32,27,30,21,24,25,26,25,35,25,27,27,35,29,34,30,34,27,30]},{"label":"おーるじゃんる","data":[32,33,32,28,32,30,32,30,33,33,35,32,31,28,28,32,36,37,38,36,31,34,30,29,31,33,30,13]},{"label":"ネギ速","data":[33,35,35,33,35,37,35,31,36,29,28,33,33,36,37,40,43,43,40,38,34,37,35,36,27,26,28,36]},{"label":"うしみつ-5chまとめ-","data":[34,31,34,31,31,23,27,27,31,30,29,26,28,33,33,38,37,36,36,34,38,33,32,33,32,32,33,34]},{"label":"カイカイ反応通信","data":[35,41,36,36,42,41,40,41,37,38,39,39,40,41,43,43,42,41,49,39,43,41,37,40,36,40,35,37]},{"label":"VIPPERな俺","data":[36,32,30,26,30,35,28,22,27,35,34,31,32,30,30,31,32,34,32,22,24,29,24,26,25,29,32,29]},{"label":"まとめたニュース","data":[37,38,37,40,38,40,38,35,38,36,38,36,39,38,35,33,48,47,53,31,35,32,33,37,37,41,39,39]},{"label":"IT速報","data":[38,40,42,45,40,38,37,43,41,39,40,40,36,39,42,45,45,45,45,40,41,38,38,39,35,36,40,44]},{"label":"世にも奇妙ななんかの話","data":[39,43,101,50,48,39,36,37,101,34,36,34,38,101,34,34,34,38,35,86,101,101,101,101,77,69,62,74]},{"label":"今日速2ch","data":[40,73,67,101,97,97,101,62,45,83,82,83,91,78,70,96,55,69,65,84,67,91,101,101,101,66,74,52]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[41,49,43,44,37,46,62,47,39,40,48,44,49,43,47,47,51,53,50,46,54,48,40,42,45,46,50,50]},{"label":"ニュースBUZZ","data":[42,51,58,57,46,57,81,48,43,85,56,35,51,84,49,48,56,49,64,42,49,47,92,47,50,42,75,48]},{"label":"働く大人の非常識","data":[43,60,61,87,51,89,101,57,91,101,92,55,58,45,50,101,75,87,60,52,75,68,71,101,85,101,55,58]},{"label":"はむらの毎日マンガ","data":[44,30,41,30,45,26,41,99,30,37,32,53,99,34,51,101,35,60,86,75,101,101,86,101,84,101,101,97]},{"label":"ぱんをたずねて2000里ちょい","data":[45,61,51,61,50,61,44,58,52,63,50,59,41,50,45,64,46,59,42,49,39,55,39,53,39,53,43,42]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[46,48,50,46,52,48,46,36,48,50,47,46,37,40,39,41,44,55,51,47,56,49,49,57,54,50,45,35]},{"label":"【2ch】コピペ情報局","data":[47,45,39,39,53,56,51,46,50,47,44,52,46,46,52,54,50,54,57,51,55,46,52,48,48,56,52,56]},{"label":"気になる芸能まとめ","data":[48,50,46,43,47,47,52,50,49,48,46,48,42,42,44,46,49,44,46,43,44,44,50,45,42,39,44,47]},{"label":"オタク.com －オタコム－","data":[49,52,49,52,49,49,49,54,51,51,41,51,43,47,55,55,59,56,52,48,51,43,47,51,51,48,47,49]},{"label":"ガールズVIPまとめ","data":[50,44,38,35,41,50,56,53,40,46,45,49,50,44,57,44,54,58,47,54,46,39,54,41,40,37,46,46]},{"label":"らっさむ漫画blog","data":[51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カオスちゃんねる","data":[52,54,62,54,54,52,59,70,53,41,54,54,48,53,54,52,58,51,54,50,52,50,55,43,52,49,56,65]},{"label":"海外の万国反応記＠海外の反応","data":[53,57,55,63,62,59,61,55,60,64,61,60,59,59,69,57,64,64,62,63,59,62,61,64,60,75,59,67]},{"label":"マンガと私と猫ブログ。","data":[54,74,63,82,75,53,47,44,42,65,52,38,52,37,36,51,47,39,37,58,101,58,63,60,43,45,101,101]},{"label":"ポリー速報","data":[55,55,57,51,55,51,50,49,63,43,62,56,47,52,53,50,66,61,58,53,62,54,57,52,56,54,53,76]},{"label":"山田全自動のあるある日記","data":[56,99,48,37,34,33,33,39,56,62,55,43,26,31,38,35,28,30,30,26,26,28,34,27,29,20,21,33]},{"label":"馬鳥速報","data":[57,58,47,62,63,55,64,67,70,66,77,74,64,57,56,53,70,68,71,76,48,63,41,58,61,44,49,57]},{"label":"野球の記録で話したい","data":[58,25,54,101,100,101,101,101,101,101,101,101,101,101,101,39,33,76,101,101,101,95,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[59,47,83,70,65,92,55,69,97,96,93,95,101,93,96,86,90,101,101,66,60,94,83,92,92,72,96,88]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[60,53,53,55,43,58,57,52,55,52,53,41,53,51,61,60,52,42,48,45,50,53,44,49,66,43,51,54]},{"label":"乃木坂46まとめ 1/46","data":[61,46,31,34,36,44,42,38,44,44,43,37,44,48,32,29,41,27,29,41,47,52,42,35,34,25,25,17]},{"label":"うちの夫が糖尿病になっちゃった！","data":[62,65,69,65,67,66,67,68,68,76,78,75,69,68,67,65,69,63,63,60,63,61,59,56,59,63,60,64]},{"label":"えみコミック！","data":[63,64,68,64,69,63,65,60,62,61,69,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[64,85,101,101,101,82,90,101,101,73,63,101,83,101,101,101,101,91,74,65,94,92,95,101,80,89,68,69]},{"label":"あにこ便","data":[65,66,66,58,57,64,68,71,71,68,67,64,65,69,74,71,73,73,69,64,68,73,73,70,68,65,64,75]},{"label":"ついんてーる速報","data":[66,42,59,67,60,85,86,63,67,58,70,63,71,60,62,62,71,70,78,57,53,64,65,59,71,58,61,62]},{"label":"鷹速@ホークスまとめブログ","data":[67,80,73,88,87,80,69,78,78,78,88,80,66,75,72,75,87,79,80,71,88,90,69,78,67,70,72,78]},{"label":"PS5速報！","data":[68,78,91,95,66,60,60,61,64,67,58,61,67,62,84,95,93,90,75,68,65,59,62,54,53,52,48,53]},{"label":"へー子の漫画日和","data":[69,70,77,75,74,70,74,75,80,80,83,85,85,101,89,93,91,88,99,93,101,101,101,101,101,101,101,101]},{"label":"De速","data":[70,56,44,48,44,36,39,56,46,45,49,50,45,61,64,69,62,46,59,33,58,56,60,50,38,57,67,73]},{"label":"ダイエット速報＠2ちゃんねる","data":[71,86,92,84,101,77,101,91,101,94,80,93,101,101,80,101,101,101,101,99,101,101,96,101,101,101,84,101]},{"label":"投資ちゃんねる","data":[72,82,87,85,89,75,71,87,84,82,71,79,76,81,76,78,86,83,79,88,89,80,90,86,90,68,94,91]},{"label":"パチンコ・パチスロ.com","data":[73,62,65,56,72,45,45,51,47,42,73,68,54,72,73,73,63,84,70,44,42,51,46,55,69,81,76,71]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,86,101,101,101,101,101,101]},{"label":"流速VIP","data":[75,67,71,60,58,67,72,65,57,72,66,57,57,63,65,61,67,71,68,69,64,60,66,74,58,60,58,61]},{"label":"軍事・ミリタリー速報☆彡","data":[76,79,78,73,71,78,87,85,74,74,81,84,82,74,82,76,85,81,84,83,73,81,72,72,65,80,81,83]},{"label":"FF14速報","data":[77,83,86,100,96,87,63,77,82,97,96,101,101,96,97,59,76,101,101,101,77,89,76,93,101,90,80,72]},{"label":"2chコピペ保存道場","data":[78,75,81,81,78,62,78,86,83,81,86,90,90,71,83,83,82,92,94,73,70,79,79,81,88,87,87,80]},{"label":"ライフハックちゃんねる弐式","data":[79,71,56,49,64,68,76,59,54,59,59,81,60,64,63,58,72,75,83,62,66,72,81,77,87,83,63,63]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[80,97,80,71,77,83,89,93,61,56,79,66,63,58,75,87,79,94,88,95,91,78,75,71,83,82,85,98]},{"label":"はーとログ","data":[81,90,84,78,80,72,79,73,75,71,74,76,77,67,68,70,74,72,72,80,82,77,74,73,81,76,79,85]},{"label":"ずっと日曜日のターン","data":[82,59,101,79,82,94,58,88,77,55,51,72,79,91,101,85,57,99,101,61,81,74,64,87,97,71,73,90]},{"label":"芸能人の気になる噂","data":[83,93,75,66,59,65,73,64,66,60,64,58,56,56,60,56,53,62,61,56,57,57,58,67,64,74,71,81]},{"label":"サカラボ | サッカーまとめ速報","data":[84,72,90,68,61,84,70,81,86,69,84,65,72,80,98,66,65,67,55,55,61,69,67,85,73,86,65,84]},{"label":"スカっとクミさん！戦う女の物語","data":[85,88,88,94,92,96,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[86,81,79,80,68,69,83,76,69,79,85,88,80,82,87,67,68,78,93,81,85,87,80,66,75,88,90,93]},{"label":"なんJ（まとめては）いかんのか？","data":[87,63,60,59,56,86,54,45,59,54,60,42,55,65,59,63,61,48,56,89,83,45,53,46,49,59,78,70]},{"label":"チリツモブログ","data":[88,94,74,101,101,101,101,101,101,101,101,101,101,79,41,49,40,57,101,101,40,42,101,84,33,61,101,41]},{"label":"会社員倉間のまいにちホリデー！！","data":[89,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[90,76,70,77,79,76,75,74,99,101,101,101,101,101,91,72,60,50,66,78,69,71,48,75,100,92,83,101]},{"label":"お料理速報","data":[91,91,85,92,95,100,101,92,101,87,91,82,73,87,100,89,101,100,82,87,101,93,89,94,101,84,93,101]},{"label":"阪神タイガースちゃんねる","data":[92,101,101,76,83,79,80,80,73,75,76,77,68,70,79,79,77,65,67,67,74,83,82,69,70,78,82,86]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[93,68,76,74,81,71,92,83,88,88,90,96,101,101,71,100,95,80,101,101,80,84,77,89,86,79,101,95]},{"label":"ろぼ速VIP","data":[94,98,101,96,91,101,82,79,85,99,65,91,92,86,88,99,101,101,100,94,93,99,99,101,101,98,98,87]},{"label":"MLB NEWS@まとめ","data":[95,77,64,69,73,88,91,90,65,70,98,101,78,77,85,68,81,66,73,72,92,85,56,63,76,73,77,82]},{"label":"ジャンプ速報","data":[96,92,98,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,100,99,101,101,100,99]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[97,69,72,72,84,99,98,89,98,86,100,87,81,101,101,84,88,82,91,92,101,101,78,79,95,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[98,101,97,86,98,91,96,82,96,84,72,94,100,101,101,88,101,101,101,101,101,101,91,91,101,101,101,94]},{"label":"footballnet【サッカー5chまとめ】","data":[99,101,101,101,101,101,101,101,101,101,101,97,61,66,81,74,78,85,77,96,79,66,45,76,72,85,95,101]},{"label":"稼げるまとめ速報","data":[100,101,101,101,101,101,101,101,101,95,94,101,84,99,101,101,101,101,101,101,101,101,84,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,39,45,47,70,43,66,34,58,101,101,45,87,101,40,97,80,101,43,100,37,67,101,38,74,101,37,60]},{"label":"シカブロ","data":[101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,87,101,101,101,95,94,101,81,101,101,98,74,101,101,101,101,93,101,85,90,101,101,101,89,96,89,59]},{"label":"まとめ太郎！","data":[101,89,101,101,101,101,101,101,101,101,101,101,101,88,92,101,96,95,92,98,101,101,88,101,101,101,99,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,96,89,98,85,81,77,66,79,92,97,92,86,73,77,77,89,86,87,82,78,75,70,65,63,64,54,55]},{"label":"今日もブブはからまわり。","data":[101,100,101,101,101,101,85,101,101,77,101,67,70,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,101,40,53,76,54,101,100,100,100,101,101,101,94,101,81,83,77,81,59,71,88,98,95,101,51,57,89]},{"label":"あおばブログ","data":[101,101,82,83,101,101,88,84,101,89,75,71,98,85,101,91,101,97,101,101,87,70,101,101,79,101,92,77]},{"label":"鈴木さん速報","data":[101,101,93,101,90,93,84,94,95,101,101,100,96,98,94,90,92,101,98,70,76,76,87,82,101,99,101,101]},{"label":"ふぇー速","data":[101,101,94,93,101,101,101,72,87,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,95,101,101,101,101,101,101,101,101,101,89,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,96,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,97,101,101]},{"label":"登山ちゃんねる","data":[101,101,99,101,88,101,93,101,93,90,101,86,75,101,101,92,99,101,95,91,101,101,101,101,98,101,101,101]},{"label":"バイク速報","data":[101,101,100,101,101,101,101,101,101,101,101,101,101,101,86,82,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,89,94,74,101,95,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,90,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101]},{"label":"VIP NEWS","data":[101,101,101,91,101,101,101,101,101,101,101,101,101,101,93,101,101,74,85,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,101,101,101,93,98,100,96,92,91,101,101,88,76,95,101,101,101,101,97,100,100,97,100,101,93,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,99,101,101,101,101,101,101,101,94,97,101,98,101,98,101,101,101,101,85,101,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,73,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,90,101,101,94,101,95,101,93,101,101,101,101,101,101,90,101,101,101,101,101,101,97,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,43,101,101,101,101,101,101,49,101,101,101,101,101,101,45,101,101,101,101,101,101,45]},{"label":"たっきーママオフィシャルブログ「おしゃべりな台所」","data":[101,101,101,101,101,101,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"千曲がり奮闘記～紆余曲折の育児記録～","data":[101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Jnews1","data":[101,101,101,101,101,101,101,101,72,53,68,101,101,55,99,101,101,14,20,79,101,101,51,80,47,55,91,51]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,76,57,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,90,101,30,70,101,83,58,101,97,101,101,77,101,96,101,101,101,67,70,66]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"何の因果か、漫画オタ外国人と結婚してしまった。","data":[101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,37,62,101,101,101,101,101,31,41,101,95,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101,69,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,73,101,90,101,101,101,89,101,101,101,82,68,62,46,62,88,96]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,93,101,82,101,101,101]},{"label":"おたみの日々","data":[101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,97,92,101,101,98,101,101,101,101,97,101,101,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"青木ぼんろの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Rinのシンプルライフ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,36,29,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"SAMURAI Footballers","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,89,101,72,21,101,83,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,9,24,74,101,101,101,101,101,101,101,31]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,90,101,101,101,101,101,101,101,101,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,96,94,101,101,100]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,98,94,90,99,94,86,92]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,96,101,101,101]},{"label":"抱っこだ立つんだ揺れるんだ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,32,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,91,77,66,79]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"スイスの街角から","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44,14,29,68]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101]}];
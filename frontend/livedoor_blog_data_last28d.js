var labels = ['2023-09-02','2023-09-03','2023-09-04','2023-09-05','2023-09-06','2023-09-07','2023-09-08','2023-09-09','2023-09-10','2023-09-11','2023-09-12','2023-09-13','2023-09-14','2023-09-15','2023-09-16','2023-09-17','2023-09-18','2023-09-19','2023-09-20','2023-09-21','2023-09-22','2023-09-23','2023-09-24','2023-09-25','2023-09-26','2023-09-27','2023-09-28','2023-09-29',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,1,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,1,1,2]},{"label":"ハムスター速報","data":[3,4,4,4,5,4,4,3,4,6,5,4,6,3,6,7,6,5,4,3,3,5,6,5,6,5,5,5]},{"label":"はちま起稿","data":[4,3,3,3,4,3,3,4,5,5,3,3,4,5,4,5,4,4,3,4,5,4,4,4,3,4,4,3]},{"label":"カラパイア","data":[5,6,11,13,10,7,9,8,6,3,4,9,13,9,1,2,7,11,14,12,4,3,7,10,15,20,16,16]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,5,5,5,3,5,5,5,3,4,6,5,3,4,5,4,3,3,5,6,7,6,3,3,4,3,3,4]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,7,6,7,7,8,7,7,8,7,8,8,9,6,7,9,8,6,8,7,8,9,9,8,7,7,7,8]},{"label":"痛いニュース(ﾉ∀`)","data":[8,9,7,6,6,6,6,6,7,9,7,7,8,8,9,10,9,8,7,5,6,7,8,6,5,6,6,7]},{"label":"ヤゴヴのマンガ劇場","data":[9,8,8,8,8,9,8,9,10,8,9,6,7,7,8,6,5,7,6,8,9,8,17,35,31,30,23,19]},{"label":"アルファルファモザイク","data":[10,12,9,9,9,11,10,11,12,10,10,12,12,10,11,12,11,10,10,13,12,10,10,11,10,8,8,10]},{"label":"暇つぶしニュース","data":[11,10,10,10,11,10,11,12,9,11,12,11,11,11,10,13,10,9,9,10,10,12,11,9,8,11,9,6]},{"label":"哲学ニュースnwk","data":[12,11,12,11,12,12,12,10,11,12,11,10,10,12,12,11,12,12,11,11,11,11,12,12,12,12,11,11]},{"label":"【2ch】ニュー速クオリティ","data":[13,13,13,12,13,13,13,14,15,15,13,14,14,14,13,14,14,14,12,14,14,13,14,16,11,9,10,9]},{"label":"BIPブログ","data":[14,14,18,20,15,14,16,15,13,14,14,15,19,16,17,15,15,15,15,15,17,15,16,13,14,14,14,12]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[15,17,17,15,17,16,15,17,16,17,15,13,15,13,14,18,13,13,13,16,15,16,15,17,18,16,13,13]},{"label":"ねいろ速報さん","data":[16,15,14,14,16,15,18,18,20,18,17,17,20,18,21,19,19,17,17,9,13,14,13,15,9,10,12,14]},{"label":"わんこーる速報！","data":[17,20,15,16,18,19,17,16,19,16,18,19,17,17,16,16,16,19,18,17,18,17,18,20,16,18,19,15]},{"label":"おうまがタイムズ","data":[18,16,24,22,23,20,19,19,22,24,25,28,25,30,23,21,23,27,29,30,29,29,21,18,21,23,36,34]},{"label":"山田全自動のあるある日記","data":[19,53,46,27,14,37,42,40,45,46,49,69,42,35,29,37,56,70,56,73,44,37,37,41,34,76,29,31]},{"label":"ぶる速-VIP","data":[20,19,16,18,19,21,22,27,25,27,20,20,23,21,19,20,20,22,24,20,23,24,28,21,22,15,22,23]},{"label":"なんJ PRIDE","data":[21,18,19,17,21,17,14,13,14,13,16,16,18,15,15,17,18,16,16,19,16,18,19,19,19,21,18,17]},{"label":"ゴールデンタイムズ","data":[22,29,25,24,29,27,20,23,26,28,28,27,22,27,22,29,24,26,26,24,26,28,26,26,23,29,21,25]},{"label":"稲妻速報","data":[23,21,22,19,22,23,21,21,29,23,26,26,27,28,26,24,28,30,31,32,33,27,33,27,29,27,28,29]},{"label":"NEWSぽけまとめーる","data":[24,23,23,23,26,22,25,20,18,19,19,18,16,19,25,27,27,21,21,31,35,38,24,28,32,33,20,24]},{"label":"なんJクエスト","data":[25,24,20,21,20,25,28,22,21,22,23,21,29,26,18,22,21,20,23,21,25,25,25,23,20,22,17,21]},{"label":"VIPPERな俺","data":[26,28,31,26,28,18,23,24,34,32,27,29,26,22,24,33,36,29,32,27,19,19,31,32,27,25,31,26]},{"label":"日刊やきう速報","data":[27,22,26,25,32,30,27,26,27,21,29,24,28,20,20,26,26,25,35,23,30,26,30,30,26,24,25,36]},{"label":"ネギ速","data":[28,31,33,36,34,34,35,35,30,26,31,37,38,37,31,31,33,40,41,38,36,36,39,34,33,36,35,32]},{"label":"おーるじゃんる","data":[29,26,30,28,30,24,31,28,31,34,34,34,21,24,28,30,31,32,27,26,27,21,29,29,24,28,33,33]},{"label":"ラビット速報","data":[30,25,29,29,31,26,29,25,24,20,24,22,24,29,30,25,29,28,30,22,28,22,23,25,28,26,24,27]},{"label":"あいチャンネル","data":[31,77,27,31,25,29,26,32,87,31,33,23,31,23,34,91,30,34,25,33,24,30,87,24,30,19,27,20]},{"label":"うしみつ-5chまとめ-","data":[32,30,32,30,33,28,30,30,33,35,35,33,35,32,33,34,34,31,34,29,34,32,34,38,35,32,32,30]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[33,33,42,35,27,38,24,33,41,45,53,55,53,47,50,41,47,51,49,45,45,31,32,22,25,34,30,42]},{"label":"カイカイ反応通信","data":[34,35,38,37,39,36,34,38,36,29,22,30,30,36,35,36,40,33,37,34,39,39,40,44,37,35,41,41]},{"label":"乃木坂46まとめ 1/46","data":[35,32,28,34,24,33,36,29,28,30,30,40,46,45,39,32,41,35,28,25,32,46,36,39,45,49,44,35]},{"label":"ふくよかまるみのピリカラ人生","data":[36,34,34,32,36,32,32,36,37,37,37,36,32,31,59,35,44,38,42,40,40,42,44,43,42,41,45,44]},{"label":"IT速報","data":[37,36,37,41,41,41,45,42,42,40,36,35,34,41,37,44,43,41,46,42,47,43,43,42,43,43,40,40]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[38,51,58,77,58,51,94,101,101,101,92,71,92,101,101,71,74,101,101,93,69,101,101,101,88,101,83,96]},{"label":"人間まおと愉快な仲間たち","data":[39,38,47,39,38,35,33,34,40,44,41,39,37,34,32,40,35,36,38,39,42,44,42,37,38,38,34,37]},{"label":"ぱんをたずねて2000里ちょい","data":[40,48,44,45,37,45,37,41,35,43,32,42,36,44,38,52,37,45,40,48,38,35,41,40,39,37,42,46]},{"label":"チリツモブログ","data":[41,101,101,53,101,101,101,101,101,55,101,101,101,50,101,101,101,101,101,79,64,101,101,101,101,101,72,60]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[42,45,49,55,48,40,39,44,50,50,38,38,44,39,40,49,53,49,54,43,54,54,52,46,50,47,56,43]},{"label":"まとめたニュース","data":[43,37,43,38,40,39,38,39,38,36,40,44,33,33,42,46,52,50,43,41,31,34,47,48,47,44,38,39]},{"label":"オタク.com －オタコム－","data":[44,49,51,44,51,44,43,47,51,53,51,49,48,46,48,50,46,44,52,50,52,53,46,47,51,52,50,45]},{"label":"カオスちゃんねる","data":[45,47,52,40,49,54,46,49,54,60,52,54,49,42,52,53,48,53,51,54,55,48,66,65,53,51,51,47]},{"label":"気になる芸能まとめ","data":[46,41,41,42,43,42,44,43,43,41,46,41,39,43,45,42,42,37,47,51,60,61,51,49,58,55,54,51]},{"label":"De速","data":[47,52,45,47,46,50,50,37,47,59,54,50,55,59,46,61,50,62,69,44,43,62,64,72,59,48,43,50]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[48,42,40,49,50,46,51,51,49,49,56,52,40,48,49,48,58,47,60,49,50,49,48,45,71,57,55,53]},{"label":"世にも奇妙ななんかの話","data":[49,43,35,101,44,47,41,101,39,25,21,25,77,25,27,28,22,98,20,18,20,23,27,71,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[50,57,56,98,83,85,67,66,57,57,74,82,88,60,43,54,49,52,83,66,70,87,60,57,78,78,89,91]},{"label":"ガールズVIPまとめ","data":[51,46,39,43,45,48,53,48,46,51,42,47,43,38,58,47,51,58,48,35,41,40,45,33,40,46,49,38]},{"label":"もちログ","data":[52,87,89,90,88,90,84,99,71,82,82,60,62,54,41,43,25,23,22,28,22,20,20,14,17,17,15,18]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[53,55,55,52,55,53,54,62,67,74,67,56,58,58,61,65,66,65,68,68,76,67,62,62,48,59,59,49]},{"label":"マンガと私と猫ブログ。","data":[54,50,54,85,68,68,56,50,73,56,94,73,85,69,44,39,45,42,36,47,101,47,35,31,41,84,37,22]},{"label":"馬鳥速報","data":[55,58,66,66,74,71,48,74,62,83,66,67,66,79,78,86,63,95,72,55,61,76,77,50,70,58,61,59]},{"label":"海外の万国反応記＠海外の反応","data":[56,39,61,57,53,73,55,52,59,54,57,68,67,67,60,66,64,74,62,67,66,65,57,64,68,62,71,62]},{"label":"【2ch】コピペ情報局","data":[57,56,48,48,52,43,40,46,44,58,48,48,47,49,47,45,57,43,53,53,59,57,53,53,52,39,48,55]},{"label":"PS5速報！","data":[58,66,75,59,54,52,59,79,60,65,64,62,60,57,55,62,70,61,79,60,62,59,55,60,80,60,60,56]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[59,40,101,101,101,57,101,76,101,101,98,91,5,52,64,87,17,101,101,101,21,101,101,98,44,101,101,101]},{"label":"ずっと日曜日のターン","data":[60,92,60,84,62,94,63,45,53,101,68,57,74,40,62,63,55,63,70,101,88,72,58,54,54,61,87,81]},{"label":"ポリー速報","data":[61,54,64,54,60,55,47,60,69,61,62,70,83,51,51,56,68,71,77,61,58,78,67,63,56,70,66,66]},{"label":"ゆっぺのゆる漫画ブログ","data":[62,69,101,33,35,60,101,31,32,73,39,31,51,101,36,38,101,101,39,36,84,33,38,91,36,31,69,28]},{"label":"芸能人の気になる噂","data":[63,60,57,58,66,65,66,54,52,67,84,79,50,53,54,51,54,55,57,56,57,55,50,51,49,50,63,70]},{"label":"うちの夫が糖尿病になっちゃった！","data":[64,68,71,67,69,62,58,55,55,66,61,61,63,64,69,72,71,75,66,63,63,63,61,59,57,67,62,61]},{"label":"バラシ屋トシヤの漫画ブログ","data":[65,101,76,56,100,59,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[66,101,69,62,57,56,57,63,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[67,59,67,64,59,79,76,57,72,62,50,58,59,71,68,58,81,54,59,62,48,51,63,61,64,56,47,58]},{"label":"流速VIP","data":[68,65,70,68,64,69,62,59,58,78,60,72,70,76,71,68,61,59,50,71,71,74,82,78,81,69,68,64]},{"label":"あにこ便","data":[69,62,65,61,67,70,72,67,63,69,69,75,80,77,72,67,69,64,76,74,77,68,71,66,63,71,74,75]},{"label":"はーとログ","data":[70,74,82,83,75,83,70,73,77,77,80,85,75,72,70,77,83,83,90,77,72,79,83,86,89,77,77,82]},{"label":"ライフハックちゃんねる弐式","data":[71,78,72,65,61,61,61,58,56,81,73,74,82,81,74,78,88,81,89,89,74,66,72,81,66,65,70,71]},{"label":"軍事・ミリタリー速報☆彡","data":[72,64,74,74,73,72,71,72,68,84,71,78,76,74,66,80,75,72,75,80,80,75,74,75,72,68,76,74]},{"label":"2chコピペ保存道場","data":[73,70,73,69,80,74,77,70,74,87,78,83,72,83,77,74,84,87,84,90,85,81,81,84,75,74,80,79]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[74,101,101,101,101,84,86,89,76,86,88,66,94,91,84,84,65,67,61,46,53,69,69,68,60,66,58,69]},{"label":"働く大人の非常識","data":[75,67,62,75,71,58,74,101,88,68,85,51,54,97,101,55,73,39,71,83,78,60,99,56,76,101,91,63]},{"label":"銃とバッジは置いていけ","data":[76,93,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[77,81,87,88,85,82,79,68,82,98,83,84,87,80,76,79,82,85,82,87,83,64,80,70,77,83,85,86]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[78,63,78,100,101,95,101,86,65,72,76,92,93,99,92,95,77,88,94,101,99,77,65,74,85,87,81,80]},{"label":"阪神タイガースちゃんねる","data":[79,80,77,63,70,31,64,77,70,80,70,86,86,66,75,64,59,66,64,64,68,88,68,73,79,86,79,54]},{"label":"サカラボ | サッカーまとめ速報","data":[80,75,63,73,72,77,87,78,66,33,45,46,41,65,73,70,67,57,65,78,73,70,79,58,61,73,78,73]},{"label":"S-MAX","data":[81,101,101,101,101,101,101,101,84,101,43,65,52,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]},{"label":"スズぺぺの人生何とかなってます!!","data":[82,71,81,81,76,76,68,64,61,71,63,64,56,56,57,57,62,60,58,57,56,58,54,55,55,54,53,52]},{"label":"投資ちゃんねる","data":[83,73,85,80,79,87,90,80,81,96,81,101,90,88,87,89,90,78,87,94,90,80,91,85,95,90,90,83]},{"label":"ニュースBUZZ","data":[84,44,59,51,47,49,52,53,48,47,55,53,65,68,56,59,60,46,44,52,46,50,59,52,62,45,39,67]},{"label":"MLB NEWS@まとめ","data":[85,76,86,101,77,63,85,84,92,91,93,101,97,86,88,101,101,94,78,81,91,100,92,101,99,101,92,92]},{"label":"つんの日常ブログ","data":[86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[87,89,101,89,86,89,96,65,83,101,101,101,79,82,83,82,86,82,92,98,97,91,78,87,101,79,82,89]},{"label":"パチンコ・パチスロ.com","data":[88,72,53,76,56,81,60,87,75,76,72,63,71,63,53,73,79,79,63,58,75,52,70,67,65,64,46,57]},{"label":"鷹速@ホークスまとめブログ","data":[89,83,100,71,78,75,81,75,80,79,75,81,91,70,67,76,87,92,85,65,79,71,84,80,84,81,65,77]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[90,99,68,46,63,67,69,96,85,89,58,45,100,101,80,90,76,99,101,92,101,101,73,94,101,80,67,84]},{"label":"大艦巨砲主義！","data":[91,101,101,101,101,101,98,100,101,101,101,101,98,101,101,100,101,101,101,101,96,96,101,96,101,101,96,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[92,88,79,87,101,88,101,92,90,101,95,89,101,90,99,99,100,89,101,91,93,84,76,76,87,101,101,88]},{"label":"はむらの毎日マンガ","data":[93,101,101,101,101,101,65,95,101,64,101,101,101,101,101,69,93,101,101,101,67,89,101,101,69,95,101,101]},{"label":"お料理速報","data":[94,101,90,101,101,101,95,101,100,101,100,93,81,95,94,101,89,76,101,101,101,94,96,101,100,99,101,90]},{"label":"今日もブブはからまわり。","data":[95,101,101,101,90,80,78,81,101,101,101,97,73,87,101,101,101,101,86,72,81,85,101,101,101,82,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[96,101,94,101,101,96,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[97,100,101,101,93,93,91,88,97,101,101,101,99,101,100,101,101,101,101,101,101,97,94,101,101,98,100,100]},{"label":"ツイッター速報","data":[98,91,80,72,91,101,92,61,23,70,44,80,101,85,101,8,32,101,101,59,37,45,49,93,46,42,73,65]},{"label":"FF14速報","data":[99,101,97,94,97,100,93,82,86,100,90,99,96,96,90,101,101,101,80,76,101,101,101,83,91,94,101,72]},{"label":"登山ちゃんねる","data":[100,90,92,101,95,101,101,94,101,101,101,101,101,101,81,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,27,21,50,98,101,101,101,101,101,101,101,101,101,101,101,101,48,67,70,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[101,61,50,91,101,64,73,101,101,48,47,101,101,93,82,83,80,68,73,69,51,56,75,77,67,63,52,87]},{"label":"あおばブログ","data":[101,79,101,86,65,101,83,71,101,95,101,88,69,92,101,88,99,77,74,101,82,93,86,69,96,75,64,101]},{"label":"web漫画家やしろあずきの日常","data":[101,82,101,93,87,92,89,85,78,92,91,96,95,75,65,60,85,101,101,101,94,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,84,101,101,101,101,101,101,99,101,101,101,101,101,101,23,38,101,101,101,101,101,22,36,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,94,98,97,101,101,101,83,79,99,86,98,101,101,101,85,95,101,93,85,86,101,101,95,97,93,101,101]},{"label":"Jnews1","data":[101,95,36,79,81,101,101,101,17,39,96,32,45,73,101,101,39,18,19,100,65,86,5,7,13,13,26,93]},{"label":"やみ速@なんJ西武まとめ","data":[101,96,101,95,92,101,101,97,101,93,101,101,101,101,101,101,101,101,101,96,95,99,101,101,101,92,101,101]},{"label":"ろぼ速VIP","data":[101,97,95,101,94,91,101,91,96,101,89,101,101,98,86,96,94,100,96,97,101,90,93,92,101,101,101,101]},{"label":"鈴木さん速報","data":[101,98,93,101,82,86,88,90,95,97,97,101,89,94,96,92,78,96,100,101,98,82,89,88,98,89,101,94]},{"label":"まとめブレイド","data":[101,101,83,99,101,66,80,101,98,90,87,59,101,61,89,75,98,56,55,86,92,73,88,90,73,53,95,76]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,84,70,101,101,101,101,101,42,59,76,57,62,97,94,92,73,97,101,101,101,85,101,92,91,97,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,88,101,101,101,101,101,101,63,79,94,61,89,101,101,101,97,101,101,101,101,101,101,94,101,101,101]},{"label":"SAMURAI Footballers","data":[101,101,91,101,101,101,101,101,101,52,65,90,64,84,93,93,101,86,101,95,101,101,101,101,93,97,101,101]},{"label":"ガイックとのフランス暮らし","data":[101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,60,101,78,82,101,89,85,101,77,84,101,79,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,78,84,99,97,101,94,94,77,101,101,101,91,101,101,80,88,75,101,101,97,100,101,101,84,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,92,101,101,99,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,74,96,101,98]},{"label":"ジャンプ速報","data":[101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,90,81,99,100,92,90,89,83,88,86,95]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,42,101,101,101,101,101,101,43,101,101,101,101,101,101,45,101,101,101,101,101,101,40,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,96,101,101,56,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,57,48]},{"label":"絵日記でございます。","data":[101,101,101,101,99,101,75,69,93,101,101,101,101,101,95,101,97,24,33,37,49,41,56,82,82,101,93,101]},{"label":"パチ美のマンガな日常","data":[101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はなまるのblog","data":[101,101,101,101,101,98,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,100,101,101,101,101,87,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,101,101,101,101,101,101,101,38,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,75,99,95,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Samurai GOAL","data":[101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめさん","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"だいごろうの1日","data":[101,101,101,101,101,101,101,101,101,101,101,101,68,55,63,81,72,93,101,82,89,83,98,79,90,85,75,68]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,96,101,101,101,101,101,101,99,101,101,101,101]},{"label":"大阪つーしん -大阪市の地域情報サイト-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101]},{"label":"ダンナ様は安月給","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,87,101,101,101,101,101,94,85]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"芸能人ニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101]},{"label":"Rinのシンプルライフ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101]},{"label":"ももクロまとめクイズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,97,101,101,101,97]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,88,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,100,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78]}];
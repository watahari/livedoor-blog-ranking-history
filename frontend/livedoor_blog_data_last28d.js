var labels = ['2023-09-09','2023-09-10','2023-09-11','2023-09-12','2023-09-13','2023-09-14','2023-09-15','2023-09-16','2023-09-17','2023-09-18','2023-09-19','2023-09-20','2023-09-21','2023-09-22','2023-09-23','2023-09-24','2023-09-25','2023-09-26','2023-09-27','2023-09-28','2023-09-29','2023-09-30','2023-10-01','2023-10-02','2023-10-03','2023-10-04','2023-10-05','2023-10-06',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,1,1,2,2,2,3,3,3,2,2]},{"label":"ハムスター速報","data":[3,4,6,5,4,6,3,6,7,6,5,4,3,3,5,6,5,6,5,5,5,5,5,5,4,6,3,5]},{"label":"はちま起稿","data":[4,5,5,3,3,4,5,4,5,4,4,3,4,5,4,4,4,3,4,4,3,3,4,6,5,4,4,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,3,4,6,5,3,4,5,4,3,3,5,6,7,6,3,3,4,3,3,4,4,3,4,6,5,5,4]},{"label":"痛いニュース(ﾉ∀`)","data":[6,7,9,7,7,8,8,9,10,9,8,7,5,6,7,8,6,5,6,6,7,6,6,8,8,8,7,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,8,7,8,8,9,6,7,9,8,6,8,7,8,9,9,8,7,7,7,8,7,7,9,7,7,6,6]},{"label":"カラパイア","data":[8,6,3,4,9,13,9,1,2,7,11,14,12,4,3,7,10,15,20,16,16,10,8,10,1,2,8,8]},{"label":"ヤゴヴのマンガ劇場","data":[9,10,8,9,6,7,7,8,6,5,7,6,8,9,8,17,35,31,30,23,19,19,19,15,20,19,21,21]},{"label":"哲学ニュースnwk","data":[10,11,12,11,10,10,12,12,11,12,12,11,11,11,11,12,12,12,12,11,11,12,12,13,13,15,11,12]},{"label":"アルファルファモザイク","data":[11,12,10,10,12,12,10,11,12,11,10,10,13,12,10,10,11,10,8,8,10,8,10,11,10,9,9,10]},{"label":"暇つぶしニュース","data":[12,9,11,12,11,11,11,10,13,10,9,9,10,10,12,11,9,8,11,9,6,9,9,7,12,10,12,9]},{"label":"なんJ PRIDE","data":[13,14,13,16,16,18,15,15,17,18,16,16,19,16,18,19,19,19,21,18,17,18,20,16,18,12,13,15]},{"label":"【2ch】ニュー速クオリティ","data":[14,15,15,13,14,14,14,13,14,14,14,12,14,14,13,14,16,11,9,10,9,11,14,17,16,16,14,13]},{"label":"BIPブログ","data":[15,13,14,14,15,19,16,17,15,15,15,15,15,17,15,16,13,14,14,14,12,13,17,14,19,17,18,17]},{"label":"わんこーる速報！","data":[16,19,16,18,19,17,17,16,16,16,19,18,17,18,17,18,20,16,18,19,15,16,15,19,15,14,16,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[17,16,17,15,13,15,13,14,18,13,13,13,16,15,16,15,17,18,16,13,13,15,21,20,22,18,17,18]},{"label":"ねいろ速報さん","data":[18,20,18,17,17,20,18,21,19,19,17,17,9,13,14,13,15,9,10,12,14,14,13,12,11,13,15,14]},{"label":"おうまがタイムズ","data":[19,22,24,25,28,25,30,23,21,23,27,29,30,29,29,21,18,21,23,36,34,27,23,30,33,43,31,36]},{"label":"NEWSぽけまとめーる","data":[20,18,19,19,18,16,19,25,27,27,21,21,31,35,38,24,28,32,33,20,24,22,28,25,23,21,23,27]},{"label":"稲妻速報","data":[21,29,23,26,26,27,28,26,24,28,30,31,32,33,27,33,27,29,27,28,29,28,25,26,26,31,28,28]},{"label":"なんJクエスト","data":[22,21,22,23,21,29,26,18,22,21,20,23,21,25,25,25,23,20,22,17,21,20,18,21,24,20,20,19]},{"label":"ゴールデンタイムズ","data":[23,26,28,28,27,22,27,22,29,24,26,26,24,26,28,26,26,23,29,21,25,24,30,29,28,26,30,25]},{"label":"VIPPERな俺","data":[24,34,32,27,29,26,22,24,33,36,29,32,27,19,19,31,32,27,25,31,26,23,31,24,25,24,27,32]},{"label":"ラビット速報","data":[25,24,20,24,22,24,29,30,25,29,28,30,22,28,22,23,25,28,26,24,27,25,26,28,29,28,24,24]},{"label":"日刊やきう速報","data":[26,27,21,29,24,28,20,20,26,26,25,35,23,30,26,30,30,26,24,25,36,26,27,27,30,25,22,22]},{"label":"ぶる速-VIP","data":[27,25,27,20,20,23,21,19,20,20,22,24,20,23,24,28,21,22,15,22,23,21,22,22,21,27,19,20]},{"label":"おーるじゃんる","data":[28,31,34,34,34,21,24,28,30,31,32,27,26,27,21,29,29,24,28,33,33,29,34,34,27,29,26,30]},{"label":"乃木坂46まとめ 1/46","data":[29,28,30,30,40,46,45,39,32,41,35,28,25,32,46,36,39,45,49,44,35,39,42,32,46,56,37,35]},{"label":"うしみつ-5chまとめ-","data":[30,33,35,35,33,35,32,33,34,34,31,34,29,34,32,34,38,35,32,32,30,31,32,31,34,30,32,31]},{"label":"ゆっぺのゆる漫画ブログ","data":[31,32,73,39,31,51,101,36,38,101,101,39,36,84,33,38,91,36,31,69,28,78,35,98,101,35,36,99]},{"label":"あいチャンネル","data":[32,87,31,33,23,31,23,34,91,30,34,25,33,24,30,87,24,30,19,27,20,30,72,23,32,22,29,23]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[33,41,45,53,55,53,47,50,41,47,51,49,45,45,31,32,22,25,34,30,42,36,37,41,39,38,47,44]},{"label":"人間まおと愉快な仲間たち","data":[34,40,44,41,39,37,34,32,40,35,36,38,39,42,44,42,37,38,38,34,37,33,39,40,36,40,39,39]},{"label":"ネギ速","data":[35,30,26,31,37,38,37,31,31,33,40,41,38,36,36,39,34,33,36,35,32,34,29,37,38,36,38,46]},{"label":"ふくよかまるみのピリカラ人生","data":[36,37,37,37,36,32,31,59,35,44,38,42,40,40,42,44,43,42,41,45,44,46,50,66,45,44,40,38]},{"label":"De速","data":[37,47,59,54,50,55,59,46,61,50,62,69,44,43,62,64,72,59,48,43,50,54,49,33,37,32,34,42]},{"label":"カイカイ反応通信","data":[38,36,29,22,30,30,36,35,36,40,33,37,34,39,39,40,44,37,35,41,41,35,41,39,31,34,35,33]},{"label":"まとめたニュース","data":[39,38,36,40,44,33,33,42,46,52,50,43,41,31,34,47,48,47,44,38,39,38,43,46,40,41,45,48]},{"label":"山田全自動のあるある日記","data":[40,45,46,49,69,42,35,29,37,56,70,56,73,44,37,37,41,34,76,29,31,32,40,35,17,37,43,29]},{"label":"ぱんをたずねて2000里ちょい","data":[41,35,43,32,42,36,44,38,52,37,45,40,48,38,35,41,40,39,37,42,46,49,51,47,43,68,75,77]},{"label":"IT速報","data":[42,42,40,36,35,34,41,37,44,43,41,46,42,47,43,43,42,43,43,40,40,41,44,42,41,48,44,47]},{"label":"気になる芸能まとめ","data":[43,43,41,46,41,39,43,45,42,42,37,47,51,60,61,51,49,58,55,54,51,48,52,43,55,55,59,57]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[44,50,50,38,38,44,39,40,49,53,49,54,43,54,54,52,46,50,47,56,43,37,45,52,49,46,51,51]},{"label":"ずっと日曜日のターン","data":[45,53,101,68,57,74,40,62,63,55,63,70,101,88,72,58,54,54,61,87,81,64,86,83,81,59,101,69]},{"label":"【2ch】コピペ情報局","data":[46,44,58,48,48,47,49,47,45,57,43,53,53,59,57,53,53,52,39,48,55,44,46,50,56,52,55,54]},{"label":"オタク.com －オタコム－","data":[47,51,53,51,49,48,46,48,50,46,44,52,50,52,53,46,47,51,52,50,45,47,48,51,42,51,52,50]},{"label":"ガールズVIPまとめ","data":[48,46,51,42,47,43,38,58,47,51,58,48,35,41,40,45,33,40,46,49,38,43,53,48,47,49,46,45]},{"label":"カオスちゃんねる","data":[49,54,60,52,54,49,42,52,53,48,53,51,54,55,48,66,65,53,51,51,47,55,57,58,64,63,49,43]},{"label":"マンガと私と猫ブログ。","data":[50,73,56,94,73,85,69,44,39,45,42,36,47,101,47,35,31,41,84,37,22,40,24,44,35,23,41,37]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[51,49,49,56,52,40,48,49,48,58,47,60,49,50,49,48,45,71,57,55,53,50,47,45,57,50,56,52]},{"label":"海外の万国反応記＠海外の反応","data":[52,59,54,57,68,67,67,60,66,64,74,62,67,66,65,57,64,68,62,71,62,57,59,60,58,65,67,58]},{"label":"ニュースBUZZ","data":[53,48,47,55,53,65,68,56,59,60,46,44,52,46,50,59,52,62,45,39,67,73,33,36,85,93,71,71]},{"label":"芸能人の気になる噂","data":[54,52,67,84,79,50,53,54,51,54,55,57,56,57,55,50,51,49,50,63,70,71,78,69,61,76,76,70]},{"label":"うちの夫が糖尿病になっちゃった！","data":[55,55,66,61,61,63,64,69,72,71,75,66,63,63,63,61,59,57,67,62,61,58,64,62,62,62,65,68]},{"label":"ミラクルファミリー","data":[56,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,57,48,87,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[57,72,62,50,58,59,71,68,58,81,54,59,62,48,51,63,61,64,56,47,58,63,65,61,48,61,77,63]},{"label":"ライフハックちゃんねる弐式","data":[58,56,81,73,74,82,81,74,78,88,81,89,89,74,66,72,81,66,65,70,71,69,67,96,71,78,66,82]},{"label":"流速VIP","data":[59,58,78,60,72,70,76,71,68,61,59,50,71,71,74,82,78,81,69,68,64,61,61,59,60,72,64,81]},{"label":"ポリー速報","data":[60,69,61,62,70,83,51,51,56,68,71,77,61,58,78,67,63,56,70,66,66,60,63,80,59,57,60,59]},{"label":"ツイッター速報","data":[61,23,70,44,80,101,85,101,8,32,101,101,59,37,45,49,93,46,42,73,65,101,36,49,66,92,101,53]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[62,67,74,67,56,58,58,61,65,66,65,68,68,76,67,62,62,48,59,59,49,52,58,55,54,58,101,101]},{"label":"サル山の裏マンガ","data":[63,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[64,61,71,63,64,56,56,57,57,62,60,58,57,56,58,54,55,55,54,53,52,51,54,56,52,53,58,55]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[65,83,101,101,101,79,82,83,82,86,82,92,98,97,91,78,87,101,79,82,89,84,101,85,101,101,74,101]},{"label":"なんJ（まとめては）いかんのか？","data":[66,57,57,74,82,88,60,43,54,49,52,83,66,70,87,60,57,78,78,89,91,101,84,74,77,74,69,66]},{"label":"あにこ便","data":[67,63,69,69,75,80,77,72,67,69,64,76,74,77,68,71,66,63,71,74,75,59,56,54,51,60,63,61]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[68,82,98,83,84,87,80,76,79,82,85,82,87,83,64,80,70,77,83,85,86,81,82,86,82,73,82,84]},{"label":"絵日記でございます。","data":[69,93,101,101,101,101,101,95,101,97,24,33,37,49,41,56,82,82,101,93,101,95,101,77,76,91,70,34]},{"label":"2chコピペ保存道場","data":[70,74,87,78,83,72,83,77,74,84,87,84,90,85,81,81,84,75,74,80,79,74,75,72,74,89,84,87]},{"label":"あおばブログ","data":[71,101,95,101,88,69,92,101,88,99,77,74,101,82,93,86,69,96,75,64,101,83,69,64,100,79,101,85]},{"label":"軍事・ミリタリー速報☆彡","data":[72,68,84,71,78,76,74,66,80,75,72,75,80,80,75,74,75,72,68,76,74,65,74,76,80,77,80,78]},{"label":"はーとログ","data":[73,77,77,80,85,75,72,70,77,83,83,90,77,72,79,83,86,89,77,77,82,82,77,79,88,84,87,79]},{"label":"馬鳥速報","data":[74,62,83,66,67,66,79,78,86,63,95,72,55,61,76,77,50,70,58,61,59,42,80,65,50,42,33,40]},{"label":"鷹速@ホークスまとめブログ","data":[75,80,79,75,81,91,70,67,76,87,92,85,65,79,71,84,80,84,81,65,77,76,81,73,86,82,78,74]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[76,101,101,98,91,5,52,64,87,17,101,101,101,21,101,101,98,44,101,101,101,86,101,101,101,101,101,67]},{"label":"阪神タイガースちゃんねる","data":[77,70,80,70,86,86,66,75,64,59,66,64,64,68,88,68,73,79,86,79,54,88,96,70,75,81,85,83]},{"label":"サカラボ | サッカーまとめ速報","data":[78,66,33,45,46,41,65,73,70,67,57,65,78,73,70,79,58,61,73,78,73,68,71,67,44,80,73,75]},{"label":"PS5速報！","data":[79,60,65,64,62,60,57,55,62,70,61,79,60,62,59,55,60,80,60,60,56,53,55,71,65,64,62,65]},{"label":"投資ちゃんねる","data":[80,81,96,81,101,90,88,87,89,90,78,87,94,90,80,91,85,95,90,90,83,97,93,82,84,75,79,96]},{"label":"今日もブブはからまわり。","data":[81,101,101,101,97,73,87,101,101,101,101,86,72,81,85,101,101,101,82,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[82,86,100,90,99,96,96,90,101,101,101,80,76,101,101,101,83,91,94,101,72,77,101,101,72,66,54,64]},{"label":"まとめロッテ！","data":[83,79,99,86,98,101,101,101,85,95,101,93,85,86,101,101,95,97,93,101,101,101,101,101,97,83,93,92]},{"label":"MLB NEWS@まとめ","data":[84,92,91,93,101,97,86,88,101,101,94,78,81,91,100,92,101,99,101,92,92,85,76,90,79,85,96,93]},{"label":"web漫画家やしろあずきの日常","data":[85,78,92,91,96,95,75,65,60,85,101,101,101,94,101,101,101,101,101,101,101,101,101,101,93,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[86,65,72,76,92,93,99,92,95,77,88,94,101,99,77,65,74,85,87,81,80,66,70,53,63,71,88,76]},{"label":"パチンコ・パチスロ.com","data":[87,75,76,72,63,71,63,53,73,79,79,63,58,75,52,70,67,65,64,46,57,56,66,78,78,70,72,62]},{"label":"デジタルニューススレッド","data":[88,97,101,101,101,99,101,100,101,101,101,101,101,101,97,94,101,101,98,100,100,93,88,84,90,100,92,88]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[89,76,86,88,66,94,91,84,84,65,67,61,46,53,69,69,68,60,66,58,69,67,68,63,67,67,89,73]},{"label":"鈴木さん速報","data":[90,95,97,97,101,89,94,96,92,78,96,100,101,98,82,89,88,98,89,101,94,94,101,101,101,95,101,101]},{"label":"ろぼ速VIP","data":[91,96,101,89,101,101,98,86,96,94,100,96,97,101,90,93,92,101,101,101,101,100,87,97,99,94,91,91]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[92,90,101,95,89,101,90,99,99,100,89,101,91,93,84,76,76,87,101,101,88,99,101,89,91,87,68,80]},{"label":"稼げるまとめ速報","data":[93,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[94,101,101,101,101,101,101,81,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,83,101,101,101]},{"label":"はむらの毎日マンガ","data":[95,101,64,101,101,101,101,101,69,93,101,101,101,67,89,101,101,69,95,101,101,72,95,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[96,85,89,58,45,100,101,80,90,76,99,101,92,101,101,73,94,101,80,67,84,96,62,68,53,47,53,49]},{"label":"やみ速@なんJ西武まとめ","data":[97,101,93,101,101,101,101,101,101,101,101,101,96,95,99,101,101,101,92,101,101,101,101,101,95,98,90,72]},{"label":"はなまるのblog","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もちログ","data":[99,71,82,82,60,62,54,41,43,25,23,22,28,22,20,20,14,17,17,15,18,17,16,18,14,11,10,11]},{"label":"大艦巨砲主義！","data":[100,101,101,101,101,98,101,101,100,101,101,101,101,96,96,101,96,101,101,96,101,101,97,101,101,101,101,101]},{"label":"Jnews1","data":[101,17,39,96,32,45,73,101,101,39,18,19,100,65,86,5,7,13,13,26,93,70,11,2,9,39,42,56]},{"label":"世にも奇妙ななんかの話","data":[101,39,25,21,25,77,25,27,28,22,98,20,18,20,23,27,71,101,101,101,101,45,38,38,96,33,25,26]},{"label":"S-MAX","data":[101,84,101,43,65,52,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101]},{"label":"働く大人の非常識","data":[101,88,68,85,51,54,97,101,55,73,39,71,83,78,60,99,56,76,101,91,63,80,85,75,101,86,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,89,85,101,77,84,101,79,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,94,94,77,101,101,101,91,101,101,80,88,75,101,101,97,100,101,101,84,101,101,101,101,101,101,98,101]},{"label":"まとめブレイド","data":[101,98,90,87,59,101,61,89,75,98,56,55,86,92,73,88,90,73,53,95,76,90,83,81,101,69,57,95]},{"label":"しばたまブログ","data":[101,99,101,101,101,101,101,101,23,38,101,101,101,101,101,22,36,101,101,101,101,101,90,101,101,101,101,101]},{"label":"お料理速報","data":[101,100,101,100,93,81,95,94,101,89,76,101,101,101,94,96,101,100,99,101,90,101,101,95,101,101,101,101]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,101,38,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,42,59,76,57,62,97,94,92,73,97,101,101,101,85,101,92,91,97,101,101,92,101,101,101,101,101]},{"label":"今日速2ch","data":[101,101,48,47,101,101,93,82,83,80,68,73,69,51,56,75,77,67,63,52,87,98,79,87,69,54,48,41]},{"label":"SAMURAI Footballers","data":[101,101,52,65,90,64,84,93,93,101,86,101,95,101,101,101,101,93,97,101,101,101,101,88,73,101,101,101]},{"label":"チリツモブログ","data":[101,101,55,101,101,101,50,101,101,101,101,101,79,64,101,101,101,101,101,72,60,62,60,101,101,101,50,60]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,63,79,94,61,89,101,101,101,97,101,101,101,101,101,101,94,101,101,101,101,101,92,98,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,75,99,95,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Samurai GOAL","data":[101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,92,71,92,101,101,71,74,101,101,93,69,101,101,101,88,101,83,96,101,89,101,101,90,61,94]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,43,101,101,101,101,101,101,45,101,101,101,101,101,101,40,101,101,101,101,101,101,45,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,87,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101]},{"label":"まとめさん","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"だいごろうの1日","data":[101,101,101,101,101,68,55,63,81,72,93,101,82,89,83,98,79,90,85,75,68,79,101,91,89,99,83,86]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[101,101,101,101,101,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,97,96,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大阪つーしん -大阪市の地域情報サイト-","data":[101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,48,67,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,90,81,99,100,92,90,89,83,88,86,95,92,91,101,101,101,101,100]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,74,96,101,98,101,100,101,92,101,101,90]},{"label":"ダンナ様は安月給","data":[101,101,101,101,101,101,101,101,101,101,101,91,101,87,101,101,101,101,101,94,85,101,101,101,101,88,99,89]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"芸能人ニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Rinのシンプルライフ","data":[101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ももクロまとめクイズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,97,101,101,101,97,75,73,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,88,101,101,101,101,101,101,95,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,100,101,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,99,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,94,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,89,101,101,101,101,101,101]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101]},{"label":"Aやんのええやん！ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,97,86,101]},{"label":"Flower Cage｜カリーナの宝塚依存症ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,57,68,101,101,101]},{"label":"ちば通信 - 千葉県千葉市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"おかわりどうぞ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"おたみの日々","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,101,101,101]},{"label":"愛知県名古屋市緑区のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101]},{"label":"すや子のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101]},{"label":"なんJ 野球をまとめてみたよ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,98]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97]}];
var labels = ['2022-11-24','2022-11-25','2022-11-26','2022-11-27','2022-11-28','2022-11-29','2022-11-30','2022-12-01','2022-12-02','2022-12-03','2022-12-04','2022-12-05','2022-12-06','2022-12-07','2022-12-08','2022-12-09','2022-12-10','2022-12-11','2022-12-12','2022-12-13','2022-12-14','2022-12-15','2022-12-16','2022-12-17','2022-12-18','2022-12-19','2022-12-20','2022-12-21',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,2,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1]},{"label":"カラパイア","data":[2,8,12,8,3,1,1,5,18,21,16,17,20,17,12,23,19,16,15,13,9,10,15,10,4,3,8,15]},{"label":"オレ的ゲーム速報＠刃","data":[3,2,2,2,2,3,3,2,2,4,2,3,2,2,2,2,2,3,2,2,2,2,2,1,1,2,2,2]},{"label":"はちま起稿","data":[4,4,3,5,5,5,5,3,3,7,4,5,3,4,3,3,4,4,4,4,3,3,4,3,3,5,4,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,3,4,4,4,4,4,4,4,1,3,4,4,3,4,4,3,2,3,3,4,4,3,4,5,4,3,4]},{"label":"暇つぶしニュース","data":[6,5,7,6,7,6,6,7,7,6,5,8,6,9,7,7,7,7,6,6,6,6,7,7,8,6,5,5]},{"label":"不思議.net","data":[7,9,9,10,10,9,9,8,9,12,10,7,8,7,8,10,8,8,7,7,8,8,8,6,6,8,9,8]},{"label":"ヤゴヴのマンガ劇場","data":[8,7,8,7,6,8,8,9,5,8,6,6,5,5,5,6,6,5,5,5,7,7,5,5,7,7,6,7]},{"label":"ハムスター速報","data":[9,6,5,11,9,7,7,6,6,5,8,10,7,6,6,5,5,6,9,8,5,5,6,8,9,10,7,6]},{"label":"【2ch】ニュー速クオリティ","data":[10,11,11,9,11,10,10,11,10,14,12,11,10,10,10,11,10,10,10,9,10,9,9,11,11,11,10,9]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[11,12,10,12,13,12,11,10,8,9,7,9,9,8,9,9,9,9,8,10,11,11,10,9,12,9,11,10]},{"label":"わんこーる速報！","data":[12,14,14,13,12,13,13,12,13,15,13,12,16,16,17,14,12,12,11,11,13,12,11,13,14,13,15,14]},{"label":"ねいろ速報さん","data":[13,20,19,16,17,18,18,17,17,29,17,18,17,21,16,17,18,15,18,16,16,18,18,20,18,21,20,20]},{"label":"BIPブログ","data":[14,16,22,19,16,16,16,14,11,13,11,13,12,11,11,13,14,18,16,15,17,17,20,12,10,12,12,11]},{"label":"おうまがタイムズ","data":[15,18,21,18,18,19,17,18,20,26,20,20,21,15,14,16,16,14,17,18,18,20,21,18,17,16,19,17]},{"label":"なんJ PRIDE","data":[16,10,13,14,14,15,15,16,19,11,14,16,18,12,15,19,17,11,13,17,15,15,13,16,16,17,14,18]},{"label":"哲学ニュースnwk","data":[17,17,16,15,15,17,14,13,16,16,15,14,13,14,18,15,15,13,12,14,14,13,12,14,13,15,16,13]},{"label":"日刊やきう速報","data":[18,27,26,25,28,31,25,28,32,28,32,27,27,27,28,32,25,27,27,30,33,27,22,24,25,29,27,32]},{"label":"ぶる速-VIP","data":[19,30,23,26,19,28,26,27,24,33,26,26,28,32,24,28,27,24,26,29,24,22,29,30,28,30,29,28]},{"label":"うしみつ-5chまとめ-","data":[20,35,29,23,22,23,30,30,29,37,33,31,30,31,32,29,29,29,28,25,30,33,31,32,32,32,24,30]},{"label":"稲妻速報","data":[21,32,28,27,24,22,24,22,26,34,29,25,26,25,26,22,20,25,24,23,23,23,23,21,23,22,22,25]},{"label":"NEWSぽけまとめーる","data":[22,25,30,30,29,26,22,26,22,19,19,19,22,18,23,21,23,19,20,20,21,19,24,22,22,27,26,23]},{"label":"もちログ","data":[23,24,18,17,20,21,21,19,14,20,18,21,19,19,19,18,48,93,101,101,101,101,93,95,100,89,84,101]},{"label":"なんJクエスト","data":[24,23,24,22,23,30,29,25,25,27,23,23,25,23,27,26,26,21,22,22,20,24,27,29,27,28,28,29]},{"label":"ゴールデンタイムズ","data":[25,26,15,20,25,20,23,23,23,22,24,24,23,24,25,24,22,20,21,19,22,21,16,19,21,23,18,21]},{"label":"はむらの毎日マンガ","data":[26,36,55,101,101,87,72,57,45,44,42,40,41,41,34,33,33,32,32,31,32,32,32,26,20,24,21,24]},{"label":"VIPPERな俺","data":[27,33,32,29,35,25,20,21,21,24,30,32,34,22,22,20,21,22,29,32,27,25,25,27,29,31,31,27]},{"label":"痛いニュース(ﾉ∀`)","data":[28,19,17,21,26,24,19,15,15,17,21,22,14,13,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ラビット速報","data":[29,29,25,28,27,29,27,29,28,30,25,28,29,29,29,25,28,28,25,24,25,26,26,23,26,26,25,26]},{"label":"カイカイ反応通信","data":[30,13,20,24,30,36,28,31,27,10,22,30,31,20,20,27,24,26,30,26,26,30,30,28,30,34,32,31]},{"label":"おーるじゃんる","data":[31,41,37,34,34,40,32,33,36,41,36,37,40,38,36,38,32,37,34,36,39,35,42,42,40,41,39,40]},{"label":"ネギ速","data":[32,46,38,41,41,38,42,35,39,49,40,41,54,49,46,44,39,40,36,38,41,45,38,36,39,47,37,38]},{"label":"Jnews1","data":[33,97,101,101,101,101,101,101,101,80,86,101,101,101,101,101,101,101,101,101,101,101,81,49,71,101,101,94]},{"label":"人間まおと愉快な仲間たち","data":[34,42,44,45,42,45,51,46,47,54,45,47,44,37,33,36,34,35,31,28,29,16,14,15,15,14,13,12]},{"label":"まとめたニュース","data":[35,38,53,42,39,34,39,45,40,39,44,38,55,39,38,42,31,36,35,37,36,34,33,33,35,37,44,33]},{"label":"【2ch】コピペ情報局","data":[36,43,39,36,51,39,35,36,41,43,43,43,46,44,40,39,40,41,39,42,37,36,35,35,33,36,40,39]},{"label":"あいチャンネル","data":[37,15,27,40,21,14,31,24,12,36,54,29,15,30,21,12,11,39,14,12,12,28,28,37,56,18,23,16]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[38,47,36,35,37,35,33,39,37,35,41,39,37,42,31,37,36,46,45,34,35,38,37,38,37,39,34,34]},{"label":"IT速報","data":[39,34,33,33,32,37,36,37,34,32,34,44,35,33,39,41,35,33,33,33,31,31,34,31,31,33,30,35]},{"label":"ニュースBUZZ","data":[40,49,35,32,33,50,34,32,43,47,39,36,36,35,43,46,65,38,51,35,44,43,41,39,34,35,36,36]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[41,56,42,39,50,48,48,43,38,56,48,51,56,54,48,49,60,53,59,46,45,52,50,45,46,48,49,46]},{"label":"世にも奇妙ななんかの話","data":[42,101,101,38,36,33,101,34,31,40,101,34,33,34,101,31,30,31,101,27,28,29,101,25,24,25,53,22]},{"label":"山田全自動のあるある日記","data":[43,53,63,50,43,51,49,56,56,70,60,62,61,69,63,57,53,45,50,57,56,53,49,51,51,60,51,44]},{"label":"えみコミック！","data":[44,101,48,95,48,86,43,91,44,92,47,72,43,82,42,77,41,76,49,77,48,89,47,87,43,70,43,66]},{"label":"乃木坂46まとめ 1/46","data":[45,58,43,43,47,49,47,59,52,67,50,45,42,47,52,51,37,43,46,39,38,40,44,40,47,51,55,55]},{"label":"オタク.com －オタコム－","data":[46,50,47,47,53,41,45,44,50,60,51,50,57,50,53,48,52,48,53,47,50,44,45,44,42,54,45,45]},{"label":"マンガと私と猫ブログ。","data":[47,75,59,76,61,75,53,41,42,96,62,87,53,43,80,47,38,69,42,62,43,65,40,46,36,38,35,49]},{"label":"あにこ便","data":[48,62,57,48,49,43,46,48,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[49,21,31,31,31,32,38,40,35,18,27,33,32,28,30,34,49,34,38,40,40,41,46,43,59,50,33,41]},{"label":"海外の万国反応記＠海外の反応","data":[50,28,41,46,60,70,65,51,59,25,37,42,45,48,50,55,67,49,54,52,51,56,59,59,63,43,63,57]},{"label":"ガールズVIPまとめ","data":[51,70,61,62,80,52,54,69,63,57,63,78,60,63,57,83,80,50,58,55,78,66,61,82,72,52,81,47]},{"label":"ポリー速報","data":[52,52,46,53,54,58,59,61,55,46,59,59,65,61,62,52,43,61,55,45,46,47,53,54,52,55,54,56]},{"label":"ずっと日曜日のターン","data":[53,59,58,71,58,54,85,81,61,95,101,52,94,93,87,81,50,74,70,67,57,70,101,75,66,64,101,90]},{"label":"気になる芸能まとめ","data":[54,72,66,51,57,66,73,70,76,85,70,66,83,81,85,94,86,66,65,80,68,73,68,66,64,61,71,70]},{"label":"カエルDXのオタ活日記","data":[55,60,50,49,40,53,52,38,30,48,52,53,38,46,56,62,54,44,52,49,54,50,43,47,50,42,42,60]},{"label":"カオスちゃんねる","data":[56,51,56,56,64,56,50,49,46,45,49,48,50,58,44,45,46,52,48,43,42,46,62,50,65,40,50,59]},{"label":"芸能人の気になる噂","data":[57,65,62,58,59,61,61,65,57,72,64,57,66,59,58,65,68,65,67,60,60,63,65,58,55,59,60,62]},{"label":"VIP NEWS","data":[58,64,54,79,62,69,82,50,62,55,68,76,78,86,45,60,101,80,47,81,87,101,73,90,61,62,75,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[59,37,40,89,38,27,76,52,82,50,31,80,49,101,37,30,101,101,60,101,101,42,101,101,92,101,61,43]},{"label":"ダイエット速報＠2ちゃんねる","data":[60,101,101,74,101,101,92,101,101,91,90,101,101,101,101,88,101,101,62,101,65,101,74,101,86,73,69,93]},{"label":"De速","data":[61,68,74,55,55,67,71,54,64,82,88,91,59,74,76,53,45,51,88,78,88,77,80,85,101,86,88,81]},{"label":"鷹速@ホークスまとめブログ","data":[62,63,75,63,78,62,55,58,74,64,69,68,79,66,67,67,55,64,63,58,62,62,64,64,68,63,65,76]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[63,77,70,70,72,64,44,47,49,51,55,70,77,57,61,43,51,47,57,69,76,55,48,55,49,46,66,58]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[64,74,95,80,91,90,97,84,95,101,91,101,101,101,81,89,94,97,101,101,101,101,101,81,84,91,101,84]},{"label":"PS5速報！","data":[65,81,64,67,70,65,62,60,58,65,61,81,62,60,54,66,47,79,72,50,55,57,82,93,62,56,64,82]},{"label":"ふぇー速","data":[66,67,84,54,45,68,80,89,54,76,58,61,87,75,90,72,78,78,43,53,83,74,99,92,58,88,101,95]},{"label":"ミラクルファミリー","data":[67,101,101,82,101,59,88,101,100,68,76,73,39,94,101,96,63,101,101,101,86,72,101,63,101,58,101,42]},{"label":"軍事・ミリタリー速報☆彡","data":[68,83,69,65,82,73,63,66,66,81,77,83,70,79,71,85,70,73,75,65,66,75,77,53,76,77,77,75]},{"label":"流速VIP","data":[69,79,60,66,84,63,67,73,70,75,66,60,82,55,55,73,79,59,40,48,58,54,67,60,60,49,59,53]},{"label":"ついんてーる速報","data":[70,66,45,44,76,88,60,64,69,79,85,64,58,56,79,58,84,68,66,79,84,95,72,76,87,94,80,77]},{"label":"web漫画家やしろあずきの日常","data":[71,69,91,69,95,60,69,88,101,83,98,92,101,83,64,87,101,75,82,73,73,60,56,65,44,71,62,52]},{"label":"つつみのブログ","data":[72,101,101,101,101,101,101,62,101,61,101,101,101,101,101,101,62,101,101,101,101,68,101,72,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[73,90,78,91,94,89,87,55,48,63,57,55,69,80,86,95,96,101,98,90,71,69,70,70,38,57,74,101]},{"label":"ライフハックちゃんねる弐式","data":[74,82,79,60,63,55,57,72,60,71,73,65,84,85,59,54,56,56,99,84,92,101,101,79,81,67,79,71]},{"label":"なんJ（まとめては）いかんのか？","data":[75,101,101,81,74,92,78,79,101,101,101,101,101,101,84,91,90,84,81,101,101,101,60,86,94,101,101,101]},{"label":"MLB NEWS@まとめ","data":[76,92,86,92,79,91,93,75,92,101,97,101,101,97,83,76,76,101,101,85,72,80,86,84,93,75,101,67]},{"label":"やみ速@なんJ西武まとめ","data":[77,101,94,68,89,101,96,87,91,87,80,84,101,101,101,101,85,89,76,71,93,101,83,89,98,101,101,100]},{"label":"働く大人の非常識","data":[78,101,93,73,66,101,101,101,79,101,101,97,64,101,101,101,69,62,90,101,96,101,101,80,67,80,87,91]},{"label":"馬鳥速報","data":[79,87,73,98,68,79,66,74,96,94,93,71,76,77,91,82,88,101,101,63,63,64,51,61,91,72,57,78]},{"label":"うちの夫が糖尿病になっちゃった！","data":[80,76,67,57,56,57,64,67,72,77,71,67,67,65,65,63,66,72,73,64,53,48,52,57,57,53,48,54]},{"label":"お料理速報","data":[81,88,87,101,83,85,101,86,65,98,78,58,80,95,96,101,98,86,84,87,94,88,78,101,101,79,67,83]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[82,85,71,77,85,78,79,68,67,84,82,93,48,68,73,79,82,82,71,68,70,78,69,71,41,65,70,64]},{"label":"ぱんをたずねて2000里ちょい","data":[83,101,101,78,71,101,101,101,101,101,101,101,101,101,74,101,72,101,101,61,100,101,57,68,73,101,56,51]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[84,71,101,101,101,101,77,53,101,101,101,101,68,72,101,92,64,54,64,59,85,58,66,101,79,101,101,73]},{"label":"2chコピペ保存道場","data":[85,78,77,83,90,80,74,63,75,88,67,75,75,76,68,69,73,81,79,72,59,61,63,62,70,69,78,69]},{"label":"サル山の裏マンガ","data":[86,101,51,99,101,71,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アルセウス速報","data":[87,93,90,87,86,81,91,83,83,89,74,77,99,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101]},{"label":"鈴木さん速報","data":[88,101,89,85,93,84,94,85,89,101,101,101,101,99,100,90,93,95,101,101,77,99,92,94,101,101,100,101]},{"label":"ろぼ速VIP","data":[89,101,96,101,97,94,98,101,101,101,101,99,101,101,101,101,101,94,92,96,80,90,90,101,101,97,101,92]},{"label":"オタクニュース","data":[90,98,88,101,101,101,86,101,101,78,79,101,85,89,101,101,101,101,94,101,61,98,101,101,101,99,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[91,89,85,75,77,74,81,80,71,69,65,63,63,70,66,61,59,60,56,51,52,59,58,48,48,45,46,48]},{"label":"はーとログ","data":[92,100,92,64,73,77,89,77,81,90,101,79,81,84,77,68,89,100,85,94,89,91,94,96,89,83,101,72]},{"label":"サカサカ10【サッカーまとめ速報】","data":[93,39,52,59,52,46,68,82,84,38,46,54,52,36,47,50,83,58,69,75,91,71,85,101,101,101,58,97]},{"label":"まとめロッテ！","data":[94,73,101,100,99,96,101,101,101,86,101,101,101,88,99,84,58,70,77,82,67,79,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[95,84,80,101,101,101,84,101,101,101,87,101,89,73,75,70,91,92,74,92,97,101,79,74,85,95,95,87]},{"label":"FF14速報","data":[96,101,101,101,101,100,101,101,101,101,101,101,95,101,98,97,101,101,101,91,101,93,89,101,101,101,83,99]},{"label":"投資ちゃんねる","data":[97,101,101,101,98,99,101,97,90,101,94,86,92,92,94,75,92,85,89,89,101,87,76,83,82,85,97,88]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[98,80,99,86,88,101,75,71,77,73,92,94,91,101,101,101,77,77,91,98,101,86,100,78,99,98,91,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[99,40,81,101,67,72,101,101,101,52,56,56,74,53,70,71,74,71,80,93,99,82,88,98,101,101,72,86]},{"label":"ツイッター速報","data":[100,31,49,101,81,47,37,101,78,3,28,1,11,45,51,59,44,63,68,88,101,67,19,34,97,96,94,63]},{"label":"footballnet【サッカー5chまとめ】","data":[101,22,6,3,8,11,12,20,33,23,9,15,24,26,35,35,42,30,37,41,49,39,36,52,74,82,38,80]},{"label":"つれさか　-徒然サッカー雑記-","data":[101,44,101,101,101,101,101,101,101,42,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,45,34,37,46,44,41,42,53,31,38,46,51,51,60,64,57,42,41,54,69,100,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,48,76,61,101,93,70,94,101,101,101,89,71,71,41,74,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,54,83,101,101,101,101,101,101,58,72,100,101,67,101,101,101,83,101,101,101,101,101,101,101,101,76,101]},{"label":"Samurai GOAL","data":[101,55,97,96,75,97,101,101,101,53,83,101,101,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,57,101,101,101,42,40,101,101,101,101,74,101,40,101,40,81,57,101,101,101,51,101,101,101,101,41,61]},{"label":"フットカルチョ","data":[101,61,101,101,101,101,101,101,101,62,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"フットボール速報","data":[101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,91,98,101,69,101,101,101,99,59,75,101,86,101,101,98,101,96,83,101,81,84,84,77,80,78,68,74]},{"label":"今日速2ch","data":[101,94,101,52,65,101,101,76,68,74,99,101,73,62,101,101,87,67,61,70,74,101,39,41,77,66,52,37]},{"label":"エクサワロス","data":[101,95,101,84,87,95,101,78,87,100,81,85,98,87,88,99,95,101,100,95,98,83,87,88,101,92,86,101]},{"label":"翻訳ちゃんねる | 海外の反応まとめブログ","data":[101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,99,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"つんの日常ブログ","data":[101,101,65,101,101,101,58,96,101,101,96,101,101,78,101,101,101,101,101,76,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,68,88,101,101,100,101,101,101,101,101,101,91,82,101,101,101,101,97,101,92,101,101,101,101,101,96]},{"label":"スカッと連載ブログ（スカログ）","data":[101,101,72,97,101,76,101,101,80,101,101,88,97,101,72,100,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,82,101,101,101,101,101,98,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,101,100,101,92,83,95,90,88,93,89,96,90,98,93,101,101,98,95,101,101,76,101,101,88,90,90,89]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,72,44,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,90,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,68]},{"label":"Aやんのええやん！ブログ","data":[101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,94,100,101,83,92,85,101,101,101,96,100,92,101,100,101,101,101,95,101,95,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,82,99,99,97,101,101,101,88,101,101,101,101,101,101,83,101,101,101,101,101,101,96,101]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,71,88,101,101,90,101,96,101,96,100,99,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,56,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,101,101,101,101,101,93,101,97,84,69,93,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,101,95,86,101,90,78,56,64,85,98,101,83,93,101,85]},{"label":"あにこ便","data":[101,101,101,101,101,101,101,101,51,66,53,49,47,52,49,56,61,55,44,44,47,49,55,56,53,44,47,50]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,93,101,101,101,101,101,89,93,97,99,96,86,79,81,75,73,75,76,73,65]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,101,94,101,101,98,101,101,101,101,101,91,93,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,80,99,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,35,35,72,101,101,101,101,23,23,74,101,101,101,101,101,101,101,101]},{"label":"ベビーシッターさいおの日常茶飯","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,69,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あね子の日常withいっちょまえ姉妹","data":[101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,96,69,101,101,101,87,100,101,101,71,67,101,87,101,101]},{"label":"痛いニュース(ﾉ∀`)","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,8,13,17,19,21,19,14,17,17,19,19,17,19]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,78,75,87,86,66,82,96,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,94,101,101,101,101,101,101]},{"label":"あおばブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,99,75,97,91,100,95,84,92,79]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,37,54,69,78,81,85,98]},{"label":"美容外科クリニックで働くパチ美の日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,45,20,82,101]},{"label":"カラフル牧場","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,74,89,101]},{"label":"Aula","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101]}];
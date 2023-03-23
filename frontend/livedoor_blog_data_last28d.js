var labels = ['2023-02-24','2023-02-25','2023-02-26','2023-02-27','2023-02-28','2023-03-01','2023-03-02','2023-03-03','2023-03-04','2023-03-05','2023-03-06','2023-03-07','2023-03-08','2023-03-09','2023-03-10','2023-03-11','2023-03-12','2023-03-13','2023-03-14','2023-03-15','2023-03-16','2023-03-17','2023-03-18','2023-03-19','2023-03-20','2023-03-21','2023-03-22','2023-03-23',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,3,4,3,3,3,2,2,3,2,2,2,3,3]},{"label":"はちま起稿","data":[3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,4,5,4,4,4,4,4,4,4,4,4,4,4]},{"label":"ハムスター速報","data":[4,4,5,5,5,4,5,5,5,5,6,5,5,5,4,5,6,6,5,5,5,5,5,8,11,6,9,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,5,4,4,4,5,4,4,4,4,3,3,3,3,3,2,1,2,2,2,3,3,2,3,3,3,1,1]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,7,7,9,8,8,9,7,9,10,7,7,8,7,7,8,7,9,7,6,7,7,11,9,5,5,6,8]},{"label":"暇つぶしニュース","data":[7,6,6,6,7,7,7,9,8,7,8,8,7,8,8,7,10,8,8,8,8,8,8,6,7,9,8,10]},{"label":"哲学ニュースnwk","data":[8,11,15,14,18,21,15,14,15,18,17,15,15,17,17,16,18,19,16,19,19,20,17,15,17,15,16,23]},{"label":"痛いニュース(ﾉ∀`)","data":[9,10,13,12,13,11,8,8,11,12,11,12,14,13,14,10,13,12,9,13,14,11,9,14,13,12,14,12]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[10,8,11,13,14,9,11,13,12,11,12,11,11,14,9,11,11,14,13,9,9,12,10,12,12,10,10,9]},{"label":"ヤゴヴのマンガ劇場","data":[11,9,8,7,6,6,6,6,6,6,5,6,6,6,6,6,9,5,6,7,6,6,6,7,6,7,12,22]},{"label":"【2ch】ニュー速クオリティ","data":[12,12,10,10,11,10,10,10,10,8,10,10,9,10,10,15,16,15,12,10,12,10,12,13,15,11,13,13]},{"label":"わんこーる速報！","data":[13,14,12,11,12,14,13,11,14,17,14,16,13,11,11,12,17,13,15,14,10,14,16,18,20,17,19,21]},{"label":"おうまがタイムズ","data":[14,15,14,18,15,15,14,15,16,15,18,18,18,15,19,21,19,18,17,15,16,16,20,19,18,16,18,16]},{"label":"BIPブログ","data":[15,13,9,8,10,13,12,12,13,13,9,9,10,9,16,14,20,20,18,16,15,13,14,17,19,13,11,14]},{"label":"なんJ PRIDE","data":[16,17,18,19,25,22,18,18,20,14,15,13,12,16,13,9,8,7,10,11,13,15,13,16,16,14,5,5]},{"label":"カラパイア","data":[17,20,16,15,9,12,17,16,18,21,22,24,19,21,25,28,26,26,27,27,26,21,15,5,14,27,30,30]},{"label":"なんJクエスト","data":[18,23,25,26,30,25,26,27,27,25,26,32,24,22,27,29,30,28,29,22,20,22,29,26,27,29,17,15]},{"label":"ゴールデンタイムズ","data":[19,18,21,17,24,18,20,25,29,26,21,21,22,25,24,22,27,31,25,28,28,29,22,27,25,26,26,24]},{"label":"ぶる速-VIP","data":[20,26,26,22,21,27,23,28,17,20,19,23,21,20,23,19,21,23,20,17,17,24,23,22,22,23,22,20]},{"label":"ねいろ速報さん","data":[21,21,19,21,17,23,24,22,22,19,20,20,23,18,21,26,28,29,22,24,24,27,26,21,23,18,27,32]},{"label":"NEWSぽけまとめーる","data":[22,24,22,16,23,28,29,21,26,28,24,30,26,23,20,23,24,25,23,23,23,23,25,23,29,25,20,19]},{"label":"ツイッター速報","data":[23,22,31,49,43,24,21,26,23,34,44,29,52,61,101,101,43,32,49,49,36,40,43,51,92,69,101,101]},{"label":"もちログ","data":[24,19,17,20,16,17,16,17,21,16,13,14,16,12,12,13,15,16,14,12,11,9,7,10,10,35,64,74]},{"label":"ラビット速報","data":[25,30,24,25,20,19,22,23,28,23,25,33,28,26,26,27,25,27,26,21,25,25,28,30,28,20,28,29]},{"label":"マンガと私と猫ブログ。","data":[26,16,33,24,19,20,31,46,24,30,35,26,29,48,42,41,36,33,36,60,45,33,31,28,39,53,49,61]},{"label":"山田全自動のあるある日記","data":[27,25,28,28,26,30,36,30,7,9,16,22,27,31,22,25,32,10,11,18,18,18,19,11,9,8,15,17]},{"label":"はむらの毎日マンガ","data":[28,28,23,23,22,42,19,20,19,35,23,17,32,19,15,20,23,38,24,30,22,17,18,20,38,22,23,25]},{"label":"稲妻速報","data":[29,27,29,30,28,29,25,24,25,27,27,25,30,28,30,31,34,34,33,29,27,30,24,25,26,24,29,33]},{"label":"日刊やきう速報","data":[30,33,32,31,36,40,38,29,30,22,29,19,20,30,18,17,12,11,19,20,21,19,21,24,24,28,7,6]},{"label":"VIPPERな俺","data":[31,29,20,27,29,35,30,19,31,24,34,34,25,29,36,40,37,40,37,32,31,26,32,34,42,30,32,28]},{"label":"ネギ速","data":[32,31,30,41,27,16,27,32,34,40,31,35,31,27,29,35,29,24,31,34,35,34,30,29,32,38,42,36]},{"label":"カイカイ反応通信","data":[33,37,35,34,33,32,34,36,37,36,30,28,33,32,33,24,14,21,21,25,29,28,27,33,37,34,21,11]},{"label":"うしみつ-5chまとめ-","data":[34,38,36,32,34,39,33,35,39,32,37,37,39,36,32,33,40,41,39,35,34,36,36,35,36,32,39,49]},{"label":"乃木坂46まとめ 1/46","data":[35,32,27,29,31,38,40,43,40,45,33,31,40,41,48,43,62,45,58,47,49,55,61,54,57,52,57,56]},{"label":"ニュースBUZZ","data":[36,36,37,45,52,52,55,31,41,42,43,43,36,35,47,39,51,59,51,38,32,62,46,48,101,56,60,45]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[37,34,40,39,45,37,32,38,48,39,47,46,45,37,37,44,57,39,40,52,39,39,41,52,47,44,45,53]},{"label":"ゆっぺのゆる漫画ブログ","data":[38,39,101,101,85,47,39,64,42,101,101,101,46,101,94,70,89,101,60,80,101,101,52,101,46,71,41,42]},{"label":"うちの夫が糖尿病になっちゃった！","data":[39,42,43,44,39,45,43,44,46,48,46,42,43,42,44,48,54,52,48,46,47,46,45,47,52,43,53,54]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[40,45,41,43,41,44,48,40,43,49,51,51,50,47,54,50,55,55,46,48,52,49,53,50,51,51,62,66]},{"label":"おーるじゃんる","data":[41,35,34,36,37,31,37,33,32,38,36,36,34,33,34,30,22,22,30,31,33,31,33,37,33,37,37,39]},{"label":"ぱんをたずねて2000里ちょい","data":[42,63,58,85,32,26,28,45,36,51,41,49,38,50,35,47,45,57,38,51,37,48,34,43,30,39,36,58]},{"label":"まとめたニュース","data":[43,40,38,38,40,41,41,42,47,43,32,39,35,43,28,45,35,51,44,33,54,51,44,46,44,48,50,57]},{"label":"IT速報","data":[44,43,46,46,38,46,42,37,38,37,39,41,48,39,39,34,38,42,43,41,40,37,40,36,40,19,33,50]},{"label":"ガールズVIPまとめ","data":[45,50,44,40,47,43,50,50,45,29,54,60,37,40,45,52,59,36,42,39,42,42,47,42,48,41,55,68]},{"label":"【2ch】コピペ情報局","data":[46,47,42,42,42,49,46,47,44,46,49,45,47,45,46,56,53,48,59,42,56,52,42,45,54,45,54,51]},{"label":"世にも奇妙ななんかの話","data":[47,41,39,35,54,34,35,34,35,33,42,48,101,44,38,36,41,43,87,44,43,41,38,31,34,55,44,38]},{"label":"オタク.com －オタコム－","data":[48,46,47,47,44,51,51,53,50,53,53,53,54,49,51,61,65,61,55,56,51,56,56,58,58,47,61,65]},{"label":"ポリー速報","data":[49,71,55,55,53,61,54,51,54,47,56,47,49,52,53,46,48,53,57,59,69,65,62,60,72,72,48,35]},{"label":"VIP NEWS","data":[50,49,57,56,92,73,66,94,81,82,77,90,101,80,101,101,101,73,67,90,86,101,78,87,66,101,66,82]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[51,52,45,48,49,50,44,49,53,52,55,69,60,63,58,63,66,67,53,43,44,44,64,41,31,40,46,47]},{"label":"スズぺぺの人生何とかなってます!!","data":[52,55,48,54,50,54,47,48,49,50,50,50,53,46,50,58,60,58,56,54,50,53,51,49,49,46,52,52]},{"label":"海外の万国反応記＠海外の反応","data":[53,54,50,50,48,59,58,56,59,57,61,59,63,56,56,51,44,47,45,55,55,47,54,57,55,57,40,34]},{"label":"チリツモブログ","data":[54,101,101,101,101,101,49,101,101,101,101,52,101,58,101,101,56,101,101,101,101,77,101,101,74,101,101,67]},{"label":"あにこ便","data":[55,59,49,57,56,62,56,59,60,56,57,56,57,55,62,66,67,66,63,64,63,66,67,62,59,61,76,76]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[56,53,101,60,57,57,101,57,52,54,101,58,55,101,49,57,101,64,101,63,61,59,101,59,101,59,72,101]},{"label":"お料理速報","data":[57,62,87,83,72,79,80,73,65,74,65,85,84,78,83,101,82,87,72,101,76,81,88,98,76,73,78,101]},{"label":"PS5速報！","data":[58,51,71,59,55,53,61,60,58,62,68,67,64,82,80,83,99,63,64,58,75,69,80,91,96,96,101,71]},{"label":"web漫画家やしろあずきの日常","data":[59,69,72,58,64,56,74,55,75,67,45,27,17,24,31,37,33,54,47,50,57,35,37,40,21,33,34,46]},{"label":"気になる芸能まとめ","data":[60,67,54,62,71,69,68,70,71,66,62,78,80,81,68,74,71,74,81,83,82,79,76,70,62,66,69,78]},{"label":"芸能人の気になる噂","data":[61,61,52,63,59,63,52,58,62,72,85,88,74,64,74,89,87,80,101,101,93,70,68,64,69,68,80,72]},{"label":"カオスちゃんねる","data":[62,57,53,53,46,48,45,39,56,60,52,55,66,53,52,62,64,76,65,57,60,60,59,56,63,62,73,69]},{"label":"馬鳥速報","data":[63,56,63,78,60,65,59,52,57,63,82,63,44,38,41,59,75,84,69,82,68,72,73,86,87,64,90,100]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[64,81,77,92,101,101,94,69,101,101,101,101,90,101,76,38,63,65,71,95,101,101,101,94,80,86,59,73]},{"label":"えみコミック！","data":[65,65,66,76,70,72,69,77,74,75,72,79,75,70,66,68,72,81,66,74,66,68,66,61,64,58,65,60]},{"label":"あいチャンネル","data":[66,44,79,37,35,36,75,41,33,61,48,38,41,34,40,42,95,50,41,37,38,38,39,77,41,31,75,43]},{"label":"ライフハックちゃんねる弐式","data":[67,72,51,73,66,55,64,67,69,70,66,70,73,60,73,80,76,86,82,65,62,71,82,67,67,90,88,97]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[68,82,86,101,89,81,87,79,79,77,76,95,101,96,85,95,101,98,91,101,101,101,101,79,90,93,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[69,75,59,61,63,70,72,62,83,73,60,71,71,69,70,76,68,70,83,69,73,74,85,75,61,65,67,79]},{"label":"流速VIP","data":[70,60,61,66,58,60,57,71,70,55,58,68,65,57,71,67,77,77,90,71,77,75,70,68,70,67,85,83]},{"label":"ついんてーる速報","data":[71,70,73,75,80,76,63,65,66,59,67,83,69,62,61,73,78,79,79,68,59,73,71,63,89,76,81,89]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[72,73,68,84,65,58,62,68,67,69,73,77,70,68,69,75,83,83,68,75,67,61,72,72,77,80,92,90]},{"label":"今日速2ch","data":[73,48,75,33,51,33,60,72,61,58,38,44,42,54,64,85,101,101,98,76,101,96,96,84,45,36,71,91]},{"label":"2chコピペ保存道場","data":[74,77,62,67,68,68,71,66,63,71,84,87,81,77,75,81,80,89,86,77,84,86,84,85,83,95,101,98]},{"label":"軍事・ミリタリー速報☆彡","data":[75,64,60,65,62,67,73,61,72,81,70,81,77,67,81,84,88,88,77,72,74,92,79,71,85,77,87,92]},{"label":"鷹速@ホークスまとめブログ","data":[76,68,69,71,78,86,78,85,68,64,88,75,62,86,55,53,50,56,62,67,65,58,63,73,81,60,35,41]},{"label":"投資ちゃんねる","data":[77,92,70,82,83,83,79,97,95,85,90,94,94,90,87,92,90,90,96,88,90,88,101,81,79,89,97,101]},{"label":"つんの日常ブログ","data":[78,87,81,64,91,92,76,98,101,101,101,101,101,101,101,98,42,37,101,101,101,101,101,101,101,94,94,101]},{"label":"De速","data":[79,78,56,68,74,77,86,80,82,79,64,57,78,91,88,65,61,69,97,40,48,54,57,53,60,70,56,48]},{"label":"なんJ（まとめては）いかんのか？","data":[80,101,65,70,101,101,90,74,55,44,59,40,51,88,43,32,31,30,32,61,71,45,49,65,56,85,24,26]},{"label":"はーとログ","data":[81,84,78,101,90,101,81,78,89,68,80,86,83,89,92,77,84,85,88,91,89,93,98,92,91,92,83,85]},{"label":"MLB NEWS@まとめ","data":[82,79,89,87,84,78,65,75,76,65,79,72,58,59,57,54,49,44,50,45,53,57,50,55,53,54,31,31]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[83,90,101,101,101,101,98,87,101,101,101,101,101,101,101,101,101,101,100,101,101,91,83,100,101,84,101,101]},{"label":"ふぇー速","data":[84,83,76,88,100,101,83,54,88,89,96,101,82,84,63,96,101,68,84,79,87,85,60,76,65,82,47,86]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[86,95,101,101,101,101,67,101,101,95,101,101,97,92,82,94,98,101,101,98,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[87,85,93,91,82,74,89,93,77,93,81,76,56,51,60,78,91,96,93,93,94,101,101,101,101,100,101,101]},{"label":"ろぼ速VIP","data":[88,91,91,95,88,90,85,91,94,78,86,98,99,101,101,101,101,94,101,101,98,98,101,101,101,98,99,101]},{"label":"デジタルニューススレッド","data":[89,96,92,96,81,95,82,101,101,98,101,101,101,101,101,101,101,93,101,101,95,100,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[90,66,90,101,69,64,101,63,73,101,98,101,67,97,79,101,96,101,80,101,78,101,94,101,101,91,91,84]},{"label":"登山ちゃんねる","data":[91,100,84,72,101,82,99,89,101,101,83,101,101,101,99,99,97,95,101,96,101,101,101,101,101,101,101,101]},{"label":"古オタクの日常","data":[92,101,99,101,101,98,93,96,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[93,101,96,101,77,91,92,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"鈴木さん速報","data":[94,93,88,90,79,85,84,92,96,96,101,101,93,95,90,90,101,101,99,97,101,97,101,101,94,79,95,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[95,88,85,77,93,88,91,81,91,94,101,64,61,76,65,49,47,49,52,73,64,63,55,74,73,75,38,40]},{"label":"まとめブレイド","data":[96,58,67,80,101,101,101,101,101,101,101,62,101,101,93,100,101,101,101,101,101,101,100,101,98,101,101,101]},{"label":"会社員倉間のまいにちホリデー！！","data":[97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[98,97,74,93,101,101,96,100,101,101,94,101,100,94,86,88,86,82,73,62,88,87,89,93,99,101,86,70]},{"label":"YoMuRy - ヨムリー -","data":[99,101,101,101,101,80,101,101,101,90,101,101,68,101,101,101,85,101,101,66,101,101,101,69,101,101,84,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[100,99,101,99,96,100,97,101,101,101,95,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,74,82,101,98,96,101,99,101,101,101,80,101,93,101,101,101,101,101,101,80,101,101,88,93,101,101,101]},{"label":"働く大人の非常識","data":[101,76,101,86,67,97,101,101,93,80,75,96,87,101,101,101,74,75,101,87,101,101,101,97,71,63,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,80,80,74,76,75,101,101,80,87,87,100,91,100,101,101,101,101,89,101,101,101,97,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,86,101,81,86,71,101,86,100,101,97,84,92,74,95,101,101,101,75,89,70,64,95,78,84,74,79,75]},{"label":"パチンコ・パチスロ.com","data":[101,89,101,101,99,84,70,82,101,92,101,97,85,71,84,101,101,99,101,99,96,83,101,95,101,88,101,101]},{"label":"まとめ太郎！","data":[101,94,83,79,94,87,77,76,87,76,69,92,95,101,101,91,100,101,94,101,101,95,87,99,95,101,89,63]},{"label":"大艦巨砲主義！","data":[101,98,94,97,87,89,95,101,98,101,99,101,101,101,101,101,101,101,101,100,99,99,101,101,101,101,101,101]},{"label":"UMA WORLD DIARY","data":[101,101,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,95,94,73,94,88,84,85,88,74,73,79,79,96,101,101,101,101,101,97,101,93,101,101,101,101,101]},{"label":"ずっと日曜日のターン","data":[101,101,97,52,75,66,53,101,101,101,78,101,88,72,101,79,92,101,101,101,83,76,81,101,75,78,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,98,100,101,101,101,101,101,101,101,61,59,73,77,64,52,62,70,84,101,67,77,83,101,101,58,44]},{"label":"なんJ　高校野球まとめ速報","data":[101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,93,100,101,94,101,101,101,101,97,87,74,80]},{"label":"Jnews1","data":[101,101,101,51,97,101,101,90,51,41,40,65,98,87,101,18,3,17,28,26,58,43,65,39,86,50,70,18]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,78,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,89,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,61,101,101,101,64,101,101,101,101,65,101,101,101,101,76,101,72,101,74,101,101,101,101,81]},{"label":"ジャンプ速報","data":[101,101,101,101,95,101,101,101,101,99,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,93,101,101,86,101,89,74,101,85,78,72,73,92,85,101,92,82,90,89,101,101,43,64]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,99,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"ちひろのスキブログ 〜主婦の日常マンガ〜","data":[101,101,101,101,101,101,101,83,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,88,84,97,91,99,76,75,67,71,70,72,54,53,46,50,48,44,50,49,51,59]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,95,101,101,63,91,101,99,101,93,81,60,78,78,101,101,69,80,101,101,96,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,78,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,92,31,28,54,72,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,99,101,101,101,101,101,59,82,101,101,95,86,101,90,101,101,101,101,63,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,101,101,83,101,82,86,101,89,60,58,46,61,85,101,80,86,101,101,101,82,77]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,101,101,101,101,101,101,101,71,66,96,83,72,69,69,78,74,81,79,89,58,66,68,83,101,94]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,87,94,101,101,101,101,94,91,101,100,101,101,88]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,93,89,101,101,86,79,91,101,101,100,84,75,101,101,101,77,55]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,98,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,55,39,35,34,36,41,32,35,38,43,42,25,27]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,92,101,101,99,101,101,101,101,96]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,71,101,101,101,101,101,32,35,97,101,101]},{"label":"Ｇ速@読売ジャイアンツまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,35,101,101,101,101,101,82,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,68,93]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,85,101,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,30,78,101,101,101,101,93,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,90,8,21,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,81,101,101]},{"label":"★レアモノ在庫再販速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101]},{"label":"Jamのおうち　＊ごはんと器とインテリア＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,88,101,101,101]},{"label":"ってなんじぇですかー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"アルファルファモザイク","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,37]},{"label":"海外反応！　I LOVE JAPAN　","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87]},{"label":"Ｇ速@読売ジャイアンツまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]}];
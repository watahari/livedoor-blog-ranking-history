var labels = ['2024-01-10','2024-01-11','2024-01-12','2024-01-13','2024-01-14','2024-01-15','2024-01-16','2024-01-17','2024-01-18','2024-01-19','2024-01-20','2024-01-21','2024-01-22','2024-01-23','2024-01-24','2024-01-25','2024-01-26','2024-01-27','2024-01-28','2024-01-29','2024-01-30','2024-01-31','2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,2,3,1,1,1,1,2,4,1,1,1,2,2,1,1,1,1,2,3,1,2,4,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,1,1,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,1,1,2,1,2,2,2,2,2]},{"label":"はちま起稿","data":[3,3,4,2,3,3,3,3,4,2,3,3,3,3,3,3,3,3,3,3,2,3,3,3,4,3,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,3,4,5,5,5,6,5,6,6,5,5,7,6,6,6,6,5,4,5,5,6,8,5,6,6,6]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,5,6,5,4,4,4,5,6,5,5,4,4,4,5,5,4,4,4,5,6,8,8,9,8,5,5,5]},{"label":"痛いニュース(ﾉ∀`)","data":[6,8,7,8,8,8,8,7,7,7,7,9,9,9,7,7,9,7,10,7,9,6,5,7,6,8,8,7]},{"label":"ハムスター速報","data":[7,7,5,6,7,6,6,4,3,3,4,6,7,5,4,4,5,5,6,6,4,4,4,5,3,4,4,4]},{"label":"日記","data":[8,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,6,8,7,9,10,9,8,8,8,9,8,6,6,8,8,7,8,7,9,7,7,7,6,7,9,7,8]},{"label":"暇つぶしニュース","data":[10,10,9,10,6,7,7,9,9,10,10,10,10,10,10,10,10,10,9,10,10,10,11,11,9,10,9,9]},{"label":"ヤゴヴのマンガ劇場","data":[11,9,10,9,10,9,10,10,10,9,8,7,8,8,9,9,8,9,8,8,8,9,9,10,10,11,14,35]},{"label":"哲学ニュースnwk","data":[12,13,11,11,11,11,11,11,11,11,11,11,11,12,13,11,11,11,12,11,11,11,10,1,11,12,12,12]},{"label":"わんこーる速報！","data":[13,12,14,14,14,14,14,14,14,14,15,16,15,15,12,13,15,15,16,14,15,13,13,13,16,15,11,14]},{"label":"【2ch】ニュー速クオリティ","data":[14,11,13,13,13,12,12,12,13,13,13,12,12,11,11,12,12,12,11,12,12,12,12,12,12,13,10,11]},{"label":"なんJ PRIDE","data":[15,14,12,12,12,13,13,13,12,12,12,13,13,16,15,14,13,13,14,13,13,15,16,15,14,14,13,13]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[16,16,17,15,21,15,15,20,17,15,14,17,20,17,16,17,16,16,18,18,17,14,15,18,17,24,20,20]},{"label":"うしみつ-5chまとめ-","data":[17,19,23,18,16,19,22,25,24,22,24,23,23,25,22,21,25,21,19,24,25,26,28,29,26,29,28,26]},{"label":"VIPPERな俺","data":[18,15,19,17,23,20,16,23,21,24,17,22,22,20,23,20,21,28,24,22,26,21,17,17,19,22,24,27]},{"label":"ねいろ速報さん","data":[19,18,21,19,18,16,17,24,22,19,18,20,19,14,17,16,17,17,17,15,14,17,18,19,18,17,17,15]},{"label":"NEWSぽけまとめーる","data":[20,22,25,25,22,24,19,22,20,23,21,19,18,19,18,18,19,22,23,19,23,25,20,28,32,37,34,32]},{"label":"おーるじゃんる","data":[21,23,16,22,24,25,25,26,27,27,27,32,31,24,25,25,22,27,28,28,21,18,23,23,22,21,21,17]},{"label":"稲妻速報","data":[22,21,18,16,15,26,20,18,19,17,19,21,21,22,19,19,18,18,21,20,19,19,21,20,21,27,27,22]},{"label":"ラビット速報","data":[23,20,22,24,20,23,21,19,18,18,22,24,17,18,20,22,20,20,20,16,18,20,19,22,25,20,19,19]},{"label":"なんJクエスト","data":[24,17,24,21,17,17,18,21,16,21,20,18,25,21,21,24,23,19,25,23,20,27,25,26,20,25,23,23]},{"label":"ゴールデンタイムズ","data":[25,26,20,23,26,18,23,27,23,20,23,26,26,23,24,23,28,25,27,26,22,23,24,25,27,33,31,25]},{"label":"日刊やきう速報","data":[26,29,15,27,28,30,29,30,26,29,30,35,33,28,28,32,26,31,29,33,32,33,27,34,30,32,30,34]},{"label":"あいチャンネル","data":[27,27,28,29,74,32,48,42,28,25,28,57,27,26,26,26,24,26,75,29,24,24,57,32,23,26,64,24]},{"label":"もちログ","data":[28,28,26,20,25,27,24,17,15,16,16,14,14,13,14,15,14,14,15,17,16,16,14,14,13,16,15,10]},{"label":"ネギ速","data":[29,30,37,31,29,29,34,33,33,31,26,27,24,29,27,29,30,24,22,30,29,29,35,35,28,23,22,21]},{"label":"ぶる速-VIP","data":[30,36,101,51,30,37,50,31,29,26,31,25,29,27,29,27,49,33,31,43,41,42,30,16,15,18,18,18]},{"label":"IT速報","data":[31,24,36,35,40,41,41,44,42,40,42,37,36,36,39,31,43,40,45,36,35,40,37,44,42,40,39,38]},{"label":"おうまがタイムズ","data":[32,38,50,26,32,31,35,55,40,33,36,28,32,39,68,59,29,29,35,25,27,39,32,27,31,30,37,31]},{"label":"BIPブログ","data":[33,32,34,30,33,28,28,37,31,32,29,33,42,31,31,28,32,32,26,27,30,28,26,24,24,28,29,28]},{"label":"まとめたニュース","data":[34,25,33,32,36,35,36,29,30,28,39,31,30,32,35,34,27,35,37,34,28,36,29,37,33,44,36,41]},{"label":"ガールズVIPまとめ","data":[35,40,32,40,41,39,33,36,35,37,35,30,35,35,40,42,52,45,34,35,39,32,41,39,58,45,42,43]},{"label":"乃木坂46まとめ 1/46","data":[36,42,38,46,49,49,37,38,62,34,51,39,34,41,58,52,38,38,33,39,36,53,56,46,36,47,35,47]},{"label":"ニュースBUZZ","data":[37,33,55,74,46,52,100,88,64,59,77,97,80,66,101,67,56,84,84,94,50,41,64,58,43,60,44,59]},{"label":"マンガと私と猫ブログ。","data":[38,61,53,71,56,60,51,68,53,69,101,101,54,37,34,58,101,51,63,41,57,101,101,40,48,43,32,29]},{"label":"カイカイ反応通信","data":[39,37,41,38,37,45,31,34,34,38,40,47,40,34,33,33,33,34,36,40,33,34,33,33,37,38,40,37]},{"label":"オタク.com －オタコム－","data":[40,35,39,42,42,38,40,40,38,45,44,41,43,40,42,38,40,50,41,38,40,44,43,47,44,50,41,39]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[41,39,42,39,34,36,38,43,32,35,32,42,48,43,44,30,36,41,40,37,34,35,44,41,35,35,33,45]},{"label":"ずっと日曜日のターン","data":[42,49,43,49,62,68,85,53,52,65,41,45,41,59,56,39,60,78,58,58,46,98,72,101,64,56,65,52]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[43,34,31,33,38,40,32,28,36,36,33,34,37,42,37,41,37,43,38,31,45,50,40,38,39,41,38,33]},{"label":"カオスちゃんねる","data":[44,45,51,41,43,51,46,48,46,44,37,49,39,44,50,49,39,47,47,46,43,47,38,43,41,49,51,42]},{"label":"カラパイア","data":[45,31,27,28,27,33,26,16,25,30,34,38,38,33,32,35,34,39,32,32,31,38,31,31,29,31,26,30]},{"label":"YoMuRy - ヨムリー -","data":[46,101,101,101,101,101,101,39,101,101,101,101,101,101,36,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[47,46,47,36,31,21,27,32,45,49,50,46,49,48,51,43,41,48,44,42,44,46,45,53,45,48,48,54]},{"label":"バラシ屋トシヤの漫画ブログ","data":[48,44,48,43,44,48,44,49,47,43,45,91,50,45,97,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[49,65,49,64,51,65,80,94,73,83,90,84,88,90,74,83,77,100,101,96,54,59,92,88,79,83,76,91]},{"label":"芸能人の気になる噂","data":[50,53,58,67,54,46,39,47,50,47,46,50,53,51,46,51,48,53,48,48,47,49,46,54,49,53,47,56]},{"label":"【2ch】コピペ情報局","data":[51,43,45,45,47,50,42,45,44,41,49,44,44,56,41,44,45,37,46,53,48,48,36,50,47,46,45,49]},{"label":"海外の万国反応記＠海外の反応","data":[52,41,44,44,48,57,53,46,48,46,55,53,55,55,54,55,51,46,50,57,53,45,50,51,52,55,59,51]},{"label":"スズぺぺの人生何とかなってます!!","data":[53,50,59,54,50,53,52,51,54,50,48,48,47,47,45,45,42,44,42,47,42,43,42,45,60,70,101,48]},{"label":"ついんてーる速報","data":[54,48,46,56,61,44,43,50,49,48,47,51,52,49,49,47,46,59,43,45,49,51,49,48,46,58,55,50]},{"label":"PS5速報！","data":[55,62,67,61,70,78,60,54,56,55,54,71,77,61,62,57,54,56,55,56,51,54,55,52,50,59,67,58]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[56,56,72,73,75,75,82,59,67,67,62,65,68,69,59,61,66,42,57,68,67,65,70,69,63,54,52,60]},{"label":"ポリー速報","data":[57,64,40,48,66,56,57,60,55,66,61,61,59,58,57,50,44,58,53,51,58,52,52,60,61,62,58,86]},{"label":"ぱんをたずねて2000里ちょい","data":[58,59,57,50,57,58,54,56,57,57,59,52,58,57,55,54,47,54,51,54,55,57,47,49,40,52,46,40]},{"label":"はむらの毎日マンガ","data":[59,101,35,52,101,42,56,101,39,62,101,101,81,30,43,101,101,36,49,101,101,101,101,101,38,34,63,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[60,52,66,53,67,73,77,77,71,42,43,55,46,75,80,79,69,75,62,50,64,71,51,55,59,42,43,63]},{"label":"馬鳥速報","data":[61,55,73,77,82,82,62,35,37,51,60,54,75,70,63,48,63,66,86,78,84,61,60,65,73,67,72,74]},{"label":"あにこ便","data":[62,60,64,57,45,47,45,57,63,56,52,43,45,50,53,53,53,52,39,49,52,55,53,59,55,51,49,53]},{"label":"はぎゆうの漫画おきば","data":[63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[64,81,83,78,90,64,49,69,81,75,63,58,76,84,77,70,57,64,69,75,62,66,48,42,53,57,56,62]},{"label":"人間まおと愉快な仲間たち","data":[65,58,68,89,58,54,65,83,91,87,73,73,96,96,79,78,82,74,73,77,87,84,77,75,75,74,85,81]},{"label":"すらるど - 海外の反応","data":[66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[67,69,65,63,60,69,64,63,69,64,66,56,64,71,72,71,64,65,61,60,68,70,68,92,101,88,81,84]},{"label":"流速VIP","data":[68,67,70,66,64,62,78,65,68,61,56,63,57,60,65,60,62,60,64,59,63,56,63,66,62,61,66,57]},{"label":"De速","data":[69,47,56,62,73,91,67,66,60,52,58,74,51,63,64,62,67,68,71,69,56,72,71,56,54,63,61,55]},{"label":"2chコピペ保存道場","data":[70,75,78,81,79,80,81,76,87,82,79,76,66,76,78,73,73,76,77,81,71,63,62,63,72,71,71,70]},{"label":"パチンコ・パチスロ.com","data":[71,54,63,60,76,66,70,64,61,39,53,62,63,54,52,64,58,69,65,71,59,58,59,61,57,65,62,44]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[72,71,71,101,101,71,63,70,85,81,84,60,95,64,88,74,65,70,79,62,65,101,101,68,69,101,74,69]},{"label":"軍事・ミリタリー速報☆彡","data":[73,68,75,72,63,74,74,72,77,74,67,70,78,74,69,69,70,80,74,73,69,69,66,67,70,69,75,78]},{"label":"鷹速@ホークスまとめブログ","data":[74,80,30,37,59,61,73,62,66,72,57,59,73,73,86,91,74,73,76,72,78,68,65,77,81,73,79,80]},{"label":"ライフハックちゃんねる弐式","data":[75,70,54,70,55,59,58,67,75,78,70,66,69,67,60,72,59,79,72,64,60,62,58,79,68,68,68,61]},{"label":"ジャンプ速報","data":[76,85,80,79,71,77,84,89,78,68,64,64,65,62,75,101,80,71,67,86,83,83,97,74,78,85,101,73]},{"label":"働く大人の非常識","data":[77,63,60,47,53,55,61,52,59,94,101,101,101,101,92,77,85,82,60,55,99,92,101,99,56,78,50,95]},{"label":"まとめ太郎！","data":[78,78,82,86,93,90,90,85,72,77,80,72,84,82,84,84,94,89,101,79,92,101,101,93,101,101,101,101]},{"label":"投資ちゃんねる","data":[79,84,69,75,65,67,83,75,83,76,74,75,67,77,61,65,78,86,68,52,70,76,67,72,71,66,69,76]},{"label":"登山ちゃんねる","data":[80,72,77,94,85,95,88,87,80,86,83,93,89,92,67,80,87,92,83,99,72,82,94,96,101,80,80,101]},{"label":"今日速2ch","data":[81,88,84,59,39,43,89,92,82,63,38,68,62,78,47,46,61,96,98,93,61,73,69,73,93,77,96,67]},{"label":"FF14速報","data":[82,73,92,97,101,101,101,58,76,79,72,81,91,86,73,56,83,97,101,101,75,100,101,101,92,101,101,75]},{"label":"鈴木さん速報","data":[83,82,81,82,89,86,86,84,93,84,76,80,94,80,71,89,84,93,97,97,93,90,79,64,87,94,93,93]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[84,86,52,68,77,83,72,81,89,91,78,78,86,97,66,66,76,61,52,61,76,77,101,101,99,93,84,96]},{"label":"デジタルニューススレッド","data":[85,95,94,91,95,98,97,91,88,99,86,79,92,100,87,88,92,81,89,90,96,91,88,78,89,92,90,72]},{"label":"まとめブレイド","data":[86,51,76,76,84,97,47,74,99,73,75,85,70,68,76,75,89,91,70,83,66,64,101,101,95,101,53,88]},{"label":"大艦巨砲主義！","data":[87,97,101,98,96,99,101,97,101,90,91,101,100,101,101,100,96,101,94,101,95,93,89,91,97,98,98,101]},{"label":"気になる芸能まとめ","data":[88,90,86,87,83,87,101,101,97,101,101,92,93,101,101,101,101,101,82,85,89,94,75,100,85,81,82,94]},{"label":"はーとログ","data":[89,91,98,84,80,92,92,86,90,80,85,88,87,88,85,81,72,72,80,84,81,81,84,80,80,84,83,82]},{"label":"まとめロッテ！","data":[90,92,61,85,69,84,93,96,101,98,81,90,71,81,101,90,55,63,56,74,100,86,82,101,101,101,97,90]},{"label":"最強ジャンプ放送局","data":[91,96,101,101,101,101,94,93,95,89,92,95,98,79,82,82,81,95,85,88,77,85,91,82,88,89,78,68]},{"label":"オタクニュース","data":[92,101,95,83,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,80,101,101,100,101,101,96,101,101]},{"label":"ろぼ速VIP","data":[93,94,88,95,86,81,99,100,100,101,89,89,85,91,89,92,97,62,81,76,90,89,93,81,84,76,86,87]},{"label":"やみ速@なんJ西武まとめ","data":[94,101,29,58,72,63,68,78,51,53,71,83,72,83,94,76,68,90,93,82,94,96,95,85,91,95,99,97]},{"label":"資格ちゃんねる","data":[95,89,99,92,101,101,101,79,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,95,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[96,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[97,101,62,69,68,79,101,95,84,92,101,100,101,101,101,101,79,101,101,101,101,101,81,89,101,91,92,101]},{"label":"おる速","data":[98,100,101,101,101,101,101,101,101,101,97,87,97,87,91,101,101,101,88,95,82,78,98,94,101,101,101,101]},{"label":"バイク速報","data":[99,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[100,101,101,93,101,101,101,98,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,57,74,34,19,94,101,15,43,88,25,36,61,52,101,101,35,49,78,44,37,60,86,30,34,7,25,65]},{"label":"うみこのおとぼけぐらし","data":[101,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,91,101,101,101,101,101,79,101,99]},{"label":"WorldFootballNewS","data":[101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,95,101,100,101,101]},{"label":"おもちゃの巣（玩具レビュー）","data":[101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おたみの日々","data":[101,77,101,101,101,101,98,101,101,93,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,79,89,65,101,72,55,61,101,70,65,40,101,38,38,36,101,23,13,21,101,30,22,21,96,19,16,16]},{"label":"お料理速報","data":[101,83,87,90,91,85,71,82,92,101,101,101,90,93,90,95,90,101,91,89,101,97,101,101,98,101,87,85]},{"label":"つつみのブログ","data":[101,87,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,87,101,101,85,101,80,101,76,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,93,85,80,88,88,75,73,74,85,82,67,60,95,101,101,101,85,95,101,101,95,101,87,101,82,54,64]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,98,96,101,35,22,30,71,58,58,95,101,101,101,48,85,101,101,101,101,101,22,39,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,99,91,88,92,89,87,101,86,97,93,99,83,89,99,101,75,88,96,98,101,101,73,84,94,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,79,101,97,93,101,101,101,101,96,101,101,99,96,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,37,61,101,101,101,101,101]},{"label":"ももクロ侍","data":[101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,65,86,101,101,101,101,101,94,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,100,101,101,101,95,101,101,101,87,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"たかさき通信 - 群馬県高崎市の地域情報サイト","data":[101,101,101,55,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あさのの漫画置き場","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,52,101,69,101,70,101,101,101,101,53,101,63,101,101,101,101,101,101,101,101,101,101,101,46]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,78,34,66,41,41,60,68,69,79,94,30,37,50,55,54,67,88,88,96,101,100,97,100,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,81,76,76,80,79,71,69,86,74,72,70,68,71,57,59,70,73,67,34,57,77,36,60,66]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,87,101,79,101,65,54,101,101,56,46,93,40,31,30,30,63,38,31,54,36,51,39,57,36]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,94,96,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,99,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,100,101,101,101,100,94,101,101,101,101,87,91,77,66,66,74,74,76,76,86,72,73,79]},{"label":"神戸山口組を研究する会","data":[101,101,101,101,101,101,59,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,96,101,101,101,98,82,101,101,101,101,86,101,101,101,101,101,87,62,66,64,70,89]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,94,95,101,98,101,101,95,98,101,101,87,100,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,98,101,99,96,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,88,94,101,101,100,93,101,101,90,101,97,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,15,28,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,101,101,101,29,16,65,101,101,101,101,101,101,101,80,85,86,65,90,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,77,101,98,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,99,101,101,101,101,101,101,101,101,101,101,101,92]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すや子のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,88,83,92,101,80,79,83,71,101,86,88,71]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,87,101,87,101,101,67,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,67,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,99,101,83,101,77,101]},{"label":"アニはつ -アニメ発信場-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"なんでも受信遅報@なんJ・おんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"あんころの漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,91,75,74,83,82,87,101,100]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,99,101,101,101,101,101,101]},{"label":"SAMURAI Footballers","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,70,74,75,91,98]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,83]}];
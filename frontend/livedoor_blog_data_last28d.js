var labels = ['2023-11-25','2023-11-26','2023-11-27','2023-11-28','2023-11-29','2023-11-30','2023-12-01','2023-12-02','2023-12-03','2023-12-04','2023-12-05','2023-12-06','2023-12-07','2023-12-08','2023-12-09','2023-12-10','2023-12-11','2023-12-12','2023-12-13','2023-12-14','2023-12-15','2023-12-16','2023-12-17','2023-12-18','2023-12-19','2023-12-20','2023-12-21','2023-12-22',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,2,2,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1,2,2,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,1,1,2,2,2,2,2,3,2,1,1,2,2,2,2,2,2,1,2,2,2,3,2,1,1,2]},{"label":"はちま起稿","data":[3,4,4,4,3,3,3,3,3,4,3,3,3,3,3,3,5,3,3,3,3,3,4,5,4,3,3,3]},{"label":"ハムスター速報","data":[4,6,8,7,6,7,5,5,8,10,8,6,7,7,4,6,8,6,5,5,5,5,6,8,6,6,5,4]},{"label":"ヤゴヴのマンガ劇場","data":[5,5,5,6,7,9,8,6,6,8,6,8,8,9,15,28,23,21,22,19,18,17,16,19,17,12,12,12]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,3,3,3,5,5,4,4,4,6,5,5,4,5,6,5,3,4,4,4,4,4,5,7,5,5,4,6]},{"label":"痛いニュース(ﾉ∀`)","data":[7,9,7,9,8,6,6,8,7,7,7,7,6,6,7,9,6,8,7,7,6,8,10,10,8,8,7,8]},{"label":"ツイッター速報","data":[8,21,41,101,39,101,69,76,101,94,101,22,21,25,35,84,64,28,36,54,50,49,66,1,7,33,49,69]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[9,8,6,5,4,4,7,7,5,5,4,4,5,4,5,4,4,5,6,6,8,6,7,6,3,4,6,7]},{"label":"もちログ","data":[10,10,10,8,9,8,9,11,11,12,42,63,53,45,43,45,39,33,30,24,27,26,23,30,23,17,20,23]},{"label":"暇つぶしニュース","data":[11,7,9,10,10,10,10,9,9,9,9,10,10,8,8,7,7,9,9,10,9,7,8,9,10,7,8,9]},{"label":"アルファルファモザイク","data":[12,11,11,11,11,11,11,10,10,11,10,9,9,10,9,8,9,10,10,9,10,10,9,11,9,9,10,10]},{"label":"BIPブログ","data":[13,12,13,15,17,17,15,12,12,13,17,15,16,16,13,11,13,11,12,13,12,15,15,14,16,13,15,14]},{"label":"ねいろ速報さん","data":[14,14,15,13,16,16,16,16,15,17,12,13,14,14,14,13,15,13,15,15,16,12,13,15,15,16,17,16]},{"label":"哲学ニュースnwk","data":[15,15,17,18,14,14,13,14,16,16,15,12,11,11,10,12,10,7,8,8,7,9,3,4,11,10,9,5]},{"label":"なんJ PRIDE","data":[16,13,12,12,12,12,12,13,13,14,13,11,12,13,11,10,11,12,11,11,11,11,11,12,14,15,14,15]},{"label":"【2ch】ニュー速クオリティ","data":[17,17,14,14,13,13,14,15,17,18,16,14,13,12,12,14,14,14,13,12,13,13,12,13,12,14,13,11]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,19,19,17,15,15,18,18,19,19,18,17,17,17,17,17,19,17,18,18,17,16,17,20,19,19,16,17]},{"label":"わんこーる速報！","data":[19,16,16,16,18,18,17,17,14,15,14,16,15,15,16,16,16,15,14,14,15,14,14,16,13,11,11,13]},{"label":"VIPPERな俺","data":[20,26,28,22,23,21,26,26,24,21,19,23,26,24,19,19,26,20,21,20,28,32,30,26,26,26,28,28]},{"label":"ぶる速-VIP","data":[21,24,18,20,19,19,19,19,18,20,22,32,27,28,29,27,24,26,32,26,26,27,25,22,27,28,26,25]},{"label":"NEWSぽけまとめーる","data":[22,28,26,25,20,20,24,20,20,22,24,19,18,22,21,21,12,16,16,16,14,19,20,21,21,18,18,20]},{"label":"ラビット速報","data":[23,23,21,23,22,24,21,22,23,26,23,20,23,20,22,18,18,18,20,22,19,23,22,25,22,24,24,19]},{"label":"稲妻速報","data":[24,22,24,19,21,22,20,21,25,24,20,18,20,19,23,22,20,19,17,17,20,18,18,23,18,20,19,21]},{"label":"おーるじゃんる","data":[25,27,23,27,27,29,25,28,28,1,11,21,24,21,20,25,25,23,24,25,23,22,28,29,30,25,21,22]},{"label":"ゴールデンタイムズ","data":[26,25,27,21,24,26,23,23,21,23,25,25,19,23,27,29,27,25,26,28,25,25,24,27,25,21,23,26]},{"label":"日刊やきう速報","data":[27,18,22,24,25,25,22,24,27,25,29,28,29,26,18,20,17,27,23,23,21,21,26,32,28,27,27,27]},{"label":"なんJクエスト","data":[28,29,30,29,26,23,28,29,26,29,26,24,22,18,25,15,22,22,19,21,24,20,19,18,24,22,22,18]},{"label":"人間まおと愉快な仲間たち","data":[29,20,20,42,58,64,65,57,55,52,53,59,60,52,49,52,36,37,56,60,63,69,56,57,67,60,54,48]},{"label":"カラパイア","data":[30,34,33,30,29,31,30,32,31,30,30,27,30,34,37,34,29,31,33,27,30,28,29,17,20,30,30,33]},{"label":"カイカイ反応通信","data":[31,41,40,32,35,37,34,40,35,43,35,34,37,33,34,38,43,30,28,35,31,31,36,35,31,34,32,29]},{"label":"ガールズVIPまとめ","data":[32,35,35,36,42,52,42,37,59,38,38,51,41,36,40,33,42,38,42,42,42,50,57,48,45,67,43,38]},{"label":"IT速報","data":[33,31,34,37,43,34,31,45,40,37,36,46,40,43,33,30,33,35,41,33,39,41,39,46,43,38,31,30]},{"label":"ぱんをたずねて2000里ちょい","data":[34,39,43,35,36,36,37,31,37,31,32,33,38,47,36,32,44,82,59,56,62,64,52,49,48,57,40,37]},{"label":"ネギ速","data":[35,36,36,34,30,32,32,33,30,34,34,37,35,35,30,35,37,41,39,32,35,33,35,37,33,32,29,50]},{"label":"ふくよかまるみのピリカラ人生","data":[36,30,31,62,34,35,72,38,34,32,33,31,59,32,69,40,80,39,34,79,32,30,71,40,77,46,80,45]},{"label":"オタク.com －オタコム－","data":[37,48,47,44,44,42,46,46,41,44,45,48,49,50,53,48,49,43,51,46,41,48,40,41,42,42,41,44]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[38,56,48,45,33,33,36,34,32,40,50,39,42,38,32,31,40,49,44,45,45,53,33,34,58,53,55,41]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[39,58,59,28,45,44,45,39,43,50,47,38,34,39,72,66,62,65,57,55,48,40,42,42,49,47,39,35]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[40,47,39,41,46,38,29,44,42,45,46,44,39,46,41,47,34,24,35,39,44,38,43,67,44,44,38,34]},{"label":"絵日記でございます。","data":[41,63,70,84,101,63,85,83,84,73,66,74,69,86,79,80,32,44,60,57,59,60,78,54,68,77,74,66]},{"label":"乃木坂46まとめ 1/46","data":[42,42,46,39,48,50,39,48,46,48,40,41,36,30,51,55,54,59,46,47,37,35,32,51,53,52,52,43]},{"label":"あいチャンネル","data":[43,93,32,60,40,27,35,25,63,33,21,29,25,29,26,70,41,64,29,36,29,29,41,101,32,31,51,59]},{"label":"今日速2ch","data":[44,72,79,66,55,65,48,91,71,42,61,87,81,78,75,51,52,66,54,31,57,70,38,50,70,40,35,61]},{"label":"カオスちゃんねる","data":[45,38,42,38,31,39,44,43,36,41,41,40,44,40,44,43,45,45,43,40,38,45,46,38,40,41,36,32]},{"label":"De速","data":[46,40,49,51,49,54,41,41,50,61,60,54,50,54,38,39,66,58,74,62,36,39,37,64,52,50,53,72]},{"label":"サル山の裏マンガ","data":[47,49,94,48,41,40,40,42,44,46,43,45,43,49,45,50,47,40,47,44,46,47,50,75,51,94,101,101]},{"label":"【2ch】コピペ情報局","data":[48,46,54,50,51,56,50,47,51,58,52,62,55,44,65,61,56,47,52,41,47,51,45,60,56,54,63,42]},{"label":"ゆっぺのゆる漫画ブログ","data":[49,101,101,46,101,47,101,101,48,54,49,43,45,37,42,36,90,32,38,37,34,54,101,101,37,39,42,36]},{"label":"ポリー速報","data":[50,44,51,47,47,55,53,49,54,53,48,55,56,55,47,54,60,46,64,53,43,37,48,58,62,58,65,62]},{"label":"うしみつ-5chまとめ-","data":[51,53,37,31,28,28,27,30,29,27,28,26,31,27,24,26,28,29,31,30,22,24,21,28,29,29,25,24]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[52,69,72,68,78,73,79,67,80,81,51,65,74,75,80,73,83,78,73,67,74,78,60,39,50,63,56,71]},{"label":"芸能人の気になる噂","data":[53,55,58,57,56,53,47,73,53,64,77,75,91,80,48,57,68,73,55,49,49,56,55,56,47,51,46,52]},{"label":"あにこ便","data":[54,45,50,49,53,57,55,53,47,49,54,58,62,56,58,44,51,54,62,63,58,57,44,45,55,61,58,54]},{"label":"まとめたニュース","data":[55,68,29,40,60,51,54,50,56,35,58,56,48,42,46,46,58,55,27,43,40,55,62,55,38,37,33,39]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[56,60,52,61,63,49,56,54,52,56,57,49,64,77,59,53,50,69,84,78,71,90,85,86,88,74,83,94]},{"label":"海外の万国反応記＠海外の反応","data":[57,61,62,54,57,66,63,60,57,63,59,50,58,66,55,59,59,56,61,48,55,66,49,59,64,55,59,55]},{"label":"まとめブレイド","data":[58,83,60,67,52,61,51,101,58,82,83,47,84,101,91,37,65,80,70,77,84,43,59,66,85,73,73,63]},{"label":"流速VIP","data":[59,66,57,55,67,68,64,56,62,57,55,67,57,58,63,60,67,60,63,66,53,67,47,44,59,64,66,75]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[60,52,56,63,93,60,62,72,45,65,69,68,78,69,57,62,69,74,69,101,101,84,54,87,54,68,67,60]},{"label":"働く大人の非常識","data":[61,50,65,52,90,101,101,58,38,59,44,52,47,57,66,65,101,50,67,89,65,42,34,101,71,45,48,73]},{"label":"はむらの毎日マンガ","data":[62,33,25,26,54,30,49,27,22,51,27,53,32,59,28,24,61,101,71,51,98,62,84,53,34,71,34,57]},{"label":"ついんてーる速報","data":[63,70,63,43,50,67,66,55,60,67,73,71,61,64,64,58,53,51,50,58,54,61,58,52,57,65,61,46]},{"label":"うちの夫が糖尿病になっちゃった！","data":[64,71,66,65,70,70,77,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ずっと日曜日のターン","data":[65,85,101,101,101,101,101,81,69,101,101,94,101,67,70,101,101,101,101,101,101,101,101,80,101,101,87,53]},{"label":"はーとログ","data":[66,86,86,91,83,89,90,86,83,93,93,92,101,85,76,79,97,88,81,81,95,95,76,84,87,93,90,95]},{"label":"ライフハックちゃんねる弐式","data":[67,82,76,89,85,86,76,87,78,70,76,84,93,70,83,82,89,77,68,69,79,88,75,77,84,95,70,64]},{"label":"なんJ（まとめては）いかんのか？","data":[68,43,64,56,62,58,71,51,81,55,89,101,96,89,71,88,84,100,92,88,91,77,77,76,101,100,88,79]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[69,75,75,70,65,46,43,71,33,39,62,70,88,88,82,42,38,53,58,64,72,71,65,70,83,59,72,80]},{"label":"馬鳥速報","data":[70,88,73,82,66,71,81,82,74,80,90,95,83,99,56,81,82,61,85,76,87,79,91,100,90,85,79,87]},{"label":"おたみの日々","data":[71,37,81,101,38,45,61,36,101,36,31,101,33,96,54,101,77,91,101,50,101,52,101,101,36,82,60,51]},{"label":"パチンコ・パチスロ.com","data":[72,65,85,69,71,43,38,64,75,66,65,57,54,53,39,41,48,34,49,52,52,46,51,65,63,49,44,49]},{"label":"チリツモブログ","data":[73,101,101,101,59,101,101,101,101,101,101,64,101,84,101,101,101,67,101,101,73,101,101,101,101,101,101,101]},{"label":"そんな毎日、こんな毎日","data":[74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[75,89,68,78,79,88,82,79,68,79,67,80,72,95,81,86,81,89,82,74,81,80,79,74,78,97,84,84]},{"label":"鷹速@ホークスまとめブログ","data":[76,57,69,64,68,62,59,62,66,72,74,73,73,71,61,67,74,62,77,68,70,63,70,71,75,80,69,74]},{"label":"スズぺぺの人生何とかなってます!!","data":[77,80,82,74,77,74,78,70,67,71,68,66,66,68,68,64,75,68,66,65,61,59,53,61,61,62,57,56]},{"label":"おうまがタイムズ","data":[78,51,44,53,32,41,57,61,39,28,37,30,28,41,31,56,30,36,40,61,33,36,31,33,35,35,45,47]},{"label":"PS5速報！","data":[79,67,61,58,61,59,58,59,73,83,64,61,65,60,52,69,88,63,65,59,56,65,64,63,66,69,71,58]},{"label":"山田全自動のあるある日記","data":[80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,64,101,101,101,101,101,101,101]},{"label":"軍事・ミリタリー速報☆彡","data":[81,74,80,72,73,76,33,68,70,84,72,77,86,73,78,76,85,71,76,73,77,81,80,72,74,83,85,85]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[82,64,83,92,91,99,94,96,96,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダンナ様は安月給","data":[83,73,101,83,72,101,101,85,76,101,87,88,101,98,84,101,101,96,80,101,101,101,92,101,91,89,101,101]},{"label":"まとめロッテ！","data":[84,59,53,59,76,82,67,69,79,69,71,69,75,72,60,63,57,75,79,84,51,58,73,68,80,87,91,86]},{"label":"やみ速@なんJ西武まとめ","data":[85,100,101,88,75,78,75,65,61,76,80,79,63,76,67,72,91,98,87,85,67,72,94,83,76,90,77,67]},{"label":"ジャンプ速報","data":[86,101,101,76,81,90,101,93,101,101,91,81,76,92,96,101,101,90,86,101,89,101,101,101,98,101,101,101]},{"label":"気になる芸能まとめ","data":[87,84,78,79,82,81,70,66,65,68,70,78,79,82,86,77,70,72,75,101,101,101,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[88,101,90,85,88,84,89,88,89,86,86,82,98,87,88,91,78,85,98,98,90,86,93,73,81,79,76,77]},{"label":"2chコピペ保存道場","data":[89,76,77,86,97,83,87,84,82,78,84,97,101,93,85,87,79,93,83,82,76,91,81,69,82,88,75,81]},{"label":"MLB NEWS@まとめ","data":[90,62,91,73,64,75,80,80,92,95,79,83,67,74,73,78,46,57,72,72,80,73,69,78,101,101,92,92]},{"label":"世にも奇妙ななんかの話","data":[91,101,101,101,74,77,73,101,49,47,56,101,52,51,62,101,35,48,100,101,101,101,101,97,101,101,101,101]},{"label":"登山ちゃんねる","data":[92,101,96,75,95,93,99,78,77,96,88,86,101,101,101,95,93,97,101,101,101,75,82,90,96,86,62,65]},{"label":"まとめ太郎！","data":[93,92,89,98,101,101,92,98,90,87,85,101,101,101,101,101,101,94,90,83,85,97,101,91,101,101,101,99]},{"label":"投資ちゃんねる","data":[94,91,88,94,94,80,91,101,95,85,78,85,85,83,87,74,87,79,78,90,78,87,86,82,86,96,82,89]},{"label":"デジタルニューススレッド","data":[95,96,93,101,98,94,101,101,86,99,94,93,92,101,101,97,98,101,94,91,99,85,83,79,101,101,95,93]},{"label":"ろぼ速VIP","data":[96,99,87,77,96,85,96,101,91,92,95,91,101,101,100,89,95,95,91,96,83,93,88,81,99,101,89,91]},{"label":"もりおか通信 - 岩手県盛岡市の地域情報サイト -","data":[97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[98,98,101,101,101,101,101,101,100,88,101,90,80,101,101,101,101,101,101,101,86,101,89,101,101,101,101,90]},{"label":"お料理速報","data":[99,101,97,97,101,101,97,101,101,77,98,101,101,94,101,94,101,101,95,101,101,101,101,94,101,101,101,98]},{"label":"オタクニュース","data":[100,54,92,101,101,79,98,94,85,74,82,101,101,97,50,92,73,84,89,70,97,101,87,62,101,101,81,83]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,32,45,87,101,101,84,101,101,89,101,36,46,79,95,101,63,101,101,95,101,100,67,98,69,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,77,74,80,89,91,74,101,93,100,81,101,101,101,89,83,99,101,101,101,101,98,99,101,101,101,99,96]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,78,71,71,101,69,60,52,101,75,63,101,68,65,101,75,72,76,101,80,66,76,101,101,79,78,68,68]},{"label":"マンガと私と猫ブログ。","data":[101,79,84,101,69,48,52,35,64,60,39,42,51,48,74,49,31,52,48,34,69,44,61,47,60,101,50,31]},{"label":"ミラクルファミリー","data":[101,81,101,101,101,101,101,95,101,101,101,101,89,91,101,101,101,42,25,38,101,101,96,101,72,48,86,101]},{"label":"ろくのコミックブログ","data":[101,87,101,101,80,101,83,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,90,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,94,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,93,94,91,94,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,95,101,101,101,101,101,100,101,101,101,101,101,101,94,98,101,101,101,101,100,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,97,55,99,101,101,68,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,38,33,86,96,101,101,101,101,101,101,101,61,101,101,101,92,88,29,60,74,27,31,46,84,101,70]},{"label":"ニュースBUZZ","data":[101,101,67,90,87,98,88,75,101,62,101,60,82,62,97,68,76,101,101,101,75,89,63,43,65,56,64,76]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,95,93,101,101,93,90,101,101,101,101,101,101,101,101,101,101,101,99,101,99,101,101,89,81,101,101]},{"label":"還暦着物好き日記","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんでも受信遅報@なんJ・おんJまとめ","data":[101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,81,92,92,101,101,98,97,75,99,101,101,101,100,101,87,101,101,92,94,98,95,93,101,97,100]},{"label":"FF14速報","data":[101,101,101,95,101,101,101,101,101,101,97,101,101,101,93,101,101,101,96,97,88,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,96,101,101,101,97,101,101,101,101,101,101,101,101,71,101,97,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,37,101,101,101,101,101,101,35,101,101,101,101,101,101,45,101,101,101,101,101,101,36,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,84,101,95,89,87,90,101,101,100,100,92,90,86,99,101,75,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,99,87,86,77,101,101,96,76,71,81,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,100,100,101,99,99,91,99,101,101,101,98,99,100,101,99,86,96,101,95,88,95,101,96,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,72,101,101,101,101,101,101,70,101,77,101,101,86,101,71,101,101,101,101,73,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,93,92,101,101,101,101,101,101,101,101,101,101,101]},{"label":"NPO法人ペット里親会","data":[101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"VIP NEWS","data":[101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,63,101,101,101,100,87,101,101,71,55,83,93,93,68,82,101,36,41,23,37,82]},{"label":"魔界のニュース","data":[101,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,97,101,100,89,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,101,101,101,101,101,92,72,94,101,101,85,94,101,101,92,94,92,90,85,100,98,78,97]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,96,95,101,101,101,101,101,101,94,101,101,101,101,101,99,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,68,89,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,77,101,101,101,101,101,37,101,101,68,101,101,101,72,101,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,97,63,99,101,101,101,101,101,101,101,72,101,101,75,101,101]},{"label":"ヲタママだっていーじゃない！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,31,101,101,101,70,101,101,101,101,101,101,101,76,101,101]},{"label":"福々ちえWEBコミック〜幸せはどこにある？〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,23,21,101,101,101,101,101,101,96,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,87,93,83,74,92,97,92,93,88]},{"label":"笑う母には福来る　byはなゆい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,53,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,100,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101]},{"label":"とんとんのマンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101]},{"label":"独女ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,24,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,39,70,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,43,47,78]},{"label":"ぷみらの看護師奮闘記マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101]},{"label":"あさことはぎゆうの漫画おきば","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"甘辛ミックス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,40]}];
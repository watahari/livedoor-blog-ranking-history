var labels = ['2023-11-04','2023-11-05','2023-11-06','2023-11-07','2023-11-08','2023-11-09','2023-11-10','2023-11-11','2023-11-12','2023-11-13','2023-11-14','2023-11-15','2023-11-16','2023-11-17','2023-11-18','2023-11-19','2023-11-20','2023-11-21','2023-11-22','2023-11-23','2023-11-24','2023-11-25','2023-11-26','2023-11-27','2023-11-28','2023-11-29','2023-11-30','2023-12-01',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,2,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,2,2,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,3,2,1,1,2,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,1,1,2,2,2]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[3,4,5,5,5,6,7,5,4,5,5,5,5,5,5,6,6,5,5,5,8,9,8,6,5,4,4,7]},{"label":"はちま起稿","data":[4,3,4,3,3,4,3,3,3,4,3,3,3,3,3,3,4,3,3,3,4,3,4,4,4,3,3,3]},{"label":"ハムスター速報","data":[5,6,7,6,4,3,5,4,8,6,4,7,6,4,4,4,5,8,4,4,5,4,6,8,7,6,7,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,5,6,4,7,5,4,6,5,9,6,4,4,7,6,7,3,4,7,7,7,6,3,3,3,5,5,4]},{"label":"暇つぶしニュース","data":[7,9,8,12,8,8,8,8,6,7,9,9,9,10,9,8,7,9,10,11,10,11,7,9,10,10,10,10]},{"label":"ヤゴヴのマンガ劇場","data":[8,7,13,10,11,17,29,17,11,3,10,8,8,8,8,9,9,6,6,6,6,5,5,5,6,7,9,8]},{"label":"痛いニュース(ﾉ∀`)","data":[9,8,9,8,6,7,6,7,7,8,7,6,7,6,7,5,8,7,8,8,9,7,9,7,9,8,6,6]},{"label":"アルファルファモザイク","data":[10,10,10,11,9,10,9,9,9,10,8,10,10,9,10,10,11,10,9,9,12,12,11,11,11,11,11,11]},{"label":"ねいろ速報さん","data":[11,11,12,9,13,12,12,12,12,12,13,14,14,14,12,12,13,13,14,15,14,14,14,15,13,16,16,16]},{"label":"哲学ニュースnwk","data":[12,14,15,14,10,11,11,13,13,13,11,12,13,11,11,16,16,15,15,16,17,15,15,17,18,14,14,13]},{"label":"なんJ PRIDE","data":[13,12,14,15,15,14,15,11,14,16,15,15,15,13,14,14,15,14,16,14,15,16,13,12,12,12,12,12]},{"label":"ぶる速-VIP","data":[14,16,17,16,18,16,14,21,21,22,19,19,16,15,20,19,17,17,19,20,20,21,24,18,20,19,19,19]},{"label":"【2ch】ニュー速クオリティ","data":[15,13,16,17,14,13,13,14,15,14,16,16,17,17,15,13,14,16,13,17,16,17,17,14,14,13,13,14]},{"label":"おーるじゃんる","data":[16,21,33,31,21,19,19,30,29,25,21,21,23,26,24,24,25,22,23,27,23,25,27,23,27,27,29,25]},{"label":"わんこーる速報！","data":[17,17,19,19,16,15,16,15,17,15,14,13,18,18,16,17,18,19,18,18,18,19,16,16,16,18,18,17]},{"label":"カエルDXのオタ活日記","data":[18,28,35,33,22,24,40,84,101,101,45,50,68,65,89,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"BIPブログ","data":[19,15,11,13,12,9,10,10,10,11,12,11,11,12,13,11,10,11,11,12,13,13,12,13,15,17,17,15]},{"label":"ゴールデンタイムズ","data":[20,26,27,24,19,21,23,20,22,18,23,24,25,24,23,26,23,20,28,24,26,26,25,27,21,24,26,23]},{"label":"人間まおと愉快な仲間たち","data":[21,20,20,22,24,30,30,26,28,32,35,34,36,28,25,18,19,18,21,22,29,29,20,20,42,58,64,65]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[22,18,22,18,17,18,17,16,18,17,17,18,20,19,18,22,20,21,17,19,19,18,19,19,17,15,15,18]},{"label":"ラビット速報","data":[23,19,28,30,25,22,22,18,20,19,24,28,21,20,27,20,21,24,22,26,24,23,23,21,23,22,24,21]},{"label":"NEWSぽけまとめーる","data":[24,23,26,32,27,23,25,27,24,21,27,20,22,23,17,25,26,27,20,21,21,22,28,26,25,20,20,24]},{"label":"あいチャンネル","data":[25,67,23,28,36,29,44,32,45,93,29,38,30,41,31,28,59,32,30,45,31,43,93,32,60,40,27,35]},{"label":"稲妻速報","data":[26,25,30,27,28,25,21,23,23,24,22,25,26,22,26,27,29,26,25,29,25,24,22,24,19,21,22,20]},{"label":"VIPPERな俺","data":[27,27,21,25,23,26,20,22,26,27,20,23,27,25,21,23,22,23,24,23,22,20,26,28,22,23,21,26]},{"label":"日刊やきう速報","data":[28,22,18,21,26,27,24,24,30,29,28,22,24,21,22,31,28,25,26,25,27,27,18,22,24,25,25,22]},{"label":"乃木坂46まとめ 1/46","data":[29,29,37,26,29,28,27,34,32,33,39,39,34,44,28,21,24,36,32,32,48,42,42,46,39,48,50,39]},{"label":"もちログ","data":[30,32,32,29,30,20,18,19,16,23,18,17,12,16,19,15,12,12,12,10,11,10,10,10,8,9,8,9]},{"label":"うしみつ-5chまとめ-","data":[31,34,34,34,31,32,26,25,25,26,26,31,37,32,29,30,30,29,37,50,50,51,53,37,31,28,28,27]},{"label":"なんJクエスト","data":[32,24,25,23,33,31,28,29,27,28,25,26,31,29,30,34,34,35,27,31,28,28,29,30,29,26,23,28]},{"label":"カラパイア","data":[33,35,38,38,38,33,33,33,36,34,36,27,19,27,36,35,33,33,34,34,33,30,34,33,30,29,31,30]},{"label":"NPO法人ペット里親会","data":[34,68,75,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101]},{"label":"カイカイ反応通信","data":[35,39,43,37,42,34,39,35,42,38,30,33,39,34,33,36,36,31,33,35,36,31,41,40,32,35,37,34]},{"label":"ガールズVIPまとめ","data":[36,42,48,44,63,60,36,38,48,41,38,52,33,48,49,33,39,41,47,48,37,32,35,35,36,42,52,42]},{"label":"IT速報","data":[37,36,44,42,41,35,38,36,37,31,31,41,45,38,39,32,35,37,39,38,35,33,31,34,37,43,34,31]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[38,37,31,20,37,46,42,53,39,39,41,43,51,40,48,41,42,42,43,40,49,40,47,39,41,46,38,29]},{"label":"ネギ速","data":[39,33,24,35,35,39,37,37,31,30,34,30,29,33,37,37,32,30,29,28,34,35,36,36,34,30,32,32]},{"label":"おうまがタイムズ","data":[40,30,29,39,32,36,32,28,33,36,37,29,35,59,60,38,37,58,42,43,42,78,51,44,53,32,41,57]},{"label":"ポリー速報","data":[41,51,42,52,57,56,47,50,55,65,66,60,57,53,56,54,53,56,60,53,53,50,44,51,47,47,55,53]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[42,41,46,51,44,38,46,43,38,37,42,40,44,46,40,43,46,48,38,37,38,38,56,48,45,33,33,36]},{"label":"ぱんをたずねて2000里ちょい","data":[43,45,39,41,43,37,34,31,34,44,44,32,38,43,50,39,38,34,35,41,39,34,39,43,35,36,36,37]},{"label":"カオスちゃんねる","data":[44,38,45,48,49,41,35,41,43,35,32,37,41,39,41,40,41,38,40,42,43,45,38,42,38,31,39,44]},{"label":"オタク.com －オタコム－","data":[45,44,41,46,45,48,50,47,46,46,48,47,50,49,44,44,44,40,44,46,44,37,48,47,44,44,42,46]},{"label":"馬鳥速報","data":[46,46,57,68,60,54,58,56,75,72,57,71,60,70,73,81,66,67,53,73,72,70,88,73,82,66,71,81]},{"label":"ツイッター速報","data":[47,31,1,7,20,43,45,46,56,80,58,69,99,93,101,101,101,101,101,13,3,8,21,41,101,39,101,69]},{"label":"ニュースBUZZ","data":[48,82,69,72,46,82,57,66,60,71,60,61,46,35,55,66,62,63,63,77,65,101,101,67,90,87,98,88]},{"label":"【2ch】コピペ情報局","data":[49,40,56,58,52,45,49,45,49,45,46,49,49,51,61,49,52,55,51,60,63,48,46,54,50,51,56,50]},{"label":"あにこ便","data":[50,47,40,45,50,57,54,48,40,43,50,55,61,58,58,45,48,49,54,58,58,54,45,50,49,53,57,55]},{"label":"芸能人の気になる噂","data":[51,62,68,64,79,83,63,63,52,47,61,56,47,47,51,47,47,46,46,49,47,53,55,58,57,56,53,47]},{"label":"今日速2ch","data":[52,56,81,75,58,50,52,51,71,55,68,66,71,75,84,72,70,98,83,62,59,44,72,79,66,55,65,48]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[53,54,47,69,62,53,56,64,51,42,49,51,42,42,57,48,51,39,45,54,45,39,58,59,28,45,44,45]},{"label":"まとめたニュース","data":[54,57,51,59,40,42,41,49,41,52,56,53,48,50,52,46,57,47,49,63,54,55,68,29,40,60,51,54]},{"label":"気になる芸能まとめ","data":[55,59,61,73,59,66,66,65,62,60,90,92,90,89,85,76,72,85,87,95,80,87,84,78,79,82,81,70]},{"label":"PS5速報！","data":[56,70,74,66,61,58,55,58,69,78,64,63,58,60,65,61,76,62,58,59,73,79,67,61,58,61,59,58]},{"label":"流速VIP","data":[57,55,65,78,65,74,51,55,57,50,55,77,69,45,47,60,43,54,56,52,57,59,66,57,55,67,68,64]},{"label":"海外の万国反応記＠海外の反応","data":[58,60,62,61,51,61,59,60,63,58,63,58,65,69,63,52,55,50,55,61,64,57,61,62,54,57,66,63]},{"label":"オタクニュース","data":[59,95,101,101,101,78,101,78,72,98,101,101,52,88,98,64,45,101,101,72,89,100,54,92,101,101,79,98]},{"label":"阪神タイガースちゃんねる","data":[60,65,52,63,56,64,78,71,87,81,81,96,93,101,95,84,81,99,92,98,99,98,98,101,101,101,101,101]},{"label":"ライフハックちゃんねる弐式","data":[61,79,90,87,75,72,62,69,64,75,71,86,76,84,79,75,77,76,79,69,60,67,82,76,89,85,86,76]},{"label":"うちの夫が糖尿病になっちゃった！","data":[62,73,78,77,73,77,69,70,66,61,69,68,73,71,72,68,63,61,61,65,68,64,71,66,65,70,70,77]},{"label":"De速","data":[63,74,73,43,54,47,48,52,53,51,52,45,67,36,34,42,49,44,65,66,61,46,40,49,51,49,54,41]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[64,84,88,80,74,70,75,77,67,66,85,101,89,72,71,80,91,74,76,79,81,69,75,75,70,65,46,43]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[65,58,49,53,72,71,72,62,58,69,65,35,43,52,42,51,50,60,67,47,55,56,60,52,61,63,49,56]},{"label":"なんJ（まとめては）いかんのか？","data":[66,52,53,40,77,88,83,72,90,63,84,48,64,66,67,71,68,83,84,68,62,68,43,64,56,62,58,71]},{"label":"絵日記でございます。","data":[67,91,70,83,83,79,95,44,54,59,47,88,98,94,97,86,64,52,41,57,32,41,63,70,84,101,63,85]},{"label":"軍事・ミリタリー速報☆彡","data":[68,69,72,76,81,75,73,74,70,79,78,82,77,82,78,69,79,71,69,74,77,81,74,80,72,73,76,33]},{"label":"はーとログ","data":[69,81,82,91,82,90,85,85,81,82,88,90,94,90,96,79,84,80,91,88,88,66,86,86,91,83,89,90]},{"label":"あさのの漫画置き場","data":[70,101,100,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[71,50,54,62,47,44,53,57,44,48,40,42,54,54,64,67,85,69,50,39,46,72,65,85,69,71,43,38]},{"label":"footballnet【サッカー5chまとめ】","data":[72,80,86,84,95,101,101,101,101,88,76,100,101,101,101,100,101,89,90,89,84,101,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[73,77,55,56,55,52,43,42,50,49,59,57,55,61,62,50,61,51,52,55,51,63,70,63,43,50,67,66]},{"label":"サル山の裏マンガ","data":[74,64,64,67,64,65,94,61,59,53,54,59,56,56,54,98,101,57,48,51,52,47,49,94,48,41,40,40]},{"label":"まとめ太郎！","data":[75,88,67,97,100,101,98,99,96,84,70,83,85,85,86,73,89,97,97,101,101,93,92,89,98,101,101,92]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[76,63,83,96,53,69,81,39,91,68,80,101,101,99,83,101,101,82,101,94,101,101,32,45,87,101,101,84]},{"label":"まとめロッテ！","data":[77,78,50,50,66,63,70,76,65,92,101,74,59,64,99,88,74,70,82,91,101,84,59,53,59,76,82,67]},{"label":"つんの日常ブログ","data":[78,101,101,101,92,101,101,101,101,54,101,101,101,101,101,101,54,43,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[79,90,77,93,87,86,65,80,79,77,83,73,81,81,68,62,69,68,64,44,74,75,89,68,78,79,88,82]},{"label":"働く大人の非常識","data":[80,49,59,85,48,99,86,91,94,56,101,67,53,37,59,95,56,53,74,97,67,61,50,65,52,90,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[81,75,80,82,68,76,64,59,68,73,72,76,79,55,38,53,65,73,59,71,75,52,69,72,68,78,73,79]},{"label":"投資ちゃんねる","data":[82,87,93,100,86,89,91,92,78,67,99,97,87,91,101,82,90,93,73,83,78,94,91,88,94,94,80,91]},{"label":"鷹速@ホークスまとめブログ","data":[83,72,71,49,70,81,71,83,73,70,67,70,62,63,66,70,78,75,78,81,70,76,57,69,64,68,62,59]},{"label":"FF14速報","data":[84,96,96,86,69,93,76,89,101,101,75,75,75,100,92,87,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[85,101,63,54,96,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,97,55,99,101,101,68]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[86,89,84,71,89,95,61,86,83,101,101,79,86,78,76,65,82,100,99,101,97,101,77,74,80,89,91,74]},{"label":"ふくよかまるみのピリカラ人生","data":[87,43,36,36,80,40,31,67,35,57,33,62,32,30,32,59,31,28,31,30,66,36,30,31,62,34,35,72]},{"label":"鈴木さん速報","data":[88,99,95,88,76,80,79,87,89,87,92,94,96,86,100,94,94,88,89,90,90,88,101,90,85,88,84,89]},{"label":"2chコピペ保存道場","data":[89,93,79,90,88,73,68,81,85,83,94,89,83,92,80,74,88,78,80,87,83,89,76,77,86,97,83,87]},{"label":"ダンナ様は安月給","data":[90,83,101,101,101,101,80,79,82,101,101,101,92,79,81,78,101,86,70,101,101,83,73,101,83,72,101,101]},{"label":"登山ちゃんねる","data":[91,94,89,101,101,87,89,88,95,101,96,85,84,73,101,83,83,95,96,101,87,92,101,96,75,95,93,99]},{"label":"なんJ 野球をまとめてみたよ","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[93,100,98,101,94,101,92,90,93,86,86,91,88,80,77,57,73,77,75,76,82,77,80,82,74,77,74,78]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[94,85,101,70,67,101,101,68,101,76,101,78,66,74,70,92,67,101,62,80,101,60,52,56,63,93,60,62]},{"label":"えみコミック！","data":[95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[96,97,92,79,97,98,93,101,101,101,79,101,101,95,101,101,99,90,95,101,100,101,101,101,81,92,92,101]},{"label":"やみ速@なんJ西武まとめ","data":[97,71,87,94,78,97,60,73,77,95,97,64,63,68,88,90,75,66,72,85,85,85,100,101,88,75,78,75]},{"label":"MLB NEWS@まとめ","data":[98,101,76,89,84,67,84,93,84,62,87,84,78,83,74,63,71,91,85,84,98,90,62,91,73,64,75,80]},{"label":"ずっと日曜日のターン","data":[99,76,58,74,101,49,82,97,74,101,101,87,70,76,87,101,101,101,57,101,79,65,85,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[100,101,101,101,98,92,99,95,101,90,101,101,101,101,101,97,98,101,93,101,101,101,101,101,101,100,100,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,48,101,47,101,51,101,40,101,101,51,101,101,101,45,101,101,45,101,101,101,49,101,101,46,101,47,101]},{"label":"ぽんぽん子育て","data":[101,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おたみの日々","data":[101,61,101,101,101,101,101,101,47,101,101,44,101,97,43,101,40,79,101,33,40,71,37,81,101,38,45,61]},{"label":"はむらの毎日マンガ","data":[101,66,101,60,101,55,87,54,92,101,101,46,28,62,35,29,27,59,101,36,30,62,33,25,26,54,30,49]},{"label":"まとめブレイド","data":[101,86,99,101,101,101,100,75,80,64,62,80,72,57,82,58,58,65,77,70,76,58,83,60,67,52,61,51]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,92,85,101,101,101,101,101,101,97,101,101,101,101,93,101,101,101,101,92,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,98,94,101,101,101,88,96,98,91,98,101,97,101,101,96,96,101,100,101,91,95,96,93,101,98,94,101]},{"label":"銃とバッジは置いていけ","data":[101,101,60,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,66,55,91,101,101,101,101,101,101,101,101,101,101,101,101,101,66,100,101,80,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,91,101,101,84,74,101,100,89,74,95,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろぼ速VIP","data":[101,101,97,101,90,101,90,100,86,85,91,98,95,77,75,85,80,81,81,99,96,96,99,87,77,96,85,96]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,57,85,101,101,101,101,101,101,101,101,101,101,101,86,84,101,101,92,101,101,38,33,86,96,101]},{"label":"つつみのブログ","data":[101,101,101,81,101,68,101,101,101,101,101,101,74,101,69,101,101,64,101,64,101,101,101,101,101,101,72,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,92,99,62,67,101,101,101,43,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,98,71,94,97,101,101,101,100,101,101,101,101,101,95,87,98,101,86,86,101,101,76,81,90,101]},{"label":"ライブドアブログのヘルプ（スマホ向け）","data":[101,101,101,101,34,101,101,101,101,101,101,54,101,101,101,56,101,101,94,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,39,101,101,101,101,101,101,36,101,101,101,101,101,101,36,101,101,101,101,101,101,37,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,59,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,101,85,101,101,101,101,101,93,101,101,94,101,101,101,101,101,41,91,101,101,101,74,77,73]},{"label":"VIP NEWS","data":[101,101,101,101,101,91,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,100,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,100,101,101,88,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,101,101,101,101,101,96,82,76,101,73,72,80,101,91,77,87,101,88,82,71,101,78,71,71,101,69,60]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,98,101,94,101,99,101,101,101,101,101,72,101,93,95,101,101,95,93,101,101,93]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,19,20,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,101,101,101,101,101,101,101,61,40,82,65,82,67,53,55,60,92,71,67,56,101,79,84,101,69,48,52]},{"label":"ふぇー速","data":[101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コミック ベビシッターさいおなおの日常茶飯","data":[101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[101,101,101,101,101,101,101,101,101,96,93,101,101,96,90,101,93,101,101,101,94,99,101,97,97,101,101,97]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,53,81,101,101,101,101,101,96,101,101,101,101,101,101,96,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,101,89,101,91,101,101,89,101,101,101,101,101,101,101,101,101,84,101,95]},{"label":"独女ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,40,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"LOVEHOME 収納&インテリア","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,31,46,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,94,101,96,101,101,95,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,92,101,101,101,101,82,64,83,92,91,99,94]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジムニーシエラ JB43日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,56,101,73,101,101,101,59,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,90,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101]},{"label":"もりおか通信 - 岩手県盛岡市の地域情報サイト -","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,97,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,87,101,101,80,101,83]},{"label":"そんな毎日、こんな毎日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101]},{"label":"還暦着物好き日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"なんでも受信遅報@なんJ・おんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,87,86]}];
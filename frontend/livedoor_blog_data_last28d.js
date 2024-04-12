var labels = ['2024-03-16','2024-03-17','2024-03-18','2024-03-19','2024-03-20','2024-03-21','2024-03-22','2024-03-23','2024-03-24','2024-03-25','2024-03-26','2024-03-27','2024-03-28','2024-03-29','2024-03-30','2024-03-31','2024-04-01','2024-04-02','2024-04-03','2024-04-04','2024-04-05','2024-04-06','2024-04-07','2024-04-08','2024-04-09','2024-04-10','2024-04-11','2024-04-12',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,4,1,1,2,3,1,1,1,2,3,1,1,1,1,2,3,1,1,1,8,4,1,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,3,1,2,2,2,1,1,2,2,3,1,1,2,2,2,2,1,1,2,2,2,1,1,2,2,1]},{"label":"はちま起稿","data":[3,3,4,3,3,3,5,5,4,4,4,5,5,2,4,4,4,3,3,2,3,3,4,3,2,3,3,3]},{"label":"ハムスター速報","data":[4,8,7,4,5,5,4,4,5,5,5,2,3,4,5,5,5,5,5,4,4,4,7,6,6,6,5,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,6,6,7,8,3,3,2,3,3,4,4,5,3,3,3,4,4,5,5,5,3,2,3,4,4,4]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,5,5,5,6,6,6,7,6,6,6,6,6,6,6,6,6,7,7,7,7,6,5,4,5,5,6,6]},{"label":"ヤゴヴのマンガ劇場","data":[7,9,9,7,9,10,8,9,7,9,10,10,11,10,10,21,31,25,21,19,14,13,11,11,10,10,10,11]},{"label":"暇つぶしニュース","data":[8,6,11,9,10,7,9,10,10,7,8,8,7,8,8,7,7,6,8,6,6,7,6,5,8,8,8,9]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,11,10,10,11,11,7,8,8,8,9,9,8,9,9,9,10,9,9,8,8,9,9,10,9,9,9,8]},{"label":"痛いニュース(ﾉ∀`)","data":[10,12,12,8,8,9,10,6,9,10,7,7,9,7,7,8,8,8,6,9,9,8,8,7,7,7,7,7]},{"label":"BIPブログ","data":[11,14,13,12,13,12,13,12,12,13,13,11,10,11,11,12,11,11,11,12,12,11,10,13,12,11,11,10]},{"label":"わんこーる速報！","data":[12,20,16,16,14,13,16,17,13,12,15,14,16,16,16,18,17,17,14,16,15,17,17,17,15,15,14,14]},{"label":"なんJ PRIDE","data":[13,17,15,15,15,18,12,11,11,11,12,12,13,14,12,11,9,12,15,14,10,14,12,14,13,12,12,12]},{"label":"哲学ニュースnwk","data":[14,10,8,11,12,14,18,14,14,16,11,17,12,13,13,14,15,14,13,10,13,18,18,18,14,16,18,15]},{"label":"【2ch】ニュー速クオリティ","data":[15,19,17,18,16,19,19,15,16,17,18,16,15,17,18,17,16,16,18,17,16,16,16,16,16,17,16,16]},{"label":"乃木坂46まとめ 1/46","data":[16,16,18,35,40,38,33,48,55,34,44,35,33,36,32,26,27,38,39,40,42,46,38,50,34,31,42,39]},{"label":"あいチャンネル","data":[17,52,38,19,24,64,22,32,69,24,34,73,20,52,47,25,64,101,43,22,58,101,101,101,101,44,25,61]},{"label":"ねいろ速報さん","data":[18,21,20,17,18,22,24,23,20,21,17,19,19,20,20,24,20,19,22,23,20,22,20,20,17,20,21,21]},{"label":"ぶる速-VIP","data":[19,18,21,21,19,20,25,25,21,20,21,20,18,19,23,16,12,15,17,18,17,21,19,24,24,13,17,19]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[20,27,23,20,20,21,26,20,19,18,20,18,21,22,19,23,23,18,16,20,19,20,21,23,20,19,19,17]},{"label":"ラビット速報","data":[21,22,22,24,21,24,21,26,22,22,25,23,22,18,21,22,22,20,20,21,22,23,22,22,22,22,20,23]},{"label":"ゴールデンタイムズ","data":[22,28,29,26,27,28,27,27,27,19,24,22,32,35,28,32,28,26,26,27,25,30,29,29,28,27,29,24]},{"label":"うしみつ-5chまとめ-","data":[23,23,28,30,28,30,36,35,28,26,31,31,31,25,27,28,24,29,27,29,26,25,26,27,25,24,24,22]},{"label":"日刊やきう速報","data":[24,29,31,31,30,27,14,18,17,27,22,21,23,29,17,15,14,24,19,25,18,19,15,19,18,18,22,18]},{"label":"もちログ","data":[25,26,27,22,17,23,20,16,15,15,16,15,14,15,15,13,13,13,12,13,11,12,14,15,11,29,44,36]},{"label":"稲妻速報","data":[26,24,24,27,26,29,32,31,26,30,26,24,27,27,31,30,26,23,25,24,23,24,24,25,21,21,23,20]},{"label":"VIPPERな俺","data":[27,25,26,32,23,34,23,29,31,31,33,30,24,21,22,35,25,22,23,28,30,32,33,31,29,34,26,32]},{"label":"おーるじゃんる","data":[28,30,35,13,1,15,17,22,18,23,27,26,28,30,30,27,19,21,24,26,24,28,23,30,30,23,28,25]},{"label":"NEWSぽけまとめーる","data":[29,31,25,28,22,26,31,34,25,29,23,28,29,28,25,33,30,28,28,30,28,31,25,26,23,25,27,30]},{"label":"はむらの毎日マンガ","data":[30,60,19,23,37,16,67,19,30,60,19,29,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJクエスト","data":[31,33,32,38,33,31,28,24,23,32,28,25,30,23,26,29,21,27,30,31,27,27,28,28,27,26,31,27]},{"label":"曽山一寿のそやまんがぶろぐ","data":[32,7,2,25,77,67,65,46,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ネギ速","data":[33,34,37,33,29,33,29,28,24,28,30,27,25,26,29,37,33,32,35,34,31,34,34,35,38,36,36,34]},{"label":"カイカイ反応通信","data":[34,32,40,39,36,37,39,45,33,39,36,32,35,33,36,38,41,39,34,38,36,39,43,41,42,32,40,37]},{"label":"おうまがタイムズ","data":[35,36,33,29,25,25,30,30,29,25,29,34,26,31,24,31,32,40,36,33,34,41,37,37,26,37,33,28]},{"label":"まとめたニュース","data":[36,54,47,51,53,49,42,39,35,33,42,52,34,24,35,44,38,37,38,43,35,48,40,38,35,38,34,33]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[37,35,34,36,35,32,37,40,39,41,43,33,39,34,33,43,35,36,49,45,32,38,32,32,47,43,46,48]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[38,40,39,42,39,54,40,36,32,40,41,39,38,41,40,50,47,34,40,35,51,44,47,39,39,39,30,29]},{"label":"IT速報","data":[39,37,44,37,31,36,35,42,37,36,39,44,40,38,50,41,39,44,50,46,37,40,48,40,41,52,45,35]},{"label":"スズぺぺの人生何とかなってます!!","data":[40,41,43,40,38,40,41,44,38,37,40,37,37,39,41,45,45,41,37,41,38,36,35,42,37,35,32,31]},{"label":"人間まおと愉快な仲間たち","data":[41,38,41,43,45,57,59,65,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カラパイア","data":[42,42,42,34,32,35,38,38,34,35,35,36,36,37,38,39,37,35,31,36,21,35,36,36,36,30,37,44]},{"label":"ガールズVIPまとめ","data":[43,49,52,61,54,47,44,37,36,38,38,41,47,42,57,59,56,47,44,51,54,37,39,47,33,49,39,46]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[44,48,50,44,41,42,46,49,46,53,54,60,44,47,42,49,36,31,32,32,29,29,30,33,31,33,35,38]},{"label":"世にも奇妙ななんかの話","data":[45,15,14,14,67,17,15,13,53,14,14,13,53,12,14,10,46,10,10,11,46,10,13,12,50,14,13,13]},{"label":"ずっと日曜日のターン","data":[46,64,55,48,49,53,66,73,62,62,68,48,61,49,46,77,80,67,76,52,47,60,69,74,54,58,58,58]},{"label":"オタク.com －オタコム－","data":[47,47,45,46,44,44,49,53,45,44,37,42,42,43,49,51,48,42,42,44,43,45,45,45,44,42,38,43]},{"label":"海外の万国反応記＠海外の反応","data":[48,46,46,54,52,43,53,66,51,45,51,46,43,48,37,53,50,45,54,48,53,53,54,62,53,45,53,50]},{"label":"【2ch】コピペ情報局","data":[49,43,54,59,58,46,57,56,50,51,53,40,41,51,54,54,43,49,51,54,50,51,41,55,46,54,59,56]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[50,45,63,75,61,41,60,59,58,52,57,82,73,40,55,60,67,84,75,71,64,59,59,87,74,59,47,52]},{"label":"De速","data":[51,62,59,66,48,50,47,41,40,46,45,38,45,46,34,36,40,48,29,39,39,26,31,34,19,28,41,41]},{"label":"あにこ便","data":[52,44,53,50,57,59,63,58,42,49,52,59,55,56,53,55,52,52,56,58,57,56,51,54,49,53,54,53]},{"label":"くまおのマンガ堂","data":[53,56,58,57,50,58,64,67,75,69,80,76,78,75,73,91,75,79,74,73,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[54,53,62,60,47,61,43,54,73,66,55,55,56,58,39,52,61,43,48,59,41,49,56,72,57,40,60,60]},{"label":"カオスちゃんねる","data":[55,51,51,53,63,45,61,64,44,43,48,57,49,44,45,48,42,51,52,49,49,52,44,48,51,48,55,51]},{"label":"ポリー速報","data":[56,55,49,49,65,55,34,43,47,42,49,43,48,55,51,56,51,54,58,62,44,47,53,52,61,56,57,64]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[57,101,56,101,43,48,101,47,41,101,46,47,101,101,44,42,101,33,62,37,100,42,98,53,40,101,43,45]},{"label":"マンガと私と猫ブログ。","data":[58,50,48,41,46,65,52,57,101,101,60,53,101,50,63,101,53,62,101,42,48,101,46,56,101,41,62,40]},{"label":"ふくよかまるみのピリカラ人生","data":[59,101,36,56,34,51,101,33,43,95,32,50,101,101,101,20,68,101,101,101,101,101,101,101,101,101,101,101]},{"label":"芸能人の気になる噂","data":[60,57,57,55,42,39,50,55,49,48,47,49,51,53,52,47,44,46,46,47,40,43,42,43,48,50,48,47]},{"label":"流速VIP","data":[61,65,66,70,64,62,73,77,70,54,59,70,52,59,62,64,58,55,55,53,59,64,58,61,58,65,63,63]},{"label":"PS5速報！","data":[62,59,60,52,51,52,56,51,52,50,50,51,46,54,56,57,55,57,53,55,55,54,60,71,66,60,56,57]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[63,70,72,64,56,63,45,62,63,56,63,66,64,60,60,67,72,58,65,67,65,63,65,67,60,63,61,59]},{"label":"働く大人の非常識","data":[64,88,88,80,60,66,90,76,74,94,88,63,54,67,101,61,77,73,67,61,56,67,101,69,76,71,69,65]},{"label":"ついんてーる速報","data":[65,61,65,58,55,60,54,60,56,58,56,54,50,45,48,46,49,50,45,50,52,55,52,49,45,46,52,54]},{"label":"ツイッター速報","data":[66,39,30,62,101,101,11,21,77,101,101,101,101,101,101,101,101,101,101,101,79,97,101,9,43,100,93,101]},{"label":"投資ちゃんねる","data":[67,67,70,76,71,68,82,72,71,80,77,69,75,76,68,73,73,59,78,65,68,61,67,82,68,69,68,70]},{"label":"ライフハックちゃんねる弐式","data":[68,66,79,67,76,73,87,79,67,84,67,67,63,66,61,86,82,90,83,69,67,65,70,80,65,64,64,83]},{"label":"なんJ（まとめては）いかんのか？","data":[69,97,90,84,62,70,51,52,61,64,64,58,57,63,43,34,34,78,57,57,33,33,49,44,56,47,49,49]},{"label":"馬鳥速報","data":[70,72,100,85,68,84,70,94,76,47,66,78,88,91,76,101,59,64,63,66,97,92,101,101,91,101,77,72]},{"label":"2chコピペ保存道場","data":[71,69,74,69,74,69,72,70,78,67,76,77,67,73,72,81,79,69,79,76,69,69,78,92,85,74,76,74]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[72,77,89,83,85,86,89,88,94,87,81,85,86,90,88,75,83,80,88,91,75,88,97,101,100,101,94,95]},{"label":"ぱんをたずねて2000里ちょい","data":[73,74,75,63,59,71,58,63,65,65,70,75,82,69,65,58,60,60,71,79,96,58,55,59,52,57,51,42]},{"label":"コノユビニュース","data":[74,101,101,45,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[75,73,67,96,92,79,68,50,57,73,58,56,60,65,67,101,101,101,101,56,61,70,64,58,59,96,75,71]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[76,63,73,86,89,88,88,87,81,78,73,45,77,57,71,62,63,75,47,70,45,71,63,65,62,75,80,85]},{"label":"あんころの漫画日和","data":[77,78,101,79,70,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[78,75,76,77,86,72,86,90,64,59,61,81,70,61,58,66,62,68,85,83,78,82,88,100,69,67,84,92]},{"label":"うみこのおとぼけぐらし","data":[79,84,68,82,69,77,69,96,87,77,72,72,66,74,75,96,65,65,68,75,73,101,91,86,71,66,67,67]},{"label":"やみ速@なんJ西武まとめ","data":[80,80,86,74,82,91,98,101,101,101,101,101,101,89,69,68,94,101,70,72,66,74,68,83,79,98,89,87]},{"label":"はーとログ","data":[81,79,78,88,73,78,79,84,79,74,84,68,74,77,83,78,84,83,95,85,76,72,71,64,78,81,87,66]},{"label":"MLB NEWS@まとめ","data":[82,96,97,89,98,98,55,69,60,68,79,65,83,83,79,100,88,101,92,95,86,89,85,70,72,72,83,81]},{"label":"軍事・ミリタリー速報☆彡","data":[83,76,81,81,79,80,78,78,72,76,75,74,62,72,80,82,69,63,69,74,70,68,79,76,77,73,74,76]},{"label":"まとめブレイド","data":[84,83,101,101,101,101,76,68,86,101,95,101,101,82,70,70,97,101,82,101,101,95,80,81,101,97,99,88]},{"label":"最強ジャンプ放送局","data":[85,91,92,71,83,87,85,85,89,90,71,86,87,80,94,90,86,74,96,88,89,84,95,94,67,91,88,84]},{"label":"ろぼ速VIP","data":[86,82,82,92,100,93,71,83,83,72,90,88,71,68,82,97,74,85,80,86,93,87,87,88,84,87,81,80]},{"label":"登山ちゃんねる","data":[87,81,69,73,84,83,94,86,84,61,74,83,97,81,81,87,76,70,84,63,95,81,81,77,70,84,72,75]},{"label":"まとめロッテ！","data":[88,101,101,101,101,97,101,101,90,70,85,101,101,97,96,99,71,87,94,100,94,101,101,73,64,68,95,68]},{"label":"鈴木さん速報","data":[89,90,98,99,93,89,75,81,80,81,82,90,76,78,92,93,101,86,101,89,85,78,96,101,87,83,78,86]},{"label":"サカラボ | サッカーまとめ速報","data":[90,86,77,94,94,95,93,75,85,75,92,71,85,86,87,74,91,76,89,82,80,101,94,90,81,85,85,91]},{"label":"絵日記でございます。","data":[91,68,80,87,101,90,74,80,82,100,100,94,93,99,90,79,100,91,61,84,71,80,76,93,83,90,97,97]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[92,85,83,93,90,82,95,82,54,98,83,100,69,87,78,94,92,92,60,81,99,101,100,95,101,86,66,62]},{"label":"デジタルニューススレッド","data":[93,92,91,100,96,96,99,93,96,92,89,87,84,79,89,88,90,81,87,87,88,85,93,101,88,79,82,90]},{"label":"ダイエット速報＠2ちゃんねる","data":[94,101,64,78,101,81,81,91,91,85,87,84,79,98,98,84,57,77,86,60,84,94,50,85,63,82,73,79]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[95,71,101,101,101,101,101,95,59,55,62,80,98,88,101,83,101,96,100,101,77,101,101,98,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[96,89,95,95,99,99,100,89,92,83,98,89,89,85,91,92,93,93,97,101,98,99,101,99,86,101,96,100]},{"label":"まとめ太郎！","data":[97,101,93,101,97,101,91,92,93,101,93,95,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101]},{"label":"お料理速報","data":[98,98,84,101,101,85,101,101,101,82,86,101,96,101,99,101,85,101,101,97,101,101,101,96,89,88,90,77]},{"label":"鷹速@ホークスまとめブログ","data":[99,94,101,91,101,101,96,99,101,97,101,91,99,84,86,76,81,72,101,101,82,101,99,101,101,95,92,82]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,13,101,68,95,101,62,101,101,101,101,101,59,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101]},{"label":"ニュースBUZZ","data":[101,58,61,97,78,56,48,61,48,63,65,61,58,62,93,80,66,71,59,77,101,57,66,66,101,70,65,69]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[101,87,71,65,80,101,101,74,68,88,101,101,80,71,77,63,78,61,66,98,62,62,57,63,95,80,70,73]},{"label":"おる速","data":[101,93,87,72,72,74,77,71,66,57,78,62,72,64,64,72,70,56,64,80,81,77,73,79,75,77,79,78]},{"label":"ニュース30over","data":[101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,99,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101]},{"label":"大艦巨砲主義！","data":[101,100,101,98,101,100,101,101,98,96,94,98,94,92,97,101,96,95,101,96,90,93,101,101,101,101,101,101]},{"label":"魔界のニュース","data":[101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,19,29,82,101,101,101,101,83,57,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,96,90,101,101,101,101,101,91,96,101,101,93,95,98,95,98,101,99,101,101,101,101,98,101,101,101]},{"label":"気になる芸能まとめ","data":[101,101,99,101,101,101,101,101,97,86,101,99,95,100,101,101,98,101,101,101,83,83,74,78,94,101,101,101]},{"label":"うちのとらまる","data":[101,101,101,47,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,75,101,101,101,101,101,101,101,65,101,101,101,101,53,101,78,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,101,87,101,92,101,101,71,99,101,100,101,101,101,101,89,99,92,101,101,101,101,101,101,101,89]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,92,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,4,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,75,84,100,101,101,101,96,91,70,74,101,101,101,72,68,74,75,101,101,90,78,86,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,92,101,97,101,79,91,97,81,101,101,71,101,101,98,93,92,100,84,101,101,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,51,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,33,64,101,101,101,101,101,94,101,101]},{"label":"証券非行被害者救済ボランティアのブログ","data":[101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"柴犬どんぐり三毛猫たんぽぽ","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,88,93,101,101,101,95,101,101,101,101,101,101,101,101,101,101,97,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,97,77,101,101,73,92,101,96,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,99,101,101,92,101,101,101,101,101,101,101,101,101,90,84,82,101,91,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,101,101,69,101,68,101,101,101,101,101,101,101,101,76,101,101,80,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,97,101,101,96,101,101,101,100,101,101,101,101,101,101,101,101,101,101]},{"label":"ながの通信 - 長野県長野市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,64,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,66,61,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,17,32,59,69,18,30,41,15,60,15,27,21,32,61,15,26]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,94,84,85,87,99,101,101,101,86,86,101,93,101,101,96]},{"label":"らばQ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,40,54,101,101,101,91,101,101,101,101,101,98,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,95,99,88,101,101,101,101,89,97,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101,101,93,94,101,79,75,75,73,93,100,94]},{"label":"みぃ子のブログ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"も～さんの隙あらば自分語り","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101]},{"label":"健康主婦のゆるり日和(旧・天使な小悪魔たち)","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,90,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,90,101,101,101,46,99,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,50,62,60,55,55,50,55]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,98,72,101,101,76,101,99]},{"label":"パラノーマルちゃんねる | 2ch怖い話まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,82,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,77,89,101,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,51,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,71,98]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93]}];
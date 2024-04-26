var labels = ['2024-03-30','2024-03-31','2024-04-01','2024-04-02','2024-04-03','2024-04-04','2024-04-05','2024-04-06','2024-04-07','2024-04-08','2024-04-09','2024-04-10','2024-04-11','2024-04-12','2024-04-13','2024-04-14','2024-04-15','2024-04-16','2024-04-17','2024-04-18','2024-04-19','2024-04-20','2024-04-21','2024-04-22','2024-04-23','2024-04-24','2024-04-25','2024-04-26',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,3,1,1,1,8,4,1,1,2,4,2,1,2,3,2,1,1,1,1,2,2,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,2,1,1,2,2,1,1,3,2,3,1,1,2,2,2,2,1,1,2,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,3,3,4,4,5,5,5,3,2,3,4,4,4,2,4,3,1,2,4,4,4,4,3,3,5,4,3]},{"label":"はちま起稿","data":[4,4,4,3,3,2,3,3,4,3,2,3,3,3,3,5,4,4,4,3,3,3,3,4,4,3,3,4]},{"label":"ハムスター速報","data":[5,5,5,5,5,4,4,4,7,6,6,6,5,5,5,6,8,5,6,5,6,7,6,7,6,7,5,5]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,6,6,7,7,7,7,6,5,4,5,5,6,6,6,8,7,6,5,6,5,5,7,5,7,6,6,7]},{"label":"痛いニュース(ﾉ∀`)","data":[7,8,8,8,6,9,9,8,8,7,7,7,7,7,8,9,6,7,7,7,7,6,8,6,5,4,7,6]},{"label":"暇つぶしニュース","data":[8,7,7,6,8,6,6,7,6,5,8,8,8,9,7,7,5,8,9,8,9,8,5,8,9,8,10,9]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,9,10,9,9,8,8,9,9,10,9,9,9,8,9,11,12,9,8,9,8,9,11,10,8,11,9,10]},{"label":"ヤゴヴのマンガ劇場","data":[10,21,31,25,21,19,14,13,11,11,10,10,10,11,12,14,13,12,10,12,13,11,9,9,10,9,8,8]},{"label":"BIPブログ","data":[11,12,11,11,11,12,12,11,10,13,12,11,11,10,11,15,11,13,12,13,14,12,13,15,13,13,11,12]},{"label":"なんJ PRIDE","data":[12,11,9,12,15,14,10,14,12,14,13,12,12,12,10,12,10,11,13,14,11,13,12,13,14,12,12,13]},{"label":"哲学ニュースnwk","data":[13,14,15,14,13,10,13,18,18,18,14,16,18,15,15,18,19,15,11,10,10,15,10,12,16,14,14,15]},{"label":"世にも奇妙ななんかの話","data":[14,10,46,10,10,11,46,10,13,12,50,14,13,13,52,10,9,10,37,11,12,10,48,11,11,10,41,11]},{"label":"もちログ","data":[15,13,13,13,12,13,11,12,14,15,11,29,44,36,38,37,31,28,30,24,25,29,30,34,28,30,33,33]},{"label":"わんこーる速報！","data":[16,18,17,17,14,16,15,17,17,17,15,15,14,14,13,16,16,14,14,16,15,14,14,17,17,17,13,14]},{"label":"日刊やきう速報","data":[17,15,14,24,19,25,18,19,15,19,18,18,22,18,16,13,17,19,19,22,21,19,15,20,23,23,17,22]},{"label":"【2ch】ニュー速クオリティ","data":[18,17,16,16,18,17,16,16,16,16,16,17,16,16,17,19,21,16,16,17,17,16,16,18,19,18,16,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[19,23,23,18,16,20,19,20,21,23,20,19,19,17,19,21,22,17,15,18,18,23,19,21,20,20,21,23]},{"label":"ねいろ速報さん","data":[20,24,20,19,22,23,20,22,20,20,17,20,21,21,23,22,20,18,18,21,22,18,17,19,18,19,19,20]},{"label":"ラビット速報","data":[21,22,22,20,20,21,22,23,22,22,22,22,20,23,20,20,18,20,21,19,20,21,18,22,21,21,20,21]},{"label":"VIPPERな俺","data":[22,35,25,22,23,28,30,32,33,31,29,34,26,32,28,27,33,24,20,23,23,25,29,31,22,27,28,25]},{"label":"ぶる速-VIP","data":[23,16,12,15,17,18,17,21,19,24,24,13,17,19,18,25,27,27,17,15,16,20,21,14,15,16,15,17]},{"label":"おうまがタイムズ","data":[24,31,32,40,36,33,34,41,37,37,26,37,33,28,26,32,34,31,59,41,24,28,33,41,39,34,29,31]},{"label":"NEWSぽけまとめーる","data":[25,33,30,28,28,30,28,31,25,26,23,25,27,30,29,33,28,29,25,28,29,22,27,28,36,24,23,28]},{"label":"なんJクエスト","data":[26,29,21,27,30,31,27,27,28,28,27,26,31,27,27,31,32,26,26,30,32,30,26,26,33,29,27,32]},{"label":"うしみつ-5chまとめ-","data":[27,28,24,29,27,29,26,25,26,27,25,24,24,22,22,23,23,23,23,25,28,24,23,23,25,28,24,26]},{"label":"ゴールデンタイムズ","data":[28,32,28,26,26,27,25,30,29,29,28,27,29,24,24,28,29,25,27,27,31,26,25,25,24,25,25,27]},{"label":"ネギ速","data":[29,37,33,32,35,34,31,34,34,35,38,36,36,34,34,39,45,40,29,32,34,36,32,29,34,37,42,34]},{"label":"おーるじゃんる","data":[30,27,19,21,24,26,24,28,23,30,30,23,28,25,21,24,24,21,22,20,19,17,31,30,29,32,31,29]},{"label":"稲妻速報","data":[31,30,26,23,25,24,23,24,24,25,21,21,23,20,25,26,26,22,24,26,26,27,24,27,27,26,26,30]},{"label":"乃木坂46まとめ 1/46","data":[32,26,27,38,39,40,42,46,38,50,34,31,42,39,33,44,44,37,43,48,46,39,22,32,12,33,34,42]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[33,43,35,36,49,45,32,38,32,32,47,43,46,48,44,56,40,50,33,44,37,35,42,39,37,35,51,40]},{"label":"De速","data":[34,36,40,48,29,39,39,26,31,34,19,28,41,41,31,41,25,33,31,36,35,50,56,37,42,51,54,47]},{"label":"まとめたニュース","data":[35,44,38,37,38,43,35,48,40,38,35,38,34,33,40,38,55,43,45,34,27,34,49,51,47,46,53,60]},{"label":"カイカイ反応通信","data":[36,38,41,39,34,38,36,39,43,41,42,32,40,37,42,42,39,34,32,35,36,32,37,40,43,39,37,37]},{"label":"海外の万国反応記＠海外の反応","data":[37,53,50,45,54,48,53,53,54,62,53,45,53,50,48,61,52,52,49,52,51,52,44,60,54,52,50,51]},{"label":"カラパイア","data":[38,39,37,35,31,36,21,35,36,36,36,30,37,44,41,40,37,36,35,39,38,33,36,36,35,31,30,36]},{"label":"パチンコ・パチスロ.com","data":[39,52,61,43,48,59,41,49,56,72,57,40,60,60,63,74,78,61,47,60,58,61,70,63,59,53,40,49]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[40,50,47,34,40,35,51,44,47,39,39,39,30,29,39,54,57,46,40,37,44,54,47,42,48,36,35,35]},{"label":"スズぺぺの人生何とかなってます!!","data":[41,45,45,41,37,41,38,36,35,42,37,35,32,31,30,34,35,32,50,66,78,80,90,93,87,91,90,88]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[42,49,36,31,32,32,29,29,30,33,31,33,35,38,35,35,36,30,28,31,33,31,28,24,26,22,18,19]},{"label":"なんJ（まとめては）いかんのか？","data":[43,34,34,78,57,57,33,33,49,44,56,47,49,49,32,36,42,68,56,47,60,60,41,35,56,45,46,50]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[44,42,101,33,62,37,100,42,98,53,40,101,43,45,98,47,88,35,80,33,84,42,99,101,41,84,36,90]},{"label":"カオスちゃんねる","data":[45,48,42,51,52,49,49,52,44,48,51,48,55,51,45,52,56,45,48,54,49,46,50,48,40,41,45,43]},{"label":"ずっと日曜日のターン","data":[46,77,80,67,76,52,47,60,69,74,54,58,58,58,68,59,69,58,41,64,83,68,65,69,80,57,88,56]},{"label":"あいチャンネル","data":[47,25,64,101,43,22,58,101,101,101,101,44,25,61,85,99,101,49,81,29,65,43,85,33,31,69,32,71]},{"label":"ついんてーる速報","data":[48,46,49,50,45,50,52,55,52,49,45,46,52,54,54,51,58,51,44,53,47,55,52,45,52,59,57,55]},{"label":"オタク.com －オタコム－","data":[49,51,48,42,42,44,43,45,45,45,44,42,38,43,43,49,43,42,38,43,43,47,40,46,44,40,47,48]},{"label":"IT速報","data":[50,41,39,44,50,46,37,40,48,40,41,52,45,35,36,45,41,38,39,45,42,48,43,38,32,38,39,41]},{"label":"ポリー速報","data":[51,56,51,54,58,62,44,47,53,52,61,56,57,64,47,55,54,48,57,55,52,58,53,52,57,60,56,68]},{"label":"芸能人の気になる噂","data":[52,47,44,46,46,47,40,43,42,43,48,50,48,47,49,50,49,44,36,38,41,41,38,43,38,42,44,45]},{"label":"あにこ便","data":[53,55,52,52,56,58,57,56,51,54,49,53,54,53,50,57,50,54,54,56,54,56,58,54,53,56,59,57]},{"label":"【2ch】コピペ情報局","data":[54,54,43,49,51,54,50,51,41,55,46,54,59,56,53,53,64,47,46,49,45,51,54,56,45,49,49,53]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[55,60,67,84,75,71,64,59,59,87,74,59,47,52,55,60,51,59,53,59,61,49,39,49,61,63,61,62]},{"label":"PS5速報！","data":[56,57,55,57,53,55,55,54,60,71,66,60,56,57,56,68,62,57,60,57,57,57,59,61,58,55,55,59]},{"label":"ガールズVIPまとめ","data":[57,59,56,47,44,51,54,37,39,47,33,49,39,46,37,43,47,41,42,51,50,45,45,55,50,47,48,38]},{"label":"ジャンプ速報","data":[58,66,62,68,85,83,78,82,88,100,69,67,84,92,78,79,73,69,75,91,69,93,83,71,68,67,92,74]},{"label":"はむらの毎日マンガ","data":[59,69,18,30,41,15,60,15,27,21,32,61,15,26,58,29,15,63,72,74,30,40,20,16,55,15,22,52]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[60,67,72,58,65,67,65,63,65,67,60,63,61,59,59,69,61,60,61,62,39,38,57,64,64,62,64,61]},{"label":"ライフハックちゃんねる弐式","data":[61,86,82,90,83,69,67,65,70,80,65,64,64,83,76,86,90,89,71,67,67,69,75,76,70,74,80,67]},{"label":"流速VIP","data":[62,64,58,55,55,53,59,64,58,61,58,65,63,63,62,65,59,65,55,63,56,62,60,59,62,61,60,58]},{"label":"マンガと私と猫ブログ。","data":[63,101,53,62,101,42,48,101,46,56,101,41,62,40,61,101,38,64,101,40,53,37,34,101,30,44,101,18]},{"label":"おる速","data":[64,72,70,56,64,80,81,77,73,79,75,77,79,78,83,97,101,101,96,86,92,101,95,95,101,101,101,101]},{"label":"ぱんをたずねて2000里ちょい","data":[65,58,60,60,71,79,96,58,55,59,52,57,51,42,46,46,46,53,34,42,40,44,51,50,49,43,38,39]},{"label":"らばQ","data":[66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[67,101,101,101,101,56,61,70,64,58,59,96,75,71,64,48,53,66,68,76,94,67,35,58,82,79,77,54]},{"label":"投資ちゃんねる","data":[68,73,73,59,78,65,68,61,67,82,68,69,68,70,70,78,66,77,78,82,76,77,67,70,73,71,73,69]},{"label":"やみ速@なんJ西武まとめ","data":[69,68,94,101,70,72,66,74,68,83,79,98,89,87,75,84,77,85,100,101,101,89,72,101,101,66,69,91]},{"label":"まとめブレイド","data":[70,70,97,101,82,101,101,95,80,81,101,97,99,88,101,101,84,101,101,72,101,101,101,101,101,75,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[71,62,63,75,47,70,45,71,63,65,62,75,80,85,73,71,70,91,90,87,81,82,69,57,72,64,78,92]},{"label":"2chコピペ保存道場","data":[72,81,79,69,79,76,69,69,78,92,85,74,76,74,71,76,82,83,76,83,63,66,73,73,78,72,68,79]},{"label":"くまおのマンガ堂","data":[73,91,75,79,74,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[74,101,101,101,72,68,74,75,101,101,90,78,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[75,96,65,65,68,75,73,101,91,86,71,66,67,67,57,63,63,67,52,46,59,59,63,68,67,54,58,72]},{"label":"馬鳥速報","data":[76,101,59,64,63,66,97,92,101,101,91,101,77,72,96,64,48,39,64,73,68,64,74,80,66,77,62,46]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[77,63,78,61,66,98,62,62,57,63,95,80,70,73,66,77,87,100,89,71,64,92,61,65,101,101,65,84]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[78,94,92,92,60,81,99,101,100,95,101,86,66,62,94,96,81,99,101,101,99,72,86,83,46,48,52,66]},{"label":"MLB NEWS@まとめ","data":[79,100,88,101,92,95,86,89,85,70,72,72,83,81,65,72,71,70,66,101,90,94,101,84,77,81,84,70]},{"label":"軍事・ミリタリー速報☆彡","data":[80,82,69,63,69,74,70,68,79,76,77,73,74,76,67,75,75,76,65,70,71,65,68,67,75,65,72,76]},{"label":"登山ちゃんねる","data":[81,87,76,70,84,63,95,81,81,77,70,84,72,75,84,87,91,88,70,85,82,85,71,82,69,70,71,95]},{"label":"ろぼ速VIP","data":[82,97,74,85,80,86,93,87,87,88,84,87,81,80,81,88,83,74,87,92,70,78,79,74,85,80,83,78]},{"label":"はーとログ","data":[83,78,84,83,95,85,76,72,71,64,78,81,87,66,69,70,79,72,67,68,62,73,80,72,86,73,86,75]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[84,85,87,99,101,101,101,86,86,101,93,101,101,96,72,101,99,101,97,88,101,79,66,96,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[85,40,54,101,101,101,91,101,101,101,101,101,98,101,87,62,65,95,92,58,55,63,46,53,101,101,67,65]},{"label":"鷹速@ホークスまとめブログ","data":[86,76,81,72,101,101,82,101,99,101,101,95,92,82,74,66,96,80,101,101,101,96,94,94,96,93,89,101]},{"label":"サカラボ | サッカーまとめ速報","data":[87,74,91,76,89,82,80,101,94,90,81,85,85,91,86,101,97,101,88,81,88,100,78,88,90,96,93,83]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[88,75,83,80,88,91,75,88,97,101,100,101,94,95,97,100,100,93,98,101,101,101,101,98,101,94,101,101]},{"label":"デジタルニューススレッド","data":[89,88,90,81,87,87,88,85,93,101,88,79,82,90,80,81,85,73,85,94,79,74,76,79,88,88,91,89]},{"label":"絵日記でございます。","data":[90,79,100,91,61,84,71,80,76,93,83,90,97,97,91,73,76,78,82,84,93,70,77,75,101,99,74,63]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[91,92,93,93,97,101,98,99,101,99,86,101,96,100,95,93,89,90,99,98,87,99,88,92,101,95,100,94]},{"label":"鈴木さん速報","data":[92,93,101,86,101,89,85,78,96,101,87,83,78,86,90,83,101,86,84,93,80,97,84,78,83,78,79,77]},{"label":"ニュースBUZZ","data":[93,80,66,71,59,77,101,57,66,66,101,70,65,69,79,91,67,56,77,69,101,81,62,44,63,97,70,100]},{"label":"最強ジャンプ放送局","data":[94,90,86,74,96,88,89,84,95,94,67,91,88,84,82,92,86,79,95,96,86,95,87,90,74,83,85,80]},{"label":"イミフｗｗｗ","data":[95,98,95,98,101,99,101,101,101,101,98,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[96,99,71,87,94,100,94,101,101,73,64,68,95,68,92,101,74,81,94,101,95,71,82,87,93,85,94,86]},{"label":"大艦巨砲主義！","data":[97,101,96,95,101,96,90,93,101,101,101,101,101,101,101,94,93,94,101,101,96,86,101,97,95,101,101,98]},{"label":"ダイエット速報＠2ちゃんねる","data":[98,84,57,77,86,60,84,94,50,85,63,82,73,79,77,82,98,82,83,79,73,90,64,66,89,92,99,73]},{"label":"お料理速報","data":[99,101,85,101,101,97,101,101,101,96,89,88,90,77,89,90,101,101,86,100,97,84,96,81,79,89,95,101]},{"label":"竜速（りゅうそく）","data":[100,95,99,88,101,101,101,101,89,97,101,101,101,101,100,85,101,101,101,101,101,101,97,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,19,29,82,101,101,101,101,83,57,101,101,101,101,101,17,14,87,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,20,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"働く大人の非常識","data":[101,61,77,73,67,61,56,67,101,69,76,71,69,65,60,67,72,75,63,61,72,91,89,62,60,76,66,82]},{"label":"ベイスターズ速報＠なんJ","data":[101,65,101,101,93,94,101,79,75,75,73,93,100,94,101,101,95,97,73,90,85,101,98,86,94,68,87,101]},{"label":"資格ちゃんねる","data":[101,71,101,101,98,93,92,100,84,101,101,101,101,101,99,89,101,101,101,101,101,88,101,101,84,87,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,83,101,96,100,101,77,101,101,98,101,101,101,101,88,98,94,92,101,101,101,101,101,101,101,101,76,93]},{"label":"みぃ子のブログ。","data":[101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,101,89,101,101,101,101,101,101,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"気になる芸能まとめ","data":[101,101,98,101,101,101,83,83,74,78,94,101,101,101,101,101,101,96,101,101,91,101,101,100,92,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,53,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,64]},{"label":"も～さんの隙あらば自分語り","data":[101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,89,99,92,101,101,101,101,101,101,101,89,101,80,68,62,69,95,77,83,81,101,65,82,81,87]},{"label":"健康主婦のゆるり日和(旧・天使な小悪魔たち)","data":[101,101,101,94,90,101,101,101,101,101,101,101,101,101,101,101,101,101,58,101,75,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,97,77,101,101,73,92,101,96,101,101,101,101,101,101,101,91,101,100,87,101,101,91,101,101,101]},{"label":"えび通","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,96,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,33,64,101,101,101,101,101,94,101,101,101,101,101,101,101,97,98,101,101,101,97,58,63,24]},{"label":"つんの日常ブログ","data":[101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,81,101,101,101,101,101,101,92,101,101,101,101,101,101,62,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,91,90,101,101,101,46,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,63,50,62,60,55,55,50,55,51,58,60,55,51,50,66,53,55,47,51,50,43,44]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,72,101,101,101,101,101,101,101,93,101,101,101,101,77,101,101,101,101,101,101,82,101]},{"label":"ツイッター速報","data":[101,101,101,101,101,101,79,97,101,9,43,100,93,101,14,1,30,71,74,89,48,101,91,101,101,101,101,81]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,87,98,72,101,101,76,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,66,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,76,101,101,80,101,101,101,101,101,101,84,101,80,101,75,101,101,81,101,75,101]},{"label":"パラノーマルちゃんねる | 2ch怖い話まとめ","data":[101,101,101,101,101,101,101,90,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,91,77,89,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,90,84,82,101,91,101,101,101,101,98,93,101,101,76,101,101,100,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,68,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,92,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,62,71,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,92,101,101,101,101,101,101,99,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,75,74,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"F1通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,30,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,65,101,101,101,101,98,90,101,99]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"闇落ち女子トーク","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,77,101,101,101,96]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,76,86,97,85]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,98,101,101]},{"label":"キチジローの花のおブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,71,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,98,101]}];
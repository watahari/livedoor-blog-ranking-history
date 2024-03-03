var labels = ['2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09','2024-02-10','2024-02-11','2024-02-12','2024-02-13','2024-02-14','2024-02-15','2024-02-16','2024-02-17','2024-02-18','2024-02-19','2024-02-20','2024-02-21','2024-02-22','2024-02-23','2024-02-24','2024-02-25','2024-02-26','2024-02-27','2024-02-28','2024-02-29','2024-03-01','2024-03-02','2024-03-03',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,2,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,1,1,3,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,1,1,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,2,2,2]},{"label":"はちま起稿","data":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,3,4,4]},{"label":"ハムスター速報","data":[4,4,4,5,5,5,5,5,7,5,4,4,4,6,6,4,4,5,5,4,6,6,5,4,4,5,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,5,5,4,4,4,4,4,4,4,5,6,6,4,4,5,5,4,4,5,5,4,4,5,5,8,9,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,6,8,8,7,6,6,6,6,6,6,5,5,5,5,6,6,6,6,6,7,5,8,8,6,4,5,6]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[7,8,7,7,8,8,7,8,9,7,7,7,8,8,7,7,7,7,7,8,8,9,6,6,8,7,6,8]},{"label":"痛いニュース(ﾉ∀`)","data":[8,7,6,6,6,7,8,7,5,8,8,9,7,9,9,8,9,8,8,9,9,8,7,7,9,6,7,7]},{"label":"暇つぶしニュース","data":[9,9,9,9,9,9,9,9,8,9,9,8,9,7,8,9,8,9,9,7,4,7,9,9,7,9,8,9]},{"label":"【2ch】ニュー速クオリティ","data":[10,11,10,10,11,11,11,14,16,12,11,13,13,11,11,12,13,13,14,17,18,17,14,16,16,16,15,17]},{"label":"わんこーる速報！","data":[11,14,11,13,14,13,15,16,18,16,16,17,15,16,12,14,15,16,16,16,13,14,15,15,15,15,17,16]},{"label":"哲学ニュースnwk","data":[12,12,12,11,10,10,10,10,10,10,10,12,10,13,13,16,10,12,10,11,15,13,13,13,14,12,10,10]},{"label":"なんJ PRIDE","data":[13,13,15,16,13,12,13,11,11,11,13,14,14,15,15,15,14,15,15,14,14,15,16,14,13,13,12,15]},{"label":"ヤゴヴのマンガ劇場","data":[14,35,27,24,19,14,14,12,13,14,12,11,11,12,10,10,11,11,12,10,11,12,11,11,11,11,11,11]},{"label":"もちログ","data":[15,10,14,12,12,18,16,13,14,15,14,15,12,14,14,11,12,10,11,12,10,11,10,10,10,10,13,14]},{"label":"世にも奇妙ななんかの話","data":[16,16,87,19,20,25,101,23,26,24,101,27,22,19,94,20,18,63,101,101,101,55,53,56,101,59,51,42]},{"label":"ねいろ速報さん","data":[17,15,16,18,17,16,17,15,12,17,17,19,17,17,16,13,16,17,17,15,17,18,17,18,18,19,20,19]},{"label":"ぶる速-VIP","data":[18,18,13,14,15,15,19,18,17,18,18,18,19,24,17,17,19,21,19,20,29,16,21,24,17,24,27,20]},{"label":"ラビット速報","data":[19,19,18,20,16,20,22,20,24,22,19,21,18,22,19,23,23,22,21,21,24,20,24,26,22,21,23,18]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[20,20,17,15,18,17,18,17,15,13,15,16,16,20,18,22,20,18,18,19,21,19,19,17,19,18,19,23]},{"label":"おーるじゃんる","data":[21,17,22,23,22,24,12,21,21,29,28,10,24,31,32,31,24,24,22,18,22,25,23,25,23,17,18,26]},{"label":"ネギ速","data":[22,21,29,35,38,32,31,33,34,35,26,29,31,35,26,27,37,35,34,35,44,32,32,33,29,31,36,37]},{"label":"なんJクエスト","data":[23,23,23,21,21,26,26,27,22,23,27,25,29,27,29,30,33,25,29,28,33,30,27,29,28,30,33,29]},{"label":"VIPPERな俺","data":[24,27,21,17,24,19,25,26,27,20,25,26,27,30,21,25,28,23,24,24,25,26,26,27,30,28,22,25]},{"label":"ツイッター速報","data":[25,65,101,101,101,101,101,101,101,78,57,101,62,85,46,51,80,66,101,101,54,101,58,54,101,101,101,24]},{"label":"カラパイア","data":[26,30,28,31,29,31,29,30,30,36,31,32,32,34,35,35,27,29,32,30,30,27,18,30,36,35,39,35]},{"label":"稲妻速報","data":[27,22,20,22,25,21,21,25,23,21,20,23,23,23,20,24,21,20,20,22,19,21,22,20,20,22,24,21]},{"label":"うしみつ-5chまとめ-","data":[28,26,24,25,27,28,24,22,25,25,30,31,25,28,30,29,30,26,28,29,32,28,30,31,25,23,31,30]},{"label":"BIPブログ","data":[29,28,32,32,31,29,27,29,20,30,24,22,20,21,22,19,17,14,13,13,12,10,12,12,12,14,14,13]},{"label":"日刊やきう速報","data":[30,34,31,27,32,35,33,32,32,33,33,34,34,32,33,32,34,36,31,27,28,31,33,34,26,26,26,28]},{"label":"ゴールデンタイムズ","data":[31,25,25,26,23,27,28,19,19,26,21,20,26,29,23,26,29,28,27,23,26,23,25,28,27,27,29,27]},{"label":"マンガと私と猫ブログ。","data":[32,29,42,34,34,49,101,101,101,101,101,84,86,101,65,101,101,101,101,101,101,81,101,101,101,101,101,101]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[33,45,35,41,35,42,45,48,53,41,39,48,48,46,43,43,42,42,36,37,42,47,40,40,41,36,37,38]},{"label":"NEWSぽけまとめーる","data":[34,32,26,30,33,23,20,28,29,27,22,24,28,26,27,28,26,30,26,26,27,22,20,21,21,20,25,22]},{"label":"乃木坂46まとめ 1/46","data":[35,47,55,40,30,34,32,39,31,39,32,39,33,36,24,18,31,34,30,31,35,39,35,22,33,29,34,41]},{"label":"まとめたニュース","data":[36,41,40,44,37,47,39,38,45,42,34,36,44,55,45,33,39,37,37,42,40,37,49,43,39,33,38,43]},{"label":"おうまがタイムズ","data":[37,31,30,28,28,30,30,24,33,34,23,30,30,33,28,34,38,27,25,25,31,29,31,32,24,25,28,33]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[38,33,33,39,45,41,41,31,35,37,36,37,37,37,41,39,44,38,43,32,41,40,34,37,31,34,30,32]},{"label":"IT速報","data":[39,38,41,43,42,36,35,35,38,40,37,40,39,44,42,50,36,31,33,34,34,36,39,38,37,37,41,47]},{"label":"カイカイ反応通信","data":[40,37,38,29,36,33,36,34,39,45,35,35,35,40,36,37,32,32,35,39,43,35,37,36,32,32,32,34]},{"label":"オタク.com －オタコム－","data":[41,39,37,36,43,37,44,46,40,44,38,45,43,39,39,46,45,44,39,45,45,41,46,42,43,45,55,44]},{"label":"ガールズVIPまとめ","data":[42,43,47,47,50,56,47,40,37,56,47,46,51,57,44,53,57,49,51,40,49,43,42,41,46,47,43,48]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[43,63,75,60,57,39,37,43,43,28,49,58,40,48,54,52,66,69,82,61,65,63,60,58,56,55,50,31]},{"label":"ニュースBUZZ","data":[44,59,34,67,69,59,62,54,49,54,60,101,80,43,52,64,55,41,58,95,71,53,56,60,59,92,58,73]},{"label":"【2ch】コピペ情報局","data":[45,49,43,42,41,48,38,37,36,38,41,41,42,50,47,49,54,39,46,38,50,54,52,45,48,43,48,51]},{"label":"ぱんをたずねて2000里ちょい","data":[46,40,39,38,39,43,46,44,50,43,43,38,36,38,68,101,101,101,66,78,82,88,70,68,70,76,82,92]},{"label":"芸能人の気になる噂","data":[47,56,51,46,40,44,48,49,44,46,42,47,52,53,48,45,47,46,54,48,39,38,38,46,38,39,40,45]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[48,54,48,45,47,46,40,41,46,48,40,42,41,41,38,38,43,43,41,47,47,45,41,47,49,48,49,53]},{"label":"あにこ便","data":[49,53,54,58,52,52,42,47,48,53,48,53,46,42,40,48,48,51,48,41,46,42,51,53,55,54,53,46]},{"label":"働く大人の非常識","data":[50,95,91,78,46,66,57,72,62,62,78,61,96,96,83,72,82,53,49,46,38,51,101,90,65,58,67,58]},{"label":"カオスちゃんねる","data":[51,42,45,49,44,50,51,36,42,49,45,49,53,49,49,44,51,50,47,43,51,44,44,39,40,52,54,39]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[52,60,59,56,60,63,60,64,65,67,65,63,67,70,59,41,40,52,44,54,66,70,67,65,64,64,62,63]},{"label":"まとめブレイド","data":[53,88,99,101,75,95,70,86,83,75,93,83,100,95,91,82,78,101,101,101,98,87,84,88,101,101,71,101]},{"label":"footballnet【サッカーまとめ】","data":[54,64,85,84,93,92,66,74,101,101,101,101,101,101,97,99,101,101,101,65,90,101,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[55,50,46,54,51,40,43,50,51,51,46,51,49,45,37,42,41,45,45,50,58,48,45,44,51,38,44,49]},{"label":"サカラボ | サッカーまとめ速報","data":[56,62,69,64,64,68,79,67,66,73,74,74,81,80,66,67,71,87,68,84,76,76,68,76,74,71,65,77]},{"label":"ふくよかまるみのピリカラ人生","data":[57,36,58,37,66,38,34,59,101,47,69,101,38,66,101,40,61,40,40,101,48,68,36,59,34,53,35,54]},{"label":"ポリー速報","data":[58,86,67,65,73,64,58,56,52,57,53,57,66,60,56,56,49,56,52,55,64,64,62,52,44,42,46,59]},{"label":"海外の万国反応記＠海外の反応","data":[59,51,53,51,48,58,54,52,54,50,44,52,54,56,55,58,46,54,50,44,36,50,55,49,42,44,42,50]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[60,66,60,66,77,78,96,53,47,63,63,78,85,77,73,55,70,77,71,80,89,69,74,64,86,93,89,64]},{"label":"De速","data":[61,55,56,53,49,55,49,55,58,61,51,55,56,52,51,61,63,59,53,57,57,58,69,66,58,68,69,61]},{"label":"パチンコ・パチスロ.com","data":[62,44,44,55,55,53,59,77,64,60,61,62,50,58,76,70,53,55,59,70,59,66,65,61,54,62,60,62]},{"label":"はむらの毎日マンガ","data":[63,101,36,59,101,45,55,101,101,31,101,73,58,25,25,36,22,33,23,36,23,33,80,23,35,51,16,36]},{"label":"あいチャンネル","data":[64,24,19,57,26,22,23,51,28,19,50,28,21,51,31,21,25,19,38,33,20,46,28,19,50,49,21,40]},{"label":"ずっと日曜日のターン","data":[65,52,80,33,76,57,78,76,57,85,55,54,45,78,79,60,50,48,73,49,68,71,64,67,61,91,56,86]},{"label":"流速VIP","data":[66,57,57,61,54,61,52,42,41,52,59,60,61,71,50,47,59,62,55,60,60,57,57,63,57,61,57,56]},{"label":"PS5速報！","data":[67,58,50,48,58,62,63,63,55,55,52,56,60,59,53,54,52,47,42,52,53,56,50,51,45,41,47,57]},{"label":"ライフハックちゃんねる弐式","data":[68,61,61,52,63,60,82,45,56,64,76,66,71,65,57,75,65,57,62,66,69,60,76,69,63,57,61,71]},{"label":"投資ちゃんねる","data":[69,76,66,77,67,82,69,66,67,77,70,72,78,81,64,87,79,80,78,69,75,74,66,73,79,65,72,84]},{"label":"サカサカ10【サッカーまとめ速報】","data":[70,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[71,70,68,70,61,73,68,69,69,70,67,75,74,68,63,63,62,60,60,62,72,67,75,70,69,66,79,76]},{"label":"馬鳥速報","data":[72,74,70,69,65,71,80,87,70,58,71,76,68,67,61,73,90,71,70,98,67,73,91,86,88,79,75,100]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[73,79,76,75,78,77,61,68,75,74,87,79,83,73,78,86,97,82,74,76,78,85,85,75,81,82,84,82]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[74,69,100,62,56,54,50,61,81,99,56,59,63,76,89,62,74,86,63,74,61,49,59,62,78,60,73,101]},{"label":"軍事・ミリタリー速報☆彡","data":[75,78,62,72,74,70,76,58,74,71,77,70,73,74,80,83,76,61,69,68,80,77,82,72,71,70,63,67]},{"label":"絵日記でございます。","data":[76,91,101,94,86,72,56,57,78,86,100,90,98,88,101,101,101,98,84,77,55,59,78,96,85,84,78,85]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[77,101,72,101,68,101,64,101,63,101,90,101,64,101,62,101,67,101,57,59,101,101,63,101,66,63,101,65]},{"label":"最強ジャンプ放送局","data":[78,68,78,88,81,93,87,79,77,68,83,77,93,86,84,68,73,83,76,89,85,86,71,78,77,73,93,90]},{"label":"鷹速@ホークスまとめブログ","data":[79,80,63,74,72,79,93,85,76,82,73,69,90,98,81,74,89,100,101,79,88,101,93,101,91,90,92,68]},{"label":"登山ちゃんねる","data":[80,101,82,73,62,86,81,84,82,101,101,92,101,101,101,94,85,85,88,67,74,72,83,87,92,72,80,70]},{"label":"くまおのマンガ堂","data":[81,84,89,93,90,80,85,83,91,89,68,65,70,75,74,76,72,64,56,53,56,52,54,50,47,46,45,52]},{"label":"気になる芸能まとめ","data":[82,94,94,101,91,87,95,81,85,92,101,101,101,101,96,78,94,99,101,101,99,93,101,101,101,101,101,101]},{"label":"はーとログ","data":[83,82,81,90,88,81,88,75,79,93,85,85,75,83,87,85,86,84,65,75,73,65,77,79,90,83,68,80]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[84,96,86,101,101,88,74,70,88,95,80,68,69,69,72,92,95,68,67,82,77,94,101,98,72,67,88,72]},{"label":"人間まおと愉快な仲間たち","data":[85,81,77,79,84,65,65,62,59,59,66,71,72,62,67,71,69,67,61,58,63,62,43,48,53,50,52,55]},{"label":"ろぼ速VIP","data":[86,87,90,86,83,75,75,82,84,79,86,91,82,82,77,91,81,81,80,85,79,80,90,89,80,81,87,79]},{"label":"お料理速報","data":[87,85,101,96,94,101,101,100,72,101,92,93,101,97,95,90,101,94,77,101,101,95,99,101,95,87,101,101]},{"label":"すや子のブログ","data":[88,71,79,50,53,51,53,101,60,65,54,64,57,64,101,69,91,73,99,87,93,101,73,101,87,101,64,75]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[89,83,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,70,79,101,101,98,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[90,72,92,91,98,90,92,80,86,84,94,101,92,90,85,88,100,92,91,83,86,90,95,94,89,101,91,81]},{"label":"SAMURAI Footballers","data":[91,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[92,101,96,71,96,101,84,65,68,66,79,87,88,72,71,101,101,88,101,64,62,83,101,81,67,96,98,66]},{"label":"鈴木さん速報","data":[93,93,71,76,79,83,71,73,73,76,84,86,87,84,86,95,96,78,75,86,83,89,88,91,84,69,96,78]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[94,101,65,87,101,101,100,101,101,101,101,80,65,61,60,65,75,79,81,56,52,84,98,101,101,101,97,88]},{"label":"資格ちゃんねる","data":[95,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,96,101,101,101,101,101,101]},{"label":"今日速2ch","data":[96,67,83,83,59,67,90,88,71,87,96,67,55,54,75,57,35,58,101,51,37,34,48,35,52,56,59,60]},{"label":"まとめロッテ！","data":[97,90,101,100,85,101,101,92,101,101,101,89,99,93,101,101,99,95,89,101,94,101,87,84,101,88,90,101]},{"label":"大艦巨砲主義！","data":[98,101,97,92,100,84,98,101,98,94,91,98,91,89,98,93,93,101,90,101,87,82,94,77,96,97,95,93]},{"label":"やみ速@なんJ西武まとめ","data":[99,97,101,101,101,101,101,96,100,101,98,96,94,91,82,101,77,101,95,97,97,101,101,82,93,94,86,89]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[100,101,95,101,101,101,101,101,101,32,29,44,59,63,70,89,98,89,85,91,96,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,46,101,101,71,101,101,60,101,72,62,101,101,101,101,101,60,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,48,49,63,101,101,67,93,95,101,101,94,95,87,92,79,84,65,64,63,70,75,81,74,75,78,66,69]},{"label":"ジャンプ速報","data":[101,73,73,85,82,76,97,71,61,69,72,81,89,101,69,59,56,74,83,81,81,78,79,71,76,74,70,74]},{"label":"FF14速報","data":[101,75,88,95,101,99,101,101,101,90,89,100,101,101,101,101,88,75,94,101,101,101,101,101,101,101,101,97]},{"label":"五箇野人の海外旅日記","data":[101,77,52,101,92,101,101,90,101,101,58,95,101,101,101,101,101,101,101,73,101,101,86,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,92,84,80,101,101,101,94,96,101,101,101,97,100,101,101,87,91,72,71,84,101,101,80,68,86,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,99,101,68,101,91,101,101,101,83,101,101,101,101,101,101,101,97,101,101,101,101,101,93,94,98,100,101]},{"label":"あんころの漫画日和","data":[101,100,74,101,97,74,73,101,93,80,101,99,79,101,93,77,83,101,96,92,101,101,101,101,101,101,94,99]},{"label":"オタクニュース","data":[101,101,64,82,101,101,86,101,101,101,101,101,101,92,101,101,101,101,101,101,101,79,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,93,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,98,101,101,101,101,101,101,101,97,101,101,101,101,101,101,93,92,101,101,101,101,101,98,85,101,101]},{"label":"つつみのブログ","data":[101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,83,101]},{"label":"まとめ太郎！","data":[101,101,101,89,87,97,77,78,92,88,81,82,84,101,101,101,101,101,86,100,101,101,101,92,83,89,101,101]},{"label":"おる速","data":[101,101,101,97,89,100,83,98,90,98,82,101,101,101,101,97,101,101,101,101,91,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,70,69,72,101,101,101,101,101,101,101,101,100,58,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,80,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,95,98,91,91,97,101,101,101,101,101,88,101,101,101,100,99,101,101,101,101,101,101,99,87]},{"label":"かぞくちゃんねる","data":[101,101,101,101,99,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,85,101,101,101,101,75,101,101,94,101,101,101,90,101,101,101,101,89,101,101,101,77,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,89,89,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,95,60,95,101,98]},{"label":"MLB NEWS@まとめ","data":[101,101,101,101,101,101,94,97,99,97,99,101,101,101,99,101,101,101,101,90,100,92,101,83,73,80,81,83]},{"label":"えび通","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,80,68,101,101,101,101,101,101,101,99,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,89,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,95,80,101,64,43,47,47,58,84,64,76,97,72,101,61,29,55,97,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,99,101,101,101,101,101,101,100,101,101,101,93,101,95,100,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,101,89,91,95,97,101,79,101,101,92,101,101,101,101,101,96,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,98,101,101,101,101,101,101,61,97,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,88,50,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,33,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,88,77,101,101,101,101,96,87,88,101,101,101,85,82,77,76,101]},{"label":"猫とくも膜下出血の絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,10,101,66,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,18,34,101,101,101,101,101,16,24,100,101,101,101,101,12]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"〜うちのヒフミヨ！４人育児はエンターテインメント〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふぇー速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101]},{"label":"IEbiyori  鹿児島 整理収納アドバイザー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101]},{"label":"らばQ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,97,99,101,101,101,101]},{"label":"great G-SHOCK world","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101]},{"label":"だいごろうの1日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,57,100,100,74,91]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,101,101,101]},{"label":"なんJ芸能ゴシップまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,40,101,101]},{"label":"あきばさやかの人生ケアレスミス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,85,101]},{"label":"やーこばなし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]}];
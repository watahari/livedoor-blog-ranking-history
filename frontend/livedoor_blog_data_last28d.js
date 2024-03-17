var labels = ['2024-02-19','2024-02-20','2024-02-21','2024-02-22','2024-02-23','2024-02-24','2024-02-25','2024-02-26','2024-02-27','2024-02-28','2024-02-29','2024-03-01','2024-03-02','2024-03-03','2024-03-04','2024-03-05','2024-03-06','2024-03-07','2024-03-08','2024-03-09','2024-03-10','2024-03-11','2024-03-12','2024-03-13','2024-03-14','2024-03-15','2024-03-16','2024-03-17',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,2,2,1,1,1,1,3,1,1,1,2,2,1,1,1,4,3,1,1,1,2,2,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2]},{"label":"はちま起稿","data":[3,3,3,3,3,3,3,3,3,3,2,3,4,4,4,3,3,3,3,3,2,3,3,3,3,3,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[4,5,5,4,4,5,5,4,4,5,5,8,9,5,5,5,5,4,5,7,5,4,5,4,5,5,6,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,6,6,6,6,6,7,5,8,8,6,4,5,6,6,6,6,6,6,8,7,6,7,6,8,6,5,4]},{"label":"ハムスター速報","data":[6,4,4,5,5,4,6,6,5,4,4,5,3,3,3,4,4,5,4,5,4,5,6,5,4,4,4,8]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[7,7,7,7,7,8,8,9,6,6,8,7,6,8,9,9,9,9,9,9,8,9,8,8,11,10,9,11]},{"label":"暇つぶしニュース","data":[8,9,8,9,9,7,4,7,9,9,7,9,8,9,7,8,7,7,8,11,6,8,10,7,9,8,8,6]},{"label":"痛いニュース(ﾉ∀`)","data":[9,8,9,8,8,9,9,8,7,7,9,6,7,7,8,7,8,8,7,6,9,7,11,10,10,9,10,12]},{"label":"ヤゴヴのマンガ劇場","data":[10,10,11,11,12,10,11,12,11,11,11,11,11,11,10,11,11,10,10,13,12,10,9,9,7,7,7,9]},{"label":"【2ch】ニュー速クオリティ","data":[11,12,13,13,14,17,18,17,14,16,16,16,15,17,16,17,16,16,16,18,16,16,17,17,16,20,15,19]},{"label":"わんこーる速報！","data":[12,14,15,16,16,16,13,14,15,15,15,15,17,16,14,15,15,15,14,14,13,12,13,13,14,14,12,20]},{"label":"哲学ニュースnwk","data":[13,16,10,12,10,11,15,13,13,13,14,12,10,10,11,13,14,13,12,12,14,18,18,19,15,18,14,10]},{"label":"もちログ","data":[14,11,12,10,11,12,10,11,10,10,10,10,13,14,42,33,37,36,40,36,38,32,32,27,26,29,25,26]},{"label":"なんJ PRIDE","data":[15,15,14,15,15,14,14,15,16,14,13,13,12,15,13,14,13,14,15,15,15,14,14,16,13,19,13,17]},{"label":"ねいろ速報さん","data":[16,13,16,17,17,15,17,18,17,18,18,19,20,19,17,16,17,17,17,16,17,17,16,20,17,21,18,21]},{"label":"ぶる速-VIP","data":[17,17,19,21,19,20,29,16,21,24,17,24,27,20,15,10,10,12,13,17,18,15,20,15,18,16,19,18]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,22,20,18,18,19,21,19,19,17,19,18,19,23,19,18,18,18,22,21,22,21,15,21,19,22,20,27]},{"label":"ラビット速報","data":[19,23,23,22,21,21,24,20,24,26,22,21,23,18,21,19,21,20,19,19,19,19,19,22,22,23,21,22]},{"label":"稲妻速報","data":[20,24,21,20,20,22,19,21,22,20,20,22,24,21,20,21,23,19,20,24,24,25,22,23,20,25,26,24]},{"label":"VIPPERな俺","data":[21,25,28,23,24,24,25,26,26,27,30,28,22,25,23,23,22,22,18,22,25,27,24,25,23,28,27,25]},{"label":"BIPブログ","data":[22,19,17,14,13,13,12,10,12,12,12,14,14,13,12,12,12,11,11,10,11,11,12,11,12,11,11,14]},{"label":"ゴールデンタイムズ","data":[23,26,29,28,27,23,26,23,25,28,27,27,29,27,27,22,26,25,23,23,26,31,27,32,24,27,22,28]},{"label":"乃木坂46まとめ 1/46","data":[24,18,31,34,30,31,35,39,35,22,33,29,34,41,35,36,27,32,32,25,28,22,23,35,28,26,16,16]},{"label":"はむらの毎日マンガ","data":[25,36,22,33,23,36,23,33,80,23,35,51,16,36,18,56,20,27,65,20,29,59,56,12,48,17,30,60]},{"label":"ネギ速","data":[26,27,37,35,34,35,44,32,32,33,29,31,36,37,31,32,38,34,31,34,37,34,30,30,34,42,33,34]},{"label":"NEWSぽけまとめーる","data":[27,28,26,30,26,26,27,22,20,21,21,20,25,22,22,28,28,30,27,33,34,28,31,26,21,30,29,31]},{"label":"おうまがタイムズ","data":[28,34,38,27,25,25,31,29,31,32,24,25,28,33,32,31,31,31,26,30,31,26,28,38,32,45,35,36]},{"label":"なんJクエスト","data":[29,30,33,25,29,28,33,30,27,29,28,30,33,29,29,29,29,29,29,32,30,24,25,34,30,32,31,33]},{"label":"うしみつ-5chまとめ-","data":[30,29,30,26,28,29,32,28,30,31,25,23,31,30,28,25,30,23,25,27,27,29,29,28,25,24,23,23]},{"label":"あいチャンネル","data":[31,21,25,19,38,33,20,46,28,19,50,49,21,40,92,20,32,73,21,35,21,47,35,18,44,35,17,52]},{"label":"おーるじゃんる","data":[32,31,24,24,22,18,22,25,23,25,23,17,18,26,26,26,24,26,24,26,20,23,21,24,27,31,28,30]},{"label":"日刊やきう速報","data":[33,32,34,36,31,27,28,31,33,34,26,26,26,28,33,27,33,28,28,28,33,33,33,29,33,34,24,29]},{"label":"しばたまブログ","data":[34,101,101,101,101,101,16,24,100,101,101,101,101,12,24,88,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カラパイア","data":[35,35,27,29,32,30,30,27,18,30,36,35,39,35,25,24,25,24,30,39,40,30,36,39,37,40,42,42]},{"label":"カイカイ反応通信","data":[36,37,32,32,35,39,43,35,37,36,32,32,32,34,36,34,34,33,33,31,35,36,34,37,31,36,34,32]},{"label":"ついんてーる速報","data":[37,42,41,45,45,50,58,48,45,44,51,38,44,49,50,39,48,55,52,47,55,46,49,46,61,59,65,61]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[38,38,43,43,41,47,47,45,41,47,49,48,49,53,49,45,44,43,45,46,45,44,50,51,40,48,44,48]},{"label":"オタク.com －オタコム－","data":[39,46,45,44,39,45,45,41,46,42,43,45,55,44,43,41,47,38,42,42,42,42,47,49,39,53,47,47]},{"label":"あにこ便","data":[40,48,48,51,48,41,46,42,51,53,55,54,53,46,45,49,55,52,55,50,48,49,59,58,62,63,52,44]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[41,39,44,38,43,32,41,40,34,37,31,34,30,32,40,38,39,40,39,38,49,39,40,33,35,51,37,35]},{"label":"IT速報","data":[42,50,36,31,33,34,34,36,39,38,37,37,41,47,39,40,42,49,38,40,41,35,39,40,46,37,39,37]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[43,43,42,42,36,37,42,47,40,40,41,36,37,38,30,37,40,35,34,37,32,37,43,45,47,61,38,40]},{"label":"ガールズVIPまとめ","data":[44,53,57,49,51,40,49,43,42,41,46,47,43,48,34,52,51,39,37,52,54,57,53,41,60,43,43,49]},{"label":"まとめたニュース","data":[45,33,39,37,37,42,40,37,49,43,39,33,38,43,37,30,35,37,41,44,43,38,54,43,50,44,36,54]},{"label":"ツイッター速報","data":[46,51,80,66,101,101,54,101,58,54,101,101,101,24,90,101,19,21,74,1,10,56,101,101,101,39,66,39]},{"label":"【2ch】コピペ情報局","data":[47,49,54,39,46,38,50,54,52,45,48,43,48,51,48,47,46,48,47,45,44,41,58,50,41,62,49,43]},{"label":"芸能人の気になる噂","data":[48,45,47,46,54,48,39,38,38,46,38,39,40,45,46,42,43,47,50,54,57,43,41,52,36,52,60,57]},{"label":"カオスちゃんねる","data":[49,44,51,50,47,43,51,44,44,39,40,52,54,39,47,55,50,44,57,49,56,48,55,56,52,47,55,51]},{"label":"流速VIP","data":[50,47,59,62,55,60,60,57,57,63,57,61,57,56,57,69,65,61,64,59,71,61,66,70,68,70,61,65]},{"label":"De速","data":[51,61,63,59,53,57,57,58,69,66,58,68,69,61,56,63,59,45,48,58,58,54,45,44,53,38,51,62]},{"label":"ニュースBUZZ","data":[52,64,55,41,58,95,71,53,56,60,59,92,58,73,65,94,100,74,53,79,65,51,62,79,58,80,101,58]},{"label":"PS5速報！","data":[53,54,52,47,42,52,53,56,50,51,45,41,47,57,58,53,53,53,54,53,63,67,70,65,63,64,62,59]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[54,52,66,69,82,61,65,63,60,58,56,55,50,31,41,46,62,62,61,56,53,45,73,72,65,54,50,45]},{"label":"海外の万国反応記＠海外の反応","data":[55,58,46,54,50,44,36,50,55,49,42,44,42,50,52,58,58,42,46,29,36,40,37,42,45,56,48,46]},{"label":"ポリー速報","data":[56,56,49,56,52,55,64,64,62,52,44,42,46,59,44,48,57,56,58,57,64,66,60,59,54,66,56,55]},{"label":"ライフハックちゃんねる弐式","data":[57,75,65,57,62,66,69,60,76,69,63,57,61,71,71,65,76,68,76,77,72,68,65,67,57,68,68,66]},{"label":"大和とぴっく-やまとぴ","data":[58,84,64,76,97,72,101,61,29,55,97,101,101,101,101,101,101,101,95,63,91,77,79,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[59,41,40,52,44,54,66,70,67,65,64,64,62,63,73,61,67,64,66,60,67,74,67,68,66,67,63,70]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[60,65,75,79,81,56,52,84,98,101,101,101,97,88,61,78,101,71,60,62,46,13,26,64,81,101,95,71]},{"label":"馬鳥速報","data":[61,73,90,71,70,98,67,73,91,86,88,79,75,100,81,57,68,97,68,72,78,80,68,82,69,69,70,72]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[62,101,67,101,57,59,101,101,63,101,66,63,101,65,70,101,64,46,101,51,51,101,51,55,101,58,57,101]},{"label":"2chコピペ保存道場","data":[63,63,62,60,60,62,72,67,75,70,69,66,79,76,72,72,71,69,75,81,75,101,75,73,73,76,71,69]},{"label":"投資ちゃんねる","data":[64,87,79,80,78,69,75,74,66,73,79,65,72,84,67,73,66,51,73,71,52,52,69,60,67,77,67,67]},{"label":"マンガと私と猫ブログ。","data":[65,101,101,101,101,101,101,81,101,101,101,101,101,101,82,101,99,80,70,68,66,62,61,69,49,50,58,50]},{"label":"サカラボ | サッカーまとめ速報","data":[66,67,71,87,68,84,76,76,68,76,74,71,65,77,68,76,75,67,85,86,89,72,63,81,84,86,90,86]},{"label":"人間まおと愉快な仲間たち","data":[67,71,69,67,61,58,63,62,43,48,53,50,52,55,55,50,52,50,49,48,60,53,42,48,42,41,41,38]},{"label":"ぱんをたずねて2000里ちょい","data":[68,101,101,101,66,78,82,88,70,68,70,76,82,92,99,101,101,101,101,101,88,82,76,74,77,72,73,74]},{"label":"ジャンプ速報","data":[69,59,56,74,83,81,81,78,79,71,76,74,70,74,93,75,80,66,63,75,59,63,64,101,76,85,78,75]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[70,89,98,89,85,91,96,101,101,101,101,101,101,101,101,101,90,95,101,101,84,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[71,101,101,88,101,64,62,83,101,81,67,96,98,66,59,51,77,72,69,66,69,75,82,84,94,94,69,97]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[72,92,95,68,67,82,77,94,101,98,72,67,88,72,87,100,101,83,88,97,95,101,99,96,78,73,76,63]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[73,55,70,77,71,80,89,69,74,64,86,93,89,64,62,79,84,78,71,90,92,94,83,87,79,93,92,85]},{"label":"くまおのマンガ堂","data":[74,76,72,64,56,53,56,52,54,50,47,46,45,52,51,44,41,41,44,41,50,50,44,47,43,49,53,56]},{"label":"今日速2ch","data":[75,57,35,58,101,51,37,34,48,35,52,56,59,60,53,74,61,84,72,70,82,64,84,57,59,60,75,73]},{"label":"パチンコ・パチスロ.com","data":[76,70,53,55,59,70,59,66,65,61,54,62,60,62,60,43,49,58,51,65,68,70,48,54,51,55,54,53]},{"label":"ろぼ速VIP","data":[77,91,81,81,80,85,79,80,90,89,80,81,87,79,66,81,82,77,79,82,77,81,101,88,87,83,86,82]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[78,86,97,82,74,76,78,85,85,75,81,82,84,82,89,86,88,89,87,92,86,98,100,93,92,87,96,89]},{"label":"ずっと日曜日のターン","data":[79,60,50,48,73,49,68,71,64,67,61,91,56,86,76,68,70,57,59,67,62,69,46,66,55,57,46,64]},{"label":"軍事・ミリタリー速報☆彡","data":[80,83,76,61,69,68,80,77,82,72,71,70,63,67,77,67,60,70,67,76,74,76,78,77,72,74,83,76]},{"label":"鷹速@ホークスまとめブログ","data":[81,74,89,100,101,79,88,101,93,101,91,90,92,68,75,77,95,94,81,99,101,101,101,97,101,101,99,94]},{"label":"やみ速@なんJ西武まとめ","data":[82,101,77,101,95,97,97,101,101,82,93,94,86,89,96,83,81,88,86,95,97,95,91,90,96,89,80,80]},{"label":"働く大人の非常識","data":[83,72,82,53,49,46,38,51,101,90,65,58,67,58,69,92,69,60,77,69,61,65,57,61,85,65,64,88]},{"label":"最強ジャンプ放送局","data":[84,68,73,83,76,89,85,86,71,78,77,73,93,90,84,64,78,79,84,83,81,78,74,92,93,84,85,91]},{"label":"デジタルニューススレッド","data":[85,88,100,92,91,83,86,90,95,94,89,101,91,81,80,89,89,92,91,91,73,84,89,91,88,92,93,92]},{"label":"鈴木さん速報","data":[86,95,96,78,75,86,83,89,88,91,84,69,96,78,78,84,83,81,93,93,87,93,97,101,83,96,89,90]},{"label":"はーとログ","data":[87,85,86,84,65,75,73,65,77,79,90,83,68,80,85,71,72,76,80,74,83,88,87,89,74,75,81,79]},{"label":"阪神タイガースちゃんねる","data":[88,101,101,101,100,99,101,101,101,101,101,101,99,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[89,62,74,86,63,74,61,49,59,62,78,60,73,101,100,62,63,75,62,64,70,91,71,63,64,100,101,87]},{"label":"かりんこのかりん党","data":[90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[91,82,78,101,101,101,98,87,84,88,101,101,71,101,101,98,101,101,83,85,101,101,101,101,101,101,84,83]},{"label":"スズぺぺの人生何とかなってます!!","data":[92,79,84,65,64,63,70,75,81,74,75,78,66,69,64,54,56,54,56,61,47,55,52,53,38,46,40,41]},{"label":"あんころの漫画日和","data":[93,77,83,101,96,92,101,101,101,101,101,101,94,99,101,101,93,93,101,88,80,101,96,85,99,81,77,78]},{"label":"世にも奇妙ななんかの話","data":[94,20,18,63,101,101,101,55,53,56,101,59,51,42,101,101,101,101,101,43,23,20,81,14,6,13,45,15]},{"label":"お料理速報","data":[95,90,101,94,77,101,101,95,99,101,95,87,101,101,91,99,101,100,98,101,94,90,86,101,97,79,98,98]},{"label":"気になる芸能まとめ","data":[96,78,94,99,101,101,99,93,101,101,101,101,101,101,101,101,101,101,101,101,98,99,101,101,101,99,101,101]},{"label":"footballnet【サッカーまとめ】","data":[97,99,101,101,101,65,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[98,93,93,101,90,101,87,82,94,77,96,97,95,93,83,91,101,101,94,98,96,97,101,95,90,91,101,100]},{"label":"MLB NEWS@まとめ","data":[99,101,101,101,101,90,100,92,101,83,73,80,81,83,86,96,101,101,82,80,93,85,94,101,100,97,82,96]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[100,101,101,101,93,101,95,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,40,61,40,40,101,48,68,36,59,34,53,35,54,38,59,36,59,35,55,39,58,101,36,56,33,59,101]},{"label":"猫とくも膜下出血の絵日記","data":[101,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すや子のブログ","data":[101,69,91,73,99,87,93,101,73,101,87,101,64,75,101,66,73,101,78,87,101,87,101,101,101,101,101,101]},{"label":"えび通","data":[101,80,68,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,94,85,85,88,67,74,72,83,87,92,72,80,70,88,87,74,82,90,89,99,79,77,71,75,71,87,81]},{"label":"〜うちのヒフミヨ！４人育児はエンターテインメント〜","data":[101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,97,101,101,101,101,91,101,101,101,101,101,101,101,101,93,101,91,92,101,101,101,93,83,101,90,101,93]},{"label":"日向坂46まとめ速報","data":[101,98,101,101,101,101,101,101,61,97,101,101,101,101,101,101,97,90,101,101,101,101,98,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,100,58,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,60,101,101,101,101,101,101,101,101,101,101,101,101,60,54,101,101,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,101,87,91,72,71,84,101,101,80,68,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,88,75,94,101,101,101,101,101,101,101,101,97,101,101,87,96,89,101,101,101,90,100,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,92,101,101,101,101,101,96,101,101,101,101,101,79,95,96,85,96,101,101,101,92,86,82,78,94,101]},{"label":"まとめロッテ！","data":[101,101,99,95,89,101,94,101,87,84,101,88,90,101,101,90,94,99,101,101,101,96,101,94,101,101,88,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,70,79,101,101,98,101,101,101,101,101,101,101,101,101,101,101,96,90,83,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,72,101,101,101,101,101,101,101,101,83,101,101,82,101,101,101,84,101,101,101,101,80,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,90,101,101,101,101,89,101,101,101,77,101,101,101,101,65,101,101,101,101,101,78,101,101,101,13]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,93,92,101,101,101,101,101,98,85,101,101,101,101,101,101,101,101,76,73,80,80,70,82,72,77]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,96,87,88,101,101,101,85,82,77,76,101,101,101,85,101,101,101,101,101,101,99,95,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,97,101,101,101,101,101,93,94,98,100,101,101,101,101,101,101,101,85,86,95,76,71,88,79,84]},{"label":"絵日記でございます。","data":[101,101,101,98,84,77,55,59,78,96,85,84,78,85,63,80,79,87,43,78,79,71,88,101,89,98,91,68]},{"label":"まとめ太郎！","data":[101,101,101,101,86,100,101,101,101,92,83,89,101,101,101,101,91,101,101,101,101,101,101,101,101,101,97,101]},{"label":"バイク速報","data":[101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,73,101,101,86,101,101,101,101,101,101,101,101,101,97,100,101,101,101,101,101,101,101,101]},{"label":"ふぇー速","data":[101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"IEbiyori  鹿児島 整理収納アドバイザー","data":[101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,96,101,96,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"らばQ","data":[101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,91,97,99,101,101,101,101,98,101,101,101,101,101,101,101,101,75,101,101,101,101]},{"label":"great G-SHOCK world","data":[101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"だいごろうの1日","data":[101,101,101,101,101,101,101,101,47,57,100,100,74,91,97,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,95,60,95,101,98,94,101,101,86,101,94,100,101,85,98,86,95,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,98,98,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,62,101,101,101,101,101,101,101,101,101,101,101,4,31,29,12,32,7]},{"label":"なんJ芸能ゴシップまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,40,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あきばさやかの人生ケアレスミス","data":[101,101,101,101,101,101,101,101,101,101,101,75,85,101,101,101,45,63,36,73,101,101,101,62,91,101,101,101]},{"label":"やーこばなし","data":[101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,94,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,92,38,101,101,101,101,101]},{"label":"保守ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"etusivu note","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,35,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"犬のかがやきブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,98,101,101,101]},{"label":"トレジャーハンティン部、部長のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,72,101,101,101,101,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,15,74,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]}];
var labels = ['2024-05-31','2024-06-01','2024-06-02','2024-06-03','2024-06-04','2024-06-05','2024-06-06','2024-06-07','2024-06-08','2024-06-09','2024-06-10','2024-06-11','2024-06-12','2024-06-13','2024-06-14','2024-06-15','2024-06-16','2024-06-17','2024-06-18','2024-06-19','2024-06-20','2024-06-21','2024-06-22','2024-06-23','2024-06-24','2024-06-25','2024-06-26','2024-06-27',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,3,1,1,1,2,2,1,1,1,1,2,6,1,1,1,2,4,1,1,1,1,1,1,3,3,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,1,1,2,2,2,1,1,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,2,2,1,1,3]},{"label":"はちま起稿","data":[3,3,2,4,3,3,3,3,3,3,3,3,3,2,3,4,4,4,2,3,3,3,3,3,5,5,4,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,5,4,3,5,5,4,6,6,5,4,4,5,5,5,5,5,3,3,5,4,4,5,4,4,4,7,6]},{"label":"痛いニュース(ﾉ∀`)","data":[5,4,6,6,4,6,5,4,4,6,6,5,4,3,4,3,6,8,7,4,5,5,4,5,8,7,5,4]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,8,7,5,6,7,8,7,5,4,5,6,8,7,7,9,7,5,5,6,6,6,8,7,6,6,6,9]},{"label":"ハムスター速報","data":[7,6,5,7,7,4,6,5,7,7,8,7,6,4,6,6,10,6,6,7,7,7,6,8,11,9,9,7]},{"label":"もちログ","data":[8,9,9,9,9,10,9,9,11,9,9,11,10,9,10,8,11,10,9,9,10,10,9,9,10,10,10,11]},{"label":"暇つぶしニュース","data":[9,7,8,8,8,8,7,8,8,8,7,8,9,11,9,10,8,9,11,11,11,9,10,10,9,12,12,12]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,10,10,11,10,9,11,11,10,11,11,10,11,10,11,11,12,11,10,10,9,11,11,11,12,11,11,10]},{"label":"ヤゴヴのマンガ劇場","data":[11,11,11,10,11,11,10,10,9,10,10,9,7,8,8,7,9,7,8,8,8,8,7,6,7,8,8,8]},{"label":"わんこーる速報！","data":[12,12,12,12,13,14,12,13,13,12,13,12,12,12,12,14,16,14,12,13,13,12,13,12,13,13,16,14]},{"label":"哲学ニュースnwk","data":[13,14,19,14,15,15,15,16,14,13,14,20,13,13,13,12,14,13,13,17,15,13,14,16,16,17,14,13]},{"label":"【2ch】ニュー速クオリティ","data":[14,13,13,16,17,16,14,14,15,16,18,17,17,15,15,16,18,18,16,19,17,17,12,13,15,15,17,21]},{"label":"なんJ PRIDE","data":[15,15,14,13,16,17,19,17,16,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日刊やきう速報","data":[16,17,17,17,25,19,20,21,19,18,19,27,21,16,23,20,19,17,17,24,20,22,19,17,18,24,22,18]},{"label":"ラビット速報","data":[17,20,21,15,19,18,16,19,18,15,16,19,14,14,17,19,21,19,20,21,23,21,22,19,19,18,19,15]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,16,15,18,14,13,13,15,17,19,20,14,15,18,19,17,20,22,19,18,19,19,17,18,17,20,18,17]},{"label":"ねいろ速報さん","data":[19,18,20,19,18,20,17,20,20,17,17,18,18,20,20,21,22,20,18,20,21,20,20,20,20,16,20,22]},{"label":"VIPPERな俺","data":[20,22,18,20,20,22,22,24,26,20,22,25,23,27,21,24,24,25,28,23,22,14,23,28,28,27,25,19]},{"label":"稲妻速報","data":[21,25,23,22,23,21,21,23,22,22,21,22,19,22,22,22,25,24,25,26,24,23,24,24,22,23,23,24]},{"label":"うしみつ-5chまとめ-","data":[22,26,24,23,26,26,24,25,21,21,23,24,20,21,26,23,23,21,23,25,28,24,25,23,21,22,24,28]},{"label":"おーるじゃんる","data":[23,24,29,26,24,24,18,22,24,28,25,15,25,23,24,27,28,27,22,14,18,18,18,26,25,21,27,23]},{"label":"ゴールデンタイムズ","data":[24,21,26,25,21,25,23,18,23,23,27,21,22,26,27,25,29,26,21,27,27,27,27,22,24,25,32,26]},{"label":"乃木坂46まとめ 1/46","data":[25,48,54,58,34,56,35,63,41,40,42,53,57,56,62,51,42,61,42,65,57,48,57,48,59,57,40,48]},{"label":"おうまがタイムズ","data":[26,27,27,21,27,27,27,29,35,27,24,23,24,25,28,30,31,23,24,22,26,25,21,25,23,26,26,29]},{"label":"NEWSぽけまとめーる","data":[27,23,25,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJクエスト","data":[28,28,30,28,31,28,26,30,28,26,26,28,27,28,30,31,30,29,29,30,35,29,31,29,30,29,28,27]},{"label":"IT速報","data":[29,29,36,32,33,32,29,33,30,29,28,33,37,39,32,33,33,33,30,34,32,34,36,32,33,34,33,32]},{"label":"ぱんをたずねて2000里ちょい","data":[30,38,42,38,50,42,32,41,46,39,34,51,48,52,59,53,62,46,51,47,44,43,47,30,47,46,34,30]},{"label":"カイカイ反応通信","data":[31,35,35,40,35,30,37,31,32,31,32,34,32,31,34,36,35,36,33,29,33,30,32,39,38,32,36,34]},{"label":"マンガと私と猫ブログ。","data":[32,88,101,75,12,83,101,101,101,101,101,101,101,101,101,101,101,101,101,62,101,101,50,101,101,55,101,101]},{"label":"ネギ速","data":[33,39,31,27,30,29,30,32,37,30,29,30,29,30,31,28,26,35,34,32,31,28,30,31,31,35,35,37]},{"label":"カラパイア","data":[34,32,34,34,40,40,41,36,38,37,35,39,45,46,42,44,37,34,32,31,36,32,34,36,35,33,37,44]},{"label":"あいチャンネル","data":[35,33,74,29,29,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[36,43,50,44,37,45,51,54,60,56,46,45,52,35,35,41,49,53,49,42,37,39,42,40,49,58,62,62]},{"label":"オタク.com －オタコム－","data":[37,40,39,31,36,33,40,40,43,38,38,38,38,38,43,46,45,43,39,35,38,42,49,42,39,36,39,42]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[38,31,28,30,32,31,39,35,34,34,31,31,30,43,48,52,36,32,37,51,41,36,40,35,36,40,29,33]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[39,30,38,45,39,36,33,38,36,44,37,40,35,40,44,47,55,45,40,39,49,33,41,47,48,49,43,39]},{"label":"ポリー速報","data":[40,42,47,43,54,59,44,49,53,55,53,62,53,60,53,57,63,51,56,58,45,52,45,37,54,60,57,51]},{"label":"なんJ（まとめては）いかんのか？","data":[41,52,43,39,65,54,43,60,56,32,49,89,50,37,38,32,34,41,87,64,52,75,53,46,34,44,51,20]},{"label":"まとめたニュース","data":[42,57,46,46,51,38,36,44,51,43,60,56,47,50,36,35,50,47,60,49,53,44,48,50,40,50,56,45]},{"label":"ツイッター速報","data":[43,91,89,100,99,101,101,101,101,101,96,41,33,90,18,13,3,28,62,101,101,101,101,101,101,101,13,49]},{"label":"ついんてーる速報","data":[44,37,33,47,47,39,49,56,57,54,51,48,36,48,37,34,40,38,48,46,50,41,43,45,43,51,46,52]},{"label":"海外の万国反応記＠海外の反応","data":[45,45,55,54,52,50,48,53,50,57,55,52,56,58,54,54,58,48,52,50,55,45,54,52,51,53,52,46]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[46,51,45,35,45,34,50,37,47,35,40,36,41,36,41,37,44,39,47,38,47,35,39,38,42,38,44,41]},{"label":"馬鳥速報","data":[47,55,70,65,41,49,53,34,31,46,56,44,43,49,58,50,51,69,50,57,65,59,64,64,62,59,47,40]},{"label":"芸能人の気になる噂","data":[48,41,41,41,43,43,38,42,39,33,36,35,31,42,45,45,38,40,35,40,46,38,51,44,44,39,42,43]},{"label":"カオスちゃんねる","data":[49,46,44,37,42,41,46,48,54,50,43,49,46,47,52,42,48,49,41,43,43,51,44,41,45,43,48,50]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[50,63,60,57,73,78,95,76,70,88,101,101,68,33,86,101,101,101,94,86,101,101,101,101,101,56,94,36]},{"label":"パチンコ・パチスロ.com","data":[51,44,52,48,53,48,52,50,42,45,52,50,49,57,49,56,68,65,45,33,51,56,60,57,55,41,49,57]},{"label":"PS5速報！","data":[52,34,32,52,44,37,34,39,40,36,59,37,40,41,39,40,43,56,57,37,29,31,35,33,52,42,45,53]},{"label":"スズぺぺの人生何とかなってます!!","data":[53,49,49,53,48,47,47,43,44,41,44,58,90,96,50,48,47,44,44,41,42,40,37,43,41,37,38,38]},{"label":"働く大人の非常識","data":[54,47,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぶる速-VIP","data":[55,36,37,36,38,35,31,28,27,24,30,32,28,32,33,39,39,30,31,28,30,37,33,34,29,30,30,35]},{"label":"ガールズVIPまとめ","data":[56,56,51,55,46,44,42,51,55,48,47,43,42,44,47,49,52,58,38,44,56,53,46,55,32,45,54,59]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[57,82,91,80,82,85,88,66,65,51,68,60,63,75,80,62,60,52,59,79,59,57,88,79,75,92,82,60]},{"label":"あにこ便","data":[58,53,53,49,49,46,55,55,52,47,45,47,51,55,56,55,56,50,43,48,58,55,56,56,50,48,50,56]},{"label":"ニュースBUZZ","data":[59,87,101,60,59,57,45,45,45,52,39,69,60,61,55,60,46,60,97,80,74,54,59,49,37,31,58,47]},{"label":"今日速2ch","data":[60,71,58,71,96,101,90,85,91,101,86,101,79,84,101,94,53,63,79,89,76,88,82,61,84,75,80,98]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[61,59,56,64,67,62,69,27,25,42,58,61,67,74,61,59,67,57,58,63,40,49,55,53,57,61,53,64]},{"label":"De速","data":[62,50,40,42,56,53,58,47,49,49,48,42,39,51,46,58,41,37,36,56,64,63,62,54,58,81,76,85]},{"label":"流速VIP","data":[63,58,67,67,71,58,60,62,72,66,61,80,61,59,60,61,69,55,65,55,70,58,71,59,46,65,67,71]},{"label":"はーとログ","data":[64,61,66,66,69,72,70,61,79,80,67,74,70,76,72,75,74,86,70,69,69,84,74,69,63,77,71,73]},{"label":"うみこのおとぼけぐらし","data":[65,60,63,62,101,52,67,79,74,71,72,72,74,80,69,63,82,64,77,68,73,71,73,72,81,89,83,93]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[66,65,65,69,64,60,59,64,67,61,62,59,59,53,64,66,71,70,71,61,61,62,58,62,56,64,64,69]},{"label":"高槻つーしん","data":[67,62,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"【2ch】コピペ情報局","data":[68,72,61,61,70,69,68,70,63,63,64,86,77,73,77,69,72,71,74,71,62,69,61,66,61,69,68,76]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[69,67,64,68,90,71,84,67,71,83,94,65,69,78,95,77,101,68,61,60,83,80,66,60,64,67,66,72]},{"label":"最強ジャンプ放送局","data":[70,74,79,72,58,75,77,71,81,84,83,68,96,89,79,87,89,91,69,85,81,73,78,84,90,71,81,89]},{"label":"ずっと日曜日のターン","data":[71,93,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[72,86,73,90,89,82,92,95,85,81,73,85,65,62,88,88,80,67,76,66,98,86,75,70,74,54,73,101]},{"label":"投資ちゃんねる","data":[73,84,81,78,72,74,72,78,80,72,78,79,76,72,68,85,83,85,75,77,78,76,70,63,67,86,74,75]},{"label":"あんころの漫画日和","data":[74,83,101,93,85,88,101,91,77,78,85,67,54,54,57,71,64,54,67,53,54,67,52,51,60,47,41,58]},{"label":"登山ちゃんねる","data":[75,90,84,83,86,81,74,81,89,91,89,87,85,65,63,74,77,83,92,96,101,81,95,83,80,82,65,68]},{"label":"ダイエット速報＠2ちゃんねる","data":[76,85,82,96,78,64,79,73,83,69,76,77,81,101,97,72,94,98,95,88,85,97,83,81,87,96,97,74]},{"label":"絵日記でございます。","data":[77,66,62,59,66,90,83,80,69,60,66,75,95,93,78,73,73,81,93,70,90,65,68,74,101,101,87,80]},{"label":"まとめロッテ！","data":[78,79,68,81,101,63,57,77,59,76,70,63,86,64,65,80,101,95,66,74,68,79,101,89,79,101,101,96]},{"label":"デジタルニューススレッド","data":[79,69,75,70,80,91,78,86,84,86,81,92,91,87,87,83,78,82,78,83,91,77,89,80,83,91,89,87]},{"label":"2chコピペ保存道場","data":[80,70,71,63,63,66,75,65,75,64,69,71,72,81,73,76,76,62,64,67,77,72,65,67,68,78,78,77]},{"label":"ライフハックちゃんねる弐式","data":[81,68,85,84,83,87,80,83,78,74,80,73,83,77,70,89,85,80,54,59,79,78,76,78,73,72,75,92]},{"label":"ろぼ速VIP","data":[82,94,76,77,75,79,81,82,82,85,84,81,78,91,83,90,90,92,88,92,86,82,91,75,82,94,86,82]},{"label":"MLB NEWS@まとめ","data":[83,89,99,101,87,84,85,90,90,79,88,95,101,95,85,91,87,87,81,101,72,87,81,68,65,87,85,61]},{"label":"鈴木さん速報","data":[84,75,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[85,73,59,51,61,76,91,92,76,70,65,90,92,97,99,92,92,74,72,97,101,101,84,71,66,88,99,86]},{"label":"鷹速@ホークスまとめブログ","data":[86,76,95,85,84,101,98,98,99,94,98,101,101,101,101,101,91,97,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[87,80,96,76,79,86,76,89,87,95,91,99,94,69,71,81,75,90,80,94,88,90,94,99,98,98,101,101]},{"label":"サル山の裏マンガ","data":[88,101,69,101,68,101,61,101,68,101,101,57,101,67,101,101,61,101,63,101,66,101,63,101,69,68,70,63]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[89,95,78,92,60,70,66,100,98,93,101,82,89,82,94,100,79,101,101,84,94,93,87,101,89,73,95,94]},{"label":"軍事・ミリタリー速報☆彡","data":[90,77,86,79,77,73,82,75,73,73,77,78,82,86,82,82,86,66,83,76,75,70,72,73,72,79,69,84]},{"label":"闇落ち女子トーク","data":[91,54,48,56,55,68,62,57,62,53,41,46,34,45,40,43,54,42,46,45,48,50,38,58,53,52,59,55]},{"label":"FF14速報","data":[92,78,83,89,62,55,73,68,66,68,57,70,58,71,74,70,65,89,68,95,89,91,101,96,101,85,60,66]},{"label":"大艦巨砲主義！","data":[93,96,93,99,93,97,96,101,101,101,93,101,101,101,91,98,95,101,101,101,101,101,99,95,99,95,101,101]},{"label":"世にも奇妙ななんかの話","data":[94,19,22,82,22,12,63,12,12,58,12,13,62,17,14,65,13,12,55,12,14,74,15,21,96,19,21,95]},{"label":"阪神タイガースちゃんねる","data":[95,101,94,101,101,101,93,94,86,101,95,101,101,101,101,101,101,101,99,93,101,98,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[96,97,92,95,94,94,87,93,88,89,87,96,97,94,93,96,93,99,98,90,97,95,97,86,94,101,100,97]},{"label":"資格ちゃんねる","data":[97,92,101,101,101,101,101,88,97,96,100,101,100,83,92,101,99,101,101,101,101,101,101,101,101,101,101,81]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[99,98,100,73,76,99,86,84,92,101,75,83,87,79,101,97,101,75,89,81,96,92,98,87,93,84,91,88]},{"label":"えび通","data":[100,101,97,91,101,92,97,101,96,97,101,101,101,101,101,101,96,101,101,99,84,94,101,93,100,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,64,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,71,101,101,101,101,101,101,79]},{"label":"つつみのブログ","data":[101,81,101,101,101,101,101,101,101,101,101,91,101,92,101,86,101,101,101,101,101,101,85,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,99,101,97,91,101,101,97,95,98,101,94,98,101,101,101,101,101,101,100,101,96,79,101,91,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,16,33,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,88,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,93,101,101]},{"label":"NEWSぽけまとめーる","data":[101,101,101,24,28,23,25,26,29,25,33,26,26,24,25,26,32,31,27,36,34,26,28,27,26,28,31,25]},{"label":"働く大人の非常識","data":[101,101,101,50,81,51,56,52,58,59,82,101,71,70,90,68,59,59,53,75,67,61,93,100,71,101,84,91]},{"label":"ずっと日曜日のターン","data":[101,101,101,74,57,93,54,46,61,75,50,55,75,63,75,64,57,79,82,52,60,46,80,65,70,83,61,54]},{"label":"鈴木さん速報","data":[101,101,101,86,74,67,71,58,64,65,71,76,80,66,76,79,81,76,91,78,80,66,77,76,77,80,72,78]},{"label":"筋肉速報","data":[101,101,101,87,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,88,101,80,99,101,101,87,101,101,64,98,67,101,101,101,101,101,101,101,69,98,101,66,98,67]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,88,89,65,101,101,101,101,54,93,101,101,101,101,101,85,91,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,92,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[101,101,101,101,95,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,93,101,101,101,101,97,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,101,97,77,64,74,100,101,101,101,66,68,81,93,100,88,96,101,63,68,67,101,92,100,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,100,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,86,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,96,101,87,93,101,92,88,101,85,101,84,101,94,86,101,82,101,92,82,101,63,63,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,98,101,101,94,62,54,66,99,101,101,101,101,77,73,101,101,101,101,92,97,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,90,101]},{"label":"あいチャンネル","data":[101,101,101,101,101,101,28,69,33,77,101,29,73,29,66,29,27,73,26,54,25,64,29,77,27,70,101,31]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,94,99,101,101,79,97,101,88,51,38,66,72,101,72,95,89,101,85,101,99,93,70]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,101,59,48,101,101,64,44,101,84,67,101,101,101,101,101,60,101,101,101,74,55,101]},{"label":"ジャックログ 2chJacklog","data":[101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ PRIDE","data":[101,101,101,101,101,101,101,101,101,14,15,16,16,19,16,18,17,15,15,15,16,15,16,15,14,14,15,16]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[101,101,101,101,101,101,101,101,101,67,74,84,101,101,101,101,84,93,90,87,92,83,96,88,85,90,88,90]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,82,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,101,101,101,90,63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,92,99,101,101,101,101,101,88,100,101,101,100,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,90,93,84,101,100,99,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガレ速@フォロワー体験漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,55,34,29,15,15,16,14,16,12,16,26,14,3,2,2,2]},{"label":"あやかずランド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あやかずランド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,78,101,96,84,82,87,85,100,101,101,101,92,99]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,78,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,39,47,86,101,101,101,101,101]},{"label":"バズッター速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,88,76,77,65]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,78,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101,101]},{"label":"とうふう絵日記～マイペース夫と３人子育て～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,96,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83]}];
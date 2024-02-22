var labels = ['2024-01-26','2024-01-27','2024-01-28','2024-01-29','2024-01-30','2024-01-31','2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09','2024-02-10','2024-02-11','2024-02-12','2024-02-13','2024-02-14','2024-02-15','2024-02-16','2024-02-17','2024-02-18','2024-02-19','2024-02-20','2024-02-21','2024-02-22',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,3,1,2,4,1,1,1,1,1,1,2,2,1,1,2,2,1,1,2,2,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,1,1,2,1,2,2,2,2,2,2,2,1,1,2,2,1,1,2,2,1,1,2,2,2,2]},{"label":"はちま起稿","data":[3,3,3,3,2,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[4,4,4,5,6,8,8,9,8,5,5,5,5,4,4,4,4,4,4,4,5,6,6,4,4,5,5,4]},{"label":"ハムスター速報","data":[5,5,6,6,4,4,4,5,3,4,4,4,4,5,5,5,5,5,7,5,4,4,4,6,6,4,4,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,6,5,4,5,5,6,8,5,6,6,6,8,8,7,6,6,6,6,6,6,5,5,5,5,6,6,6]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[7,8,7,9,7,7,7,6,7,9,7,8,7,7,8,8,7,8,9,7,7,7,8,8,7,7,7,7]},{"label":"ヤゴヴのマンガ劇場","data":[8,9,8,8,8,9,9,10,10,11,14,35,27,24,19,14,14,12,13,14,12,11,11,12,10,10,11,11]},{"label":"痛いニュース(ﾉ∀`)","data":[9,7,10,7,9,6,5,7,6,8,8,7,6,6,6,7,8,7,5,8,8,9,7,9,9,8,9,8]},{"label":"暇つぶしニュース","data":[10,10,9,10,10,10,11,11,9,10,9,9,9,9,9,9,9,9,8,9,9,8,9,7,8,9,8,9]},{"label":"哲学ニュースnwk","data":[11,11,12,11,11,11,10,1,11,12,12,12,12,11,10,10,10,10,10,10,10,12,10,13,13,16,10,12]},{"label":"【2ch】ニュー速クオリティ","data":[12,12,11,12,12,12,12,12,12,13,10,11,10,10,11,11,11,14,16,12,11,13,13,11,11,12,13,13]},{"label":"なんJ PRIDE","data":[13,13,14,13,13,15,16,15,14,14,13,13,15,16,13,12,13,11,11,11,13,14,14,15,15,15,14,15]},{"label":"もちログ","data":[14,14,15,17,16,16,14,14,13,16,15,10,14,12,12,18,16,13,14,15,14,15,12,14,14,11,12,10]},{"label":"わんこーる速報！","data":[15,15,16,14,15,13,13,13,16,15,11,14,11,13,14,13,15,16,18,16,16,17,15,16,12,14,15,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[16,16,18,18,17,14,15,18,17,24,20,20,17,15,18,17,18,17,15,13,15,16,16,20,18,22,20,18]},{"label":"ねいろ速報さん","data":[17,17,17,15,14,17,18,19,18,17,17,15,16,18,17,16,17,15,12,17,17,19,17,17,16,13,16,17]},{"label":"稲妻速報","data":[18,18,21,20,19,19,21,20,21,27,27,22,20,22,25,21,21,25,23,21,20,23,23,23,20,24,21,20]},{"label":"NEWSぽけまとめーる","data":[19,22,23,19,23,25,20,28,32,37,34,32,26,30,33,23,20,28,29,27,22,24,28,26,27,28,26,30]},{"label":"ラビット速報","data":[20,20,20,16,18,20,19,22,25,20,19,19,18,20,16,20,22,20,24,22,19,21,18,22,19,23,23,22]},{"label":"VIPPERな俺","data":[21,28,24,22,26,21,17,17,19,22,24,27,21,17,24,19,25,26,27,20,25,26,27,30,21,25,28,23]},{"label":"おーるじゃんる","data":[22,27,28,28,21,18,23,23,22,21,21,17,22,23,22,24,12,21,21,29,28,10,24,31,32,31,24,24]},{"label":"なんJクエスト","data":[23,19,25,23,20,27,25,26,20,25,23,23,23,21,21,26,26,27,22,23,27,25,29,27,29,30,33,25]},{"label":"あいチャンネル","data":[24,26,75,29,24,24,57,32,23,26,64,24,19,57,26,22,23,51,28,19,50,28,21,51,31,21,25,19]},{"label":"うしみつ-5chまとめ-","data":[25,21,19,24,25,26,28,29,26,29,28,26,24,25,27,28,24,22,25,25,30,31,25,28,30,29,30,26]},{"label":"日刊やきう速報","data":[26,31,29,33,32,33,27,34,30,32,30,34,31,27,32,35,33,32,32,33,33,34,34,32,33,32,34,36]},{"label":"まとめたニュース","data":[27,35,37,34,28,36,29,37,33,44,36,41,40,44,37,47,39,38,45,42,34,36,44,55,45,33,39,37]},{"label":"ゴールデンタイムズ","data":[28,25,27,26,22,23,24,25,27,33,31,25,25,26,23,27,28,19,19,26,21,20,26,29,23,26,29,28]},{"label":"おうまがタイムズ","data":[29,29,35,25,27,39,32,27,31,30,37,31,30,28,28,30,30,24,33,34,23,30,30,33,28,34,38,27]},{"label":"ネギ速","data":[30,24,22,30,29,29,35,35,28,23,22,21,29,35,38,32,31,33,34,35,26,29,31,35,26,27,37,35]},{"label":"ふくよかまるみのピリカラ人生","data":[31,30,30,63,38,31,54,36,51,39,57,36,58,37,66,38,34,59,101,47,69,101,38,66,101,40,61,40]},{"label":"BIPブログ","data":[32,32,26,27,30,28,26,24,24,28,29,28,32,32,31,29,27,29,20,30,24,22,20,21,22,19,17,14]},{"label":"カイカイ反応通信","data":[33,34,36,40,33,34,33,33,37,38,40,37,38,29,36,33,36,34,39,45,35,35,35,40,36,37,32,32]},{"label":"カラパイア","data":[34,39,32,32,31,38,31,31,29,31,26,30,28,31,29,31,29,30,30,36,31,32,32,34,35,35,27,29]},{"label":"ツイッター速報","data":[35,49,78,44,37,60,86,30,34,7,25,65,101,101,101,101,101,101,101,78,57,101,62,85,46,51,80,66]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[36,41,40,37,34,35,44,41,35,35,33,45,35,41,35,42,45,48,53,41,39,48,48,46,43,43,42,42]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[37,43,38,31,45,50,40,38,39,41,38,33,33,39,45,41,41,31,35,37,36,37,37,37,41,39,44,38]},{"label":"乃木坂46まとめ 1/46","data":[38,38,33,39,36,53,56,46,36,47,35,47,55,40,30,34,32,39,31,39,32,39,33,36,24,18,31,34]},{"label":"カオスちゃんねる","data":[39,47,47,46,43,47,38,43,41,49,51,42,45,49,44,50,51,36,42,49,45,49,53,49,49,44,51,50]},{"label":"オタク.com －オタコム－","data":[40,50,41,38,40,44,43,47,44,50,41,39,37,36,43,37,44,46,40,44,38,45,43,39,39,46,45,44]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[41,48,44,42,44,46,45,53,45,48,48,54,48,45,47,46,40,41,46,48,40,42,41,41,38,38,43,43]},{"label":"スズぺぺの人生何とかなってます!!","data":[42,44,42,47,42,43,42,45,60,70,101,48,49,63,101,101,67,93,95,101,101,94,95,87,92,79,84,65]},{"label":"IT速報","data":[43,40,45,36,35,40,37,44,42,40,39,38,41,43,42,36,35,35,38,40,37,40,39,44,42,50,36,31]},{"label":"ポリー速報","data":[44,58,53,51,58,52,52,60,61,62,58,86,67,65,73,64,58,56,52,57,53,57,66,60,56,56,49,56]},{"label":"【2ch】コピペ情報局","data":[45,37,46,53,48,48,36,50,47,46,45,49,43,42,41,48,38,37,36,38,41,41,42,50,47,49,54,39]},{"label":"ついんてーる速報","data":[46,59,43,45,49,51,49,48,46,58,55,50,46,54,51,40,43,50,51,51,46,51,49,45,37,42,41,45]},{"label":"ぱんをたずねて2000里ちょい","data":[47,54,51,54,55,57,47,49,40,52,46,40,39,38,39,43,46,44,50,43,43,38,36,38,68,101,101,101]},{"label":"芸能人の気になる噂","data":[48,53,48,48,47,49,46,54,49,53,47,56,51,46,40,44,48,49,44,46,42,47,52,53,48,45,47,46]},{"label":"ぶる速-VIP","data":[49,33,31,43,41,42,30,16,15,18,18,18,13,14,15,15,19,18,17,18,18,18,19,24,17,17,19,21]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[50,55,54,67,88,88,96,101,100,97,100,101,95,101,101,101,101,101,101,32,29,44,59,63,70,89,98,89]},{"label":"海外の万国反応記＠海外の反応","data":[51,46,50,57,53,45,50,51,52,55,59,51,53,51,48,58,54,52,54,50,44,52,54,56,55,58,46,54]},{"label":"ガールズVIPまとめ","data":[52,45,34,35,39,32,41,39,58,45,42,43,47,47,50,56,47,40,37,56,47,46,51,57,44,53,57,49]},{"label":"あにこ便","data":[53,52,39,49,52,55,53,59,55,51,49,53,54,58,52,52,42,47,48,53,48,53,46,42,40,48,48,51]},{"label":"PS5速報！","data":[54,56,55,56,51,54,55,52,50,59,67,58,50,48,58,62,63,63,55,55,52,56,60,59,53,54,52,47]},{"label":"まとめロッテ！","data":[55,63,56,74,100,86,82,101,101,101,97,90,101,100,85,101,101,92,101,101,101,89,99,93,101,101,99,95]},{"label":"ニュースBUZZ","data":[56,84,84,94,50,41,64,58,43,60,44,59,34,67,69,59,62,54,49,54,60,101,80,43,52,64,55,41]},{"label":"サカラボ | サッカーまとめ速報","data":[57,64,69,75,62,66,48,42,53,57,56,62,69,64,64,68,79,67,66,73,74,74,81,80,66,67,71,87]},{"label":"パチンコ・パチスロ.com","data":[58,69,65,71,59,58,59,61,57,65,62,44,44,55,55,53,59,77,64,60,61,62,50,58,76,70,53,55]},{"label":"ライフハックちゃんねる弐式","data":[59,79,72,64,60,62,58,79,68,68,68,61,61,52,63,60,82,45,56,64,76,66,71,65,57,75,65,57]},{"label":"ずっと日曜日のターン","data":[60,78,58,58,46,98,72,101,64,56,65,52,80,33,76,57,78,76,57,85,55,54,45,78,79,60,50,48]},{"label":"今日速2ch","data":[61,96,98,93,61,73,69,73,93,77,96,67,83,83,59,67,90,88,71,87,96,67,55,54,75,57,35,58]},{"label":"流速VIP","data":[62,60,64,59,63,56,63,66,62,61,66,57,57,61,54,61,52,42,41,52,59,60,61,71,50,47,59,62]},{"label":"馬鳥速報","data":[63,66,86,78,84,61,60,65,73,67,72,74,70,69,65,71,80,87,70,58,71,76,68,67,61,73,90,71]},{"label":"くまおのマンガ堂","data":[64,65,61,60,68,70,68,92,101,88,81,84,89,93,90,80,85,83,91,89,68,65,70,75,74,76,72,64]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[65,70,79,62,65,101,101,68,69,101,74,69,100,62,56,54,50,61,81,99,56,59,63,76,89,62,74,86]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[66,42,57,68,67,65,70,69,63,54,52,60,59,56,60,63,60,64,65,67,65,63,67,70,59,41,40,52]},{"label":"De速","data":[67,68,71,69,56,72,71,56,54,63,61,55,56,53,49,55,49,55,58,61,51,55,56,52,51,61,63,59]},{"label":"やみ速@なんJ西武まとめ","data":[68,90,93,82,94,96,95,85,91,95,99,97,101,101,101,101,101,96,100,101,98,96,94,91,82,101,77,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[69,75,62,50,64,71,51,55,59,42,43,63,75,60,57,39,37,43,43,28,49,58,40,48,54,52,66,69]},{"label":"軍事・ミリタリー速報☆彡","data":[70,80,74,73,69,69,66,67,70,69,75,78,62,72,74,70,76,58,74,71,77,70,73,74,80,83,76,61]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[71,57,59,70,73,67,34,57,77,36,60,66,60,66,77,78,96,53,47,63,63,78,85,77,73,55,70,77]},{"label":"はーとログ","data":[72,72,80,84,81,81,84,80,80,84,83,82,81,90,88,81,88,75,79,93,85,85,75,83,87,85,86,84]},{"label":"2chコピペ保存道場","data":[73,76,77,81,71,63,62,63,72,71,71,70,68,70,61,73,68,69,69,70,67,75,74,68,63,63,62,60]},{"label":"鷹速@ホークスまとめブログ","data":[74,73,76,72,78,68,65,77,81,73,79,80,63,74,72,79,93,85,76,82,73,69,90,98,81,74,89,100]},{"label":"MLB NEWS@まとめ","data":[75,88,96,98,101,101,73,84,94,101,101,101,101,101,101,101,94,97,99,97,99,101,101,101,99,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[76,61,52,61,76,77,101,101,99,93,84,96,86,101,101,88,74,70,88,95,80,68,69,69,72,92,95,68]},{"label":"絵日記でございます。","data":[77,100,101,96,54,59,92,88,79,83,76,91,101,94,86,72,56,57,78,86,100,90,98,88,101,101,101,98]},{"label":"投資ちゃんねる","data":[78,86,68,52,70,76,67,72,71,66,69,76,66,77,67,82,69,66,67,77,70,72,78,81,64,87,79,80]},{"label":"なんJ（まとめては）いかんのか？","data":[79,101,101,101,101,101,81,89,101,91,92,101,96,71,96,101,84,65,68,66,79,87,88,72,71,101,101,88]},{"label":"ジャンプ速報","data":[80,71,67,86,83,83,97,74,78,85,101,73,73,85,82,76,97,71,61,69,72,81,89,101,69,59,56,74]},{"label":"最強ジャンプ放送局","data":[81,95,85,88,77,85,91,82,88,89,78,68,78,88,81,93,87,79,77,68,83,77,93,86,84,68,73,83]},{"label":"人間まおと愉快な仲間たち","data":[82,74,73,77,87,84,77,75,75,74,85,81,77,79,84,65,65,62,59,59,66,71,72,62,67,71,69,67]},{"label":"FF14速報","data":[83,97,101,101,75,100,101,101,92,101,101,75,88,95,101,99,101,101,101,90,89,100,101,101,101,101,88,75]},{"label":"鈴木さん速報","data":[84,93,97,97,93,90,79,64,87,94,93,93,71,76,79,83,71,73,73,76,84,86,87,84,86,95,96,78]},{"label":"働く大人の非常識","data":[85,82,60,55,99,92,101,99,56,78,50,95,91,78,46,66,57,72,62,62,78,61,96,96,83,72,82,53]},{"label":"サカサカ10【サッカーまとめ速報】","data":[86,101,101,101,101,101,87,62,66,64,70,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[87,92,83,99,72,82,94,96,101,80,80,101,82,73,62,86,81,84,82,101,101,92,101,101,101,94,85,85]},{"label":"すや子のブログ","data":[88,83,92,101,80,79,83,71,101,86,88,71,79,50,53,51,53,101,60,65,54,64,57,64,101,69,91,73]},{"label":"まとめブレイド","data":[89,91,70,83,66,64,101,101,95,101,53,88,99,101,75,95,70,86,83,75,93,83,100,95,91,82,78,101]},{"label":"お料理速報","data":[90,101,91,89,101,97,101,101,98,101,87,85,101,96,94,101,101,100,72,101,92,93,101,97,95,90,101,94]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[91,77,66,66,74,74,76,76,86,72,73,79,76,75,78,77,61,68,75,74,87,79,83,73,78,86,97,82]},{"label":"デジタルニューススレッド","data":[92,81,89,90,96,91,88,78,89,92,90,72,92,91,98,90,92,80,86,84,94,101,92,90,85,88,100,92]},{"label":"ゆっぺのゆる漫画ブログ","data":[93,101,101,87,101,87,101,101,67,101,101,101,101,101,101,85,101,101,101,101,75,101,101,94,101,101,101,90]},{"label":"まとめ太郎！","data":[94,89,101,79,92,101,101,93,101,101,101,101,101,89,87,97,77,78,92,88,81,82,84,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,100,101,101,101]},{"label":"大艦巨砲主義！","data":[96,101,94,101,95,93,89,91,97,98,98,101,97,92,100,84,98,101,98,94,91,98,91,89,98,93,93,101]},{"label":"ろぼ速VIP","data":[97,62,81,76,90,89,93,81,84,76,86,87,90,86,83,75,75,82,84,79,86,91,82,82,77,91,81,81]},{"label":"高槻つーしん","data":[98,67,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[99,101,101,101,101,101,99,101,83,101,77,101,72,101,68,101,64,101,63,101,90,101,64,101,62,101,67,101]},{"label":"スカっとクミさん！戦う女の物語","data":[100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,23,13,21,101,30,22,21,96,19,16,16,87,19,20,25,101,23,26,24,101,27,22,19,94,20,18,63]},{"label":"はむらの毎日マンガ","data":[101,36,49,101,101,101,101,101,38,34,63,101,36,59,101,45,55,101,101,31,101,73,58,25,25,36,22,33]},{"label":"マンガと私と猫ブログ。","data":[101,51,63,41,57,101,101,40,48,43,32,29,42,34,34,49,101,101,101,101,101,84,86,101,65,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,85,95,101,101,95,101,87,101,82,54,64,85,84,93,92,66,74,101,101,101,101,101,101,97,99,101,101]},{"label":"つつみのブログ","data":[101,87,101,101,85,101,80,101,76,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,72]},{"label":"アニはつ -アニメ発信場-","data":[101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,99,101,91,101,101,101,101,101,79,101,99,101,68,101,91,101,101,101,83,101,101,101,101,101,101,101,97]},{"label":"気になる芸能まとめ","data":[101,101,82,85,89,94,75,100,85,81,82,94,94,101,91,87,95,81,85,92,101,101,101,101,96,78,94,99]},{"label":"えび通","data":[101,101,87,100,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,80,68,101]},{"label":"おる速","data":[101,101,88,95,82,78,98,94,101,101,101,101,101,97,89,100,83,98,90,98,82,101,101,101,101,97,101,101]},{"label":"かぞくちゃんねる","data":[101,101,90,101,97,101,101,101,101,101,101,101,101,101,99,96,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんでも受信遅報@なんJ・おんJまとめ","data":[101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,100,65,86,101,101,101,101,101,94,101,65,87,101,101,100,101,101,101,101,80,65,61,60,65,75,79]},{"label":"オタクニュース","data":[101,101,101,80,101,101,100,101,101,96,101,101,64,82,101,101,86,101,101,101,101,101,101,92,101,101,101,101]},{"label":"あんころの漫画日和","data":[101,101,101,92,91,75,74,83,82,87,101,100,74,101,97,74,73,101,93,80,101,99,79,101,93,77,83,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,79,37,61,101,101,101,101,101,101,101,80,101,101,101,101,96,101,101,101,101,101,101,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,98,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,22,39,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,101,101,80,85,86,65,90,101,101,101,101,70,69,72,101,101,101,101,101,101,101,101,100,58,101]},{"label":"SAMURAI Footballers","data":[101,101,101,101,101,101,78,70,74,75,91,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,90,95,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,89,91,95,97,101,79,101,101,92,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おたみの日々","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,89,83,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,70]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,95,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,101,101,101,101,101,46,101,101,71,101,101,60,101,72,62,101,101,101,101,101,60,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,77,52,101,92,101,101,90,101,101,58,95,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,101,101,101,101,101,92,84,80,101,101,101,94,96,101,101,101,97,100,101,101,87,91]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,97,101,101,101,101,101,101,93]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,98,91,91,97,101,101,101,101,101,88,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,89,101,101,81,101,101,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,87,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,80,101,64,43,47,47,58,84,64,76]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,98,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,50,76,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,33,101,101,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,77,101,101,101,101,96]},{"label":"猫とくも膜下出血の絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,10,101,66,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,18,34,101,101,101]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101]},{"label":"〜うちのヒフミヨ！４人育児はエンターテインメント〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101]}];
var labels = ['2024-07-01','2024-07-02','2024-07-03','2024-07-04','2024-07-05','2024-07-06','2024-07-07','2024-07-08','2024-07-09','2024-07-10','2024-07-11','2024-07-12','2024-07-13','2024-07-14','2024-07-15','2024-07-16','2024-07-17','2024-07-18','2024-07-19','2024-07-20','2024-07-21','2024-07-22','2024-07-23','2024-07-24','2024-07-25','2024-07-26','2024-07-27','2024-07-28',];var datasets = [{"label":"ガレ速@フォロワー体験漫画","data":[1,3,3,3,3,2,3,3,3,3,2,3,3,3,3,2,3,3,3,4,2,1,2,3,8,8,9,6]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,1,1,2,2,2,3,2,1,2,2,2,1,1]},{"label":"まめきちまめこニートの日常","data":[3,1,1,1,2,4,1,1,1,2,3,1,1,1,1,3,5,1,1,1,1,3,3,1,1,1,2,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[4,4,6,8,8,7,6,8,10,10,12,12,12,12,12,11,11,11,12,11,11,11,10,10,9,9,10,10]},{"label":"はちま起稿","data":[5,5,4,4,4,3,4,4,5,4,4,4,5,5,7,4,2,5,4,5,4,4,4,4,3,3,3,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,7,8,6,6,8,8,6,6,8,8,8,8,7,6,6,7,7,6,7,6,5,5,7,4,6,6,4]},{"label":"ヤゴヴのマンガ劇場","data":[7,8,9,9,10,10,10,11,16,34,24,21,23,25,25,29,28,23,19,20,18,14,12,12,12,12,13,13]},{"label":"痛いニュース(ﾉ∀`)","data":[8,9,7,5,7,5,5,10,8,5,5,5,4,4,4,7,4,4,5,3,7,6,6,5,5,4,5,8]},{"label":"暇つぶしニュース","data":[9,11,10,11,11,11,11,9,9,9,10,10,10,9,8,10,8,8,9,8,5,7,8,8,7,7,8,9]},{"label":"ハムスター速報","data":[10,6,5,7,5,6,9,7,4,6,6,6,7,8,9,8,6,6,7,6,9,9,7,6,6,5,4,7]},{"label":"もちログ","data":[11,10,12,10,9,9,7,5,7,7,7,7,6,6,5,5,29,38,39,48,52,47,46,45,45,38,29,19]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[12,12,11,12,12,13,13,13,11,11,11,11,11,11,10,12,10,10,11,9,10,10,9,9,10,11,11,11]},{"label":"なんJ PRIDE","data":[13,18,18,17,21,18,18,17,19,14,18,16,16,16,15,18,17,21,17,14,17,13,16,19,18,21,19,26]},{"label":"ラビット速報","data":[14,15,16,20,18,17,15,15,15,15,17,15,17,15,17,17,16,16,15,15,14,15,19,17,17,16,15,14]},{"label":"しばたまブログ","data":[15,91,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,17]},{"label":"わんこーる速報！","data":[16,16,14,16,14,15,16,16,13,13,13,13,15,13,14,14,12,13,14,12,12,12,13,16,14,13,12,12]},{"label":"日刊やきう速報","data":[17,23,23,19,27,24,24,19,27,23,23,22,22,19,20,23,23,19,24,18,19,16,22,15,15,24,25,18]},{"label":"【2ch】ニュー速クオリティ","data":[18,19,17,21,20,16,20,18,17,17,16,17,18,18,18,15,13,12,16,16,15,18,18,14,16,14,16,15]},{"label":"哲学ニュースnwk","data":[19,14,15,18,22,20,17,21,18,16,14,14,14,14,13,13,14,14,13,13,16,17,14,13,11,15,14,16]},{"label":"世にも奇妙ななんかの話","data":[20,60,101,101,101,101,101,101,101,101,101,101,101,101,101,101,42,28,101,32,27,27,101,30,24,95,27,24]},{"label":"NEWSぽけまとめーる","data":[21,28,30,26,24,23,28,37,36,24,30,26,27,23,27,26,27,26,27,31,26,22,25,29,32,30,26,30]},{"label":"ねいろ速報さん","data":[22,17,20,23,19,21,19,22,20,18,19,18,20,17,19,16,18,18,20,22,20,20,20,21,21,17,18,22]},{"label":"おーるじゃんる","data":[23,25,19,15,17,14,22,20,14,19,20,20,21,22,16,19,15,15,22,17,13,19,15,23,20,19,20,21]},{"label":"稲妻速報","data":[24,22,24,27,23,22,26,25,23,22,22,23,24,24,22,25,22,20,23,23,21,23,26,22,23,23,24,28]},{"label":"VIPPERな俺","data":[25,30,21,24,28,27,34,26,24,21,15,25,31,21,26,22,24,22,25,21,22,25,17,20,22,20,23,25]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[26,20,22,22,16,19,21,23,21,20,21,19,19,20,21,20,19,17,21,19,23,21,21,18,19,18,17,20]},{"label":"うしみつ-5chまとめ-","data":[27,26,27,25,29,28,30,27,30,26,27,29,32,28,30,31,31,29,29,25,25,24,24,25,27,25,28,29]},{"label":"おうまがタイムズ","data":[28,31,26,30,26,26,25,28,28,29,25,24,29,26,24,24,21,33,26,28,29,30,27,35,30,22,22,27]},{"label":"なんJクエスト","data":[29,29,36,37,33,35,38,34,37,37,35,35,39,32,37,37,37,36,33,36,31,32,39,33,39,41,41,33]},{"label":"ゴールデンタイムズ","data":[30,32,29,29,25,25,23,24,22,27,28,30,25,27,23,21,26,24,18,24,24,26,23,28,26,26,21,23]},{"label":"馬鳥速報","data":[31,24,25,28,30,29,29,36,35,25,34,31,26,35,33,30,20,25,31,26,37,40,35,34,31,28,39,41]},{"label":"カラパイア","data":[32,40,42,41,40,45,47,39,41,42,39,43,47,44,40,39,35,45,45,38,40,36,38,48,49,49,51,56]},{"label":"ぶる速-VIP","data":[33,21,28,31,31,31,32,31,34,30,29,34,37,39,36,36,34,27,28,29,32,29,28,36,33,27,40,44]},{"label":"スズぺぺの人生何とかなってます!!","data":[34,34,34,36,32,32,33,35,33,28,32,32,30,42,35,35,33,34,34,33,35,33,30,32,35,33,35,35]},{"label":"ネギ速","data":[35,39,39,35,35,36,37,33,32,32,33,33,33,30,32,34,39,35,38,35,36,34,31,26,25,29,32,32]},{"label":"あいチャンネル","data":[36,27,66,32,77,30,67,32,25,68,31,70,28,68,29,27,60,32,78,30,30,82,29,73,36,85,34,85]},{"label":"IT速報","data":[37,37,33,33,36,33,31,30,29,33,37,38,41,29,28,32,30,30,32,37,28,35,34,27,29,35,33,37]},{"label":"カイカイ反応通信","data":[38,35,37,44,41,34,36,40,39,40,43,40,40,43,41,42,41,41,37,44,48,41,36,38,40,32,36,34]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[39,61,40,34,34,44,42,38,38,52,46,36,35,31,34,33,32,31,30,42,33,39,32,31,41,36,30,36]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[40,43,31,39,50,64,72,78,64,60,83,71,79,65,62,66,71,80,73,70,71,73,60,40,62,53,59,62]},{"label":"闇落ち女子トーク","data":[41,50,84,97,90,101,101,101,101,101,101,101,101,101,63,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタク.com －オタコム－","data":[42,42,45,48,37,38,45,50,44,45,40,48,46,46,42,44,44,46,50,45,44,38,42,47,47,39,38,42]},{"label":"ガールズVIPまとめ","data":[43,59,55,52,43,41,55,52,55,43,64,56,61,55,43,40,52,55,53,50,45,28,45,53,56,52,52,54]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[44,52,50,54,47,51,51,55,57,49,48,41,51,50,50,50,43,40,44,52,61,52,41,42,55,48,37,49]},{"label":"ぱんをたずねて2000里ちょい","data":[45,38,38,43,55,40,40,53,48,44,36,55,53,54,61,53,77,58,66,55,53,58,52,68,52,56,46,38]},{"label":"芸能人の気になる噂","data":[46,48,46,53,49,52,44,44,54,46,49,46,42,40,39,41,45,48,40,40,42,45,54,52,50,44,44,43]},{"label":"ニュースBUZZ","data":[47,65,58,70,70,68,52,49,42,75,61,66,58,101,56,69,66,51,41,61,84,64,67,61,66,94,80,40]},{"label":"まとめたニュース","data":[48,45,49,51,52,55,63,46,40,41,53,54,59,49,58,51,50,53,63,49,51,43,57,62,53,60,54,45]},{"label":"ポリー速報","data":[49,55,61,58,60,58,61,57,61,61,62,63,66,61,53,56,57,59,54,59,57,65,51,51,59,59,70,52]},{"label":"カオスちゃんねる","data":[50,49,44,50,42,47,48,47,47,51,50,47,44,45,47,47,47,49,48,51,60,57,44,44,57,46,42,47]},{"label":"海外の万国反応記＠海外の反応","data":[51,53,53,55,51,49,57,64,56,55,51,51,49,48,55,52,54,47,49,53,55,54,49,54,54,54,48,50]},{"label":"乃木坂46まとめ 1/46","data":[52,62,60,42,44,62,58,41,26,31,26,27,36,41,51,28,25,37,36,41,50,37,48,43,61,47,63,39]},{"label":"あにこ便","data":[53,47,51,61,57,56,50,45,46,50,55,53,56,52,44,49,51,54,52,57,56,44,47,55,60,55,60,58]},{"label":"ついんてーる速報","data":[54,46,43,57,48,61,43,51,53,54,47,44,45,36,49,45,48,52,51,60,49,49,59,58,44,40,45,57]},{"label":"PS5速報！","data":[55,58,47,45,38,43,46,56,50,48,45,45,43,47,60,48,46,44,42,47,46,51,43,41,42,45,50,46]},{"label":"あんころの漫画日和","data":[56,44,41,63,45,37,41,61,45,38,56,42,38,37,59,46,40,56,43,39,41,63,50,37,43,37,43,63]},{"label":"ずっと日曜日のターン","data":[57,57,65,77,84,65,71,83,77,64,68,83,60,63,78,101,87,63,96,63,63,74,98,63,87,72,97,69]},{"label":"なんJ（まとめては）いかんのか？","data":[58,89,48,40,58,53,49,42,70,62,58,60,57,51,70,54,49,50,64,46,38,42,55,49,34,61,55,53]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[59,54,54,49,53,59,56,54,59,59,57,50,55,53,45,62,53,42,46,43,54,46,33,39,48,43,47,55]},{"label":"人間まおと愉快な仲間たち","data":[60,63,59,59,62,50,39,29,31,35,38,37,34,34,38,38,38,39,35,34,34,31,40,24,28,31,31,31]},{"label":"FF14速報","data":[61,51,32,47,39,48,35,48,43,39,42,49,50,56,54,59,36,43,47,54,64,67,37,46,46,50,56,67]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[62,72,71,68,61,54,60,60,63,66,75,73,70,60,64,57,62,67,65,67,47,53,69,77,79,81,67,68]},{"label":"はむらの毎日マンガ","data":[63,101,101,101,101,101,101,101,101,74,99,101,78,101,101,81,101,101,101,87,101,101,85,101,101,101,101,80]},{"label":"De速","data":[64,75,64,60,63,39,54,62,60,63,44,39,48,64,65,58,55,61,67,69,59,59,58,59,70,42,57,60]},{"label":"登山ちゃんねる","data":[65,64,80,78,81,80,82,76,67,79,72,69,80,79,79,77,80,73,79,76,82,78,77,86,78,89,73,84]},{"label":"パチンコ・パチスロ.com","data":[66,36,52,65,54,46,65,66,49,53,41,52,54,57,67,80,69,74,70,62,67,60,72,60,37,51,49,66]},{"label":"ツイッター速報","data":[67,33,57,14,15,42,86,79,101,92,74,28,13,33,76,43,89,98,8,27,91,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[68,68,56,67,59,60,66,63,62,47,59,59,68,62,48,61,59,75,68,66,62,61,63,66,65,68,66,61]},{"label":"【2ch】コピペ情報局","data":[69,87,87,80,73,78,84,85,92,69,92,93,72,72,85,83,76,60,87,101,65,69,89,64,88,101,75,86]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[70,78,62,71,80,81,91,81,83,90,100,95,96,81,84,84,84,79,81,82,81,71,99,80,85,65,88,81]},{"label":"ライフハックちゃんねる弐式","data":[71,82,82,90,83,77,83,80,71,70,69,72,85,85,82,68,74,87,75,80,70,83,75,83,90,64,87,90]},{"label":"2chコピペ保存道場","data":[72,81,63,69,71,71,76,77,72,76,71,68,82,70,75,75,68,78,74,72,77,72,70,70,67,63,74,72]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[73,73,69,72,68,74,69,71,69,67,63,62,67,69,69,72,64,70,55,68,69,55,66,67,68,66,53,70]},{"label":"MLB NEWS@まとめ","data":[74,94,83,75,86,92,97,84,84,86,90,79,94,93,88,101,88,85,92,84,94,95,84,101,101,91,95,98]},{"label":"投資ちゃんねる","data":[75,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"気になる芸能まとめ","data":[76,101,101,101,101,101,101,101,101,101,101,101,100,99,101,101,101,101,101,101,87,90,100,99,101,96,101,101]},{"label":"デジタルニューススレッド","data":[77,83,81,85,74,79,80,86,76,81,78,65,89,76,74,71,91,89,86,86,80,79,80,84,77,82,84,83]},{"label":"軍事・ミリタリー速報☆彡","data":[78,70,68,76,75,76,78,72,79,78,81,75,75,71,71,64,67,77,72,74,76,75,76,69,80,78,72,79]},{"label":"鈴木さん速報","data":[79,86,91,83,72,83,93,75,74,65,70,74,64,73,83,70,65,76,77,83,78,62,64,75,84,77,79,88]},{"label":"魔界のニュース","data":[80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[81,77,88,95,93,73,77,69,78,87,84,78,87,78,73,74,63,69,60,75,83,76,79,74,71,74,76,75]},{"label":"やみ速@なんJ西武まとめ","data":[82,98,76,62,85,66,70,74,89,84,67,88,88,84,80,73,81,82,62,71,79,81,91,89,64,83,86,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[83,66,89,56,56,57,53,59,58,57,60,58,62,97,101,82,61,86,59,65,66,89,65,71,69,80,101,101]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[84,96,101,92,97,90,94,95,87,99,89,101,90,90,89,92,99,101,95,88,93,91,93,87,89,86,93,100]},{"label":"ダイエット速報＠2ちゃんねる","data":[85,85,94,74,91,101,79,58,80,83,77,101,92,80,94,101,94,101,88,90,73,70,83,85,73,79,62,77]},{"label":"はーとログ","data":[86,80,72,79,76,70,75,73,75,80,79,76,74,74,72,79,83,84,82,73,75,80,71,79,82,88,77,82]},{"label":"ろぼ速VIP","data":[87,92,92,87,87,91,85,91,91,85,86,80,81,83,90,85,85,90,89,89,96,84,86,81,86,62,85,97]},{"label":"働く大人の非常識","data":[88,93,70,66,78,84,59,43,51,58,65,67,52,58,52,60,58,65,56,58,43,48,61,56,94,90,71,71]},{"label":"絵日記でございます。","data":[89,97,75,84,64,82,73,97,73,82,76,77,73,89,68,76,82,68,83,56,58,56,53,50,63,57,65,74]},{"label":"たくあんムスメたち。","data":[90,101,101,101,101,86,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[91,90,100,96,94,94,90,87,95,95,88,86,101,95,100,91,92,95,97,101,86,99,101,90,97,93,100,101]},{"label":"最強ジャンプ放送局","data":[92,76,93,91,82,85,88,89,82,88,93,87,86,82,87,78,79,92,85,92,85,88,74,88,93,87,91,93]},{"label":"あやかずランド","data":[93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,78,101,92,82,82,81,67,101,78]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[95,101,74,101,101,101,101,93,96,101,101,97,97,88,101,95,97,101,100,99,92,97,92,100,100,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[96,101,101,86,101,101,87,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,82,96]},{"label":"うみこのおとぼけぐらし","data":[97,95,67,82,88,72,68,82,65,71,66,64,63,67,57,63,56,57,57,64,39,66,56,57,51,58,58,59]},{"label":"稼げるまとめ速報","data":[98,101,101,88,98,101,81,100,101,101,87,89,84,101,97,101,101,101,101,97,100,94,95,101,95,100,99,101]},{"label":"サカラボ | サッカーまとめ速報","data":[99,99,97,94,89,89,100,99,94,93,98,101,91,94,93,90,86,66,69,85,101,87,78,78,83,75,89,94]},{"label":"まとめロッテ！","data":[100,69,73,89,100,100,99,96,90,100,101,101,83,77,101,99,95,101,101,96,90,101,94,101,99,99,101,101]},{"label":"ニート極道「牧村ユタカ」","data":[101,13,13,13,13,12,12,14,12,12,9,9,9,10,11,9,9,9,10,10,8,8,11,11,13,10,7,5]},{"label":"マンガと私と猫ブログ。","data":[101,41,101,38,101,101,27,101,101,101,52,61,101,101,46,101,101,62,61,101,101,50,81,101,38,101,69,64]},{"label":"サル山の裏マンガ","data":[101,56,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,67,90,73,69,67,89,101,101,97,101,84,95,87,101,88,78,91,76,101,101,101,101,101,101,70,101,101]},{"label":"今日速2ch","data":[101,71,96,101,101,63,62,65,81,101,91,82,65,59,77,55,72,81,90,77,74,77,68,65,72,69,81,73]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,74,78,101,79,75,101,68,66,101,54,57,101,66,101,67,101,64,58,101,68,101,62,101,58,101,61,65]},{"label":"鷹速@ホークスまとめブログ","data":[101,84,86,101,101,93,101,101,101,101,101,101,99,101,99,89,96,100,101,101,89,96,101,101,101,101,101,101]},{"label":"バズッター速報","data":[101,88,101,98,101,99,101,101,101,36,80,101,71,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,100,101,100,95,98,98,88,93,94,96,100,93,91,96,97,101,97,101,100,97,93,87,97,101,97,98,95]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,35,46,66,87,92,92,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,79,101,101,101,101,101,101,89,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101]},{"label":"投資ちゃんねる","data":[101,101,85,81,67,69,64,67,68,73,82,85,69,75,86,86,70,88,80,79,72,85,73,72,76,71,78,91]},{"label":"バイク速報","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,99,64,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,93,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,99,65,101,101,101,101,101,101,81,101,101,101,101,101,71,101,101,101,101,101,76,101,101,101,101]},{"label":"ふれにゅー","data":[101,101,101,101,46,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,92,96,95,94,88,101,101,96,101,98,81,98,90,93,99,91,98,101,96,91,98,84,90,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,96,97,14,12,52,56,85,90,76,100,66,93,101,99,71,93,99,68,90,101,101,101,101,87]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[101,101,101,101,101,95,101,101,101,101,101,99,101,101,101,100,101,101,101,101,101,101,101,101,101,101,94,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,70,101,91,95,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,90,85,101,101,101,101,101,101,96,101,94,94,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,98,99,96,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,73,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,86,98,94,101,98,92,92,87,98,101,98,81,88,98,97,93,74,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,77,73,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トレカ相場最新ランキング[販売買取価格]","data":[101,101,101,101,101,101,101,101,101,101,101,101,77,38,31,65,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"メイドカフェぴなふぉあ・公式ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"崖っぷちのトニョ（糖尿）ギニオン　膵臓がんと闘う！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,93,94,101,101,101,101,101,92,101,101]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,95,101,101,95,96,101,96,89]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,98,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,75,101,101,101]},{"label":"ぽん子の不倫スカッと漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,92,76,64,48]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,76]},{"label":"場末Ｐ科病院の精神科医のblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,68,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,92,101]},{"label":"重役秘書リナ【完全版】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,51]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]}];
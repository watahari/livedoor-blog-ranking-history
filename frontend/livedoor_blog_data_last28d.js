var labels = ['2024-04-17','2024-04-18','2024-04-19','2024-04-20','2024-04-21','2024-04-22','2024-04-23','2024-04-24','2024-04-25','2024-04-26','2024-04-27','2024-04-28','2024-04-29','2024-04-30','2024-05-01','2024-05-02','2024-05-03','2024-05-04','2024-05-05','2024-05-06','2024-05-07','2024-05-08','2024-05-09','2024-05-10','2024-05-11','2024-05-12','2024-05-13','2024-05-14',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,1,2,2,2,2,1,1,2,2,2,1,1,3,2,2,2,2,1,1,2,2,2,2,1,1,2,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[2,4,4,4,4,3,3,5,4,3,3,3,4,5,4,5,4,4,4,5,3,3,4,4,4,3,6,5]},{"label":"まめきちまめこニートの日常","data":[3,2,1,1,1,1,2,2,1,1,1,2,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1]},{"label":"はちま起稿","data":[4,3,3,3,3,4,4,3,3,4,4,4,3,4,3,4,3,3,3,3,4,4,3,3,3,5,3,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,6,5,5,7,5,7,6,6,7,8,9,7,7,6,7,8,8,6,4,5,5,5,5,5,8,7,7]},{"label":"ハムスター速報","data":[6,5,6,7,6,7,6,7,5,5,5,6,8,9,5,3,5,7,9,9,8,7,7,7,6,7,5,4]},{"label":"痛いニュース(ﾉ∀`)","data":[7,7,7,6,8,6,5,4,7,6,6,5,6,8,7,6,6,6,7,7,6,6,6,6,7,4,4,6]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[8,9,8,9,11,10,8,11,9,10,10,10,10,11,10,9,11,10,10,10,10,10,9,9,9,9,9,9]},{"label":"暇つぶしニュース","data":[9,8,9,8,5,8,9,8,10,9,9,8,5,6,9,10,9,9,8,8,9,9,8,8,8,6,8,8]},{"label":"ヤゴヴのマンガ劇場","data":[10,12,13,11,9,9,10,9,8,8,7,7,9,10,8,8,7,5,5,6,7,8,15,34,30,27,29,29]},{"label":"哲学ニュースnwk","data":[11,10,10,15,10,12,16,14,14,15,15,14,13,15,15,14,15,15,15,12,14,13,13,10,10,16,13,16]},{"label":"BIPブログ","data":[12,13,14,12,13,15,13,13,11,12,16,15,14,16,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ PRIDE","data":[13,14,11,13,12,13,14,12,12,13,12,13,11,14,13,12,12,11,11,11,12,12,10,11,13,11,10,12]},{"label":"わんこーる速報！","data":[14,16,15,14,14,17,17,17,13,14,13,12,12,13,14,13,14,14,13,13,11,11,11,13,11,12,12,11]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[15,18,18,23,19,21,20,20,21,23,23,23,22,24,25,19,17,18,17,14,18,18,12,14,14,13,11,10]},{"label":"【2ch】ニュー速クオリティ","data":[16,17,17,16,16,18,19,18,16,16,19,17,16,19,16,15,13,13,16,15,15,16,14,12,12,15,14,14]},{"label":"ぶる速-VIP","data":[17,15,16,20,21,14,15,16,15,17,18,19,15,18,18,20,20,20,25,21,25,28,27,29,45,30,40,31]},{"label":"ねいろ速報さん","data":[18,21,22,18,17,19,18,19,19,20,22,20,18,17,19,21,19,19,19,16,17,19,21,18,22,18,16,13]},{"label":"日刊やきう速報","data":[19,22,21,19,15,20,23,23,17,22,21,21,20,21,20,16,21,16,18,19,13,15,16,20,15,10,17,24]},{"label":"VIPPERな俺","data":[20,23,23,25,29,31,22,27,28,25,28,29,30,29,29,26,22,27,27,33,28,27,22,30,21,23,30,27]},{"label":"ラビット速報","data":[21,19,20,21,18,22,21,21,20,21,20,22,21,25,24,17,18,21,20,18,16,17,17,15,16,14,15,15]},{"label":"おーるじゃんる","data":[22,20,19,17,31,30,29,32,31,29,30,16,19,20,23,25,24,25,14,26,21,25,26,19,19,20,23,20]},{"label":"うしみつ-5chまとめ-","data":[23,25,28,24,23,23,25,28,24,26,26,26,25,26,22,24,25,23,24,22,26,24,25,24,26,24,20,18]},{"label":"稲妻速報","data":[24,26,26,27,24,27,27,26,26,30,25,24,24,23,21,22,23,22,23,24,20,20,23,21,25,21,18,17]},{"label":"NEWSぽけまとめーる","data":[25,28,29,22,27,28,36,24,23,28,27,31,27,27,31,33,30,31,26,27,27,21,20,23,27,22,24,21]},{"label":"なんJクエスト","data":[26,30,32,30,26,26,33,29,27,32,32,28,32,36,35,30,29,32,32,28,30,30,28,26,29,31,26,26]},{"label":"ゴールデンタイムズ","data":[27,27,31,26,25,25,24,25,25,27,24,27,31,28,30,29,27,26,30,29,24,26,19,22,24,25,25,19]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[28,31,33,31,28,24,26,22,18,19,14,18,17,22,26,27,26,34,34,31,35,31,35,43,33,37,33,22]},{"label":"ネギ速","data":[29,32,34,36,32,29,34,37,42,34,34,37,38,43,28,36,36,37,37,36,39,36,34,35,38,39,31,28]},{"label":"もちログ","data":[30,24,25,29,30,34,28,30,33,33,40,30,26,30,27,18,16,12,12,17,19,14,18,16,17,17,59,34]},{"label":"De速","data":[31,36,35,50,56,37,42,51,54,47,51,35,44,49,52,38,33,41,52,46,36,29,40,39,41,28,37,64]},{"label":"カイカイ反応通信","data":[32,35,36,32,37,40,43,39,37,37,29,32,41,38,33,34,37,33,33,34,34,33,33,28,34,44,43,35]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[33,44,37,35,42,39,37,35,51,40,52,39,36,50,46,42,49,39,42,38,33,51,39,52,43,35,32,51]},{"label":"ぱんをたずねて2000里ちょい","data":[34,42,40,44,51,50,49,43,38,39,39,44,43,46,36,59,64,63,62,53,56,62,61,53,54,42,36,44]},{"label":"カラパイア","data":[35,39,38,33,36,36,35,31,30,36,37,36,40,45,39,37,41,24,39,37,38,39,36,38,37,41,35,30]},{"label":"芸能人の気になる噂","data":[36,38,41,41,38,43,38,42,44,45,47,41,39,41,49,44,52,42,45,43,45,47,43,41,44,50,44,43]},{"label":"世にも奇妙ななんかの話","data":[37,11,12,10,48,11,11,10,41,11,11,11,58,12,11,11,10,62,101,101,101,101,101,101,101,101,53,42]},{"label":"オタク.com －オタコム－","data":[38,43,43,47,40,46,44,40,47,48,46,43,42,42,41,43,45,44,38,42,43,41,37,36,40,38,38,33]},{"label":"IT速報","data":[39,45,42,48,43,38,32,38,39,41,38,42,37,35,43,41,42,36,41,39,37,38,38,32,35,34,41,36]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[40,37,44,54,47,42,48,36,35,35,43,46,56,39,44,48,53,47,50,52,47,40,30,46,55,46,52,53]},{"label":"ずっと日曜日のターン","data":[41,64,83,68,65,69,80,57,88,56,65,79,64,71,61,64,59,60,75,54,57,61,59,66,60,64,49,56]},{"label":"ガールズVIPまとめ","data":[42,51,50,45,45,55,50,47,48,38,45,49,46,34,45,47,43,40,47,48,40,35,42,33,42,47,50,49]},{"label":"乃木坂46まとめ 1/46","data":[43,48,46,39,22,32,12,33,34,42,41,33,23,31,40,32,39,38,21,23,41,49,41,44,31,32,22,23]},{"label":"ついんてーる速報","data":[44,53,47,55,52,45,52,59,57,55,56,51,54,51,47,40,40,45,49,40,49,52,58,45,47,101,101,101]},{"label":"まとめたニュース","data":[45,34,27,34,49,51,47,46,53,60,59,50,48,57,56,50,32,46,55,50,52,65,50,40,39,48,39,46]},{"label":"【2ch】コピペ情報局","data":[46,49,45,51,54,56,45,49,49,53,60,48,49,47,48,49,46,53,46,49,50,44,51,51,48,54,54,52]},{"label":"パチンコ・パチスロ.com","data":[47,60,58,61,70,63,59,53,40,49,61,65,29,40,62,55,44,50,63,65,59,57,48,54,62,59,63,32]},{"label":"カオスちゃんねる","data":[48,54,49,46,50,48,40,41,45,43,54,56,55,53,58,46,54,51,51,45,46,53,46,47,53,55,47,37]},{"label":"海外の万国反応記＠海外の反応","data":[49,52,51,52,44,60,54,52,50,51,53,60,60,54,53,52,48,57,48,55,51,42,47,42,49,56,55,54]},{"label":"スズぺぺの人生何とかなってます!!","data":[50,66,78,80,90,93,87,91,90,88,78,84,84,80,87,81,86,84,80,70,67,68,62,59,61,60,58,59]},{"label":"くまおのマンガ堂","data":[51,50,66,53,55,47,51,50,43,44,44,45,47,55,60,66,92,64,71,86,71,70,73,93,68,81,79,98]},{"label":"うみこのおとぼけぐらし","data":[52,46,59,59,63,68,67,54,58,72,101,38,98,37,42,54,51,49,56,44,48,45,45,50,50,51,56,47]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[53,59,61,49,39,49,61,63,61,62,55,53,45,48,57,53,55,58,59,56,42,46,53,49,59,58,62,65]},{"label":"あにこ便","data":[54,56,54,56,58,54,53,56,59,57,57,58,57,58,59,61,58,56,57,51,54,54,54,57,57,57,51,48]},{"label":"流速VIP","data":[55,63,56,62,60,59,62,61,60,58,69,59,62,62,64,58,57,71,64,60,58,50,55,65,65,67,57,58]},{"label":"なんJ（まとめては）いかんのか？","data":[56,47,60,60,41,35,56,45,46,50,48,52,50,52,63,51,50,35,44,41,32,56,44,69,52,36,45,45]},{"label":"ポリー速報","data":[57,55,52,58,53,52,57,60,56,68,62,47,53,60,55,60,56,52,53,47,44,43,56,55,58,43,46,50]},{"label":"健康主婦のゆるり日和(旧・天使な小悪魔たち)","data":[58,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おうまがタイムズ","data":[59,41,24,28,33,41,39,34,29,31,31,34,28,33,37,28,31,30,36,25,23,22,29,27,28,29,28,25]},{"label":"PS5速報！","data":[60,57,57,57,59,61,58,55,55,59,50,54,52,56,51,45,47,48,61,58,53,48,49,48,46,49,61,41]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[61,62,39,38,57,64,64,62,64,61,33,62,63,59,66,68,65,61,66,66,63,60,57,63,66,68,67,61]},{"label":"YoMuRy - ヨムリー -","data":[62,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"働く大人の非常識","data":[63,61,72,91,89,62,60,76,66,82,73,64,67,91,74,97,70,65,54,59,72,101,60,56,63,79,92,55]},{"label":"馬鳥速報","data":[64,73,68,64,74,80,66,77,62,46,49,85,69,84,86,76,68,101,101,76,73,59,67,74,51,65,77,66]},{"label":"軍事・ミリタリー速報☆彡","data":[65,70,71,65,68,67,75,65,72,76,88,75,88,85,81,73,79,73,82,68,75,86,86,80,79,96,74,75]},{"label":"MLB NEWS@まとめ","data":[66,101,90,94,101,84,77,81,84,70,72,77,73,86,93,88,80,92,88,83,55,63,66,81,81,83,95,96]},{"label":"はーとログ","data":[67,68,62,73,80,72,86,73,86,75,89,80,81,70,78,74,88,79,67,74,80,87,78,72,82,86,78,87]},{"label":"今日速2ch","data":[68,76,94,67,35,58,82,79,77,54,58,57,61,61,75,71,76,96,76,99,62,64,63,68,92,80,66,70]},{"label":"FF14速報","data":[69,95,77,83,81,101,65,82,81,87,85,101,99,101,99,101,101,98,101,101,101,71,101,99,69,92,84,101]},{"label":"登山ちゃんねる","data":[70,85,82,85,71,82,69,70,71,95,81,91,90,82,91,83,85,89,97,78,95,77,87,86,96,101,85,76]},{"label":"ライフハックちゃんねる弐式","data":[71,67,67,69,75,76,70,74,80,67,63,61,78,65,67,67,63,75,94,69,64,80,89,62,74,61,70,68]},{"label":"はむらの毎日マンガ","data":[72,74,30,40,20,16,55,15,22,52,17,25,59,66,17,31,67,17,29,63,22,32,81,101,18,33,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[73,90,85,101,98,86,94,68,87,101,97,69,101,101,101,101,82,101,101,101,69,66,101,101,101,72,90,101]},{"label":"ツイッター速報","data":[74,89,48,101,91,101,101,101,101,81,101,101,77,1,12,35,77,68,40,101,101,101,80,101,101,63,101,101]},{"label":"ジャンプ速報","data":[75,91,69,93,83,71,68,67,92,74,87,70,82,63,73,91,91,90,84,57,76,72,84,85,101,91,93,93]},{"label":"2chコピペ保存道場","data":[76,83,63,66,73,73,78,72,68,79,74,67,66,74,71,70,74,76,72,67,65,73,79,77,75,69,65,63]},{"label":"ニュースBUZZ","data":[77,69,101,81,62,44,63,97,70,100,66,55,68,64,50,57,60,54,68,94,60,85,52,79,73,53,64,69]},{"label":"投資ちゃんねる","data":[78,82,76,77,67,70,73,71,73,69,76,78,71,68,70,65,71,69,70,64,74,55,72,67,77,75,86,82]},{"label":"ぽんぽん子育て","data":[79,65,101,101,101,101,98,90,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[80,33,84,42,99,101,41,84,36,90,35,88,34,79,32,79,28,70,28,77,29,67,24,61,23,62,19,57]},{"label":"あいチャンネル","data":[81,29,65,43,85,33,31,69,32,71,36,87,35,72,34,87,35,80,35,73,101,37,75,31,78,101,34,71]},{"label":"絵日記でございます。","data":[82,84,93,70,77,75,101,99,74,63,68,73,97,88,69,82,38,55,86,101,98,76,64,60,56,26,21,40]},{"label":"ダイエット速報＠2ちゃんねる","data":[83,79,73,90,64,66,89,92,99,73,84,66,75,78,77,62,73,43,60,71,61,89,91,82,87,77,94,78]},{"label":"鈴木さん速報","data":[84,93,80,97,84,78,83,78,79,77,77,90,83,76,76,77,78,78,92,81,81,81,77,71,76,71,68,72]},{"label":"デジタルニューススレッド","data":[85,94,79,74,76,79,88,88,91,89,86,83,87,94,84,95,96,85,81,82,83,90,92,89,86,70,89,83]},{"label":"お料理速報","data":[86,100,97,84,96,81,79,89,95,101,101,101,76,92,92,86,101,101,101,90,78,83,70,92,101,101,81,91]},{"label":"ろぼ速VIP","data":[87,92,70,78,79,74,85,80,83,78,80,68,85,87,89,92,87,82,90,84,87,84,83,87,83,94,80,81]},{"label":"サカラボ | サッカーまとめ速報","data":[88,81,88,100,78,88,90,96,93,83,70,72,89,95,72,80,90,94,65,75,97,100,85,101,98,99,87,92]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[89,71,64,92,61,65,101,101,65,84,101,71,101,89,65,72,72,93,95,89,101,92,65,78,95,78,60,67]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[90,87,81,82,69,57,72,64,78,92,75,86,80,90,85,78,81,77,83,61,79,88,68,64,64,73,72,62]},{"label":"稼げるまとめ速報","data":[91,101,100,87,101,101,91,101,101,101,98,93,101,101,101,101,101,101,101,101,101,101,95,100,101,101,101,88]},{"label":"野球お絵かき@なんJまとめ","data":[92,58,55,63,46,53,101,101,67,65,83,63,72,75,68,56,75,59,69,95,68,75,96,101,71,76,99,101]},{"label":"日向坂46まとめ速報","data":[93,101,101,76,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[94,101,95,71,82,87,93,85,94,86,71,81,86,99,83,96,83,72,79,101,96,78,88,101,100,88,71,101]},{"label":"最強ジャンプ放送局","data":[95,96,86,95,87,90,74,83,85,80,90,74,79,69,82,90,84,91,89,88,85,96,82,84,91,82,75,60]},{"label":"おる速","data":[96,86,92,101,95,95,101,101,101,101,94,97,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[97,88,101,79,66,96,101,101,101,101,101,99,101,101,101,100,98,86,85,96,88,101,101,101,101,101,98,77]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[98,101,101,101,101,98,101,94,101,101,96,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[99,98,87,99,88,92,101,95,100,94,95,96,93,97,101,101,101,100,98,98,99,101,99,90,94,100,91,99]},{"label":"やみ速@なんJ西武まとめ","data":[100,101,101,89,72,101,101,66,69,91,101,89,70,67,79,69,89,88,87,80,66,94,98,94,85,85,76,74]},{"label":"マンガと私と猫ブログ。","data":[101,40,53,37,34,101,30,44,101,18,42,101,33,32,80,23,34,97,43,20,94,23,31,17,32,19,27,84]},{"label":"まとめブレイド","data":[101,72,101,101,101,101,101,75,101,101,101,101,100,83,101,94,101,101,101,101,101,101,101,101,101,90,101,90]},{"label":"五箇野人の海外旅日記","data":[101,75,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,77,101,101,101,101,101,101,82,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,70,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,80,101,75,101,101,81,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,72,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,97,98,101,101,101,97,58,63,24,67,101,101,98,97,101,95,87,101,101,101,95,101,101,101,98,101,101]},{"label":"かぞくちゃんねる","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,100,95,101,94,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,89,101,101,101,101,101,101,64,64,101,101,101,96,63,101,101,101,101,101,69,101,25,20,45,101,101]},{"label":"気になる芸能まとめ","data":[101,101,91,101,101,100,92,101,101,101,101,101,101,101,101,101,101,101,101,91,82,91,93,97,101,101,96,101]},{"label":"大艦巨砲主義！","data":[101,101,96,86,101,97,95,101,101,98,100,98,96,77,100,101,101,99,96,101,101,101,101,96,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,99,72,86,83,46,48,52,66,82,76,51,44,54,85,62,66,73,35,86,93,97,83,88,97,100,100]},{"label":"資格ちゃんねる","data":[101,101,101,88,101,101,84,87,101,101,101,101,94,101,90,99,101,101,100,100,100,97,90,88,90,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,101,96,94,94,96,93,89,101,101,101,101,101,101,101,101,101,101,101,101,82,100,95,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"闇落ち女子トーク","data":[101,101,101,101,92,77,101,101,101,96,101,101,101,101,88,101,101,101,101,72,77,101,71,70,93,66,101,73]},{"label":"えび通","data":[101,101,101,101,93,101,101,101,96,101,101,95,95,96,101,101,101,101,101,101,101,99,101,101,101,95,88,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,85,76,86,97,85,92,101,74,73,98,101,101,101,101,87,84,101,101,91,89,84,83,85]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,89,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチジローの花のおブログ","data":[101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,92,89,101,101,73,101,93,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,71,101,101,101,101,92,101,101,101,101,97,83,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,100,98,101,99,100,92,93,94,98,100,101,101,93,90,79,74,76,80,87,82,79]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,76,93,101,101,101,101,101,101,101,101,101,101,101,101,101,58,67,89,97,89]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,98,94,101,84,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,40,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"IEbiyori  鹿児島 整理収納アドバイザー","data":[101,101,101,101,101,101,101,101,101,101,101,82,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あんころの漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80]},{"label":"青木ぼんろの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"てにくまちゃん。のもっと不思議で怖い話","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,38,39,69,67,93,97,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,66,81,77,62,70,58,69,75,97,74,69,95]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,61,28,31,30,31,34,32,37,36,40,42,38]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"etusivu note","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,29,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,91,101,101,101,101,101,99,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,78,101,101,101,101,101,101,101,73,97]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,22,32,101,101,101,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,58,79,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,85,101,101,101,101,101,101,101,101]},{"label":"ゴジラまとめ情報　ゴジラボ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,52,48,39]},{"label":"くま母もよう","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94]}];
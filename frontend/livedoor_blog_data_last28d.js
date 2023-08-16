var labels = ['2023-07-20','2023-07-21','2023-07-22','2023-07-23','2023-07-24','2023-07-25','2023-07-26','2023-07-27','2023-07-28','2023-07-29','2023-07-30','2023-07-31','2023-08-01','2023-08-02','2023-08-03','2023-08-04','2023-08-05','2023-08-06','2023-08-07','2023-08-08','2023-08-09','2023-08-10','2023-08-11','2023-08-12','2023-08-13','2023-08-14','2023-08-15','2023-08-16',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]},{"label":"カラパイア","data":[3,10,12,17,6,9,17,19,21,16,12,14,28,27,29,22,15,7,6,3,4,10,15,16,16,6,8,9]},{"label":"はちま起稿","data":[4,4,3,3,4,4,3,4,4,5,3,4,4,3,4,4,3,3,4,4,3,3,3,3,4,3,4,4]},{"label":"ハムスター速報","data":[5,3,4,5,7,5,4,3,3,3,4,6,3,4,3,3,4,4,3,5,5,4,4,5,3,7,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,5,5,4,5,6,5,5,5,4,6,7,6,6,6,5,5,6,7,7,7,5,5,4,6,5,5,7]},{"label":"痛いニュース(ﾉ∀`)","data":[7,7,7,7,3,3,6,6,7,8,7,9,7,5,5,6,6,8,8,8,8,6,6,7,7,10,7,5]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[8,6,6,6,8,11,7,7,6,6,5,5,5,7,8,7,7,5,5,6,6,7,8,8,5,4,6,6]},{"label":"暇つぶしニュース","data":[9,9,9,8,10,7,10,9,9,7,9,8,10,10,10,9,9,11,10,11,9,9,9,6,8,8,11,8]},{"label":"哲学ニュースnwk","data":[10,11,11,11,11,8,9,10,10,9,8,11,9,9,7,10,10,13,13,10,10,8,7,10,10,12,10,11]},{"label":"アルファルファモザイク","data":[11,8,8,9,9,10,8,8,8,20,11,10,8,8,9,8,11,12,12,12,12,11,10,9,9,9,9,10]},{"label":"ヤゴヴのマンガ劇場","data":[12,12,10,10,12,12,11,12,14,10,10,12,11,13,14,36,52,41,33,32,30,29,25,21,18,21,16,15]},{"label":"【2ch】ニュー速クオリティ","data":[13,13,14,13,13,14,12,11,12,11,13,13,12,11,11,12,14,15,15,14,14,14,12,11,11,14,13,13]},{"label":"Jnews1","data":[14,48,101,35,19,59,101,101,101,101,97,45,101,101,101,101,101,101,101,101,101,101,72,53,68,101,101,55]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[15,14,18,21,20,13,15,14,16,15,16,21,17,16,20,17,22,21,16,16,15,15,19,18,17,18,17,14]},{"label":"ねいろ速報さん","data":[16,16,17,16,16,17,21,20,19,17,18,19,13,17,19,19,16,18,17,17,16,17,17,15,13,15,15,16]},{"label":"ぶる速-VIP","data":[17,15,16,12,15,20,18,16,20,19,20,22,16,22,25,20,23,17,22,20,21,18,16,17,21,22,23,20]},{"label":"人間まおと愉快な仲間たち","data":[18,20,24,26,30,28,25,18,13,12,21,23,19,18,17,14,12,10,9,9,11,12,11,14,15,16,12,12]},{"label":"NEWSぽけまとめーる","data":[19,21,21,20,22,21,13,22,26,23,29,20,21,25,26,28,19,20,20,15,17,21,21,22,20,11,19,21]},{"label":"わんこーる速報！","data":[20,18,19,23,21,16,16,17,18,18,19,17,20,19,16,16,17,19,21,22,18,19,22,19,19,20,18,23]},{"label":"VIPPERな俺","data":[21,24,34,33,35,29,29,26,33,30,33,32,32,39,36,32,30,26,30,35,28,22,27,35,34,31,32,30]},{"label":"BIPブログ","data":[22,26,13,14,14,15,20,13,11,13,14,15,18,14,13,15,21,16,18,19,19,23,18,13,12,13,14,18]},{"label":"もちログ","data":[23,17,15,15,17,19,14,15,17,14,15,18,15,12,12,13,13,14,14,13,13,13,13,12,14,17,20,17]},{"label":"なんJ PRIDE","data":[24,23,22,22,18,18,19,21,22,21,17,16,14,20,18,18,20,22,19,18,22,20,20,20,22,23,24,19]},{"label":"おうまがタイムズ","data":[25,28,23,18,23,25,27,23,23,22,26,27,27,30,27,21,18,23,28,27,20,16,23,23,23,25,22,26]},{"label":"ツイッター速報","data":[26,37,43,19,34,31,36,39,15,26,27,26,29,15,15,11,8,9,11,25,48,42,14,25,42,47,34,27]},{"label":"ふくよかまるみのピリカラ人生","data":[27,27,20,24,24,23,24,24,24,25,25,30,23,32,22,37,26,38,25,42,29,40,24,49,57,29,62,54]},{"label":"稲妻速報","data":[28,25,29,27,25,32,26,25,28,27,23,28,22,23,24,23,24,25,24,24,23,25,29,31,25,28,30,29]},{"label":"ネギ速","data":[29,33,36,40,32,35,37,35,36,37,40,38,34,37,33,35,35,33,35,37,35,31,36,29,28,33,33,36]},{"label":"日刊やきう速報","data":[30,22,33,32,26,27,31,30,34,24,24,33,35,35,30,34,29,29,29,34,34,32,28,28,33,24,35,32]},{"label":"あいチャンネル","data":[31,19,32,75,29,34,23,33,25,34,70,101,26,31,21,29,27,42,39,21,31,24,35,24,31,69,29,35]},{"label":"なんJクエスト","data":[32,34,30,28,27,24,30,27,29,31,22,25,24,21,23,26,33,27,26,29,25,33,34,26,24,19,25,22]},{"label":"ゴールデンタイムズ","data":[33,32,25,31,33,26,34,31,31,28,31,31,25,24,31,24,25,32,23,28,24,28,26,32,27,30,21,24]},{"label":"ラビット速報","data":[34,29,28,25,28,33,32,29,27,29,30,29,30,26,28,27,28,24,27,31,26,26,32,27,26,27,27,25]},{"label":"おーるじゃんる","data":[35,31,31,29,31,22,22,32,30,32,28,34,31,29,32,33,32,28,32,30,32,30,33,33,35,32,31,28]},{"label":"まとめたニュース","data":[36,36,42,34,36,39,33,38,38,42,34,35,39,33,37,38,37,40,38,40,38,35,38,36,38,36,39,38]},{"label":"はむらの毎日マンガ","data":[37,30,26,46,101,36,28,28,50,101,32,24,44,28,44,30,41,30,45,26,41,99,30,37,32,53,99,34]},{"label":"ゆっぺのゆる漫画ブログ","data":[38,52,101,37,72,101,41,59,101,35,101,101,38,54,101,39,45,47,70,43,66,34,58,101,101,45,87,101]},{"label":"カイカイ反応通信","data":[39,41,39,45,40,41,40,37,43,36,38,41,40,34,35,41,36,36,42,41,40,41,37,38,39,39,40,41]},{"label":"山田全自動のあるある日記","data":[40,35,37,86,43,51,93,55,45,78,101,101,56,36,56,99,48,37,34,33,33,39,56,62,55,43,26,31]},{"label":"うしみつ-5chまとめ-","data":[41,38,38,38,37,38,35,34,32,33,35,37,36,40,34,31,34,31,31,23,27,27,31,30,29,26,28,33]},{"label":"馬鳥速報","data":[42,57,50,66,67,44,56,64,68,50,37,47,67,73,57,58,47,62,63,55,64,67,70,66,77,74,64,57]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[43,43,46,47,53,54,44,51,56,52,55,55,53,46,46,48,50,46,52,48,46,36,48,50,47,46,37,40]},{"label":"世にも奇妙ななんかの話","data":[44,40,44,36,94,101,101,101,101,101,101,75,51,45,39,43,101,50,48,39,36,37,101,34,36,34,38,101]},{"label":"IT速報","data":[45,42,40,42,45,43,42,36,39,38,43,36,37,42,38,40,42,45,40,38,37,43,41,39,40,40,36,39]},{"label":"ニュースBUZZ","data":[46,45,53,60,48,72,50,58,44,74,65,56,62,52,42,51,58,57,46,57,81,48,43,85,56,35,51,84]},{"label":"乃木坂46まとめ 1/46","data":[47,49,47,41,44,40,39,43,52,43,44,39,47,56,61,46,31,34,36,44,42,38,44,44,43,37,44,48]},{"label":"パチンコ・パチスロ.com","data":[48,50,62,88,59,53,60,60,55,51,64,77,59,64,73,62,65,56,72,45,45,51,47,42,73,68,54,72]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[49,46,41,44,46,42,38,45,41,41,41,42,41,55,41,49,43,44,37,46,62,47,39,40,48,44,49,43]},{"label":"気になる芸能まとめ","data":[50,47,55,48,39,49,49,47,49,46,39,44,49,47,48,50,46,43,47,47,52,50,49,48,46,48,42,42]},{"label":"ガールズVIPまとめ","data":[51,66,52,39,42,50,51,40,35,45,42,50,45,38,50,44,38,35,41,50,56,53,40,46,45,49,50,44]},{"label":"De速","data":[52,44,57,63,55,55,73,49,54,57,56,69,55,57,70,56,44,48,44,36,39,56,46,45,49,50,45,61]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[53,55,49,51,52,46,55,42,42,53,48,46,52,53,60,53,53,55,43,58,57,52,55,52,53,41,53,51]},{"label":"【2ch】コピペ情報局","data":[54,58,51,49,54,48,47,53,47,44,47,52,43,44,47,45,39,39,53,56,51,46,50,47,44,52,46,46]},{"label":"流速VIP","data":[55,63,65,68,62,66,66,66,76,63,61,57,57,59,75,67,71,60,58,67,72,65,57,72,66,57,57,63]},{"label":"オタク.com －オタコム－","data":[56,56,54,50,57,52,52,46,48,49,52,48,48,50,49,52,49,52,49,49,49,54,51,51,41,51,43,47]},{"label":"ついんてーる速報","data":[57,73,59,70,68,67,75,56,75,69,72,63,54,70,66,42,59,67,60,85,86,63,67,58,70,63,71,60]},{"label":"ポリー速報","data":[58,54,60,53,51,47,46,48,65,55,46,49,58,60,55,55,57,51,55,51,50,49,63,43,62,56,47,52]},{"label":"鷹速@ホークスまとめブログ","data":[59,70,85,57,65,58,63,79,81,54,58,94,77,76,67,80,73,88,87,80,69,78,78,78,88,80,66,75]},{"label":"カオスちゃんねる","data":[60,59,56,58,56,61,58,50,51,59,50,54,50,49,52,54,62,54,54,52,59,70,53,41,54,54,48,53]},{"label":"ぱんをたずねて2000里ちょい","data":[61,51,66,83,49,60,45,57,46,58,53,43,46,62,45,61,51,61,50,61,44,58,52,63,50,59,41,50]},{"label":"チリツモブログ","data":[62,101,101,101,101,101,64,101,101,101,101,101,101,91,88,94,74,101,101,101,101,101,101,101,101,101,101,79]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[63,78,48,67,84,88,80,84,80,82,83,86,84,83,86,81,79,80,68,69,83,76,69,79,85,88,80,82]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[64,92,73,74,66,70,61,61,40,48,78,88,92,74,59,47,83,70,65,92,55,69,97,96,93,95,101,93]},{"label":"芸能人の気になる噂","data":[65,64,61,52,61,69,71,62,64,70,66,91,70,84,83,93,75,66,59,65,73,64,66,60,64,58,56,56]},{"label":"今日もブブはからまわり。","data":[66,101,74,101,101,101,101,92,101,101,101,101,93,101,101,100,101,101,101,101,85,101,101,77,101,67,70,101]},{"label":"お料理速報","data":[67,72,68,97,87,92,94,93,86,84,86,90,90,99,91,91,85,92,95,100,101,92,101,87,91,82,73,87]},{"label":"なんJ（まとめては）いかんのか？","data":[68,61,80,55,58,57,59,65,66,39,51,76,97,85,87,63,60,59,56,86,54,45,59,54,60,42,55,65]},{"label":"海外の万国反応記＠海外の反応","data":[69,69,64,54,63,64,57,44,62,47,62,61,61,43,53,57,55,63,62,59,61,55,60,64,61,60,59,59]},{"label":"FF14速報","data":[70,83,93,101,101,82,101,101,71,81,67,78,81,87,77,83,86,100,96,87,63,77,82,97,96,101,101,96]},{"label":"PS5速報！","data":[71,71,27,62,93,68,67,82,59,68,60,67,65,82,68,78,91,95,66,60,60,61,64,67,58,61,67,62]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[72,99,86,90,83,96,91,83,83,72,69,87,69,79,93,68,76,74,81,71,92,83,88,88,90,96,101,101]},{"label":"あにこ便","data":[73,74,63,56,60,63,65,68,69,62,57,60,64,65,65,66,66,58,57,64,68,71,71,68,67,64,65,69]},{"label":"MLB NEWS@まとめ","data":[74,75,92,81,90,77,101,94,99,60,54,62,75,90,95,77,64,69,73,88,91,90,65,70,98,101,78,77]},{"label":"えみコミック！","data":[75,87,90,89,73,75,77,73,77,67,71,71,74,75,63,64,68,64,69,63,65,60,62,61,69,78,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[76,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[77,79,75,82,77,85,99,91,97,88,81,93,85,88,92,101,101,76,83,79,80,80,73,75,76,77,68,70]},{"label":"うちの夫が糖尿病になっちゃった！","data":[78,77,69,80,74,74,74,63,72,66,63,68,66,67,62,65,69,65,67,66,67,68,68,76,78,75,69,68]},{"label":"ライフハックちゃんねる弐式","data":[79,82,79,76,69,79,62,67,63,76,75,70,60,66,79,71,56,49,64,68,76,59,54,59,59,81,60,64]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[80,80,83,85,101,99,101,98,101,97,101,101,101,101,101,101,101,101,101,101,101,101,90,101,30,70,101,83]},{"label":"はーとログ","data":[81,81,82,84,89,84,76,85,84,80,79,79,79,72,81,90,84,78,80,72,79,73,75,71,74,76,77,67]},{"label":"軍事・ミリタリー速報☆彡","data":[82,84,72,77,79,83,78,81,79,73,74,80,91,80,76,79,78,73,71,78,87,85,74,74,81,84,82,74]},{"label":"まとめブレイド","data":[83,62,45,72,76,62,79,70,101,65,49,85,101,98,64,85,101,101,101,82,90,101,101,73,63,101,83,101]},{"label":"会社員倉間のまいにちホリデー！！","data":[84,101,70,101,101,101,101,101,101,101,101,101,101,101,89,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[85,86,84,87,86,86,83,75,82,83,82,74,80,77,85,88,88,94,92,96,99,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[86,95,101,101,101,101,101,101,101,101,96,84,86,101,71,86,92,84,101,77,101,91,101,94,80,93,101,101]},{"label":"大和とぴっく-やまとぴ","data":[87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"作り置き＆スピードおかず de おうちバル 〜yuu's stylish bar〜","data":[88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101]},{"label":"へー子の漫画日和","data":[89,91,71,78,80,78,69,69,95,71,73,81,83,78,69,70,77,75,74,70,74,75,80,80,83,85,85,101]},{"label":"らっさむ漫画blog","data":[90,101,101,101,101,101,101,101,101,101,101,101,101,101,51,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[91,88,91,69,78,81,72,80,90,87,76,72,68,92,78,75,81,81,78,62,78,86,83,81,86,90,90,71]},{"label":"カエルDXのオタ活日記","data":[92,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101]},{"label":"ろぼ速VIP","data":[93,97,99,92,81,100,89,90,92,99,85,97,101,101,94,98,101,96,91,101,82,79,85,99,65,91,92,86]},{"label":"サカラボ | サッカーまとめ速報","data":[94,90,95,71,75,76,68,89,94,86,80,83,82,89,84,72,90,68,61,84,70,81,86,69,84,65,72,80]},{"label":"投資ちゃんねる","data":[95,65,77,64,71,80,86,74,78,79,77,73,78,63,72,82,87,85,89,75,71,87,84,82,71,79,76,81]},{"label":"やみ速@なんJ西武まとめ","data":[96,89,89,101,101,97,90,101,101,101,84,99,88,94,98,101,97,86,98,91,96,82,96,84,72,94,100,101]},{"label":"ずっと日曜日のターン","data":[97,68,96,59,50,87,81,71,70,100,89,66,76,71,82,59,101,79,82,94,58,88,77,55,51,72,79,91]},{"label":"ジャンプ速報","data":[98,96,101,101,101,101,101,101,93,94,101,92,99,101,96,92,98,97,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[99,98,76,73,70,73,84,72,73,64,88,59,63,68,80,97,80,71,77,83,89,93,61,56,79,66,63,58]},{"label":"今日速2ch","data":[100,76,88,65,82,65,54,52,74,75,59,64,73,41,40,73,67,101,97,97,101,62,45,83,82,83,91,78]},{"label":"マンガと私と猫ブログ。","data":[101,39,35,43,41,56,53,41,37,40,45,40,42,58,54,74,63,82,75,53,47,44,42,65,52,38,52,37]},{"label":"YoMuRy - ヨムリー -","data":[101,53,101,101,101,101,48,101,67,101,101,101,101,51,101,101,101,101,101,101,43,101,101,101,101,101,101,49]},{"label":"働く大人の非常識","data":[101,60,67,101,101,101,101,101,58,85,68,101,71,48,43,60,61,87,51,89,101,57,91,101,92,55,58,45]},{"label":"五箇野人の海外旅日記","data":[101,67,58,79,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,93,101,100,101,101,101,96,101,101,101,82,101,101,101,101,101,90,101,101,101,101,89,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,94,101,101,97,101,101,101,101,101,99,101,101,81,101,101,99,101,88,101,93,101,93,90,101,86,75,101]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,81,101,101,101,101,101,87,101,101,65,87,101,99,101,101,101,101,101,101,101,101,101,101,97,61,66]},{"label":"あおばブログ","data":[101,101,87,101,101,101,100,77,101,101,95,101,101,101,101,101,82,83,101,101,88,84,101,89,75,71,98,85]},{"label":"まとめロッテ！","data":[101,101,94,98,95,71,70,97,91,92,93,89,72,97,101,87,101,101,101,95,94,101,81,101,101,98,74,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[101,101,97,93,96,93,98,101,100,89,87,101,101,101,97,69,72,72,84,99,98,89,98,86,100,87,81,101]},{"label":"鈴木さん速報","data":[101,101,98,95,101,98,96,100,101,101,101,101,94,69,101,101,93,101,90,93,84,94,95,101,101,100,96,98]},{"label":"まとめ太郎！","data":[101,101,100,91,85,94,85,87,88,93,91,101,95,93,101,89,101,101,101,101,101,101,101,101,101,101,101,88]},{"label":"しばたまブログ","data":[101,101,101,30,38,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,37,62,101,101]},{"label":"ミラクルファミリー","data":[101,101,101,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,57,101,101,101,101]},{"label":"SAMURAI Footballers","data":[101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,101,101,96,92,101,101,101,101,90,94,96,101,101,101,101,101,101,93,98,100,96,92,91,101,101,88,76]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,47,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まりげのまんが。","data":[101,101,101,101,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,88,101,101,101,101,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"作り置きおかずレシピとお弁当〜心と身体にやさしい料理を〜「鈴木美鈴オフィシャルブログ」","data":[101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,98,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いきぬき2ちゃんねる","data":[101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,89,101]},{"label":"なんJ芸能ゴシップまとめ","data":[101,101,101,101,101,30,43,54,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,37,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,45,101,101,57,56,101,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,89,82,78,89,101,101,98,89,100,100,101,101,101,101,101,101,101,101,95,94,101,84,99]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,91,101,101,101,101,101,101,100,101,101,101,101,101,101,90,101,101,94,101,95,101,93,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,95,87,76,85,77,90,95,98,96,101,96,89,98,85,81,77,66,79,92,97,92,86,73]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,88,95,101,101,101,101,96,95,90,76,70,77,79,76,75,74,99,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,92,88,98,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,95,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,92]},{"label":"ふぇー速","data":[101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,94,93,101,101,101,72,87,101,101,101,95,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,86,96,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,100]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おたみの日々","data":[101,101,101,101,101,101,101,101,60,101,101,51,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,96,92,58,101,101,101,101,101,101,99,101,101,101,101,101,101,101,94,97]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Rinのシンプルライフ","data":[101,101,101,101,101,101,101,101,101,101,36,2,33,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,61,74,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,58,25,54,101,100,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,40,53,76,54,101,100,100,100,101,101,101,94]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,95]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,94,74,101,95,101,101,89,101,101,101]},{"label":"VIP NEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,101,101,101,99,101,101,101]},{"label":"たっきーママオフィシャルブログ「おしゃべりな台所」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,53,101,101,101,101,101,101,101]},{"label":"千曲がり奮闘記～紆余曲折の育児記録～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101]},{"label":"何の因果か、漫画オタ外国人と結婚してしまった。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,90]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89]}];
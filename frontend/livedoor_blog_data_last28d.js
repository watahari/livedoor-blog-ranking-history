var labels = ['2022-06-27','2022-06-28','2022-06-29','2022-06-30','2022-07-01','2022-07-02','2022-07-03','2022-07-04','2022-07-05','2022-07-06','2022-07-07','2022-07-08','2022-07-09','2022-07-10','2022-07-11','2022-07-12','2022-07-13','2022-07-14','2022-07-15','2022-07-16','2022-07-17','2022-07-18','2022-07-19','2022-07-20','2022-07-21','2022-07-22','2022-07-23','2022-07-24',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,2,1,2,2,1,1,1,3,1,1,4,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1]},{"label":"不思議.net","data":[2,3,3,2,3,3,2,2,2,1,2,3,3,6,4,3,2,2,2,2,2,2,2,2,2,2,2,2]},{"label":"オレ的ゲーム速報＠刃","data":[3,1,1,3,1,1,3,4,3,2,3,2,1,3,1,1,3,4,3,3,3,3,3,3,3,3,3,3]},{"label":"痛いニュース(ﾉ∀`)","data":[4,6,5,4,4,4,4,3,4,4,4,5,2,5,5,4,4,3,4,4,4,4,5,6,4,4,5,5]},{"label":"はちま起稿","data":[5,4,4,5,5,5,5,5,5,5,5,4,8,7,7,7,5,5,5,5,5,5,4,5,5,5,4,4]},{"label":"暇つぶしニュース","data":[6,8,6,7,7,6,6,6,6,6,6,6,6,4,6,6,7,7,9,10,8,6,7,4,6,10,10,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,5,8,6,6,7,7,7,7,9,8,8,9,11,8,9,11,10,7,7,6,7,6,7,7,6,6,6]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[8,7,7,9,9,8,9,8,9,8,9,10,5,1,3,5,6,8,8,9,9,8,8,10,11,11,11,11]},{"label":"【2ch】ニュー速クオリティ","data":[9,10,10,10,10,10,10,10,10,10,10,11,11,10,9,10,9,9,10,8,7,9,10,8,8,8,9,10]},{"label":"ハムスター速報","data":[10,9,9,8,8,9,8,9,8,7,7,7,7,8,11,8,8,6,6,6,10,11,12,11,9,9,7,8]},{"label":"哲学ニュースnwk","data":[11,12,11,14,14,11,12,14,16,15,16,18,12,12,12,14,12,14,14,16,14,14,15,13,14,13,13,13]},{"label":"カラパイア","data":[12,14,18,15,12,13,18,16,14,16,11,9,15,15,15,11,13,13,19,18,19,17,21,17,19,20,23,25]},{"label":"BIPブログ","data":[13,13,13,17,20,21,13,12,11,13,17,13,13,13,14,15,14,12,11,13,18,20,18,15,18,17,17,17]},{"label":"わんこーる速報！","data":[14,11,12,11,11,12,11,13,13,11,12,12,10,9,10,12,10,11,13,11,12,12,11,12,12,12,12,12]},{"label":"おうまがタイムズ","data":[15,16,14,13,15,14,15,11,15,14,13,17,18,18,17,16,18,18,15,17,15,16,13,16,16,14,14,16]},{"label":"なんJ PRIDE","data":[16,17,15,19,17,17,14,17,19,23,22,19,14,14,16,17,17,16,16,15,16,15,16,18,17,16,16,14]},{"label":"ぶる速-VIP","data":[17,27,25,29,27,20,21,19,29,24,18,33,23,26,19,24,22,25,28,19,17,22,23,19,20,25,24,19]},{"label":"ぱんをたずねて2000里ちょい","data":[18,15,21,12,18,30,22,18,20,17,21,29,26,30,29,27,28,30,44,32,21,24,22,25,22,46,30,24]},{"label":"NEWSぽけまとめーる","data":[19,18,19,16,16,18,16,15,12,12,15,14,16,21,18,21,16,17,18,14,13,13,14,14,15,15,15,15]},{"label":"日刊やきう速報","data":[20,19,26,23,21,24,23,30,32,31,29,28,31,29,27,29,33,27,26,22,20,21,24,27,25,23,25,21]},{"label":"ねいろ速報さん","data":[21,21,23,24,24,27,26,25,23,28,28,23,34,37,32,25,25,20,25,27,24,25,26,22,21,18,20,22]},{"label":"なんJクエスト","data":[22,28,24,28,25,23,24,23,26,30,26,27,22,28,33,33,32,33,22,25,27,23,29,30,29,29,27,31]},{"label":"VIPPERな俺","data":[23,26,22,21,22,25,19,31,22,22,25,32,20,23,21,19,19,21,17,29,32,31,30,23,27,27,18,23]},{"label":"世にも奇妙ななんかの話","data":[24,20,47,101,101,101,34,22,24,18,75,21,21,19,53,101,101,101,43,34,30,19,17,57,101,101,101,101]},{"label":"稲妻速報","data":[25,22,16,20,19,15,17,20,21,21,20,20,29,27,26,22,20,22,24,20,22,18,19,20,23,24,22,18]},{"label":"人間まおと愉快な仲間たち","data":[26,25,17,18,13,16,37,35,35,35,32,35,38,38,37,35,31,19,20,21,31,32,34,31,30,28,21,20]},{"label":"うしみつ-5chまとめ-","data":[27,30,34,35,32,32,30,34,34,26,27,37,35,39,36,37,34,23,21,26,23,29,27,21,24,26,26,28]},{"label":"カエルDXのオタ活日記","data":[28,24,20,22,30,29,29,24,17,20,19,16,19,16,20,20,39,35,33,45,36,33,33,35,40,33,62,68]},{"label":"ラビット速報","data":[29,29,27,27,29,28,27,27,30,29,30,30,24,20,23,23,21,24,29,24,29,28,25,28,31,30,29,29]},{"label":"ふくよかまるみのピリカラ人生","data":[30,32,30,31,33,26,28,28,25,27,24,24,33,32,30,26,26,32,27,28,28,27,28,29,32,22,28,26]},{"label":"ゴールデンタイムズ","data":[31,23,29,26,26,19,25,29,28,25,23,25,27,35,25,18,27,26,30,23,25,30,20,24,28,21,19,27]},{"label":"あいチャンネル","data":[32,33,68,34,35,34,44,39,27,34,38,26,37,87,34,32,24,29,23,31,26,26,57,26,26,19,35,33]},{"label":"IT速報","data":[33,35,35,37,34,40,33,32,39,43,35,34,32,40,35,34,29,31,37,35,38,37,35,37,38,32,31,30]},{"label":"カイカイ反応通信","data":[34,31,31,30,31,31,31,33,31,33,31,31,25,33,40,31,23,28,34,33,33,34,32,33,34,31,32,36]},{"label":"乃木坂46まとめ 1/46","data":[35,47,36,43,54,48,39,53,37,50,54,45,55,42,39,43,44,48,54,62,59,38,36,34,39,36,40,44]},{"label":"まとめたニュース","data":[36,41,32,39,37,35,38,26,33,36,39,36,28,22,22,28,30,34,31,30,35,35,31,38,33,37,33,32]},{"label":"ずっと日曜日のターン","data":[37,71,41,54,48,70,50,52,101,42,46,72,62,58,64,86,90,100,79,49,51,58,60,51,76,52,56,41]},{"label":"ネギ速","data":[38,46,40,42,45,38,36,37,36,32,34,38,41,25,28,36,36,39,32,36,34,39,38,39,35,35,34,38]},{"label":"【2ch】コピペ情報局","data":[39,38,37,41,39,39,35,43,44,47,37,40,46,47,46,38,37,44,39,50,40,40,43,36,36,38,36,37]},{"label":"ゆっぺのゆる漫画ブログ","data":[40,37,33,32,36,33,32,80,41,39,97,22,60,44,91,55,41,36,80,42,97,54,47,32,62,44,45,95]},{"label":"気になる芸能まとめ","data":[41,52,49,56,49,52,43,40,51,48,49,52,63,53,42,45,45,43,41,37,39,36,39,45,46,42,44,39]},{"label":"ヤゴヴのマンガ劇場","data":[42,34,28,25,23,22,20,21,18,19,14,15,17,17,13,13,15,15,12,12,11,10,9,9,10,7,8,9]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[43,45,42,40,38,36,41,44,48,46,41,41,39,31,43,39,47,40,46,46,44,43,37,40,37,39,37,46]},{"label":"もちログ","data":[44,40,44,51,44,44,51,46,42,38,40,43,42,45,44,40,101,101,101,101,101,87,69,59,51,51,38,40]},{"label":"おーるじゃんる","data":[45,44,38,45,43,42,42,50,45,44,44,44,30,24,31,30,35,37,45,44,41,47,42,41,44,45,47,43]},{"label":"ガールズVIPまとめ","data":[46,43,46,60,47,45,46,41,38,40,51,49,66,43,38,41,46,38,42,38,49,41,44,43,42,47,41,47]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[47,48,55,50,51,60,55,65,57,68,69,81,57,61,47,64,80,81,92,92,67,76,72,77,74,69,84,76]},{"label":"オタク.com －オタコム－","data":[48,50,43,47,50,50,47,48,49,49,50,46,51,64,55,52,49,46,47,47,43,49,46,46,48,50,43,48]},{"label":"オタクニュース","data":[49,57,57,58,62,43,56,76,77,55,80,42,50,54,69,79,56,64,50,72,66,63,59,79,91,84,101,84]},{"label":"MLB NEWS@まとめ","data":[50,51,62,55,60,57,48,63,63,73,61,51,74,66,68,85,63,59,55,58,79,89,77,65,49,62,68,66]},{"label":"ニュースBUZZ","data":[51,36,52,57,41,41,57,38,40,41,53,39,47,51,49,47,40,65,35,39,37,45,41,49,47,41,39,35]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[52,59,60,59,64,51,54,56,56,62,56,47,54,63,52,51,58,67,67,64,65,71,67,66,67,66,66,61]},{"label":"なんJ（まとめては）いかんのか？","data":[53,56,65,52,65,77,101,101,101,92,67,80,53,55,76,82,84,57,68,68,52,55,65,73,53,101,86,63]},{"label":"カオスちゃんねる","data":[54,54,45,61,53,49,63,57,52,53,48,48,48,72,67,48,43,51,65,53,46,53,55,44,45,53,46,51]},{"label":"海外の万国反応記＠海外の反応","data":[55,62,63,68,57,59,61,62,54,61,58,57,44,57,57,50,54,56,52,52,53,61,64,55,56,56,59,64]},{"label":"ポリー速報","data":[56,70,66,69,56,61,72,51,53,56,52,50,71,69,59,61,65,90,59,55,47,50,45,52,54,60,64,56]},{"label":"あにこ便","data":[57,67,70,80,75,78,66,68,66,71,68,55,65,62,58,59,60,63,53,59,50,51,56,62,59,58,52,50]},{"label":"やみ速@なんJ西武まとめ","data":[58,58,79,89,92,82,86,101,101,90,101,101,98,101,86,89,95,101,93,94,85,101,74,101,75,89,94,101]},{"label":"軍事・ミリタリー速報☆彡","data":[59,79,75,73,68,66,78,71,73,80,78,78,64,68,77,75,64,77,70,83,78,78,78,85,68,75,71,74]},{"label":"エクサワロス","data":[60,75,72,65,67,58,76,64,62,51,57,75,43,36,41,42,51,62,63,56,73,80,62,74,71,76,57,58]},{"label":"PS5速報！","data":[61,63,71,75,72,87,84,66,67,86,66,64,75,96,72,53,82,72,72,76,71,62,89,68,55,54,55,60]},{"label":"VIP NEWS","data":[62,78,101,53,42,88,52,49,47,67,47,65,40,56,48,56,38,41,64,40,42,52,49,48,41,43,50,45]},{"label":"はーとログ","data":[63,73,82,84,85,96,83,83,81,82,73,77,67,86,87,88,85,97,90,87,77,75,71,80,73,83,69,67]},{"label":"芸能人の気になる噂","data":[64,69,58,63,58,65,58,61,60,63,59,60,72,65,61,60,61,61,51,51,58,64,58,61,66,65,54,52]},{"label":"ライフハックちゃんねる弐式","data":[65,64,61,64,83,73,68,69,69,59,55,58,69,79,73,66,52,53,61,65,57,60,48,54,58,63,58,55]},{"label":"いきぬき2ちゃんねる","data":[66,76,101,79,88,101,49,75,101,95,101,101,101,83,54,101,101,89,101,73,82,101,101,86,101,101,101,57]},{"label":"スカッと連載ブログ（スカログ）","data":[67,72,54,74,52,53,59,55,55,76,63,62,82,82,75,92,59,52,56,60,56,57,63,56,61,40,42,49]},{"label":"えみコミック！","data":[68,39,51,44,63,37,53,42,58,45,65,54,68,59,80,49,67,49,66,41,55,46,66,42,63,68,48,65]},{"label":"ついんてーる速報","data":[69,82,101,86,77,64,81,73,68,65,86,70,73,77,79,73,55,66,62,74,75,81,61,60,78,79,73,82]},{"label":"サカラボ | サッカーまとめ速報","data":[70,88,67,67,89,69,69,72,79,66,79,69,78,70,66,69,53,73,49,63,54,67,76,58,52,55,53,70]},{"label":"流速VIP","data":[71,68,85,87,93,97,87,81,86,87,82,82,86,91,84,95,81,79,75,80,72,65,82,83,84,78,61,72]},{"label":"鷹速@ホークスまとめブログ","data":[72,77,94,91,90,83,79,86,82,101,94,96,95,97,90,97,89,92,88,93,95,101,101,91,69,92,76,81]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[73,83,48,62,69,68,64,87,90,83,85,66,45,50,63,65,74,69,60,61,62,84,86,93,77,57,74,78]},{"label":"スズぺぺの人生何とかなってます!!","data":[74,90,83,85,80,75,82,67,87,79,99,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[75,65,76,82,76,76,77,77,72,89,81,74,49,60,62,68,72,70,77,67,68,86,70,72,72,64,70,79]},{"label":"ふぇー速","data":[76,60,50,72,84,81,45,54,43,58,33,71,59,75,78,44,42,50,48,69,61,70,51,63,50,61,81,54]},{"label":"され妻つきこブログ｜アラサーママのサレ妻経験録","data":[77,55,86,101,81,62,74,70,70,64,88,84,70,67,60,72,91,99,101,84,74,85,54,84,92,85,51,53]},{"label":"馬鳥速報","data":[78,66,64,76,70,54,93,94,71,57,43,61,81,85,88,81,70,47,73,78,63,97,94,64,85,70,65,94]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[79,84,78,83,87,74,80,84,75,72,70,53,58,78,81,74,66,68,76,48,64,77,84,71,57,74,77,71]},{"label":"web漫画家やしろあずきの日常","data":[80,93,89,66,59,67,70,60,61,52,60,63,93,73,70,46,57,78,38,43,48,48,40,50,43,48,49,42]},{"label":"なんJ　高校野球まとめ速報","data":[81,96,100,90,91,86,65,79,76,78,90,87,56,49,51,63,77,80,78,95,80,68,88,89,86,90,98,89]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[82,89,93,95,101,101,101,93,80,101,101,101,52,46,50,62,62,55,57,89,90,96,101,101,97,93,90,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[83,95,84,99,74,71,91,82,92,77,77,101,97,84,83,77,68,74,99,97,101,88,75,76,60,72,93,75]},{"label":"働く大人の非常識","data":[84,81,53,48,55,94,90,101,94,88,42,101,101,92,101,101,97,84,84,101,101,72,98,101,95,59,101,85]},{"label":"Jnews1","data":[85,101,99,38,40,79,73,101,101,70,45,101,89,34,24,58,101,45,85,101,45,42,52,101,94,73,83,59]},{"label":"アニはつ -アニメ発信場-","data":[86,85,101,101,100,101,95,85,83,97,101,99,101,101,101,101,101,101,101,101,99,101,101,100,101,91,101,101]},{"label":"ろぼ速VIP","data":[87,99,95,101,95,100,100,95,101,98,93,91,91,95,99,101,92,101,101,96,93,99,101,101,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[88,80,92,93,101,90,71,47,64,81,72,73,79,101,85,70,73,76,81,81,89,93,92,101,81,87,97,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[89,101,101,96,94,99,98,97,98,91,87,90,99,101,98,101,88,101,101,101,96,83,101,101,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かきまとめ@なんJ","data":[91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,69,68,88,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[92,92,101,98,97,98,92,101,100,99,100,93,101,101,101,101,94,86,101,101,87,101,97,82,93,86,95,98]},{"label":"お料理速報","data":[93,87,69,78,73,80,97,91,101,101,92,85,87,89,92,83,100,82,83,88,81,94,80,87,79,88,79,99]},{"label":"De速","data":[94,91,98,70,61,47,60,88,95,101,89,76,84,81,56,57,71,54,69,54,60,56,50,53,64,49,60,80]},{"label":"かぞくちゃんねる","data":[95,97,96,92,82,84,89,90,96,85,84,89,83,101,95,93,83,87,86,85,86,98,90,95,82,96,96,100]},{"label":"デジタルニューススレッド","data":[96,101,101,101,101,93,88,101,101,101,101,101,88,100,94,100,98,95,94,101,91,92,101,98,101,101,101,101]},{"label":"投資ちゃんねる","data":[97,101,101,101,101,92,101,89,97,101,101,101,101,101,101,101,96,101,101,98,100,101,93,96,99,101,89,90]},{"label":"鈴木さん速報","data":[98,101,88,101,99,101,101,101,99,84,101,86,80,101,93,94,93,96,101,101,101,101,101,94,101,101,101,88]},{"label":"絵日記でございます。","data":[99,101,101,101,101,101,94,101,101,101,101,83,85,98,100,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[100,86,74,71,71,72,75,74,74,69,76,56,77,76,74,76,76,71,71,86,69,82,85,75,65,71,63,73]},{"label":"マンガと私と猫ブログ。","data":[101,42,39,33,28,46,101,36,46,37,36,92,101,48,45,71,101,101,58,66,101,74,81,101,101,101,101,86]},{"label":"鯉速＠広島東洋カープまとめブログ","data":[101,49,80,101,96,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,96,101,101,100,101,96]},{"label":"今日速2ch","data":[101,53,56,88,101,55,67,59,88,93,95,101,101,80,65,90,86,91,87,77,70,66,53,101,101,101,67,77]},{"label":"チリツモブログ","data":[101,61,73,46,46,101,101,45,101,54,101,67,101,52,101,54,50,58,101,70,101,44,101,101,101,101,78,93]},{"label":"ろくのコミックブログ","data":[101,74,101,77,101,63,101,78,101,75,101,79,101,101,101,80,101,60,101,57,101,59,101,67,101,67,101,62]},{"label":"FF14速報","data":[101,94,81,100,79,85,101,98,65,74,74,94,96,101,101,101,99,94,40,75,101,101,101,69,70,95,88,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,100,101,94,101,95,101,101,91,101,91,101,90,101,101,91,101,85,101,90,101,101,101,101,87,101,72,101]},{"label":"thunthunのドタバタ起笑転結","data":[101,101,59,49,101,101,101,101,101,101,62,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一回は一回です。。｜ 2ch修羅場・復讐まとめ","data":[101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,87,97,101,101,101,96,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97]},{"label":"ツイッター速報","data":[101,101,90,36,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,34,87,87]},{"label":"えび通","data":[101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,97,81,78,89,101,101,101,101,101,95,100,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101]},{"label":"モンハンライズ：サンブレイク2chまとめ速報 - MHRise攻略","data":[101,101,101,101,66,56,62,58,59,60,64,59,76,74,71,67,69,75,82,82,76,73,73,81,83,80,80,83]},{"label":"怒り新党～仕返し・復讐・修羅場まとめ～","data":[101,101,101,101,86,91,101,101,101,101,96,97,94,94,101,96,78,88,89,71,84,90,79,78,90,81,85,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,98,101,101,100,85,100,101,101,61,71,89,84,101,101,100,91,98,91,91,101,101,101,99,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,40,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,101,101,101,96,99,93,101,101,101,101,101,101,101,101,101,91,79,92,101,101,90,100,98,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,99,101,101,101,98,101,101,101,101,78,79,101,101,101,101,101,101,101,101,101,101,92]},{"label":"2chNEWSまとめ","data":[101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,50,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,78,96,101,101,101,101,101,101,101,98,101,101,101,100,101,101,101,101,101,101]},{"label":"素敵な鬼女様","data":[101,101,101,101,101,101,101,101,84,94,83,88,92,99,96,99,75,83,97,101,83,79,87,92,101,101,100,91]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,101,101,101,101,101,101,71,101,101,101,101,101,101,101,101,101,101,101,100,101,88,77,75,69]},{"label":"コノユビ","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,90,101,101,87,101,101,101,101,101,83,101,101,101,101,101]},{"label":"なんJ・2ch実況まとめにゅーす","data":[101,101,101,101,101,101,101,101,101,101,101,101,36,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"独女ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,41,82,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,48,42,74,101,101,101,101,70,80,101,91,101]},{"label":"SAMURAI Footballers【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,95,101,101,101,101,101,101,101,101,101]},{"label":"えふまと！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,36,101,101,101,101,101,101,101,101,101]},{"label":"ヤチナツマンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,95,101,101,101,101,101]},{"label":"とうふう絵日記～マイペース夫と３人子育て～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,101,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,89,82,82,101]},{"label":"まとめロッテ！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,94,92,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34]}];
var labels = ['2023-04-08','2023-04-09','2023-04-10','2023-04-11','2023-04-12','2023-04-13','2023-04-14','2023-04-15','2023-04-16','2023-04-17','2023-04-18','2023-04-19','2023-04-20','2023-04-21','2023-04-22','2023-04-23','2023-04-24','2023-04-25','2023-04-26','2023-04-27','2023-04-28','2023-04-29','2023-04-30','2023-05-01','2023-05-02','2023-05-03','2023-05-04','2023-05-05',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,3,3,2,2,2,4,2,2,4,3,2,2,2,1,1,2,2,3,2,1,2,3,3,2,2,2,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[2,2,2,3,3,3,5,3,3,3,5,3,3,5,2,3,3,3,4,3,3,3,4,4,4,4,3,3]},{"label":"ハムスター速報","data":[3,5,6,5,5,5,2,4,4,6,6,6,5,3,5,5,5,5,6,4,4,6,7,8,7,5,5,5]},{"label":"はちま起稿","data":[4,4,4,4,4,4,6,5,5,5,4,4,4,4,3,4,4,4,5,5,5,5,5,5,5,3,4,4]},{"label":"まめきちまめこニートの日常","data":[5,1,1,1,1,1,1,1,1,2,1,1,1,1,4,2,1,1,1,1,2,1,1,1,1,1,1,1]},{"label":"痛いニュース(ﾉ∀`)","data":[6,8,5,6,9,7,7,7,7,7,7,7,6,6,8,6,7,7,7,8,7,8,8,10,10,9,7,7]},{"label":"カラパイア","data":[7,7,13,19,16,6,3,6,11,11,8,8,13,16,6,10,12,17,10,6,8,4,2,2,3,8,8,12]},{"label":"暇つぶしニュース","data":[8,6,7,9,6,9,10,10,8,10,11,10,8,9,9,9,8,8,9,9,9,9,9,7,9,10,10,8]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[9,10,11,8,7,10,8,11,12,14,12,13,14,12,10,11,10,10,12,11,14,13,15,18,17,15,16,13]},{"label":"アルファルファモザイク","data":[10,11,12,11,10,11,12,12,10,15,13,12,11,13,13,15,16,13,13,14,16,14,13,13,14,14,12,11]},{"label":"ヤゴヴのマンガ劇場","data":[11,9,8,7,8,8,9,9,9,9,10,11,7,7,7,7,6,6,8,7,6,7,6,6,8,6,6,6]},{"label":"【2ch】ニュー速クオリティ","data":[12,14,14,15,14,14,15,13,14,17,16,15,12,11,12,14,15,15,15,13,15,12,12,15,15,16,15,15]},{"label":"なんJ PRIDE","data":[13,12,10,10,15,13,13,15,13,12,14,14,15,15,14,13,14,11,14,15,13,11,11,11,12,13,9,9]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[14,15,16,17,13,12,11,8,6,8,9,9,9,8,11,12,11,9,11,10,10,10,10,14,11,11,13,10]},{"label":"BIPブログ","data":[15,19,15,16,11,15,14,16,18,23,21,19,22,19,15,17,23,22,21,21,18,20,17,16,16,25,22,19]},{"label":"はむらの毎日マンガ","data":[16,25,19,14,12,29,18,14,38,24,15,30,16,14,34,25,18,45,59,74,66,52,42,34,58,41,31,49]},{"label":"おうまがタイムズ","data":[17,22,22,18,19,17,19,20,16,19,26,18,21,18,17,22,19,18,16,16,17,15,19,17,19,18,14,16]},{"label":"哲学ニュースnwk","data":[18,16,24,23,22,18,17,18,19,22,20,20,19,17,19,18,21,20,20,24,22,19,22,24,24,17,19,23]},{"label":"わんこーる速報！","data":[19,18,23,20,17,16,20,22,17,16,18,16,20,21,16,19,22,16,17,20,21,18,20,19,21,24,18,17]},{"label":"稲妻速報","data":[20,27,29,26,29,22,26,25,29,27,24,25,27,23,18,16,24,21,23,23,23,22,21,22,23,19,25,22]},{"label":"山田全自動のあるある日記","data":[21,17,9,12,20,24,21,17,23,18,17,23,24,20,21,20,17,12,18,17,20,16,16,9,13,12,11,14]},{"label":"NEWSぽけまとめーる","data":[22,20,18,29,32,27,25,26,31,28,25,22,18,27,27,26,30,28,33,27,29,24,28,21,27,21,26,24]},{"label":"ゴールデンタイムズ","data":[23,34,34,34,33,30,27,31,36,36,30,31,33,30,25,33,33,30,35,32,31,21,26,37,33,32,33,25]},{"label":"もちログ","data":[24,26,26,22,18,21,22,74,85,98,101,97,87,79,63,70,66,59,63,52,46,45,50,48,40,47,38,33]},{"label":"ねいろ速報さん","data":[25,24,28,21,23,23,23,24,21,21,19,21,25,22,20,23,20,14,22,22,24,26,24,20,22,23,24,20]},{"label":"日刊やきう速報","data":[26,21,21,28,24,19,24,19,24,20,27,26,28,26,24,24,25,24,24,25,19,17,18,25,25,22,17,18]},{"label":"おーるじゃんる","data":[27,28,35,33,36,32,32,28,30,32,29,33,36,34,33,40,37,32,29,36,34,32,35,33,29,37,41,34]},{"label":"ぶる速-VIP","data":[28,13,27,27,25,25,28,21,25,25,23,24,23,24,26,30,31,31,28,31,27,23,23,26,26,26,28,28]},{"label":"ラビット速報","data":[29,32,30,24,26,31,30,29,28,30,35,32,30,29,32,31,32,27,31,34,28,29,32,31,35,29,21,27]},{"label":"ネギ速","data":[30,31,37,38,28,34,34,32,35,34,40,38,40,42,44,42,36,40,40,41,55,48,44,40,38,31,27,37]},{"label":"なんJクエスト","data":[31,29,32,32,27,26,29,33,26,26,32,28,29,28,28,32,34,29,25,30,32,31,30,30,31,35,37,21]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[32,50,83,100,101,101,85,53,101,97,52,96,55,96,70,98,97,101,101,101,77,101,101,101,101,101,101,101]},{"label":"VIPPERな俺","data":[33,37,33,30,31,28,33,35,37,35,31,27,34,32,23,29,28,37,30,29,26,33,29,43,30,28,34,39]},{"label":"web漫画家やしろあずきの日常","data":[34,23,17,13,30,47,45,48,27,38,28,36,35,39,30,8,13,19,19,19,12,36,36,38,20,20,39,44]},{"label":"カイカイ反応通信","data":[35,36,39,35,35,35,35,38,40,42,38,34,32,36,37,36,42,38,36,39,37,39,40,45,39,43,46,36]},{"label":"マンガと私と猫ブログ。","data":[36,30,20,25,21,20,16,27,22,13,22,17,10,10,22,21,9,23,41,18,11,25,14,23,64,39,29,26]},{"label":"乃木坂46まとめ 1/46","data":[37,43,38,41,50,49,53,47,52,56,65,53,56,47,50,48,51,54,44,60,58,58,52,67,65,65,64,63]},{"label":"ニュースBUZZ","data":[38,44,51,63,47,53,51,46,82,73,54,68,96,50,65,52,60,80,73,58,44,42,54,95,71,87,67,72]},{"label":"うしみつ-5chまとめ-","data":[39,35,31,31,34,33,31,34,34,31,33,39,39,31,36,38,35,36,32,28,30,30,33,27,32,27,35,32]},{"label":"あいチャンネル","data":[40,68,36,40,74,36,38,37,72,48,36,35,37,35,31,59,39,33,37,35,36,35,84,46,36,34,36,35]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[41,40,40,48,48,40,36,49,49,50,46,43,46,49,41,50,46,50,60,55,42,46,49,57,48,49,49,53]},{"label":"スズぺぺの人生何とかなってます!!","data":[42,41,43,45,41,45,40,43,46,43,44,44,45,43,42,43,44,39,38,43,39,40,39,41,43,45,42,52]},{"label":"ツイッター速報","data":[43,33,25,36,42,55,56,30,20,37,37,29,26,37,35,27,27,34,2,12,33,37,41,28,18,40,23,38]},{"label":"たくあんムスメたち。","data":[44,39,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめたニュース","data":[45,52,55,44,40,60,47,54,47,45,47,56,49,25,39,39,43,46,47,46,49,43,34,39,42,44,47,42]},{"label":"IT速報","data":[46,51,44,49,46,48,42,45,42,49,51,49,47,48,54,44,48,49,45,40,47,54,55,54,49,46,48,48]},{"label":"うちの夫が糖尿病になっちゃった！","data":[47,49,49,47,44,44,41,44,48,47,45,47,48,46,46,45,47,43,42,48,45,44,45,51,44,50,50,51]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[48,46,48,43,38,41,43,40,41,33,41,45,44,40,43,37,45,41,46,47,48,41,43,49,45,42,44,46]},{"label":"ふくよかまるみのピリカラ人生","data":[49,42,45,46,45,46,39,39,44,44,43,37,38,33,29,34,26,26,27,37,35,28,31,32,34,36,40,30]},{"label":"【2ch】コピペ情報局","data":[50,48,52,53,49,56,46,52,50,63,56,48,57,44,49,49,52,58,43,54,51,51,51,64,61,61,57,47]},{"label":"ガールズVIPまとめ","data":[51,38,56,39,43,54,59,50,39,41,48,58,64,60,51,54,57,55,48,45,60,64,56,53,47,51,62,58]},{"label":"野球お絵かき@なんJまとめ","data":[52,45,46,65,79,72,94,98,92,87,101,101,101,73,101,78,84,101,101,101,75,38,38,42,101,73,51,56]},{"label":"ぱんをたずねて2000里ちょい","data":[53,78,42,52,64,37,63,23,33,39,34,42,31,45,55,66,64,35,26,38,41,55,64,50,66,71,78,96]},{"label":"De速","data":[54,53,41,50,59,58,44,51,45,40,39,41,50,54,45,41,40,42,49,42,38,34,37,36,37,33,30,31]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[55,47,59,66,62,50,57,61,55,53,55,55,52,41,47,46,41,65,67,49,54,68,53,56,46,68,61,59]},{"label":"オタク.com －オタコム－","data":[56,57,53,51,54,68,49,62,61,61,57,54,60,55,58,53,54,56,53,59,59,56,58,58,54,56,60,61]},{"label":"世にも奇妙ななんかの話","data":[57,54,47,37,37,42,37,36,43,46,42,40,42,38,38,35,29,25,34,26,25,27,25,29,28,30,32,29]},{"label":"ポリー速報","data":[58,55,58,57,56,64,48,59,58,58,62,70,65,68,62,51,65,57,58,56,57,62,61,60,63,58,55,57]},{"label":"えみコミック！","data":[59,61,60,60,60,61,55,56,54,57,50,51,53,52,48,47,50,51,50,51,53,47,48,52,51,54,58,55]},{"label":"MLB NEWS@まとめ","data":[60,56,50,55,70,63,50,63,62,51,60,69,58,66,60,60,49,48,54,63,52,63,62,63,56,53,53,50]},{"label":"海外の万国反応記＠海外の反応","data":[61,58,62,56,67,66,66,55,51,69,58,60,66,70,59,58,59,63,65,72,70,69,72,68,69,62,69,69]},{"label":"なんJ（まとめては）いかんのか？","data":[62,60,61,61,53,38,52,42,56,60,75,62,79,71,57,69,67,64,80,69,40,50,46,35,53,59,43,41]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[63,63,92,85,75,75,79,82,64,74,81,87,88,84,92,76,74,69,78,82,73,74,67,75,75,84,72,62]},{"label":"つつみのブログ","data":[64,101,101,101,77,101,101,68,101,101,101,101,101,101,68,101,101,101,101,76,101,101,101,101,101,101,80,101]},{"label":"阪神タイガースちゃんねる","data":[65,83,73,76,92,87,77,85,78,79,97,101,80,101,97,73,71,86,85,83,80,93,75,82,78,79,81,78]},{"label":"ゆっぺのゆる漫画ブログ","data":[66,82,101,101,39,39,73,41,94,101,101,101,101,53,101,82,101,44,95,44,101,60,101,44,41,99,88,101]},{"label":"流速VIP","data":[67,64,76,77,73,71,82,65,60,66,77,82,63,56,73,75,70,73,74,75,67,70,78,65,76,69,54,75]},{"label":"あにこ便","data":[68,59,54,54,51,67,61,60,53,54,49,52,62,61,56,55,56,52,62,64,61,65,60,61,55,57,65,67]},{"label":"カオスちゃんねる","data":[69,70,66,78,80,59,54,71,65,75,71,67,54,69,72,63,53,61,66,61,74,66,66,70,59,60,59,60]},{"label":"ライフハックちゃんねる弐式","data":[70,66,65,82,71,69,72,72,63,89,73,77,69,67,64,71,87,66,57,77,69,75,76,90,79,90,101,92]},{"label":"気になる芸能まとめ","data":[71,65,63,83,91,80,83,92,67,71,84,84,85,77,74,56,58,70,82,78,81,82,68,62,70,66,63,66]},{"label":"軍事・ミリタリー速報☆彡","data":[72,73,79,69,83,84,81,89,77,80,68,85,94,83,85,85,82,76,87,80,87,81,81,89,89,74,77,86]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,56,64]},{"label":"人間まおと愉快な仲間たち","data":[74,72,72,64,69,73,70,66,68,62,59,59,73,57,61,62,55,60,68,66,65,61,65,55,50,48,45,40]},{"label":"カエルDXのオタ活日記","data":[75,69,80,58,55,76,74,69,59,52,53,46,41,51,52,67,62,71,101,101,50,53,47,101,90,38,101,101]},{"label":"まとめロッテ！","data":[76,85,96,73,101,101,80,81,95,101,93,76,101,101,98,84,94,91,101,98,101,89,94,98,88,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[77,91,71,62,61,62,58,57,71,78,78,66,67,62,79,83,72,72,56,65,72,67,83,77,68,80,79,91]},{"label":"ずっと日曜日のターン","data":[78,101,75,68,101,99,101,101,101,101,101,101,77,101,101,101,88,101,92,89,101,101,101,76,67,101,101,101]},{"label":"芸能人の気になる噂","data":[79,71,69,88,93,101,68,67,57,59,63,63,70,59,69,61,69,67,77,73,97,83,87,69,72,85,82,83]},{"label":"鷹速@ホークスまとめブログ","data":[80,67,67,70,76,81,69,76,70,83,86,79,91,75,78,88,79,75,71,62,86,85,90,97,74,82,74,77]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[81,80,84,84,81,74,76,75,80,82,74,57,51,63,40,57,76,79,84,84,79,76,88,93,83,78,75,82]},{"label":"PS5速報！","data":[82,95,101,80,58,57,75,79,76,65,61,61,61,72,67,64,63,62,69,67,68,59,70,66,82,83,90,93]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[83,94,101,89,68,79,65,64,89,88,100,101,83,82,100,97,101,83,83,71,101,87,69,74,77,76,94,94]},{"label":"もっちのママ友トラブル・子育て漫画","data":[84,101,101,101,97,101,101,101,101,67,101,101,78,101,81,101,101,101,101,101,101,79,101,101,101,101,66,101]},{"label":"馬鳥速報","data":[85,79,93,74,65,65,62,70,84,84,66,72,86,74,71,90,101,85,86,81,83,77,85,101,91,92,96,89]},{"label":"鈴木さん速報","data":[86,92,95,98,96,95,91,86,101,101,83,73,97,80,84,80,83,101,101,96,90,101,100,84,81,94,83,85]},{"label":"ついんてーる速報","data":[87,76,70,81,88,85,71,80,73,90,90,78,71,78,77,77,75,74,72,79,76,71,71,71,84,72,71,73]},{"label":"2chコピペ保存道場","data":[88,98,88,95,100,93,92,90,81,94,91,92,89,81,88,91,77,82,81,90,84,94,98,96,99,91,95,101]},{"label":"はーとログ","data":[89,88,101,101,101,100,89,84,100,100,98,93,93,86,91,101,86,97,97,101,95,86,86,81,93,89,93,87]},{"label":"絵日記でございます。","data":[90,101,101,90,101,101,101,101,101,101,89,101,101,101,101,101,99,101,101,101,94,101,101,101,57,97,101,68]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[91,75,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろぼ速VIP","data":[92,101,98,91,99,98,90,93,96,95,82,90,81,91,93,79,89,96,93,93,99,101,93,94,73,95,86,79]},{"label":"まとめブレイド","data":[93,93,101,101,98,101,60,73,75,85,72,88,101,97,90,101,61,101,90,101,101,100,59,99,101,75,100,101]},{"label":"お料理速報","data":[94,96,85,101,101,86,84,91,101,99,76,91,101,98,83,96,101,95,101,86,71,80,97,86,87,101,91,81]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[95,86,101,99,101,96,88,100,88,101,99,101,101,101,101,68,101,94,101,92,92,101,101,80,86,101,101,99]},{"label":"サカラボ | サッカーまとめ速報","data":[96,74,68,59,84,82,86,87,98,86,94,94,92,88,82,93,78,89,94,94,101,98,101,85,96,96,70,84]},{"label":"やみ速@なんJ西武まとめ","data":[97,81,74,67,90,89,87,95,97,72,95,80,72,76,80,81,85,92,88,88,96,78,79,91,100,101,101,101]},{"label":"働く大人の非常識","data":[98,101,90,101,87,101,101,101,101,101,79,74,82,95,53,86,93,77,101,101,101,101,101,101,98,101,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[99,101,101,101,101,101,95,78,90,101,101,101,101,90,66,74,90,101,89,85,100,101,99,101,101,70,73,100]},{"label":"投資ちゃんねる","data":[100,89,91,97,101,101,101,101,101,101,101,101,95,85,95,92,92,99,101,101,93,99,89,92,101,98,99,98]},{"label":"Jnews1","data":[101,62,64,75,72,101,101,101,15,1,2,5,17,58,87,28,38,101,55,33,56,88,27,12,6,7,20,43]},{"label":"ふぇー速","data":[101,77,57,101,101,91,67,88,83,101,101,101,101,92,94,101,95,101,96,87,89,101,101,87,101,67,89,76]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,84,99,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,87,87,72,63,70,101,77,69,68,67,75,76,101,86,72,68,68,75,95,62,57,57,73,62,63,101,70]},{"label":"まとめ太郎！","data":[101,90,101,101,101,101,101,97,86,76,80,95,100,99,101,101,101,101,99,97,101,92,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,97,77,92,86,77,101,101,101,70,69,64,99,101,101,89,91,90,101,101,101,101,96,101,101,77,76,54]},{"label":"なんJ　高校野球まとめ速報","data":[101,99,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,72,85,86,98,101]},{"label":"今日速2ch","data":[101,100,78,96,66,52,78,96,101,101,101,81,43,65,89,101,101,81,101,101,63,84,91,83,60,52,52,71]},{"label":"チリツモブログ","data":[101,101,81,86,101,101,101,101,101,101,88,71,68,64,101,101,101,101,101,101,64,101,92,88,92,101,101,101]},{"label":"オタクニュース","data":[101,101,86,101,101,101,101,101,74,77,101,101,74,93,101,101,101,78,79,101,101,101,101,101,94,101,97,101]},{"label":"鳶の羽","data":[101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,97,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,100,101,101,101,101,99,101,81,101,98,101,101,101,100,73,100,101,99,82,73,63,78,95,81,68,74]},{"label":"つんの日常ブログ","data":[101,101,101,42,94,101,101,101,91,64,101,101,59,101,101,65,81,101,76,50,43,72,101,101,97,93,84,45]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,71,101,101,101,101,93,91,101,86,101,101,101,101,80,101,101,101,101,96,101,101,101,101,87,101]},{"label":"しろやぎの漫画おおめブログ","data":[101,101,101,79,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"VIP NEWS","data":[101,101,101,87,101,101,101,101,101,93,64,100,101,101,75,94,101,98,101,101,101,101,74,101,101,64,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[101,101,101,93,101,92,96,101,101,96,101,99,84,101,76,101,101,101,101,101,101,101,77,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,52,101,100,101,101,101,101,50,101,100,101,101,101,101,52,101,98,101,101,101,101,55,101,97]},{"label":"ミラクルファミリー","data":[101,101,101,101,57,43,64,101,101,101,101,101,98,87,101,101,101,101,100,101,78,101,101,101,101,101,101,101]},{"label":"のばらのガーデニングブログ　Hana and Rose Garden+","data":[101,101,101,101,82,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,101,85,94,101,94,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,61,53,85,97,101,101,101,101,101,101]},{"label":"へー子の漫画日和","data":[101,101,101,101,101,78,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,83,101,101,32,29,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,90,93,101,101,101,101,101,101,101,101,101,101,101,98,91,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,98,101,101,101,101,101,101,94,101,87,101,101,101,101,101,101,101,101,101,100,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,99,101,101,101,101,83,101,101,101,101,101,101,101,57,101,101,101,101,101,101,101,101]},{"label":"銃とバッジは置いていけ","data":[101,101,101,101,101,101,101,58,66,92,92,65,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,83,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,55,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,85,89,90,89,99,101,101,101,39,70,88,95,101,101,101,101,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,96,93,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,100,101,101,101,101,101,101,101,95]},{"label":"沼津つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,84,101,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,51,101,101,101,82,101,101,101,101,101]},{"label":"＊ゆるーくおうちのことを考えるブログ＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,53,70,101,101,101,101,101,101,101,101,101]},{"label":"happy-go-lucky　-心地いい暮らしのコツ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,64,101,101,101,101,101,101,101,101,101]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101,101,101,101,101,101,101]},{"label":"毎日でぶどり","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,101]},{"label":"GIANTS PRIDE -巨人なんJまとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101]},{"label":"あおばブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,80,59,80,88,85,88]},{"label":"しなのんちのいくる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101]},{"label":"ぽかぽかびより  (レシピ＆作り方・コツ)","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,52,101,101,101]},{"label":"アクアカタリスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"まりげのまんが。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,65]},{"label":"テレビマン漫画家 真船佳奈のトラブルDAYS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90]}];
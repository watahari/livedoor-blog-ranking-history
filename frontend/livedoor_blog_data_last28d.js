var labels = ['2023-12-06','2023-12-07','2023-12-08','2023-12-09','2023-12-10','2023-12-11','2023-12-12','2023-12-13','2023-12-14','2023-12-15','2023-12-16','2023-12-17','2023-12-18','2023-12-19','2023-12-20','2023-12-21','2023-12-22','2023-12-23','2023-12-24','2023-12-25','2023-12-26','2023-12-27','2023-12-28','2023-12-29','2023-12-30','2023-12-31','2024-01-01','2024-01-02',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,1,2,2,2,2,2,2,1,2,2,2,3,2,1,1,2,2,2,2,2,2,1,1,2,2,2,1]},{"label":"まめきちまめこニートの日常","data":[2,2,1,1,1,1,1,1,2,1,1,1,2,1,2,2,1,1,1,1,1,1,2,2,1,1,1,11]},{"label":"はちま起稿","data":[3,3,3,3,3,5,3,3,3,3,3,4,5,4,3,3,3,3,3,5,4,3,3,3,3,3,3,2]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[4,5,4,5,4,4,5,6,6,8,6,7,6,3,4,6,7,4,5,6,7,5,6,6,8,8,7,9]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,5,6,5,3,4,4,4,4,4,5,7,5,5,4,6,5,6,7,6,4,4,4,7,5,5,4]},{"label":"ハムスター速報","data":[6,7,7,4,6,8,6,5,5,5,5,6,8,6,6,5,4,6,4,4,5,6,5,5,4,6,6,3]},{"label":"痛いニュース(ﾉ∀`)","data":[7,6,6,7,9,6,8,7,7,6,8,10,10,8,8,7,8,7,9,8,9,8,8,9,6,4,8,8]},{"label":"ヤゴヴのマンガ劇場","data":[8,8,9,15,28,23,21,22,19,18,17,16,19,17,12,12,12,11,11,11,11,9,11,11,10,9,9,10]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,9,10,9,8,9,10,10,9,10,10,9,11,9,9,10,10,8,10,10,10,7,7,7,9,11,11,6]},{"label":"暇つぶしニュース","data":[10,10,8,8,7,7,9,9,10,9,7,8,9,10,7,8,9,9,7,9,8,11,9,8,5,7,4,7]},{"label":"なんJ PRIDE","data":[11,12,13,11,10,11,12,11,11,11,11,11,12,14,15,14,15,13,13,13,14,12,13,13,12,12,12,13]},{"label":"哲学ニュースnwk","data":[12,11,11,10,12,10,7,8,8,7,9,3,4,11,10,9,5,10,8,3,3,10,12,12,11,10,10,5]},{"label":"ねいろ速報さん","data":[13,14,14,14,13,15,13,15,15,16,12,13,15,15,16,17,16,16,15,18,15,17,20,20,17,17,19,25]},{"label":"【2ch】ニュー速クオリティ","data":[14,13,12,12,14,14,14,13,12,13,13,12,13,12,14,13,11,12,12,12,12,13,14,14,13,13,13,14]},{"label":"BIPブログ","data":[15,16,16,13,11,13,11,12,13,12,15,15,14,16,13,15,14,17,16,15,13,16,16,15,14,15,16,19]},{"label":"わんこーる速報！","data":[16,15,15,16,16,16,15,14,14,15,14,14,16,13,11,11,13,14,14,14,16,14,17,17,15,14,14,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[17,17,17,17,17,19,17,18,18,17,16,17,20,19,19,16,17,15,17,21,21,19,18,19,18,18,15,12]},{"label":"稲妻速報","data":[18,20,19,23,22,20,19,17,17,20,18,18,23,18,20,19,21,21,18,19,22,18,21,21,21,22,23,22]},{"label":"NEWSぽけまとめーる","data":[19,18,22,21,21,12,16,16,16,14,19,20,21,21,18,18,20,28,21,27,18,15,15,16,22,16,20,17]},{"label":"ラビット速報","data":[20,23,20,22,18,18,18,20,22,19,23,22,25,22,24,24,19,18,19,17,23,21,19,18,19,19,17,15]},{"label":"おーるじゃんる","data":[21,24,21,20,25,25,23,24,25,23,22,28,29,30,25,21,22,26,24,16,17,22,25,29,28,21,27,20]},{"label":"ツイッター速報","data":[22,21,25,35,84,64,28,36,54,50,49,66,1,7,33,49,69,29,50,89,101,101,10,10,43,62,38,65]},{"label":"VIPPERな俺","data":[23,26,24,19,19,26,20,21,20,28,32,30,26,26,26,28,28,19,27,29,25,20,22,31,20,20,29,24]},{"label":"なんJクエスト","data":[24,22,18,25,15,22,22,19,21,24,20,19,18,24,22,22,18,24,28,26,29,26,23,23,23,24,21,21]},{"label":"ゴールデンタイムズ","data":[25,19,23,27,29,27,25,26,28,25,25,24,27,25,21,23,26,22,23,22,19,24,24,28,25,25,18,18]},{"label":"うしみつ-5chまとめ-","data":[26,31,27,24,26,28,29,31,30,22,24,21,28,29,29,25,24,25,26,25,27,28,26,30,29,26,25,28]},{"label":"カラパイア","data":[27,30,34,37,34,29,31,33,27,30,28,29,17,20,30,30,33,37,39,36,35,38,42,36,35,35,36,38]},{"label":"日刊やきう速報","data":[28,29,26,18,20,17,27,23,23,21,21,26,32,28,27,27,27,27,29,20,24,23,29,26,30,28,26,26]},{"label":"あいチャンネル","data":[29,25,29,26,70,41,64,29,36,29,29,41,101,32,31,51,59,35,79,30,28,29,27,27,31,70,37,71]},{"label":"おうまがタイムズ","data":[30,28,41,31,56,30,36,40,61,33,36,31,33,35,35,45,47,60,31,35,47,43,54,49,55,31,31,35]},{"label":"ふくよかまるみのピリカラ人生","data":[31,59,32,69,40,80,39,34,79,32,30,71,40,77,46,80,45,71,56,80,50,87,50,81,101,51,81,50]},{"label":"ぶる速-VIP","data":[32,27,28,29,27,24,26,32,26,26,27,25,22,27,28,26,25,23,25,24,26,25,28,22,27,29,30,29]},{"label":"ぱんをたずねて2000里ちょい","data":[33,38,47,36,32,44,82,59,56,62,64,52,49,48,57,40,37,38,46,57,58,50,57,53,57,54,61,51]},{"label":"カイカイ反応通信","data":[34,37,33,34,38,43,30,28,35,31,31,36,35,31,34,32,29,32,34,40,30,32,35,33,38,37,48,53]},{"label":"YoMuRy - ヨムリー -","data":[35,101,101,101,101,101,101,45,101,101,101,101,101,101,36,101,101,94,101,101,101,34,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[36,46,79,95,101,63,101,101,95,101,100,67,98,69,101,101,101,40,32,79,101,101,64,101,101,101,101,101]},{"label":"ネギ速","data":[37,35,35,30,35,37,41,39,32,35,33,35,37,33,32,29,50,48,30,32,33,30,31,24,24,27,24,23]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[38,34,39,72,66,62,65,57,55,48,40,42,42,49,47,39,35,45,53,42,43,37,43,34,48,38,32,33]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[39,42,38,32,31,40,49,44,45,45,53,33,34,58,53,55,41,36,41,41,31,40,36,50,36,33,35,31]},{"label":"カオスちゃんねる","data":[40,44,40,44,43,45,45,43,40,38,45,46,38,40,41,36,32,41,35,44,36,35,39,37,39,52,40,45]},{"label":"乃木坂46まとめ 1/46","data":[41,36,30,51,55,54,59,46,47,37,35,32,51,53,52,52,43,54,52,50,39,47,46,41,50,41,41,46]},{"label":"マンガと私と猫ブログ。","data":[42,51,48,74,49,31,52,48,34,69,44,61,47,60,101,50,31,39,57,34,34,61,34,38,51,84,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[43,45,37,42,36,90,32,38,37,34,54,101,101,37,39,42,36,44,45,101,46,33,38,40,41,39,46,88]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[44,39,46,41,47,34,24,35,39,44,38,43,67,44,44,38,34,33,40,45,40,36,37,42,45,49,52,58]},{"label":"サル山の裏マンガ","data":[45,43,49,45,50,47,40,47,44,46,47,50,75,51,94,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"IT速報","data":[46,40,43,33,30,33,35,41,33,39,41,39,46,43,38,31,30,34,49,37,37,41,32,32,32,36,28,30]},{"label":"まとめブレイド","data":[47,84,101,91,37,65,80,70,77,84,43,59,66,85,73,73,63,51,68,98,101,92,101,83,87,89,60,74]},{"label":"オタク.com －オタコム－","data":[48,49,50,53,48,49,43,51,46,41,48,40,41,42,42,41,44,49,42,46,38,39,45,44,40,40,44,37]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[49,64,77,59,53,50,69,84,78,71,90,85,86,88,74,83,94,83,74,77,81,76,85,85,88,74,77,81]},{"label":"海外の万国反応記＠海外の反応","data":[50,58,66,55,59,59,56,61,48,55,66,49,59,64,55,59,55,50,60,63,52,49,61,64,59,50,49,40]},{"label":"ガールズVIPまとめ","data":[51,41,36,40,33,42,38,42,42,42,50,57,48,45,67,43,38,30,37,43,42,45,40,39,34,34,39,34]},{"label":"働く大人の非常識","data":[52,47,57,66,65,101,50,67,89,65,42,34,101,71,45,48,73,89,67,52,41,57,52,69,68,86,86,89]},{"label":"はむらの毎日マンガ","data":[53,32,59,28,24,61,101,71,51,98,62,84,53,34,71,34,57,101,59,28,55,101,41,62,33,42,33,43]},{"label":"De速","data":[54,50,54,38,39,66,58,74,62,36,39,37,64,52,50,53,72,61,72,72,45,63,68,57,56,79,66,64]},{"label":"ポリー速報","data":[55,56,55,47,54,60,46,64,53,43,37,48,58,62,58,65,62,47,61,55,48,53,49,58,46,44,55,48]},{"label":"まとめたニュース","data":[56,48,42,46,46,58,55,27,43,40,55,62,55,38,37,33,39,31,44,31,32,42,33,35,37,32,43,32]},{"label":"パチンコ・パチスロ.com","data":[57,54,53,39,41,48,34,49,52,52,46,51,65,63,49,44,49,58,69,71,62,55,53,61,62,64,34,49]},{"label":"あにこ便","data":[58,62,56,58,44,51,54,62,63,58,57,44,45,55,61,58,54,55,48,47,54,52,56,54,58,53,62,66]},{"label":"人間まおと愉快な仲間たち","data":[59,60,52,49,52,36,37,56,60,63,69,56,57,67,60,54,48,63,62,59,61,67,73,71,70,67,83,78]},{"label":"ニュースBUZZ","data":[60,82,62,97,68,76,101,101,101,75,89,63,43,65,56,64,76,66,95,62,64,98,75,101,101,83,56,59]},{"label":"PS5速報！","data":[61,65,60,52,69,88,63,65,59,56,65,64,63,66,69,71,58,57,58,56,65,58,55,56,53,55,59,72]},{"label":"【2ch】コピペ情報局","data":[62,55,44,65,61,56,47,52,41,47,51,45,60,56,54,63,42,46,47,48,44,48,47,46,42,43,42,39]},{"label":"もちログ","data":[63,53,45,43,45,39,33,30,24,27,26,23,30,23,17,20,23,20,20,23,20,27,30,25,26,23,22,27]},{"label":"チリツモブログ","data":[64,101,84,101,101,101,67,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[65,74,75,80,73,83,78,73,67,74,78,60,39,50,63,56,71,42,63,53,60,66,66,65,67,65,67,55]},{"label":"スズぺぺの人生何とかなってます!!","data":[66,66,68,68,64,75,68,66,65,61,59,53,61,61,62,57,56,53,54,51,49,46,48,48,47,46,50,83]},{"label":"流速VIP","data":[67,57,58,63,60,67,60,63,66,53,67,47,44,59,64,66,75,43,55,61,57,70,58,52,74,61,53,60]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[68,78,69,57,62,69,74,69,101,101,84,54,87,54,68,67,60,64,78,101,101,65,65,55,72,101,82,97]},{"label":"まとめロッテ！","data":[69,75,72,60,63,57,75,79,84,51,58,73,68,80,87,91,86,75,70,87,78,95,101,75,96,101,95,87]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[70,88,88,82,42,38,53,58,64,72,71,65,70,83,59,72,80,80,64,67,77,60,60,47,63,60,76,101]},{"label":"ついんてーる速報","data":[71,61,64,64,58,53,51,50,58,54,61,58,52,57,65,61,46,52,38,39,56,62,59,45,52,48,45,42]},{"label":"footballnet【サッカー5chまとめ】","data":[72,94,101,101,85,94,101,101,92,94,92,90,85,100,98,78,97,101,101,90,101,100,99,99,98,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[73,73,71,61,67,74,62,77,68,70,63,70,71,75,80,69,74,62,71,64,66,71,72,76,77,69,92,92]},{"label":"絵日記でございます。","data":[74,69,86,79,80,32,44,60,57,59,60,78,54,68,77,74,66,65,65,60,68,85,51,74,78,96,101,101]},{"label":"芸能人の気になる噂","data":[75,91,80,48,57,68,73,55,49,49,56,55,56,47,51,46,52,59,51,54,51,51,44,43,44,47,47,41]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[76,71,81,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"軍事・ミリタリー速報☆彡","data":[77,86,73,78,76,85,71,76,73,77,81,80,72,74,83,85,85,74,75,81,79,75,76,70,75,81,74,57]},{"label":"気になる芸能まとめ","data":[78,79,82,86,77,70,72,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,82]},{"label":"やみ速@なんJ西武まとめ","data":[79,63,76,67,72,91,98,87,85,67,72,94,83,76,90,77,67,72,82,101,82,91,88,77,82,98,87,79]},{"label":"サカラボ | サッカーまとめ速報","data":[80,72,95,81,86,81,89,82,74,81,80,79,74,78,97,84,84,77,76,65,70,81,78,90,84,73,79,54]},{"label":"ジャンプ速報","data":[81,76,92,96,101,101,90,86,101,89,101,101,101,98,101,101,101,101,101,101,101,101,90,93,99,100,101,101]},{"label":"鈴木さん速報","data":[82,98,87,88,91,78,85,98,98,90,86,93,73,81,79,76,77,70,87,88,91,84,83,88,85,77,84,80]},{"label":"MLB NEWS@まとめ","data":[83,67,74,73,78,46,57,72,72,80,73,69,78,101,101,92,92,81,98,91,84,99,94,98,86,68,85,101]},{"label":"ライフハックちゃんねる弐式","data":[84,93,70,83,82,89,77,68,69,79,88,75,77,84,95,70,64,73,91,75,59,59,74,82,64,80,78,70]},{"label":"投資ちゃんねる","data":[85,85,83,87,74,87,79,78,90,78,87,86,82,86,96,82,89,91,88,78,72,83,82,73,83,71,68,61]},{"label":"登山ちゃんねる","data":[86,101,101,101,95,93,97,101,101,101,75,82,90,96,86,62,65,86,85,69,83,77,87,87,94,93,72,73]},{"label":"今日速2ch","data":[87,81,78,75,51,52,66,54,31,57,70,38,50,70,40,35,61,67,66,100,80,56,63,59,65,76,51,36]},{"label":"ダンナ様は安月給","data":[88,101,98,84,101,101,96,80,101,101,101,92,101,91,89,101,101,82,77,101,85,72,101,101,93,78,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[89,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[90,80,101,101,101,101,101,101,101,86,101,89,101,101,101,101,90,101,101,101,101,90,101,101,101,94,101,95]},{"label":"ろぼ速VIP","data":[91,101,101,100,89,95,95,91,96,83,93,88,81,99,101,89,91,99,93,83,93,94,86,92,91,90,90,90]},{"label":"はーとログ","data":[92,101,85,76,79,97,88,81,81,95,95,76,84,87,93,90,95,84,81,73,86,82,92,79,69,75,80,69]},{"label":"デジタルニューススレッド","data":[93,92,101,101,97,98,101,94,91,99,85,83,79,101,101,95,93,97,99,82,89,88,89,86,90,88,89,68]},{"label":"ずっと日曜日のターン","data":[94,101,67,70,101,101,101,101,101,101,101,101,80,101,101,87,53,68,101,38,53,44,67,51,54,58,71,44]},{"label":"馬鳥速報","data":[95,83,99,56,81,82,61,85,76,87,79,91,100,90,85,79,87,78,89,94,63,80,93,78,79,82,91,56]},{"label":"稼げるまとめ速報","data":[96,95,101,101,101,101,101,101,94,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[97,101,93,85,87,79,93,83,82,76,91,81,69,82,88,75,81,79,84,70,67,79,70,68,71,72,69,67]},{"label":"銃とバッジは置いていけ","data":[98,101,101,101,101,101,101,101,101,101,101,68,89,101,101,101,101,101,101,101,101,101,101,101,101,101,65,91]},{"label":"最強ジャンプ放送局","data":[99,101,101,101,100,101,87,101,101,92,94,98,95,93,101,97,100,93,101,97,74,86,97,97,97,101,96,86]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[100,87,101,101,71,55,83,93,93,68,82,101,36,41,23,37,82,95,101,66,101,101,84,95,101,101,101,101]},{"label":"おたみの日々","data":[101,33,96,54,101,77,91,101,50,101,52,101,101,36,82,60,51,101,73,101,101,54,101,101,101,101,88,101]},{"label":"世にも奇妙ななんかの話","data":[101,52,51,62,101,35,48,100,101,101,101,101,97,101,101,101,101,101,101,99,101,101,101,101,66,59,57,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,68,65,101,75,72,76,101,80,66,76,101,101,79,78,68,68,101,80,68,101,68,62,60,61,56,63,52]},{"label":"つつみのブログ","data":[101,70,101,77,101,101,86,101,71,101,101,101,101,73,101,101,101,101,101,101,101,101,81,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,77,101,101,101,101,101,37,101,101,68,101,101,101,72,101,101,101,101,101,101,101,98,89,101,92,99,101]},{"label":"ミラクルファミリー","data":[101,89,91,101,101,101,42,25,38,101,101,96,101,72,48,86,101,101,101,101,101,93,101,63,16,30,101,101]},{"label":"ちょうふ通信","data":[101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[101,96,89,71,88,84,100,92,88,91,77,77,76,101,100,88,79,96,101,101,101,74,77,94,80,101,70,76]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,97,63,99,101,101,101,101,101,101,101,72,101,101,75,101,101,87,43,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,100,100,92,90,86,99,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ヲタママだっていーじゃない！","data":[101,101,31,101,101,101,70,101,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,61,101,101,101,92,88,29,60,74,27,31,46,84,101,70,56,36,95,101,101,101,101,101,101,100,101]},{"label":"福々ちえWEBコミック〜幸せはどこにある？〜","data":[101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[101,101,94,101,94,101,101,95,101,101,101,101,94,101,101,101,98,101,101,92,94,89,101,91,73,97,94,94]},{"label":"オタクニュース","data":[101,101,97,50,92,73,84,89,70,97,101,87,62,101,101,81,83,69,33,58,73,64,79,67,49,45,58,47]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,89,83,99,101,101,101,101,98,99,101,101,101,99,96,101,101,101,101,101,96,101,81,101,101,99]},{"label":"FF14速報","data":[101,101,101,93,101,101,101,96,97,88,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,94,98,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,98,99,100,101,99,86,96,101,95,88,95,101,96,101,100,94,96,100,96,101,80,89,91,101,93]},{"label":"しばたまブログ","data":[101,101,101,101,23,21,101,101,101,101,101,101,96,101,101,101,101,101,22,33,92,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,93,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,96,101,101,101,87,93,83,74,92,97,92,93,88,88,92,84,69,73,71,72,76,85,75,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,71,101,97,101,101,101,101,101,101,101,101,101,98,101,101,96,101,101,101,101,95,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"笑う母には福来る　byはなゆい","data":[101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,101,101,101,101,94,90,83,85,97,101,91,101,101,101,99,101,101,101,76,97,95,100,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,53,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,101,101,101,99,101,99,101,101,89,81,101,101,85,96,101,101,78,91,101,101,87,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,100,101,101,101,101,101,101,101,96,92,101,98,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,101,101,64,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101]},{"label":"とんとんのマンガ","data":[101,101,101,101,101,101,101,101,101,101,34,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,101,101,100,93,94,91,94,101,101,90,49,75,101,101,101,101,101,101,101]},{"label":"独女ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,24,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,39,70,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,43,47,78,76,83,86,98,101,101,101,100,101,101,62]},{"label":"ぷみらの看護師奮闘記マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あさことはぎゆうの漫画おきば","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,92,86,74,71,69,69,66,60,57,64,63]},{"label":"甘辛ミックス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,40,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,76,87,101,100,84,95,99,73,85]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101]},{"label":"ハロン棒ch　-競馬まとめ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,77]},{"label":"猫とくも膜下出血の絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,31,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101]},{"label":"青木ぼんろの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96]}];
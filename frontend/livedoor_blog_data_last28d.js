var labels = ['2023-12-17','2023-12-18','2023-12-19','2023-12-20','2023-12-21','2023-12-22','2023-12-23','2023-12-24','2023-12-25','2023-12-26','2023-12-27','2023-12-28','2023-12-29','2023-12-30','2023-12-31','2024-01-01','2024-01-02','2024-01-03','2024-01-04','2024-01-05','2024-01-06','2024-01-07','2024-01-08','2024-01-09','2024-01-10','2024-01-11','2024-01-12','2024-01-13',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,1,2,2,1,1,1,1,1,1,2,2,1,1,1,11,15,1,1,1,1,2,3,1,1,2,3]},{"label":"オレ的ゲーム速報＠刃","data":[2,3,2,1,1,2,2,2,2,2,2,1,1,2,2,2,1,2,2,2,2,2,1,1,2,2,1,1]},{"label":"哲学ニュースnwk","data":[3,4,11,10,9,5,10,8,3,3,10,12,12,11,10,10,5,11,11,10,8,11,11,11,12,13,11,11]},{"label":"はちま起稿","data":[4,5,4,3,3,3,3,3,5,4,3,3,3,3,3,3,2,3,3,3,5,3,4,4,3,3,4,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,7,5,5,4,6,5,6,7,6,4,4,4,7,5,5,4,7,5,6,6,7,6,6,4,4,3,4]},{"label":"ハムスター速報","data":[6,8,6,6,5,4,6,4,4,5,6,5,5,4,6,6,3,5,7,5,3,5,5,8,7,7,5,6]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[7,6,3,4,6,7,4,5,6,7,5,6,6,8,8,7,9,8,6,4,4,4,3,2,5,5,6,5]},{"label":"暇つぶしニュース","data":[8,9,10,7,8,9,9,7,9,8,11,9,8,5,7,4,7,4,4,7,10,6,7,7,10,10,9,10]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,11,9,9,10,10,8,10,10,10,7,7,7,9,11,11,6,6,8,8,9,8,10,10,9,6,8,7]},{"label":"痛いニュース(ﾉ∀`)","data":[10,10,8,8,7,8,7,9,8,9,8,8,9,6,4,8,8,9,9,9,7,10,9,5,6,8,7,8]},{"label":"なんJ PRIDE","data":[11,12,14,15,14,15,13,13,13,14,12,13,13,12,12,12,13,12,13,13,13,14,13,14,15,14,12,12]},{"label":"【2ch】ニュー速クオリティ","data":[12,13,12,14,13,11,12,12,12,12,13,14,14,13,13,13,14,14,12,11,14,12,12,12,14,11,13,13]},{"label":"ねいろ速報さん","data":[13,15,15,16,17,16,16,15,18,15,17,20,20,17,17,19,25,28,26,21,21,17,19,18,19,18,21,19]},{"label":"わんこーる速報！","data":[14,16,13,11,11,13,14,14,14,16,14,17,17,15,14,14,16,18,16,12,12,13,14,13,13,12,14,14]},{"label":"BIPブログ","data":[15,14,16,13,15,14,17,16,15,13,16,16,15,14,15,16,19,30,40,36,36,35,29,30,33,32,34,30]},{"label":"ヤゴヴのマンガ劇場","data":[16,19,17,12,12,12,11,11,11,11,9,11,11,10,9,9,10,10,10,18,11,9,8,9,11,9,10,9]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[17,20,19,19,16,17,15,17,21,21,19,18,19,18,18,15,12,13,14,14,16,16,15,16,16,16,17,15]},{"label":"稲妻速報","data":[18,23,18,20,19,21,21,18,19,22,18,21,21,21,22,23,22,26,23,20,24,25,23,22,22,21,18,16]},{"label":"なんJクエスト","data":[19,18,24,22,22,18,24,28,26,29,26,23,23,23,24,21,21,23,19,16,20,22,22,24,24,17,24,21]},{"label":"NEWSぽけまとめーる","data":[20,21,21,18,18,20,28,21,27,18,15,15,16,22,16,20,17,22,17,15,22,20,24,19,20,22,25,25]},{"label":"うしみつ-5chまとめ-","data":[21,28,29,29,25,24,25,26,25,27,28,26,30,29,26,25,28,29,27,23,23,21,18,17,17,19,23,18]},{"label":"ラビット速報","data":[22,25,22,24,24,19,18,19,17,23,21,19,18,19,19,17,15,19,20,17,17,19,16,20,23,20,22,24]},{"label":"もちログ","data":[23,30,23,17,20,23,20,20,23,20,27,30,25,26,23,22,27,17,15,39,37,36,34,32,28,28,26,20]},{"label":"ゴールデンタイムズ","data":[24,27,25,21,23,26,22,23,22,19,24,24,28,25,25,18,18,21,24,24,19,23,20,15,25,26,20,23]},{"label":"ぶる速-VIP","data":[25,22,27,28,26,25,23,25,24,26,25,28,22,27,29,30,29,33,32,25,27,26,26,25,30,36,101,51]},{"label":"日刊やきう速報","data":[26,32,28,27,27,27,27,29,20,24,23,29,26,30,28,26,26,27,28,27,25,27,31,28,26,29,15,27]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[27,31,46,84,101,70,56,36,95,101,101,101,101,101,101,100,101,101,99,101,101,101,94,98,101,98,96,101]},{"label":"おーるじゃんる","data":[28,29,30,25,21,22,26,24,16,17,22,25,29,28,21,27,20,16,18,19,15,15,21,21,21,23,16,22]},{"label":"カラパイア","data":[29,17,20,30,30,33,37,39,36,35,38,42,36,35,35,36,38,39,35,32,32,34,38,37,45,31,27,28]},{"label":"VIPPERな俺","data":[30,26,26,26,28,28,19,27,29,25,20,22,31,20,20,29,24,24,21,22,18,24,25,26,18,15,19,17]},{"label":"おうまがタイムズ","data":[31,33,35,35,45,47,60,31,35,47,43,54,49,55,31,31,35,31,53,46,34,40,50,61,32,38,50,26]},{"label":"乃木坂46まとめ 1/46","data":[32,51,53,52,52,43,54,52,50,39,47,46,41,50,41,41,46,25,37,40,33,28,27,36,36,42,38,46]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[33,34,58,53,55,41,36,41,41,31,40,36,50,36,33,35,31,36,34,34,31,37,36,27,43,34,31,33]},{"label":"働く大人の非常識","data":[34,101,71,45,48,73,89,67,52,41,57,52,69,68,86,86,89,87,56,53,50,50,43,51,77,63,60,47]},{"label":"ネギ速","data":[35,37,33,32,29,50,48,30,32,33,30,31,24,24,27,24,23,20,25,28,28,33,30,29,29,30,37,31]},{"label":"カイカイ反応通信","data":[36,35,31,34,32,29,32,34,40,30,32,35,33,38,37,48,53,58,62,61,39,29,39,38,39,37,41,38]},{"label":"De速","data":[37,64,52,50,53,72,61,72,72,45,63,68,57,56,79,66,64,80,95,85,63,67,85,69,69,47,56,62]},{"label":"今日速2ch","data":[38,50,70,40,35,61,67,66,100,80,56,63,59,65,76,51,36,49,43,67,77,79,71,76,81,88,84,59]},{"label":"IT速報","data":[39,46,43,38,31,30,34,49,37,37,41,32,32,32,36,28,30,37,33,26,35,38,33,40,31,24,36,35]},{"label":"オタク.com －オタコム－","data":[40,41,42,42,41,44,49,42,46,38,39,45,44,40,40,44,37,40,39,42,43,45,40,43,40,35,39,42]},{"label":"あいチャンネル","data":[41,101,32,31,51,59,35,79,30,28,29,27,27,31,70,37,71,41,81,30,30,83,28,31,27,27,28,29]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[42,42,49,47,39,35,45,53,42,43,37,43,34,48,38,32,33,38,29,35,29,31,35,34,41,39,42,39]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[43,67,44,44,38,34,33,40,45,40,36,37,42,45,49,52,58,52,48,49,52,42,45,45,47,46,47,36]},{"label":"あにこ便","data":[44,45,55,61,58,54,55,48,47,54,52,56,54,58,53,62,66,68,68,63,59,54,54,55,62,60,64,57]},{"label":"【2ch】コピペ情報局","data":[45,60,56,54,63,42,46,47,48,44,48,47,46,42,43,42,39,46,45,38,44,39,52,41,51,43,45,45]},{"label":"カオスちゃんねる","data":[46,38,40,41,36,32,41,35,44,36,35,39,37,39,52,40,45,42,36,33,42,43,48,44,44,45,51,41]},{"label":"流速VIP","data":[47,44,59,64,66,75,43,55,61,57,70,58,52,74,61,53,60,56,55,55,60,63,57,56,68,67,70,66]},{"label":"ポリー速報","data":[48,58,62,58,65,62,47,61,55,48,53,49,58,46,44,55,48,57,49,54,62,57,55,47,57,64,40,48]},{"label":"海外の万国反応記＠海外の反応","data":[49,59,64,55,59,55,50,60,63,52,49,61,64,59,50,49,40,35,38,43,40,49,49,49,52,41,44,44]},{"label":"サル山の裏マンガ","data":[50,75,51,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[51,65,63,49,44,49,58,69,71,62,55,53,61,62,64,34,49,45,52,77,72,69,76,64,71,54,63,60]},{"label":"ぱんをたずねて2000里ちょい","data":[52,49,48,57,40,37,38,46,57,58,50,57,53,57,54,61,51,51,47,47,49,58,56,58,58,59,57,50]},{"label":"スズぺぺの人生何とかなってます!!","data":[53,61,61,62,57,56,53,54,51,49,46,48,48,47,46,50,83,101,101,50,48,51,53,54,53,50,59,54]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[54,87,54,68,67,60,64,78,101,101,65,65,55,72,101,82,97,88,67,59,58,93,68,73,72,71,71,101]},{"label":"芸能人の気になる噂","data":[55,56,47,51,46,52,59,51,54,51,51,44,43,44,47,47,41,43,42,41,41,41,46,53,50,53,58,67]},{"label":"人間まおと愉快な仲間たち","data":[56,57,67,60,54,48,63,62,59,61,67,73,71,70,67,83,78,62,70,62,51,56,62,70,65,58,68,89]},{"label":"ガールズVIPまとめ","data":[57,48,45,67,43,38,30,37,43,42,45,40,39,34,34,39,34,34,31,31,38,32,44,35,35,40,32,40]},{"label":"ついんてーる速報","data":[58,52,57,65,61,46,52,38,39,56,62,59,45,52,48,45,42,44,41,45,45,44,47,42,54,48,46,56]},{"label":"まとめブレイド","data":[59,66,85,73,73,63,51,68,98,101,92,101,83,87,89,60,74,65,69,96,65,70,58,60,86,51,76,76]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[60,39,50,63,56,71,42,63,53,60,66,66,65,67,65,67,55,63,72,65,66,76,69,72,56,56,72,73]},{"label":"マンガと私と猫ブログ。","data":[61,47,60,101,50,31,39,57,34,34,61,34,38,51,84,101,101,101,101,101,101,101,101,50,38,61,53,71]},{"label":"まとめたニュース","data":[62,55,38,37,33,39,31,44,31,32,42,33,35,37,32,43,32,32,30,29,26,30,32,23,34,25,33,32]},{"label":"ニュースBUZZ","data":[63,43,65,56,64,76,66,95,62,64,98,75,101,101,83,56,59,60,61,37,84,95,93,90,37,33,55,74]},{"label":"PS5速報！","data":[64,63,66,69,71,58,57,58,56,65,58,55,56,53,55,59,72,89,75,58,56,64,60,57,55,62,67,61]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[65,70,83,59,72,80,80,64,67,77,60,60,47,63,60,76,101,101,101,101,76,61,61,52,60,52,66,53]},{"label":"ツイッター速報","data":[66,1,7,33,49,69,29,50,89,101,101,10,10,43,62,38,65,47,50,87,83,18,37,100,101,57,74,34]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[67,98,69,101,101,101,40,32,79,101,101,64,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101]},{"label":"銃とバッジは置いていけ","data":[68,89,101,101,101,101,101,101,101,101,101,101,101,101,101,65,91,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[69,78,101,101,92,92,81,98,91,84,99,94,98,86,68,85,101,74,74,90,101,101,101,101,101,99,91,88]},{"label":"鷹速@ホークスまとめブログ","data":[70,71,75,80,69,74,62,71,64,66,71,72,76,77,69,92,92,84,59,70,74,82,86,75,74,80,30,37]},{"label":"ふくよかまるみのピリカラ人生","data":[71,40,77,46,80,45,71,56,80,50,87,50,81,101,51,81,50,91,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[72,101,101,75,101,101,87,43,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[73,68,80,87,91,86,75,70,87,78,95,101,75,96,101,95,87,90,101,99,73,84,91,92,90,92,61,85]},{"label":"うみこのおとぼけぐらし","data":[74,92,97,92,93,88,88,92,84,69,73,71,72,76,85,75,101,55,101,51,101,59,101,63,101,66,101,101]},{"label":"ライフハックちゃんねる弐式","data":[75,77,84,95,70,64,73,91,75,59,59,74,82,64,80,78,70,86,77,81,78,55,73,66,75,70,54,70]},{"label":"はーとログ","data":[76,84,87,93,90,95,84,81,73,86,82,92,79,69,75,80,69,81,71,82,94,87,90,93,89,91,98,84]},{"label":"なんJ（まとめては）いかんのか？","data":[77,76,101,100,88,79,96,101,101,101,74,77,94,80,101,70,76,101,80,101,101,91,74,81,97,101,62,69]},{"label":"絵日記でございます。","data":[78,54,68,77,74,66,65,65,60,68,85,51,74,78,96,101,101,101,101,94,67,62,17,33,49,65,49,64]},{"label":"サカラボ | サッカーまとめ速報","data":[79,74,78,97,84,84,77,76,65,70,81,78,90,84,73,79,54,69,88,69,71,78,70,74,64,81,83,78]},{"label":"軍事・ミリタリー速報☆彡","data":[80,72,74,83,85,85,74,75,81,79,75,76,70,75,81,74,57,61,57,56,61,74,66,77,73,68,75,72]},{"label":"2chコピペ保存道場","data":[81,69,82,88,75,81,79,84,70,67,79,70,68,71,72,69,67,72,76,72,68,68,64,62,70,75,78,81]},{"label":"登山ちゃんねる","data":[82,90,96,86,62,65,86,85,69,83,77,87,87,94,93,72,73,59,63,76,75,89,84,78,80,72,77,94]},{"label":"デジタルニューススレッド","data":[83,79,101,101,95,93,97,99,82,89,88,89,86,90,88,89,68,73,64,79,80,94,75,82,85,95,94,91]},{"label":"はむらの毎日マンガ","data":[84,53,34,71,34,57,101,59,28,55,101,41,62,33,42,33,43,101,101,101,101,101,101,39,59,101,35,52]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[85,86,88,74,83,94,83,74,77,81,76,85,85,88,74,77,81,79,54,57,54,48,72,91,84,86,52,68]},{"label":"投資ちゃんねる","data":[86,82,86,96,82,89,91,88,78,72,83,82,73,83,71,68,61,64,60,60,64,81,82,80,79,84,69,75]},{"label":"オタクニュース","data":[87,62,101,101,81,83,69,33,58,73,64,79,67,49,45,58,47,50,46,101,101,101,92,94,92,101,95,83]},{"label":"ろぼ速VIP","data":[88,81,99,101,89,91,99,93,83,93,94,86,92,91,90,90,90,94,79,83,88,77,80,86,93,94,88,95]},{"label":"阪神タイガースちゃんねる","data":[89,101,101,101,101,90,101,101,101,101,90,101,101,101,94,101,95,96,101,101,101,101,101,101,101,101,100,101]},{"label":"footballnet【サッカーまとめ】","data":[90,85,100,98,78,97,101,101,90,101,100,99,99,98,101,101,101,101,101,101,101,101,101,101,101,93,85,80]},{"label":"馬鳥速報","data":[91,100,90,85,79,87,78,89,94,63,80,93,78,79,82,91,56,83,66,73,57,75,42,65,61,55,73,77]},{"label":"ダンナ様は安月給","data":[92,101,91,89,101,101,82,77,101,85,72,101,101,93,78,101,101,101,101,101,101,92,101,101,101,101,101,101]},{"label":"鈴木さん速報","data":[93,73,81,79,76,77,70,87,88,91,84,83,88,85,77,84,80,82,73,89,82,85,88,87,83,82,81,82]},{"label":"やみ速@なんJ西武まとめ","data":[94,83,76,90,77,67,72,82,101,82,91,88,77,82,98,87,79,71,101,101,99,101,79,68,94,101,29,58]},{"label":"大艦巨砲主義！","data":[95,88,95,101,96,101,100,94,96,100,96,101,80,89,91,101,93,76,85,80,89,97,97,97,87,97,101,98]},{"label":"ミラクルファミリー","data":[96,101,72,48,86,101,101,101,101,101,93,101,63,16,30,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[98,95,93,101,97,100,93,101,97,74,86,97,97,97,101,96,86,101,101,91,97,88,78,83,91,96,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[99,101,101,101,99,96,101,101,101,101,101,96,101,81,101,101,99,101,97,101,101,101,101,101,96,101,101,96]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[100,93,94,91,94,101,101,90,49,75,101,101,101,101,101,101,101,101,101,101,101,96,98,101,101,101,97,101]},{"label":"独女ちゃんねる","data":[101,24,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,36,41,23,37,82,95,101,66,101,101,84,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ずっと日曜日のターン","data":[101,80,101,101,87,53,68,101,38,53,44,67,51,54,58,71,44,48,44,44,46,47,41,48,42,49,43,49]},{"label":"まとめ太郎！","data":[101,91,101,101,101,99,101,101,101,76,97,95,100,101,101,101,101,101,86,71,87,72,95,96,78,78,82,86]},{"label":"お料理速報","data":[101,94,101,101,101,98,101,101,92,94,89,101,91,73,97,94,94,93,91,86,79,101,87,79,101,83,87,90]},{"label":"しばたまブログ","data":[101,96,101,101,101,101,101,22,33,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,97,101,101,101,101,101,101,99,101,101,101,101,66,59,57,101,101,101,101,93,73,101,101,101,79,89,65]},{"label":"ニュース30over","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101]},{"label":"おたみの日々","data":[101,101,36,82,60,51,101,73,101,101,54,101,101,101,101,88,101,101,93,101,101,101,77,101,101,77,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,37,39,42,36,44,45,101,46,33,38,40,41,39,46,88,100,101,101,101,101,101,101,101,101,101,101]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,39,70,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,73,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101]},{"label":"バラシ屋トシヤの漫画ブログ","data":[101,101,79,78,68,68,101,80,68,101,68,62,60,61,56,63,52,53,51,48,53,52,51,46,48,44,48,43]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,89,81,101,101,85,96,101,101,78,91,101,101,87,101,101,101,94,97,101,101,101,101,101,101,101,101]},{"label":"今日もブブはからまわり。","data":[101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,98,101,101,101,101,101,101,101,101,90,93,99,100,101,101,99,82,74,69,65,63,71,76,85,80,79]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,36,101,101,94,101,101,101,34,101,101,101,101,101,101,54,92,101,101,101,101,101,46,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,43,47,78,76,83,86,98,101,101,101,100,101,101,62,66,84,75,90,98,101,101,101,101,101,101]},{"label":"ぷみらの看護師奮闘記マンガ","data":[101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,72,101,101,101,101,101,101,101,98,89,101,92,99,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ヲタママだっていーじゃない！","data":[101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,85,87,101,92,101,101,101,101,101,101,101]},{"label":"あさことはぎゆうの漫画おきば","data":[101,101,101,101,98,101,92,86,74,71,69,69,66,60,57,64,63,70,58,52,55,60,59,59,63,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[101,101,101,101,100,101,101,101,101,101,101,101,96,92,101,98,101,101,100,100,96,101,101,101,101,101,101,101]},{"label":"甘辛ミックス","data":[101,101,101,101,101,40,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,98,101,101,96,101,101,101,101,95,101,101,101,101,101,101,101,100,101,101,101,79,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,97,76,87,101,100,84,95,99,73,85,92,90,98,95,99,101,101,100,101,101,93]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ハロン棒ch　-競馬まとめ-","data":[101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,91,66,65,89,82,73,92,97]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,77,77,83,78,85,101,89,84,95,89,99,92]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"猫とくも膜下出血の絵日記","data":[101,101,101,101,101,101,101,101,101,101,31,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,64,101,46,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,101,101,101,101,101,101,101,101,101,101,101,90,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"青木ぼんろの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"気になる芸能まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,82,78,65,66,81,80,81,85,88,90,86,87]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,99,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,95,78,93,98,90,83,99,98,100,101,101]},{"label":"はなまるのblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,92,100,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,97,101,101,101,101,96,101,101,101,101,101]},{"label":"日本と韓国は敵か？味方か？　일본과 한국은 적? 아군인가?","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,1,22,101,101,101,101,101,101,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,67,101,101,101,101,101,101,101,101,101,101]},{"label":"海外反応！　I LOVE JAPAN　","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,84,70,71,67,67,67,69,65,63]},{"label":"なにかと徒然クライシス / 星田つまみ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"スマブラ屋さん | スマブラSPまとめ攻略","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,68,101,101,101,101,101,101,101,101]},{"label":"VIP NEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101]},{"label":"NPO法人ペット里親会","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,53,101,88,101,101,101,101]},{"label":"なんでも受信遅報@なんJ・おんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101]},{"label":"ふぇー速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101]},{"label":"日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,8,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101,101]},{"label":"おもちゃの巣（玩具レビュー）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101]},{"label":"ももクロ侍","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101]},{"label":"たかさき通信 - 群馬県高崎市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55]},{"label":"あさのの漫画置き場","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]}];
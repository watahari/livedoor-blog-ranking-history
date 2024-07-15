var labels = ['2024-06-18','2024-06-19','2024-06-20','2024-06-21','2024-06-22','2024-06-23','2024-06-24','2024-06-25','2024-06-26','2024-06-27','2024-06-28','2024-06-29','2024-06-30','2024-07-01','2024-07-02','2024-07-03','2024-07-04','2024-07-05','2024-07-06','2024-07-07','2024-07-08','2024-07-09','2024-07-10','2024-07-11','2024-07-12','2024-07-13','2024-07-14','2024-07-15',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,2,2,1,1,3,3,3,2,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2]},{"label":"はちま起稿","data":[2,3,3,3,3,3,5,5,4,5,5,4,4,5,5,4,4,4,3,4,4,5,4,4,4,5,5,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,5,4,4,5,4,4,4,7,6,4,5,5,6,7,8,6,6,8,8,6,6,8,8,8,8,7,6]},{"label":"まめきちまめこニートの日常","data":[4,1,1,1,1,1,1,3,3,1,1,1,3,3,1,1,1,2,4,1,1,1,2,3,1,1,1,1]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,6,6,6,8,7,6,6,6,9,9,8,10,4,4,6,8,8,7,6,8,10,10,12,12,12,12,12]},{"label":"ハムスター速報","data":[6,7,7,7,6,8,11,9,9,7,7,7,8,10,6,5,7,5,6,9,7,4,6,6,6,7,8,9]},{"label":"痛いニュース(ﾉ∀`)","data":[7,4,5,5,4,5,8,7,5,4,6,6,6,8,9,7,5,7,5,5,10,8,5,5,5,4,4,4]},{"label":"ヤゴヴのマンガ劇場","data":[8,8,8,8,7,6,7,8,8,8,8,9,9,7,8,9,9,10,10,10,11,16,34,24,21,23,25,25]},{"label":"もちログ","data":[9,9,10,10,9,9,10,10,10,11,10,10,11,11,10,12,10,9,9,7,5,7,7,7,7,6,6,5]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,10,9,11,11,11,12,11,11,10,11,11,12,12,12,11,12,12,13,13,13,11,11,11,11,11,11,10]},{"label":"暇つぶしニュース","data":[11,11,11,9,10,10,9,12,12,12,12,12,7,9,11,10,11,11,11,11,9,9,9,10,10,10,9,8]},{"label":"わんこーる速報！","data":[12,13,13,12,13,12,13,13,16,14,15,15,14,16,16,14,16,14,15,16,16,13,13,13,13,15,13,14]},{"label":"哲学ニュースnwk","data":[13,17,15,13,14,16,16,17,14,13,13,13,13,19,14,15,18,22,20,17,21,18,16,14,14,14,14,13]},{"label":"ガレ速@フォロワー体験漫画","data":[14,16,12,16,26,14,3,2,2,2,2,2,1,1,3,3,3,3,2,3,3,3,3,2,3,3,3,3]},{"label":"なんJ PRIDE","data":[15,15,16,15,16,15,14,14,15,16,16,16,18,13,18,18,17,21,18,18,17,19,14,18,16,16,16,15]},{"label":"【2ch】ニュー速クオリティ","data":[16,19,17,17,12,13,15,15,17,21,18,18,17,18,19,17,21,20,16,20,18,17,17,16,17,18,18,18]},{"label":"日刊やきう速報","data":[17,24,20,22,19,17,18,24,22,18,17,20,20,17,23,23,19,27,24,24,19,27,23,23,22,22,19,20]},{"label":"ねいろ速報さん","data":[18,20,21,20,20,20,20,16,20,22,22,23,22,22,17,20,23,19,21,19,22,20,18,19,18,20,17,19]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[19,18,19,19,17,18,17,20,18,17,20,19,21,26,20,22,22,16,19,21,23,21,20,21,19,19,20,21]},{"label":"ラビット速報","data":[20,21,23,21,22,19,19,18,19,15,14,21,19,14,15,16,20,18,17,15,15,15,15,17,15,17,15,17]},{"label":"ゴールデンタイムズ","data":[21,27,27,27,27,22,24,25,32,26,23,22,25,30,32,29,29,25,25,23,24,22,27,28,30,25,27,23]},{"label":"おーるじゃんる","data":[22,14,18,18,18,26,25,21,27,23,19,17,16,23,25,19,15,17,14,22,20,14,19,20,20,21,22,16]},{"label":"うしみつ-5chまとめ-","data":[23,25,28,24,25,23,21,22,24,28,26,26,24,27,26,27,25,29,28,30,27,30,26,27,29,32,28,30]},{"label":"おうまがタイムズ","data":[24,22,26,25,21,25,23,26,26,29,29,27,28,28,31,26,30,26,26,25,28,28,29,25,24,29,26,24]},{"label":"稲妻速報","data":[25,26,24,23,24,24,22,23,23,24,24,24,23,24,22,24,27,23,22,26,25,23,22,22,23,24,24,22]},{"label":"あいチャンネル","data":[26,54,25,64,29,77,27,70,101,31,78,30,70,36,27,66,32,77,30,67,32,25,68,31,70,28,68,29]},{"label":"NEWSぽけまとめーる","data":[27,36,34,26,28,27,26,28,31,25,27,28,29,21,28,30,26,24,23,28,37,36,24,30,26,27,23,27]},{"label":"VIPPERな俺","data":[28,23,22,14,23,28,28,27,25,19,31,25,26,25,30,21,24,28,27,34,26,24,21,15,25,31,21,26]},{"label":"なんJクエスト","data":[29,30,35,29,31,29,30,29,28,27,32,31,30,29,29,36,37,33,35,38,34,37,37,35,35,39,32,37]},{"label":"IT速報","data":[30,34,32,34,36,32,33,34,33,32,36,32,32,37,37,33,33,36,33,31,30,29,33,37,38,41,29,28]},{"label":"ぶる速-VIP","data":[31,28,30,37,33,34,29,30,30,35,37,34,41,33,21,28,31,31,31,32,31,34,30,29,34,37,39,36]},{"label":"カラパイア","data":[32,31,36,32,34,36,35,33,37,44,41,40,35,32,40,42,41,40,45,47,39,41,42,39,43,47,44,40]},{"label":"カイカイ反応通信","data":[33,29,33,30,32,39,38,32,36,34,33,37,39,38,35,37,44,41,34,36,40,39,40,43,40,40,43,41]},{"label":"ネギ速","data":[34,32,31,28,30,31,31,35,35,37,34,38,34,35,39,39,35,35,36,37,33,32,32,33,33,33,30,32]},{"label":"芸能人の気になる噂","data":[35,40,46,38,51,44,44,39,42,43,47,48,46,46,48,46,53,49,52,44,44,54,46,49,46,42,40,39]},{"label":"De速","data":[36,56,64,63,62,54,58,81,76,85,69,59,47,64,75,64,60,63,39,54,62,60,63,44,39,48,64,65]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[37,51,41,36,40,35,36,40,29,33,28,35,42,39,61,40,34,34,44,42,38,38,52,46,36,35,31,34]},{"label":"ガールズVIPまとめ","data":[38,44,56,53,46,55,32,45,54,59,52,46,48,43,59,55,52,43,41,55,52,55,43,64,56,61,55,43]},{"label":"オタク.com －オタコム－","data":[39,35,38,42,49,42,39,36,39,42,40,49,49,42,42,45,48,37,38,45,50,44,45,40,48,46,46,42]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[40,39,49,33,41,47,48,49,43,39,38,39,36,44,52,50,54,47,51,51,55,57,49,48,41,51,50,50]},{"label":"カオスちゃんねる","data":[41,43,43,51,44,41,45,43,48,50,45,47,45,50,49,44,50,42,47,48,47,47,51,50,47,44,45,47]},{"label":"乃木坂46まとめ 1/46","data":[42,65,57,48,57,48,59,57,40,48,59,55,43,52,62,60,42,44,62,58,41,26,31,26,27,36,41,51]},{"label":"あにこ便","data":[43,48,58,55,56,56,50,48,50,56,56,60,59,53,47,51,61,57,56,50,45,46,50,55,53,56,52,44]},{"label":"スズぺぺの人生何とかなってます!!","data":[44,41,42,40,37,43,41,37,38,38,35,36,33,34,34,34,36,32,32,33,35,33,28,32,32,30,42,35]},{"label":"パチンコ・パチスロ.com","data":[45,33,51,56,60,57,55,41,49,57,54,53,58,66,36,52,65,54,46,65,66,49,53,41,52,54,57,67]},{"label":"闇落ち女子トーク","data":[46,45,48,50,38,58,53,52,59,55,49,63,55,41,50,84,97,90,101,101,101,101,101,101,101,101,101,63]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[47,38,47,35,39,38,42,38,44,41,44,44,44,40,43,31,39,50,64,72,78,64,60,83,71,79,65,62]},{"label":"ついんてーる速報","data":[48,46,50,41,43,45,43,51,46,52,55,57,51,54,46,43,57,48,61,43,51,53,54,47,44,45,36,49]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[49,42,37,39,42,40,49,58,62,62,48,54,62,59,54,54,49,53,59,56,54,59,59,57,50,55,53,45]},{"label":"馬鳥速報","data":[50,57,65,59,64,64,62,59,47,40,30,29,27,31,24,25,28,30,29,29,36,35,25,34,31,26,35,33]},{"label":"ぱんをたずねて2000里ちょい","data":[51,47,44,43,47,30,47,46,34,30,42,33,31,45,38,38,43,55,40,40,53,48,44,36,55,53,54,61]},{"label":"海外の万国反応記＠海外の反応","data":[52,50,55,45,54,52,51,53,52,46,43,45,52,51,53,53,55,51,49,57,64,56,55,51,51,49,48,55]},{"label":"働く大人の非常識","data":[53,75,67,61,93,100,71,101,84,91,70,58,61,88,93,70,66,78,84,59,43,51,58,65,67,52,58,52]},{"label":"ライフハックちゃんねる弐式","data":[54,59,79,78,76,78,73,72,75,92,82,81,82,71,82,82,90,83,77,83,80,71,70,69,72,85,85,82]},{"label":"世にも奇妙ななんかの話","data":[55,12,14,74,15,21,96,19,21,95,21,14,74,20,60,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ポリー速報","data":[56,58,45,52,45,37,54,60,57,51,53,51,57,49,55,61,58,60,58,61,57,61,61,62,63,66,61,53]},{"label":"PS5速報！","data":[57,37,29,31,35,33,52,42,45,53,51,50,53,55,58,47,45,38,43,46,56,50,48,45,45,43,47,60]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[58,63,40,49,55,53,57,61,53,64,65,74,64,62,72,71,68,61,54,60,60,63,66,75,73,70,60,64]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[59,79,59,57,88,79,75,92,82,60,75,76,66,70,78,62,71,80,81,91,81,83,90,100,95,96,81,84]},{"label":"まとめたニュース","data":[60,49,53,44,48,50,40,50,56,45,39,43,50,48,45,49,51,52,55,63,46,40,41,53,54,59,49,58]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[61,60,83,80,66,60,64,67,66,72,101,71,101,83,66,89,56,56,57,53,59,58,57,60,58,62,97,101]},{"label":"ツイッター速報","data":[62,101,101,101,101,101,101,101,13,49,101,101,101,67,33,57,14,15,42,86,79,101,92,74,28,13,33,76]},{"label":"サル山の裏マンガ","data":[63,101,66,101,63,101,69,68,70,63,62,62,63,101,56,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[64,67,77,72,65,67,68,78,78,77,67,64,69,72,81,63,69,71,71,76,77,72,76,71,68,82,70,75]},{"label":"流速VIP","data":[65,55,70,58,71,59,46,65,67,71,66,69,65,68,68,56,67,59,60,66,63,62,47,59,59,68,62,48]},{"label":"まとめロッテ！","data":[66,74,68,79,101,89,79,101,101,96,73,85,83,100,69,73,89,100,100,99,96,90,100,101,101,83,77,101]},{"label":"あんころの漫画日和","data":[67,53,54,67,52,51,60,47,41,58,46,41,38,56,44,41,63,45,37,41,61,45,38,56,42,38,37,59]},{"label":"FF14速報","data":[68,95,89,91,101,96,101,85,60,66,58,52,60,61,51,32,47,39,48,35,48,43,39,42,49,50,56,54]},{"label":"最強ジャンプ放送局","data":[69,85,81,73,78,84,90,71,81,89,85,84,89,92,76,93,91,82,85,88,89,82,88,93,87,86,82,87]},{"label":"はーとログ","data":[70,69,69,84,74,69,63,77,71,73,71,78,71,86,80,72,79,76,70,75,73,75,80,79,76,74,74,72]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[71,61,61,62,58,62,56,64,64,69,63,68,68,73,73,69,72,68,74,69,71,69,67,63,62,67,69,69]},{"label":"ジャンプ速報","data":[72,97,101,101,84,71,66,88,99,86,92,87,94,81,77,88,95,93,73,77,69,78,87,84,78,87,78,73]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[73,101,101,101,101,92,97,101,101,101,81,101,93,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101]},{"label":"【2ch】コピペ情報局","data":[74,71,62,69,61,66,61,69,68,76,74,67,67,69,87,87,80,73,78,84,85,92,69,92,93,72,72,85]},{"label":"投資ちゃんねる","data":[75,77,78,76,70,63,67,86,74,75,79,82,80,75,79,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[76,66,98,86,75,70,74,54,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[77,68,73,71,73,72,81,89,83,93,90,88,101,97,95,67,82,88,72,68,82,65,71,66,64,63,67,57]},{"label":"デジタルニューススレッド","data":[78,83,91,77,89,80,83,91,89,87,87,77,78,77,83,81,85,74,79,80,86,76,81,78,65,89,76,74]},{"label":"今日速2ch","data":[79,89,76,88,82,61,84,75,80,98,95,79,84,101,71,96,101,101,63,62,65,81,101,91,82,65,59,77]},{"label":"サカラボ | サッカーまとめ速報","data":[80,94,88,90,94,99,98,98,101,101,94,95,101,99,99,97,94,89,89,100,99,94,93,98,101,91,94,93]},{"label":"MLB NEWS@まとめ","data":[81,101,72,87,81,68,65,87,85,61,64,70,87,74,94,83,75,86,92,97,84,84,86,90,79,94,93,88]},{"label":"ずっと日曜日のターン","data":[82,52,60,46,80,65,70,83,61,54,91,75,56,57,57,65,77,84,65,71,83,77,64,68,83,60,63,78]},{"label":"軍事・ミリタリー速報☆彡","data":[83,76,75,70,72,73,72,79,69,84,72,80,77,78,70,68,76,75,76,78,72,79,78,81,75,75,71,71]},{"label":"あやかずランド","data":[84,82,87,85,100,101,101,101,92,99,88,90,92,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[85,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[86,101,82,101,92,82,101,63,63,101,68,101,75,101,74,78,101,79,75,101,68,66,101,54,57,101,66,101]},{"label":"なんJ（まとめては）いかんのか？","data":[87,64,52,75,53,46,34,44,51,20,25,42,37,58,89,48,40,58,53,49,42,70,62,58,60,57,51,70]},{"label":"ろぼ速VIP","data":[88,92,86,82,91,75,82,94,86,82,84,92,72,87,92,92,87,87,91,85,91,91,85,86,80,81,83,90]},{"label":"お料理速報","data":[89,81,96,92,98,87,93,84,91,88,101,91,101,91,90,100,96,94,94,90,87,95,95,88,86,101,95,100]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[90,87,92,83,96,88,85,90,88,90,89,94,91,84,96,101,92,97,90,94,95,87,99,89,101,90,90,89]},{"label":"鈴木さん速報","data":[91,78,80,66,77,76,77,80,72,78,76,89,86,79,86,91,83,72,83,93,75,74,65,70,74,64,73,83]},{"label":"登山ちゃんねる","data":[92,96,101,81,95,83,80,82,65,68,80,86,90,65,64,80,78,81,80,82,76,67,79,72,69,80,79,79]},{"label":"絵日記でございます。","data":[93,70,90,65,68,74,101,101,87,80,83,93,88,89,97,75,84,64,82,73,97,73,82,76,77,73,89,68]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[94,86,101,101,101,101,101,56,94,36,50,101,101,101,101,101,101,96,97,14,12,52,56,85,90,76,100,66]},{"label":"ダイエット速報＠2ちゃんねる","data":[95,88,85,97,83,81,87,96,97,74,86,73,81,85,85,94,74,91,101,79,58,80,83,77,101,92,80,94]},{"label":"footballnet【サッカーまとめ】","data":[96,101,63,68,67,101,92,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュースBUZZ","data":[97,80,74,54,59,49,37,31,58,47,60,65,40,47,65,58,70,70,68,52,49,42,75,61,66,58,101,56]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[98,90,97,95,97,86,94,101,100,97,96,100,95,101,100,101,100,95,98,98,88,93,94,96,100,93,91,96]},{"label":"阪神タイガースちゃんねる","data":[99,93,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,73,92,101,101,101]},{"label":"おる速","data":[100,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,62,101,101,50,101,101,55,101,101,101,72,73,101,41,101,38,101,101,27,101,101,101,52,61,101,101,46]},{"label":"カエルDXのオタ活日記","data":[101,72,95,89,101,85,101,99,93,70,100,61,76,101,67,90,73,69,67,89,101,101,97,101,84,95,87,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,84,94,93,87,101,89,73,95,94,101,96,85,96,101,101,86,101,101,87,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,98,101,101,101,101,101,101,90,101,101,101,101,101,101,79,101,101,101,101,101,101,89,101,101,101,101,101]},{"label":"えび通","data":[101,99,84,94,101,93,100,101,101,101,101,101,100,95,101,74,101,101,101,101,93,96,101,101,97,97,88,101]},{"label":"稼げるまとめ速報","data":[101,100,101,96,79,101,91,101,101,101,101,97,101,98,101,101,88,98,101,81,100,101,101,87,89,84,101,97]},{"label":"コノユビニュース","data":[101,101,39,47,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,71,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[101,101,93,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,99,101,101,101]},{"label":"バズッター速報","data":[101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,60,101,101,101,74,55,101,61,101,101,101,101,101,99,65,101,101,101,101,101,101,81,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,69,98,101,66,98,67,99,101,101,63,101,101,101,101,101,101,101,101,74,99,101,78,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,99,95,99,95,101,101,98,99,101,101,101,101,101,92,96,95,94,88,101,101,96,101,98,81]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,90,88,76,77,65,57,56,54,60,63,59,59,62,50,39,29,31,35,38,37,34,34,38]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,91,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,94,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"とうふう絵日記～マイペース夫と３人子育て～","data":[101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,62,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,81,93,101,101,101,101,101,101,101,101,101,101,86,98,94,101,98,92,92]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,101,101,101,101,83,77,66,79,82,98,76,62,85,66,70,74,89,84,67,88,88,84,80]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,101,101,101,100,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,97,101,97,90,101,101,101,101,86,74,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,101,98,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,15,15,91,101,101,101,101,101,101,101,101,101,101,101,101,91]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,96,101,84,86,101,101,93,101,101,101,101,101,101,99,101,99]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"気になる芸能まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,100,99,101]},{"label":"魔界のニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニート極道「牧村ユタカ」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,13,13,13,12,12,14,12,12,9,9,9,10,11]},{"label":"バズッター速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,98,101,99,101,101,101,36,80,101,71,96,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,35,46,66,87,92,92,97,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"投資ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,81,67,69,64,67,68,73,82,85,69,75,86]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,64,101,101,101,101,101,101,101,91,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,98,101,101,101,101,101,101]},{"label":"ふれにゅー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,101,91,95,101,101,101,95]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,85,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,99,96,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101]},{"label":"TweetPocket | Twitterまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"トレカ相場最新ランキング[販売買取価格]","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,38,31]},{"label":"メイドカフェぴなふぉあ・公式ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101]}];
var labels = ['2024-07-12','2024-07-13','2024-07-14','2024-07-15','2024-07-16','2024-07-17','2024-07-18','2024-07-19','2024-07-20','2024-07-21','2024-07-22','2024-07-23','2024-07-24','2024-07-25','2024-07-26','2024-07-27','2024-07-28','2024-07-29','2024-07-30','2024-07-31','2024-08-01','2024-08-02','2024-08-03','2024-08-04','2024-08-05','2024-08-06','2024-08-07','2024-08-08',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,3,5,1,1,1,1,3,3,1,1,1,2,3,1,1,2,3,7,1,1,101,1,2,6]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,1,1,2,2,2,3,2,1,2,2,2,1,1,3,3,3,2,3,3,3,101,2,1,1]},{"label":"ガレ速@フォロワー体験漫画","data":[3,3,3,3,2,3,3,3,4,2,1,2,3,8,8,9,6,2,8,10,9,2,4,22,101,22,12,10]},{"label":"はちま起稿","data":[4,5,5,7,4,2,5,4,5,4,4,4,4,3,3,3,2,5,4,5,4,6,6,4,101,7,6,3]},{"label":"痛いニュース(ﾉ∀`)","data":[5,4,4,4,7,4,4,5,3,7,6,6,5,5,4,5,8,7,6,4,5,8,5,5,101,6,7,7]},{"label":"ハムスター速報","data":[6,7,8,9,8,6,6,7,6,9,9,7,6,6,5,4,7,8,2,1,1,4,8,7,101,3,3,2]},{"label":"もちログ","data":[7,6,6,5,5,29,38,39,48,52,47,46,45,45,38,29,19,31,34,37,41,42,40,38,101,31,27,28]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[8,8,7,6,6,7,7,6,7,6,5,5,7,4,6,6,4,4,5,6,6,5,7,6,101,4,4,5]},{"label":"ニート極道「牧村ユタカ」","data":[9,9,10,11,9,9,9,10,10,8,8,11,11,13,10,7,5,6,11,7,7,1,2,2,101,5,5,4]},{"label":"暇つぶしニュース","data":[10,10,9,8,10,8,8,9,8,5,7,8,8,7,7,8,9,9,7,8,8,9,10,9,101,8,9,9]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,11,11,10,12,10,10,11,9,10,10,9,9,10,11,11,11,10,9,9,10,10,11,10,101,9,8,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[12,12,12,12,11,11,11,12,11,11,11,10,10,9,9,10,10,11,12,11,11,12,13,11,101,10,10,12]},{"label":"わんこーる速報！","data":[13,15,13,14,14,12,13,14,12,12,12,13,16,14,13,12,12,12,14,15,14,14,16,13,101,12,14,14]},{"label":"哲学ニュースnwk","data":[14,14,14,13,13,14,14,13,13,16,17,14,13,11,15,14,16,14,15,14,13,13,14,8,101,13,13,13]},{"label":"ラビット速報","data":[15,17,15,17,17,16,16,15,15,14,15,19,17,17,16,15,14,16,17,18,16,19,15,14,101,16,19,17]},{"label":"なんJ PRIDE","data":[16,16,16,15,18,17,21,17,14,17,13,16,19,18,21,19,26,24,23,25,20,17,19,17,101,15,17,16]},{"label":"【2ch】ニュー速クオリティ","data":[17,18,18,18,15,13,12,16,16,15,18,18,14,16,14,16,15,18,20,19,17,15,18,19,101,14,15,19]},{"label":"ねいろ速報さん","data":[18,20,17,19,16,18,18,20,22,20,20,20,21,21,17,18,22,21,19,23,23,24,23,20,101,17,22,24]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[19,19,20,21,20,19,17,21,19,23,21,21,18,19,18,17,20,19,16,17,19,20,17,18,101,20,20,20]},{"label":"おーるじゃんる","data":[20,21,22,16,19,15,15,22,17,13,19,15,23,20,19,20,21,17,10,13,18,18,9,15,101,19,21,21]},{"label":"ヤゴヴのマンガ劇場","data":[21,23,25,25,29,28,23,19,20,18,14,12,12,12,12,13,13,13,13,12,12,11,12,12,101,11,11,11]},{"label":"日刊やきう速報","data":[22,22,19,20,23,23,19,24,18,19,16,22,15,15,24,25,18,15,21,16,24,16,20,16,101,18,16,15]},{"label":"稲妻速報","data":[23,24,24,22,25,22,20,23,23,21,23,26,22,23,23,24,28,29,28,26,26,30,26,29,101,27,28,23]},{"label":"おうまがタイムズ","data":[24,29,26,24,24,21,33,26,28,29,30,27,35,30,22,22,27,34,29,21,28,37,28,36,101,41,101,101]},{"label":"VIPPERな俺","data":[25,31,21,26,22,24,22,25,21,22,25,17,20,22,20,23,25,27,27,30,38,21,21,21,101,25,23,26]},{"label":"NEWSぽけまとめーる","data":[26,27,23,27,26,27,26,27,31,26,22,25,29,32,30,26,30,26,25,31,40,26,24,24,101,35,43,42]},{"label":"乃木坂46まとめ 1/46","data":[27,36,41,51,28,25,37,36,41,50,37,48,43,61,47,63,39,28,46,56,42,41,36,53,101,56,42,46]},{"label":"ツイッター速報","data":[28,13,33,76,43,89,98,8,27,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うしみつ-5chまとめ-","data":[29,32,28,30,31,31,29,29,25,25,24,24,25,27,25,28,29,25,26,29,29,33,25,23,101,28,24,22]},{"label":"ゴールデンタイムズ","data":[30,25,27,23,21,26,24,18,24,24,26,23,28,26,26,21,23,20,18,27,22,23,22,25,101,21,26,27]},{"label":"馬鳥速報","data":[31,26,35,33,30,20,25,31,26,37,40,35,34,31,28,39,41,54,35,22,15,36,32,30,101,37,29,32]},{"label":"スズぺぺの人生何とかなってます!!","data":[32,30,42,35,35,33,34,34,33,35,33,30,32,35,33,35,35,38,36,34,37,38,30,31,101,30,31,31]},{"label":"ネギ速","data":[33,33,30,32,34,39,35,38,35,36,34,31,26,25,29,32,32,32,24,28,31,40,33,27,101,23,18,18]},{"label":"ぶる速-VIP","data":[34,37,39,36,36,34,27,28,29,32,29,28,36,33,27,40,44,23,30,35,35,31,35,34,101,40,58,53]},{"label":"なんJクエスト","data":[35,39,32,37,37,37,36,33,36,31,32,39,33,39,41,41,33,33,32,33,33,35,39,32,101,32,36,36]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[36,35,31,34,33,32,31,30,42,33,39,32,31,41,36,30,36,37,39,42,32,29,37,33,101,36,32,30]},{"label":"人間まおと愉快な仲間たち","data":[37,34,34,38,38,38,39,35,34,34,31,40,24,28,31,31,31,35,22,20,21,27,29,26,101,29,25,25]},{"label":"IT速報","data":[38,41,29,28,32,30,30,32,37,28,35,34,27,29,35,33,37,36,33,32,25,28,34,35,101,26,30,35]},{"label":"De速","data":[39,48,64,65,58,55,61,67,69,59,59,58,59,70,42,57,60,69,77,96,83,64,62,73,101,86,85,77]},{"label":"カイカイ反応通信","data":[40,40,43,41,42,41,41,37,44,48,41,36,38,40,32,36,34,43,40,36,34,34,41,45,101,38,34,37]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[41,51,50,50,50,43,40,44,52,61,52,41,42,55,48,37,49,51,49,46,58,54,44,47,101,42,46,57]},{"label":"あんころの漫画日和","data":[42,38,37,59,46,40,56,43,39,41,63,50,37,43,37,43,63,81,78,100,101,62,47,67,101,39,53,51]},{"label":"カラパイア","data":[43,47,44,40,39,35,45,45,38,40,36,38,48,49,49,51,56,50,50,50,56,52,56,49,101,46,45,40]},{"label":"ついんてーる速報","data":[44,45,36,49,45,48,52,51,60,49,49,59,58,44,40,45,57,48,43,49,57,51,46,41,101,48,44,39]},{"label":"PS5速報！","data":[45,43,47,60,48,46,44,42,47,46,51,43,41,42,45,50,46,55,47,39,51,68,65,63,101,61,61,65]},{"label":"芸能人の気になる噂","data":[46,42,40,39,41,45,48,40,40,42,45,54,52,50,44,44,43,42,45,47,45,44,45,42,101,43,39,41]},{"label":"カオスちゃんねる","data":[47,44,45,47,47,47,49,48,51,60,57,44,44,57,46,42,47,41,52,48,48,45,53,46,101,50,47,49]},{"label":"オタク.com －オタコム－","data":[48,46,46,42,44,44,46,50,45,44,38,42,47,47,39,38,42,40,41,45,46,48,51,50,101,33,38,33]},{"label":"FF14速報","data":[49,50,56,54,59,36,43,47,54,64,67,37,46,46,50,56,67,67,57,44,44,49,54,48,101,52,48,52]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[50,55,53,45,62,53,42,46,43,54,46,33,39,48,43,47,55,49,42,38,53,50,42,51,101,44,40,48]},{"label":"海外の万国反応記＠海外の反応","data":[51,49,48,55,52,54,47,49,53,55,54,49,54,54,54,48,50,53,44,52,52,46,43,57,101,45,49,50]},{"label":"パチンコ・パチスロ.com","data":[52,54,57,67,80,69,74,70,62,67,60,72,60,37,51,49,66,62,70,64,63,56,55,56,101,57,52,44]},{"label":"あにこ便｜アニメ感想サイト","data":[53,56,52,44,49,51,54,52,57,56,44,47,55,60,55,60,58,58,55,59,64,59,61,55,101,51,51,55]},{"label":"まとめたニュース","data":[54,59,49,58,51,50,53,63,49,51,43,57,62,53,60,54,45,59,59,54,39,60,52,59,101,55,41,43]},{"label":"ぱんをたずねて2000里ちょい","data":[55,53,54,61,53,77,58,66,55,53,58,52,68,52,56,46,38,60,37,41,67,78,69,68,101,83,57,56]},{"label":"ガールズVIPまとめ","data":[56,61,55,43,40,52,55,53,50,45,28,45,53,56,52,52,54,46,48,40,54,43,49,39,101,49,55,54]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[57,101,66,101,67,101,64,58,101,68,101,62,101,58,101,61,65,101,64,101,70,101,59,101,101,101,54,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[58,62,97,101,82,61,86,59,65,66,89,65,71,69,80,101,101,72,62,69,82,71,63,79,101,78,73,71]},{"label":"流速VIP","data":[59,68,62,48,61,59,75,68,66,62,61,63,66,65,68,66,61,63,66,66,59,55,58,58,101,47,50,47]},{"label":"なんJ（まとめては）いかんのか？","data":[60,57,51,70,54,49,50,64,46,38,42,55,49,34,61,55,53,56,82,53,55,47,48,44,101,58,37,45]},{"label":"マンガと私と猫ブログ。","data":[61,101,101,46,101,101,62,61,101,101,50,81,101,38,101,69,64,101,53,94,101,101,96,40,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[62,67,69,69,72,64,70,55,68,69,55,66,67,68,66,53,70,75,74,79,74,75,75,81,101,65,66,72]},{"label":"ポリー速報","data":[63,66,61,53,56,57,59,54,59,57,65,51,51,59,59,70,52,52,56,65,65,66,64,62,101,60,68,61]},{"label":"うみこのおとぼけぐらし","data":[64,63,67,57,63,56,57,57,64,39,66,56,57,51,58,58,59,57,51,58,50,58,57,61,101,54,81,97]},{"label":"デジタルニューススレッド","data":[65,89,76,74,71,91,89,86,86,80,79,80,84,77,82,84,83,82,85,88,96,74,87,85,101,90,87,73]},{"label":"ニュースBUZZ","data":[66,58,101,56,69,66,51,41,61,84,64,67,61,66,94,80,40,44,61,57,47,57,67,52,101,76,101,101]},{"label":"働く大人の非常識","data":[67,52,58,52,60,58,65,56,58,43,48,61,56,94,90,71,71,76,101,71,61,67,50,43,101,93,101,101]},{"label":"2chコピペ保存道場","data":[68,82,70,75,75,68,78,74,72,77,72,70,70,67,63,74,72,66,68,75,80,70,70,75,101,68,65,63]},{"label":"登山ちゃんねる","data":[69,80,79,79,77,80,73,79,76,82,78,77,86,78,89,73,84,71,69,76,66,73,71,76,101,74,71,62]},{"label":"あいチャンネル","data":[70,28,68,29,27,60,32,78,30,30,82,29,73,36,85,34,85,39,31,80,36,90,101,101,101,101,101,101]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[71,79,65,62,66,71,80,73,70,71,73,60,40,62,53,59,62,65,67,62,60,69,66,65,101,59,35,38]},{"label":"ライフハックちゃんねる弐式","data":[72,85,85,82,68,74,87,75,80,70,83,75,83,90,64,87,90,74,63,77,78,89,94,84,101,64,59,76]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[73,70,60,64,57,62,67,65,67,47,53,69,77,79,81,67,68,68,60,92,94,84,83,64,101,75,67,64]},{"label":"鈴木さん速報","data":[74,64,73,83,70,65,76,77,83,78,62,64,75,84,77,79,88,86,81,85,85,82,85,66,101,62,63,66]},{"label":"軍事・ミリタリー速報☆彡","data":[75,75,71,71,64,67,77,72,74,76,75,76,69,80,78,72,79,73,80,81,69,80,76,78,101,69,74,70]},{"label":"はーとログ","data":[76,74,74,72,79,83,84,82,73,75,80,71,79,82,88,77,82,79,83,63,79,83,74,87,101,72,82,74]},{"label":"絵日記でございます。","data":[77,73,89,68,76,82,68,83,56,58,56,53,50,63,57,65,74,99,97,101,87,91,101,95,101,82,92,91]},{"label":"ジャンプ速報","data":[78,87,78,73,74,63,69,60,75,83,76,79,74,71,74,76,75,64,58,61,90,88,91,91,101,77,94,101]},{"label":"MLB NEWS@まとめ","data":[79,94,93,88,101,88,85,92,84,94,95,84,101,101,91,95,98,87,90,99,101,101,101,101,101,101,96,94]},{"label":"ろぼ速VIP","data":[80,81,83,90,85,85,90,89,89,96,84,86,81,86,62,85,97,88,86,83,89,85,80,90,101,92,86,82]},{"label":"チリツモブログ","data":[81,101,101,101,101,101,71,101,101,101,101,101,76,101,101,101,101,101,101,68,101,101,101,70,101,101,70,101]},{"label":"今日速2ch","data":[82,65,59,77,55,72,81,90,77,74,77,68,65,72,69,81,73,61,71,86,68,63,77,72,101,84,64,59]},{"label":"ずっと日曜日のターン","data":[83,60,63,78,101,87,63,96,63,63,74,98,63,87,72,97,69,90,92,101,71,53,60,54,101,91,101,101]},{"label":"カエルDXのオタ活日記","data":[84,95,87,101,88,78,91,76,101,101,101,101,101,101,70,101,101,101,101,101,75,65,95,96,101,101,101,101]},{"label":"投資ちゃんねる","data":[85,69,75,86,86,70,88,80,79,72,85,73,72,76,71,78,91,78,76,73,77,77,73,71,101,53,56,60]},{"label":"お料理速報","data":[86,101,95,100,91,92,95,97,101,86,99,101,90,97,93,100,101,93,91,90,101,101,84,101,101,88,76,78]},{"label":"最強ジャンプ放送局","data":[87,86,82,87,78,79,92,85,92,85,88,74,88,93,87,91,93,92,79,97,101,101,89,98,101,66,79,79]},{"label":"やみ速@なんJ西武まとめ","data":[88,88,84,80,73,81,82,62,71,79,81,91,89,64,83,86,101,97,96,84,76,93,100,97,101,95,97,87]},{"label":"稼げるまとめ速報","data":[89,84,101,97,101,101,101,101,97,100,94,95,101,95,100,99,101,101,101,101,91,101,99,99,101,79,93,84]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[90,76,100,66,93,101,99,71,93,99,68,90,101,101,101,101,87,91,101,101,86,94,79,88,101,80,98,100]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"【2ch】コピペ情報局","data":[93,72,72,85,83,76,60,87,101,65,69,89,64,88,101,75,86,83,75,72,92,72,72,82,101,70,69,58]},{"label":"TweetPocket | Twitterまとめ","data":[94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[95,96,81,84,84,84,79,81,82,81,71,99,80,85,65,88,81,85,101,89,93,86,86,89,101,85,84,67]},{"label":"大艦巨砲主義！","data":[96,101,98,81,98,90,93,99,91,98,101,96,91,98,84,90,101,101,101,87,101,95,93,101,101,94,95,89]},{"label":"えび通","data":[97,97,88,101,95,97,101,100,99,92,97,92,100,100,101,101,101,100,98,101,101,98,101,101,101,101,101,99]},{"label":"もっちのママ友トラブル・子育て漫画","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[99,101,101,101,100,101,101,101,101,101,101,101,101,101,101,94,101,101,101,95,101,101,82,101,101,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[100,93,91,96,97,101,97,101,100,97,93,87,97,101,97,98,95,96,99,101,101,101,101,101,101,99,101,95]},{"label":"バズッター速報","data":[101,71,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トレカ相場最新ランキング[販売買取価格]","data":[101,77,38,31,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,78,101,101,81,101,101,101,87,101,101,85,101,101,101,101,80,101,101,101,81,101,101,101,101,98,101,75]},{"label":"まとめロッテ！","data":[101,83,77,101,99,95,101,101,96,90,101,94,101,99,99,101,101,101,101,101,95,96,97,101,101,101,101,90]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[101,90,90,89,92,99,101,95,88,93,91,93,87,89,86,93,100,98,87,93,101,97,92,100,101,89,80,86]},{"label":"サカラボ | サッカーまとめ速報","data":[101,91,94,93,90,86,66,69,85,101,87,78,78,83,75,89,94,77,73,78,84,76,78,74,101,81,89,83]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,92,80,94,101,94,101,88,90,73,70,83,85,73,79,62,77,84,72,67,72,79,68,77,101,73,90,80]},{"label":"資格ちゃんねる","data":[101,98,92,92,87,98,101,98,81,88,98,97,93,74,101,101,101,95,95,101,101,99,101,101,101,71,72,93]},{"label":"鷹速@ホークスまとめブログ","data":[101,99,101,99,89,96,100,101,101,89,96,101,101,101,101,101,101,101,93,101,101,101,98,94,101,101,101,101]},{"label":"気になる芸能まとめ","data":[101,100,99,101,101,101,101,101,101,87,90,100,99,101,96,101,101,89,101,101,100,101,101,101,101,96,100,92]},{"label":"メイドカフェぴなふぉあ・公式ブログ","data":[101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"闇落ち女子トーク","data":[101,101,101,63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,17,30,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,96]},{"label":"筋肉速報","data":[101,101,101,101,96,101,94,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,101,42,28,101,32,27,27,101,30,24,95,27,24,22,89,24,27,25,101,28,101,24,99,29]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,60,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,82,96,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"崖っぷちのトニョ（糖尿）ギニオン　膵臓がんと闘う！","data":[101,101,101,101,101,101,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,83,93,94,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,96,101,101,95,101,101,95,96,101,96,89,101,101,101,101,101,90,69,101,101,101,101]},{"label":"あやかずランド","data":[101,101,101,101,101,101,101,84,78,101,92,82,82,81,67,101,78,70,65,70,101,81,101,86,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,91,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,86,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,75,101,101,101,101,101,101,101,101,101,92,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,88,101,99,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,88,101,101,101,101,101,83,101]},{"label":"ぽん子の不倫スカッと漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,96,92,76,64,48,47,38,43,43,39,38,37,101,34,33,34]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,51,62,92,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,76,80,84,98,97,101,88,60,101,63,78,81]},{"label":"場末Ｐ科病院の精神科医のblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,68,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,92,101,101,94,91,101,101,101,101,101,101,101,101]},{"label":"重役秘書リナ【完全版】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,51,45,54,55,49,22,27,80,101,67,62,68]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,94,101,101,98,100,101,101,101,101,101,101]},{"label":"トレカせどり最強ツール／トレカ・ワールド・ビュー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,101,101,101,101,101,101,101,101]},{"label":"Eorzean","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,30,61,81,93,101,101,75,88]},{"label":"どでんちゃん’ｓマガジン","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,32,31,83,101,87,88,69]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,98]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101]},{"label":"VTuberNews","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85]}];
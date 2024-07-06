var labels = ['2024-06-09','2024-06-10','2024-06-11','2024-06-12','2024-06-13','2024-06-14','2024-06-15','2024-06-16','2024-06-17','2024-06-18','2024-06-19','2024-06-20','2024-06-21','2024-06-22','2024-06-23','2024-06-24','2024-06-25','2024-06-26','2024-06-27','2024-06-28','2024-06-29','2024-06-30','2024-07-01','2024-07-02','2024-07-03','2024-07-04','2024-07-05','2024-07-06',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,6,1,1,1,2,4,1,1,1,1,1,1,3,3,1,1,1,3,3,1,1,1,2,4]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,1,1,2,2,2,1,1,2,2,2,2,2,2,1,1,3,3,3,2,2,2,2,2,1,1]},{"label":"はちま起稿","data":[3,3,3,3,2,3,4,4,4,2,3,3,3,3,3,5,5,4,5,5,4,4,5,5,4,4,4,3]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[4,5,6,8,7,7,9,7,5,5,6,6,6,8,7,6,6,6,9,9,8,10,4,4,6,8,8,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,4,5,5,5,5,5,3,3,5,4,4,5,4,4,4,7,6,4,5,5,6,7,8,6,6,8]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,5,4,3,4,3,6,8,7,4,5,5,4,5,8,7,5,4,6,6,6,8,9,7,5,7,5]},{"label":"ハムスター速報","data":[7,8,7,6,4,6,6,10,6,6,7,7,7,6,8,11,9,9,7,7,7,8,10,6,5,7,5,6]},{"label":"暇つぶしニュース","data":[8,7,8,9,11,9,10,8,9,11,11,11,9,10,10,9,12,12,12,12,12,7,9,11,10,11,11,11]},{"label":"もちログ","data":[9,9,11,10,9,10,8,11,10,9,9,10,10,9,9,10,10,10,11,10,10,11,11,10,12,10,9,9]},{"label":"ヤゴヴのマンガ劇場","data":[10,10,9,7,8,8,7,9,7,8,8,8,8,7,6,7,8,8,8,8,9,9,7,8,9,9,10,10]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,11,10,11,10,11,11,12,11,10,10,9,11,11,11,12,11,11,10,11,11,12,12,12,11,12,12,13]},{"label":"わんこーる速報！","data":[12,13,12,12,12,12,14,16,14,12,13,13,12,13,12,13,13,16,14,15,15,14,16,16,14,16,14,15]},{"label":"哲学ニュースnwk","data":[13,14,20,13,13,13,12,14,13,13,17,15,13,14,16,16,17,14,13,13,13,13,19,14,15,18,22,20]},{"label":"なんJ PRIDE","data":[14,15,16,16,19,16,18,17,15,15,15,16,15,16,15,14,14,15,16,16,16,18,13,18,18,17,21,18]},{"label":"ラビット速報","data":[15,16,19,14,14,17,19,21,19,20,21,23,21,22,19,19,18,19,15,14,21,19,14,15,16,20,18,17]},{"label":"【2ch】ニュー速クオリティ","data":[16,18,17,17,15,15,16,18,18,16,19,17,17,12,13,15,15,17,21,18,18,17,18,19,17,21,20,16]},{"label":"ねいろ速報さん","data":[17,17,18,18,20,20,21,22,20,18,20,21,20,20,20,20,16,20,22,22,23,22,22,17,20,23,19,21]},{"label":"日刊やきう速報","data":[18,19,27,21,16,23,20,19,17,17,24,20,22,19,17,18,24,22,18,17,20,20,17,23,23,19,27,24]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[19,20,14,15,18,19,17,20,22,19,18,19,19,17,18,17,20,18,17,20,19,21,26,20,22,22,16,19]},{"label":"VIPPERな俺","data":[20,22,25,23,27,21,24,24,25,28,23,22,14,23,28,28,27,25,19,31,25,26,25,30,21,24,28,27]},{"label":"うしみつ-5chまとめ-","data":[21,23,24,20,21,26,23,23,21,23,25,28,24,25,23,21,22,24,28,26,26,24,27,26,27,25,29,28]},{"label":"稲妻速報","data":[22,21,22,19,22,22,22,25,24,25,26,24,23,24,24,22,23,23,24,24,24,23,24,22,24,27,23,22]},{"label":"ゴールデンタイムズ","data":[23,27,21,22,26,27,25,29,26,21,27,27,27,27,22,24,25,32,26,23,22,25,30,32,29,29,25,25]},{"label":"ぶる速-VIP","data":[24,30,32,28,32,33,39,39,30,31,28,30,37,33,34,29,30,30,35,37,34,41,33,21,28,31,31,31]},{"label":"NEWSぽけまとめーる","data":[25,33,26,26,24,25,26,32,31,27,36,34,26,28,27,26,28,31,25,27,28,29,21,28,30,26,24,23]},{"label":"なんJクエスト","data":[26,26,28,27,28,30,31,30,29,29,30,35,29,31,29,30,29,28,27,32,31,30,29,29,36,37,33,35]},{"label":"おうまがタイムズ","data":[27,24,23,24,25,28,30,31,23,24,22,26,25,21,25,23,26,26,29,29,27,28,28,31,26,30,26,26]},{"label":"おーるじゃんる","data":[28,25,15,25,23,24,27,28,27,22,14,18,18,18,26,25,21,27,23,19,17,16,23,25,19,15,17,14]},{"label":"IT速報","data":[29,28,33,37,39,32,33,33,33,30,34,32,34,36,32,33,34,33,32,36,32,32,37,37,33,33,36,33]},{"label":"ネギ速","data":[30,29,30,29,30,31,28,26,35,34,32,31,28,30,31,31,35,35,37,34,38,34,35,39,39,35,35,36]},{"label":"カイカイ反応通信","data":[31,32,34,32,31,34,36,35,36,33,29,33,30,32,39,38,32,36,34,33,37,39,38,35,37,44,41,34]},{"label":"なんJ（まとめては）いかんのか？","data":[32,49,89,50,37,38,32,34,41,87,64,52,75,53,46,34,44,51,20,25,42,37,58,89,48,40,58,53]},{"label":"芸能人の気になる噂","data":[33,36,35,31,42,45,45,38,40,35,40,46,38,51,44,44,39,42,43,47,48,46,46,48,46,53,49,52]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[34,31,31,30,43,48,52,36,32,37,51,41,36,40,35,36,40,29,33,28,35,42,39,61,40,34,34,44]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[35,40,36,41,36,41,37,44,39,47,38,47,35,39,38,42,38,44,41,44,44,44,40,43,31,39,50,64]},{"label":"PS5速報！","data":[36,59,37,40,41,39,40,43,56,57,37,29,31,35,33,52,42,45,53,51,50,53,55,58,47,45,38,43]},{"label":"カラパイア","data":[37,35,39,45,46,42,44,37,34,32,31,36,32,34,36,35,33,37,44,41,40,35,32,40,42,41,40,45]},{"label":"オタク.com －オタコム－","data":[38,38,38,38,38,43,46,45,43,39,35,38,42,49,42,39,36,39,42,40,49,49,42,42,45,48,37,38]},{"label":"ぱんをたずねて2000里ちょい","data":[39,34,51,48,52,59,53,62,46,51,47,44,43,47,30,47,46,34,30,42,33,31,45,38,38,43,55,40]},{"label":"乃木坂46まとめ 1/46","data":[40,42,53,57,56,62,51,42,61,42,65,57,48,57,48,59,57,40,48,59,55,43,52,62,60,42,44,62]},{"label":"スズぺぺの人生何とかなってます!!","data":[41,44,58,90,96,50,48,47,44,44,41,42,40,37,43,41,37,38,38,35,36,33,34,34,34,36,32,32]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[42,58,61,67,74,61,59,67,57,58,63,40,49,55,53,57,61,53,64,65,74,64,62,72,71,68,61,54]},{"label":"まとめたニュース","data":[43,60,56,47,50,36,35,50,47,60,49,53,44,48,50,40,50,56,45,39,43,50,48,45,49,51,52,55]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[44,37,40,35,40,44,47,55,45,40,39,49,33,41,47,48,49,43,39,38,39,36,44,52,50,54,47,51]},{"label":"パチンコ・パチスロ.com","data":[45,52,50,49,57,49,56,68,65,45,33,51,56,60,57,55,41,49,57,54,53,58,66,36,52,65,54,46]},{"label":"馬鳥速報","data":[46,56,44,43,49,58,50,51,69,50,57,65,59,64,64,62,59,47,40,30,29,27,31,24,25,28,30,29]},{"label":"あにこ便","data":[47,45,47,51,55,56,55,56,50,43,48,58,55,56,56,50,48,50,56,56,60,59,53,47,51,61,57,56]},{"label":"ガールズVIPまとめ","data":[48,47,43,42,44,47,49,52,58,38,44,56,53,46,55,32,45,54,59,52,46,48,43,59,55,52,43,41]},{"label":"De速","data":[49,48,42,39,51,46,58,41,37,36,56,64,63,62,54,58,81,76,85,69,59,47,64,75,64,60,63,39]},{"label":"カオスちゃんねる","data":[50,43,49,46,47,52,42,48,49,41,43,43,51,44,41,45,43,48,50,45,47,45,50,49,44,50,42,47]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[51,68,60,63,75,80,62,60,52,59,79,59,57,88,79,75,92,82,60,75,76,66,70,78,62,71,80,81]},{"label":"ニュースBUZZ","data":[52,39,69,60,61,55,60,46,60,97,80,74,54,59,49,37,31,58,47,60,65,40,47,65,58,70,70,68]},{"label":"闇落ち女子トーク","data":[53,41,46,34,45,40,43,54,42,46,45,48,50,38,58,53,52,59,55,49,63,55,41,50,84,97,90,101]},{"label":"ついんてーる速報","data":[54,51,48,36,48,37,34,40,38,48,46,50,41,43,45,43,51,46,52,55,57,51,54,46,43,57,48,61]},{"label":"ポリー速報","data":[55,53,62,53,60,53,57,63,51,56,58,45,52,45,37,54,60,57,51,53,51,57,49,55,61,58,60,58]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[56,46,45,52,35,35,41,49,53,49,42,37,39,42,40,49,58,62,62,48,54,62,59,54,54,49,53,59]},{"label":"海外の万国反応記＠海外の反応","data":[57,55,52,56,58,54,54,58,48,52,50,55,45,54,52,51,53,52,46,43,45,52,51,53,53,55,51,49]},{"label":"世にも奇妙ななんかの話","data":[58,12,13,62,17,14,65,13,12,55,12,14,74,15,21,96,19,21,95,21,14,74,20,60,101,101,101,101]},{"label":"働く大人の非常識","data":[59,82,101,71,70,90,68,59,59,53,75,67,61,93,100,71,101,84,91,70,58,61,88,93,70,66,78,84]},{"label":"絵日記でございます。","data":[60,66,75,95,93,78,73,73,81,93,70,90,65,68,74,101,101,87,80,83,93,88,89,97,75,84,64,82]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[61,62,59,59,53,64,66,71,70,71,61,61,62,58,62,56,64,64,69,63,68,68,73,73,69,72,68,74]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[62,54,66,99,101,101,101,101,77,73,101,101,101,101,92,97,101,101,101,81,101,93,101,101,101,101,101,101]},{"label":"【2ch】コピペ情報局","data":[63,64,86,77,73,77,69,72,71,74,71,62,69,61,66,61,69,68,76,74,67,67,69,87,87,80,73,78]},{"label":"2chコピペ保存道場","data":[64,69,71,72,81,73,76,76,62,64,67,77,72,65,67,68,78,78,77,67,64,69,72,81,63,69,71,71]},{"label":"鈴木さん速報","data":[65,71,76,80,66,76,79,81,76,91,78,80,66,77,76,77,80,72,78,76,89,86,79,86,91,83,72,83]},{"label":"流速VIP","data":[66,61,80,61,59,60,61,69,55,65,55,70,58,71,59,46,65,67,71,66,69,65,68,68,56,67,59,60]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[67,74,84,101,101,101,101,84,93,90,87,92,83,96,88,85,90,88,90,89,94,91,84,96,101,92,97,90]},{"label":"FF14速報","data":[68,57,70,58,71,74,70,65,89,68,95,89,91,101,96,101,85,60,66,58,52,60,61,51,32,47,39,48]},{"label":"ダイエット速報＠2ちゃんねる","data":[69,76,77,81,101,97,72,94,98,95,88,85,97,83,81,87,96,97,74,86,73,81,85,85,94,74,91,101]},{"label":"ジャンプ速報","data":[70,65,90,92,97,99,92,92,74,72,97,101,101,84,71,66,88,99,86,92,87,94,81,77,88,95,93,73]},{"label":"うみこのおとぼけぐらし","data":[71,72,72,74,80,69,63,82,64,77,68,73,71,73,72,81,89,83,93,90,88,101,97,95,67,82,88,72]},{"label":"投資ちゃんねる","data":[72,78,79,76,72,68,85,83,85,75,77,78,76,70,63,67,86,74,75,79,82,80,75,79,101,101,101,101]},{"label":"軍事・ミリタリー速報☆彡","data":[73,77,78,82,86,82,82,86,66,83,76,75,70,72,73,72,79,69,84,72,80,77,78,70,68,76,75,76]},{"label":"ライフハックちゃんねる弐式","data":[74,80,73,83,77,70,89,85,80,54,59,79,78,76,78,73,72,75,92,82,81,82,71,82,82,90,83,77]},{"label":"ずっと日曜日のターン","data":[75,50,55,75,63,75,64,57,79,82,52,60,46,80,65,70,83,61,54,91,75,56,57,57,65,77,84,65]},{"label":"まとめロッテ！","data":[76,70,63,86,64,65,80,101,95,66,74,68,79,101,89,79,101,101,96,73,85,83,100,69,73,89,100,100]},{"label":"あいチャンネル","data":[77,101,29,73,29,66,29,27,73,26,54,25,64,29,77,27,70,101,31,78,30,70,36,27,66,32,77,30]},{"label":"あんころの漫画日和","data":[78,85,67,54,54,57,71,64,54,67,53,54,67,52,51,60,47,41,58,46,41,38,56,44,41,63,45,37]},{"label":"MLB NEWS@まとめ","data":[79,88,95,101,95,85,91,87,87,81,101,72,87,81,68,65,87,85,61,64,70,87,74,94,83,75,86,92]},{"label":"はーとログ","data":[80,67,74,70,76,72,75,74,86,70,69,69,84,74,69,63,77,71,73,71,78,71,86,80,72,79,76,70]},{"label":"やみ速@なんJ西武まとめ","data":[81,73,85,65,62,88,88,80,67,76,66,98,86,75,70,74,54,73,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[82,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,15,15,91,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[83,94,65,69,78,95,77,101,68,61,60,83,80,66,60,64,67,66,72,101,71,101,83,66,89,56,56,57]},{"label":"最強ジャンプ放送局","data":[84,83,68,96,89,79,87,89,91,69,85,81,73,78,84,90,71,81,89,85,84,89,92,76,93,91,82,85]},{"label":"ろぼ速VIP","data":[85,84,81,78,91,83,90,90,92,88,92,86,82,91,75,82,94,86,82,84,92,72,87,92,92,87,87,91]},{"label":"デジタルニューススレッド","data":[86,81,92,91,87,87,83,78,82,78,83,91,77,89,80,83,91,89,87,87,77,78,77,83,81,85,74,79]},{"label":"はむらの毎日マンガ","data":[87,101,101,64,98,67,101,101,101,101,101,101,101,69,98,101,66,98,67,99,101,101,63,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[88,101,101,68,33,86,101,101,101,94,86,101,101,101,101,101,56,94,36,50,101,101,101,101,101,101,96,97]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[89,87,96,97,94,93,96,93,99,98,90,97,95,97,86,94,101,100,97,96,100,95,101,100,101,100,95,98]},{"label":"まとめブレイド","data":[90,63,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,83,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[91,89,87,85,65,63,74,77,83,92,96,101,81,95,83,80,82,65,68,80,86,90,65,64,80,78,81,80]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[92,99,101,101,101,101,101,88,100,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[93,101,82,89,82,94,100,79,101,101,84,94,93,87,101,89,73,95,94,101,96,85,96,101,101,86,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[94,98,101,101,101,101,101,91,97,101,101,101,101,101,101,101,101,101,101,101,101,96,101,84,86,101,101,93]},{"label":"サカラボ | サッカーまとめ速報","data":[95,91,99,94,69,71,81,75,90,80,94,88,90,94,99,98,98,101,101,94,95,101,99,99,97,94,89,89]},{"label":"資格ちゃんねる","data":[96,100,101,100,83,92,101,99,101,101,101,101,101,101,101,101,101,101,81,93,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[97,101,101,101,101,101,101,96,101,101,99,84,94,101,93,100,101,101,101,101,101,100,95,101,74,101,101,101]},{"label":"稼げるまとめ速報","data":[98,101,94,98,101,101,101,101,101,101,100,101,96,79,101,91,101,101,101,101,97,101,98,101,101,88,98,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101]},{"label":"ニュース30over","data":[100,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[101,75,83,87,79,101,97,101,75,89,81,96,92,98,87,93,84,91,88,101,91,101,91,90,100,96,94,94]},{"label":"カエルDXのオタ活日記","data":[101,79,97,101,88,51,38,66,72,101,72,95,89,101,85,101,99,93,70,100,61,76,101,67,90,73,69,67]},{"label":"今日速2ch","data":[101,86,101,79,84,101,94,53,63,79,89,76,88,82,61,84,75,80,98,95,79,84,101,71,96,101,101,63]},{"label":"くまおのマンガ堂","data":[101,90,93,84,101,100,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,92,88,101,85,101,84,101,94,86,101,82,101,92,82,101,63,63,101,68,101,75,101,74,78,101,79,75]},{"label":"大艦巨砲主義！","data":[101,93,101,101,101,91,98,95,101,101,101,101,101,99,95,99,95,101,101,98,99,101,101,101,101,101,92,96]},{"label":"阪神タイガースちゃんねる","data":[101,95,101,101,101,101,101,101,101,99,93,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,96,41,33,90,18,13,3,28,62,101,101,101,101,101,101,101,13,49,101,101,101,67,33,57,14,15,42]},{"label":"五箇野人の海外旅日記","data":[101,101,54,93,101,101,101,101,101,85,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,57,101,67,101,101,61,101,63,101,66,101,63,101,69,68,70,63,62,62,63,101,56,95,101,101,101]},{"label":"チリツモブログ","data":[101,101,64,44,101,84,67,101,101,101,101,101,60,101,101,101,74,55,101,61,101,101,101,101,101,99,65,101]},{"label":"つつみのブログ","data":[101,101,91,101,92,101,86,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,88]},{"label":"ベイスターズNEWS","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[101,101,100,101,101,101,101,101,101,101,101,93,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,95]},{"label":"ガレ速@フォロワー体験漫画","data":[101,101,101,55,34,29,15,15,16,14,16,12,16,26,14,3,2,2,2,2,2,1,1,3,3,3,3,2]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,66,68,81,93,100,88,96,101,63,68,67,101,92,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,88,101,101,101,101,101,101,101,71,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101]},{"label":"あやかずランド","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,89,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あやかずランド","data":[101,101,101,101,101,96,78,101,96,84,82,87,85,100,101,101,101,92,99,88,90,92,93,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,98,101,101,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,70,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,101,101,101,101,101,101,101,101,101,62,101,101,50,101,101,55,101,101,101,72,73,101,41,101,38,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,90,101,101,101,101,101,101,79,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,39,47,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バズッター速報","data":[101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,88,76,77,65,57,56,54,60,63,59,59,62,50]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,78,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,86,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"とうふう絵日記～マイペース夫と３人子育て～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,62,96,101,101,101,101,101,101,101,101,101,101]},{"label":"ちょうふ通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,77,66,79,82,98,76,62,85,66]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,97,90,101,101,101,101,86]},{"label":"気になる芸能まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101,101,101,101]},{"label":"魔界のニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101]},{"label":"ニート極道「牧村ユタカ」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,13,13,13,12]},{"label":"バズッター速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,98,101,99]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,35,46,66,87]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,101,101,101]},{"label":"投資ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,81,67,69]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,64,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101]},{"label":"ふれにゅー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]}];
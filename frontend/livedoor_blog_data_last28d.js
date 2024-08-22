var labels = ['2024-07-26','2024-07-27','2024-07-28','2024-07-29','2024-07-30','2024-07-31','2024-08-01','2024-08-02','2024-08-03','2024-08-04','2024-08-05','2024-08-06','2024-08-07','2024-08-08','2024-08-09','2024-08-10','2024-08-11','2024-08-12','2024-08-13','2024-08-14','2024-08-15','2024-08-16','2024-08-17','2024-08-18','2024-08-19','2024-08-20','2024-08-21','2024-08-22',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,3,1,1,2,3,7,1,1,101,1,2,6,1,1,1,1,2,6,1,1,1,5,3,1,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,1,1,3,3,3,2,3,3,3,101,2,1,1,2,2,2,2,1,1,2,2,2,2,1,2,2,1]},{"label":"はちま起稿","data":[3,3,2,5,4,5,4,6,6,4,101,7,6,3,5,4,3,4,4,3,3,4,5,7,4,4,3,3]},{"label":"痛いニュース(ﾉ∀`)","data":[4,5,8,7,6,4,5,8,5,5,101,6,7,7,3,6,7,5,7,7,8,6,7,8,7,7,6,4]},{"label":"ハムスター速報","data":[5,4,7,8,2,1,1,4,8,7,101,3,3,2,4,3,6,7,6,2,4,8,4,3,8,6,7,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,6,4,4,5,6,6,5,7,6,101,4,4,5,7,7,4,3,3,5,5,5,6,9,5,5,5,6]},{"label":"暇つぶしニュース","data":[7,8,9,9,7,8,8,9,10,9,101,8,9,9,8,5,8,11,10,9,7,7,8,6,6,8,12,9]},{"label":"ガレ速@フォロワー体験漫画","data":[8,9,6,2,8,10,9,2,4,22,101,22,12,10,10,12,12,13,12,12,10,9,9,10,9,9,8,10]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[9,10,10,11,12,11,11,12,13,11,101,10,10,12,11,10,9,10,9,11,12,12,13,12,12,11,10,11]},{"label":"ニート極道「牧村ユタカ」","data":[10,7,5,6,11,7,7,1,2,2,101,5,5,4,6,8,5,6,5,4,6,3,3,4,2,3,4,7]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,11,11,10,9,9,10,10,11,10,101,9,8,8,9,9,10,9,8,10,11,11,12,13,13,12,11,8]},{"label":"ヤゴヴのマンガ劇場","data":[12,13,13,13,13,12,12,11,12,12,101,11,11,11,12,11,11,12,11,8,9,10,11,11,10,10,9,12]},{"label":"わんこーる速報！","data":[13,12,12,12,14,15,14,14,16,13,101,12,14,14,14,14,14,15,14,15,16,14,15,16,14,13,13,14]},{"label":"【2ch】ニュー速クオリティ","data":[14,16,15,18,20,19,17,15,18,19,101,14,15,19,15,20,18,17,17,18,18,16,17,18,17,15,16,15]},{"label":"哲学ニュースnwk","data":[15,14,16,14,15,14,13,13,14,8,101,13,13,13,13,13,13,14,13,13,13,13,10,1,11,14,14,13]},{"label":"ラビット速報","data":[16,15,14,16,17,18,16,19,15,14,101,16,19,17,16,17,19,19,15,14,14,15,16,15,15,16,17,16]},{"label":"ねいろ速報さん","data":[17,18,22,21,19,23,23,24,23,20,101,17,22,24,25,26,25,27,24,24,25,25,23,27,22,17,18,19]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[18,17,20,19,16,17,19,20,17,18,101,20,20,20,17,21,20,22,19,21,21,18,20,22,20,20,21,20]},{"label":"おーるじゃんる","data":[19,20,21,17,10,13,18,18,9,15,101,19,21,21,18,18,17,20,22,17,19,21,21,23,21,19,15,18]},{"label":"VIPPERな俺","data":[20,23,25,27,27,30,38,21,21,21,101,25,23,26,21,22,21,23,27,28,23,24,30,25,26,24,25,22]},{"label":"なんJ PRIDE","data":[21,19,26,24,23,25,20,17,19,17,101,15,17,16,19,19,15,16,16,16,15,19,18,21,19,21,19,17]},{"label":"おうまがタイムズ","data":[22,22,27,34,29,21,28,37,28,36,101,41,101,101,101,101,101,101,101,101,101,100,96,101,101,101,96,96]},{"label":"稲妻速報","data":[23,24,28,29,28,26,26,30,26,29,101,27,28,23,29,24,26,28,25,27,27,23,22,24,25,26,28,24]},{"label":"日刊やきう速報","data":[24,25,18,15,21,16,24,16,20,16,101,18,16,15,22,25,24,18,18,20,17,22,27,20,23,23,27,21]},{"label":"うしみつ-5chまとめ-","data":[25,28,29,25,26,29,29,33,25,23,101,28,24,22,26,23,23,30,28,22,24,26,25,28,24,25,29,28]},{"label":"ゴールデンタイムズ","data":[26,21,23,20,18,27,22,23,22,25,101,21,26,27,24,15,16,21,21,23,22,20,19,17,18,18,22,25]},{"label":"ぶる速-VIP","data":[27,40,44,23,30,35,35,31,35,34,101,40,58,53,52,49,56,59,52,54,53,51,45,44,43,35,44,41]},{"label":"馬鳥速報","data":[28,39,41,54,35,22,15,36,32,30,101,37,29,32,32,37,47,34,47,39,35,37,40,48,40,31,26,32]},{"label":"ネギ速","data":[29,32,32,32,24,28,31,40,33,27,101,23,18,18,27,30,29,29,20,25,30,27,26,29,27,22,24,23]},{"label":"NEWSぽけまとめーる","data":[30,26,30,26,25,31,40,26,24,24,101,35,43,42,39,36,43,46,42,46,41,38,34,42,46,38,46,38]},{"label":"人間まおと愉快な仲間たち","data":[31,31,31,35,22,20,21,27,29,26,101,29,25,25,20,16,22,24,32,66,64,83,81,73,82,83,60,57]},{"label":"カイカイ反応通信","data":[32,36,34,43,40,36,34,34,41,45,101,38,34,37,37,38,34,41,30,33,40,40,46,41,37,36,40,40]},{"label":"スズぺぺの人生何とかなってます!!","data":[33,35,35,38,36,34,37,38,30,31,101,30,31,31,31,31,30,35,54,29,31,29,31,31,28,28,30,27]},{"label":"場末Ｐ科病院の精神科医のblog","data":[34,68,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"IT速報","data":[35,33,37,36,33,32,25,28,34,35,101,26,30,35,33,29,32,36,33,31,33,33,32,32,32,37,35,30]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[36,30,36,37,39,42,32,29,37,33,101,36,32,30,23,28,33,42,34,35,29,30,29,33,31,30,37,33]},{"label":"あんころの漫画日和","data":[37,43,63,81,78,100,101,62,47,67,101,39,53,51,71,62,71,67,45,34,54,46,33,34,45,54,33,26]},{"label":"もちログ","data":[38,29,19,31,34,37,41,42,40,38,101,31,27,28,30,27,28,25,23,19,20,17,14,14,16,72,58,77]},{"label":"オタク.com －オタコム－","data":[39,38,42,40,41,45,46,48,51,50,101,33,38,33,44,41,38,44,35,38,38,36,39,39,35,39,43,36]},{"label":"ついんてーる速報","data":[40,45,57,48,43,49,57,51,46,41,101,48,44,39,50,39,36,50,44,42,45,44,43,37,38,44,36,43]},{"label":"なんJクエスト","data":[41,41,33,33,32,33,33,35,39,32,101,32,36,36,38,34,31,31,26,30,32,28,28,30,29,29,31,31]},{"label":"De速","data":[42,57,60,69,77,96,83,64,62,73,101,86,85,77,83,86,78,81,76,84,67,71,101,86,79,78,81,70]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[43,47,55,49,42,38,53,50,42,51,101,44,40,48,43,51,39,37,40,45,43,48,48,43,42,52,41,49]},{"label":"芸能人の気になる噂","data":[44,44,43,42,45,47,45,44,45,42,101,43,39,41,40,42,42,45,43,43,37,34,36,40,41,42,38,35]},{"label":"PS5速報！","data":[45,50,46,55,47,39,51,68,65,63,101,61,61,65,64,61,62,66,62,63,62,56,67,60,64,61,63,60]},{"label":"カオスちゃんねる","data":[46,42,47,41,52,48,48,45,53,46,101,50,47,49,42,50,48,47,37,40,48,50,42,45,44,46,50,46]},{"label":"乃木坂46まとめ 1/46","data":[47,63,39,28,46,56,42,41,36,53,101,56,42,46,36,45,41,32,31,32,42,35,37,57,58,45,47,47]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[48,37,49,51,49,46,58,54,44,47,101,42,46,57,48,47,50,56,51,48,49,55,50,49,51,49,49,52]},{"label":"カラパイア","data":[49,51,56,50,50,50,56,52,56,49,101,46,45,40,41,43,51,52,49,50,46,39,35,35,39,43,42,37]},{"label":"FF14速報","data":[50,56,67,67,57,44,44,49,54,48,101,52,48,52,53,63,65,48,56,55,58,62,57,69,48,40,48,58]},{"label":"パチンコ・パチスロ.com","data":[51,49,66,62,70,64,63,56,55,56,101,57,52,44,46,53,57,43,38,58,34,42,44,63,49,33,34,39]},{"label":"ガールズVIPまとめ","data":[52,52,54,46,48,40,54,43,49,39,101,49,55,54,63,48,55,64,61,60,60,58,53,62,62,62,70,63]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[53,59,62,65,67,62,60,69,66,65,101,59,35,38,34,32,37,38,41,36,28,31,41,36,36,34,32,34]},{"label":"海外の万国反応記＠海外の反応","data":[54,48,50,53,44,52,52,46,43,57,101,45,49,50,45,44,49,51,36,44,56,43,49,54,53,48,39,45]},{"label":"あにこ便｜アニメ感想サイト","data":[55,60,58,58,55,59,64,59,61,55,101,51,51,55,58,56,59,60,55,59,59,53,58,56,54,50,54,56]},{"label":"ぱんをたずねて2000里ちょい","data":[56,46,38,60,37,41,67,78,69,68,101,83,57,56,60,59,60,71,63,52,57,67,59,66,80,70,76,51]},{"label":"絵日記でございます。","data":[57,65,74,99,97,101,87,91,101,95,101,82,92,91,72,78,45,39,39,70,84,89,71,76,60,59,71,66]},{"label":"うみこのおとぼけぐらし","data":[58,58,59,57,51,58,50,58,57,61,101,54,81,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ポリー速報","data":[59,70,52,52,56,65,65,66,64,62,101,60,68,61,61,58,58,55,58,57,63,65,66,58,73,58,59,61]},{"label":"まとめたニュース","data":[60,54,45,59,59,54,39,60,52,59,101,55,41,43,49,55,63,63,60,51,55,54,47,51,61,63,53,50]},{"label":"なんJ（まとめては）いかんのか？","data":[61,55,53,56,82,53,55,47,48,44,101,58,37,45,47,40,40,33,46,41,36,45,55,38,34,47,57,59]},{"label":"ろぼ速VIP","data":[62,85,97,88,86,83,89,85,80,90,101,92,86,82,80,84,91,84,85,85,88,84,87,89,89,95,73,79]},{"label":"2chコピペ保存道場","data":[63,74,72,66,68,75,80,70,70,75,101,68,65,63,65,73,70,73,70,74,70,64,61,67,65,65,65,68]},{"label":"ライフハックちゃんねる弐式","data":[64,87,90,74,63,77,78,89,94,84,101,64,59,76,66,75,73,65,59,79,79,69,65,50,59,76,85,74]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[65,88,81,85,101,89,93,86,86,89,101,85,84,67,79,94,80,86,89,77,50,63,68,75,85,60,69,65]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[66,53,70,75,74,79,74,75,75,81,101,65,66,72,68,71,81,76,68,71,74,73,76,74,84,66,62,67]},{"label":"あやかずランド","data":[67,101,78,70,65,70,101,81,101,86,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[68,66,61,63,66,66,59,55,58,58,101,47,50,47,56,64,52,57,57,61,52,57,54,46,47,53,55,53]},{"label":"今日速2ch","data":[69,81,73,61,71,86,68,63,77,72,101,84,64,59,55,68,74,101,71,69,97,86,78,70,63,93,77,83]},{"label":"カエルDXのオタ活日記","data":[70,101,101,101,101,101,75,65,95,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"投資ちゃんねる","data":[71,78,91,78,76,73,77,77,73,71,101,53,56,60,62,60,67,69,73,62,61,59,62,64,69,71,61,54]},{"label":"ずっと日曜日のターン","data":[72,97,69,90,92,101,71,53,60,54,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,61,101,101,101,101]},{"label":"ジャンプ速報","data":[74,76,75,64,58,61,90,88,91,91,101,77,94,101,88,95,99,94,82,91,95,82,85,95,70,86,95,98]},{"label":"サカラボ | サッカーまとめ速報","data":[75,89,94,77,73,78,84,76,78,74,101,81,89,83,82,90,101,92,90,95,85,101,101,80,78,94,90,87]},{"label":"ぽん子の不倫スカッと漫画","data":[76,64,48,47,38,43,43,39,38,37,101,34,33,34,35,35,44,49,50,47,39,41,38,47,33,41,45,42]},{"label":"鈴木さん速報","data":[77,79,88,86,81,85,85,82,85,66,101,62,63,66,74,65,54,61,67,72,76,66,63,68,71,75,66,80]},{"label":"軍事・ミリタリー速報☆彡","data":[78,72,79,73,80,81,69,80,76,78,101,69,74,70,67,70,61,72,72,67,69,68,60,55,66,67,64,62]},{"label":"ダイエット速報＠2ちゃんねる","data":[79,62,77,84,72,67,72,79,68,77,101,73,90,80,86,82,77,80,75,75,77,95,90,84,88,91,82,71]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[80,101,101,72,62,69,82,71,63,79,101,78,73,71,73,77,92,74,101,101,66,87,83,65,68,57,83,89]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[81,67,68,68,60,92,94,84,83,64,101,75,67,64,59,67,66,77,80,78,72,80,72,71,76,80,68,55]},{"label":"デジタルニューススレッド","data":[82,84,83,82,85,88,96,74,87,85,101,90,87,73,77,80,76,78,77,76,83,72,80,85,83,82,78,76]},{"label":"やみ速@なんJ西武まとめ","data":[83,86,101,97,96,84,76,93,100,97,101,95,97,87,101,97,94,85,78,89,73,81,84,79,94,101,101,101]},{"label":"大艦巨砲主義！","data":[84,90,101,101,101,87,101,95,93,101,101,94,95,89,78,85,87,97,98,90,80,85,70,81,77,88,86,90]},{"label":"あいチャンネル","data":[85,34,85,39,31,80,36,90,101,101,101,101,101,101,101,33,86,40,87,37,81,32,82,101,52,56,101,29]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[86,93,100,98,87,93,101,97,92,100,101,89,80,86,90,96,98,93,95,101,101,91,79,87,86,79,93,75]},{"label":"最強ジャンプ放送局","data":[87,91,93,92,79,97,101,101,89,98,101,66,79,79,76,88,96,96,86,92,86,90,94,91,91,69,91,91]},{"label":"はーとログ","data":[88,77,82,79,83,63,79,83,74,87,101,72,82,74,75,81,83,75,74,64,75,74,69,78,81,73,74,78]},{"label":"登山ちゃんねる","data":[89,73,84,71,69,76,66,73,71,76,101,74,71,62,69,72,68,68,65,65,68,75,75,72,67,64,72,69]},{"label":"働く大人の非常識","data":[90,71,71,76,101,71,61,67,50,43,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[91,95,98,87,90,99,101,101,101,101,101,101,96,94,101,101,101,95,101,101,92,99,101,101,101,98,100,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101]},{"label":"お料理速報","data":[93,100,101,93,91,90,101,101,84,101,101,88,76,78,89,83,93,90,84,81,87,79,89,98,72,77,87,81]},{"label":"ニュースBUZZ","data":[94,80,40,44,61,57,47,57,67,52,101,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[95,27,24,22,89,24,27,25,101,28,101,24,99,29,28,93,27,26,97,26,26,94,24,26,92,27,20,72]},{"label":"気になる芸能まとめ","data":[96,101,101,89,101,101,100,101,101,101,101,96,100,92,97,101,100,99,96,96,91,98,100,88,95,101,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[97,98,95,96,99,101,101,101,101,101,101,99,101,95,98,99,101,91,92,86,89,92,93,93,93,101,101,97]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[98,92,101,101,94,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,88,95]},{"label":"まとめロッテ！","data":[99,101,101,101,101,101,95,96,97,101,101,101,101,90,87,100,95,82,83,82,98,70,92,94,96,101,101,101]},{"label":"稼げるまとめ速報","data":[100,99,101,101,101,101,91,101,99,99,101,79,93,84,93,91,101,101,101,100,90,101,101,99,101,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,61,65,101,64,101,70,101,59,101,101,101,54,101,57,101,69,101,66,101,65,101,64,101,56,101,56,101]},{"label":"マンガと私と猫ブログ。","data":[101,69,64,101,53,94,101,101,96,40,101,101,101,101,101,46,79,101,101,101,71,52,101,101,101,32,101,101]},{"label":"【2ch】コピペ情報局","data":[101,75,86,83,75,72,92,72,72,82,101,70,69,58,70,79,64,62,64,73,78,76,74,77,90,96,80,73]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,82,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,74,97,101]},{"label":"重役秘書リナ【完全版】","data":[101,83,51,45,54,55,49,22,27,80,101,67,62,68,51,52,46,53,48,49,47,47,51,52,55,51,51,44]},{"label":"尾持トモの漫画blog","data":[101,94,101,101,101,95,101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,96,89,101,101,101,101,101,90,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,17,30,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,19,30,85,101,101]},{"label":"シカブロ","data":[101,101,76,80,84,98,97,101,88,60,101,63,78,81,96,101,101,100,101,88,96,93,91,83,101,101,79,101]},{"label":"はむらの毎日マンガ","data":[101,101,80,101,101,101,81,101,101,101,101,98,101,75,101,54,88,54,69,101,101,101,101,101,50,68,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,87,91,101,101,86,94,79,88,101,80,98,100,84,89,35,70,79,80,94,97,101,96,101,101,92,92]},{"label":"ああ言えばForYou","data":[101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,92,101,100,101,100]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,99,94,101,101,98,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,97,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,101,101,95,95,101,101,99,101,101,101,71,72,93,81,66,84,101,101,98,99,101,101,101,101,90,89,94]},{"label":"えび通","data":[101,101,101,100,98,101,101,98,101,101,101,101,101,99,92,101,85,101,94,97,100,96,101,101,101,87,98,101]},{"label":"つつみのブログ","data":[101,101,101,101,88,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,101,101,93,101,101,101,98,94,101,101,101,101,101,101,101,83,101,101,101,88,99,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,96,94,101,101,98,81,83,101,77,88,82,99,84,99,93]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,51,62,92,101,101,101,101,101,101,101,101,101,101,101,53,44,60,56,59,74,81,75,85]},{"label":"トレカせどり最強ツール／トレカ・ワールド・ビュー","data":[101,101,101,101,101,60,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,68,101,101,101,70,101,101,70,101,101,74,101,101,101,101,101,101,73,101,101,101,101,101]},{"label":"Eorzean","data":[101,101,101,101,101,74,30,61,81,93,101,101,75,88,101,101,101,101,101,94,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,82,101,101,101,101,101,101,60,101,101,101,101,101,101,68,101,101,101,101,101,101,67,101]},{"label":"どでんちゃん’ｓマガジン","data":[101,101,101,101,101,101,73,32,31,83,101,87,88,69,54,57,53,58,53,56,51,49,52,53,57,55,52,48]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,88,101,101,101,101,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,87,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,101,101,97,101,101,91,69,72,79,93,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,77,98,100,101,101,101,91,101,101,101,101,101,101,97,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"VTuberNews","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,97,8,29,99,101,101,101,101,87,101,101,64]},{"label":"一日・ 一ハワイ  - ハワイブログ -","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,75,101,101,87,82,78,86,101,101,101,94,101]},{"label":"艦これ速報　艦隊これくしょんまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,90,87,88,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高校野球まとめ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,97,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,99]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,90,98,89,84,84]},{"label":"金沢デイズ - 石川県金沢市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,23,101]},{"label":"犬のかがやきブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86]},{"label":"ちば通信 - 千葉県千葉市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88]}];
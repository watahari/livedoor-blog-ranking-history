var labels = ['2024-12-08','2024-12-09','2024-12-10','2024-12-11','2024-12-12','2024-12-13','2024-12-14','2024-12-15','2024-12-16','2024-12-17','2024-12-18','2024-12-19','2024-12-20','2024-12-21','2024-12-22','2024-12-23','2024-12-24','2024-12-25','2024-12-26','2024-12-27','2024-12-28','2024-12-29','2024-12-30','2024-12-31','2025-01-01','2025-01-02','2025-01-03','2025-01-04',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,1,2,2,2,1,1,1,3,2,2,3,1,2,2,2,2,3,3,2,1,2,2,2]},{"label":"ニート極道「牧村ユタカ」","data":[2,3,17,101,101,24,12,3,3,8,10,2,4,3,3,2,2,3,5,3,10,10,11,11,13,13,11,12]},{"label":"はちま起稿","data":[3,4,3,4,5,4,3,4,5,4,6,5,5,7,6,6,5,5,4,5,5,5,5,4,5,5,4,3]},{"label":"まめきちまめこニートの日常","data":[4,1,1,1,1,2,1,1,1,5,2,3,1,1,1,1,4,1,1,1,4,1,1,1,12,6,1,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,5,4,3,3,5,4,5,4,2,4,4,6,5,4,4,3,4,3,4,3,4,4,5,3,3,5,4]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,5,6,8,7,6,7,7,7,5,7,7,6,8,8,7,7,7,7,6,6,7,7,6,10,8,5]},{"label":"ハムスター速報","data":[7,8,6,5,4,6,7,6,6,6,7,6,2,4,7,7,6,6,6,6,1,2,2,3,4,7,7,7]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[8,9,7,8,7,8,9,11,8,10,9,10,9,8,9,9,8,8,9,9,7,8,8,10,9,9,9,9]},{"label":"暇つぶしニュース","data":[9,7,8,7,9,9,8,8,9,9,8,9,8,9,5,5,9,10,8,10,8,7,6,6,2,4,6,6]},{"label":"ヤゴヴのマンガ劇場","data":[10,10,9,9,10,10,10,9,10,11,11,11,10,10,10,10,10,9,10,8,9,9,9,8,7,11,18,34]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,11,10,10,11,11,11,12,11,12,13,12,11,11,11,11,11,11,11,11,11,11,12,12,11,12,10,10]},{"label":"わんこーる速報！","data":[12,14,14,14,13,15,15,14,14,14,18,13,15,16,16,15,15,16,21,17,15,14,16,15,14,14,13,15]},{"label":"おーるじゃんる","data":[13,20,18,23,25,14,14,22,22,18,12,14,16,19,23,25,24,24,26,21,22,22,19,19,20,24,20,22]},{"label":"哲学ニュースnwk","data":[14,13,11,11,6,3,5,10,12,3,3,8,13,12,13,14,13,13,13,13,14,13,13,13,10,8,12,13]},{"label":"【2ch】ニュー速クオリティ","data":[15,17,15,15,14,17,18,19,20,17,21,17,17,15,15,18,14,15,17,14,17,18,20,24,18,19,16,19]},{"label":"ラビット速報","data":[16,23,23,18,18,21,22,18,19,25,22,18,18,23,20,19,21,21,16,19,16,17,15,16,16,18,17,17]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[17,18,16,13,12,12,13,13,13,13,17,16,14,14,21,12,18,14,15,20,18,15,14,14,15,16,14,11]},{"label":"なんJ PRIDE","data":[18,19,19,16,15,18,20,17,15,16,20,21,21,18,19,20,23,18,18,16,13,16,17,18,23,25,23,21]},{"label":"ねいろ速報さん","data":[19,15,13,17,17,20,21,15,16,20,23,20,22,22,18,17,17,17,20,18,20,19,18,20,21,22,21,23]},{"label":"日刊やきう速報","data":[20,26,12,22,24,27,23,24,25,22,24,22,23,24,24,26,16,19,14,15,19,21,21,22,24,15,15,16]},{"label":"世にも奇妙ななんかの話","data":[21,72,101,101,101,101,76,81,75,58,101,70,62,53,53,49,101,59,44,40,48,76,101,101,101,101,101,101]},{"label":"ガレ速@フォロワー体験漫画","data":[22,24,53,101,101,28,28,21,18,21,19,19,20,21,14,16,20,26,27,26,37,101,101,101,101,101,101,101]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[23,28,43,28,26,30,26,30,26,30,27,23,24,26,25,27,30,29,31,27,24,25,26,26,26,27,28,20]},{"label":"VIPPERな俺","data":[24,22,25,25,20,23,17,20,23,19,25,24,25,17,17,21,19,22,19,22,26,26,27,25,19,21,24,14]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[25,16,24,19,23,26,24,26,28,26,29,27,26,25,26,23,22,23,22,24,23,20,23,21,17,17,25,24]},{"label":"ゴールデンタイムズ","data":[26,25,22,20,16,16,19,23,21,24,26,25,27,20,22,24,26,27,23,23,21,23,24,17,22,20,19,18]},{"label":"ツイッター速報","data":[27,47,34,34,87,53,93,56,94,23,14,58,19,28,40,101,101,101,101,101,101,38,31,46,48,1,3,8]},{"label":"うしみつ-5chまとめ-","data":[28,21,20,21,22,25,25,25,24,27,28,28,28,29,27,22,25,25,24,25,25,24,22,23,25,23,22,25]},{"label":"もちログ","data":[29,27,26,24,21,22,16,16,17,15,16,15,12,13,12,13,12,12,12,12,12,12,10,9,8,50,34,26]},{"label":"IT速報","data":[30,29,28,32,30,33,32,28,30,31,33,30,29,30,28,30,28,30,34,30,29,29,28,27,32,29,29,31]},{"label":"なんJクエスト","data":[31,30,27,26,28,29,29,27,27,28,31,31,32,31,31,28,29,28,32,29,27,32,30,30,27,26,31,27]},{"label":"ぱんをたずねて2000里ちょい","data":[32,44,70,30,40,58,101,40,61,57,32,43,56,33,30,42,58,34,46,56,34,31,54,101,34,45,59,38]},{"label":"オタク.com －オタコム－","data":[33,34,29,29,29,36,41,35,34,37,44,51,45,40,44,45,47,45,49,42,42,44,40,35,33,38,43,43]},{"label":"稲妻速報","data":[34,32,31,31,33,31,34,33,33,32,34,32,34,34,33,32,31,31,35,31,32,33,29,28,28,31,30,29]},{"label":"芸能人の気になる噂","data":[35,33,32,37,37,34,36,37,38,36,37,39,40,35,36,37,35,35,40,32,31,35,33,31,30,33,33,37]},{"label":"ついんてーる速報","data":[36,31,33,33,35,44,39,38,31,38,43,33,33,38,32,31,34,36,43,34,28,30,38,32,29,30,32,40]},{"label":"カオスちゃんねる","data":[37,35,37,43,38,40,40,41,39,42,40,37,37,41,35,38,38,39,38,35,35,39,41,40,37,35,38,39]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[38,48,52,54,48,43,31,29,32,46,47,52,53,46,37,48,33,40,47,55,55,49,51,54,63,81,90,77]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[39,51,46,38,51,35,42,52,65,60,69,61,68,72,59,61,79,82,65,52,68,78,79,93,78,82,49,86]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[40,40,45,44,39,41,37,39,37,40,38,41,46,44,39,41,43,41,50,43,40,36,42,37,43,42,40,50]},{"label":"カイカイ反応通信","data":[41,41,30,35,32,39,45,49,46,51,52,49,44,43,45,53,51,43,48,37,43,52,52,51,72,76,73,69]},{"label":"まとめたニュース","data":[42,39,36,45,36,54,38,43,41,52,41,42,38,51,52,44,50,55,59,48,41,40,34,36,38,41,41,35]},{"label":"えみコミック！","data":[43,12,21,12,19,19,30,32,29,34,15,26,30,27,29,29,27,20,30,36,77,34,39,64,97,101,35,101]},{"label":"ネギ速","data":[44,36,40,39,31,32,35,36,35,33,35,47,41,45,34,33,39,37,42,28,30,28,32,33,36,28,26,28]},{"label":"なんJ（まとめては）いかんのか？","data":[45,64,42,42,41,51,60,60,51,47,51,69,55,54,61,77,53,53,25,51,57,73,63,53,53,55,57,62]},{"label":"馬鳥速報","data":[46,38,48,49,49,37,50,51,48,39,30,36,50,61,49,54,41,33,33,41,49,45,46,49,46,43,53,52]},{"label":"マンガと私と猫ブログ。","data":[47,101,101,101,101,101,27,31,98,101,101,101,31,37,101,101,101,101,101,101,101,101,25,44,101,101,36,30]},{"label":"De速","data":[48,66,35,40,54,55,53,72,54,50,59,83,73,47,69,76,32,49,70,83,89,69,70,66,60,58,68,72]},{"label":"ポリー速報","data":[49,45,39,51,53,47,44,45,49,35,36,38,47,42,48,52,44,44,36,46,39,47,43,43,45,36,47,47]},{"label":"ぶる速-VIP","data":[50,37,41,36,34,38,48,42,42,45,39,40,36,36,38,43,45,38,45,38,36,37,36,34,31,34,37,33]},{"label":"ガールズVIPまとめ","data":[51,46,54,53,47,50,47,47,45,48,48,45,43,50,47,50,52,50,53,44,44,42,49,41,49,47,44,46]},{"label":"海外の万国反応記＠海外の反応","data":[52,42,51,57,44,42,46,48,47,54,57,48,39,39,43,51,46,47,54,53,54,46,53,48,51,57,46,51]},{"label":"NEWSぽけまとめーる","data":[53,43,47,41,46,46,43,50,43,43,42,50,42,49,50,47,42,42,51,45,47,51,45,39,41,40,42,42]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[54,50,50,56,45,48,52,44,56,44,64,46,48,52,56,46,55,52,52,50,51,41,47,45,47,37,48,44]},{"label":"つんの日常ブログ","data":[55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あにこ便｜アニメ感想サイト","data":[56,49,69,68,67,74,70,55,53,68,74,76,80,75,60,58,66,68,79,86,78,70,72,74,82,79,80,75]},{"label":"流速VIP","data":[57,65,68,60,42,45,54,34,36,49,45,55,52,58,41,36,37,32,28,39,38,48,48,47,42,48,39,41]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[58,55,57,59,57,57,55,57,62,61,61,59,54,55,42,34,49,54,57,57,59,58,58,52,59,56,52,53]},{"label":"登山ちゃんねる","data":[59,60,82,74,63,76,74,74,68,64,73,74,79,71,63,59,69,75,71,80,65,55,55,60,65,67,65,58]},{"label":"鈴木さん速報","data":[60,52,60,52,50,56,59,53,52,53,53,56,58,62,57,57,68,63,73,66,53,53,65,63,56,54,51,54]},{"label":"2chコピペ保存道場","data":[61,58,64,64,60,65,64,58,50,56,60,71,61,67,64,64,60,61,56,59,62,54,59,59,55,53,62,48]},{"label":"パチンコ・パチスロ.com","data":[62,54,49,27,43,52,49,46,40,41,46,34,35,48,46,35,36,51,60,49,64,60,57,29,39,39,27,32]},{"label":"デジタルニューススレッド","data":[63,63,61,65,62,60,66,67,64,74,71,66,66,70,62,60,59,72,64,67,58,59,61,56,61,51,58,49]},{"label":"【2ch】コピペ情報局","data":[64,53,63,67,70,73,57,70,69,63,75,68,77,69,73,63,57,65,66,60,66,62,75,79,67,73,89,68]},{"label":"ライフハックちゃんねる弐式","data":[65,57,59,73,59,62,67,66,58,69,58,72,64,63,58,68,56,60,61,64,73,68,76,50,69,71,56,57]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[66,77,67,87,66,98,78,65,70,83,62,60,86,57,51,72,54,56,63,62,56,75,56,69,70,86,101,89]},{"label":"はーとログ","data":[67,67,73,69,58,61,63,62,59,59,63,65,59,65,65,66,67,62,62,65,52,63,60,55,62,60,60,61]},{"label":"軍事・ミリタリー速報☆彡","data":[68,59,62,61,56,66,58,59,57,62,68,67,65,64,66,62,63,64,68,72,71,61,69,61,66,59,66,56]},{"label":"宝塚コミパ通信","data":[69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[70,82,65,66,76,86,88,101,99,80,67,98,99,96,98,78,75,67,81,101,96,93,94,101,101,90,87,90]},{"label":"FF14速報","data":[71,56,58,63,65,64,65,71,71,72,66,44,63,78,79,79,48,57,58,54,60,74,62,57,71,63,64,55]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[72,94,95,98,81,80,89,101,86,82,77,92,101,84,83,56,86,95,101,84,90,96,101,101,101,101,101,100]},{"label":"PS5速報！","data":[73,68,75,77,69,72,56,69,73,73,72,77,75,68,70,70,71,74,75,74,74,82,86,73,84,89,99,94]},{"label":"竜速（りゅうそく）","data":[74,90,76,92,93,100,98,87,89,87,97,101,101,101,101,97,101,96,101,101,101,101,101,101,101,101,101,101]},{"label":"ろぼ速VIP","data":[75,70,80,83,68,77,77,63,60,78,82,82,69,80,74,55,65,70,74,81,70,64,67,72,80,64,71,66]},{"label":"やみ速@なんJ西武まとめ","data":[76,62,55,62,71,84,75,82,67,71,87,85,94,98,85,101,98,88,39,58,79,92,91,86,101,101,94,80]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[77,73,78,80,73,82,80,80,78,76,83,80,95,90,101,101,101,101,101,101,101,79,78,58,75,70,67,64]},{"label":"ダイエット速報＠2ちゃんねる","data":[78,71,81,78,75,67,71,76,72,65,78,75,83,82,71,71,64,83,72,69,67,67,68,75,77,77,69,73]},{"label":"チリツモブログ","data":[79,101,56,58,101,68,101,101,101,101,101,101,101,74,101,101,101,101,101,68,101,101,66,101,101,101,101,101]},{"label":"投資ちゃんねる","data":[80,61,74,70,61,70,68,68,63,75,70,64,67,83,68,69,61,66,77,75,76,66,64,68,64,68,61,67]},{"label":"今日速2ch","data":[81,78,86,76,78,69,79,61,55,66,65,63,71,77,76,89,82,78,78,76,61,57,50,38,52,52,50,71]},{"label":"高槻つーしん","data":[82,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,97,101,60]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[83,76,85,90,86,90,82,83,85,90,89,93,90,92,93,81,83,81,88,92,91,85,83,77,87,78,77,84]},{"label":"まとめロッテ！","data":[84,97,44,46,52,63,84,99,95,89,101,81,70,79,67,88,93,97,84,101,101,97,101,91,95,101,72,88]},{"label":"大艦巨砲主義！","data":[85,75,79,72,72,85,81,86,79,85,79,79,84,93,88,83,77,79,85,87,83,81,88,81,79,85,75,74]},{"label":"えび通","data":[86,80,83,81,74,71,73,85,76,91,85,89,91,88,87,86,81,71,82,82,93,91,84,71,83,72,84,76]},{"label":"資格ちゃんねる","data":[87,84,91,96,88,93,90,101,90,86,91,62,74,76,95,67,78,90,94,88,87,86,101,88,81,61,74,78]},{"label":"おとの漫画","data":[88,101,66,55,55,59,61,95,101,67,54,54,51,56,75,101,62,48,69,61,50,71,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[89,101,101,91,82,92,92,100,92,88,92,101,101,100,101,98,99,91,92,90,92,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[90,79,72,88,80,83,85,91,82,84,90,88,81,89,91,85,73,84,80,85,82,84,92,76,85,84,79,85]},{"label":"稼げるまとめ速報","data":[91,85,90,86,94,78,83,79,74,77,80,78,78,95,94,84,87,77,86,79,80,94,77,83,76,66,92,63]},{"label":"ねこいもブログ","data":[92,101,99,94,89,95,101,101,97,93,88,87,101,99,99,101,91,76,101,95,72,72,73,65,73,95,88,70]},{"label":"大和とぴっく-やまとぴ","data":[93,101,101,101,101,101,51,78,77,101,76,90,101,101,80,90,101,101,101,101,101,101,101,84,35,44,101,101]},{"label":"絵日記でございます。","data":[94,101,96,85,85,101,91,84,80,79,81,86,89,94,90,82,72,80,90,94,94,101,101,82,101,101,101,99]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,50,75,101,101]},{"label":"人間まおと愉快な仲間たち","data":[96,81,87,79,84,81,62,64,66,55,55,57,60,60,54,39,40,46,55,47,45,43,44,42,44,46,45,45]},{"label":"スズぺぺの人生何とかなってます!!","data":[97,101,88,84,77,75,72,77,101,81,84,84,82,73,72,101,70,73,76,63,63,83,95,62,68,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[98,74,92,89,100,91,99,101,81,101,101,101,93,101,101,95,94,99,95,100,81,101,90,85,90,74,91,95]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[99,101,101,97,95,13,69,54,44,95,100,35,88,101,101,92,101,101,101,101,101,101,99,96,54,101,101,101]},{"label":"ニュース30over","data":[100,69,93,101,97,101,86,94,101,101,101,100,97,87,97,100,101,101,83,91,100,101,101,101,91,62,81,82]},{"label":"筋肉速報","data":[101,83,101,101,90,88,96,96,88,98,101,101,101,101,84,91,101,101,101,101,101,101,101,101,101,100,97,92]},{"label":"YoMuRy - ヨムリー -","data":[101,86,101,48,79,87,101,101,101,101,50,73,87,101,101,101,101,58,101,89,101,101,101,101,57,101,98,101]},{"label":"【日本の皇室】天皇皇后両陛下と皇族方","data":[101,87,101,47,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,88,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽん子の不倫スカッと漫画","data":[101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,92,94,101,99,101,101,101,83,101,101,94,101,101,100,80,97,101,98,96,101,101,85,95,94,91,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,93,101,101,101,101,101,101,84,100,101,99,92,86,82,65,92,101,101,101,101,95,97,101,101,101,101,101]},{"label":"お料理速報","data":[101,95,89,75,83,79,87,93,87,70,86,95,85,85,81,75,80,87,97,78,84,87,96,80,88,83,83,81]},{"label":"ああ言えばForYou","data":[101,96,101,101,101,101,101,101,96,101,101,101,101,101,89,99,101,101,101,101,101,101,80,99,101,101,101,97]},{"label":"ベイスターズ速報＠なんJ","data":[101,98,71,82,101,94,101,101,101,101,101,101,76,101,101,101,76,101,101,101,95,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,99,77,95,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101]},{"label":"かぞくちゃんねる","data":[101,100,97,100,92,99,95,101,100,96,94,96,101,101,101,101,84,86,101,97,101,101,98,97,93,92,86,87]},{"label":"あいチャンネル","data":[101,101,38,71,27,49,33,75,101,29,56,29,57,32,55,101,101,101,37,70,33,65,35,70,40,69,101,101]},{"label":"ベイスターズNEWS","data":[101,101,84,101,101,101,101,97,101,101,101,91,49,66,101,101,101,101,87,93,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,98,101,101,101,101,101,101,92,101,101,101,101,101,101,90,101,101,77,86,89,89,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,100,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しらす大盛りブログ","data":[101,101,101,50,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,93,98,101,101,101,101,101,101,101,101,91,86,96,95,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,99,96,101,97,101,101,94,101,97,96,101,101,101,89,92,100,101,99,101,100,101,101,101,95,96]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,50,101,101,101,101,82,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かんにゅー -韓国の反応-","data":[101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,99,98,96,101]},{"label":"ゲーム実況者速報＠YouTube系まとめ","data":[101,101,101,101,101,101,100,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,73,101,101,93,101,101,101,101,101,101,69,101,101,101,98,101,100,101,101,101,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,88,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぁゃιぃ(*ﾟーﾟ)NEWS 2nd","data":[101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,101,101,101,101,101,101,101,93,101,99,101,101,101,101,93,101,98,67,99,101,101,101,101,101,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,100,101,101,101,98,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,49,53,72,81,77,74,85,93,96,98,85,80,87,90,89,32,54,59]},{"label":"おうまがタイムズ","data":[101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,96,85,101,101,101,101,101,101,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"芸能ジャーナリスト・芋澤貞雄の「本日モ反省ノ色ナシ」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,59,78,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,89,101,101,101,101,101,101,101,101,101,101]},{"label":"Jamのおうち　＊ごはんと器とインテリア＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,40,74,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,73,88,94,93,101,97,88,93,87,74,80,85,79]},{"label":"くまちゃん日記 : 映画とグルメとラグビーと","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"邪推師GANMAのフレキシブル馬券法〜重賞で勝てる無料競馬予想ブログ〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,29,101,101,101,101,101,101,101,101,101]},{"label":"イディルシャイア居住区","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,41,33,46,56,74,89,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,71,88,101,101,101,101,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"獅子の泉でつかまえて","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,69,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,77,81,67,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,27,37,101,101,101,101,101]},{"label":"ハイブリッド競馬新聞","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,71,78,58,49,55,83]},{"label":"カナダと鬱と私 -バンクーバーでマイペース生活-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,63,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,94,92,96,100,91]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101]},{"label":"ぐら速  -声優まとめ速報-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,88,101,101]},{"label":"great G-SHOCK world","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,78,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,70,101]},{"label":"PCパーツまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101]},{"label":"２りんかんブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,36]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,93]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]}];
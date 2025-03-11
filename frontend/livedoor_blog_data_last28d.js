var labels = ['2025-02-12','2025-02-13','2025-02-14','2025-02-15','2025-02-16','2025-02-17','2025-02-18','2025-02-19','2025-02-20','2025-02-21','2025-02-22','2025-02-23','2025-02-24','2025-02-25','2025-02-26','2025-02-27','2025-02-28','2025-03-01','2025-03-02','2025-03-03','2025-03-04','2025-03-05','2025-03-06','2025-03-07','2025-03-08','2025-03-09','2025-03-10','2025-03-11',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,3,1,1,5,3,1,1,1,1,3,1,1,1,1,8,4,1,1,1,2,4,1,1,1]},{"label":"ハムスター速報","data":[2,4,6,6,7,7,6,4,5,7,7,6,7,6,7,5,5,9,5,6,6,5,5,9,6,7,6,5]},{"label":"ニート極道「牧村ユタカ」","data":[3,5,5,4,1,2,4,3,4,6,8,3,2,1,6,7,6,5,1,1,5,6,6,6,8,2,2,8]},{"label":"オレ的ゲーム速報＠刃","data":[4,2,3,2,2,3,2,1,1,2,2,2,3,2,2,2,2,2,2,2,2,2,2,1,1,3,3,2]},{"label":"はちま起稿","data":[5,3,2,3,4,4,3,2,2,3,3,4,5,4,4,4,3,4,4,5,4,3,4,4,3,4,4,3]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,7,8,8,9,10,8,7,5,6,7,9,9,10,8,9,6,7,9,8,8,8,7,7,8,8,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[7,7,8,7,6,6,7,7,8,8,5,8,8,8,8,6,7,8,6,8,7,7,7,8,5,6,7,6]},{"label":"もちログ","data":[8,10,9,11,12,10,9,9,9,10,9,9,6,5,3,3,4,3,3,3,3,4,3,3,2,22,29,25]},{"label":"暇つぶしニュース","data":[9,9,10,9,10,8,8,11,10,9,10,10,10,7,9,9,8,7,9,7,9,9,9,5,9,5,5,4]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,11,11,10,11,12,11,10,11,11,11,11,13,10,5,10,10,10,10,10,12,11,10,10,10,9,11,13]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,13,13,12,13,11,12,12,14,14,14,12,12,11,11,11,11,11,11,11,13,13,12,12,12,11,10,10]},{"label":"【2ch】ニュー速クオリティ","data":[12,12,12,14,14,13,13,13,12,13,12,13,11,12,13,12,12,12,12,13,11,12,13,11,11,10,9,9]},{"label":"ヤゴヴのマンガ劇場","data":[13,8,4,5,5,5,5,6,6,4,4,5,4,14,33,33,24,15,14,12,10,10,11,13,14,13,13,11]},{"label":"なんJ PRIDE","data":[14,14,14,15,16,14,14,14,13,12,13,14,15,13,12,13,13,14,13,14,14,14,14,14,13,12,12,12]},{"label":"ネギ速","data":[15,19,24,24,23,24,24,23,26,23,24,22,20,19,24,27,21,21,23,25,26,20,20,23,20,19,19,23]},{"label":"哲学ニュースnwk","data":[16,17,15,16,20,16,16,16,16,18,17,17,18,16,15,15,15,16,16,16,15,17,15,15,15,15,17,14]},{"label":"わんこーる速報！","data":[17,16,16,17,19,15,15,15,17,16,16,16,19,18,16,17,16,17,17,17,17,15,17,17,16,16,14,15]},{"label":"VIPPERな俺","data":[18,23,21,23,26,23,21,20,15,17,21,26,28,25,19,18,20,22,18,20,19,21,22,20,27,25,23,18]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[19,18,18,20,17,25,19,19,19,19,18,18,16,17,17,23,19,20,19,18,16,19,18,18,18,17,21,21]},{"label":"ねいろ速報さん","data":[20,22,22,25,25,26,22,21,23,24,22,21,24,20,18,21,23,24,25,24,23,24,26,26,24,23,22,22]},{"label":"ラビット速報","data":[21,21,19,21,22,22,23,22,25,22,26,20,23,21,22,19,22,25,21,21,21,22,21,22,21,18,20,24]},{"label":"おーるじゃんる","data":[22,25,23,13,9,18,18,18,21,21,28,24,14,22,20,25,25,26,24,27,25,25,27,25,25,24,26,20]},{"label":"世にも奇妙ななんかの話","data":[23,31,39,37,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゴールデンタイムズ","data":[24,24,20,22,24,20,20,24,22,20,20,19,21,23,21,20,18,23,20,22,20,26,28,19,19,20,16,16]},{"label":"IT速報","data":[25,26,27,27,15,28,30,37,33,28,39,34,36,31,25,26,27,30,29,31,34,39,36,33,29,27,25,27]},{"label":"うしみつ-5chまとめ-","data":[26,28,26,28,27,27,25,26,24,25,25,23,25,24,23,22,17,18,22,23,22,23,25,24,22,21,18,19]},{"label":"日刊やきう速報","data":[27,27,28,34,28,29,27,27,27,26,27,25,27,28,30,28,28,27,28,29,29,33,31,31,32,31,31,28]},{"label":"人間まおと愉快な仲間たち","data":[28,30,32,99,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,97,91,96,101,89,96,97,92,96]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[29,29,29,30,30,33,31,33,31,27,29,31,26,26,26,29,29,28,27,28,31,36,29,29,30,37,28,26]},{"label":"ガレ速@フォロワー体験漫画","data":[30,51,35,31,21,19,32,28,32,32,31,29,34,34,28,31,32,31,32,32,33,30,33,30,31,30,34,31]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[31,35,36,35,33,39,41,29,28,29,30,32,29,36,32,32,33,29,30,33,28,35,32,28,28,29,36,29]},{"label":"稲妻速報","data":[32,33,38,39,34,32,38,30,35,35,32,36,41,37,37,38,37,38,36,40,37,38,43,40,36,36,37,34]},{"label":"山田全自動のあるある日記","data":[33,93,101,29,32,51,36,35,29,61,79,71,30,32,42,30,47,46,72,47,58,95,96,56,58,54,70,57]},{"label":"なんJクエスト","data":[34,34,34,33,31,30,29,34,36,38,34,40,32,29,31,36,30,34,38,30,30,31,40,37,33,28,30,35]},{"label":"芸能人の気になる噂","data":[35,37,33,36,36,31,42,32,38,34,36,39,38,35,39,40,42,42,41,39,41,40,37,39,40,39,39,32]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[36,47,48,45,44,40,26,46,47,39,38,35,40,45,51,46,31,35,48,48,27,27,34,41,38,35,40,42]},{"label":"オタク.com －オタコム－","data":[37,32,37,32,35,35,33,42,30,36,40,33,37,38,36,35,38,40,33,36,39,37,30,27,34,34,33,33]},{"label":"ついんてーる速報","data":[38,36,31,46,38,43,40,38,37,40,35,37,44,44,34,49,39,43,39,41,38,34,38,42,35,32,44,41]},{"label":"カイカイ反応通信","data":[39,40,43,38,39,34,34,39,39,33,41,38,47,43,35,37,34,36,43,43,35,29,41,38,39,41,43,30]},{"label":"カオスちゃんねる","data":[40,44,49,52,42,45,48,45,43,48,51,48,52,41,43,44,45,44,49,38,43,46,45,43,49,48,42,44]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[41,15,25,40,47,48,67,72,70,78,89,88,89,89,85,92,101,98,67,89,101,67,74,94,101,92,95,101]},{"label":"ぶる速-VIP","data":[42,42,41,47,40,38,39,41,40,49,45,45,39,39,40,42,35,39,35,37,36,32,42,46,37,38,35,37]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[43,39,40,43,41,36,28,25,34,31,37,41,42,33,27,34,48,32,34,35,24,18,19,21,26,33,41,38]},{"label":"まとめたニュース","data":[44,38,47,41,48,46,51,44,55,46,43,52,45,50,50,50,36,52,47,44,42,42,46,35,42,44,51,39]},{"label":"スズぺぺの人生何とかなってます!!","data":[45,45,44,44,50,88,45,43,41,41,61,89,101,101,101,101,101,101,101,101,98,101,101,101,87,94,101,101]},{"label":"De速","data":[46,41,57,55,53,62,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[47,59,68,48,49,44,46,31,42,45,48,49,57,55,59,52,55,50,52,55,53,59,52,44,45,45,56,36]},{"label":"パチンコ・パチスロ.com","data":[48,50,42,42,59,54,43,40,49,47,49,62,61,52,44,43,52,53,69,51,47,49,54,45,43,59,38,45]},{"label":"YoMuRy - ヨムリー -","data":[49,101,87,101,101,101,101,47,101,93,101,101,101,101,45,101,85,101,101,101,101,44,101,83,101,101,101,101]},{"label":"NEWSぽけまとめーる","data":[50,53,52,53,55,47,53,52,52,55,50,50,55,54,47,53,46,48,57,57,50,57,49,64,44,62,57,53]},{"label":"ガールズVIPまとめ","data":[51,49,45,49,46,42,44,49,46,53,55,56,48,48,41,45,50,51,51,54,49,51,55,54,55,61,48,54]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[52,52,65,50,52,56,50,51,50,37,46,43,49,53,53,61,54,49,44,42,45,41,53,53,61,47,47,56]},{"label":"海外の万国反応記＠海外の反応","data":[53,46,59,58,45,55,47,56,61,43,42,53,53,51,49,51,56,47,50,52,51,45,51,50,48,50,53,50]},{"label":"なんJ（まとめては）いかんのか？","data":[54,56,63,54,54,59,58,48,58,42,72,61,33,27,58,72,92,56,42,46,75,50,35,36,64,58,46,85]},{"label":"ポリー速報","data":[55,55,61,57,75,81,71,61,63,58,54,68,62,70,72,70,67,64,53,56,71,55,66,65,54,56,68,69]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[56,57,46,61,67,41,62,59,59,59,56,57,43,40,29,39,43,37,45,72,65,52,47,55,51,53,66,66]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,76,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[58,81,75,74,69,52,61,84,84,68,91,78,46,42,64,82,65,57,89,58,55,88,92,101,101,85,86,76]},{"label":"2chコピペ保存道場","data":[59,64,53,64,60,61,57,57,62,64,65,69,60,58,62,65,61,60,65,65,56,61,59,59,60,63,67,64]},{"label":"馬鳥速報","data":[60,43,50,62,64,64,60,50,53,57,71,85,82,75,48,48,58,65,78,64,57,63,65,60,74,75,85,78]},{"label":"投資ちゃんねる","data":[61,58,56,56,58,53,54,55,57,50,58,64,54,49,52,57,51,55,55,50,54,54,62,62,53,42,45,49]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[62,60,60,60,61,57,56,54,51,54,44,58,63,61,61,66,63,63,64,66,66,53,57,61,57,65,64,58]},{"label":"鈴木さん速報","data":[63,48,55,67,65,60,63,69,67,70,62,60,59,67,54,54,60,66,79,67,74,60,63,67,72,66,50,43]},{"label":"ライフハックちゃんねる弐式","data":[64,71,62,70,73,66,59,53,78,80,69,51,66,63,55,56,78,71,68,83,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[65,66,64,65,63,63,64,63,69,67,64,65,56,59,57,58,62,61,56,59,61,65,58,58,52,46,60,61]},{"label":"登山ちゃんねる","data":[66,78,71,69,80,74,80,66,68,73,60,73,76,66,65,68,72,82,74,84,69,84,60,71,63,72,63,71]},{"label":"軍事・ミリタリー速報☆彡","data":[67,75,76,71,71,65,66,68,73,65,74,82,75,76,63,73,79,68,63,68,64,68,68,72,68,70,74,70]},{"label":"ダイエット速報＠2ちゃんねる","data":[68,70,77,68,74,87,93,71,81,75,90,80,64,85,77,81,99,76,76,62,81,75,90,78,80,74,65,91]},{"label":"うみこのおとぼけぐらし","data":[69,68,67,63,57,37,37,36,45,52,52,70,101,101,101,87,53,58,54,53,52,43,44,52,50,57,62,63]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[70,73,54,59,62,90,92,64,56,60,53,55,71,64,71,60,69,88,70,101,84,56,56,76,77,71,52,59]},{"label":"PS5速報！","data":[71,76,72,73,78,75,84,75,75,81,80,84,78,98,76,83,75,73,80,88,72,73,76,77,73,78,75,75]},{"label":"資格ちゃんねる","data":[72,84,91,97,81,77,75,70,74,84,78,79,69,87,98,94,66,79,93,77,82,82,69,87,97,100,97,101]},{"label":"ぱんをたずねて2000里ちょい","data":[73,61,70,51,37,58,52,77,60,62,47,44,74,56,88,64,44,33,37,45,44,89,78,48,47,52,54,48]},{"label":"はーとログ","data":[74,63,74,66,68,68,68,58,65,56,57,63,65,79,70,80,76,72,60,63,62,70,61,68,62,60,61,55]},{"label":"ろぼ速VIP","data":[75,67,78,77,70,69,81,79,71,69,76,74,70,68,66,74,82,70,58,71,80,76,67,75,66,73,72,80]},{"label":"あにこ便｜アニメ感想サイト","data":[76,90,89,86,77,71,83,80,89,91,82,81,73,71,83,93,97,83,73,82,77,87,93,93,79,79,71,89]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[77,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あいチャンネル","data":[78,20,30,19,29,21,35,74,20,30,19,30,22,30,69,16,26,19,31,19,32,79,23,32,23,43,24,40]},{"label":"最強ジャンプ放送局","data":[79,77,83,84,84,70,65,76,76,88,83,77,81,74,73,86,90,96,87,93,70,83,79,82,82,91,88,77]},{"label":"絵日記でございます。","data":[80,92,90,89,92,79,82,91,77,87,92,97,83,65,68,77,77,41,46,60,59,69,71,70,89,67,73,68]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[81,86,88,85,82,78,89,81,72,85,85,87,79,77,87,91,91,91,85,90,83,91,84,88,85,83,80,93]},{"label":"おる速","data":[82,54,73,87,93,84,86,93,82,66,66,86,86,69,74,76,87,77,81,61,63,77,85,92,95,99,101,73]},{"label":"お料理速報","data":[83,94,69,83,98,101,96,87,91,94,86,93,98,90,90,96,101,89,98,96,78,101,95,101,81,96,101,101]},{"label":"高槻つーしん","data":[84,101,101,101,101,101,98,99,101,101,96,101,101,101,89,62,95,85,95,101,100,58,91,96,71,77,99,101]},{"label":"まとめロッテ！","data":[85,101,101,101,101,100,101,101,98,101,101,101,101,91,75,67,80,101,101,101,101,101,73,91,92,76,81,88]},{"label":"ジャンプ速報","data":[86,87,101,101,91,85,97,86,99,101,88,83,95,95,78,88,73,101,101,75,101,101,89,101,101,101,101,99]},{"label":"えび通","data":[87,85,86,93,89,89,88,90,80,90,95,98,93,81,91,90,84,92,62,86,89,100,86,99,90,89,91,84]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[88,89,85,82,86,83,101,85,85,86,100,95,85,80,82,75,89,90,86,91,101,86,80,86,83,86,79,79]},{"label":"FF14速報","data":[89,69,66,76,72,94,76,73,54,71,81,91,50,73,56,84,94,93,101,87,87,93,94,84,99,101,101,101]},{"label":"【2ch】コピペ情報局","data":[90,79,80,72,51,67,79,83,79,79,77,66,67,86,60,71,74,86,77,79,88,64,70,57,65,68,69,81]},{"label":"大艦巨砲主義！","data":[91,83,92,90,90,91,91,89,88,89,84,90,92,84,84,89,83,94,71,69,79,71,88,80,70,80,83,83]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[92,91,100,79,79,73,72,78,64,82,75,76,72,82,96,69,68,78,84,76,73,90,72,73,78,82,78,94]},{"label":"稼げるまとめ速報","data":[93,72,79,78,83,82,69,62,66,72,70,96,80,88,81,78,64,69,90,74,68,81,83,66,67,69,84,98]},{"label":"えみコミック！","data":[94,101,101,95,101,96,101,97,101,101,101,72,94,101,94,95,101,95,82,73,60,48,50,51,56,49,58,52]},{"label":"ニュース30over","data":[95,74,96,101,101,101,101,88,101,101,87,101,101,83,99,101,101,101,88,101,85,99,101,98,88,101,100,101]},{"label":"バイク速報","data":[96,82,101,101,101,101,101,95,94,97,101,101,101,96,101,97,101,97,101,101,101,101,101,101,93,101,101,100]},{"label":"ああ言えばForYou","data":[97,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,97,101,101,101,101,101,101,95,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[98,100,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]},{"label":"イミフｗｗｗ","data":[99,101,101,101,94,99,101,100,87,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"常識的に考えた","data":[100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,62,101,101,76,98,101,101,101,101,101,42,90,101,101,55,101,101,101,101,101,66,101,101,101,101,101,74]},{"label":"大和とぴっく-やまとぴ","data":[101,65,58,75,56,50,49,65,93,76,101,101,101,101,101,101,57,67,101,101,101,101,101,101,101,87,90,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,80,101,101,101,101,101,101,96,101,101,101,101,101,86,101,101,62,101,101,101,62,101,63,76,101,101,92]},{"label":"竜速（りゅうそく）","data":[101,88,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アニメ＆漫画 グッズ情報","data":[101,95,101,101,101,101,101,98,101,101,101,101,101,101,101,101,96,101,92,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,96,82,91,100,101,70,82,92,83,101,92,91,94,92,100,86,80,75,80,92,92,87,85,91,81,98,101]},{"label":"キチガイママまとめ保管庫","data":[101,98,101,101,95,97,101,101,100,99,98,101,101,101,95,101,101,101,101,99,95,101,97,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,99,93,101,101,101,101,94,97,96,101,101,101,100,97,101,101,101,101,101,99,98,101,101,101,101,101,101]},{"label":"女帝 SUPER QUEEN","data":[101,101,17,18,18,17,17,17,18,15,15,15,17,15,14,14,14,13,15,15,18,16,16,16,17,14,15,17]},{"label":"harumama日記","data":[101,101,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,81,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,84,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぼめそのまんがブログ","data":[101,101,95,88,66,101,77,92,83,74,33,27,77,72,101,101,88,100,83,85,86,74,81,74,75,84,82,82]},{"label":"ツイッター速報","data":[101,101,97,26,43,76,90,101,101,44,68,100,101,101,101,63,101,101,101,101,101,101,24,47,69,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[101,101,99,94,87,80,87,96,95,95,101,101,88,78,79,98,101,101,99,95,97,85,101,101,101,101,96,101]},{"label":"へー子のウラ漫画日和","data":[101,101,101,92,85,93,100,101,86,100,99,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,96,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,98,101,101,101,101,101,92,101,101,101,101,101,101,100,99,101,101,101,101,100,101,101,88,89,86]},{"label":"岡田ももえと申します","data":[101,101,101,100,97,95,101,101,101,101,97,101,101,101,100,101,101,101,100,101,90,94,98,95,101,93,94,87]},{"label":"井上かなえオフィシャルブログ 「母ちゃんちの晩御飯とどたばた日記」","data":[101,101,101,101,88,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,49,78,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,72,101,101,101,101,101,101,58,62,101,101,101,84,94,101,101,101,101,101,101,98,101,65]},{"label":"ながおか速報 -新潟県長岡市の地域情報サイト","data":[101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あなたは『おもしろマガジン』","data":[101,101,101,101,101,92,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"推し沼のBlog","data":[101,101,101,101,101,101,55,60,101,101,101,59,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カナダと鬱と私 -バンクーバーでマイペース生活-","data":[101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"戦闘系女子もっちゃんとその家族たちのこととか","data":[101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"きたかんとうinfo","data":[101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"De速","data":[101,101,101,101,101,101,101,67,48,63,63,67,68,57,80,79,71,74,61,78,67,78,75,69,59,64,59,62]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,44,77,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"沼津つーしん","data":[101,101,101,101,101,101,101,101,101,51,67,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ききらら☆雑誌付録レビュー","data":[101,101,101,101,101,101,101,101,101,98,101,99,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"【日本の皇室】天皇皇后両陛下と皇族方","data":[101,101,101,101,101,101,101,101,101,101,23,75,101,101,101,24,41,54,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,59,46,51,47,38,41,40,59,40,34,40,28,39,34,41,40,49,51]},{"label":"戦国はつらいよ","data":[101,101,101,101,101,101,101,101,101,101,73,28,35,46,46,47,49,45,26,26,46,47,48,49,46,26,27,47]},{"label":"ウィクロス速報","data":[101,101,101,101,101,101,101,101,101,101,101,47,97,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,54,31,60,67,59,59,101,59,49,48,72,77,79,84,55,55,46]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一日・ 一ハワイ  - ハワイブログ -","data":[101,101,101,101,101,101,101,101,101,101,101,101,87,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,99,101,101,96,98,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,64,101,101,101,101,101]},{"label":"ダンナ様は安月給","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,75,101,101,101,80,101,90,101,101,101,101]},{"label":"高橋清隆の文書館","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,101,101,101,101,101,101,101,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なにかと徒然クライシス / 星田つまみ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"〜うちのヒフミヨ！４人育児はエンターテインメント〜","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"てにくまちゃん。のもっと不思議で怖い話","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,70,101,101,101,101,101,101,76,67]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,100,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,81,101,97,101,81,86,101,101,60]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,98,101,101,90]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101]},{"label":"しらす大盛りブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,94,90,93,97]},{"label":"スポーツ見るもの語る者〜フモフモコラム","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101]},{"label":"ゲーム実況者速報＠YouTube系まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101]},{"label":"かぼすちゃんとおさんぽ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51,87,101]},{"label":"千曲がり奮闘記～紆余曲折の育児記録～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,32,72]}];
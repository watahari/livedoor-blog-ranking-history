var labels = ['2024-11-21','2024-11-22','2024-11-23','2024-11-24','2024-11-25','2024-11-26','2024-11-27','2024-11-28','2024-11-29','2024-11-30','2024-12-01','2024-12-02','2024-12-03','2024-12-04','2024-12-05','2024-12-06','2024-12-07','2024-12-08','2024-12-09','2024-12-10','2024-12-11','2024-12-12','2024-12-13','2024-12-14','2024-12-15','2024-12-16','2024-12-17','2024-12-18',];var datasets = [{"label":"ニート極道「牧村ユタカ」","data":[1,2,3,1,1,2,2,1,1,3,1,101,3,2,3,3,1,2,3,17,101,101,24,12,3,3,8,10]},{"label":"オレ的ゲーム速報＠刃","data":[2,3,2,3,2,3,3,4,2,2,2,2,1,1,2,2,3,1,2,2,2,2,1,2,2,2,1,1]},{"label":"まめきちまめこニートの日常","data":[3,1,1,2,3,1,1,2,3,1,3,1,2,3,1,1,2,4,1,1,1,1,2,1,1,1,5,2]},{"label":"はちま起稿","data":[4,6,6,4,6,5,5,5,5,5,4,3,4,4,5,5,6,3,4,3,4,5,4,3,4,5,4,6]},{"label":"ハムスター速報","data":[5,5,4,7,5,8,7,8,6,6,6,5,6,5,4,4,4,7,8,6,5,4,6,7,6,6,6,7]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,7,5,5,4,4,4,6,4,4,5,4,5,6,6,6,5,5,5,4,3,3,5,4,5,4,2,4]},{"label":"ガレ速@フォロワー体験漫画","data":[7,9,8,6,7,6,8,9,7,8,7,101,24,22,23,19,20,22,24,53,101,101,28,28,21,18,21,19]},{"label":"暇つぶしニュース","data":[8,10,7,8,10,9,9,11,9,9,9,6,8,9,8,8,8,9,7,8,7,9,9,8,8,9,9,8]},{"label":"痛いニュース(ﾉ∀`)","data":[9,8,9,9,9,7,6,7,8,7,8,7,7,7,7,7,7,6,6,5,6,8,7,6,7,7,7,5]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,11,10,11,11,11,10,10,10,10,10,9,9,10,10,10,9,8,9,7,8,7,8,9,11,8,10,9]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,12,11,12,12,12,11,12,12,11,13,10,11,12,12,11,11,11,11,10,10,11,11,11,12,11,12,13]},{"label":"まるごし刑事","data":[12,13,15,10,13,14,12,14,15,16,12,101,44,51,51,43,45,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ヤゴヴのマンガ劇場","data":[13,14,14,13,14,16,13,13,13,12,11,8,10,11,11,9,10,10,10,9,9,10,10,10,9,10,11,11]},{"label":"哲学ニュースnwk","data":[14,15,16,15,8,13,15,17,11,13,15,12,12,8,9,12,12,14,13,11,11,6,3,5,10,12,3,3]},{"label":"わんこーる速報！","data":[15,16,17,14,15,17,18,16,16,19,16,11,13,13,16,14,13,12,14,14,14,13,15,15,14,14,14,18]},{"label":"おーるじゃんる","data":[16,19,21,25,25,23,21,29,25,25,28,24,23,15,19,17,16,13,20,18,23,25,14,14,22,22,18,12]},{"label":"ラビット速報","data":[17,20,20,21,22,22,22,20,21,29,25,19,19,21,18,18,22,16,23,23,18,18,21,22,18,19,25,22]},{"label":"VIPPERな俺","data":[18,17,23,31,27,24,24,23,22,20,30,13,15,17,21,23,24,24,22,25,25,20,23,17,20,23,19,25]},{"label":"もちログ","data":[19,18,18,16,16,15,14,15,14,15,14,16,54,46,39,31,32,29,27,26,24,21,22,16,16,17,15,16]},{"label":"ねいろ速報さん","data":[20,22,24,20,19,18,23,21,18,23,19,15,16,18,20,16,18,19,15,13,17,17,20,21,15,16,20,23]},{"label":"【2ch】ニュー速クオリティ","data":[21,21,19,18,21,21,17,18,17,17,21,18,17,16,14,13,14,15,17,15,15,14,17,18,19,20,17,21]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[22,25,26,28,23,26,25,26,24,27,29,21,26,27,27,20,21,25,16,24,19,23,26,24,26,28,26,29]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[23,24,25,23,24,25,26,25,23,22,20,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ PRIDE","data":[24,27,22,19,18,19,20,24,28,26,22,17,21,23,25,21,15,18,19,19,16,15,18,20,17,15,16,20]},{"label":"ゴールデンタイムズ","data":[25,29,28,26,28,30,30,30,29,30,24,20,22,26,29,22,25,26,25,22,20,16,16,19,23,21,24,26]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[26,26,27,24,26,29,28,22,20,21,18,14,14,14,17,15,17,17,18,16,13,12,12,13,13,13,13,17]},{"label":"うしみつ-5chまとめ-","data":[27,28,29,29,29,28,27,28,27,33,27,23,20,20,24,25,27,28,21,20,21,22,25,25,25,24,27,28]},{"label":"世にも奇妙ななんかの話","data":[28,30,65,22,20,20,19,68,19,18,17,59,18,19,15,71,19,21,72,101,101,101,101,76,81,75,58,101]},{"label":"日刊やきう速報","data":[29,23,13,17,17,10,16,27,26,24,23,22,27,24,26,24,26,20,26,12,22,24,27,23,24,25,22,24]},{"label":"なんJクエスト","data":[30,33,30,30,32,32,29,33,30,32,32,25,28,28,33,27,31,31,30,27,26,28,29,29,27,27,28,31]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[31,45,41,49,51,56,50,60,65,55,55,53,67,41,35,30,33,38,48,52,54,48,43,31,29,32,46,47]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[32,31,31,33,30,31,31,31,33,31,33,26,25,25,28,26,28,23,28,43,28,26,30,26,30,26,30,27]},{"label":"IT速報","data":[33,34,32,32,38,34,34,34,35,34,35,27,29,34,30,28,29,30,29,28,32,30,33,32,28,30,31,33]},{"label":"カイカイ反応通信","data":[34,40,34,43,49,45,46,47,47,43,45,44,38,36,31,40,47,41,41,30,35,32,39,45,49,46,51,52]},{"label":"稲妻速報","data":[35,36,33,36,40,35,35,36,36,35,38,31,31,30,34,29,34,34,32,31,31,33,31,34,33,33,32,34]},{"label":"パチンコ・パチスロ.com","data":[36,47,54,51,55,42,47,42,44,46,36,42,49,38,22,46,57,62,54,49,27,43,52,49,46,40,41,46]},{"label":"ネギ速","data":[37,38,35,37,36,33,36,38,38,44,41,34,42,43,40,39,41,44,36,40,39,31,32,35,36,35,33,35]},{"label":"あいチャンネル","data":[38,87,37,90,39,80,101,39,93,40,39,92,59,100,70,101,61,101,101,38,71,27,49,33,75,101,29,56]},{"label":"海外の万国反応記＠海外の反応","data":[39,52,46,48,44,48,42,51,58,53,52,48,40,42,45,49,53,52,42,51,57,44,42,46,48,47,54,57]},{"label":"オタク.com －オタコム－","data":[40,44,43,38,37,40,38,37,39,39,40,30,33,31,32,35,39,33,34,29,29,29,36,41,35,34,37,44]},{"label":"えみコミック！","data":[41,41,38,55,99,101,57,43,45,50,57,101,61,33,36,37,38,43,12,21,12,19,19,30,32,29,34,15]},{"label":"カオスちゃんねる","data":[42,43,42,42,43,41,37,35,43,52,47,33,32,35,44,33,40,37,35,37,43,38,40,40,41,39,42,40]},{"label":"ついんてーる速報","data":[43,35,45,41,34,37,39,40,40,36,46,32,37,39,48,34,30,36,31,33,33,35,44,39,38,31,38,43]},{"label":"ぶる速-VIP","data":[44,39,36,34,41,44,44,49,42,37,42,28,35,32,38,32,37,50,37,41,36,34,38,48,42,42,45,39]},{"label":"芸能人の気になる噂","data":[45,42,40,39,42,38,43,41,41,48,44,36,36,37,37,38,42,35,33,32,37,37,34,36,37,38,36,37]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[46,49,47,46,45,47,45,53,37,41,43,38,43,48,46,44,44,40,40,45,44,39,41,37,39,37,40,38]},{"label":"なんJ（まとめては）いかんのか？","data":[47,46,48,40,31,36,40,44,46,45,51,64,50,50,53,42,35,45,64,42,42,41,51,60,60,51,47,51]},{"label":"まとめたニュース","data":[48,50,52,52,50,49,58,46,53,51,49,46,48,45,47,48,51,42,39,36,45,36,54,38,43,41,52,41]},{"label":"De速","data":[49,37,50,54,67,58,63,52,49,47,26,35,39,47,50,54,49,48,66,35,40,54,55,53,72,54,50,59]},{"label":"馬鳥速報","data":[50,48,51,56,48,46,33,32,31,14,37,29,34,44,41,45,54,46,38,48,49,49,37,50,51,48,39,30]},{"label":"ぱんをたずねて2000里ちょい","data":[51,58,44,35,52,39,32,54,59,38,34,39,30,29,43,78,36,32,44,70,30,40,58,101,40,61,57,32]},{"label":"NEWSぽけまとめーる","data":[52,54,49,47,54,51,52,48,48,54,54,43,45,53,49,41,52,53,43,47,41,46,46,43,50,43,43,42]},{"label":"ガールズVIPまとめ","data":[53,55,55,53,53,54,53,58,57,56,59,49,51,56,52,50,46,51,46,54,53,47,50,47,47,45,48,48]},{"label":"今日速2ch","data":[54,82,86,61,64,79,83,81,83,90,67,52,63,76,88,77,74,81,78,86,76,78,69,79,61,55,66,65]},{"label":"FF14速報","data":[55,60,62,74,69,65,55,50,56,28,48,40,46,54,59,65,73,71,56,58,63,65,64,65,71,71,72,66]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[56,51,53,58,59,61,67,61,63,64,61,58,60,60,61,60,62,58,55,57,59,57,57,55,57,62,61,61]},{"label":"2chコピペ保存道場","data":[57,66,69,65,58,59,64,67,71,66,60,60,62,73,65,53,64,61,58,64,64,60,65,64,58,50,56,60]},{"label":"あにこ便｜アニメ感想サイト","data":[58,57,56,45,46,53,51,59,51,57,53,41,47,58,64,61,60,56,49,69,68,67,74,70,55,53,68,74]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[59,53,75,89,65,57,49,57,50,62,56,50,41,55,55,52,48,54,50,50,56,45,48,52,44,56,44,64]},{"label":"ポリー速報","data":[60,56,39,44,47,43,48,55,52,58,50,51,52,52,54,47,50,49,45,39,51,53,47,44,45,49,35,36]},{"label":"デジタルニューススレッド","data":[61,70,71,66,57,67,71,69,69,70,70,56,65,64,62,63,66,63,63,61,65,62,60,66,67,64,74,71]},{"label":"ライフハックちゃんねる弐式","data":[62,72,58,73,68,63,59,62,67,65,76,69,78,70,74,83,65,65,57,59,73,59,62,67,66,58,69,58]},{"label":"投資ちゃんねる","data":[63,79,79,76,78,74,80,72,77,79,73,63,69,71,75,68,79,80,61,74,70,61,70,68,68,63,75,70]},{"label":"おとの漫画","data":[64,67,59,87,101,81,54,56,54,61,88,101,75,57,58,51,55,88,101,66,55,55,59,61,95,101,67,54]},{"label":"鈴木さん速報","data":[65,64,63,78,83,69,56,65,66,59,79,54,53,59,57,55,59,60,52,60,52,50,56,59,53,52,53,53]},{"label":"流速VIP","data":[66,65,81,50,66,71,60,45,55,60,58,37,56,63,69,56,63,57,65,68,60,42,45,54,34,36,49,45]},{"label":"はーとログ","data":[67,77,64,60,75,70,73,75,70,69,72,68,68,68,72,70,71,67,67,73,69,58,61,63,62,59,59,63]},{"label":"軍事・ミリタリー速報☆彡","data":[68,68,66,72,60,62,68,66,61,67,63,62,70,66,63,67,67,68,59,62,61,56,66,58,59,57,62,68]},{"label":"PS5速報！","data":[69,74,61,68,72,64,74,71,60,71,68,67,72,72,76,64,72,73,68,75,77,69,72,56,69,73,73,72]},{"label":"登山ちゃんねる","data":[70,59,78,59,70,66,70,76,62,68,62,55,64,61,60,58,76,59,60,82,74,63,76,74,74,68,64,73]},{"label":"マンガと私と猫ブログ。","data":[71,32,101,101,33,55,97,101,34,42,93,101,101,101,101,101,23,47,101,101,101,101,101,27,31,98,101,101]},{"label":"【2ch】コピペ情報局","data":[72,75,74,71,84,68,92,64,64,75,78,61,57,74,66,62,78,64,53,63,67,70,73,57,70,69,63,75]},{"label":"サカラボ | サッカーまとめ速報","data":[73,81,85,101,91,99,98,95,101,80,94,75,90,101,101,101,101,98,74,92,89,100,91,99,101,81,101,101]},{"label":"大艦巨砲主義！","data":[74,86,77,85,86,77,89,82,75,87,89,79,79,83,73,79,83,85,75,79,72,72,85,81,86,79,85,79]},{"label":"まとめロッテ！","data":[75,73,80,70,73,60,90,101,72,72,77,57,58,69,80,75,75,84,97,44,46,52,63,84,99,95,89,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[76,80,84,77,76,73,78,73,82,81,82,76,77,81,77,73,82,78,71,81,78,75,67,71,76,72,65,78]},{"label":"サカサカ10【サッカーまとめ速報】","data":[77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[78,84,76,82,89,76,87,86,89,74,75,65,73,85,79,85,86,91,85,90,86,94,78,83,79,74,77,80]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[79,63,60,88,63,50,62,97,95,63,65,96,97,62,68,87,58,66,77,67,87,66,98,78,65,70,83,62]},{"label":"絵日記でございます。","data":[80,76,82,101,88,89,82,79,88,77,69,72,80,79,96,93,90,94,101,96,85,85,101,91,84,80,79,81]},{"label":"やみ速@なんJ西武まとめ","data":[81,69,67,75,71,72,66,92,74,88,80,86,74,77,78,74,77,76,62,55,62,71,84,75,82,67,71,87]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[82,62,68,63,80,82,77,80,81,83,66,47,55,65,67,72,56,39,51,46,38,51,35,42,52,65,60,69]},{"label":"ろぼ速VIP","data":[83,78,83,57,79,85,81,63,68,78,74,66,81,75,82,57,68,75,70,80,83,68,77,77,63,60,78,82]},{"label":"最強ジャンプ放送局","data":[84,91,87,92,90,75,88,87,85,85,81,74,71,86,90,80,91,90,79,72,88,80,83,85,91,82,84,90]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[85,101,57,67,85,101,72,3,86,73,87,94,91,101,101,96,85,99,101,101,97,95,13,69,54,44,95,100]},{"label":"シカブロ","data":[86,101,96,80,101,100,101,101,101,101,92,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[87,90,70,64,61,52,79,77,79,82,83,77,87,88,85,69,70,72,94,95,98,81,80,89,101,86,82,77]},{"label":"えび通","data":[88,96,88,86,92,88,96,91,91,95,91,82,85,67,94,82,89,86,80,83,81,74,71,73,85,76,91,85]},{"label":"日向坂46まとめ速報","data":[89,101,101,101,101,101,101,101,101,101,101,89,82,101,101,101,101,101,101,98,101,101,101,101,101,101,92,101]},{"label":"MLB NEWS@まとめ","data":[90,94,93,81,95,92,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,99]},{"label":"お料理速報","data":[91,95,98,79,93,86,84,98,96,84,101,70,76,80,81,95,101,101,95,89,75,83,79,87,93,87,70,86]},{"label":"阪神タイガースちゃんねる","data":[92,101,101,62,62,27,69,78,73,89,100,91,101,101,101,101,101,101,101,100,101,101,101,101,92,101,101,101]},{"label":"資格ちゃんねる","data":[93,97,101,101,98,83,75,70,90,96,101,81,101,84,87,76,94,87,84,91,96,88,93,90,101,90,86,91]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[94,93,91,83,87,84,93,84,84,76,84,85,89,91,89,86,87,83,76,85,90,86,90,82,83,85,90,89]},{"label":"ねこいもブログ","data":[95,101,89,101,101,87,85,85,87,86,86,101,88,82,83,92,93,92,101,99,94,89,95,101,101,97,93,88]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[96,101,101,100,101,101,101,101,101,101,101,101,101,78,92,101,101,101,101,101,101,101,101,101,101,101,101,49]},{"label":"ベイスターズ速報＠なんJ","data":[97,92,90,95,101,101,101,89,100,101,98,100,101,95,101,84,97,101,98,71,82,101,94,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[98,100,95,96,96,98,101,93,101,101,101,78,92,97,101,101,101,74,90,76,92,93,100,98,87,89,87,97]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[99,101,97,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[100,98,94,101,101,101,101,94,94,101,101,101,94,93,99,98,99,89,101,101,91,82,92,92,100,92,88,92]},{"label":"ツイッター速報","data":[101,4,12,69,101,101,61,19,32,49,31,45,101,101,101,101,84,27,47,34,34,87,53,93,56,94,23,14]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[101,61,72,84,81,78,86,83,80,101,71,71,101,101,91,81,81,77,73,78,80,73,82,80,80,78,76,83]},{"label":"ふくよかまるみのピリカラ人生","data":[101,71,73,101,94,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,83,101,101,101,101,101,101,101,101,64,73,93,101,101,99,92,101,92,94,101,99,101,101,101,83,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,85,101,101,101,101,41,101,76,97,99,101,101,40,101,101,101,101,86,101,48,79,87,101,101,101,101,50]},{"label":"鷹速@ホークスまとめブログ","data":[101,88,92,97,74,96,101,99,101,94,96,93,83,87,71,88,69,70,82,65,66,76,86,88,101,99,80,67]},{"label":"五箇野人の海外旅日記","data":[101,89,100,101,101,101,76,101,78,101,101,101,101,92,86,90,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ラーメン食べたら書くブログ","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,99,98,101,95,99,101,97,98,101,97,84,90,97,89,101,101,100,97,100,92,99,95,101,100,96,94]},{"label":"しばたまブログ","data":[101,101,101,27,35,101,101,101,101,101,85,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,91,82,101,101,101,101,101,101,101,101,89,84,91,101,101,101,101,101,101,101,101,101,91,101,101]},{"label":"闇落ち女子トーク","data":[101,101,101,93,101,93,95,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,94,97,101,101,101,101,101,97,101,99,101,101,101,101,82,89,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,99,101,101,101,101,101,100,101,101,101,101,101,101,95,101,96,101,101,101,101,101,101,96,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,56,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,77,91,101,101,101,101,101,88,101,101,101,101,101,101,93,101,101,101,101,101,101,84,100,101]},{"label":"バイク速報","data":[101,101,101,101,101,97,100,101,101,91,101,101,101,98,101,101,101,101,101,101,99,96,101,97,101,101,94,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,65,101,101,101,101,101,66,101,101,101,101,79,101,56,58,101,68,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"低空飛行キッチン（調理師免許）","data":[101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"イディルシャイア居住区","data":[101,101,101,101,101,101,101,90,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,96,101,101,101,101,101,94,101,101,96,101,99,77,95,101,89,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[101,101,101,101,101,101,101,100,101,93,101,83,96,101,93,101,101,101,88,101,101,101,97,101,101,101,101,101]},{"label":"一般社団法人 関東交通犯罪遺族の会（あいの会）","data":[101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽん子の不倫スカッと漫画","data":[101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101]},{"label":"小牧つーしん","data":[101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,101,101,99,101,99,95,99,101,101,101,100,69,93,101,97,101,86,94,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,80,86,101,98,100,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,93,98,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゲーム実況者速報＠YouTube系まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,100,98,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,96,100,94,88,97,101,88,84,77,75,72,77,101,81,84]},{"label":"マジャン ～畏村奇聞～","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,49,42,36,43,101,101,101,101,101,101,101,101,101,101,101]},{"label":"女帝 SUPER QUEEN","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,56,101,101,101,101,101,101,91,101,101,101,101,101,101]},{"label":"なんなん！ アニメ漫画ゲームまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"くま母もよう","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,59,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"人間まおと愉快な仲間たち","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,98,96,81,87,79,84,81,62,64,66,55,55]},{"label":"IEbiyori  鹿児島 整理収納アドバイザー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,101,101,101,101,101,101,101,101,101,101]},{"label":"宝塚コミパ通信","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,51,78,77,101,76]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,101,90,88,96,96,88,98,101]},{"label":"【日本の皇室】天皇皇后両陛下と皇族方","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,47,64,101,101,101,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,97,101,101,101]},{"label":"しらす大盛りブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,50,101,101,101,101,101,101,101]},{"label":"基地沢直樹-復讐・修羅場・DQN返し【2chスカッとする話まとめ】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101]},{"label":"かんにゅー -韓国の反応-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,101,93]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,97,101]},{"label":"乃木坂46まとめ 1/46","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101]},{"label":"ぁゃιぃ(*ﾟーﾟ)NEWS 2nd","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]},{"label":"おうまがタイムズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]}];
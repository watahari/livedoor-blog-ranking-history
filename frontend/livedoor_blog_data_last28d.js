var labels = ['2024-09-20','2024-09-21','2024-09-22','2024-09-23','2024-09-24','2024-09-25','2024-09-26','2024-09-27','2024-09-28','2024-09-29','2024-09-30','2024-10-01','2024-10-02','2024-10-03','2024-10-04','2024-10-05','2024-10-06','2024-10-07','2024-10-08','2024-10-09','2024-10-10','2024-10-11','2024-10-12','2024-10-13','2024-10-14','2024-10-15','2024-10-16','2024-10-17',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,3,4,1,1,1,1,2,1,1,1,1,3,3,2,2,2,3,5,1,1,1,1,4,1,1]},{"label":"ニート極道「牧村ユタカ」","data":[2,2,2,1,1,2,2,2,6,4,3,3,2,2,1,1,1,1,1,1,1,2,5,2,2,1,2,2]},{"label":"オレ的ゲーム速報＠刃","data":[3,4,3,2,2,3,3,3,2,1,2,2,3,3,2,2,3,3,3,2,2,3,2,3,3,2,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,3,4,4,3,4,4,4,3,3,4,4,4,4,6,6,5,4,4,4,3,4,3,4,4,3,4,5]},{"label":"はちま起稿","data":[5,5,5,5,5,5,5,5,4,5,6,5,5,5,4,4,4,5,5,5,4,5,4,5,5,5,5,4]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,7,8,6,6,6,6,7,6,7,7,6,7,5,5,6,6,6,6,6,6,6,6,6,8,7,7]},{"label":"暇つぶしニュース","data":[7,8,6,6,7,8,9,9,8,8,5,9,8,8,11,10,9,8,8,10,8,8,9,7,7,7,6,6]},{"label":"ハムスター速報","data":[8,7,8,7,8,7,8,7,5,7,8,6,7,6,7,8,8,7,7,7,7,7,8,8,8,6,8,8]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,9,9,9,10,9,7,8,9,9,9,8,9,9,9,9,10,10,9,8,9,10,10,9,9,9,9,9]},{"label":"ガレ速@フォロワー体験漫画","data":[10,12,12,11,13,12,11,11,25,19,17,22,10,11,8,7,7,9,10,9,12,13,22,12,12,13,17,14]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,10,10,10,11,10,10,10,10,10,10,10,11,10,12,11,11,12,13,12,11,12,12,10,11,10,12,12]},{"label":"哲学ニュースnwk","data":[12,13,13,13,9,11,12,12,11,11,11,15,13,13,13,13,14,11,12,13,13,15,13,17,18,12,11,11]},{"label":"ラビット速報","data":[13,18,17,14,15,13,13,14,14,13,12,13,17,15,16,18,16,17,19,15,16,17,15,20,19,17,20,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[14,14,18,19,18,20,21,17,22,21,14,12,16,24,22,15,26,26,24,23,23,21,24,24,22,23,23,25]},{"label":"【2ch】ニュー速クオリティ","data":[15,16,16,17,20,21,18,18,19,18,16,17,15,16,15,17,19,23,17,18,21,18,17,19,20,20,21,15]},{"label":"ねいろ速報さん","data":[16,21,20,20,14,17,19,20,21,17,18,11,20,22,17,16,15,15,14,19,20,20,20,21,14,14,14,17]},{"label":"なんJ PRIDE","data":[17,15,14,16,16,18,22,19,20,14,15,18,19,20,19,23,25,18,22,16,14,22,23,14,17,15,22,21]},{"label":"わんこーる速報！","data":[18,19,15,15,19,19,16,15,13,15,19,19,23,21,18,19,13,16,16,17,19,19,18,18,16,16,15,20]},{"label":"日刊やきう速報","data":[19,11,11,12,12,16,20,16,15,12,13,23,18,17,23,25,23,14,15,24,15,16,21,15,13,19,16,18]},{"label":"ゴールデンタイムズ","data":[20,17,24,25,17,14,17,21,16,22,29,21,26,29,25,22,28,21,26,26,27,27,26,25,23,21,26,24]},{"label":"おーるじゃんる","data":[21,20,19,18,22,15,14,25,18,16,20,20,14,14,10,14,17,22,21,14,17,23,19,28,25,24,18,23]},{"label":"稲妻速報","data":[22,26,28,27,26,28,27,28,33,32,33,34,33,33,29,31,33,34,32,33,35,38,39,33,32,34,35,36]},{"label":"ヤゴヴのマンガ劇場","data":[23,24,21,21,21,23,15,13,12,59,24,14,12,12,14,12,12,13,11,11,10,11,11,11,10,11,10,10]},{"label":"VIPPERな俺","data":[24,22,34,22,25,25,24,23,17,23,22,16,22,18,24,21,22,20,23,21,24,29,25,23,24,25,24,22]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[25,23,22,23,23,22,23,22,24,25,25,25,21,19,21,24,24,24,20,22,18,24,27,22,21,22,13,19]},{"label":"もちログ","data":[26,28,29,29,31,31,29,31,36,33,28,27,30,23,20,20,20,19,18,20,22,14,14,16,15,18,19,13]},{"label":"うしみつ-5chまとめ-","data":[27,27,23,24,24,24,25,26,26,26,23,24,24,26,26,26,27,25,25,25,25,26,29,27,28,30,27,26]},{"label":"なんJクエスト","data":[28,32,33,33,30,30,30,30,32,29,31,30,28,34,31,33,34,32,35,32,34,36,44,38,36,31,28,35]},{"label":"ネギ速","data":[29,29,25,28,27,26,26,24,23,20,27,28,27,30,30,30,30,30,30,30,30,32,31,32,29,27,25,29]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[30,31,26,26,29,32,39,43,28,24,26,26,31,31,33,34,36,35,27,27,26,25,33,43,30,29,33,38]},{"label":"カイカイ反応通信","data":[31,25,31,31,32,29,35,36,38,37,35,39,40,42,35,39,44,46,33,35,36,43,28,39,43,40,44,42]},{"label":"スズぺぺの人生何とかなってます!!","data":[32,33,32,58,33,27,28,27,29,30,58,32,32,32,28,29,55,90,29,31,32,35,34,34,61,37,29,28]},{"label":"IT速報","data":[33,35,30,35,39,35,36,35,31,27,32,33,29,27,27,35,31,31,31,34,43,37,41,35,35,36,31,31]},{"label":"世にも奇妙ななんかの話","data":[34,101,36,34,34,101,31,29,35,28,101,31,25,25,88,27,29,28,100,28,31,33,30,78,101,57,101,101]},{"label":"あんころの漫画日和","data":[35,39,57,76,48,34,42,67,55,48,71,62,56,58,52,47,62,56,43,66,56,61,101,101,101,101,101,101]},{"label":"芸能人の気になる噂","data":[36,44,37,40,43,38,38,39,37,39,39,43,37,38,37,37,42,44,40,43,49,49,48,44,41,46,42,40]},{"label":"カオスちゃんねる","data":[37,42,44,45,47,47,47,32,45,43,48,40,41,50,43,42,49,47,44,38,41,48,54,52,40,38,38,47]},{"label":"ぶる速-VIP","data":[38,40,39,42,40,36,46,40,44,36,49,47,39,40,32,41,38,42,46,42,45,44,49,42,47,45,46,41]},{"label":"くまおのマンガ堂","data":[39,47,56,52,49,45,44,41,47,47,41,38,34,41,42,38,35,45,36,41,39,39,40,37,34,44,37,39]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[40,46,42,39,41,39,40,38,34,34,37,44,45,39,36,44,43,43,39,36,38,42,42,45,42,39,36,37]},{"label":"ぱんをたずねて2000里ちょい","data":[41,49,50,68,54,41,43,45,51,44,57,41,35,61,38,45,52,63,48,39,63,41,43,46,58,48,41,58]},{"label":"オタク.com －オタコム－","data":[42,41,38,36,36,37,37,44,46,35,34,37,36,36,34,40,37,39,41,40,33,45,50,40,39,43,39,34]},{"label":"ついんてーる速報","data":[43,45,58,46,38,33,32,34,42,40,40,42,43,37,40,36,41,36,34,45,37,40,51,49,51,49,53,45]},{"label":"De速","data":[44,55,48,59,46,72,58,62,61,61,47,36,42,35,39,32,32,49,53,64,64,71,82,51,37,53,52,48]},{"label":"NEWSぽけまとめーる","data":[45,51,49,49,51,40,56,49,49,45,42,48,46,49,48,46,50,53,50,48,57,47,56,58,54,55,48,49]},{"label":"海外の万国反応記＠海外の反応","data":[46,30,40,37,35,44,50,51,50,46,46,50,47,45,47,53,51,41,45,50,58,54,53,56,50,50,43,52]},{"label":"乃木坂46まとめ 1/46","data":[47,60,35,56,37,49,54,59,40,54,51,69,54,55,58,61,39,48,37,47,55,31,45,57,49,59,57,53]},{"label":"馬鳥速報","data":[48,50,55,51,53,50,41,33,30,38,45,55,65,81,54,43,60,57,52,49,61,65,60,47,52,72,51,54]},{"label":"パチンコ・パチスロ.com","data":[49,37,45,67,75,59,64,55,54,67,21,35,52,47,51,57,78,61,54,53,60,57,52,60,45,51,54,55]},{"label":"ポリー速報","data":[50,38,41,43,42,42,52,48,39,42,44,53,44,46,61,49,46,50,51,52,48,50,46,50,46,41,45,56]},{"label":"あにこ便｜アニメ感想サイト","data":[51,57,54,44,52,51,51,50,57,51,43,52,50,54,53,51,47,40,38,46,52,52,57,48,44,47,49,50]},{"label":"チリツモブログ","data":[52,101,101,101,101,101,33,52,101,52,101,101,101,101,101,101,101,101,101,101,59,79,101,101,101,101,101,101]},{"label":"ガールズVIPまとめ","data":[53,58,51,54,57,53,55,57,63,62,59,56,61,62,56,48,63,60,47,44,53,53,59,59,56,60,58,57]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[54,56,60,60,56,57,67,64,56,60,68,70,72,66,67,64,66,65,59,63,69,64,62,64,66,64,59,65]},{"label":"なんJ（まとめては）いかんのか？","data":[55,36,27,38,45,48,61,46,41,31,30,46,49,51,44,55,40,52,60,74,65,55,68,41,26,35,50,43]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[56,43,46,50,60,52,48,37,43,41,36,49,55,43,46,54,54,51,49,51,51,58,58,55,48,52,56,44]},{"label":"ぽん子の不倫スカッと漫画","data":[57,62,65,61,64,56,65,63,68,73,69,64,67,69,68,67,69,67,86,84,101,101,101,101,101,100,91,91]},{"label":"人間まおと愉快な仲間たち","data":[58,54,52,53,59,46,45,56,52,55,54,54,51,48,45,50,48,37,28,29,29,34,36,36,38,42,40,46]},{"label":"PS5速報！","data":[59,64,62,63,71,60,53,58,60,64,56,66,63,72,66,62,68,74,66,62,71,67,67,68,68,70,70,73]},{"label":"流速VIP","data":[60,67,53,48,67,81,70,77,65,66,55,59,57,52,55,70,77,87,65,55,75,74,85,70,79,63,62,69]},{"label":"投資ちゃんねる","data":[61,65,61,47,62,67,76,68,62,56,52,51,64,57,59,73,58,59,63,65,70,68,64,63,63,62,63,63]},{"label":"軍事・ミリタリー速報☆彡","data":[62,66,66,62,70,55,66,65,67,71,72,57,60,64,63,59,64,68,64,58,72,62,70,66,70,69,66,67]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[63,63,47,32,50,54,57,42,48,50,50,58,76,60,71,60,57,55,56,54,50,59,73,79,84,81,64,62]},{"label":"まとめたニュース","data":[64,53,43,41,44,43,49,47,53,49,38,45,38,53,41,52,45,54,42,37,42,56,55,54,57,54,47,51]},{"label":"はむらの毎日マンガ","data":[65,101,69,77,101,101,60,54,90,69,77,101,101,59,81,101,53,38,88,101,47,60,101,53,55,101,101,101]},{"label":"FF14速報","data":[66,68,76,55,58,62,59,74,59,58,60,75,71,65,57,69,82,75,74,76,83,80,76,75,97,89,68,66]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[67,59,63,94,63,76,71,86,58,68,83,61,62,84,60,63,87,69,62,79,66,70,78,76,65,67,72,76]},{"label":"はーとログ","data":[68,75,67,71,72,61,80,69,70,74,80,74,68,73,80,72,65,80,70,72,79,81,63,72,71,71,78,71]},{"label":"登山ちゃんねる","data":[69,81,74,74,81,58,73,82,81,83,64,71,79,77,70,75,59,83,71,75,87,72,86,83,81,74,73,68]},{"label":"【2ch】コピペ情報局","data":[70,78,70,64,80,70,63,73,75,77,66,85,89,78,75,85,74,91,72,70,82,51,77,74,82,68,69,77]},{"label":"あいチャンネル","data":[71,34,80,30,28,79,101,101,27,79,101,29,73,28,77,28,71,29,77,101,28,73,32,82,101,33,74,27]},{"label":"鈴木さん速報","data":[72,77,77,65,68,66,75,78,71,65,53,67,59,75,74,66,73,82,73,71,67,66,69,69,69,66,65,70]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[73,76,81,93,85,94,99,88,98,101,85,90,75,82,97,86,83,73,78,85,77,100,101,101,101,85,90,100]},{"label":"2chコピペ保存道場","data":[74,70,68,57,61,65,62,60,80,70,70,68,70,76,72,56,61,71,61,61,73,69,71,71,72,61,55,72]},{"label":"マンガと私と猫ブログ。","data":[75,52,101,101,101,101,34,101,101,57,99,101,101,101,73,82,101,58,57,101,101,101,35,101,53,58,101,59]},{"label":"ライフハックちゃんねる弐式","data":[76,71,78,69,69,63,74,71,73,72,65,65,69,68,64,71,85,77,55,57,85,75,72,81,73,80,61,64]},{"label":"最強ジャンプ放送局","data":[77,80,82,81,73,82,81,81,85,90,88,73,86,91,79,76,76,84,67,82,89,86,89,89,88,79,79,82]},{"label":"デジタルニューススレッド","data":[78,73,71,75,74,69,77,70,72,76,63,77,80,71,65,68,72,70,75,77,78,78,75,67,74,77,67,75]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[79,69,73,70,93,74,86,72,76,85,61,60,48,44,69,58,56,64,58,56,68,77,61,62,62,56,75,74]},{"label":"ジャンプ速報","data":[80,98,83,85,91,101,82,97,96,101,79,92,101,98,91,101,98,95,101,101,101,101,101,101,94,93,101,101]},{"label":"まとめロッテ！","data":[81,84,101,83,83,91,101,101,101,80,74,76,58,56,76,101,101,86,76,87,86,98,96,77,67,78,86,95]},{"label":"高槻つーしん","data":[82,61,72,101,101,101,101,98,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大艦巨砲主義！","data":[83,79,79,78,86,85,79,79,64,75,78,78,87,80,78,80,86,92,81,90,74,83,83,85,85,88,88,85]},{"label":"ダイエット速報＠2ちゃんねる","data":[84,82,84,86,66,80,78,61,77,84,75,79,82,90,95,90,80,76,79,80,80,82,98,87,89,82,84,84]},{"label":"ろぼ速VIP","data":[85,85,86,82,77,75,83,84,83,88,87,81,91,83,83,74,75,78,80,73,81,91,80,84,87,86,76,81]},{"label":"つんの日常ブログ","data":[86,74,101,101,101,101,101,101,101,101,101,101,101,101,101,77,94,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[87,101,101,101,101,101,101,101,101,101,101,98,100,99,100,101,101,79,92,86,101,101,101,97,95,91,101,99]},{"label":"絵日記でございます。","data":[88,101,91,95,87,88,84,99,101,100,97,101,93,96,98,96,100,94,69,60,76,90,88,99,90,101,101,97]},{"label":"やみ速@なんJ西武まとめ","data":[89,93,101,100,78,78,93,80,93,82,94,89,81,74,82,81,95,89,89,81,99,76,81,94,76,73,83,80]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[90,83,89,88,88,92,97,90,88,89,91,91,95,95,96,93,92,93,90,96,92,101,93,88,83,84,89,96]},{"label":"YoMuRy - ヨムリー -","data":[91,101,101,101,101,64,101,87,101,101,101,101,66,101,93,101,101,101,101,59,101,87,101,101,101,101,60,101]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[92,89,75,84,90,71,85,85,86,86,76,83,77,88,84,89,88,81,85,89,96,85,84,101,93,87,80,79]},{"label":"えび通","data":[93,86,90,73,94,87,88,96,87,93,98,84,88,79,90,79,90,101,93,91,94,101,79,98,101,99,87,92]},{"label":"サカラボ | サッカーまとめ速報","data":[94,91,87,87,97,98,95,92,99,101,92,96,90,101,101,99,89,101,98,101,97,96,74,91,92,90,82,88]},{"label":"ねこいもブログ","data":[95,101,101,101,101,97,89,101,101,101,101,101,101,101,101,97,101,101,101,78,101,101,97,101,101,101,95,94]},{"label":"今日速2ch","data":[96,92,92,72,79,73,68,75,74,92,82,63,85,89,62,65,67,62,83,101,101,92,90,80,59,65,77,83]},{"label":"ニュース30over","data":[97,97,93,80,100,99,101,101,97,87,101,97,101,101,101,101,101,101,101,100,98,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[98,88,88,79,99,95,90,94,79,101,90,93,101,94,87,91,81,88,97,101,101,101,101,96,101,97,85,86]},{"label":"シカブロ","data":[99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,65,61,77,98,81,101]},{"label":"阪神タイガースちゃんねる","data":[100,101,101,97,98,100,101,101,101,101,96,101,74,70,92,101,70,72,101,101,101,101,101,101,101,101,99,61]},{"label":"MLB NEWS@まとめ","data":[101,48,59,66,55,68,72,76,66,53,62,72,78,86,89,92,79,66,84,95,91,88,92,65,75,76,92,98]},{"label":"野球お絵かき@なんJまとめ","data":[101,72,94,101,65,101,101,101,101,63,67,88,92,87,101,101,101,101,101,101,101,89,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,87,96,90,89,86,98,101,78,81,73,95,98,92,94,94,93,96,91,98,88,95,99,101,101,94,93,87]},{"label":"鷹速@ホークスまとめブログ","data":[101,90,85,101,76,77,101,95,94,91,95,101,101,101,101,101,101,98,68,88,101,101,101,93,80,83,98,90]},{"label":"すらるど - 海外の反応","data":[101,94,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,95,98,101,92,90,101,100,69,78,81,82,97,101,85,88,91,100,94,94,93,84,91,86,98,92,71,89]},{"label":"スカっとクミさん！戦う女の物語","data":[101,96,99,89,95,84,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101]},{"label":"ろくのコミックブログ","data":[101,100,95,96,101,93,92,89,91,99,101,86,94,85,99,84,99,97,87,93,90,99,87,90,91,101,100,93]},{"label":"しばたまブログ","data":[101,101,64,91,101,101,101,101,101,98,101,101,101,101,101,101,21,33,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,100,101,101,101,101,101,100,101,101,101,53,63,86,100,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,92,84,96,96,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,98,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,99,82,101,101,101,101,96,100,99,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,96,101,101,101,92,95,86,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,83,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,89,101,101,101,101,101,101,101,67,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,101,101,101,101,101,69,53,89,101,101,80,101,97,49,78,18,27,82,68,84,9,7,31,60,101,101,78]},{"label":"えみコミック！","data":[101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,84,101,101,69,54,63,94,101,101,101,101,60]},{"label":"筋肉速報","data":[101,101,101,101,101,101,100,93,95,97,84,87,101,101,101,101,97,99,101,101,95,97,101,101,101,95,96,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,66,101,101,101,101,83,101,101,101,101,101,101,83,101,101,101,101,101,101,101,101]},{"label":"Aiの日常ブログ","data":[101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ政治ネタまとめ","data":[101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"早稲田大学　辻内ゼミ / TSUJIUCHI Labo. WASEDA","data":[101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,92,96,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"獅子の泉でつかまえて","data":[101,101,101,101,101,101,101,101,101,101,101,101,99,101,50,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"嫁激（とつげき）★北フランス家族","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,96,101,100,101,101,101,101,101,94,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,67,62,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,95,101,101,93,101,101,100,101,101,101]},{"label":"交野タイムズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,100,100,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,86,96,101,101]},{"label":"だいごろうの1日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,95,101,101,101,101]},{"label":"生まれた時から反抗期","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101]},{"label":"ヤクまん！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,40,28,37,26,31,28,30,33]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44,30,47,29,27,26,32,32]},{"label":"禍々マガジン","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,46,101,101,101,101,101,101]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,16,13,64,101,101,101]},{"label":"まるごし刑事","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,38,30,33,32,34,30]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101]},{"label":"AKBフレンド","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,73,101,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,78,75,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101]}];
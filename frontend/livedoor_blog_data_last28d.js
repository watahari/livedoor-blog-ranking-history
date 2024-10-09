var labels = ['2024-09-12','2024-09-13','2024-09-14','2024-09-15','2024-09-16','2024-09-17','2024-09-18','2024-09-19','2024-09-20','2024-09-21','2024-09-22','2024-09-23','2024-09-24','2024-09-25','2024-09-26','2024-09-27','2024-09-28','2024-09-29','2024-09-30','2024-10-01','2024-10-02','2024-10-03','2024-10-04','2024-10-05','2024-10-06','2024-10-07','2024-10-08','2024-10-09',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,2,1,1,1,1,3,1,1,1,3,4,1,1,1,1,2,1,1,1,1,3,3,2,2,2,3]},{"label":"オレ的ゲーム速報＠刃","data":[2,1,1,4,3,4,2,2,3,4,3,2,2,3,3,3,2,1,2,2,3,3,2,2,3,3,3,2]},{"label":"はちま起稿","data":[3,6,4,2,4,5,4,4,5,5,5,5,5,5,5,5,4,5,6,5,5,5,4,4,4,5,5,5]},{"label":"ニート極道「牧村ユタカ」","data":[4,3,3,3,2,3,3,1,2,2,2,1,1,2,2,2,6,4,3,3,2,2,1,1,1,1,1,1]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,6,7,7,7,7,5,4,3,4,4,3,4,4,4,3,3,4,4,4,4,6,6,5,4,4,4]},{"label":"痛いニュース(ﾉ∀`)","data":[6,5,7,6,9,8,6,6,6,6,7,8,6,6,6,6,7,6,7,7,6,7,5,5,6,6,6,6]},{"label":"ハムスター速報","data":[7,7,5,5,6,10,5,9,8,7,8,7,8,7,8,7,5,7,8,6,7,6,7,8,8,7,7,7]},{"label":"ガレ速@フォロワー体験漫画","data":[8,10,10,8,8,6,9,8,10,12,12,11,13,12,11,11,25,19,17,22,10,11,8,7,7,9,10,9]},{"label":"暇つぶしニュース","data":[9,8,9,9,10,9,10,7,7,8,6,6,7,8,9,9,8,8,5,9,8,8,11,10,9,8,8,10]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,9,8,10,12,11,11,10,9,9,9,9,10,9,7,8,9,9,9,8,9,9,9,9,10,10,9,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,11,11,11,11,12,12,11,11,10,10,10,11,10,10,10,10,10,10,10,11,10,12,11,11,12,13,12]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[12,18,45,63,79,81,74,81,73,76,81,93,85,94,99,88,98,101,85,90,75,82,97,86,83,73,78,85]},{"label":"おーるじゃんる","data":[13,22,17,18,21,21,19,23,21,20,19,18,22,15,14,25,18,16,20,20,14,14,10,14,17,22,21,14]},{"label":"わんこーる速報！","data":[14,14,13,13,13,16,16,15,18,19,15,15,19,19,16,15,13,15,19,19,23,21,18,19,13,16,16,17]},{"label":"ラビット速報","data":[15,15,15,14,16,15,14,13,13,18,17,14,15,13,13,14,14,13,12,13,17,15,16,18,16,17,19,15]},{"label":"【2ch】ニュー速クオリティ","data":[16,16,14,15,15,14,13,14,15,16,16,17,20,21,18,18,19,18,16,17,15,16,15,17,19,23,17,18]},{"label":"哲学ニュースnwk","data":[17,13,12,12,5,2,8,12,12,13,13,13,9,11,12,12,11,11,11,15,13,13,13,13,14,11,12,13]},{"label":"VIPPERな俺","data":[18,19,23,22,18,23,17,19,24,22,34,22,25,25,24,23,17,23,22,16,22,18,24,21,22,20,23,21]},{"label":"日刊やきう速報","data":[19,12,16,17,14,18,20,18,19,11,11,12,12,16,20,16,15,12,13,23,18,17,23,25,23,14,15,24]},{"label":"なんJ PRIDE","data":[20,24,22,21,19,20,21,21,17,15,14,16,16,18,22,19,20,14,15,18,19,20,19,23,25,18,22,16]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[21,17,18,19,20,17,18,16,14,14,18,19,18,20,21,17,22,21,14,12,16,24,22,15,26,26,24,23]},{"label":"ねいろ速報さん","data":[22,21,19,16,17,13,15,17,16,21,20,20,14,17,19,20,21,17,18,11,20,22,17,16,15,15,14,19]},{"label":"ゴールデンタイムズ","data":[23,20,20,24,22,19,24,25,20,17,24,25,17,14,17,21,16,22,29,21,26,29,25,22,28,21,26,26]},{"label":"稲妻速報","data":[24,25,25,26,24,25,22,20,22,26,28,27,26,28,27,28,33,32,33,34,33,33,29,31,33,34,32,33]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[25,23,21,20,23,27,26,26,25,23,22,23,23,22,23,22,24,25,25,25,21,19,21,24,24,24,20,22]},{"label":"ネギ速","data":[26,30,24,23,29,29,29,28,29,29,25,28,27,26,26,24,23,20,27,28,27,30,30,30,30,30,30,30]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[27,31,28,27,25,40,44,32,30,31,26,26,29,32,39,43,28,24,26,26,31,31,33,34,36,35,27,27]},{"label":"うしみつ-5chまとめ-","data":[28,27,26,25,26,24,25,24,27,27,23,24,24,24,25,26,26,26,23,24,24,26,26,26,27,25,25,25]},{"label":"カイカイ反応通信","data":[29,33,33,36,37,36,32,35,31,25,31,31,32,29,35,36,38,37,35,39,40,42,35,39,44,46,33,35]},{"label":"スズぺぺの人生何とかなってます!!","data":[30,29,30,29,53,30,28,31,32,33,32,58,33,27,28,27,29,30,58,32,32,32,28,29,55,90,29,31]},{"label":"なんJクエスト","data":[31,34,31,30,32,31,30,30,28,32,33,33,30,30,30,30,32,29,31,30,28,34,31,33,34,32,35,32]},{"label":"ヤゴヴのマンガ劇場","data":[32,32,34,31,28,26,23,22,23,24,21,21,21,23,15,13,12,59,24,14,12,12,14,12,12,13,11,11]},{"label":"オタク.com －オタコム－","data":[33,41,41,40,36,43,36,37,42,41,38,36,36,37,37,44,46,35,34,37,36,36,34,40,37,39,41,40]},{"label":"あんころの漫画日和","data":[34,47,44,37,34,50,45,39,35,39,57,76,48,34,42,67,55,48,71,62,56,58,52,47,62,56,43,66]},{"label":"馬鳥速報","data":[35,42,29,32,42,47,35,42,48,50,55,51,53,50,41,33,30,38,45,55,65,81,54,43,60,57,52,49]},{"label":"IT速報","data":[36,40,32,33,27,28,27,34,33,35,30,35,39,35,36,35,31,27,32,33,29,27,27,35,31,31,31,34]},{"label":"FF14速報","data":[37,48,65,55,74,74,62,69,66,68,76,55,58,62,59,74,59,58,60,75,71,65,57,69,82,75,74,76]},{"label":"ついんてーる速報","data":[38,36,49,45,40,37,46,47,43,45,58,46,38,33,32,34,42,40,40,42,43,37,40,36,41,36,34,45]},{"label":"ぶる速-VIP","data":[39,37,47,48,43,34,37,36,38,40,39,42,40,36,46,40,44,36,49,47,39,40,32,41,38,42,46,42]},{"label":"芸能人の気になる噂","data":[40,39,40,39,35,35,40,40,36,44,37,40,43,38,38,39,37,39,39,43,37,38,37,37,42,44,40,43]},{"label":"もちログ","data":[41,53,52,56,49,38,34,29,26,28,29,29,31,31,29,31,36,33,28,27,30,23,20,20,20,19,18,20]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[42,46,51,46,39,42,39,44,40,46,42,39,41,39,40,38,34,34,37,44,45,39,36,44,43,43,39,36]},{"label":"カオスちゃんねる","data":[43,43,43,38,45,44,41,48,37,42,44,45,47,47,47,32,45,43,48,40,41,50,43,42,49,47,44,38]},{"label":"人間まおと愉快な仲間たち","data":[44,45,50,44,52,54,49,50,58,54,52,53,59,46,45,56,52,55,54,54,51,48,45,50,48,37,28,29]},{"label":"パチンコ・パチスロ.com","data":[45,64,64,49,44,70,63,45,49,37,45,67,75,59,64,55,54,67,21,35,52,47,51,57,78,61,54,53]},{"label":"乃木坂46まとめ 1/46","data":[46,54,61,34,38,45,31,38,47,60,35,56,37,49,54,59,40,54,51,69,54,55,58,61,39,48,37,47]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[47,52,37,43,48,51,48,41,56,43,46,50,60,52,48,37,43,41,36,49,55,43,46,54,54,51,49,51]},{"label":"NEWSぽけまとめーる","data":[48,51,48,47,41,46,42,49,45,51,49,49,51,40,56,49,49,45,42,48,46,49,48,46,50,53,50,48]},{"label":"De速","data":[49,38,56,41,61,32,43,43,44,55,48,59,46,72,58,62,61,61,47,36,42,35,39,32,32,49,53,64]},{"label":"なんJ（まとめては）いかんのか？","data":[50,59,38,35,33,33,56,46,55,36,27,38,45,48,61,46,41,31,30,46,49,51,44,55,40,52,60,74]},{"label":"PS5速報！","data":[51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あにこ便｜アニメ感想サイト","data":[52,58,60,54,46,48,50,56,51,57,54,44,52,51,51,50,57,51,43,52,50,54,53,51,47,40,38,46]},{"label":"海外の万国反応記＠海外の反応","data":[53,50,46,50,51,41,38,53,46,30,40,37,35,44,50,51,50,46,46,50,47,45,47,53,51,41,45,50]},{"label":"ポリー速報","data":[54,49,54,58,54,49,64,51,50,38,41,43,42,42,52,48,39,42,44,53,44,46,61,49,46,50,51,52]},{"label":"ぱんをたずねて2000里ちょい","data":[55,63,57,59,68,55,47,52,41,49,50,68,54,41,43,45,51,44,57,41,35,61,38,45,52,63,48,39]},{"label":"くまおのマンガ堂","data":[56,57,53,60,59,59,53,54,39,47,56,52,49,45,44,41,47,47,41,38,34,41,42,38,35,45,36,41]},{"label":"ガールズVIPまとめ","data":[57,44,58,57,50,53,58,57,53,58,51,54,57,53,55,57,63,62,59,56,61,62,56,48,63,60,47,44]},{"label":"ぽん子の不倫スカッと漫画","data":[58,56,55,61,56,66,54,60,57,62,65,61,64,56,65,63,68,73,69,64,67,69,68,67,69,67,86,84]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[59,68,42,51,55,71,60,59,63,63,47,32,50,54,57,42,48,50,50,58,76,60,71,60,57,55,56,54]},{"label":"鈴木さん速報","data":[60,71,73,65,64,64,72,73,72,77,77,65,68,66,75,78,71,65,53,67,59,75,74,66,73,82,73,71]},{"label":"たかさき通信 - 群馬県高崎市の地域情報サイト","data":[61,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめたニュース","data":[62,60,39,42,47,39,51,55,64,53,43,41,44,43,49,47,53,49,38,45,38,53,41,52,45,54,42,37]},{"label":"投資ちゃんねる","data":[63,55,63,69,71,68,61,64,61,65,61,47,62,67,76,68,62,56,52,51,64,57,59,73,58,59,63,65]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[64,67,67,66,63,56,65,71,54,56,60,60,56,57,67,64,56,60,68,70,72,66,67,64,66,65,59,63]},{"label":"今日速2ch","data":[65,74,77,75,83,77,59,63,96,92,92,72,79,73,68,75,74,92,82,63,85,89,62,65,67,62,83,101]},{"label":"2chコピペ保存道場","data":[66,61,66,67,66,61,57,70,74,70,68,57,61,65,62,60,80,70,70,68,70,76,72,56,61,71,61,61]},{"label":"チリツモブログ","data":[67,101,68,101,101,101,101,62,52,101,101,101,101,101,33,52,101,52,101,101,101,101,101,101,101,101,101,101]},{"label":"はーとログ","data":[68,77,74,80,69,63,80,67,68,75,67,71,72,61,80,69,70,74,80,74,68,73,80,72,65,80,70,72]},{"label":"流速VIP","data":[69,70,62,52,57,57,55,65,60,67,53,48,67,81,70,77,65,66,55,59,57,52,55,70,77,87,65,55]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[70,99,80,53,77,67,52,61,67,59,63,94,63,76,71,86,58,68,83,61,62,84,60,63,87,69,62,79]},{"label":"サカラボ | サッカーまとめ速報","data":[71,87,100,100,90,89,85,100,94,91,87,87,97,98,95,92,99,101,92,96,90,101,101,99,89,101,98,101]},{"label":"軍事・ミリタリー速報☆彡","data":[72,72,71,68,76,72,73,68,62,66,66,62,70,55,66,65,67,71,72,57,60,64,63,59,64,68,64,58]},{"label":"ライフハックちゃんねる弐式","data":[73,69,72,71,72,60,76,75,76,71,78,69,69,63,74,71,73,72,65,65,69,68,64,71,85,77,55,57]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[74,65,78,72,67,62,75,79,79,69,73,70,93,74,86,72,76,85,61,60,48,44,69,58,56,64,58,56]},{"label":"登山ちゃんねる","data":[75,62,70,79,65,78,78,74,69,81,74,74,81,58,73,82,81,83,64,71,79,77,70,75,59,83,71,75]},{"label":"ろぼ速VIP","data":[76,80,84,73,82,79,79,78,85,85,86,82,77,75,83,84,83,88,87,81,91,83,83,74,75,78,80,73]},{"label":"最強ジャンプ放送局","data":[77,78,86,77,87,75,81,83,77,80,82,81,73,82,81,81,85,90,88,73,86,91,79,76,76,84,67,82]},{"label":"お料理速報","data":[78,86,94,90,80,83,82,89,98,88,88,79,99,95,90,94,79,101,90,93,101,94,87,91,81,88,97,101]},{"label":"デジタルニューススレッド","data":[79,79,82,64,78,69,83,80,78,73,71,75,74,69,77,70,72,76,63,77,80,71,65,68,72,70,75,77]},{"label":"ダイエット速報＠2ちゃんねる","data":[80,89,75,87,58,73,69,90,84,82,84,86,66,80,78,61,77,84,75,79,82,90,95,90,80,76,79,80]},{"label":"サカサカ10【サッカーまとめ速報】","data":[81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[82,73,76,96,101,92,94,76,101,48,59,66,55,68,72,76,66,53,62,72,78,86,89,92,79,66,84,95]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[83,82,87,88,101,101,101,101,92,89,75,84,90,71,85,85,86,86,76,83,77,88,84,89,88,81,85,89]},{"label":"ろくのコミックブログ","data":[84,81,85,89,88,85,101,101,101,100,95,96,101,93,92,89,91,99,101,86,94,85,99,84,99,97,87,93]},{"label":"たくあんムスメたち。","data":[85,83,93,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[86,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[87,84,83,85,101,101,90,94,88,101,91,95,87,88,84,99,101,100,97,101,93,96,98,96,100,94,69,60]},{"label":"あいチャンネル","data":[88,28,27,81,30,22,71,27,71,34,80,30,28,79,101,101,27,79,101,29,73,28,77,28,71,29,77,101]},{"label":"大艦巨砲主義！","data":[89,91,89,94,85,94,86,86,83,79,79,78,86,85,79,79,64,75,78,78,87,80,78,80,86,92,81,90]},{"label":"つつみのブログ","data":[90,101,90,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[91,98,79,74,94,90,93,85,80,98,83,85,91,101,82,97,96,101,79,92,101,98,91,101,98,95,101,101]},{"label":"えみコミック！","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,84,101,101,69]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[93,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[94,94,98,70,60,80,68,72,89,93,101,100,78,78,93,80,93,82,94,89,81,74,82,81,95,89,89,81]},{"label":"稼げるまとめ速報","data":[95,90,101,95,99,86,84,88,101,95,98,101,92,90,101,100,69,78,81,82,97,101,85,88,91,100,94,94]},{"label":"【2ch】コピペ情報局","data":[96,85,81,84,70,76,77,77,70,78,70,64,80,70,63,73,75,77,66,85,89,78,75,85,74,91,72,70]},{"label":"日向坂46まとめ速報","data":[97,101,101,98,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[98,88,88,101,101,98,89,101,101,87,96,90,89,86,98,101,78,81,73,95,98,92,94,94,93,96,91,98]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[99,93,91,92,89,82,88,91,90,83,89,88,88,92,97,90,88,89,91,91,95,95,96,93,92,93,90,96]},{"label":"えび通","data":[100,101,95,78,95,99,99,101,93,86,90,73,94,87,88,96,87,93,98,84,88,79,90,79,90,101,93,91]},{"label":"ツイッター速報","data":[101,26,36,82,101,101,101,101,101,101,101,101,101,101,69,53,89,101,101,80,101,97,49,78,18,27,82,68]},{"label":"世にも奇妙ななんかの話","data":[101,35,35,28,31,101,33,33,34,101,36,34,34,101,31,29,35,28,101,31,25,25,88,27,29,28,100,28]},{"label":"PS5速報！","data":[101,66,59,62,62,65,66,66,59,64,62,63,71,60,53,58,60,64,56,66,63,72,66,62,68,74,66,62]},{"label":"★魔法のアトリエ★無料塗り絵","data":[101,75,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,92,92,101,84,95,101,101,81,84,101,83,83,91,101,101,101,80,74,76,58,56,76,101,101,86,76,87]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,95,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,67,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,96,101,97,86,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,97,101,101,101,101,101,101,101,72,94,101,65,101,101,101,101,63,67,88,92,87,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,100,101,101,101,101,101,101,101,101,101,101,101,83,91,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,101,69,101,101,101,101,101,75,52,101,101,101,101,34,101,101,57,99,101,101,101,73,82,101,58,57,101]},{"label":"筋肉速報","data":[101,101,96,99,91,84,101,101,101,101,101,101,101,101,100,93,95,97,84,87,101,101,101,101,97,99,101,101]},{"label":"高槻つーしん","data":[101,101,97,101,81,52,87,98,82,61,72,101,101,101,101,98,82,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,99,101,101,101,91,101,101,90,85,101,76,77,101,95,94,91,95,101,101,101,101,101,101,98,68,88]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,76,73,97,92,96,101,101,101,101,96,101,101,101,92,95,86,101,101,101,101,101,96,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゲーム実況者速報＠配信者まとめニュース","data":[101,101,101,93,93,87,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,92,101,101,101,101,101,101,92,84,96,96,83,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,95,101]},{"label":"たっきーママオフィシャルブログ「おしゃべりな台所」","data":[101,101,101,101,101,58,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,91,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,93,101,97,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"こおりやま通信 - 福島県郡山市の地域情報サイト","data":[101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,100,101,101,101,96,99,89,95,84,87,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,67,101,91,101,101,101,101,64,101,87,101,101,101,101,66,101,93,101,101,101,101,59]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,70,84,101,101,100,101,101,101,101,101,100,101,101,101,53,63,86,100,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,95,101,97,97,93,80,100,99,101,101,97,87,101,97,101,101,101,101,101,101,101,100]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,96,82,87,101,101,101,101,101,101,101,101,101,101,98,100,99,100,101,101,79,92,86]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,101,101,101,58,65,101,69,77,101,101,60,54,90,69,77,101,101,59,81,101,53,38,88,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,95,100,101,101,97,98,100,101,101,101,101,96,101,74,70,92,101,70,72,101,101]},{"label":"ねこいもブログ","data":[101,101,101,101,101,101,101,99,95,101,101,101,101,97,89,101,101,101,101,101,101,101,101,97,101,101,101,78]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,86,74,101,101,101,101,101,101,101,101,101,101,101,101,101,77,94,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,94,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,64,91,101,101,101,101,101,98,101,101,101,101,101,101,21,33,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,99,82,101,101,101,101,96,100,99,96,101,101,101,101,101,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,101,101,101,101,83,101,101,101,101,101,101,83]},{"label":"Aiの日常ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ政治ネタまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101]},{"label":"早稲田大学　辻内ゼミ / TSUJIUCHI Labo. WASEDA","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101]},{"label":"獅子の泉でつかまえて","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,50,101,101,101,101,101]},{"label":"嫁激（とつげき）★北フランス家族","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,96,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,67]},{"label":"交野タイムズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92]},{"label":"だいごろうの1日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97]},{"label":"生まれた時から反抗期","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]}];
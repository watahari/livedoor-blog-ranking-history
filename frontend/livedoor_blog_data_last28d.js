var labels = ['2025-03-22','2025-03-23','2025-03-24','2025-03-25','2025-03-26','2025-03-27','2025-03-28','2025-03-29','2025-03-30','2025-03-31','2025-04-01','2025-04-02','2025-04-03','2025-04-04','2025-04-05','2025-04-06','2025-04-07','2025-04-08','2025-04-09','2025-04-10','2025-04-11','2025-04-12','2025-04-13','2025-04-14','2025-04-15','2025-04-16','2025-04-17','2025-04-18',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,3,2,2,1,2,1,1,1,2,2,2,1,2,2,1,1,4,1,1,2,2,1,2,2,1,1,2]},{"label":"ハムスター速報","data":[2,4,5,4,5,3,2,6,6,5,6,6,5,5,7,9,4,3,4,5,4,1,3,5,7,5,5,8]},{"label":"まめきちまめこニートの日常","data":[3,1,1,1,2,6,3,2,4,1,1,3,3,1,1,2,3,2,2,4,1,3,4,1,1,8,4,1]},{"label":"はちま起稿","data":[4,5,4,3,4,5,4,3,5,6,4,4,2,3,3,4,5,5,3,2,3,4,5,6,4,2,3,3]},{"label":"痛いニュース(ﾉ∀`)","data":[5,7,6,5,3,4,5,5,8,9,5,7,6,8,8,6,8,7,6,6,8,6,9,9,5,6,8,5]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,8,7,6,6,7,6,4,3,4,3,5,4,4,4,5,6,6,5,3,5,7,7,7,6,7,6,7]},{"label":"暇つぶしニュース","data":[7,6,8,7,7,8,7,7,7,7,8,10,8,7,6,8,7,8,7,7,6,8,8,8,8,4,7,6]},{"label":"もちログ","data":[8,9,9,8,8,9,8,9,10,11,9,8,7,6,5,7,9,9,8,9,7,5,6,4,3,3,2,4]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[9,10,10,9,9,12,11,13,13,13,12,14,13,13,13,13,14,16,15,12,12,12,11,11,11,10,11,12]},{"label":"【2ch】ニュー速クオリティ","data":[10,12,13,13,11,10,10,11,14,12,13,13,14,12,12,14,13,13,11,11,10,9,13,13,15,13,12,13]},{"label":"なんJ PRIDE","data":[11,14,11,12,14,14,15,10,11,10,10,11,9,10,9,12,12,14,12,10,11,11,12,12,10,11,10,10]},{"label":"ヤゴヴのマンガ劇場","data":[12,11,14,10,10,11,12,8,9,8,7,9,10,9,11,11,10,11,10,13,13,19,34,27,25,18,15,11]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[13,13,12,11,13,13,13,12,12,14,11,12,11,11,10,10,11,12,9,8,9,10,10,10,9,9,9,9]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[14,16,15,15,17,18,18,17,16,18,20,19,20,19,15,16,15,17,17,16,16,16,14,16,16,20,18,17]},{"label":"ニート極道「牧村ユタカ」","data":[15,2,3,14,12,15,14,14,2,3,14,15,15,14,14,3,2,15,13,14,14,13,2,3,12,12,14,15]},{"label":"わんこーる速報！","data":[16,18,17,17,18,17,17,16,18,15,17,18,18,15,16,15,16,18,20,17,19,24,22,15,13,16,16,16]},{"label":"ラビット速報","data":[17,20,21,24,21,21,22,21,19,19,21,22,26,22,20,18,17,21,18,21,24,22,21,20,20,19,19,19]},{"label":"女帝 SUPER QUEEN","data":[18,17,16,20,20,20,21,18,17,17,15,17,17,18,19,19,21,22,23,23,21,17,19,17,17,14,17,27]},{"label":"哲学ニュースnwk","data":[19,15,18,16,16,16,16,15,15,16,16,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゴールデンタイムズ","data":[20,23,24,21,23,24,20,20,21,20,19,23,22,20,21,20,20,19,24,20,20,14,18,22,19,23,22,18]},{"label":"うしみつ-5chまとめ-","data":[21,21,19,18,19,22,19,23,22,21,22,20,23,23,23,25,24,25,25,22,22,23,25,25,22,24,26,21]},{"label":"おーるじゃんる","data":[22,25,26,26,24,27,25,22,24,24,23,24,25,21,22,22,22,20,19,24,23,20,23,21,18,22,21,20]},{"label":"VIPPERな俺","data":[23,26,27,23,15,1,9,19,23,29,25,25,19,16,18,21,26,26,21,19,17,21,16,18,24,21,23,22]},{"label":"ねいろ速報さん","data":[24,24,23,22,25,25,24,25,25,27,24,26,27,25,25,24,23,24,26,26,25,25,24,23,23,25,24,24]},{"label":"ネギ速","data":[25,22,20,19,22,23,23,27,30,26,18,21,24,24,24,23,19,23,22,18,18,18,20,19,21,17,20,23]},{"label":"カイカイ反応通信","data":[26,42,46,42,40,40,35,37,32,44,42,29,38,31,33,46,41,41,42,43,41,42,40,45,47,53,47,43]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[27,28,38,28,29,41,33,30,37,32,31,32,30,29,29,35,29,27,33,29,26,27,29,31,27,32,35,28]},{"label":"IT速報","data":[28,27,31,25,30,30,27,28,27,31,26,33,32,28,32,28,25,28,29,25,27,26,28,32,26,26,25,25]},{"label":"あいチャンネル","data":[29,45,29,66,101,32,52,39,35,72,101,101,41,78,37,74,101,44,84,82,101,92,101,91,101,101,60,65]},{"label":"稲妻速報","data":[30,30,32,31,32,31,31,38,39,38,34,38,39,37,39,39,37,37,40,31,33,35,36,38,35,37,36,33]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[31,31,25,27,28,26,26,26,26,28,29,27,31,30,27,27,35,30,27,27,28,33,26,28,29,28,28,26]},{"label":"ガレ速@フォロワー体験漫画","data":[32,34,37,35,34,37,30,33,34,35,32,34,34,32,34,36,34,35,39,34,31,28,32,33,32,29,29,42]},{"label":"なんJクエスト","data":[33,33,28,32,33,29,29,32,38,33,33,36,35,33,35,31,31,31,30,38,29,29,30,29,30,27,31,30]},{"label":"芸能人の気になる噂","data":[34,36,40,38,39,42,40,40,40,41,41,41,47,38,42,41,36,36,28,32,34,37,35,36,38,31,38,36]},{"label":"山田全自動のあるある日記","data":[35,57,101,98,80,71,97,52,97,89,99,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぶる速-VIP","data":[36,37,44,37,37,39,37,35,33,34,35,37,40,42,40,43,32,33,37,40,32,31,45,34,31,35,27,34]},{"label":"オタク.com －オタコム－","data":[37,40,34,34,36,35,34,42,43,40,40,43,44,40,43,37,42,40,44,37,36,40,38,39,36,40,32,37]},{"label":"パチンコ・パチスロ.com","data":[38,43,36,40,53,53,39,36,56,59,39,49,52,56,58,68,54,34,47,30,40,38,41,46,37,39,37,40]},{"label":"ついんてーる速報","data":[39,35,41,41,35,34,44,43,52,48,37,39,49,41,46,42,48,38,45,39,35,30,39,40,42,30,34,35]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[40,29,33,33,38,33,38,34,31,37,46,56,43,39,31,32,40,29,32,45,39,36,37,42,43,44,41,32]},{"label":"馬鳥速報","data":[41,64,82,36,26,19,28,29,36,30,30,28,28,27,28,34,44,42,35,36,30,39,44,35,28,34,30,38]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[42,41,45,44,45,43,43,46,48,45,44,42,54,50,53,53,52,47,48,44,48,47,48,44,34,36,40,39]},{"label":"うみこのおとぼけぐらし","data":[43,39,35,30,31,38,32,41,45,46,38,31,37,49,62,33,39,46,49,50,50,48,43,41,33,33,50,49]},{"label":"ぱんをたずねて2000里ちょい","data":[44,48,50,48,86,66,41,45,46,39,45,80,61,36,38,40,50,50,85,65,37,32,33,37,40,76,70,31]},{"label":"カオスちゃんねる","data":[45,46,43,46,42,47,45,48,42,43,36,51,51,47,44,47,47,45,50,46,47,44,46,48,44,42,43,41]},{"label":"高槻つーしん","data":[46,65,66,99,101,64,63,86,101,101,101,101,101,101,101,101,101,101,101,53,53,73,95,92,101,101,101,93]},{"label":"まとめたニュース","data":[47,47,47,45,48,45,46,54,55,53,52,48,45,52,50,52,43,43,41,42,46,43,42,43,41,45,48,50]},{"label":"海外の万国反応記＠海外の反応","data":[48,51,39,43,44,48,42,51,66,50,51,46,56,48,41,44,49,32,38,48,43,41,50,50,49,46,51,52]},{"label":"投資ちゃんねる","data":[49,44,51,47,54,56,60,49,51,51,55,55,57,57,55,51,51,51,52,51,49,49,55,54,57,50,44,56]},{"label":"守口・門真つーしん","data":[50,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[51,38,48,50,50,58,58,31,29,25,27,35,29,26,30,26,27,55,34,28,38,34,31,30,64,41,33,29]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[52,53,49,51,55,50,53,58,53,52,53,40,42,45,59,45,58,53,36,41,52,45,47,47,39,38,52,46]},{"label":"ガールズVIPまとめ","data":[53,54,55,49,47,52,50,57,57,56,43,44,48,55,51,48,53,52,59,55,51,52,51,49,45,47,49,53]},{"label":"NEWSぽけまとめーる","data":[54,52,56,56,52,55,61,64,62,63,62,53,58,64,60,56,59,58,63,64,58,57,56,62,53,57,54,57]},{"label":"戦国はつらいよ","data":[55,32,30,52,51,49,48,50,28,36,58,50,53,53,52,29,28,54,56,54,57,50,27,26,46,48,45,48]},{"label":"チリツモブログ","data":[56,101,101,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,58,49,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[57,76,83,101,75,75,101,101,101,101,101,101,101,99,101,101,101,98,101,98,97,100,97,93,89,100,101,84]},{"label":"はーとログ","data":[58,55,63,63,61,60,57,63,64,58,60,67,63,60,64,67,69,60,58,52,54,53,54,57,50,55,56,63]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[59,58,57,61,63,51,51,61,63,62,64,63,60,66,66,57,62,59,57,57,61,55,52,52,51,54,57,47]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[60,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぼめそのまんがブログ","data":[61,50,52,57,56,57,59,83,70,77,47,64,71,51,71,71,46,49,43,47,78,85,62,68,97,87,53,86]},{"label":"鈴木さん速報","data":[62,63,61,68,67,62,71,77,78,71,57,57,80,59,61,55,55,67,66,72,62,56,69,70,59,66,66,72]},{"label":"人間まおと愉快な仲間たち","data":[63,62,69,54,59,54,62,60,58,61,59,52,55,58,57,59,73,71,71,59,64,66,73,73,101,101,101,101]},{"label":"デジタルニューススレッド","data":[64,59,60,64,57,61,68,71,69,60,63,61,64,70,68,66,61,64,60,63,56,63,59,58,61,64,65,60]},{"label":"2chコピペ保存道場","data":[65,60,65,55,65,63,70,62,72,65,67,58,65,69,67,98,71,66,65,66,66,64,58,53,67,62,62,64]},{"label":"おる速","data":[66,101,78,81,98,79,101,75,93,98,101,82,72,87,85,73,101,96,75,67,65,76,93,72,87,58,95,85]},{"label":"稼げるまとめ速報","data":[67,93,75,75,64,73,83,93,101,76,69,83,73,71,72,85,82,80,74,68,59,83,76,89,75,78,79,88]},{"label":"流速VIP","data":[68,66,42,29,43,44,49,53,49,55,74,74,46,46,47,50,60,56,54,61,60,54,53,64,54,63,69,54]},{"label":"軍事・ミリタリー速報☆彡","data":[69,56,74,80,69,72,64,78,85,70,72,65,67,74,81,62,68,68,64,75,76,69,67,74,55,56,68,67]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[70,94,88,62,68,91,56,66,81,78,91,69,77,63,56,58,101,101,99,69,98,71,81,56,58,101,91,66]},{"label":"えみコミック！","data":[71,71,70,72,71,69,67,76,65,54,65,73,70,61,65,60,79,81,61,60,63,46,74,55,66,70,55,55]},{"label":"日向坂46まとめもり～","data":[72,99,101,101,101,92,101,101,101,101,101,98,101,101,101,75,33,72,82,97,101,99,90,101,99,101,101,99]},{"label":"登山ちゃんねる","data":[73,68,59,69,73,68,66,69,67,67,73,81,84,77,70,69,77,77,73,86,82,75,65,65,70,75,67,70]},{"label":"De速","data":[74,67,58,53,58,65,65,47,44,47,48,45,36,43,36,49,57,69,67,33,44,61,57,51,60,51,46,51]},{"label":"ろぼ速VIP","data":[75,69,67,78,70,78,75,80,83,68,71,71,75,79,77,81,72,79,76,70,73,72,60,63,65,72,77,69]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[76,81,81,94,82,100,100,79,101,101,101,101,100,81,84,101,74,93,101,91,92,81,88,83,82,90,87,83]},{"label":"今日速2ch","data":[77,85,64,70,101,88,86,85,59,57,61,90,81,83,89,101,83,87,95,101,74,60,71,85,83,69,63,73]},{"label":"サカサカ10【サッカーまとめ速報】","data":[78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"へー子のウラ漫画日和","data":[79,77,87,84,94,96,95,101,101,75,80,79,79,86,78,89,84,90,93,87,93,91,89,96,86,85,84,101]},{"label":"PS5速報！","data":[80,75,76,82,79,67,77,70,80,83,93,75,74,76,79,86,80,85,81,80,81,80,80,86,80,84,76,81]},{"label":"【2ch】コピペ情報局","data":[81,70,80,97,74,85,73,67,60,73,92,77,76,92,82,61,75,73,78,101,91,62,78,76,81,68,92,82]},{"label":"絵日記でございます。","data":[82,95,101,67,62,46,36,24,41,84,77,30,33,35,49,30,30,39,46,35,42,51,64,59,52,60,61,59]},{"label":"資格ちゃんねる","data":[83,72,77,96,89,76,79,101,101,92,70,70,85,91,76,63,70,74,72,76,75,96,72,61,56,52,71,87]},{"label":"櫻坂46まとめもり～","data":[84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ポリー速報","data":[85,73,68,59,60,59,69,55,47,42,54,66,68,54,54,78,63,70,69,62,69,67,79,101,69,79,80,62]},{"label":"ジャンプ速報","data":[86,101,101,101,101,101,101,101,101,101,101,101,91,88,63,101,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[87,84,101,85,83,86,72,68,71,101,68,60,62,68,97,70,101,82,68,73,71,68,68,101,62,59,58,58]},{"label":"かぞくちゃんねる","data":[88,91,86,87,93,87,93,87,101,93,97,78,87,89,87,96,95,89,90,89,88,89,96,90,100,91,83,78]},{"label":"えび通","data":[89,92,92,73,78,83,88,97,101,90,86,92,89,84,83,95,91,76,88,90,79,90,94,84,85,99,90,91]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[90,89,73,88,91,89,87,99,99,86,101,96,93,98,93,94,100,92,83,95,101,93,85,88,88,81,101,89]},{"label":"FF14速報","data":[91,78,101,60,46,36,47,44,50,49,50,54,50,44,48,54,56,57,51,56,68,65,75,67,63,65,59,61]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[92,83,72,83,96,93,82,88,95,87,87,86,90,93,100,91,87,91,87,84,85,86,86,80,78,77,72,76]},{"label":"あにこ便｜アニメ感想サイト","data":[93,87,79,86,95,99,89,98,90,80,90,93,97,97,99,92,76,78,79,74,83,87,77,69,72,82,75,79]},{"label":"大艦巨砲主義！","data":[94,90,93,91,77,84,94,96,96,79,76,87,99,85,75,80,78,63,70,81,84,78,82,87,73,73,73,80]},{"label":"やみ速@なんJ西武まとめ","data":[95,82,84,92,76,70,78,56,54,66,95,89,96,72,74,65,94,101,101,77,77,79,61,66,77,74,74,71]},{"label":"最強ジャンプ放送局","data":[96,86,90,77,87,95,91,94,98,88,78,88,78,80,86,88,88,75,86,88,80,88,87,81,79,94,94,77]},{"label":"ダイエット速報＠2ちゃんねる","data":[97,74,85,71,72,82,90,72,68,85,81,62,88,82,91,87,64,88,92,94,90,77,84,78,76,80,78,75]},{"label":"だいごろうの1日","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"てにくまちゃん。のもっと不思議で怖い話","data":[99,80,62,74,101,101,101,101,79,100,84,91,101,90,96,82,96,95,101,101,101,101,101,100,96,101,101,96]},{"label":"S-MAX","data":[100,101,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,19,22,39,101,101,101,101,20,23,56,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"harumama日記","data":[101,49,101,101,101,101,101,90,101,101,101,101,101,94,101,101,101,101,101,101,72,101,101,101,101,101,101,101]},{"label":"はむらの毎日マンガ","data":[101,61,54,100,101,101,101,101,101,101,101,101,101,101,101,101,101,83,55,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,79,101,101,101,101,101,82,101,81,101,101,101,101,101,76,85,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,96,91,95,100,74,99,92,88,74,82,85,82,73,90,84,81,65,53,83,100,74,83,60,48,61,64,45]},{"label":"ダンナ様は安月給","data":[101,97,101,101,66,101,101,101,101,101,101,101,101,101,101,83,101,101,77,101,101,101,101,75,101,101,82,101]},{"label":"まとめロッテ！","data":[101,100,96,76,97,101,101,101,101,101,79,76,98,101,101,100,90,101,100,101,99,101,101,101,84,83,88,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,71,101,101,101,101,74,84,101,101,101,92,101,101,101,101,101,96,101,101,101,101,99,101,101,101,101]},{"label":"ニュース30over","data":[101,101,89,93,88,101,80,73,91,101,101,101,101,101,80,90,97,101,97,101,86,82,70,101,68,98,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,101,94,101,101,101,101,101,76,64,100,95,101,101,94,79,101,101,101,101,101,101,100,101,101,43,101,101]},{"label":"筋肉速報","data":[101,101,95,79,101,97,96,101,101,69,101,101,101,101,101,101,86,101,101,101,101,101,101,98,101,101,101,101]},{"label":"【Blog by  : TANE@tane_haruyo】　　　　　　　Japanese Royal Family","data":[101,101,97,101,101,101,101,101,101,99,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,98,101,101,98,101,101,101,101,89,100,101,101,101,101,101,101,101,101,101,101,99,101,90,95,101,101]},{"label":"イミフｗｗｗ","data":[101,101,99,101,92,90,101,95,89,101,101,101,101,101,101,101,101,84,94,92,101,101,92,82,101,89,86,95]},{"label":"ぐら速  -声優まとめ速報-","data":[101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,58,101,101,101,65,101,101,75,101,83,101,101,101,65,101,101,71,101,101,66,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,101,101,89,101,101,84,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツイッター速報","data":[101,101,101,90,49,101,101,101,101,101,49,1,12,34,45,93,38,1,16,49,45,70,17,24,94,101,96,97]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,27,101,98,101,101,101,101,101,21,65,92,101,101,101,101,101,101,101,101,101,101,101,42,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,41,28,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Aやんのええやん！ブログ","data":[101,101,101,101,81,81,54,59,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,84,101,101,101,74,96,94,101,101,101,101,101,99,101,101,101,95,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[101,101,101,101,85,77,101,89,101,101,101,99,101,101,101,101,89,97,101,101,101,101,101,79,98,96,89,92]},{"label":"ながおか速報 -新潟県長岡市の地域情報サイト","data":[101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,99,80,76,84,101,101,85,72,66,67,73,101,101,61,80,79,70,84,101,101,101,101,101,101]},{"label":"ぁゃιぃ(*ﾟーﾟ)NEWS 2nd","data":[101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Eorzean","data":[101,101,101,101,101,101,55,91,87,94,101,84,86,101,101,101,101,101,91,101,101,101,101,101,101,88,101,101]},{"label":"模型のアサヒヤ","data":[101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,101,85,101,101,101,101,47,101,101,101,101,101,101,101,101,89,101,101,101,101,49,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,92,101,100,101,98,101,101,101,101,101,101,100,101,93,101,94,101,101,93,101,98,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,81,86,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,100,82,82,96,97,95,96,88,77,92,101,101,100,101,101,91,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,92,91,88,68,69,62,26,38,45,48,31,58,96,98,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,94,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニマムな暮らし 1LDK","data":[101,101,101,101,101,101,101,101,101,22,28,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,66,94,101,101,101,101,101,101,101,85,101,101,101,101,101,101,39,101]},{"label":"哲学ニュースnwk","data":[101,101,101,101,101,101,101,101,101,101,101,16,16,17,17,17,18,10,14,15,15,15,15,14,14,15,13,14]},{"label":"ライフハックちゃんねる弐式","data":[101,101,101,101,101,101,101,101,101,101,101,59,59,75,69,64,67,62,62,78,67,59,63,71,74,71,81,68]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,97,91,101,101,101]},{"label":"あなたは『おもしろマガジン』","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,72,98,101,101,101,101,101,101,101,101,101,101,74]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,66,86,101,101,101,101,101,101,95,101,101,94]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101]},{"label":"まえだ永吉の永遠に吉がいい","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"アニメ＆漫画 グッズ情報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,95,98,101,101,101,93,101]},{"label":"ディスクユニオン浦和店のストアブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,101,101,101,101,101,101,101]},{"label":"沼津つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,97,101,101,101,67,101,101]},{"label":"交野タイムズ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,77,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101]},{"label":"℃-ute派なんday","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,71,101,101,101]},{"label":"かんにゅー -韓国の反応-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101]},{"label":"ゲーム実況者速報＠YouTube系まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,85,90]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,99,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,98]},{"label":"ママになったヲタクの日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,100]},{"label":"日刊やきう速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44]}];
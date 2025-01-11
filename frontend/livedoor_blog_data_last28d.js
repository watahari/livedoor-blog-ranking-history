var labels = ['2024-12-15','2024-12-16','2024-12-17','2024-12-18','2024-12-19','2024-12-20','2024-12-21','2024-12-22','2024-12-23','2024-12-24','2024-12-25','2024-12-26','2024-12-27','2024-12-28','2024-12-29','2024-12-30','2024-12-31','2025-01-01','2025-01-02','2025-01-03','2025-01-04','2025-01-05','2025-01-06','2025-01-07','2025-01-08','2025-01-09','2025-01-10','2025-01-11',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,5,2,3,1,1,1,1,4,1,1,1,4,1,1,1,12,6,1,1,1,1,2,2,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,1,1,1,3,2,2,3,1,2,2,2,2,3,3,2,1,2,2,2,2,2,1,1,2,2,2]},{"label":"ニート極道「牧村ユタカ」","data":[3,3,8,10,2,4,3,3,2,2,3,5,3,10,10,11,11,13,13,11,12,11,12,12,10,10,11,10]},{"label":"はちま起稿","data":[4,5,4,6,5,5,7,6,6,5,5,4,5,5,5,5,4,5,5,4,3,3,4,3,4,4,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,2,4,4,6,5,4,4,3,4,3,4,3,4,4,5,3,3,5,4,4,3,4,3,3,4,4]},{"label":"ハムスター速報","data":[6,6,6,7,6,2,4,7,7,6,6,6,6,1,2,2,3,4,7,7,7,6,6,8,5,5,5,5]},{"label":"痛いニュース(ﾉ∀`)","data":[7,7,7,5,7,7,6,8,8,7,7,7,7,6,6,7,7,6,10,8,5,5,5,5,6,6,6,6]},{"label":"暇つぶしニュース","data":[8,9,9,8,9,8,9,5,5,9,10,8,10,8,7,6,6,2,4,6,6,7,7,7,8,7,7,7]},{"label":"ヤゴヴのマンガ劇場","data":[9,10,11,11,11,10,10,10,10,10,9,10,8,9,9,9,8,7,11,18,34,22,14,14,13,17,10,11]},{"label":"哲学ニュースnwk","data":[10,12,3,3,8,13,12,13,14,13,13,13,13,14,13,13,13,10,8,12,13,12,11,9,11,12,13,12]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,8,10,9,10,9,8,9,9,8,8,9,9,7,8,8,10,9,9,9,9,8,8,6,7,8,8,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[12,11,12,13,12,11,11,11,11,11,11,11,11,11,11,12,12,11,12,10,10,10,9,11,9,9,9,9]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[13,13,13,17,16,14,14,21,12,18,14,15,20,18,15,14,14,15,16,14,11,9,10,10,12,11,15,13]},{"label":"わんこーる速報！","data":[14,14,14,18,13,15,16,16,15,15,16,21,17,15,14,16,15,14,14,13,15,13,13,13,14,14,14,14]},{"label":"ねいろ速報さん","data":[15,16,20,23,20,22,22,18,17,17,17,20,18,20,19,18,20,21,22,21,23,15,20,19,20,20,19,21]},{"label":"もちログ","data":[16,17,15,16,15,12,13,12,13,12,12,12,12,12,12,10,9,8,50,34,26,26,27,28,26,26,25,23]},{"label":"なんJ PRIDE","data":[17,15,16,20,21,21,18,19,20,23,18,18,16,13,16,17,18,23,25,23,21,18,16,17,17,15,18,17]},{"label":"ラビット速報","data":[18,19,25,22,18,18,23,20,19,21,21,16,19,16,17,15,16,16,18,17,17,17,15,21,18,18,16,19]},{"label":"【2ch】ニュー速クオリティ","data":[19,20,17,21,17,17,15,15,18,14,15,17,14,17,18,20,24,18,19,16,19,14,19,15,15,16,17,15]},{"label":"VIPPERな俺","data":[20,23,19,25,24,25,17,17,21,19,22,19,22,26,26,27,25,19,21,24,14,20,18,16,27,13,12,18]},{"label":"ガレ速@フォロワー体験漫画","data":[21,18,21,19,19,20,21,14,16,20,26,27,26,37,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おーるじゃんる","data":[22,22,18,12,14,16,19,23,25,24,24,26,21,22,22,19,19,20,24,20,22,16,17,18,21,19,20,16]},{"label":"ゴールデンタイムズ","data":[23,21,24,26,25,27,20,22,24,26,27,23,23,21,23,24,17,22,20,19,18,21,21,22,24,22,21,20]},{"label":"日刊やきう速報","data":[24,25,22,24,22,23,24,24,26,16,19,14,15,19,21,21,22,24,15,15,16,23,23,20,23,24,23,25]},{"label":"うしみつ-5chまとめ-","data":[25,24,27,28,28,28,29,27,22,25,25,24,25,25,24,22,23,25,23,22,25,24,22,24,22,21,22,22]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[26,28,26,29,27,26,25,26,23,22,23,22,24,23,20,23,21,17,17,25,24,25,28,23,25,25,27,29]},{"label":"なんJクエスト","data":[27,27,28,31,31,32,31,31,28,29,28,32,29,27,32,30,30,27,26,31,27,31,25,27,28,27,28,28]},{"label":"IT速報","data":[28,30,31,33,30,29,30,28,30,28,30,34,30,29,29,28,27,32,29,29,31,27,26,31,31,29,26,27]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[29,32,46,47,52,53,46,37,48,33,40,47,55,55,49,51,54,63,81,90,77,52,47,69,50,53,42,43]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[30,26,30,27,23,24,26,25,27,30,29,31,27,24,25,26,26,26,27,28,20,19,24,26,19,23,24,24]},{"label":"マンガと私と猫ブログ。","data":[31,98,101,101,101,31,37,101,101,101,101,101,101,101,101,25,44,101,101,36,30,101,101,25,42,101,101,101]},{"label":"えみコミック！","data":[32,29,34,15,26,30,27,29,29,27,20,30,36,77,34,39,64,97,101,35,101,58,40,51,37,33,40,36]},{"label":"稲妻速報","data":[33,33,32,34,32,34,34,33,32,31,31,35,31,32,33,29,28,28,31,30,29,32,29,33,32,31,29,26]},{"label":"流速VIP","data":[34,36,49,45,55,52,58,41,36,37,32,28,39,38,48,48,47,42,48,39,41,40,35,37,36,55,47,53]},{"label":"オタク.com －オタコム－","data":[35,34,37,44,51,45,40,44,45,47,45,49,42,42,44,40,35,33,38,43,43,38,34,40,43,39,35,34]},{"label":"ネギ速","data":[36,35,33,35,47,41,45,34,33,39,37,42,28,30,28,32,33,36,28,26,28,29,30,30,29,37,36,35]},{"label":"芸能人の気になる噂","data":[37,38,36,37,39,40,35,36,37,35,35,40,32,31,35,33,31,30,33,33,37,33,33,36,35,38,32,33]},{"label":"ついんてーる速報","data":[38,31,38,43,33,33,38,32,31,34,36,43,34,28,30,38,32,29,30,32,40,36,32,35,33,32,34,30]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[39,37,40,38,41,46,44,39,41,43,41,50,43,40,36,42,37,43,42,40,50,45,43,42,47,46,41,46]},{"label":"ぱんをたずねて2000里ちょい","data":[40,61,57,32,43,56,33,30,42,58,34,46,56,34,31,54,101,34,45,59,38,28,50,70,34,44,64,41]},{"label":"カオスちゃんねる","data":[41,39,42,40,37,37,41,35,38,38,39,38,35,35,39,41,40,37,35,38,39,35,37,43,45,42,30,39]},{"label":"ぶる速-VIP","data":[42,42,45,39,40,36,36,38,43,45,38,45,38,36,37,36,34,31,34,37,33,30,31,32,30,34,33,31]},{"label":"まとめたニュース","data":[43,41,52,41,42,38,51,52,44,50,55,59,48,41,40,34,36,38,41,41,35,34,46,52,39,47,50,44]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[44,56,44,64,46,48,52,56,46,55,52,52,50,51,41,47,45,47,37,48,44,43,45,58,58,36,39,42]},{"label":"ポリー速報","data":[45,49,35,36,38,47,42,48,52,44,44,36,46,39,47,43,43,45,36,47,47,48,42,54,48,41,53,51]},{"label":"パチンコ・パチスロ.com","data":[46,40,41,46,34,35,48,46,35,36,51,60,49,64,60,57,29,39,39,27,32,42,38,46,51,35,51,48]},{"label":"ガールズVIPまとめ","data":[47,45,48,48,45,43,50,47,50,52,50,53,44,44,42,49,41,49,47,44,46,44,36,41,44,48,48,49]},{"label":"海外の万国反応記＠海外の反応","data":[48,47,54,57,48,39,39,43,51,46,47,54,53,54,46,53,48,51,57,46,51,39,48,53,49,49,45,45]},{"label":"カイカイ反応通信","data":[49,46,51,52,49,44,43,45,53,51,43,48,37,43,52,52,51,72,76,73,69,73,73,48,38,45,37,40]},{"label":"NEWSぽけまとめーる","data":[50,43,43,42,50,42,49,50,47,42,42,51,45,47,51,45,39,41,40,42,42,41,39,44,46,50,38,50]},{"label":"馬鳥速報","data":[51,48,39,30,36,50,61,49,54,41,33,33,41,49,45,46,49,46,43,53,52,49,52,47,53,51,46,52]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[52,65,60,69,61,68,72,59,61,79,82,65,52,68,78,79,93,78,82,49,86,81,77,62,75,72,87,69]},{"label":"鈴木さん速報","data":[53,52,53,53,56,58,62,57,57,68,63,73,66,53,53,65,63,56,54,51,54,65,59,72,67,71,60,65]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[54,44,95,100,35,88,101,101,92,101,101,101,101,101,101,99,96,54,101,101,101,100,97,101,98,92,100,101]},{"label":"あにこ便｜アニメ感想サイト","data":[55,53,68,74,76,80,75,60,58,66,68,79,86,78,70,72,74,82,79,80,75,79,68,80,78,80,81,71]},{"label":"ツイッター速報","data":[56,94,23,14,58,19,28,40,101,101,101,101,101,101,38,31,46,48,1,3,8,63,101,29,16,73,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[57,62,61,61,59,54,55,42,34,49,54,57,57,59,58,58,52,59,56,52,53,50,57,61,57,54,52,54]},{"label":"2chコピペ保存道場","data":[58,50,56,60,71,61,67,64,64,60,61,56,59,62,54,59,59,55,53,62,48,53,41,49,56,58,68,64]},{"label":"軍事・ミリタリー速報☆彡","data":[59,57,62,68,67,65,64,66,62,63,64,68,72,71,61,69,61,66,59,66,56,61,61,64,66,67,72,72]},{"label":"なんJ（まとめては）いかんのか？","data":[60,51,47,51,69,55,54,61,77,53,53,25,51,57,73,63,53,53,55,57,62,66,53,50,54,85,55,101]},{"label":"今日速2ch","data":[61,55,66,65,63,71,77,76,89,82,78,78,76,61,57,50,38,52,52,50,71,72,56,59,52,62,74,74]},{"label":"はーとログ","data":[62,59,59,63,65,59,65,65,66,67,62,62,65,52,63,60,55,62,60,60,61,67,67,71,73,79,69,57]},{"label":"ろぼ速VIP","data":[63,60,78,82,82,69,80,74,55,65,70,74,81,70,64,67,72,80,64,71,66,60,69,77,65,75,80,78]},{"label":"人間まおと愉快な仲間たち","data":[64,66,55,55,57,60,60,54,39,40,46,55,47,45,43,44,42,44,46,45,45,46,44,45,41,40,43,37]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[65,70,83,62,60,86,57,51,72,54,56,63,62,56,75,56,69,70,86,101,89,54,58,78,64,60,77,77]},{"label":"ライフハックちゃんねる弐式","data":[66,58,69,58,72,64,63,58,68,56,60,61,64,73,68,76,50,69,71,56,57,56,65,73,61,61,56,61]},{"label":"デジタルニューススレッド","data":[67,64,74,71,66,66,70,62,60,59,72,64,67,58,59,61,56,61,51,58,49,57,64,55,70,74,66,70]},{"label":"投資ちゃんねる","data":[68,63,75,70,64,67,83,68,69,61,66,77,75,76,66,64,68,64,68,61,67,70,54,60,62,70,63,66]},{"label":"PS5速報！","data":[69,73,73,72,77,75,68,70,70,71,74,75,74,74,82,86,73,84,89,99,94,84,86,76,84,78,73,75]},{"label":"【2ch】コピペ情報局","data":[70,69,63,75,68,77,69,73,63,57,65,66,60,66,62,75,79,67,73,89,68,64,70,38,76,66,65,67]},{"label":"FF14速報","data":[71,71,72,66,44,63,78,79,79,48,57,58,54,60,74,62,57,71,63,64,55,69,74,68,72,69,78,73]},{"label":"De速","data":[72,54,50,59,83,73,47,69,76,32,49,70,83,89,69,70,66,60,58,68,72,82,93,88,81,65,49,47]},{"label":"模型のアサヒヤ","data":[73,101,101,93,101,101,101,101,101,101,69,101,101,101,98,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"登山ちゃんねる","data":[74,68,64,73,74,79,71,63,59,69,75,71,80,65,55,55,60,65,67,65,58,59,49,57,59,68,71,55]},{"label":"あいチャンネル","data":[75,101,29,56,29,57,32,55,101,101,101,37,70,33,65,35,70,40,69,101,101,37,75,39,60,30,58,32]},{"label":"ダイエット速報＠2ちゃんねる","data":[76,72,65,78,75,83,82,71,71,64,83,72,69,67,67,68,75,77,77,69,73,75,66,63,69,76,59,68]},{"label":"スズぺぺの人生何とかなってます!!","data":[77,101,81,84,84,82,73,72,101,70,73,76,63,63,83,95,62,68,101,101,101,68,60,65,63,59,61,58]},{"label":"大和とぴっく-やまとぴ","data":[78,77,101,76,90,101,101,80,90,101,101,101,101,101,101,101,84,35,44,101,101,101,55,101,92,101,101,96]},{"label":"稼げるまとめ速報","data":[79,74,77,80,78,78,95,94,84,87,77,86,79,80,94,77,83,76,66,92,63,78,79,66,68,87,67,62]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[80,78,76,83,80,95,90,101,101,101,101,101,101,101,79,78,58,75,70,67,64,74,72,79,79,64,75,80]},{"label":"世にも奇妙ななんかの話","data":[81,75,58,101,70,62,53,53,49,101,59,44,40,48,76,101,101,101,101,101,101,101,101,101,101,99,101,99]},{"label":"やみ速@なんJ西武まとめ","data":[82,67,71,87,85,94,98,85,101,98,88,39,58,79,92,91,86,101,101,94,80,90,100,95,85,84,86,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[83,85,90,89,93,90,92,93,81,83,81,88,92,91,85,83,77,87,78,77,84,87,84,93,86,89,88,88]},{"label":"絵日記でございます。","data":[84,80,79,81,86,89,94,90,82,72,80,90,94,94,101,101,82,101,101,101,99,93,62,67,74,63,54,56]},{"label":"えび通","data":[85,76,91,85,89,91,88,87,86,81,71,82,82,93,91,84,71,83,72,84,76,83,80,75,83,88,82,89]},{"label":"大艦巨砲主義！","data":[86,79,85,79,79,84,93,88,83,77,79,85,87,83,81,88,81,79,85,75,74,86,83,85,89,91,85,86]},{"label":"竜速（りゅうそく）","data":[87,89,87,97,101,101,101,101,97,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"たくあんムスメたち。","data":[88,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 1/46","data":[89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぁゃιぃ(*ﾟーﾟ)NEWS 2nd","data":[90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[91,82,84,90,88,81,89,91,85,73,84,80,85,82,84,92,76,85,84,79,85,77,81,83,88,83,79,85]},{"label":"阪神タイガースちゃんねる","data":[92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[93,87,70,86,95,85,85,81,75,80,87,97,78,84,87,96,80,88,83,83,81,76,63,96,80,82,90,81]},{"label":"ニュース30over","data":[94,101,101,101,100,97,87,97,100,101,101,83,91,100,101,101,101,91,62,81,82,89,89,92,82,95,93,91]},{"label":"おとの漫画","data":[95,101,67,54,54,51,56,75,101,62,48,69,61,50,71,101,101,101,101,101,101,101,101,84,40,43,44,38]},{"label":"筋肉速報","data":[96,88,98,101,101,101,101,84,91,101,101,101,101,101,101,101,101,101,100,97,92,95,95,101,100,101,96,101]},{"label":"ベイスターズNEWS","data":[97,101,101,101,91,49,66,101,101,101,101,87,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ゲーム実況者速報＠YouTube系まとめ","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[99,95,89,101,81,70,79,67,88,93,97,84,101,101,97,101,91,95,101,72,88,101,101,100,90,101,83,83]},{"label":"キチガイママまとめ保管庫","data":[100,92,88,92,101,101,100,101,98,99,91,92,90,92,101,101,101,101,101,101,101,101,101,101,99,100,94,94]},{"label":"サカラボ | サッカーまとめ速報","data":[101,81,101,101,101,93,101,101,95,94,99,95,100,81,101,90,85,90,74,91,95,97,92,98,96,97,92,93]},{"label":"ジャンプ速報","data":[101,83,101,101,94,101,101,100,80,97,101,98,96,101,101,85,95,94,91,101,101,92,96,101,101,101,101,100]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,84,100,101,99,92,86,82,65,92,101,101,101,101,95,97,101,101,101,101,101,101,98,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,86,82,77,92,101,84,83,56,86,95,101,84,90,96,101,101,101,101,101,100,101,85,81,77,57,57,59]},{"label":"資格ちゃんねる","data":[101,90,86,91,62,74,76,95,67,78,90,94,88,87,86,101,88,81,61,74,78,62,71,82,87,77,76,79]},{"label":"櫻坂46まとめもり～","data":[101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"MLB NEWS@まとめ","data":[101,93,101,99,101,101,101,101,93,101,98,67,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,96,101,101,101,101,101,89,99,101,101,101,101,101,101,80,99,101,101,101,97,99,101,101,101,101,101,97]},{"label":"ねこいもブログ","data":[101,97,93,88,87,101,99,99,101,91,76,101,95,72,72,73,65,73,95,88,70,98,90,86,101,96,84,92]},{"label":"鷹速@ホークスまとめブログ","data":[101,99,80,67,98,99,96,98,78,75,67,81,101,96,93,94,101,101,90,87,90,101,82,101,101,90,101,101]},{"label":"かぞくちゃんねる","data":[101,100,96,94,96,101,101,101,101,84,86,101,97,101,101,98,97,93,92,86,87,85,88,101,101,101,101,98]},{"label":"日向坂46まとめ速報","data":[101,101,92,101,101,101,101,101,101,90,101,101,77,86,89,89,101,101,101,101,101,101,101,87,93,94,101,101]},{"label":"バイク速報","data":[101,101,94,101,97,96,101,101,101,89,92,100,101,99,101,100,101,101,101,95,96,101,87,89,101,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,99,101,101,101,101,101,101,100,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,49,53,72,81,77,74,85,93,96,98,85,80,87,90,89,32,54,59,55,78,97,71,56,70,87]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,50,73,87,101,101,101,101,58,101,89,101,101,101,101,57,101,98,101,101,101,101,55,101,97,101]},{"label":"おうまがタイムズ","data":[101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,95,95]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,76,101,101,101,76,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,98,101,101,101,96,85,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"芸能ジャーナリスト・芋澤貞雄の「本日モ反省ノ色ナシ」","data":[101,101,101,101,101,101,59,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,101,101,74,101,101,101,101,101,68,101,101,66,101,101,101,101,101,101,101,56,101,52,101,63]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,91,86,96,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,97,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"Jamのおうち　＊ごはんと器とインテリア＊","data":[101,101,101,101,101,101,101,92,40,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,101,101,96,73,88,94,93,101,97,88,93,87,74,80,85,79,88,94,99,94,98,101,90]},{"label":"くまちゃん日記 : 映画とグルメとラグビーと","data":[101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"邪推師GANMAのフレキシブル馬券法〜重賞で勝てる無料競馬予想ブログ〜","data":[101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,101,29,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"イディルシャイア居住区","data":[101,101,101,101,101,101,101,101,101,101,101,41,33,46,56,74,89,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,89,71,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,101,101,101,101,101,101,91,101,101,50,101,101,101,101,82,101,101,101,101,101,86,91,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"獅子の泉でつかまえて","data":[101,101,101,101,101,101,101,101,101,101,101,101,73,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,75,77,81,67,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,27,37,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ハイブリッド競馬新聞","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,71,78,58,49,55,83,101,101,101,91,28,31,60]},{"label":"カナダと鬱と私 -バンクーバーでマイペース生活-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,63,101,101,101,94,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,94,92,96,100,91,94,91,101,101,81,101,101]},{"label":"かんにゅー -韓国の反応-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,99,98,96,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,50,75,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,97,101,60,51,76,101,101,93,62,76]},{"label":"すらるど - 海外の反応","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101]},{"label":"ぐら速  -声優まとめ速報-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,88,101,101,96,101,101,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101]},{"label":"great G-SHOCK world","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101,101,101,101,101,97,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,78,101,101,101,101,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,70,101,101,101,91,101,101,101,101]},{"label":"PCパーツまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101]},{"label":"２りんかんブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,76,36,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,93,91,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,71,101,101,101,101,101,101]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101]},{"label":"S-MAX","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,51,74,101,101,101,101]},{"label":"ローカル路線バス乗り継ぎの旅が好き","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101]},{"label":"国際ニュース用語まとめ - 白狐","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,34,101,101,101,101]},{"label":"しらす大盛りブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101]},{"label":"黒いウワサ5ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,84]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101]}];
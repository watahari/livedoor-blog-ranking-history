var labels = ['2024-10-06','2024-10-07','2024-10-08','2024-10-09','2024-10-10','2024-10-11','2024-10-12','2024-10-13','2024-10-14','2024-10-15','2024-10-16','2024-10-17','2024-10-18','2024-10-19','2024-10-20','2024-10-21','2024-10-22','2024-10-23','2024-10-24','2024-10-25','2024-10-26','2024-10-27','2024-10-28','2024-10-29','2024-10-30','2024-10-31','2024-11-01','2024-11-02',];var datasets = [{"label":"ニート極道「牧村ユタカ」","data":[1,1,1,1,1,2,5,2,2,1,2,2,1,1,1,1,1,7,9,2,1,1,1,1,1,1,1,101]},{"label":"まめきちまめこニートの日常","data":[2,2,2,3,5,1,1,1,1,4,1,1,2,3,3,2,2,1,3,5,2,2,3,4,2,2,2,2]},{"label":"オレ的ゲーム速報＠刃","data":[3,3,3,2,2,3,2,3,3,2,3,3,3,2,2,3,3,2,2,1,3,3,2,2,4,4,3,1]},{"label":"はちま起稿","data":[4,5,5,5,4,5,4,5,5,5,5,4,5,5,5,5,5,4,1,3,5,6,6,5,5,6,5,4]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,4,4,3,4,3,4,4,3,4,5,4,4,4,4,4,3,4,4,4,4,4,3,6,5,4,3]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,6,6,6,6,6,6,6,8,7,7,8,7,8,7,7,6,5,6,7,8,8,7,7,7,6,6]},{"label":"ガレ速@フォロワー体験漫画","data":[7,9,10,9,12,13,22,12,12,13,17,14,10,10,9,9,11,29,46,19,12,9,10,10,11,12,9,101]},{"label":"ハムスター速報","data":[8,7,7,7,7,7,8,8,8,6,8,8,7,6,7,6,6,5,6,7,6,7,7,6,8,8,7,5]},{"label":"暇つぶしニュース","data":[9,8,8,10,8,8,9,7,7,7,6,6,6,8,6,8,9,8,7,8,9,5,5,8,9,10,10,8]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[10,10,9,8,9,10,10,9,9,9,9,9,9,9,10,10,10,10,8,9,8,10,9,9,10,9,8,7]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[11,12,13,12,11,12,12,10,11,10,12,12,11,11,11,12,12,12,11,10,10,11,12,12,12,11,12,10]},{"label":"ヤゴヴのマンガ劇場","data":[12,13,11,11,10,11,11,11,10,11,10,10,13,12,12,11,13,11,10,11,11,12,11,11,13,13,14,13]},{"label":"わんこーる速報！","data":[13,16,16,17,19,19,18,18,16,16,15,20,21,17,21,17,18,17,16,21,17,14,16,17,17,17,16,15]},{"label":"哲学ニュースnwk","data":[14,11,12,13,13,15,13,17,18,12,11,11,12,13,13,13,8,9,14,14,13,15,14,13,3,3,11,9]},{"label":"ねいろ速報さん","data":[15,15,14,19,20,20,20,21,14,14,14,17,17,19,15,14,16,18,18,18,19,17,18,20,21,22,18,18]},{"label":"ラビット速報","data":[16,17,19,15,16,17,15,20,19,17,20,16,16,21,16,19,17,16,15,17,21,19,19,16,18,18,23,17]},{"label":"おーるじゃんる","data":[17,22,21,14,17,23,19,28,25,24,18,23,23,24,23,24,27,23,12,20,22,23,20,15,15,14,17,11]},{"label":"ツイッター速報","data":[18,27,82,68,84,9,7,31,60,101,101,78,72,101,101,31,101,96,101,101,101,101,66,65,101,89,55,101]},{"label":"【2ch】ニュー速クオリティ","data":[19,23,17,18,21,18,17,19,20,20,21,15,15,16,18,16,20,20,17,16,16,20,17,14,14,19,19,16]},{"label":"もちログ","data":[20,19,18,20,22,14,14,16,15,18,19,13,14,15,14,15,15,13,13,13,66,67,63,54,55,55,38,39]},{"label":"しばたまブログ","data":[21,33,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"VIPPERな俺","data":[22,20,23,21,24,29,25,23,24,25,24,22,24,26,27,28,24,24,23,29,24,27,27,21,22,20,21,21]},{"label":"日刊やきう速報","data":[23,14,15,24,15,16,21,15,13,19,16,18,19,14,19,22,14,14,21,12,14,13,13,27,19,15,13,14]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[24,24,20,22,18,24,27,22,21,22,13,19,18,18,17,18,21,19,22,23,20,18,23,23,25,21,27,22]},{"label":"なんJ PRIDE","data":[25,18,22,16,14,22,23,14,17,15,22,21,22,22,20,23,19,15,19,15,15,16,15,18,16,16,15,12]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[26,26,24,23,23,21,24,24,22,23,23,25,20,20,26,27,23,21,20,22,25,26,25,19,20,25,26,20]},{"label":"うしみつ-5chまとめ-","data":[27,25,25,25,25,26,29,27,28,30,27,26,27,32,31,30,31,26,27,25,29,28,28,28,29,29,31,28]},{"label":"ゴールデンタイムズ","data":[28,21,26,26,27,27,26,25,23,21,26,24,25,27,28,25,26,27,25,24,23,25,26,22,26,27,28,19]},{"label":"世にも奇妙ななんかの話","data":[29,28,100,28,31,33,30,78,101,57,101,101,101,101,101,101,101,101,101,79,83,74,72,101,58,59,58,101]},{"label":"ネギ速","data":[30,30,30,30,30,32,31,32,29,27,25,29,37,33,46,45,44,39,44,52,50,34,30,33,34,37,41,31]},{"label":"IT速報","data":[31,31,31,34,43,37,41,35,35,36,31,31,31,35,33,35,36,35,35,33,34,38,31,30,35,33,42,29]},{"label":"De速","data":[32,49,53,64,64,71,82,51,37,53,52,48,35,31,30,43,35,22,24,26,30,33,42,56,53,26,30,23]},{"label":"稲妻速報","data":[33,34,32,33,35,38,39,33,32,34,35,36,34,37,35,38,42,38,39,43,38,35,36,34,36,35,37,33]},{"label":"なんJクエスト","data":[34,32,35,32,34,36,44,38,36,31,28,35,33,36,37,32,37,36,38,36,39,32,32,31,32,31,29,26]},{"label":"くまおのマンガ堂","data":[35,45,36,41,39,39,40,37,34,44,37,39,43,40,40,44,48,45,40,42,52,43,44,46,45,45,48,78]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[36,35,27,27,26,25,33,43,30,29,33,38,32,29,29,33,43,30,29,30,33,31,37,43,33,34,32,25]},{"label":"オタク.com －オタコム－","data":[37,39,41,40,33,45,50,40,39,43,39,34,40,50,42,42,40,33,34,40,40,41,38,37,41,36,40,37]},{"label":"ぶる速-VIP","data":[38,42,46,42,45,44,49,42,47,45,46,41,38,44,44,47,49,42,37,39,41,39,40,39,39,42,39,40]},{"label":"乃木坂46まとめ 1/46","data":[39,48,37,47,55,31,45,57,49,59,57,53,57,60,41,40,38,48,63,59,37,54,55,44,48,52,59,32]},{"label":"なんJ（まとめては）いかんのか？","data":[40,52,60,74,65,55,68,41,26,35,50,43,54,41,55,55,25,37,57,28,48,37,34,47,42,38,33,48]},{"label":"ついんてーる速報","data":[41,36,34,45,37,40,51,49,51,49,53,45,47,48,49,53,41,34,41,48,55,48,53,52,46,43,43,44]},{"label":"芸能人の気になる噂","data":[42,44,40,43,49,49,48,44,41,46,42,40,39,42,38,39,39,40,45,49,46,45,45,41,47,46,44,35]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[43,43,39,36,38,42,42,45,42,39,36,37,36,39,36,41,34,32,33,35,36,44,43,40,38,40,45,38]},{"label":"カイカイ反応通信","data":[44,46,33,35,36,43,28,39,43,40,44,42,45,47,53,49,45,44,43,46,43,42,47,48,51,47,36,34]},{"label":"まとめたニュース","data":[45,54,42,37,42,56,55,54,57,54,47,51,48,56,52,52,51,57,51,37,56,55,46,38,30,39,61,47]},{"label":"ポリー速報","data":[46,50,51,52,48,50,46,50,46,41,45,56,51,52,58,56,53,49,55,50,42,46,48,45,43,54,47,46]},{"label":"あにこ便｜アニメ感想サイト","data":[47,40,38,46,52,52,57,48,44,47,49,50,53,53,48,48,54,51,54,62,62,49,49,58,62,57,56,53]},{"label":"人間まおと愉快な仲間たち","data":[48,37,28,29,29,34,36,36,38,42,40,46,42,38,34,36,32,31,28,31,35,36,39,35,37,41,35,30]},{"label":"カオスちゃんねる","data":[49,47,44,38,41,48,54,52,40,38,38,47,44,43,39,46,46,41,42,51,45,40,41,42,40,44,46,41]},{"label":"NEWSぽけまとめーる","data":[50,53,50,48,57,47,56,58,54,55,48,49,52,51,50,57,55,53,52,64,59,50,52,50,50,49,54,45]},{"label":"海外の万国反応記＠海外の反応","data":[51,41,45,50,58,54,53,56,50,50,43,52,46,57,54,50,50,47,47,61,54,56,58,53,54,51,52,51]},{"label":"ぱんをたずねて2000里ちょい","data":[52,63,48,39,63,41,43,46,58,48,41,58,41,46,45,63,47,43,50,45,53,47,61,49,44,61,76,36]},{"label":"はむらの毎日マンガ","data":[53,38,88,101,47,60,101,53,55,101,101,101,101,101,47,34,66,101,36,53,101,30,33,77,101,101,101,101]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[54,51,49,51,51,58,58,55,48,52,56,44,50,49,56,62,52,46,48,44,49,59,62,57,60,69,62,42]},{"label":"スズぺぺの人生何とかなってます!!","data":[55,90,29,31,32,35,34,34,61,37,29,28,29,34,32,65,33,28,31,32,32,29,64,32,31,32,34,27]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[56,64,58,56,68,77,61,62,62,56,75,74,75,76,77,84,74,58,75,58,65,64,73,78,73,71,65,62]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[57,55,56,54,50,59,73,79,84,81,64,62,62,63,51,37,56,52,32,55,60,52,56,67,63,67,70,58]},{"label":"投資ちゃんねる","data":[58,59,63,65,70,68,64,63,63,62,63,63,63,75,79,73,65,78,71,86,93,83,75,74,65,81,80,76]},{"label":"登山ちゃんねる","data":[59,83,71,75,87,72,86,83,81,74,73,68,69,62,66,78,71,67,72,76,71,81,77,85,72,58,51,72]},{"label":"馬鳥速報","data":[60,57,52,49,61,65,60,47,52,72,51,54,64,45,43,54,63,66,58,70,70,70,81,66,59,65,53,50]},{"label":"2chコピペ保存道場","data":[61,71,61,61,73,69,71,71,72,61,55,72,59,70,65,74,69,64,49,69,68,60,70,71,67,74,71,67]},{"label":"あんころの漫画日和","data":[62,56,43,66,56,61,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガールズVIPまとめ","data":[63,60,47,44,53,53,59,59,56,60,58,57,61,55,63,58,61,61,56,63,58,61,57,62,57,53,60,49]},{"label":"軍事・ミリタリー速報☆彡","data":[64,68,64,58,72,62,70,66,70,69,66,67,68,64,64,72,68,69,64,85,80,85,92,88,79,76,69,57]},{"label":"はーとログ","data":[65,80,70,72,79,81,63,72,71,71,78,71,70,81,72,79,77,73,67,82,89,84,89,70,69,80,66,66]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[66,65,59,63,69,64,62,64,66,64,59,65,55,54,57,61,62,63,62,56,51,63,68,68,71,75,74,59]},{"label":"今日速2ch","data":[67,62,83,101,101,92,90,80,59,65,77,83,77,80,75,66,83,100,70,65,76,100,88,80,88,90,83,71]},{"label":"PS5速報！","data":[68,74,66,62,71,67,67,68,68,70,70,73,65,69,73,75,70,74,74,71,86,79,86,79,77,79,75,69]},{"label":"ぽん子の不倫スカッと漫画","data":[69,67,86,84,101,101,101,101,101,100,91,91,85,86,94,97,97,101,98,101,96,92,83,76,78,73,73,60]},{"label":"阪神タイガースちゃんねる","data":[70,72,101,101,101,101,101,101,101,101,99,61,89,101,98,68,57,98,101,92,99,101,101,101,101,101,78,94]},{"label":"あいチャンネル","data":[71,29,77,101,28,73,32,82,101,33,74,27,74,28,67,101,30,76,26,84,28,80,101,29,68,30,85,24]},{"label":"デジタルニューススレッド","data":[72,70,75,77,78,78,75,67,74,77,67,75,71,66,70,76,78,79,73,80,74,73,74,73,75,78,87,63]},{"label":"鈴木さん速報","data":[73,82,73,71,67,66,69,69,69,66,65,70,66,61,71,64,60,56,59,68,77,69,54,64,66,50,77,65]},{"label":"【2ch】コピペ情報局","data":[74,91,72,70,82,51,77,74,82,68,69,77,58,71,68,80,91,71,85,75,85,72,85,96,70,66,63,56]},{"label":"ろぼ速VIP","data":[75,78,80,73,81,91,80,84,87,86,76,81,79,79,74,67,72,84,86,94,94,86,90,81,87,98,92,81]},{"label":"最強ジャンプ放送局","data":[76,84,67,82,89,86,89,89,88,79,79,82,82,91,84,93,75,89,83,90,97,97,95,86,85,93,84,87]},{"label":"流速VIP","data":[77,87,65,55,75,74,85,70,79,63,62,69,78,82,76,81,64,77,69,67,69,87,80,60,61,63,67,79]},{"label":"パチンコ・パチスロ.com","data":[78,61,54,53,60,57,52,60,45,51,54,55,56,59,62,69,58,55,53,57,57,57,59,59,52,48,49,54]},{"label":"MLB NEWS@まとめ","data":[79,66,84,95,91,88,92,65,75,76,92,98,92,77,91,91,82,81,90,101,101,71,78,87,83,94,79,75]},{"label":"ダイエット速報＠2ちゃんねる","data":[80,76,79,80,80,82,98,87,89,82,84,84,87,73,93,82,86,86,84,101,90,88,98,100,86,77,82,77]},{"label":"お料理速報","data":[81,88,97,101,101,101,101,96,101,97,85,86,101,97,89,101,88,93,96,98,98,101,101,90,101,101,101,101]},{"label":"FF14速報","data":[82,75,74,76,83,80,76,75,97,89,68,66,67,58,60,77,76,85,82,83,73,68,71,72,90,92,89,82]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[83,73,78,85,77,100,101,101,101,85,90,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[84,101,101,69,54,63,94,101,101,101,101,60,60,72,78,101,99,75,65,78,63,101,29,36,49,60,57,52]},{"label":"ライフハックちゃんねる弐式","data":[85,77,55,57,85,75,72,81,73,80,61,64,73,65,81,71,73,87,78,97,87,75,82,84,84,91,81,70]},{"label":"大艦巨砲主義！","data":[86,92,81,90,74,83,83,85,85,88,88,85,84,78,82,87,85,91,87,81,88,90,84,63,74,84,88,85]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[87,69,62,79,66,70,78,76,65,67,72,76,101,96,61,70,59,72,79,66,75,101,101,89,64,56,68,84]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[88,81,85,89,96,85,84,101,93,87,80,79,86,85,85,89,89,94,81,93,91,94,93,91,89,99,95,83]},{"label":"サカラボ | サッカーまとめ速報","data":[89,101,98,101,97,96,74,91,92,90,82,88,101,99,101,101,90,101,101,89,100,101,101,101,101,101,101,96]},{"label":"えび通","data":[90,101,93,91,94,101,79,98,101,99,87,92,91,101,101,95,94,101,101,87,101,99,87,75,99,86,91,101]},{"label":"稼げるまとめ速報","data":[91,100,94,94,93,84,91,86,98,92,71,89,99,92,96,98,92,101,100,99,101,95,101,98,82,83,101,91]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[92,93,90,96,92,101,93,88,83,84,89,96,88,88,95,86,95,99,92,101,101,98,100,95,97,101,98,93]},{"label":"資格ちゃんねる","data":[93,96,91,98,88,95,99,101,101,94,93,87,101,101,101,94,87,82,88,96,82,101,101,69,94,101,94,88]},{"label":"つんの日常ブログ","data":[94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,51,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[95,89,89,81,99,76,81,94,76,73,83,80,76,84,83,92,80,95,76,47,72,78,79,61,80,85,97,92]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,18,58,101,101,101,101,101,100]},{"label":"筋肉速報","data":[97,99,101,101,95,97,101,101,101,95,96,101,83,94,92,101,101,101,101,101,101,101,101,92,101,101,101,101]},{"label":"ジャンプ速報","data":[98,95,101,101,101,101,101,101,94,93,101,101,101,101,101,101,67,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろくのコミックブログ","data":[99,97,87,93,90,99,87,90,91,101,100,93,94,98,101,88,101,90,99,95,101,91,101,101,101,96,101,90]},{"label":"絵日記でございます。","data":[100,94,69,60,76,90,88,99,90,101,101,97,100,101,88,83,84,80,91,101,47,51,50,55,27,64,86,86]},{"label":"マンガと私と猫ブログ。","data":[101,58,57,101,101,101,35,101,53,58,101,59,49,101,101,29,101,101,101,27,101,101,35,51,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,79,92,86,101,101,101,97,95,91,101,99,101,101,101,101,101,101,101,74,81,101,101,101,93,100,99,101]},{"label":"交野タイムズ","data":[101,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,86,76,87,86,98,96,77,67,78,86,95,101,83,86,96,79,68,77,60,61,53,76,101,101,68,90,101]},{"label":"鷹速@ホークスまとめブログ","data":[101,98,68,88,101,101,101,93,80,83,98,90,97,89,87,101,81,92,97,72,78,76,67,93,92,62,64,73]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,95,101,101,93,101,101,100,101,101,101,101,101,101,101,100,101,101,100,67,66,101,101,101,101,100,89]},{"label":"かぞくちゃんねる","data":[101,101,96,101,100,101,101,101,101,101,94,101,95,100,101,101,98,101,94,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,99,101,101,101,100,100,101,101,101,101,101,101,101,100,101,101,101,101,101,101,94,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,59,101,87,101,101,101,101,60,101,80,101,101,101,101,60,101,91,101,101,101,101,56,101,101,101]},{"label":"いろんなネットニュース速報","data":[101,101,101,67,62,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ねこいもブログ","data":[101,101,101,78,101,101,97,101,101,101,95,94,101,93,101,101,96,97,101,101,84,101,99,99,101,101,101,95]},{"label":"模型のアサヒヤ","data":[101,101,101,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,92,101,101,101,101,86,96,101,101,90,67,80,101,101,62,80,77,92,101,96,101,101,70,72,55]},{"label":"だいごろうの1日","data":[101,101,101,97,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"生まれた時から反抗期","data":[101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,85,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニュース30over","data":[101,101,101,100,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ヤクまん！","data":[101,101,101,101,40,28,37,26,31,28,30,33,28,25,24,20,28,59,66,38,27,21,21,24,23,24,22,101]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[101,101,101,101,44,30,47,29,27,26,32,32,26,23,22,21,22,50,60,34,26,22,22,25,24,23,20,101]},{"label":"禍々マガジン","data":[101,101,101,101,46,46,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,59,79,101,101,101,101,101,101,101,101,101,101,101,70,61,101,79,101,101,101,101,82,101,64]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,89,101,101,101,101,101,101,101,68,69,101,93,101,101,73,101,89,60,94,81,88,50,61]},{"label":"シカブロ","data":[101,101,101,101,101,94,65,61,77,98,81,101,93,101,90,90,101,101,101,101,101,96,101,101,101,97,101,68]},{"label":"片づけの向こう側～奇跡の3日片づけ&夢をかなえる7割収納～","data":[101,101,101,101,101,101,16,13,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まるごし刑事","data":[101,101,101,101,101,101,38,30,33,32,34,30,30,30,25,26,29,65,68,41,31,24,24,26,28,28,25,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,66,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"AKBフレンド","data":[101,101,101,101,101,101,101,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,92,96,101,101,101,101,87,59,101,101,54,93,101,101,65,51,101,101,101,101,80]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,78,75,101,101,101,101,99,59,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"バイク速報","data":[101,101,101,101,101,101,101,101,99,101,101,101,101,101,100,101,101,101,101,101,101,101,91,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,76,101,101,97]},{"label":"なんJ政治ネタまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,101,101,97,83,101,101,101,101]},{"label":"おとの漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,83,89,101,95,101,101,101,95,101,93,74]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,99,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ながおか速報 -新潟県長岡市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,60,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,25,30,54,64,62,69,82,91,95,101,99]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,96,101,101,101]},{"label":"ってなんじぇですかー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101]},{"label":"かぼすちゃんとおさんぽ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,44,77,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,82,65,97,100,101,101,101]},{"label":"すや子のブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,96,101]},{"label":"パラノーマルちゃんねる | 2ch怖い話まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,72,24,43]}];
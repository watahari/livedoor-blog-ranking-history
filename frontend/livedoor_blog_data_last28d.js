var labels = ['2025-01-04','2025-01-05','2025-01-06','2025-01-07','2025-01-08','2025-01-09','2025-01-10','2025-01-11','2025-01-12','2025-01-13','2025-01-14','2025-01-15','2025-01-16','2025-01-17','2025-01-18','2025-01-19','2025-01-20','2025-01-21','2025-01-22','2025-01-23','2025-01-24','2025-01-25','2025-01-26','2025-01-27','2025-01-28','2025-01-29','2025-01-30','2025-01-31',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,2,2,1,1,1,2,2,1,1,1,1,2,4,1,1,1,1,2,5,1,1,2,4,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,1,1,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,1,1,2,1]},{"label":"はちま起稿","data":[3,3,4,3,4,4,3,3,3,4,3,3,3,3,4,3,4,3,3,3,3,2,5,5,4,5,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,3,4,3,3,4,4,4,3,4,4,5,4,5,5,5,4,4,4,6,4,4,4,3,3,4,5]},{"label":"痛いニュース(ﾉ∀`)","data":[5,5,5,5,6,6,6,6,6,5,6,6,6,5,6,6,6,6,5,6,7,6,7,7,7,7,7,7]},{"label":"暇つぶしニュース","data":[6,7,7,7,8,7,7,7,7,8,5,7,8,8,8,7,10,9,7,7,10,9,9,10,9,9,8,11]},{"label":"ハムスター速報","data":[7,6,6,8,5,5,5,5,5,7,7,5,4,6,3,2,3,5,6,5,5,3,6,8,5,2,5,4]},{"label":"ツイッター速報","data":[8,63,101,29,16,73,101,101,101,63,44,42,59,101,101,101,71,92,76,101,37,21,27,20,58,101,31,46]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,8,8,6,7,8,8,8,8,6,8,8,7,7,7,10,8,8,9,8,8,8,10,9,8,8,9,8]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[10,10,9,11,9,9,9,9,9,9,9,9,10,11,10,11,11,10,10,11,11,11,13,13,11,11,12,12]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[11,9,10,10,12,11,15,13,12,12,13,16,15,14,13,13,16,15,17,17,22,22,20,17,20,20,20,21]},{"label":"ニート極道「牧村ユタカ」","data":[12,11,12,12,10,10,11,10,10,10,10,11,11,12,11,8,7,14,13,12,13,10,3,3,13,13,13,14]},{"label":"哲学ニュースnwk","data":[13,12,11,9,11,12,13,12,13,14,14,14,16,10,12,12,12,11,11,13,14,14,15,12,10,15,15,17]},{"label":"VIPPERな俺","data":[14,20,18,16,27,13,12,18,17,16,12,15,18,18,16,19,20,20,21,20,20,19,25,25,17,18,18,20]},{"label":"わんこーる速報！","data":[15,13,13,13,14,14,14,14,14,13,15,12,13,13,14,14,15,13,14,15,15,15,18,16,16,17,17,16]},{"label":"日刊やきう速報","data":[16,23,23,20,23,24,23,25,25,26,25,28,28,26,23,22,28,27,26,19,21,23,24,27,22,23,24,9]},{"label":"ラビット速報","data":[17,17,15,21,18,18,16,19,16,17,18,17,14,16,17,17,18,17,20,21,18,20,19,18,19,19,19,23]},{"label":"ゴールデンタイムズ","data":[18,21,21,22,24,22,21,20,19,22,19,23,24,21,21,23,22,19,24,24,16,17,26,22,23,25,22,19]},{"label":"【2ch】ニュー速クオリティ","data":[19,14,19,15,15,16,17,15,18,18,17,13,17,15,19,15,17,16,15,18,17,16,14,14,12,12,11,13]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[20,19,24,26,19,23,24,24,22,21,26,32,38,33,28,27,26,26,28,30,28,32,31,21,30,32,27,25]},{"label":"なんJ PRIDE","data":[21,18,16,17,17,15,18,17,20,19,16,18,19,17,15,18,19,22,19,16,19,18,17,15,18,14,14,15]},{"label":"おーるじゃんる","data":[22,16,17,18,21,19,20,16,15,15,22,25,21,22,20,20,27,18,16,10,4,13,16,19,15,16,16,18]},{"label":"ねいろ速報さん","data":[23,15,20,19,20,20,19,21,21,20,20,20,23,24,22,21,21,21,23,25,25,25,23,23,21,21,23,24]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[24,25,28,23,25,25,27,29,27,27,30,33,32,30,35,33,30,30,36,32,31,27,28,33,27,28,30,31]},{"label":"うしみつ-5chまとめ-","data":[25,24,22,24,22,21,22,22,24,24,24,24,26,27,24,24,23,23,27,27,29,28,30,24,26,24,26,26]},{"label":"もちログ","data":[26,26,27,28,26,26,25,23,23,25,21,22,20,19,18,16,14,12,12,14,12,12,12,11,14,10,10,10]},{"label":"なんJクエスト","data":[27,31,25,27,28,27,28,28,32,29,28,30,29,28,30,32,34,35,33,31,36,37,38,31,29,29,33,29]},{"label":"ネギ速","data":[28,29,30,30,29,37,36,35,26,23,23,27,37,25,25,26,29,24,25,26,24,24,22,26,24,22,21,22]},{"label":"稲妻速報","data":[29,32,29,33,32,31,29,26,33,32,32,34,35,32,37,34,35,36,38,39,34,33,40,36,31,33,36,34]},{"label":"マンガと私と猫ブログ。","data":[30,101,101,25,42,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"IT速報","data":[31,27,26,31,31,29,26,27,30,28,27,19,22,23,27,29,25,25,22,22,27,30,39,32,28,26,32,28]},{"label":"パチンコ・パチスロ.com","data":[32,42,38,46,51,35,51,48,52,48,42,38,33,36,45,49,46,47,43,54,26,43,33,52,36,46,53,51]},{"label":"ぶる速-VIP","data":[33,30,31,32,30,34,33,31,36,31,29,29,34,34,42,37,40,33,31,36,38,35,35,42,39,36,41,36]},{"label":"ヤゴヴのマンガ劇場","data":[34,22,14,14,13,17,10,11,11,11,11,10,9,9,9,9,9,7,8,9,9,7,8,6,6,6,6,6]},{"label":"まとめたニュース","data":[35,34,46,52,39,47,50,44,35,39,36,49,40,31,46,35,37,31,29,34,30,31,32,34,33,35,37,44]},{"label":"２りんかんブログ","data":[36,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,67,101]},{"label":"芸能人の気になる噂","data":[37,33,33,36,35,38,32,33,37,36,34,40,41,35,32,38,38,37,37,44,47,39,41,43,45,42,42,39]},{"label":"ぱんをたずねて2000里ちょい","data":[38,28,50,70,34,44,64,41,29,47,65,36,12,46,44,31,50,60,39,53,66,49,37,62,72,39,49,70]},{"label":"カオスちゃんねる","data":[39,35,37,43,45,42,30,39,38,38,38,43,47,45,40,41,42,44,42,38,53,50,46,50,46,40,40,45]},{"label":"ついんてーる速報","data":[40,36,32,35,33,32,34,30,31,35,37,31,36,38,34,30,32,34,45,40,48,48,55,46,32,44,34,40]},{"label":"流速VIP","data":[41,40,35,37,36,55,47,53,49,52,48,57,53,54,52,59,62,43,44,58,54,56,63,58,41,56,56,63]},{"label":"NEWSぽけまとめーる","data":[42,41,39,44,46,50,38,50,48,46,45,48,51,50,54,52,48,50,53,51,57,59,51,53,52,45,52,59]},{"label":"オタク.com －オタコム－","data":[43,38,34,40,43,39,35,34,34,33,31,37,39,39,39,40,39,40,35,43,35,38,34,35,34,37,35,32]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[44,43,45,58,58,36,39,42,41,45,39,41,55,41,53,50,41,46,30,42,55,53,11,29,42,49,45,38]},{"label":"人間まおと愉快な仲間たち","data":[45,46,44,45,41,40,43,37,40,37,35,39,42,37,33,36,36,39,40,41,39,42,43,40,44,50,47,35]},{"label":"ガールズVIPまとめ","data":[46,44,36,41,44,48,48,49,43,43,46,51,48,51,49,46,47,41,41,45,43,51,49,41,37,41,46,47]},{"label":"ポリー速報","data":[47,48,42,54,48,41,53,51,44,44,41,53,57,48,55,43,57,51,54,49,56,47,47,57,55,54,66,64]},{"label":"2chコピペ保存道場","data":[48,53,41,49,56,58,68,64,68,56,50,68,72,64,62,56,59,57,64,56,62,69,64,55,59,61,58,60]},{"label":"デジタルニューススレッド","data":[49,57,64,55,70,74,66,70,63,58,64,72,74,68,70,72,65,66,72,64,70,71,66,67,77,69,72,56]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[50,45,43,42,47,46,41,46,45,41,43,44,44,44,43,39,45,45,51,50,50,54,54,37,25,31,38,33]},{"label":"海外の万国反応記＠海外の反応","data":[51,39,48,53,49,49,45,45,47,42,47,46,45,52,51,44,52,49,55,48,49,55,58,60,62,60,51,49]},{"label":"馬鳥速報","data":[52,49,52,47,53,51,46,52,51,62,68,47,62,60,65,77,55,61,58,67,72,57,50,71,57,63,65,67]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[53,50,57,61,57,54,52,54,50,54,57,61,65,61,59,53,53,55,60,61,65,52,62,69,69,68,64,68]},{"label":"鈴木さん速報","data":[54,65,59,72,67,71,60,65,59,57,67,63,69,71,66,60,56,56,62,63,63,66,57,56,54,67,71,55]},{"label":"FF14速報","data":[55,69,74,68,72,69,78,73,88,85,79,60,75,83,81,64,77,77,70,80,94,81,86,89,82,48,76,76]},{"label":"軍事・ミリタリー速報☆彡","data":[56,61,61,64,66,67,72,72,74,64,70,67,68,62,67,73,63,63,68,68,69,75,77,73,78,75,68,74]},{"label":"ライフハックちゃんねる弐式","data":[57,56,65,73,61,61,56,61,66,61,53,64,52,58,72,61,60,70,61,66,77,70,72,66,68,71,57,50]},{"label":"登山ちゃんねる","data":[58,59,49,57,59,68,71,55,72,60,63,62,60,69,76,71,61,67,65,69,74,79,73,74,76,65,73,65]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[59,55,78,97,71,56,70,87,90,86,80,21,25,29,36,28,24,29,18,23,32,34,36,38,49,47,50,53]},{"label":"高槻つーしん","data":[60,51,76,101,101,93,62,76,71,76,82,101,101,101,101,101,101,101,101,101,81,67,52,65,101,97,98,101]},{"label":"はーとログ","data":[61,67,67,71,73,79,69,57,69,66,73,84,80,73,83,74,76,65,67,72,80,85,80,81,89,86,85,79]},{"label":"なんJ（まとめては）いかんのか？","data":[62,66,53,50,54,85,55,101,75,49,72,75,87,95,64,58,92,84,69,35,67,77,70,70,64,73,83,89]},{"label":"稼げるまとめ速報","data":[63,78,79,66,68,87,67,62,64,69,58,59,58,53,63,88,78,64,46,60,60,64,68,75,74,59,70,75]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[64,74,72,79,79,64,75,80,76,79,69,78,84,78,80,83,75,80,87,84,89,91,84,87,88,92,84,95]},{"label":"スカっとクミさん！戦う女の物語","data":[65,71,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろぼ速VIP","data":[66,60,69,77,65,75,80,78,67,74,71,81,81,77,79,70,73,74,74,65,59,72,75,72,87,79,75,81]},{"label":"投資ちゃんねる","data":[67,70,54,60,62,70,63,66,54,53,56,65,70,72,68,65,64,59,63,73,68,78,59,59,56,55,54,57]},{"label":"【2ch】コピペ情報局","data":[68,64,70,38,76,66,65,67,81,65,77,73,64,66,69,95,67,78,80,76,79,74,67,68,86,83,87,69]},{"label":"カイカイ反応通信","data":[69,73,73,48,38,45,37,40,28,30,40,52,50,49,48,47,51,38,48,52,42,40,29,47,38,34,39,37]},{"label":"ねこいもブログ","data":[70,98,90,86,101,96,84,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[71,72,56,59,52,62,74,74,73,67,52,70,86,67,57,45,69,62,57,62,78,94,71,54,60,74,74,78]},{"label":"De速","data":[72,82,93,88,81,65,49,47,79,70,61,71,76,74,60,76,88,97,59,33,71,90,65,86,35,52,48,66]},{"label":"ダイエット速報＠2ちゃんねる","data":[73,75,66,63,69,76,59,68,58,72,85,76,79,76,71,78,74,73,89,82,84,80,93,88,100,85,81,91]},{"label":"大艦巨砲主義！","data":[74,86,83,85,89,91,85,86,84,81,83,89,89,85,87,91,89,85,85,89,86,88,89,96,96,94,86,87]},{"label":"あにこ便｜アニメ感想サイト","data":[75,79,68,80,78,80,81,71,62,59,60,74,85,84,74,75,68,69,82,88,88,82,76,78,81,82,89,92]},{"label":"えび通","data":[76,83,80,75,83,88,82,89,87,82,86,85,82,89,84,82,81,88,75,85,91,97,96,94,101,95,91,88]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[77,52,47,69,50,53,42,43,39,40,49,50,56,57,47,25,13,28,49,59,41,36,45,45,67,58,43,30]},{"label":"資格ちゃんねる","data":[78,62,71,82,87,77,76,79,57,68,78,69,73,81,91,84,70,87,79,77,75,73,78,76,73,64,61,72]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[79,88,94,99,94,98,101,90,86,94,97,90,100,101,89,101,95,101,101,101,101,101,101,101,101,101,100,99]},{"label":"やみ速@なんJ西武まとめ","data":[80,90,100,95,85,84,86,101,101,78,91,94,101,90,90,97,100,101,101,101,101,98,101,101,101,101,95,101]},{"label":"お料理速報","data":[81,76,63,96,80,82,90,81,70,55,74,97,93,97,82,86,83,83,73,97,95,92,95,92,91,101,80,83]},{"label":"ニュース30over","data":[82,89,89,92,82,95,93,91,65,90,101,101,101,96,92,101,66,68,78,93,101,68,79,82,94,90,82,77]},{"label":"山田全自動のあるある日記","data":[83,101,101,101,91,28,31,60,83,88,51,101,77,42,31,69,101,82,50,79,45,63,88,39,97,101,28,27]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[84,87,84,93,86,89,88,88,80,83,88,91,97,93,75,85,82,86,81,81,82,89,82,80,95,81,78,82]},{"label":"最強ジャンプ放送局","data":[85,77,81,83,88,83,79,85,92,87,81,88,95,98,93,93,85,72,95,90,73,86,92,84,79,87,79,84]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[86,81,77,62,75,72,87,69,85,71,33,79,88,80,85,79,80,89,93,71,90,100,91,93,92,84,90,93]},{"label":"かぞくちゃんねる","data":[87,85,88,101,101,101,101,98,101,101,101,95,101,101,95,101,98,95,97,94,87,101,101,101,101,98,97,101]},{"label":"まとめロッテ！","data":[88,101,101,100,90,101,83,83,93,101,101,101,101,101,101,101,72,76,101,74,92,101,101,101,101,101,101,86]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[89,54,58,78,64,60,77,77,77,75,55,56,98,79,61,66,54,58,71,55,61,76,83,79,75,76,60,62]},{"label":"鷹速@ホークスまとめブログ","data":[90,101,82,101,101,90,101,101,101,101,100,101,101,86,101,96,93,101,101,96,101,101,101,98,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[91,94,91,101,101,81,101,101,101,101,101,101,101,101,101,101,101,96,66,101,101,101,97,64,65,66,63,61]},{"label":"筋肉速報","data":[92,95,95,101,100,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[93,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"PS5速報！","data":[94,84,86,76,84,78,73,75,78,73,75,77,78,70,78,81,79,75,84,78,83,83,81,85,83,80,77,80]},{"label":"サカラボ | サッカーまとめ速報","data":[95,97,92,98,96,97,92,93,89,89,76,80,94,91,86,89,91,79,94,101,100,101,101,90,101,101,99,96]},{"label":"バイク速報","data":[96,101,87,89,101,101,101,101,94,91,92,98,101,100,101,101,101,101,101,101,101,101,101,100,101,96,96,101]},{"label":"ああ言えばForYou","data":[97,99,101,101,101,101,101,97,101,93,93,101,101,94,97,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大盛のぞみでも毎日どうにかやってる。","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"絵日記でございます。","data":[99,93,62,67,74,63,54,56,42,50,59,35,30,43,56,63,58,71,77,86,85,87,74,77,84,78,69,52]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[100,101,85,81,77,57,57,59,55,51,54,45,46,47,41,42,43,42,32,46,46,58,53,51,50,57,62,71]},{"label":"あいチャンネル","data":[101,37,75,39,60,30,58,32,61,34,66,101,31,55,29,62,31,53,101,28,64,26,61,28,51,93,25,43]},{"label":"S-MAX","data":[101,47,51,74,101,101,101,101,101,97,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えみコミック！","data":[101,58,40,51,37,33,40,36,46,101,101,55,43,59,101,68,49,52,83,101,97,101,101,101,101,101,101,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[101,68,60,65,63,59,61,58,53,101,62,58,63,56,58,57,101,54,56,57,58,62,60,101,71,62,59,58]},{"label":"ローカル路線バス乗り継ぎの旅が好き","data":[101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,92,96,101,101,101,101,100,100,96,98,101,101,101,94,100,101,101,98,101,99,101,101,101,101,101,101,85]},{"label":"ぐら速  -声優まとめ速報-","data":[101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,91,101,101,101,101,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,100,97,101,98,92,100,101,97,98,95,100,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,55,101,92,101,101,96,101,101,101,101,101,92,73,87,101,101,100,91,101,101,69,101,101,100,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おうまがタイムズ","data":[101,101,99,101,101,101,95,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"国際ニュース用語まとめ - 白狐","data":[101,101,101,34,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,56,101,52,101,63,101,101,101,101,101,101,101,101,101,101,101,75,101,61,44,101,66,51,29,48]},{"label":"おとの漫画","data":[101,101,101,84,40,43,44,38,56,101,101,66,49,40,38,54,97,101,47,29,33,29,56,97,48,38,94,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,87,93,94,101,101,101,100,84,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しらす大盛りブログ","data":[101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,91,101,101,101,101,91,77,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カナダと鬱と私 -バンクーバーでマイペース生活-","data":[101,101,101,94,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,55,101,97,101,101,101,101,54,101,87,101,101,101,101,52,101,93,101,101,101,101,53,101,97]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,95,101,101,101,101,101,101,96,101,101,101,101,101,101,92,101,101,101,101,101,90,91,101,100]},{"label":"great G-SHOCK world","data":[101,101,101,101,97,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,99,100,94,94,96,95,99,101,92,101,101,101,101,99,101,98,96,96,101,101,101,99,93,98]},{"label":"いろんなネットニュース速報","data":[101,101,101,101,101,86,91,101,95,101,101,26,61,63,50,101,101,81,86,101,44,46,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,101,99,101,99,82,84,101,82,83,75,101,51,44,48,101,37,40,45,101,49,47,27,101,41]},{"label":"黒いウワサ5ちゃんねる","data":[101,101,101,101,101,101,89,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,88,73]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,98,101,101,101,101,99,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,99,101,101,80,101,101,66,65,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,82,60,101,101,92,67,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101]},{"label":"あなたは『おもしろマガジン』","data":[101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,101,101,101,101,101,101,101,92,90,83,99,99,98,101,96,100,90,99,101,101,101,95,98,72,92,94]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 乃木りんく","data":[101,101,101,101,101,101,101,101,101,101,89,93,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,101,101,86,101,82,88,92,86,98,99,70,98,84,87,83,80,77,55,54]},{"label":"ふくよかまるみのピリカラ人生","data":[101,101,101,101,101,101,101,101,101,101,101,87,90,88,77,48,33,32,34,47,51,60,48,44,40,70,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,101,101,101,27,20,26,55,90,93,101,101,101,101,101,101,101,101,101,101]},{"label":"アニメ＆漫画 グッズ情報","data":[101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,71,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"生まれた時から反抗期","data":[101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,90,101,101,91,101,101,101,101,101,101,101,101,101]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,90,101,87,76,101,101,101,85,101,101,90]},{"label":"ゴシップポスト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,67,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,94,101,101,101,101,101]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,87,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,99,101,101,100,101,101,101,101,101,101,101,101]},{"label":"酔う(よう)さんの酔酔どうでしょう？","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,93,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,99,88,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,98,101,101,101,101,101]},{"label":"はいいろ速報@youtubeまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,23,44,101,101,101,101,101,101]},{"label":"ガレ速@フォロワー体験漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,52,41,42,48,43,43,44,42]},{"label":"証券非行被害者救済ボランティアのブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,65,101,101,101,101,101,101]},{"label":"おかえり、My little boy","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101]},{"label":"ききらら☆雑誌付録レビュー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,21,30,63,101,101,101]},{"label":"てにくまちゃん。のもっと不思議で怖い話","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,85,91,101,101,101,101]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101]},{"label":"阪和線の沿線から","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,61,101,101,101]},{"label":"【日本の皇室】天皇皇后両陛下と皇族方","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,53,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101]},{"label":"Jamのおうち　＊ごはんと器とインテリア＊","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,89,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,30,101,101]}];
var labels = ['2024-08-23','2024-08-24','2024-08-25','2024-08-26','2024-08-27','2024-08-28','2024-08-29','2024-08-30','2024-08-31','2024-09-01','2024-09-02','2024-09-03','2024-09-04','2024-09-05','2024-09-06','2024-09-07','2024-09-08','2024-09-09','2024-09-10','2024-09-11','2024-09-12','2024-09-13','2024-09-14','2024-09-15','2024-09-16','2024-09-17','2024-09-18','2024-09-19',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,2,2,2,2,2,2,3,3,1,1,2,2,2,1,1,2,2,2,1,1,4,3,4,2,2]},{"label":"はちま起稿","data":[2,3,4,5,3,4,4,6,5,6,6,3,3,3,3,3,4,4,3,3,3,6,4,2,4,5,4,4]},{"label":"ハムスター速報","data":[3,4,8,8,4,5,3,1,4,7,8,7,7,6,7,6,7,8,7,7,7,7,5,5,6,10,5,9]},{"label":"痛いニュース(ﾉ∀`)","data":[4,5,7,6,6,6,7,9,7,9,7,6,6,4,5,8,8,9,6,6,6,5,7,6,9,8,6,6]},{"label":"まめきちまめこニートの日常","data":[5,1,1,1,1,1,1,4,1,1,1,2,2,1,1,1,2,3,1,1,1,2,2,1,1,1,1,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[6,8,5,4,7,8,5,7,6,5,4,4,5,7,6,5,6,7,4,5,5,4,6,7,7,7,7,5]},{"label":"ニート極道「牧村ユタカ」","data":[7,6,3,3,8,7,8,5,3,2,2,5,4,5,4,4,3,2,5,4,4,3,3,3,2,3,3,1]},{"label":"暇つぶしニュース","data":[8,7,6,7,10,9,6,10,9,8,10,9,10,8,11,9,9,5,8,8,9,8,9,9,10,9,10,7]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,10,10,10,9,10,9,8,10,10,9,8,8,9,8,10,10,10,9,9,10,9,8,10,12,11,11,10]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[10,11,11,12,11,11,10,12,12,12,12,11,11,11,10,12,11,11,11,11,11,11,11,11,11,12,12,11]},{"label":"ガレ速@フォロワー体験漫画","data":[11,12,9,9,13,13,11,11,8,4,5,10,9,10,9,11,5,6,10,10,8,10,10,8,8,6,9,8]},{"label":"ヤゴヴのマンガ劇場","data":[12,13,13,11,12,12,13,13,11,11,11,12,12,12,12,13,19,40,43,43,32,32,34,31,28,26,23,22]},{"label":"わんこーる速報！","data":[13,14,14,14,14,14,16,17,13,13,17,14,15,15,16,16,14,12,15,17,14,14,13,13,13,16,16,15]},{"label":"哲学ニュースnwk","data":[14,9,12,13,5,3,12,14,16,15,13,13,13,14,13,17,16,16,12,13,17,13,12,12,5,2,8,12]},{"label":"【2ch】ニュー速クオリティ","data":[15,15,15,17,17,16,15,16,14,14,19,16,17,19,15,15,15,15,14,14,16,16,14,15,15,14,13,14]},{"label":"ねいろ速報さん","data":[16,19,20,20,15,18,21,21,21,21,22,15,20,17,17,20,18,17,17,20,22,21,19,16,17,13,15,17]},{"label":"ゴールデンタイムズ","data":[17,20,22,22,21,24,25,22,18,24,23,21,22,24,22,23,26,23,22,26,23,20,20,24,22,19,24,25]},{"label":"ラビット速報","data":[18,16,17,15,16,15,14,15,15,16,14,17,14,16,14,14,13,13,16,15,15,15,15,14,16,15,14,13]},{"label":"稲妻速報","data":[19,24,26,26,24,25,26,26,27,26,25,26,27,25,23,25,27,22,24,25,24,25,25,26,24,25,22,20]},{"label":"おーるじゃんる","data":[20,17,18,19,23,22,24,24,22,27,24,19,19,21,19,7,12,19,13,12,13,22,17,18,21,21,19,23]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[21,21,23,21,18,19,18,18,17,18,20,18,18,20,18,18,20,21,19,22,21,17,18,19,20,17,18,16]},{"label":"なんJ PRIDE","data":[22,23,19,18,20,21,23,19,19,22,21,23,24,23,20,19,21,20,18,21,20,24,22,21,19,20,21,21]},{"label":"日刊やきう速報","data":[23,22,16,16,22,20,20,20,24,19,18,24,21,18,21,22,17,18,20,19,19,12,16,17,14,18,20,18]},{"label":"ネギ速","data":[24,26,24,24,26,23,22,23,25,25,26,27,28,28,25,24,28,26,23,24,26,30,24,23,29,29,29,28]},{"label":"VIPPERな俺","data":[25,27,21,23,19,17,19,25,20,20,15,20,23,26,24,21,22,14,21,18,18,19,23,22,18,23,17,19]},{"label":"うしみつ-5chまとめ-","data":[26,25,25,25,25,27,27,27,23,23,27,28,26,29,26,26,25,27,25,27,28,27,26,25,26,24,25,24]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[27,29,34,33,32,33,32,34,29,28,33,52,31,30,42,34,24,24,35,33,27,31,28,27,25,40,44,32]},{"label":"スズぺぺの人生何とかなってます!!","data":[28,28,27,47,30,30,28,30,30,30,30,30,30,31,29,30,30,55,27,29,30,29,30,29,53,30,28,31]},{"label":"あんころの漫画日和","data":[29,39,31,27,31,38,35,31,32,48,39,34,33,36,35,33,57,78,31,31,34,47,44,37,34,50,45,39]},{"label":"馬鳥速報","data":[30,32,33,31,34,29,31,37,36,50,41,33,25,22,28,28,35,41,29,35,35,42,29,32,42,47,35,42]},{"label":"なんJクエスト","data":[31,30,28,28,27,31,29,35,34,29,29,32,32,33,33,35,31,25,28,30,31,34,31,30,32,31,30,30]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[32,33,30,30,35,26,36,36,28,31,28,29,29,32,30,27,29,28,26,23,25,23,21,20,23,27,26,26]},{"label":"IT速報","data":[33,34,36,41,42,46,42,29,33,32,32,25,35,34,27,32,32,30,30,32,36,40,32,33,27,28,27,34]},{"label":"オタク.com －オタコム－","data":[34,37,32,37,36,42,34,48,47,38,36,39,38,40,37,40,33,33,38,39,33,41,41,40,36,43,36,37]},{"label":"ぶる速-VIP","data":[35,41,35,38,45,37,38,39,41,37,38,38,43,47,34,39,43,38,41,45,39,37,47,48,43,34,37,36]},{"label":"芸能人の気になる噂","data":[36,40,38,42,43,40,44,43,43,36,43,41,39,39,41,36,34,36,39,44,40,39,40,39,35,35,40,40]},{"label":"乃木坂46まとめ 1/46","data":[37,35,50,44,40,28,37,38,42,52,57,42,51,42,39,54,61,46,33,57,46,54,61,34,38,45,31,38]},{"label":"カラパイア","data":[38,83,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"海外の万国反応記＠海外の反応","data":[39,42,39,40,52,52,62,46,52,40,45,50,42,49,44,44,49,48,44,48,53,50,46,50,51,41,38,53]},{"label":"カイカイ反応通信","data":[40,31,29,32,37,44,46,41,44,42,37,36,44,37,32,29,37,32,32,37,29,33,33,36,37,36,32,35]},{"label":"ついんてーる速報","data":[41,38,37,34,38,41,45,42,55,44,40,31,37,41,40,49,41,34,36,40,38,36,49,45,40,37,46,47]},{"label":"パチンコ・パチスロ.com","data":[42,47,47,57,33,47,41,56,37,39,50,46,47,55,59,62,63,67,53,42,45,64,64,49,44,70,63,45]},{"label":"カオスちゃんねる","data":[43,43,40,39,41,43,39,49,46,49,34,35,52,53,45,41,36,45,49,46,43,43,43,38,45,44,41,48]},{"label":"ぽん子の不倫スカッと漫画","data":[44,50,49,49,56,50,53,47,49,35,35,40,36,35,36,37,40,51,61,56,58,56,55,61,56,66,54,60]},{"label":"なんJ（まとめては）いかんのか？","data":[45,49,42,35,46,35,30,40,53,54,44,48,40,38,38,46,38,37,48,50,50,59,38,35,33,33,56,46]},{"label":"FF14速報","data":[46,46,71,60,48,54,67,66,58,72,77,57,45,50,53,52,69,72,54,52,37,48,65,55,74,74,62,69]},{"label":"NEWSぽけまとめーる","data":[47,45,43,45,47,51,40,45,48,41,46,45,50,46,43,45,44,49,50,55,48,51,48,47,41,46,42,49]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[48,55,41,46,57,48,61,53,57,45,42,49,49,52,50,38,50,53,57,49,47,52,37,43,48,51,48,41]},{"label":"まとめたニュース","data":[49,48,46,52,53,56,56,51,51,47,53,43,54,45,52,61,56,29,45,51,62,60,39,42,47,39,51,55]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[50,51,44,48,28,53,50,50,50,43,47,44,46,43,49,47,42,39,42,36,42,46,51,46,39,42,39,44]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[51,101,54,101,54,101,58,101,56,101,52,101,41,101,47,101,45,101,101,101,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[52,44,51,53,50,60,57,64,40,55,76,78,71,60,65,74,58,65,70,77,69,70,62,52,57,57,55,65]},{"label":"あにこ便｜アニメ感想サイト","data":[53,58,56,50,51,57,59,58,62,57,51,53,56,61,61,60,52,47,52,54,52,58,60,54,46,48,50,56]},{"label":"登山ちゃんねる","data":[54,61,60,63,64,65,68,73,66,61,58,69,89,78,83,76,79,69,65,71,75,62,70,79,65,78,78,74]},{"label":"投資ちゃんねる","data":[55,67,63,55,67,67,65,62,59,60,49,47,48,51,63,66,66,63,67,75,63,55,63,69,71,68,61,64]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[56,76,90,66,58,66,76,72,69,94,68,85,59,70,57,53,68,86,80,62,70,99,80,53,77,67,52,61]},{"label":"ぱんをたずねて2000里ちょい","data":[57,52,53,65,83,49,52,59,95,51,65,54,64,66,60,56,47,43,75,58,55,63,57,59,68,55,47,52]},{"label":"人間まおと愉快な仲間たち","data":[58,54,57,58,29,36,55,57,61,46,48,51,53,44,46,42,39,35,37,41,44,45,50,44,52,54,49,50]},{"label":"PS5速報！","data":[59,59,66,71,59,61,49,52,63,63,64,63,61,58,62,64,64,61,62,60,51,101,101,101,101,101,101,101]},{"label":"ポリー速報","data":[60,65,48,51,55,71,63,54,65,56,56,55,58,56,54,57,55,60,47,66,54,49,54,58,54,49,64,51]},{"label":"ガールズVIPまとめ","data":[61,56,59,61,61,55,60,61,64,64,60,58,57,65,51,58,48,54,58,64,57,44,58,57,50,53,58,57]},{"label":"はーとログ","data":[62,74,69,69,74,73,66,81,80,85,80,82,80,75,82,82,74,75,72,68,68,77,74,80,69,63,80,67]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[63,68,65,62,88,58,54,33,35,33,63,59,63,57,58,50,46,58,79,65,59,68,42,51,55,71,60,59]},{"label":"鈴木さん速報","data":[64,69,64,54,69,78,73,71,68,75,71,61,65,64,73,68,70,70,71,79,60,71,73,65,64,64,72,73]},{"label":"軍事・ミリタリー速報☆彡","data":[65,62,67,64,70,70,69,69,73,70,70,60,66,68,68,70,65,66,69,63,72,72,71,68,76,72,73,68]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[66,72,76,74,77,89,77,70,85,71,73,68,84,72,88,71,78,68,83,89,74,65,78,72,67,62,75,79]},{"label":"De速","data":[67,70,74,81,66,86,51,60,77,62,66,66,77,69,56,48,51,50,59,53,49,38,56,41,61,32,43,43]},{"label":"2chコピペ保存道場","data":[68,64,75,75,71,68,72,67,70,65,75,67,69,74,69,63,67,71,63,59,66,61,66,67,66,61,57,70]},{"label":"もちログ","data":[69,60,61,56,49,39,43,44,45,34,97,65,75,73,72,59,62,62,64,67,41,53,52,56,49,38,34,29]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[70,63,70,77,72,72,74,75,71,73,72,70,70,67,67,67,59,64,55,69,64,67,67,66,63,56,65,71]},{"label":"重役秘書リナ【完全版】","data":[71,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"サカラボ | サッカーまとめ速報","data":[72,84,80,78,78,95,82,97,90,74,74,77,93,96,76,65,82,89,90,80,71,87,100,100,90,89,85,100]},{"label":"ライフハックちゃんねる弐式","data":[73,66,62,89,76,69,71,74,74,78,69,62,60,59,55,69,71,73,51,72,73,69,72,71,72,60,76,75]},{"label":"絵日記でございます。","data":[74,78,101,82,91,93,96,100,96,93,101,96,99,85,89,83,96,76,60,78,87,84,83,85,101,101,90,94]},{"label":"ダイエット速報＠2ちゃんねる","data":[75,77,72,59,62,85,84,80,78,83,61,72,92,91,90,75,75,57,77,86,80,89,75,87,58,73,69,90]},{"label":"くまおのマンガ堂","data":[76,81,82,80,65,63,64,63,67,58,54,56,62,63,64,51,54,56,56,61,56,57,53,60,59,59,53,54]},{"label":"あいチャンネル","data":[77,36,87,29,79,34,83,32,38,96,31,37,91,27,74,31,88,31,85,38,88,28,27,81,30,22,71,27]},{"label":"ろぼ速VIP","data":[78,73,88,87,87,82,87,91,84,92,79,80,86,89,94,86,80,80,84,73,76,80,84,73,82,79,79,78]},{"label":"どでんちゃん’ｓマガジン","data":[79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[80,71,77,67,73,80,93,84,72,91,78,79,81,88,87,73,73,79,86,85,79,79,82,64,78,69,83,80]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[81,87,68,43,44,45,48,55,60,66,67,84,79,76,66,55,60,59,68,47,12,18,45,63,79,81,74,81]},{"label":"最強ジャンプ放送局","data":[82,86,84,88,63,81,81,90,81,76,88,73,88,79,75,80,85,82,73,84,77,78,86,77,87,75,81,83]},{"label":"チリツモブログ","data":[83,101,101,101,101,64,101,101,101,101,101,101,101,71,48,43,101,101,101,101,67,101,68,101,101,101,101,62]},{"label":"【2ch】コピペ情報局","data":[84,88,78,68,68,75,89,82,75,67,94,71,101,101,80,72,72,44,74,74,96,85,81,84,70,76,77,77]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[85,89,92,85,82,88,85,93,88,79,84,76,94,83,86,85,86,88,82,83,83,82,87,88,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[86,90,91,92,96,59,70,89,83,87,95,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,70,84]},{"label":"お料理速報","data":[87,96,101,95,85,83,75,83,98,99,83,90,96,101,85,95,90,83,99,94,78,86,94,90,80,83,82,89]},{"label":"シカブロ","data":[88,85,83,73,101,77,101,99,76,82,90,101,101,81,84,88,98,93,101,101,101,96,101,97,86,101,101,101]},{"label":"大艦巨砲主義！","data":[89,80,86,94,84,90,90,86,82,95,92,74,83,94,91,92,77,90,93,87,89,91,89,94,85,94,86,86]},{"label":"まとめロッテ！","data":[90,101,100,101,101,99,101,101,101,101,86,92,87,101,101,101,101,100,95,99,101,92,92,101,84,95,101,101]},{"label":"えび通","data":[91,91,97,93,92,96,94,95,93,101,98,98,97,98,101,94,100,101,89,96,100,101,95,78,95,99,99,101]},{"label":"やみ速@なんJ西武まとめ","data":[92,100,93,83,101,92,91,85,101,77,59,75,76,92,97,101,84,98,88,90,94,94,98,70,60,80,68,72]},{"label":"ろくのコミックブログ","data":[93,82,89,76,81,76,78,78,86,86,81,86,72,77,81,77,83,77,87,93,84,81,85,89,88,85,101,101]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[94,95,95,90,93,84,92,98,89,89,87,83,90,84,92,90,92,87,91,91,99,93,91,92,89,82,88,91]},{"label":"ちば通信 - 千葉県千葉市の地域情報サイト","data":[95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[96,93,79,72,90,97,79,68,91,68,62,81,73,86,79,79,87,74,81,81,65,74,77,75,83,77,59,63]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[97,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,91,101,101,101,101,101,101,96,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[98,97,101,84,94,101,101,101,101,101,101,97,95,99,78,101,81,101,101,101,101,101,99,101,101,101,91,101]},{"label":"ジャンプ速報","data":[99,94,96,99,80,87,95,96,101,101,99,91,101,90,101,89,97,95,100,95,91,98,79,74,94,90,93,85]},{"label":"資格ちゃんねる","data":[100,101,101,98,101,101,97,88,79,90,82,89,85,97,95,87,76,92,101,101,98,88,88,101,101,98,89,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,18,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,53,85,101,60,74,101,101,101,101,101,95,67,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101]},{"label":"禍々マガジン","data":[101,57,58,36,39,32,33,28,31,17,16,22,16,13,31,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"推し沼のBlog","data":[101,75,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,79,101,101,101,101,47,65,101,101,101,101,68,87,101,84,91,84,98,101,101,101,101,76,73,97,92,96]},{"label":"稼げるまとめ速報","data":[101,92,99,86,98,91,88,101,94,97,101,101,101,93,99,97,101,99,97,101,95,90,101,95,99,86,84,88]},{"label":"かぞくちゃんねる","data":[101,98,101,96,99,101,101,92,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,101,101]},{"label":"はむらの毎日マンガ","data":[101,101,45,70,101,101,101,101,54,84,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,58]},{"label":"模型のアサヒヤ","data":[101,101,52,101,101,79,101,101,101,59,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,101,73,79,86,101,100,87,97,81,89,94,82,95,93,93,89,96,76,92,82,73,76,96,101,92,94,76]},{"label":"えみコミック！","data":[101,101,81,97,95,101,101,101,101,101,101,101,74,80,77,81,101,101,101,100,92,101,101,101,101,101,101,101]},{"label":"すらるど - 海外の反応","data":[101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,23,42,101,101,101,101,101,101,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,91,101,101,101,101,101,101,101,101,101,101,100,78,101,101,101,98,81,101,101,101,101,101,101,101]},{"label":"WorldFootballNewS","data":[101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"★魔法のアトリエ★無料塗り絵","data":[101,101,101,101,75,101,101,101,101,101,85,101,101,101,101,101,95,101,101,101,101,75,101,83,101,101,101,101]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,89,101,101,101,101,101,101,101,101,48,71,101,101,101,66,76,101,101,101,101,101,101,101,101]},{"label":"乃木坂46まとめ 乃木りんく","data":[101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,94,81,78,101,97,101,101,98,100,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,62,101,101,101,101,101,101,78,101,101,101,101,101,101,70,101,101,101,101,101,101,67,101]},{"label":"バイク速報","data":[101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,16,86,101,101,101,101,101,101,92]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,100,101,101,100,101,101,99,100,101,101,100,101,101,96,101,101,101,101,101,101,93,101,97]},{"label":"ツイッター速報","data":[101,101,101,101,101,101,17,3,26,101,101,64,34,62,98,101,101,94,34,28,101,26,36,82,101,101,101,101]},{"label":"えいじの食べ物ブログ","data":[101,101,101,101,101,101,80,76,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,101,101,101,86,77,39,53,55,101,55,54,70,101,53,52,40,34,101,35,35,28,31,101,33,33]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101]},{"label":"はっちゃか","data":[101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"こおりやま通信 - 福島県郡山市の地域情報サイト","data":[101,101,101,101,101,101,101,79,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101]},{"label":"ニュース30over","data":[101,101,101,101,101,101,101,94,101,101,91,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,95,101]},{"label":"たくあんムスメたち。","data":[101,101,101,101,101,101,101,101,87,88,101,101,101,101,101,101,101,101,101,88,85,83,93,101,97,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,96,101,101,101,101,90,101,90,101,101,101,101,93]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,99,98,96,93,101,100,101,101,101,101,101,101,101,101,96,99,91,84,101,101]},{"label":"犬のかがやきブログ","data":[101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"気になる芸能まとめ","data":[101,101,101,101,101,101,101,101,101,80,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オーガch.-パズドラ攻略まとめ速報","data":[101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,82]},{"label":"ゲーム実況者速報＠配信者まとめニュース","data":[101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,93,93,87,100,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダンナ様は安月給","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,93,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,85,94,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,46,101,101,101,101,101,101,101,101,101]},{"label":"スカっとクミさん！戦う女の物語","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,100,101,101]},{"label":"たかさき通信 - 群馬県高崎市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,61,76,101,101,101,101,101,101]},{"label":"さぷら伊豆！渋谷の平日・伊豆の休日","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,91,101,101,101,101]},{"label":"PS5速報！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,66,59,62,62,65,66,66]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,81,52,87,98]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101]},{"label":"たっきーママオフィシャルブログ「おしゃべりな台所」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,58,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,97,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95]},{"label":"ねこいもブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99]}];
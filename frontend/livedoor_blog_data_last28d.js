var labels = ['2024-11-02','2024-11-03','2024-11-04','2024-11-05','2024-11-06','2024-11-07','2024-11-08','2024-11-09','2024-11-10','2024-11-11','2024-11-12','2024-11-13','2024-11-14','2024-11-15','2024-11-16','2024-11-17','2024-11-18','2024-11-19','2024-11-20','2024-11-21','2024-11-22','2024-11-23','2024-11-24','2024-11-25','2024-11-26','2024-11-27','2024-11-28','2024-11-29',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,3,1,2,2,1,3,3,2,2,1,1,1,3,4,3,3,2,3,2,3,2,3,3,4,2]},{"label":"まめきちまめこニートの日常","data":[2,1,1,1,3,1,1,2,4,1,1,1,2,10,3,1,1,1,2,3,1,1,2,3,1,1,2,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,3,3,2,2,3,4,3,5,4,7,5,6,4,6,6,5,5,4,6,7,5,5,4,4,4,6,4]},{"label":"はちま起稿","data":[4,4,4,4,4,4,3,4,6,6,4,4,4,3,5,5,6,6,5,4,6,6,4,6,5,5,5,5]},{"label":"ハムスター速報","data":[5,7,7,7,6,6,6,5,10,8,8,6,5,5,4,4,3,4,6,5,5,4,7,5,8,7,8,6]},{"label":"痛いニュース(ﾉ∀`)","data":[6,5,5,5,5,5,5,6,9,9,6,7,7,6,7,8,7,7,8,9,8,9,9,9,7,6,7,8]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[7,8,8,8,7,7,8,7,12,10,10,10,10,9,9,10,10,10,10,10,11,10,11,11,11,10,10,10]},{"label":"暇つぶしニュース","data":[8,6,6,6,8,8,7,8,8,7,5,9,9,8,10,9,9,9,9,8,10,7,8,10,9,9,11,9]},{"label":"哲学ニュースnwk","data":[9,10,13,13,12,10,10,11,14,13,11,14,13,12,12,13,13,13,14,14,15,16,15,8,13,15,17,11]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[10,9,9,9,9,9,9,9,13,12,12,11,11,11,11,12,12,12,11,11,12,11,12,12,12,11,12,12]},{"label":"おーるじゃんる","data":[11,13,14,21,21,13,12,13,16,17,16,13,20,19,15,22,21,15,15,16,19,21,25,25,23,21,29,25]},{"label":"なんJ PRIDE","data":[12,11,11,10,10,12,15,16,22,19,18,21,16,15,20,17,16,22,21,24,27,22,19,18,19,20,24,28]},{"label":"ヤゴヴのマンガ劇場","data":[13,12,12,12,11,20,42,40,32,31,30,31,29,23,14,15,14,14,13,13,14,14,13,14,16,13,13,13]},{"label":"日刊やきう速報","data":[14,21,10,11,14,17,22,22,19,22,23,20,21,24,23,20,20,27,27,29,23,13,17,17,10,16,27,26]},{"label":"わんこーる速報！","data":[15,15,16,18,17,16,18,19,18,14,15,15,15,17,17,18,19,18,16,15,16,17,14,15,17,18,16,16]},{"label":"【2ch】ニュー速クオリティ","data":[16,18,18,16,15,15,14,12,15,20,17,17,18,20,18,14,18,17,23,21,21,19,18,21,21,17,18,17]},{"label":"ラビット速報","data":[17,14,15,17,13,11,11,18,20,18,19,18,19,16,19,16,15,20,17,17,20,20,21,22,22,22,20,21]},{"label":"ねいろ速報さん","data":[18,17,17,14,16,14,13,14,17,15,14,16,17,14,16,19,17,16,18,20,22,24,20,19,18,23,21,18]},{"label":"ゴールデンタイムズ","data":[19,24,24,20,24,23,16,15,28,23,22,23,22,18,24,28,25,19,20,25,29,28,26,28,30,30,30,29]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[20,20,23,24,20,18,17,21,26,27,20,19,25,25,21,23,27,21,19,22,25,26,28,23,26,25,26,24]},{"label":"VIPPERな俺","data":[21,19,21,19,18,24,19,17,23,24,25,24,26,21,25,25,23,25,22,18,17,23,31,27,24,24,23,22]},{"label":"ヒマラジオンのブログ！ By 禿武者 小野永次（サンミュージック名古屋に所属している、変態役・ハゲ役・おじさん役担当♪）たまにYoutberとして動画も投稿しています。（ひまらじおん）","data":[22,22,19,22,19,19,20,20,25,25,24,27,27,26,26,24,30,28,26,26,26,27,24,26,29,28,22,20]},{"label":"De速","data":[23,28,25,15,22,21,21,23,30,34,28,26,40,45,32,45,47,47,50,49,37,50,54,67,58,63,52,49]},{"label":"あいチャンネル","data":[24,76,30,80,101,27,77,30,87,40,93,101,34,77,35,83,101,33,79,38,87,37,90,39,80,101,39,93]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[25,25,28,25,29,35,27,24,24,28,26,33,35,35,28,30,28,23,34,32,31,31,33,30,31,31,31,33]},{"label":"なんJクエスト","data":[26,26,27,28,25,29,28,29,27,29,29,29,30,27,27,26,24,29,30,30,33,30,30,32,32,29,33,30]},{"label":"スズぺぺの人生何とかなってます!!","data":[27,29,72,30,26,26,26,26,29,89,51,67,91,61,92,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うしみつ-5chまとめ-","data":[28,31,31,26,27,28,25,27,33,33,27,28,28,30,30,27,31,30,28,27,28,29,29,29,28,27,28,27]},{"label":"IT速報","data":[29,27,29,27,31,25,24,25,31,32,31,40,31,40,33,40,44,32,33,33,34,32,32,38,34,34,34,35]},{"label":"人間まおと愉快な仲間たち","data":[30,37,42,37,30,31,35,42,43,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ネギ速","data":[31,30,34,29,28,22,23,34,40,30,32,30,47,38,39,37,36,45,43,37,38,35,37,36,33,36,38,38]},{"label":"乃木坂46まとめ 1/46","data":[32,41,32,23,23,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"稲妻速報","data":[33,34,38,35,33,33,29,28,39,37,39,34,38,33,40,35,35,34,35,35,36,33,36,40,35,35,36,36]},{"label":"カイカイ反応通信","data":[34,38,43,42,38,40,37,38,49,49,48,45,46,46,50,32,43,36,37,34,40,34,43,49,45,46,47,47]},{"label":"芸能人の気になる噂","data":[35,33,39,38,40,38,38,41,38,41,45,42,45,39,43,36,39,43,45,45,42,40,39,42,38,43,41,41]},{"label":"ぱんをたずねて2000里ちょい","data":[36,32,60,39,32,48,63,32,37,54,37,36,49,63,42,33,51,44,32,51,58,44,35,52,39,32,54,59]},{"label":"オタク.com －オタコム－","data":[37,42,35,31,35,36,36,36,41,35,34,35,33,42,44,39,41,35,41,40,44,43,38,37,40,38,37,39]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[38,39,48,40,42,34,41,47,47,44,43,44,44,29,29,31,33,38,48,46,49,47,46,45,47,45,53,37]},{"label":"もちログ","data":[39,51,59,33,41,43,40,44,44,42,36,43,32,37,37,29,29,24,24,19,18,18,16,16,15,14,15,14]},{"label":"ぶる速-VIP","data":[40,35,33,32,34,37,34,33,45,43,33,32,41,41,38,38,40,46,52,44,39,36,34,41,44,44,49,42]},{"label":"カオスちゃんねる","data":[41,40,46,41,37,42,30,37,35,38,40,39,43,44,46,42,45,42,39,42,43,42,42,43,41,37,35,43]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[42,43,55,63,56,46,48,51,57,68,46,50,59,56,51,53,48,52,53,59,53,75,89,65,57,49,57,50]},{"label":"パラノーマルちゃんねる | 2ch怖い話まとめ","data":[43,89,51,61,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[44,45,44,47,36,39,39,31,36,39,35,41,39,43,41,51,42,39,40,43,35,45,41,34,37,39,40,40]},{"label":"NEWSぽけまとめーる","data":[45,49,54,49,49,45,46,49,54,51,50,48,50,49,55,52,50,49,49,52,54,49,47,54,51,52,48,48]},{"label":"ポリー速報","data":[46,46,41,48,53,55,56,50,52,65,74,61,58,58,56,57,61,51,55,60,56,39,44,47,43,48,55,52]},{"label":"まとめたニュース","data":[47,36,36,43,39,30,45,48,51,48,44,53,51,47,48,49,38,41,47,48,50,52,52,50,49,58,46,53]},{"label":"なんJ（まとめては）いかんのか？","data":[48,23,20,34,43,44,66,56,55,45,49,49,48,50,61,55,49,48,51,47,46,48,40,31,36,40,44,46]},{"label":"ガールズVIPまとめ","data":[49,58,58,57,52,54,51,61,60,56,55,54,57,52,58,60,53,55,54,53,55,55,53,53,54,53,58,57]},{"label":"馬鳥速報","data":[50,53,74,77,47,47,33,45,58,57,54,25,23,31,31,43,34,37,44,50,48,51,56,48,46,33,32,31]},{"label":"海外の万国反応記＠海外の反応","data":[51,52,61,55,51,49,43,46,53,55,53,51,54,51,53,54,52,54,56,39,52,46,48,44,48,42,51,58]},{"label":"えみコミック！","data":[52,56,52,101,46,32,31,39,48,52,47,38,36,34,36,50,80,53,42,41,41,38,55,99,101,57,43,45]},{"label":"あにこ便｜アニメ感想サイト","data":[53,48,53,51,48,52,49,52,56,46,52,55,56,53,54,48,46,50,57,58,57,56,45,46,53,51,59,51]},{"label":"パチンコ・パチスロ.com","data":[54,50,45,54,44,41,47,53,46,47,42,52,52,32,47,44,37,31,38,36,47,54,51,55,42,47,42,44]},{"label":"ベイスターズ速報＠なんJ","data":[55,72,65,45,77,75,82,89,92,82,90,81,84,96,101,101,101,101,101,97,92,90,95,101,101,101,89,100]},{"label":"【2ch】コピペ情報局","data":[56,66,68,62,70,76,88,83,84,59,77,62,77,72,72,81,70,56,61,72,75,74,71,84,68,92,64,64]},{"label":"軍事・ミリタリー速報☆彡","data":[57,60,73,68,57,59,54,65,68,61,65,64,61,70,73,71,58,61,70,68,68,66,72,60,62,68,66,61]},{"label":"にいがた速報 - 新潟県新潟市の地域情報サイト","data":[58,54,50,58,69,68,52,57,34,36,41,59,64,57,59,47,26,40,36,31,45,41,49,51,56,50,60,65]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[59,68,75,56,55,60,55,59,66,73,59,57,62,65,65,65,65,59,31,56,51,53,58,59,61,67,61,63]},{"label":"ぽん子の不倫スカッと漫画","data":[60,63,71,64,60,70,61,70,81,80,81,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,99]},{"label":"野球お絵かき@なんJまとめ","data":[61,101,64,52,75,99,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[62,69,62,53,58,53,76,58,59,71,64,60,55,60,68,64,57,69,85,82,62,68,63,80,82,77,80,81]},{"label":"デジタルニューススレッド","data":[63,64,80,66,64,67,70,76,73,78,63,65,63,75,70,69,63,60,63,61,70,71,66,57,67,71,69,69]},{"label":"チリツモブログ","data":[64,101,101,101,61,101,101,54,101,101,101,101,66,59,49,101,101,101,67,101,101,101,101,101,101,65,101,101]},{"label":"鈴木さん速報","data":[65,75,83,70,67,62,65,71,65,72,69,69,73,73,67,72,60,67,69,65,64,63,78,83,69,56,65,66]},{"label":"はーとログ","data":[66,59,77,73,87,72,74,66,63,75,79,82,65,76,74,73,62,73,71,67,77,64,60,75,70,73,75,70]},{"label":"2chコピペ保存道場","data":[67,77,67,71,66,50,50,67,62,58,57,66,70,68,62,56,64,63,62,57,66,69,65,58,59,64,67,71]},{"label":"シカブロ","data":[68,44,56,72,62,93,101,101,101,101,98,101,101,54,63,58,77,72,93,86,101,96,80,101,100,101,101,101]},{"label":"PS5速報！","data":[69,71,76,69,74,71,60,64,76,79,75,75,71,66,69,77,74,80,76,69,74,61,68,72,64,74,71,60]},{"label":"ライフハックちゃんねる弐式","data":[70,62,70,59,73,79,62,82,67,67,68,70,76,84,84,85,68,91,81,62,72,58,73,68,63,59,62,67]},{"label":"今日速2ch","data":[71,80,95,93,90,90,86,98,101,60,60,98,95,81,89,88,79,82,68,54,82,86,61,64,79,83,81,83]},{"label":"登山ちゃんねる","data":[72,74,89,60,71,77,68,81,61,76,61,78,81,69,66,76,66,71,74,70,59,78,59,70,66,70,76,62]},{"label":"鷹速@ホークスまとめブログ","data":[73,96,49,36,59,100,96,99,89,95,85,72,79,79,101,100,96,98,87,101,88,92,97,74,96,101,99,101]},{"label":"おとの漫画","data":[74,93,101,101,96,57,44,62,94,101,92,58,60,55,57,70,101,75,60,64,67,59,87,101,81,54,56,54]},{"label":"MLB NEWS@まとめ","data":[75,55,69,78,80,98,99,77,74,96,101,101,99,99,95,92,82,89,101,90,94,93,81,95,92,94,101,101]},{"label":"投資ちゃんねる","data":[76,70,82,74,65,61,69,73,79,70,76,73,74,74,82,79,72,77,73,63,79,79,76,78,74,80,72,77]},{"label":"ダイエット速報＠2ちゃんねる","data":[77,79,93,79,72,101,94,97,90,77,91,74,67,98,97,67,69,84,84,76,80,84,77,76,73,78,73,82]},{"label":"くまおのマンガ堂","data":[78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[79,65,78,65,63,65,59,79,71,53,62,56,68,64,64,68,56,62,58,66,65,81,50,66,71,60,45,55]},{"label":"ふくよかまるみのピリカラ人生","data":[80,57,57,97,101,101,101,72,69,101,101,101,101,101,101,89,101,101,101,101,71,73,101,94,90,101,101,101]},{"label":"ろぼ速VIP","data":[81,82,81,75,81,87,83,85,72,62,70,83,90,86,79,75,67,78,78,83,78,83,57,79,85,81,63,68]},{"label":"FF14速報","data":[82,86,91,87,79,81,64,74,75,64,58,47,37,48,52,61,55,57,65,55,60,62,74,69,65,55,50,56]},{"label":"気団まとめ-噫無情-｜嫁・浮気・メシマズ","data":[83,73,88,92,83,89,87,90,85,86,88,90,88,91,87,93,88,86,101,101,61,72,84,81,78,86,83,80]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[84,61,101,84,54,56,53,101,93,69,56,68,87,71,85,62,59,83,64,79,63,60,88,63,50,62,97,95]},{"label":"大艦巨砲主義！","data":[85,83,84,83,78,58,58,78,78,81,78,80,97,82,76,82,78,66,82,74,86,77,85,86,77,89,82,75]},{"label":"絵日記でございます。","data":[86,67,63,67,89,83,81,87,80,88,101,84,85,85,91,99,84,87,101,80,76,82,101,88,89,82,79,88]},{"label":"最強ジャンプ放送局","data":[87,84,94,76,84,85,71,84,82,85,66,79,80,67,81,84,81,74,88,84,91,87,92,90,75,88,87,85]},{"label":"資格ちゃんねる","data":[88,92,97,101,86,69,93,69,86,97,101,85,78,88,83,90,91,70,75,93,97,101,101,98,83,75,70,90]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[89,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101]},{"label":"ろくのコミックブログ","data":[90,90,86,101,68,96,67,92,101,101,96,99,101,101,101,101,100,96,101,101,101,101,101,101,101,101,100,101]},{"label":"稼げるまとめ速報","data":[91,99,79,89,94,73,72,68,70,83,73,77,82,78,86,101,87,81,77,78,84,76,82,89,76,87,86,89]},{"label":"やみ速@なんJ西武まとめ","data":[92,78,85,88,93,86,78,94,64,66,67,63,75,62,71,74,54,58,72,81,69,67,75,71,72,66,92,74]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[93,87,90,96,100,97,90,93,83,94,94,96,96,93,88,86,83,93,96,94,93,91,83,87,84,93,84,84]},{"label":"阪神タイガースちゃんねる","data":[94,101,98,86,101,101,57,101,101,92,84,87,83,36,60,101,86,68,86,92,101,101,62,62,27,69,78,73]},{"label":"ねこいもブログ","data":[95,81,101,101,97,88,101,101,88,101,97,86,101,80,77,78,101,92,89,95,101,89,101,101,87,85,85,87]},{"label":"サカラボ | サッカーまとめ速報","data":[96,91,100,85,99,101,85,80,101,90,87,88,94,101,78,66,90,85,95,73,81,85,101,91,99,98,95,101]},{"label":"五箇野人の海外旅日記","data":[97,101,101,101,76,64,89,101,101,101,80,71,72,92,101,101,101,101,101,101,89,100,101,101,101,76,101,78]},{"label":"キチガイママまとめ保管庫","data":[98,101,101,101,101,101,91,101,101,101,101,101,101,101,100,101,101,97,97,100,98,94,101,101,101,101,94,94]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[99,97,101,101,82,95,101,101,101,101,101,101,101,101,101,101,101,101,90,96,101,101,100,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[100,101,101,98,101,101,101,101,101,50,95,101,101,101,80,101,95,101,101,85,101,57,67,85,101,72,3,86]},{"label":"しばたまブログ","data":[101,16,26,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,27,35,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,47,47,44,101,51,32,35,42,101,38,37,42,101,45,34,32,101,29,28,30,65,22,20,20,19,68,19]},{"label":"模型のアサヒヤ","data":[101,85,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,88,92,91,98,92,92,95,96,84,83,91,92,90,90,80,73,88,83,88,96,88,86,92,88,96,91,91]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,94,101,101,101,91,101,91,101,100,101,101,101,101,101,91,101,90,101,99,101,97,101,100,101,101,101,101]},{"label":"まとめロッテ！","data":[101,95,66,99,85,66,80,101,50,63,82,76,69,87,101,101,71,64,66,75,73,80,70,73,60,90,101,72]},{"label":"バイク速報","data":[101,98,101,101,101,101,97,100,101,101,101,97,101,101,94,101,101,101,101,101,101,101,101,101,97,100,101,101]},{"label":"竜速（りゅうそく）","data":[101,100,96,90,91,101,101,101,101,93,89,100,93,101,93,101,101,101,91,98,100,95,96,96,98,101,93,101]},{"label":"ツイッター速報","data":[101,101,22,50,45,94,101,101,1,16,71,101,12,28,75,41,101,101,101,101,4,12,69,101,101,61,19,32]},{"label":"マンガと私と猫ブログ。","data":[101,101,37,46,101,101,101,101,101,26,72,101,101,101,34,46,101,101,101,71,32,101,101,33,55,97,101,34]},{"label":"いろんなネットニュース速報","data":[101,101,40,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ってなんじぇですかー","data":[101,101,87,81,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,99,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,59,89,101,101,101,101,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,101,82,95,101,101,96,97,101,101,93,101,101,101,101,94,101,101,101,83,101,101,101,101,101,101,101]},{"label":"かなざわ速報 - 石川県金沢市の地域情報サイト","data":[101,101,101,95,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[101,101,101,100,101,80,98,86,95,98,100,95,89,83,96,95,76,76,98,91,95,98,79,93,86,84,98,96]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,50,101,95,101,101,101,101,46,101,94,101,101,101,101,46,101,85,101,101,101,101,41,101,76]},{"label":"大和とぴっく-やまとぴ","data":[101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,101,101,63,73,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,74,101,101,101,101,101,101,53,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,82,79,63,77,87,101,92,101,101,101,101,101,100,94,87,90,70,64,61,52,79,77,79]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,101,84,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101]},{"label":"カナダと鬱と私 -バンクーバーでマイペース生活-","data":[101,101,101,101,101,101,84,75,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニート極道「牧村ユタカ」","data":[101,101,101,101,101,101,101,10,2,2,3,3,3,2,2,2,2,2,1,1,2,3,1,1,2,2,1,1]},{"label":"ガレ速@フォロワー体験漫画","data":[101,101,101,101,101,101,101,43,7,5,9,8,8,7,8,7,8,8,7,7,9,8,6,7,6,8,9,7]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[101,101,101,101,101,101,101,55,21,21,21,22,24,22,22,21,22,26,25,23,24,25,23,24,25,26,25,23]},{"label":"まるごし刑事","data":[101,101,101,101,101,101,101,60,11,11,13,12,14,13,13,11,11,11,12,12,13,15,10,13,14,12,14,15]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,99,101,101,89,101,100,101,101,101,99,99,101,101,99,98,101,95,99,101,97]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,100,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"すや子のブログ","data":[101,101,101,101,101,101,101,101,101,74,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"坂道まとめ速報","data":[101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"猫だらけ","data":[101,101,101,101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"とやま速報 - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,100,89,101,96,89,101,100,101,101,101,101,101,101,101,101,101]},{"label":"Mizukiオフィシャルブログ「奇跡のキッチン」","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ああ言えばForYou","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,94,101,95,101,101,101,101,99,101,101,101,101,101]},{"label":"ぁゃιぃ(*ﾟーﾟ)NEWS 2nd","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"うみこのおとぼけぐらし","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,59,101,94,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,63,85,101,101,101,101,101,94,97,101,101,101,101]},{"label":"サカサカ10【サッカーまとめ速報】","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,77,101,101,101,101,101,101,101,101]},{"label":"守口・門真つーしん","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ほわわん子育て絵日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"【日本の皇室】天皇皇后両陛下と皇族方","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101,101,101,101]},{"label":"常識的に考えた","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,77,91,101,101,101]},{"label":"なんJ政治ネタまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,79,101,101,101,101,101,101,101,101,101,101]},{"label":"Aqours with ANISONGS ～アニソン地位向上委員会～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,65,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101,101]},{"label":"ラーメン食べたら書くブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,101,101,101,101,101]},{"label":"櫻坂46まとめもり～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,82,101,101,101,101]},{"label":"闇落ち女子トーク","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,93,101,93,95,88,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,56,94,101,101,101]},{"label":"低空飛行キッチン（調理師免許）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,101]},{"label":"イディルシャイア居住区","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,92]},{"label":"一般社団法人 関東交通犯罪遺族の会（あいの会）","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98]}];
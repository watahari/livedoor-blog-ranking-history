var labels = ['2023-05-29','2023-05-30','2023-05-31','2023-06-01','2023-06-02','2023-06-03','2023-06-04','2023-06-05','2023-06-06','2023-06-07','2023-06-08','2023-06-09','2023-06-10','2023-06-11','2023-06-12','2023-06-13','2023-06-14','2023-06-15','2023-06-16','2023-06-17','2023-06-18','2023-06-19','2023-06-20','2023-06-21','2023-06-22','2023-06-23','2023-06-24','2023-06-25',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,1,1,1,1,1,1,1,1,1,2,6,2,1,1,1,1,1,7,2,1,1,1,1,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,2,2,2,2,2,2,2,2,2,4,2,1,2,2,2,2,2,1,1,2,2,2,2,3,2,2,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[3,5,6,4,5,5,4,3,4,6,8,5,5,5,3,5,3,5,4,3,3,3,4,7,6,6,7,5]},{"label":"はちま起稿","data":[4,3,4,3,4,4,3,4,3,4,6,4,3,3,4,3,4,3,3,4,4,5,5,6,4,3,4,4]},{"label":"ハムスター速報","data":[5,4,3,5,3,3,5,5,5,3,7,3,4,4,5,4,5,4,2,5,5,4,3,5,5,5,3,6]},{"label":"痛いニュース(ﾉ∀`)","data":[6,6,7,7,6,6,6,6,7,8,9,7,6,6,6,6,6,7,6,7,7,7,7,8,7,7,5,8]},{"label":"アルファルファモザイク","data":[7,7,9,9,7,7,8,8,9,11,12,12,8,10,10,11,12,12,10,10,12,10,8,10,10,12,11,12]},{"label":"BIPブログ","data":[8,10,13,15,16,16,16,21,16,16,18,20,16,18,21,27,21,18,20,22,20,12,15,17,16,17,17,18]},{"label":"暇つぶしニュース","data":[9,8,8,8,8,8,7,7,8,10,10,11,9,8,11,8,8,8,8,9,9,8,9,11,12,9,9,10]},{"label":"【2ch】ニュー速クオリティ","data":[10,12,11,13,10,9,9,10,11,13,15,14,12,11,12,13,15,15,13,14,16,14,18,19,15,15,15,17]},{"label":"哲学ニュースnwk","data":[11,9,10,10,11,11,13,13,12,12,13,13,10,9,14,12,13,10,12,13,13,15,11,15,11,10,13,16]},{"label":"なんJ PRIDE","data":[12,13,15,12,9,10,10,11,14,15,17,18,14,14,16,20,20,17,18,18,17,22,22,23,20,24,26,22]},{"label":"山田全自動のあるある日記","data":[13,29,38,11,29,59,89,52,43,66,31,19,18,17,15,25,16,20,21,37,51,39,14,30,46,47,40,46]},{"label":"わんこーる速報！","data":[14,14,17,22,17,15,19,16,17,19,23,23,19,19,19,19,23,22,23,20,21,20,21,20,22,20,19,19]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[15,15,14,14,14,12,12,14,15,14,14,16,15,13,17,16,17,19,15,15,18,21,19,22,17,16,18,20]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[16,17,18,16,20,20,25,23,21,20,20,17,13,15,9,10,7,6,5,6,6,6,6,9,8,8,6,7]},{"label":"おうまがタイムズ","data":[17,11,16,19,12,14,17,18,26,25,29,28,27,22,18,18,18,24,17,30,27,16,25,27,23,32,21,32]},{"label":"ヤゴヴのマンガ劇場","data":[18,18,20,21,15,13,11,9,10,9,11,10,7,7,7,9,9,9,11,12,10,9,10,14,14,13,31,44]},{"label":"世にも奇妙ななんかの話","data":[19,53,21,23,27,25,61,101,98,101,101,101,101,101,101,101,101,72,101,100,101,101,101,85,101,101,90,101]},{"label":"NEWSぽけまとめーる","data":[20,23,30,20,26,17,23,19,19,18,21,22,20,21,30,21,24,16,27,27,24,19,24,24,28,28,29,30]},{"label":"ねいろ速報さん","data":[21,16,23,27,24,23,22,17,13,17,25,24,23,23,20,15,22,23,24,23,22,18,12,21,18,21,25,21]},{"label":"うしみつ-5chまとめ-","data":[22,25,32,24,21,24,31,30,32,34,32,35,32,28,33,32,27,33,35,33,28,37,41,38,40,38,32,35]},{"label":"日刊やきう速報","data":[23,30,33,26,22,31,24,22,25,28,5,8,25,24,24,35,28,14,16,19,25,23,30,25,24,40,33,29]},{"label":"もちログ","data":[24,19,52,50,39,38,41,39,35,39,37,34,24,26,22,23,19,21,22,17,14,13,13,16,13,11,12,11]},{"label":"稲妻速報","data":[25,22,26,30,19,18,28,25,18,22,22,25,22,27,26,22,26,27,26,25,29,24,31,29,26,30,27,23]},{"label":"ぶる速-VIP","data":[26,24,19,18,13,21,21,29,30,30,26,27,21,25,23,26,25,29,25,21,15,17,20,34,32,18,16,15]},{"label":"VIPPERな俺","data":[27,27,31,25,31,35,34,28,22,35,24,36,34,33,42,28,32,32,38,34,30,38,39,36,29,25,37,37]},{"label":"ラビット速報","data":[28,32,35,33,30,32,27,27,27,31,35,32,31,31,32,38,31,26,30,29,31,29,34,32,38,31,35,31]},{"label":"ふくよかまるみのピリカラ人生","data":[29,26,25,29,28,26,26,26,23,26,27,31,29,30,31,29,29,25,31,24,26,26,26,28,27,26,24,24]},{"label":"なんJクエスト","data":[30,20,22,28,25,22,18,24,24,24,28,29,28,32,27,24,30,35,36,31,37,27,29,26,33,27,22,25]},{"label":"乃木坂46まとめ 1/46","data":[31,37,28,42,38,48,36,44,48,47,43,44,38,42,36,44,43,41,37,42,36,36,37,50,49,42,46,42]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[32,39,47,53,50,43,38,37,42,40,41,46,44,46,49,51,48,51,48,49,50,51,45,47,48,53,52,56]},{"label":"マンガと私と猫ブログ。","data":[33,34,53,44,49,39,29,48,41,46,88,41,42,37,39,37,45,34,42,35,40,32,23,40,30,23,20,28]},{"label":"カイカイ反応通信","data":[34,41,42,40,43,46,46,38,38,42,45,43,40,43,44,45,39,43,39,40,43,43,42,43,35,39,39,41]},{"label":"まとめたニュース","data":[35,38,51,49,36,30,37,33,40,37,44,45,53,35,34,41,40,45,45,48,42,44,44,56,42,43,42,50]},{"label":"おーるじゃんる","data":[36,33,40,45,37,37,35,32,37,36,38,33,33,38,41,36,35,40,33,36,39,40,40,31,41,29,30,33]},{"label":"スズぺぺの人生何とかなってます!!","data":[37,35,36,35,35,33,32,31,29,32,33,37,35,39,40,39,34,36,34,32,35,35,36,37,36,36,36,34]},{"label":"ゴールデンタイムズ","data":[38,28,34,37,34,27,30,35,39,29,30,26,26,34,35,30,37,30,28,26,32,30,28,35,34,34,34,36]},{"label":"ゆっぺのゆる漫画ブログ","data":[39,57,45,81,23,57,101,36,28,49,39,30,51,64,101,40,33,53,87,38,101,42,60,46,37,59,41,72]},{"label":"ネギ速","data":[40,43,41,36,33,34,33,40,33,33,36,38,39,41,38,42,38,37,29,41,33,31,35,39,39,37,44,38]},{"label":"カラパイア","data":[41,31,24,38,44,45,40,34,36,41,42,42,36,36,29,33,41,44,41,39,38,41,33,13,19,19,14,3]},{"label":"はむらの毎日マンガ","data":[42,70,29,17,42,28,15,15,44,23,16,15,37,61,25,14,14,38,14,8,8,28,17,12,31,14,10,26]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[43,40,61,60,61,47,45,45,56,58,55,49,58,50,50,62,51,60,52,43,47,58,51,70,44,44,51,55]},{"label":"あいチャンネル","data":[44,36,39,34,41,36,63,55,31,38,34,39,30,40,75,34,36,31,40,28,34,65,32,42,25,35,28,51]},{"label":"ツイッター速報","data":[45,21,5,6,18,29,14,12,6,7,3,9,11,20,13,17,10,11,19,16,19,25,27,4,9,4,8,14]},{"label":"IT速報","data":[46,44,46,47,47,41,43,47,47,43,52,40,43,44,45,47,42,50,44,45,45,46,47,49,53,48,47,45]},{"label":"あおばブログ","data":[47,72,49,43,46,44,66,57,84,63,50,101,75,101,101,101,101,101,101,101,76,86,101,101,101,45,74,101]},{"label":"うちの夫が糖尿病になっちゃった！","data":[48,47,50,46,45,49,48,50,49,75,79,78,78,78,77,83,83,85,89,91,92,101,95,87,80,84,80,77]},{"label":"馬鳥速報","data":[49,49,43,39,32,40,44,53,51,44,48,54,55,63,63,56,52,46,51,54,59,53,53,53,47,51,56,27]},{"label":"ニュースBUZZ","data":[50,54,67,61,67,60,51,66,54,64,77,53,72,77,46,54,47,48,53,61,55,55,90,64,57,91,62,47]},{"label":"【2ch】コピペ情報局","data":[51,51,62,57,54,52,52,58,61,45,49,50,59,53,51,53,54,55,55,51,53,48,59,58,51,58,49,48]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[52,46,44,48,53,55,53,51,50,48,46,51,48,47,48,55,46,42,43,50,49,45,43,48,45,46,48,43]},{"label":"オタク.com －オタコム－","data":[53,56,58,59,57,62,58,59,57,57,54,56,57,52,56,57,59,57,50,58,57,52,52,57,55,55,54,57]},{"label":"サル山の裏マンガ","data":[54,52,56,54,64,53,55,54,53,51,53,64,50,48,47,50,50,49,47,52,54,50,49,51,50,49,50,49]},{"label":"流速VIP","data":[55,50,55,58,52,61,67,67,60,62,56,60,56,55,58,72,68,67,60,60,64,57,56,76,69,67,70,54]},{"label":"人間まおと愉快な仲間たち","data":[56,42,37,32,40,19,20,20,20,21,19,21,17,12,8,7,11,13,9,11,11,11,16,18,21,22,23,13]},{"label":"カオスちゃんねる","data":[57,55,64,65,56,54,54,56,62,65,68,62,60,58,60,63,62,52,57,63,61,49,57,71,58,63,53,53]},{"label":"気になる芸能まとめ","data":[58,65,72,67,69,66,59,61,72,67,61,58,63,59,52,59,53,56,54,65,56,54,62,72,65,60,57,58]},{"label":"阪神タイガースちゃんねる","data":[59,63,69,71,87,86,75,71,34,50,78,75,86,65,68,75,90,81,79,89,82,71,88,81,94,79,85,86]},{"label":"野球お絵かき@なんJまとめ","data":[60,101,101,68,59,90,57,49,101,101,74,69,61,57,89,101,98,68,46,47,58,70,84,101,101,101,101,101]},{"label":"ついんてーる速報","data":[61,64,80,76,71,80,77,82,78,74,76,65,87,67,64,66,77,87,67,72,77,69,80,75,74,61,66,68]},{"label":"なんJ（まとめては）いかんのか？","data":[62,87,65,51,58,65,47,64,73,61,59,52,52,68,61,67,65,62,59,53,52,59,66,44,60,101,78,66]},{"label":"ポリー速報","data":[63,67,73,63,55,51,50,46,55,71,57,55,54,51,55,65,60,54,49,57,48,47,46,52,56,57,59,59]},{"label":"パチンコ・パチスロ.com","data":[64,62,68,55,72,69,72,74,46,55,51,61,69,71,54,58,49,58,63,73,71,72,64,63,61,64,76,74]},{"label":"あにこ便","data":[65,59,70,69,70,71,65,65,58,60,65,66,67,62,59,61,61,63,61,74,67,63,58,60,64,65,65,63]},{"label":"De速","data":[66,48,48,41,65,56,49,41,52,59,58,57,45,45,37,48,55,39,32,44,41,33,38,41,43,52,43,40]},{"label":"海外の万国反応記＠海外の反応","data":[67,69,71,64,62,67,70,73,71,70,60,70,66,60,57,49,64,65,65,59,66,60,73,65,72,66,64,65]},{"label":"働く大人の非常識","data":[68,101,100,101,101,101,73,101,101,77,101,101,70,101,53,69,93,77,101,86,80,97,101,84,66,73,92,101]},{"label":"ガールズVIPまとめ","data":[69,60,60,52,63,70,69,70,63,69,70,74,73,66,66,52,66,59,58,55,46,56,55,62,54,41,45,52]},{"label":"VIP NEWS","data":[70,94,94,85,101,101,101,101,99,101,85,87,89,56,79,101,74,71,101,101,101,101,75,101,83,50,101,88]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[71,78,86,75,77,82,79,89,82,80,67,76,62,69,72,78,78,82,82,56,44,78,81,77,78,82,63,80]},{"label":"ろぼ速VIP","data":[72,84,99,92,95,81,80,92,87,88,91,101,97,101,87,98,99,83,93,93,93,94,99,93,92,94,73,94]},{"label":"軍事・ミリタリー速報☆彡","data":[73,74,79,79,79,77,82,83,76,76,75,72,74,74,65,77,69,61,74,81,74,81,76,78,76,70,75,61]},{"label":"芸能人の気になる噂","data":[74,77,81,87,76,73,81,75,88,84,71,77,83,73,62,70,70,64,62,76,65,61,67,67,68,74,69,82]},{"label":"FF14速報","data":[75,66,59,62,51,72,76,72,66,73,72,79,76,80,86,85,63,76,70,82,83,91,83,54,67,62,68,99]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[76,83,101,101,75,74,84,101,101,72,96,84,101,101,90,84,91,89,81,85,101,68,77,74,101,77,72,95]},{"label":"絵日記でございます。","data":[77,97,101,56,48,50,56,68,65,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,99,101]},{"label":"はーとログ","data":[78,85,84,91,90,85,94,90,91,97,93,81,101,85,97,93,94,100,98,101,91,99,101,92,89,87,77,79]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[79,80,92,77,84,91,101,101,101,93,101,93,91,84,82,94,86,101,99,101,96,85,101,101,98,101,101,101]},{"label":"ライフハックちゃんねる弐式","data":[80,79,76,70,78,68,68,93,70,83,92,73,90,82,80,73,85,73,76,80,79,82,87,88,99,76,71,78]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[81,89,85,101,99,100,98,101,101,101,87,92,79,88,101,90,79,92,101,90,75,88,101,101,101,100,101,101]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[82,81,101,101,85,78,90,97,101,101,101,101,101,101,93,101,101,99,94,99,98,73,91,100,101,89,79,90]},{"label":"サカラボ | サッカーまとめ速報","data":[83,82,87,84,86,83,85,95,89,79,84,71,77,87,76,79,84,94,72,66,101,75,97,66,62,93,84,69]},{"label":"2chコピペ保存道場","data":[84,88,83,99,89,89,86,84,81,85,83,86,84,90,69,71,73,84,92,83,89,98,96,91,86,78,88,84]},{"label":"つんの日常ブログ","data":[85,45,66,101,101,101,71,101,80,27,101,101,46,99,101,101,101,101,91,101,101,101,101,101,101,101,101,101]},{"label":"footballnet【サッカー5chまとめ】","data":[86,101,96,74,88,64,92,85,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101,101,101,101]},{"label":"鷹速@ホークスまとめブログ","data":[87,76,82,73,80,84,88,79,74,53,90,83,81,86,84,81,80,79,83,84,72,64,65,69,79,68,60,75]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[89,96,88,101,83,79,78,69,79,101,101,101,101,101,101,91,95,97,77,101,101,93,93,101,77,97,101,93]},{"label":"登山ちゃんねる","data":[90,90,101,101,101,99,95,77,83,90,101,98,101,83,96,101,88,91,73,96,101,101,101,101,101,101,101,101]},{"label":"ずっと日曜日のターン","data":[91,71,101,78,101,76,99,62,86,86,62,48,71,96,85,101,101,69,66,71,60,101,48,79,101,83,101,60]},{"label":"まとめロッテ！","data":[92,86,95,86,81,88,60,87,85,101,101,101,96,94,70,74,72,90,95,95,70,74,89,98,101,101,101,101]},{"label":"投資ちゃんねる","data":[93,95,101,97,101,94,97,101,100,92,95,82,101,93,92,86,82,86,80,78,84,79,74,97,88,90,82,71]},{"label":"アニはつ -アニメ発信場-","data":[94,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[95,99,101,98,96,93,100,101,101,101,101,90,85,79,81,82,89,88,88,94,101,92,94,101,101,101,101,101]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[96,101,93,96,101,101,101,96,95,99,101,101,101,101,101,101,101,101,101,101,90,62,86,95,59,92,58,83]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[97,93,101,101,101,101,101,94,93,101,101,101,101,101,83,92,101,101,101,101,101,95,98,99,101,101,101,101]},{"label":"鈴木さん速報","data":[98,98,97,93,97,98,101,101,92,96,86,100,95,101,94,88,97,101,97,92,99,96,101,101,101,101,97,98]},{"label":"☆うまなみ・競馬にゅーす速報","data":[99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"PS5速報！","data":[100,75,89,94,60,63,64,63,68,56,63,63,68,95,95,60,58,78,84,87,68,77,68,82,75,56,61,64]},{"label":"たくあんムスメたち。","data":[101,58,12,72,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もっちのママ友トラブル・子育て漫画","data":[101,61,75,101,66,42,42,60,75,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"今日速2ch","data":[101,68,54,101,100,58,83,81,59,52,47,59,47,54,67,64,71,101,101,64,88,101,71,80,73,71,86,73]},{"label":"ぱんをたずねて2000里ちょい","data":[101,73,63,80,68,87,101,76,67,87,73,95,101,76,78,68,76,66,71,68,81,101,85,61,63,88,55,70]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,101,101]},{"label":"素敵な鬼女様","data":[101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"MLB NEWS@まとめ","data":[101,100,98,83,74,97,91,98,97,89,81,89,101,91,71,89,67,75,78,67,73,67,70,89,82,85,87,81]},{"label":"Happy Living　-削ぎ家事研究室-","data":[101,101,27,31,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,57,101,73,101,101,101,101,54,101,68,101,101,101,101,56,101,68,101,101,101,101,59,101,54,101,101]},{"label":"Eorzean","data":[101,101,74,82,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"大相撲データアナリストの大相撲日記","data":[101,101,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ふぇー速","data":[101,101,78,66,82,101,74,101,101,101,101,96,101,89,101,101,101,101,101,101,101,101,101,101,101,101,83,101]},{"label":"ミラクルファミリー","data":[101,101,90,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[101,101,91,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,96,101,101,94,91]},{"label":"ユルクヤル、外国人から見た世界","data":[101,101,101,88,101,101,39,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,89,91,101,93,91,96,101,101,101,93,75,88,101,96,98,101,97,100,89,79,86,90,96,93,76]},{"label":"今日もブブはからまわり。","data":[101,101,101,90,93,101,101,101,101,101,97,94,65,101,101,101,101,70,85,98,101,101,72,101,81,72,89,101]},{"label":"チリツモブログ","data":[101,101,101,95,101,101,101,101,69,101,66,80,82,101,101,95,101,101,101,101,101,101,92,68,93,99,101,101]},{"label":"筋肉速報","data":[101,101,101,100,98,95,87,99,101,101,101,101,100,98,99,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"高槻つーしん","data":[101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[101,101,101,101,94,101,101,101,101,101,89,101,101,101,101,31,101,101,69,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,101,101,101,101,75,101,101,101,101,82,101,101,101,101,76,101,101,101,88,101,101,101,101,84,101,101,101]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,100,101,101,101,101,101,101,101,101,101,101,101]},{"label":"オタクニュース","data":[101,101,101,101,101,96,101,101,101,101,101,101,101,81,101,101,101,101,101,101,101,100,101,101,101,101,101,101]},{"label":"曽山一寿のそやまんがぶろぐ","data":[101,101,101,101,101,101,62,78,101,100,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,96,101,101,101,101,101,101,101,98,101,101,93,86,101,101,84,82,90,96,86,95,87]},{"label":"青木ぼんろの日常","data":[101,101,101,101,101,101,101,42,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"アーノルズはせがわの暇つぶし部屋","data":[101,101,101,101,101,101,101,43,45,68,80,99,80,92,74,101,101,101,101,101,94,101,101,101,101,101,101,101]},{"label":"ぽかぽかびより  (レシピ＆作り方・コツ)","data":[101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,101,101,101,101,101,101,86,101,101,101,101,101,101,101,101,101,101,96,62,85,101,61,101,85,101,67,62]},{"label":"じゃじゃ嫁日記","data":[101,101,101,101,101,101,101,88,77,101,101,101,101,101,101,43,44,47,64,101,101,101,101,101,101,101,101,101]},{"label":"野球の記録で話したい","data":[101,101,101,101,101,101,101,100,101,101,101,101,98,16,28,80,75,101,101,101,78,101,101,101,101,101,101,101]},{"label":"くまニュース","data":[101,101,101,101,101,101,101,101,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"最強ジャンプ放送局","data":[101,101,101,101,101,101,101,101,90,101,101,101,101,101,101,87,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,101,101,101,5,40,47,64,70,73,101,81,74,75,77,63,66,69,83,101,101,101,101]},{"label":"テレビマン漫画家 真船佳奈のトラブルDAYS","data":[101,101,101,101,101,101,101,101,101,81,64,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"修羅場ハザード -復讐・DQN返し・衝撃系まとめ-","data":[101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101]},{"label":"稼げるまとめ速報","data":[101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"シカブロ","data":[101,101,101,101,101,101,101,101,101,95,69,67,101,101,101,101,87,80,90,101,86,76,78,73,71,81,96,67]},{"label":"デジタルニューススレッド","data":[101,101,101,101,101,101,101,101,101,98,101,101,94,101,100,96,101,95,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,101,101,101,1,1,41,101,101,101,101,28,101,46,101,101,101,3,2,80,38,9]},{"label":"ゼンブログのASUS以外","data":[101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,90,100,101,101,101,101,101]},{"label":"えみコミック！","data":[101,101,101,101,101,101,101,101,101,101,99,91,99,101,101,99,101,101,101,101,101,101,101,101,101,101,81,92]},{"label":"あさのの漫画置き場","data":[101,101,101,101,101,101,101,101,101,101,100,85,101,101,101,101,92,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ニンテンドーエブリー","data":[101,101,101,101,101,101,101,101,101,101,101,88,101,101,101,101,101,101,101,101,101,101,50,101,101,101,101,101]},{"label":"えるポピ・ハッピーオタクライフ","data":[101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"らっさむ漫画blog","data":[101,101,101,101,101,101,101,101,101,101,101,101,49,101,101,46,57,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,92,100,101,101,101,101,101,79,97,80,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,29,43,101,101,101,101,101,23,34,63,101,101,101,101,39]},{"label":"ひだまりマーチ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,72,101,101,101,101,56,101,101,101,101,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,100,101,101,100,69,95,83,101,101,101,95,101,101]},{"label":"大艦巨砲主義！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,101,101,101,101,101,85]},{"label":"ダルダルのダル子","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101]},{"label":"Rinのシンプルライフ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,62,87,101,94,91,101,101,101]},{"label":"さといもな日々","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,75,101,101,101,101,101,101,101,101]},{"label":"だったらイケるぜ！blog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,69,101,101,101,101,101,101,101]},{"label":"底辺絵描き・退屈健の毎日カツカツ生活","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,54,101,101,101,101,101]},{"label":"おうちマニア","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,33,97,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,45,52,75,91,97]},{"label":"ベイスターズNEWS","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,101,101,101,101]},{"label":"すぷりんぐのblog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,70,33,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101]},{"label":"会社員倉間のまいにちホリデー！！","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,95,101,101,101]},{"label":"ってなんじぇですかー","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101]},{"label":"かぞくちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"えび通","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89]},{"label":"へー子の漫画日和","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96]},{"label":"ジャンプ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100]}];
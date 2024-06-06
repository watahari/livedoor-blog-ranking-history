var labels = ['2024-05-10','2024-05-11','2024-05-12','2024-05-13','2024-05-14','2024-05-15','2024-05-16','2024-05-17','2024-05-18','2024-05-19','2024-05-20','2024-05-21','2024-05-22','2024-05-23','2024-05-24','2024-05-25','2024-05-26','2024-05-27','2024-05-28','2024-05-29','2024-05-30','2024-05-31','2024-06-01','2024-06-02','2024-06-03','2024-06-04','2024-06-05','2024-06-06',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,2,2,1,1,1,1,1,2,4,1,1,1,2,3,1,1,1,2,3,1,1,2,3,1,1,1,2]},{"label":"オレ的ゲーム速報＠刃","data":[2,1,1,2,2,2,2,2,1,1,2,2,2,1,1,2,2,2,1,1,2,2,1,1,2,2,2,1]},{"label":"はちま起稿","data":[3,3,5,3,3,3,3,3,3,2,3,3,3,3,2,3,5,4,3,4,3,3,3,2,4,3,3,3]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[4,4,3,6,5,4,4,4,4,3,4,4,5,4,4,5,4,3,4,6,4,4,5,4,3,5,5,4]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[5,5,8,7,7,7,7,7,7,6,7,7,7,7,8,7,7,5,5,7,5,6,8,7,5,6,7,8]},{"label":"痛いニュース(ﾉ∀`)","data":[6,7,4,4,6,6,5,5,5,5,8,6,4,5,6,4,3,6,7,8,7,5,4,6,6,4,6,5]},{"label":"ハムスター速報","data":[7,6,7,5,4,5,6,6,6,8,6,5,6,6,5,6,6,7,6,5,6,7,6,5,7,7,4,6]},{"label":"暇つぶしニュース","data":[8,8,6,8,8,8,8,8,9,7,5,8,8,8,7,8,8,8,8,9,8,9,7,8,8,8,8,7]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[9,9,9,9,9,9,9,9,8,9,9,9,9,9,9,9,9,9,9,10,9,10,10,10,11,10,9,11]},{"label":"哲学ニュースnwk","data":[10,10,16,13,16,15,16,12,13,18,18,17,12,14,12,13,13,13,11,13,13,13,14,19,14,15,15,15]},{"label":"なんJ PRIDE","data":[11,13,11,10,12,10,11,11,11,10,10,12,11,11,10,11,12,11,101,101,101,101,101,101,101,101,101,101]},{"label":"【2ch】ニュー速クオリティ","data":[12,12,15,14,14,13,15,13,15,14,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"わんこーる速報！","data":[13,11,12,12,11,11,14,14,16,11,13,14,10,12,14,15,16,17,15,15,12,12,12,12,12,13,14,12]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[14,14,13,11,10,12,12,10,12,13,16,16,16,17,16,16,14,18,16,20,17,18,16,15,18,14,13,13]},{"label":"ラビット速報","data":[15,16,14,15,15,14,17,16,17,17,19,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"もちログ","data":[16,17,17,59,34,23,20,17,19,12,11,10,13,13,11,12,11,14,12,12,10,8,9,9,9,9,10,9]},{"label":"マンガと私と猫ブログ。","data":[17,32,19,27,84,94,10,75,10,36,15,44,18,57,13,68,63,12,72,101,18,32,88,101,75,12,83,101]},{"label":"ねいろ速報さん","data":[18,22,18,16,13,16,18,18,20,20,20,13,19,19,20,19,19,20,14,19,19,19,18,20,19,18,20,17]},{"label":"おーるじゃんる","data":[19,19,20,23,20,21,19,22,18,19,21,23,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"日刊やきう速報","data":[20,15,10,17,24,17,13,19,24,16,17,19,20,18,19,21,17,19,22,14,14,16,17,17,17,25,19,20]},{"label":"稲妻速報","data":[21,25,21,18,17,18,22,20,22,22,23,20,23,24,24,24,24,23,21,21,21,21,25,23,22,23,21,21]},{"label":"ゴールデンタイムズ","data":[22,24,25,25,19,28,29,28,29,27,28,25,29,26,28,25,29,28,25,28,31,24,21,26,25,21,25,23]},{"label":"NEWSぽけまとめーる","data":[23,27,22,24,21,25,24,27,25,24,26,21,17,21,23,28,25,26,28,26,30,27,23,25,101,101,101,101]},{"label":"うしみつ-5chまとめ-","data":[24,26,24,20,18,27,26,21,21,25,22,24,25,23,25,23,23,24,26,23,22,22,26,24,23,26,26,24]},{"label":"チリツモブログ","data":[25,20,45,101,101,101,33,86,41,99,101,38,101,101,52,101,101,101,101,101,101,101,101,101,101,101,61,101]},{"label":"なんJクエスト","data":[26,29,31,26,26,33,31,29,34,28,29,29,32,30,31,31,30,29,29,32,32,28,28,30,28,31,28,26]},{"label":"おうまがタイムズ","data":[27,28,29,28,25,26,28,24,31,31,30,28,27,28,21,18,21,22,19,24,25,26,27,27,21,27,27,27]},{"label":"カイカイ反応通信","data":[28,34,44,43,35,35,38,36,35,38,35,36,36,38,38,39,42,45,38,36,33,31,35,35,40,35,30,37]},{"label":"ぶる速-VIP","data":[29,45,30,40,31,29,27,31,26,23,25,27,28,33,41,41,41,34,33,38,42,55,36,37,36,38,35,31]},{"label":"VIPPERな俺","data":[30,21,23,30,27,19,25,26,23,33,24,26,31,22,26,30,26,35,23,25,35,20,22,18,20,20,22,22]},{"label":"あいチャンネル","data":[31,78,101,34,71,31,80,35,30,76,54,59,30,71,40,93,28,61,35,83,48,35,33,74,29,29,65,101]},{"label":"IT速報","data":[32,35,34,41,36,34,30,34,36,29,31,34,39,35,34,34,38,37,31,34,28,29,29,36,32,33,32,29]},{"label":"ガールズVIPまとめ","data":[33,42,47,50,49,39,36,45,46,45,46,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ヤゴヴのマンガ劇場","data":[34,30,27,29,29,24,21,15,14,15,12,15,14,16,15,14,10,10,10,11,11,11,11,11,10,11,11,10]},{"label":"ネギ速","data":[35,38,39,31,28,41,34,30,32,26,27,30,33,29,22,32,34,32,37,30,29,33,39,31,27,30,29,30]},{"label":"オタク.com －オタコム－","data":[36,40,38,38,33,43,37,39,43,44,36,33,37,42,51,44,44,39,41,44,38,37,40,39,31,36,33,40]},{"label":"ヒマラジオンのブログ！：どうせ生きてるなら動画投稿してみます(ひまらじおん)","data":[37,36,40,42,38,36,61,64,68,40,42,45,45,45,48,43,45,46,44,48,57,46,51,45,35,45,34,50]},{"label":"カラパイア","data":[38,37,41,35,30,37,35,38,40,37,34,31,22,10,30,37,37,36,18,18,24,34,32,34,34,40,40,41]},{"label":"De速","data":[39,41,28,37,64,63,71,59,60,48,56,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめたニュース","data":[40,39,48,39,46,47,52,41,50,50,47,61,47,53,37,26,32,42,48,40,36,42,57,46,46,51,38,36]},{"label":"芸能人の気になる噂","data":[41,44,50,44,43,46,48,43,48,41,38,43,44,51,46,36,39,44,39,42,39,48,41,41,41,43,43,38]},{"label":"海外の万国反応記＠海外の反応","data":[42,49,56,55,54,57,53,49,52,58,53,46,57,52,56,45,53,48,46,58,54,45,45,55,54,52,50,48]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[43,33,37,33,22,22,23,25,27,34,33,39,35,34,36,33,31,27,34,35,37,39,30,38,45,39,36,33]},{"label":"乃木坂46まとめ 1/46","data":[44,31,32,22,23,30,40,33,42,43,48,35,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ついんてーる速報","data":[45,47,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[46,55,46,52,53,56,58,42,49,53,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"カオスちゃんねる","data":[47,53,55,47,37,38,39,44,44,57,44,60,48,47,42,42,56,53,49,50,41,49,46,44,37,42,41,46]},{"label":"PS5速報！","data":[48,46,49,61,41,44,44,50,47,42,58,49,50,49,49,40,47,54,43,46,63,52,34,32,52,44,37,34]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[49,59,58,62,65,51,51,55,28,30,51,65,65,65,62,47,55,52,50,62,62,61,59,56,64,67,62,69]},{"label":"うみこのおとぼけぐらし","data":[50,50,51,56,47,54,55,47,55,66,52,57,60,63,63,55,60,73,54,68,81,65,60,63,62,101,52,67]},{"label":"【2ch】コピペ情報局","data":[51,48,54,54,52,59,59,53,63,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[52,43,35,32,51,40,43,37,38,52,37,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ぱんをたずねて2000里ちょい","data":[53,54,42,36,44,42,49,51,45,46,43,42,52,41,35,35,35,33,30,37,40,30,38,42,38,50,42,32]},{"label":"パチンコ・パチスロ.com","data":[54,62,59,63,32,49,42,40,39,56,49,40,43,48,54,51,57,56,42,49,56,51,44,52,48,53,48,52]},{"label":"ポリー速報","data":[55,58,43,46,50,45,41,48,61,47,55,54,59,43,58,56,50,59,53,53,47,40,42,47,43,54,59,44]},{"label":"働く大人の非常識","data":[56,63,79,92,55,64,69,46,59,61,40,52,56,61,53,57,78,63,57,74,60,54,47,57,101,101,101,101]},{"label":"あにこ便","data":[57,57,57,51,48,52,57,57,51,55,50,50,58,60,64,49,52,49,51,51,59,58,53,53,49,49,46,55]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[58,67,89,97,89,101,101,101,101,67,85,101,101,101,101,101,64,88,95,101,101,101,101,101,101,101,98,101]},{"label":"スズぺぺの人生何とかなってます!!","data":[59,61,60,58,59,58,56,52,53,59,57,58,55,55,55,46,51,79,100,101,52,53,49,49,53,48,47,47]},{"label":"絵日記でございます。","data":[60,56,26,21,40,65,66,88,80,68,69,37,34,46,45,63,80,57,85,84,88,77,66,62,59,66,90,83]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[61,23,62,19,57,20,64,23,56,21,62,22,63,27,101,65,101,101,101,101,101,101,101,101,101,101,96,101]},{"label":"ライフハックちゃんねる弐式","data":[62,74,61,70,68,61,65,68,79,78,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[63,66,68,67,61,62,60,63,64,54,66,64,64,67,68,60,61,70,66,69,68,66,65,65,69,64,60,59]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[64,64,73,72,62,97,86,92,74,80,65,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"流速VIP","data":[65,65,67,57,58,55,46,60,65,65,63,56,61,59,60,64,59,60,62,63,53,63,58,67,67,71,58,60]},{"label":"ずっと日曜日のターン","data":[66,60,64,49,56,69,50,101,62,63,64,63,46,58,66,59,69,72,59,54,50,71,93,72,101,101,101,101]},{"label":"投資ちゃんねる","data":[67,77,75,86,82,70,77,65,69,74,73,76,74,80,80,84,88,78,75,87,72,73,84,81,78,72,74,72]},{"label":"今日速2ch","data":[68,92,80,66,70,79,94,93,71,64,61,68,69,93,94,71,75,77,74,56,80,60,71,58,71,96,101,90]},{"label":"なんJ（まとめては）いかんのか？","data":[69,52,36,45,45,32,32,56,58,39,41,53,42,36,44,50,48,101,101,101,101,101,101,101,101,101,101,101]},{"label":"闇落ち女子トーク","data":[70,93,66,101,73,101,101,91,95,101,90,101,70,101,77,58,74,101,101,101,101,91,54,48,56,55,68,62]},{"label":"鈴木さん速報","data":[71,76,71,68,72,74,83,66,84,86,79,82,78,85,75,79,82,82,79,81,75,84,75,77,101,101,101,101]},{"label":"はーとログ","data":[72,82,86,78,87,73,62,76,72,70,72,69,77,73,70,62,70,71,63,67,65,64,61,66,66,69,72,70]},{"label":"オタクニュース","data":[73,101,93,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,87,101,101,101,101,92,95,101]},{"label":"馬鳥速報","data":[74,51,65,77,66,53,63,61,37,71,82,75,79,78,74,69,79,69,55,64,64,47,55,70,65,41,49,53]},{"label":"鬼女まとめログ｜生活2chまとめブログ","data":[75,97,74,69,95,72,67,74,67,62,74,72,84,81,84,83,90,101,87,61,84,89,95,78,92,60,70,66]},{"label":"スカっとクミさん！戦う女の物語","data":[76,80,87,82,79,75,85,84,91,96,92,89,100,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[77,75,69,65,63,66,68,62,70,72,78,74,67,69,71,77,65,74,68,78,76,80,70,71,63,63,66,75]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[78,95,78,60,67,68,95,71,94,69,71,91,66,68,95,74,66,58,56,55,67,69,67,64,68,90,71,84]},{"label":"ニュースBUZZ","data":[79,73,53,64,69,50,72,79,81,77,94,67,53,64,69,61,58,68,64,88,55,59,87,101,60,59,57,45]},{"label":"軍事・ミリタリー速報☆彡","data":[80,79,96,74,75,71,81,81,75,81,89,77,76,74,78,73,73,75,73,82,85,90,77,86,79,77,73,82]},{"label":"MLB NEWS@まとめ","data":[81,81,83,95,96,80,93,73,85,75,76,70,80,92,96,97,101,101,97,101,97,83,89,99,101,87,84,85]},{"label":"ダイエット速報＠2ちゃんねる","data":[82,87,77,94,78,83,88,82,82,79,100,81,81,88,101,101,92,62,83,71,79,76,85,82,96,78,64,79]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[83,88,97,100,100,60,87,87,76,101,101,97,40,56,59,66,72,98,86,52,58,50,63,60,57,73,78,95]},{"label":"最強ジャンプ放送局","data":[84,91,82,75,60,78,90,78,77,85,91,71,82,89,73,81,83,95,58,70,71,70,74,79,72,58,75,77]},{"label":"ジャンプ速報","data":[85,101,91,93,93,82,89,67,66,60,67,66,71,90,76,96,62,65,67,73,86,85,73,59,51,61,76,91]},{"label":"登山ちゃんねる","data":[86,96,101,85,76,93,78,69,96,83,80,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ろぼ速VIP","data":[87,83,94,80,81,86,54,72,83,88,81,85,90,79,81,85,87,85,78,85,89,82,94,76,77,75,79,81]},{"label":"資格ちゃんねる","data":[88,90,101,101,101,98,98,95,101,101,95,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[89,86,70,89,83,76,84,83,78,73,70,79,94,86,85,91,91,87,77,86,69,79,69,75,70,80,91,78]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[90,94,100,91,99,87,100,97,100,98,86,94,95,99,91,101,94,100,91,96,98,96,97,92,95,94,94,87]},{"label":"人間まおと愉快な仲間たち","data":[91,89,84,83,85,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"お料理速報","data":[92,101,101,81,91,88,76,101,88,101,75,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"くまおのマンガ堂","data":[93,68,81,79,98,101,101,101,92,94,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[94,85,85,76,74,81,82,77,93,91,87,98,97,82,93,87,89,66,69,65,74,72,86,73,90,89,82,92]},{"label":"鷹速@ホークスまとめブログ","data":[95,101,101,101,101,101,101,101,101,101,96,86,85,72,82,101,101,99,90,98,83,86,76,95,85,84,101,98]},{"label":"大艦巨砲主義！","data":[96,101,101,101,101,100,101,98,97,101,101,88,101,101,99,100,101,101,94,89,95,93,96,93,99,93,97,96]},{"label":"気になる芸能まとめ","data":[97,101,101,96,101,95,91,101,101,87,97,100,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめ太郎！","data":[98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"FF14速報","data":[99,69,92,84,101,84,73,70,57,82,77,80,83,97,101,95,101,101,82,80,93,92,78,83,89,62,55,73]},{"label":"稼げるまとめ速報","data":[100,101,101,101,88,96,99,85,87,101,101,101,101,98,97,92,98,101,99,101,96,101,99,101,97,91,101,101]},{"label":"はむらの毎日マンガ","data":[101,18,33,101,101,101,101,101,101,101,101,101,101,62,92,70,67,76,101,101,101,101,101,101,88,101,80,99]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,70,101,101,101,101,70,101,101,101,101,101,101,101,101,78,101,101,101,101,101,101,64,101,101,101,101,101]},{"label":"野球お絵かき@なんJまとめ","data":[101,71,76,99,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つつみのブログ","data":[101,72,101,101,101,101,79,101,73,101,101,101,101,84,101,101,101,101,101,101,78,101,81,101,101,101,101,101]},{"label":"サル山の裏マンガ","data":[101,84,101,101,101,85,101,94,101,93,101,92,101,96,101,86,101,93,101,75,101,88,101,69,101,68,101,61]},{"label":"サカラボ | サッカーまとめ速報","data":[101,98,99,87,92,91,97,99,86,84,88,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"つんの日常ブログ","data":[101,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,83,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめロッテ！","data":[101,100,88,71,101,101,101,101,98,100,93,95,101,94,88,76,81,97,88,57,73,78,79,68,81,101,63,57]},{"label":"ついんてーる速報","data":[101,101,52,48,39,48,47,58,54,49,59,47,54,40,39,38,43,40,36,39,43,44,37,33,47,47,39,49]},{"label":"ツイッター速報","data":[101,101,63,101,101,101,101,100,101,92,83,32,21,31,33,22,20,16,27,43,46,43,91,89,100,99,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,72,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"まとめブレイド","data":[101,101,90,101,90,101,101,101,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"えび通","data":[101,101,95,88,101,99,101,101,99,101,98,101,101,101,101,99,77,86,92,94,101,100,101,97,91,101,92,97]},{"label":"阪神タイガースちゃんねる","data":[101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"世にも奇妙ななんかの話","data":[101,101,101,53,42,101,45,32,101,35,32,101,101,32,32,101,33,41,101,33,23,94,19,22,82,22,12,63]},{"label":"高槻つーしん","data":[101,101,101,73,97,90,101,101,101,101,101,101,92,101,101,101,99,101,96,95,91,67,62,80,101,101,101,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,98,77,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"あんころの漫画日和","data":[101,101,101,101,80,67,74,80,89,97,101,101,96,101,98,88,101,101,80,72,90,74,83,101,93,85,88,101]},{"label":"くま母もよう","data":[101,101,101,101,86,101,75,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"かりんこのかりん党","data":[101,101,101,101,94,77,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"ナイフみたいにとがってら-元反抗期男子と天然男子とアラフィフ母の日常コミックエッセイ-","data":[101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,101,101,101,92,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101]},{"label":"キチガイママまとめ保管庫","data":[101,101,101,101,101,101,92,90,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"埼玉には何もない。＠埼玉西武ライオンズブログ","data":[101,101,101,101,101,101,101,54,33,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,101,101,101,101]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,101,101,101,32,45,101,101,101,101,101,101,101,101,93,101,101,101,101,101,101,101,101]},{"label":"おる速","data":[101,101,101,101,101,101,101,101,101,89,99,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,101,101,101,101,101,101,101,101,90,101,99,99,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"「moroの家族と、ハンドメイドと。」moroオフィシャルブログ","data":[101,101,101,101,101,101,101,101,101,95,101,101,101,101,101,101,101,101,101,2,51,101,101,101,101,101,101,101]},{"label":"【2ch】ニュー速クオリティ","data":[101,101,101,101,101,101,101,101,101,101,14,11,15,15,17,17,15,15,17,16,16,14,13,13,16,17,16,14]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[101,101,101,101,101,101,101,101,101,101,39,48,49,44,47,52,49,51,52,41,44,36,43,50,44,37,45,51]},{"label":"【2ch】コピペ情報局","data":[101,101,101,101,101,101,101,101,101,101,60,62,68,70,65,67,71,64,61,60,66,68,72,61,61,70,69,68]},{"label":"ライフハックちゃんねる弐式","data":[101,101,101,101,101,101,101,101,101,101,68,73,88,75,83,82,76,84,81,77,82,81,68,85,84,83,87,80]},{"label":"footballnet【サッカーまとめ】","data":[101,101,101,101,101,101,101,101,101,101,84,101,101,101,101,98,93,101,101,101,101,101,101,101,101,97,77,64]},{"label":"ラビット速報","data":[101,101,101,101,101,101,101,101,101,101,101,18,24,20,18,20,22,25,20,22,20,17,20,21,15,19,18,16]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,41,41,39,43,29,36,30,40,31,34,38,31,28,30,32,31,39]},{"label":"サカラボ | サッカーまとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,78,89,95,86,80,95,81,76,90,100,87,80,96,76,79,86,76]},{"label":"De速","data":[101,101,101,101,101,101,101,101,101,101,101,83,62,50,57,54,54,55,71,59,70,62,50,40,42,56,53,58]},{"label":"お料理速報","data":[101,101,101,101,101,101,101,101,101,101,101,84,93,91,101,89,97,92,84,79,92,99,98,100,73,76,99,86]},{"label":"資格ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,87,73,100,89,101,101,90,101,101,101,97,92,101,101,101,101,101]},{"label":"カエルDXのオタ活日記","data":[101,101,101,101,101,101,101,101,101,101,101,90,75,66,67,72,84,80,101,101,101,101,101,101,101,101,101,94]},{"label":"登山ちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,93,87,76,79,101,85,67,60,76,77,75,90,84,83,86,81,74]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"おーるじゃんる","data":[101,101,101,101,101,101,101,101,101,101,101,101,26,25,27,27,18,21,24,29,27,23,24,29,26,24,24,18]},{"label":"乃木坂46まとめ 1/46","data":[101,101,101,101,101,101,101,101,101,101,101,101,38,37,50,48,40,38,47,45,49,25,48,54,58,34,56,35]},{"label":"ガールズVIPまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,51,54,61,53,46,43,45,47,45,56,56,51,55,46,44,42]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[101,101,101,101,101,101,101,101,101,101,101,101,72,77,72,75,68,50,65,66,61,57,82,91,80,82,85,88]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,101,101,101,101,101,101,86,87,87,101,101,94,101,101,99,101,101,101,101,101,101,101]},{"label":"Odapedia ～小田急のファンブログ～","data":[101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,83,101,101,101,101,89,101,101,101,101,101,101,88,89,65]},{"label":"甘辛ミックス","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,29,90,101,101,101,101,101,101,101,101,101,101,101,101]},{"label":"阪神タイガースちゃんねる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,94,100,101,101,101,101,95,101,94,101,101,101,93]},{"label":"かぼすちゃんとおさんぽ。","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,10,27,91,101,101,101,101,101,101,101,101,101,101]},{"label":"新・規格外でもいいじゃない!!～シングルマザーたまことゆかいな子ども達～","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,93,97,101,101,101,101,101,101,101,101]},{"label":"はいどろ漫画","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,31,32,101,101,101,101,101,101,101,101,101]},{"label":"なんJ（まとめては）いかんのか？","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,47,70,27,26,41,52,43,39,65,54,43]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89,101,101,101,101,101,101,101,101,101,101]},{"label":"☆うまなみ・競馬にゅーす速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,96,101,101,101,101,101,101,101,101,101,101]},{"label":"なんJ PRIDE","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,13,17,15,15,15,14,13,16,17,19]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101,101,101,101]},{"label":"ぽんぽん子育て","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,91,101,101,101,101,101,101,101,101]},{"label":"ベイスターズ速報＠なんJ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,92,101,101,101,101,101,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,99,101,101,100,101,101,101,101,101]},{"label":"尾持トモの漫画blog","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101,101,95,101,101]},{"label":"ファイターズ王国＠日ハムまとめブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,98,101,101,101,101,101,101]},{"label":"しばたまブログ","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,16,33,101,101,101]},{"label":"富山デイズ - 富山県富山市の地域情報サイト","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,88,98,101,101,101]},{"label":"長崎＠諫早市民 ふくちゃんの食う・寝る・遊ぶ日記","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,90,101,101,101,101]},{"label":"NEWSぽけまとめーる","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,24,28,23,25]},{"label":"働く大人の非常識","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,50,81,51,56]},{"label":"ずっと日曜日のターン","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,74,57,93,54]},{"label":"鈴木さん速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,86,74,67,71]},{"label":"筋肉速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,87,98,101,101]},{"label":"生活保護パチプロ黙死録 下妬景樹の一生","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,94,101,101,101]},{"label":"日向坂46まとめ速報","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,100,101,100]},{"label":"あいチャンネル","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,28]},{"label":"web漫画家やしろあずきの日常","data":[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,89]}];
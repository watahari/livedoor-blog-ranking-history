var labels = ['2024-03-24','2024-03-25','2024-03-26','2024-03-27','2024-03-28','2024-03-29','2024-03-30',];var datasets = [{"label":"オレ的ゲーム速報＠刃","data":[1,2,2,3,1,1,2]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[2,3,3,4,4,5,3]},{"label":"まめきちまめこニートの日常","data":[3,1,1,1,2,3,1]},{"label":"はちま起稿","data":[4,4,4,5,5,2,4]},{"label":"ハムスター速報","data":[5,5,5,2,3,4,5]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[6,6,6,6,6,6,6]},{"label":"ヤゴヴのマンガ劇場","data":[7,9,10,10,11,10,10]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[8,8,9,9,8,9,9]},{"label":"痛いニュース(ﾉ∀`)","data":[9,10,7,7,9,7,7]},{"label":"暇つぶしニュース","data":[10,7,8,8,7,8,8]},{"label":"なんJ PRIDE","data":[11,11,12,12,13,14,12]},{"label":"BIPブログ","data":[12,13,13,11,10,11,11]},{"label":"わんこーる速報！","data":[13,12,15,14,16,16,16]},{"label":"哲学ニュースnwk","data":[14,16,11,17,12,13,13]},{"label":"もちログ","data":[15,15,16,15,14,15,15]},{"label":"【2ch】ニュー速クオリティ","data":[16,17,18,16,15,17,18]},{"label":"日刊やきう速報","data":[17,27,22,21,23,29,17]},{"label":"おーるじゃんる","data":[18,23,27,26,28,30,30]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[19,18,20,18,21,22,19]},{"label":"ねいろ速報さん","data":[20,21,17,19,19,20,20]},{"label":"ぶる速-VIP","data":[21,20,21,20,18,19,23]},{"label":"ラビット速報","data":[22,22,25,23,22,18,21]},{"label":"なんJクエスト","data":[23,32,28,25,30,23,26]},{"label":"ネギ速","data":[24,28,30,27,25,26,29]},{"label":"NEWSぽけまとめーる","data":[25,29,23,28,29,28,25]},{"label":"稲妻速報","data":[26,30,26,24,27,27,31]},{"label":"ゴールデンタイムズ","data":[27,19,24,22,32,35,28]},{"label":"うしみつ-5chまとめ-","data":[28,26,31,31,31,25,27]},{"label":"おうまがタイムズ","data":[29,25,29,34,26,31,24]},{"label":"はむらの毎日マンガ","data":[30,60,19,29,101,101,101]},{"label":"VIPPERな俺","data":[31,31,33,30,24,21,22]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[32,40,41,39,38,41,40]},{"label":"カイカイ反応通信","data":[33,39,36,32,35,33,36]},{"label":"カラパイア","data":[34,35,35,36,36,37,38]},{"label":"まとめたニュース","data":[35,33,42,52,34,24,35]},{"label":"ガールズVIPまとめ","data":[36,38,38,41,47,42,57]},{"label":"IT速報","data":[37,36,39,44,40,38,50]},{"label":"スズぺぺの人生何とかなってます!!","data":[38,37,40,37,37,39,41]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[39,41,43,33,39,34,33]},{"label":"De速","data":[40,46,45,38,45,46,34]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[41,101,46,47,101,101,44]},{"label":"あにこ便","data":[42,49,52,59,55,56,53]},{"label":"ふくよかまるみのピリカラ人生","data":[43,95,32,50,101,101,101]},{"label":"カオスちゃんねる","data":[44,43,48,57,49,44,45]},{"label":"オタク.com －オタコム－","data":[45,44,37,42,42,43,49]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[46,53,54,60,44,47,42]},{"label":"ポリー速報","data":[47,42,49,43,48,55,51]},{"label":"ニュースBUZZ","data":[48,63,65,61,58,62,93]},{"label":"芸能人の気になる噂","data":[49,48,47,49,51,53,52]},{"label":"【2ch】コピペ情報局","data":[50,51,53,40,41,51,54]},{"label":"海外の万国反応記＠海外の反応","data":[51,45,51,46,43,48,37]},{"label":"PS5速報！","data":[52,50,50,51,46,54,56]},{"label":"世にも奇妙ななんかの話","data":[53,14,14,13,53,12,14]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[54,98,83,100,69,87,78]},{"label":"乃木坂46まとめ 1/46","data":[55,34,44,35,33,36,32]},{"label":"ついんてーる速報","data":[56,58,56,54,50,45,48]},{"label":"今日速2ch","data":[57,73,58,56,60,65,67]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[58,52,57,82,73,40,55]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[59,55,62,80,98,88,101]},{"label":"MLB NEWS@まとめ","data":[60,68,79,65,83,83,79]},{"label":"なんJ（まとめては）いかんのか？","data":[61,64,64,58,57,63,43]},{"label":"ずっと日曜日のターン","data":[62,62,68,48,61,49,46]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[63,56,63,66,64,60,60]},{"label":"ジャンプ速報","data":[64,59,61,81,70,61,58]},{"label":"ぱんをたずねて2000里ちょい","data":[65,65,70,75,82,69,65]},{"label":"おる速","data":[66,57,78,62,72,64,64]},{"label":"ライフハックちゃんねる弐式","data":[67,84,67,67,63,66,61]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[68,88,101,101,80,71,77]},{"label":"あいチャンネル","data":[69,24,34,73,20,52,47]},{"label":"流速VIP","data":[70,54,59,70,52,59,62]},{"label":"投資ちゃんねる","data":[71,80,77,69,75,76,68]},{"label":"軍事・ミリタリー速報☆彡","data":[72,76,75,74,62,72,80]},{"label":"パチンコ・パチスロ.com","data":[73,66,55,55,56,58,39]},{"label":"働く大人の非常識","data":[74,94,88,63,54,67,101]},{"label":"くまおのマンガ堂","data":[75,69,80,76,78,75,73]},{"label":"馬鳥速報","data":[76,47,66,78,88,91,76]},{"label":"ツイッター速報","data":[77,101,101,101,101,101,101]},{"label":"2chコピペ保存道場","data":[78,67,76,77,67,73,72]},{"label":"はーとログ","data":[79,74,84,68,74,77,83]},{"label":"鈴木さん速報","data":[80,81,82,90,76,78,92]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[81,78,73,45,77,57,71]},{"label":"絵日記でございます。","data":[82,100,100,94,93,99,90]},{"label":"ろぼ速VIP","data":[83,72,90,88,71,68,82]},{"label":"登山ちゃんねる","data":[84,61,74,83,97,81,81]},{"label":"サカラボ | サッカーまとめ速報","data":[85,75,92,71,85,86,87]},{"label":"まとめブレイド","data":[86,101,95,101,101,82,70]},{"label":"うみこのおとぼけぐらし","data":[87,77,72,72,66,74,75]},{"label":"高槻つーしん","data":[88,93,101,101,101,95,101]},{"label":"最強ジャンプ放送局","data":[89,90,71,86,87,80,94]},{"label":"まとめロッテ！","data":[90,70,85,101,101,97,96]},{"label":"ダイエット速報＠2ちゃんねる","data":[91,85,87,84,79,98,98]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[92,83,98,89,89,85,91]},{"label":"まとめ太郎！","data":[93,101,93,95,101,101,101]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[94,87,81,85,86,90,88]},{"label":"人間まおと愉快な仲間たち","data":[95,101,101,101,101,101,101]},{"label":"デジタルニューススレッド","data":[96,92,89,87,84,79,89]},{"label":"気になる芸能まとめ","data":[97,86,101,99,95,100,101]},{"label":"大艦巨砲主義！","data":[98,96,94,98,94,92,97]},{"label":"オタクニュース","data":[99,101,101,101,101,101,101]},{"label":"筋肉速報","data":[100,101,101,101,101,101,101]},{"label":"FF14速報","data":[101,71,99,101,100,101,101]},{"label":"資格ちゃんねる","data":[101,79,91,97,81,101,101]},{"label":"お料理速報","data":[101,82,86,101,96,101,99]},{"label":"稼げるまとめ速報","data":[101,89,101,101,101,101,101]},{"label":"イミフｗｗｗ","data":[101,91,96,101,101,93,95]},{"label":"鷹速@ホークスまとめブログ","data":[101,97,101,91,99,84,86]},{"label":"日向坂46まとめ速報","data":[101,99,101,101,92,101,101]},{"label":"マンガと私と猫ブログ。","data":[101,101,60,53,101,50,63]},{"label":"つつみのブログ","data":[101,101,69,101,68,101,101]},{"label":"えび通","data":[101,101,97,101,101,96,101]},{"label":"ながの通信 - 長野県長野市の地域情報サイト","data":[101,101,101,64,90,101,101]},{"label":"つんの日常ブログ","data":[101,101,101,79,101,101,101]},{"label":"うつのみや通信 - 栃木県宇都宮市の地域情報サイト","data":[101,101,101,92,101,101,101]},{"label":"五箇野人の海外旅日記","data":[101,101,101,93,101,101,101]},{"label":"☆まかりな☆のにこにこ漫画ブログ","data":[101,101,101,96,91,70,74]},{"label":"はむらの毎日マンガ","data":[101,101,101,101,17,32,59]},{"label":"ゆっぺのゆる漫画ブログ","data":[101,101,101,101,59,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,65,101,101]},{"label":"やみ速@なんJ西武まとめ","data":[101,101,101,101,101,89,69]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,101,101,101,101,94,84]},{"label":"らばQ","data":[101,101,101,101,101,101,66]},{"label":"野球お絵かき@なんJまとめ","data":[101,101,101,101,101,101,85]},{"label":"竜速（りゅうそく）","data":[101,101,101,101,101,101,100]}];
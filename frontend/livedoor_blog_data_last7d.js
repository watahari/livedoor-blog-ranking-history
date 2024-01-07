var labels = ['2024-01-01','2024-01-02','2024-01-03','2024-01-04','2024-01-05','2024-01-06','2024-01-07',];var datasets = [{"label":"まめきちまめこニートの日常","data":[1,11,15,1,1,1,1]},{"label":"オレ的ゲーム速報＠刃","data":[2,1,2,2,2,2,2]},{"label":"はちま起稿","data":[3,2,3,3,3,5,3]},{"label":"暇つぶしニュース","data":[4,7,4,4,7,10,6]},{"label":"なんじぇいスタジアム＠なんJまとめ","data":[5,4,7,5,6,6,7]},{"label":"ハムスター速報","data":[6,3,5,7,5,3,5]},{"label":"不思議.net - 5ch(2ch)まとめサイト","data":[7,9,8,6,4,4,4]},{"label":"痛いニュース(ﾉ∀`)","data":[8,8,9,9,9,7,10]},{"label":"ヤゴヴのマンガ劇場","data":[9,10,10,10,18,11,9]},{"label":"哲学ニュースnwk","data":[10,5,11,11,10,8,11]},{"label":"アルファルファモザイク＠ネットニュースのまとめ","data":[11,6,6,8,8,9,8]},{"label":"なんJ PRIDE","data":[12,13,12,13,13,13,14]},{"label":"【2ch】ニュー速クオリティ","data":[13,14,14,12,11,14,12]},{"label":"わんこーる速報！","data":[14,16,18,16,12,12,13]},{"label":"NEWSまとめもりー｜2chまとめブログ","data":[15,12,13,14,14,16,16]},{"label":"BIPブログ","data":[16,19,30,40,36,36,35]},{"label":"ラビット速報","data":[17,15,19,20,17,17,19]},{"label":"ゴールデンタイムズ","data":[18,18,21,24,24,19,23]},{"label":"ねいろ速報さん","data":[19,25,28,26,21,21,17]},{"label":"NEWSぽけまとめーる","data":[20,17,22,17,15,22,20]},{"label":"なんJクエスト","data":[21,21,23,19,16,20,22]},{"label":"もちログ","data":[22,27,17,15,39,37,36]},{"label":"稲妻速報","data":[23,22,26,23,20,24,25]},{"label":"ネギ速","data":[24,23,20,25,28,28,33]},{"label":"うしみつ-5chまとめ-","data":[25,28,29,27,23,23,21]},{"label":"日刊やきう速報","data":[26,26,27,28,27,25,27]},{"label":"おーるじゃんる","data":[27,20,16,18,19,15,15]},{"label":"IT速報","data":[28,30,37,33,26,35,38]},{"label":"VIPPERな俺","data":[29,24,24,21,22,18,24]},{"label":"ぶる速-VIP","data":[30,29,33,32,25,27,26]},{"label":"おうまがタイムズ","data":[31,35,31,53,46,34,40]},{"label":"ガハろぐNewsヽ(･ω･)/ｽﾞｺｰ","data":[32,33,38,29,35,29,31]},{"label":"はむらの毎日マンガ","data":[33,43,101,101,101,101,101]},{"label":"パチンコ・パチスロ.com","data":[34,49,45,52,77,72,69]},{"label":"凹凸ちゃんねる　発達障害・生きにくい人のまとめ","data":[35,31,36,34,34,31,37]},{"label":"カラパイア","data":[36,38,39,35,32,32,34]},{"label":"あいチャンネル","data":[37,71,41,81,30,30,83]},{"label":"ツイッター速報","data":[38,65,47,50,87,83,18]},{"label":"ガールズVIPまとめ","data":[39,34,34,31,31,38,32]},{"label":"カオスちゃんねる","data":[40,45,42,36,33,42,43]},{"label":"乃木坂46まとめ 1/46","data":[41,46,25,37,40,33,28]},{"label":"【2ch】コピペ情報局","data":[42,39,46,45,38,44,39]},{"label":"まとめたニュース","data":[43,32,32,30,29,26,30]},{"label":"オタク.com －オタコム－","data":[44,37,40,39,42,43,45]},{"label":"ついんてーる速報","data":[45,42,44,41,45,45,44]},{"label":"ゆっぺのゆる漫画ブログ","data":[46,88,100,101,101,101,101]},{"label":"芸能人の気になる噂","data":[47,41,43,42,41,41,41]},{"label":"カイカイ反応通信","data":[48,53,58,62,61,39,29]},{"label":"海外の万国反応記＠海外の反応","data":[49,40,35,38,43,40,49]},{"label":"スズぺぺの人生何とかなってます!!","data":[50,83,101,101,50,48,51]},{"label":"今日速2ch","data":[51,36,49,43,67,77,79]},{"label":"コミックエッセイ えむふじんがあらわれた","data":[52,58,52,48,49,52,42]},{"label":"流速VIP","data":[53,60,56,55,55,60,63]},{"label":"青木ぼんろの日常","data":[54,101,101,101,101,101,101]},{"label":"ポリー速報","data":[55,48,57,49,54,62,57]},{"label":"ニュースBUZZ","data":[56,59,60,61,37,84,95]},{"label":"世にも奇妙ななんかの話","data":[57,101,101,101,101,93,73]},{"label":"オタクニュース","data":[58,47,50,46,101,101,101]},{"label":"PS5速報！","data":[59,72,89,75,58,56,64]},{"label":"まとめブレイド","data":[60,74,65,69,96,65,70]},{"label":"ぱんをたずねて2000里ちょい","data":[61,51,51,47,47,49,58]},{"label":"あにこ便","data":[62,66,68,68,63,59,54]},{"label":"バラシ屋トシヤの漫画ブログ","data":[63,52,53,51,48,53,52]},{"label":"あさことはぎゆうの漫画おきば","data":[64,63,70,58,52,55,60]},{"label":"銃とバッジは置いていけ","data":[65,91,101,101,101,101,101]},{"label":"De速","data":[66,64,80,95,85,63,67]},{"label":"スターライト速報 -遊戯王OCG情報まとめ-","data":[67,55,63,72,65,66,76]},{"label":"投資ちゃんねる","data":[68,61,64,60,60,64,81]},{"label":"2chコピペ保存道場","data":[69,67,72,76,72,68,68]},{"label":"なんJ（まとめては）いかんのか？","data":[70,76,101,80,101,101,91]},{"label":"ずっと日曜日のターン","data":[71,44,48,44,44,46,47]},{"label":"登山ちゃんねる","data":[72,73,59,63,76,75,89]},{"label":"ミニゴブ速報 ～グラブルまとめ～","data":[73,85,92,90,98,95,99]},{"label":"軍事・ミリタリー速報☆彡","data":[74,57,61,57,56,61,74]},{"label":"うみこのおとぼけぐらし","data":[75,101,55,101,51,101,59]},{"label":"にいがた通信 - 新潟県新潟市の地域情報サイト","data":[76,101,101,101,101,76,61]},{"label":"広島東洋カープまとめブログ | かーぷぶーん","data":[77,81,79,54,57,54,48]},{"label":"ライフハックちゃんねる弐式","data":[78,70,86,77,81,78,55]},{"label":"サカラボ | サッカーまとめ速報","data":[79,54,69,88,69,71,78]},{"label":"はーとログ","data":[80,69,81,71,82,94,87]},{"label":"ふくよかまるみのピリカラ人生","data":[81,50,91,101,101,101,101]},{"label":"カータンBLOG　あたし・主婦の頭の中","data":[82,97,88,67,59,58,93]},{"label":"人間まおと愉快な仲間たち","data":[83,78,62,70,62,51,56]},{"label":"鈴木さん速報","data":[84,80,82,73,89,82,85]},{"label":"MLB NEWS@まとめ","data":[85,101,74,74,90,101,101]},{"label":"働く大人の非常識","data":[86,89,87,56,53,50,50]},{"label":"やみ速@なんJ西武まとめ","data":[87,79,71,101,101,99,101]},{"label":"おたみの日々","data":[88,101,101,93,101,101,101]},{"label":"デジタルニューススレッド","data":[89,68,73,64,79,80,94]},{"label":"ろぼ速VIP","data":[90,90,94,79,83,88,77]},{"label":"馬鳥速報","data":[91,56,83,66,73,57,75]},{"label":"鷹速@ホークスまとめブログ","data":[92,92,84,59,70,74,82]},{"label":"曽山一寿のそやまんがぶろぐ","data":[93,101,101,101,101,101,101]},{"label":"お料理速報","data":[94,94,93,91,86,79,101]},{"label":"まとめロッテ！","data":[95,87,90,101,99,73,84]},{"label":"最強ジャンプ放送局","data":[96,86,101,101,91,97,88]},{"label":"気になる芸能まとめ","data":[97,82,78,65,66,81,80]},{"label":"GUNDAM.LOG｜ガンダムまとめブログ","data":[98,101,101,100,100,96,101]},{"label":"つんの日常ブログ","data":[99,101,101,101,101,101,101]},{"label":"一人暮らしカマタミワの半径3メートルのカオス","data":[100,101,101,99,101,101,101]},{"label":"※非公式 刀剣乱舞(とうらぶ)攻略速報","data":[101,62,66,84,75,90,98]},{"label":"バイク速報","data":[101,75,101,101,101,101,101]},{"label":"資格ちゃんねる","data":[101,77,77,83,78,85,101]},{"label":"おる速","data":[101,84,95,78,93,98,90]},{"label":"大艦巨砲主義！","data":[101,93,76,85,80,89,97]},{"label":"阪神タイガースちゃんねる","data":[101,95,96,101,101,101,101]},{"label":"はなまるのblog","data":[101,96,101,101,101,101,101]},{"label":"えび通","data":[101,98,101,101,92,100,101]},{"label":"ツバメ速報＠ヤクルトスワローズまとめ","data":[101,99,101,97,101,101,101]},{"label":"日向坂46まとめもり～","data":[101,100,97,101,101,101,101]},{"label":"日本と韓国は敵か？味方か？　일본과 한국은 적? 아군인가?","data":[101,101,1,22,101,101,101]},{"label":"YoMuRy - ヨムリー -","data":[101,101,54,92,101,101,101]},{"label":"超絶\"厳選\"ニュースまとめch","data":[101,101,67,101,101,101,101]},{"label":"山田全自動のあるある日記","data":[101,101,75,101,101,101,101]},{"label":"稼げるまとめ速報","data":[101,101,85,87,101,92,101]},{"label":"海外反応！　I LOVE JAPAN　","data":[101,101,98,101,101,101,101]},{"label":"ジャンプ速報","data":[101,101,99,82,74,69,65]},{"label":"まとめ太郎！","data":[101,101,101,86,71,87,72]},{"label":"くまおのマンガ堂","data":[101,101,101,89,84,70,71]},{"label":"妊活は忍活?!アラフォー不妊治療体験記－その後－","data":[101,101,101,94,97,101,101]},{"label":"なにかと徒然クライシス / 星田つまみ","data":[101,101,101,96,101,101,101]},{"label":"トイロ公式ブログ【日々のこと～暮らしを彩る料理とモノ～】","data":[101,101,101,98,101,101,101]},{"label":"チリツモブログ","data":[101,101,101,101,64,101,46]},{"label":"スマブラ屋さん | スマブラSPまとめ攻略","data":[101,101,101,101,68,101,101]},{"label":"VIP NEWS","data":[101,101,101,101,88,101,101]},{"label":"絵日記でございます。","data":[101,101,101,101,94,67,62]},{"label":"ニュース30over","data":[101,101,101,101,95,101,101]},{"label":"NPO法人ペット里親会","data":[101,101,101,101,101,47,53]},{"label":"ﾈｺﾁｬﾝのﾆﾝｹﾞﾝ育成日記","data":[101,101,101,101,101,86,101]},{"label":"FF14速報","data":[101,101,101,101,101,91,66]},{"label":"ダイエット速報＠2ちゃんねる","data":[101,101,101,101,101,101,86]},{"label":"ダンナ様は安月給","data":[101,101,101,101,101,101,92]},{"label":"遊戯王&ドラゴンボール通販予約情報局","data":[101,101,101,101,101,101,96]},{"label":"コノユビニュース","data":[101,101,101,101,101,101,100]}];
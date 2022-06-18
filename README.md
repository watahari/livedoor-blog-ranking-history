# ranking-history-test

```
.
├── README.md
├── .gitignore
├── .node-version
├── scrape.mjs # backend
├── package.json # backend
├── package-lock.json # backend
├── data # backend output
│   ├── yyyy-mm-dd.json
│   └── yyyy-mm-dd.json
└── frontend
     ├── data_last7d.js # backend output for frontend
     └── index.html ## static frontend
```

## backend
### ながれ
- UTCのお昼にScrape Data GitHub Actionが起動 `.github/workflows/scrape.yml`
    - npm install
    - Scrape step ( `npm run scrape` )
        - scrape.mjsが起動
            - node-fetchでスクレイピングして、JSDOMでパース
            - `/data/yyyy-mm-dd.json` に書き出す
    - Format data step ( `npm run format` )
        - format.mjsが起動
            - `/data/yyyy-mm-dd.json` を読み込み
            - ユニークURLリストを生成
            - 各URLについて、順位履歴を作成
            - frontendが読めるJavaScriptの形で出力
    - git commit

### 参考にしたもの Spacial thanks.
- GitHub Actionsによるスクレイピングの素晴らしいアイディア https://www.swyx.io/github-scraping
- 同上実装 https://github.com/sw-yx/gh-action-data-scraping
- Node.jsでのスクレイピング各種方式 https://qiita.com/otchy/items/244c19c561ecb7211fa5
- GitHub Actions trigger https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows
- JSdomにおけるinnterText https://github.com/jsdom/jsdom/issues/1245
- ESmoduleの読み込み方 https://blog.kimizuka.org/entry/2021/09/10/223310
- ESmoduleの場合の `__dirname` 代替 http://var.blog.jp/archives/75679197.html
- GitHub Actions timeout 設定 https://qiita.com/chihiro/items/341b579a07fac35fd1d7

## frontend
### 概要
- backendで作ったdata.jsonを読み込んで、Chart.jsでグラフ化しているだけ

### メモ
chartjs-plugin-colorschemesがchart.js2系にしか対応していないので、2系を利用している。

### 参考にしたもの Spacial thanks.
- 公式(2系) https://www.chartjs.org/docs/2.9.4/
- 非公式日本語訳(2系) https://misc.0o0o.org/chartjs-doc-ja/
- 定番 https://www.tohoho-web.com/ex/chartjs.html
- X軸のランキング化 https://tadamiya54.hatenablog.com/entry/2018/02/11/030723
- Chart.jsの凡例をクリックすると、デフォルトでは「クリックしたdatasetの表示/非表示を切り替え」であるが、「クリックしたdatasetだけ表示」にしたかったので参考にした https://codepen.io/jordanwillis/pen/BWKKKo?editors=0010
- chartjs-plugin-colorschemes https://nagix.github.io/chartjs-plugin-colorschemes/ja/

# React-Redux 上に、immutable.js を使って Model を作成する

## プレビュー

[https://wusagi24.github.io/react-redux-model/](https://wusagi24.github.io/react-redux-model/)

SPサイズのみ

## これ何？

**React** + **Redux** パターンに **immutable.js** を使って **Model** 層？を設けるっていうのをやってみたかった。

あと、 **redux-saga** とか React + Redux での **ユニットテスト** とか新しい **react-redux-router** とか、SPA な React + Redux アプリで試してみたいこといろいろ試してみる。

モチベーションのため、私が好きなアーティストの「楽曲リストアプリ」という内容。

技術を手段じゃなく目的にしてるので UX 的なことは２の次。でも、出来ることはしたい。

とりあえず、 **SP 向けの Webアプリケーション** として UI を構築。


## いま思ってること

- React/Redux の構成まわり、調べれば調べるほど自信が持てなくなる…

- React コンポーネント（とくに UI フレームワークを使用している場合）のテストがよくわかんない。

- ビルドタスクの自動化に自前スクリプト書いたら、可読性がものすごく低下した感がある（とくに `webpack-dev-server` 周り）。  
悲しみ…


## 既知の問題

[issues](https://github.com/wusagi24/react-redux-model/issues) に移動


## やる

[issues](https://github.com/wusagi24/react-redux-model/issues) に移動


## やりたい

順不同

- 楽曲ごとの詳細画面の作成
- 楽曲を収録している「商品（CD）リスト」の取り扱い
- 文字列による Like 検索の実装
- ソート条件を URL に乗せて、history と連動させる
- Redux 的 component と container の切り分けの再考
- その他もろもろロジック全般の最適化
- UIの再考・改善
    * ソート項目が今ダイアログになってるけど、下から出てくるタイプのモーダルにしたい。
    * 画面遷移アニメーション・マイクロインタラクションの実装検討


## やらない

- PWA 化
- 楽曲データを管理・提供する WebAPI の作成
- 第三者に使ってもらうためのアプリ企画・構築
- PC に最適化した UI 作成
- サーバサイドレンダリング


## 主に使ってる（使おうとしている）技術

* ES2015 ～
* React
* Redux
* immutable.js
* redux-saga
* react-redux-router
* mocha + power-assert + enzyme + jsdom
